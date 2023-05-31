---
slug: AutoreleasePool
title: 从 iOS AutoreleasePool 到编译器优化
author: YoloMao
author_title: GrowingIO SDK Team
author_url: https://github.com/YoloMao
author_image_url: https://avatars.githubusercontent.com/u/16042670?v=4
tags: [iOS, AutoreleasePool, 编译器优化]
---

main.m 中的 AutoreleasePool
某次偶然发现main.m里的 main 函数有所变化，经过一番查询[1]，发现是从 Xcode 11 开始。
<ImageLoader path="blog/autoreleasepool/autoreleasepool-1" />
而在此之前， main 函数的实现为：
<ImageLoader path="blog/autoreleasepool/autoreleasepool-2" />

<!--truncate-->

熟悉 AutoreleasePool 底层原理的同学应该都知道，在@autoreleasepool作用范围内生成的对象，在 ARC 的作用下，将加入自动释放池。如 Xcode 11 之前的 main 函数，实际内存管理将大概会展开为以下实现：
```c
int main(int argc, char *argv[]) {
  void *pool = objc_autoreleasePoolPush();
  NSString *appDelegateClassName = NSStringFromClass([AppDelegate class]);

  // objc_autorelease(appDelegateClassName);
  name = objc_autoreleaseReturnValue(appDelegateClassName); 

  // objc_retain(appDelegateClassName);
  name = objc_retainAutoreleasedReturnValue(appDelegateClassName);

  int tmp = UIApplicationMain(argc, argv, nil, appDelegateClassName);
  objc_release(appDelegateClassName);

  // 对push和pop之间加入自动释放池的对象进行release操作，即[appDelegateClassName release];
  objc_autoreleasePoolPop(pool);

  return tmp;
}
```
但实际上：

UIApplicationMain函数在程序运行期间不会返回，因此这里生成的 appDelegateClassName 对象一直会处在堆上无法释放造成内存泄漏；

并且程序终止之后，所使用的的内存空间将会由系统回收，自动释放池的 drain 在这里没有意义。

新的模板代码中，将 appDelegateClassName 对象的初始化操作与UIApplicationMain分离开，展开后如下：
```c
int main(int argc, char *argv[]) {
  NSString *appDelegateClassName;
  void *pool = objc_autoreleasePoolPush();
  appDelegateClassName = NSStringFromClass([AppDelegate class]);

  // objc_autorelease(appDelegateClassName);
  appDelegateClassName = objc_autoreleaseReturnValue(appDelegateClassName);

  // objc_retain(appDelegateClassName);
  appDelegateClassName = objc_retainAutoreleasedReturnValue(appDelegateClassName);

  // 未知作用，在汇编中，寄存器r0的值为0x0
  objc_release(nil);

  // 对自动释放池内所有对象进行release操作，即[appDelegateClassName release];
  objc_autoreleasePoolPop(pool);

  int tmp = UIApplicationMain(argc, argv, nil, appDelegateClassName);
  objc_storeStrong(&appDelegateClassName, nil);
  return tmp;
}
```

appDelegateClassName 对象还是得不到释放，程序在终止前不会执行到objc_storeStrong(&appDelegateClassName, nil);。

那么修改的意义何在呢？

// Setup code that might create autoreleased objects goes here.

如果需要创建自动释放的对象，那么现在，在@autoreleasepool作用域内创建即可正常释放。

**注意：以上示例代码中**，objc_autoreleaseReturnValue(appDelegateClassName) 其实是在 NSStringFromClass([AppDelegate class])中调用，这里将它提取出来方便理解。

### Thread Local Storage
其实在上文的伪实现中，objc_autoreleaseReturnValue(appDelegateClassName)和objc_retainAutoreleasedReturnValue(appDelegateClassName)可以去掉，这一切都归功于 AutoreleasePool 与线程局部存储（Thread Local Storage, TLS）[2]的配合。

在 arm64 架构下，objc_autoreleaseReturnValue执行时，会通过__builtin_return_address(0)判断当前函数返回地址对应的汇编指令，是否是mov fp, fp，如果是的话，将 0x1 作为 value，RETURN_DISPOSITION_KEY 作为 key，存储在 TLS 中，并直接返回 obj，不执行objc_autorelease(obj)；

相关源码如下：
```c
// NSObject.mm
// Prepare a value at +1 for return through a +0 autoreleasing convention.
id 
objc_autoreleaseReturnValue(id obj)
{
    if (prepareOptimizedReturn(ReturnAtPlus1)) return obj;

    return objc_autorelease(obj);
}

// objc-object.h
enum ReturnDisposition : bool {
    ReturnAtPlus0 = false, ReturnAtPlus1 = true
};

// Try to prepare for optimized return with the given disposition (+0 or +1).
// Returns true if the optimized path is successful.
// Otherwise the return value must be retained and/or autoreleased as usual.
static ALWAYS_INLINE bool 
prepareOptimizedReturn(ReturnDisposition disposition)
{
    ASSERT(getReturnDisposition() == ReturnAtPlus0);

    if (callerAcceptsOptimizedReturn(__builtin_return_address(0))) {
        if (disposition) setReturnDisposition(disposition);
        return true;
    }

    return false;
}

//arm64
static ALWAYS_INLINE bool 
callerAcceptsOptimizedReturn(const void *ra)
{
    // fd 03 1d aa    mov fp, fp
    // arm64 instructions are well-aligned
    if (*(uint32_t *)ra == 0xaa1d03fd) {
        return true;
    }
    return false;
}
```
objc_retainAutoreleasedReturnValue执行时，判断RETURN_DISPOSITION_KEY 对应 value 是否为 0x1 并重置为 0x0，是的话，则直接返回 obj，不执行objc_retain(obj)；
```c
// NSObject.mm
// Accept a value returned through a +0 autoreleasing convention for use at +1.
id
objc_retainAutoreleasedReturnValue(id obj)
{
    if (acceptOptimizedReturn() == ReturnAtPlus1) return obj;

    return objc_retain(obj);
}

// objc-object.h
// Try to accept an optimized return.
// Returns the disposition of the returned object (+0 or +1).
// An un-optimized return is +0.
static ALWAYS_INLINE ReturnDisposition 
acceptOptimizedReturn()
{
    ReturnDisposition disposition = getReturnDisposition();
    setReturnDisposition(ReturnAtPlus0);  // reset to the unoptimized state
    return disposition;
}
```
基于以上优化，一般情况下，由工厂方法生成的对象不再需要进入自动释放池，加快了释放过程。

另外，mov fp, fp是编译器对于objc_autoreleaseReturnValue和objc_retainAutoreleasedReturnValue连续调用所做的一个标记[3]。
```txt
Well take a look at that. It’s added in a mov r7, r7 in each case which is a
noop (i.e. does nothing as it moves r7 back into itself). If you examine the
binary values for these instructions then you’ll see they match the values that
we were told to compare against. The compiler has added this as a marker to
tell the objc_autoreleaseReturnValue that the caller is about to call
objc_retainAutoreleasedReturnValue.
```
按照以上分析，新的 main 函数模板代码中，appDelegateClassName 不会进入自动释放池，而事实上确实如此，执行以下代码：
```c
#import <UIKit/UIKit.h>
#import "AppDelegate.h"

extern void _objc_autoreleasePoolPrint(void);

int main(int argc, char * argv[]) {
//    __weak NSString *a;
    NSString *appDelegateClassName;
    @autoreleasepool {
        // Setup code that might create autoreleased objects goes here.
        appDelegateClassName = NSStringFromClass([AppDelegate class]);
        _objc_autoreleasePoolPrint();
    }

    return UIApplicationMain(argc, argv, nil, appDelegateClassName);
}
```
lldb 打印结果为：
```c
objc[32590]: ##############
objc[32590]: AUTORELEASE POOLS for thread 0x102493880
objc[32590]: 0 releases pending.
objc[32590]: [0x1]  ................  PAGE (placeholder)
objc[32590]: [0x1]  ################  POOL (placeholder)
objc[32590]: ##############
```
可以看到自动释放池中没有 appDelegateClassName 对象。

细心的同学可能会注意到，以上代码中有个__weak修饰的 a 变量，当我们把它也加入运行代码中时，lldb 打印结果为：
```c
objc[32676]: ##############
objc[32676]: AUTORELEASE POOLS for thread 0x1025ab880
objc[32676]: 2 releases pending.
objc[32676]: [0x14c811000]  ................  PAGE  (hot) (cold)
objc[32676]: [0x14c811038]  ################  POOL 0x14c811038
objc[32676]: [0x14c811040]       0x283f9c3e0  __NSCFString
objc[32676]: ##############
```
TLS 黑魔法失灵了！

### 编译器优化
既然 AutoreleasePool 依据汇编层面进行了优化，那么我们便从汇编中一探究竟。
```c
//没有加__weak： 
0x100072148 <+72>:  bl 0x100072478 ; symbol stub for: NSStringFromClass
0x10007214c <+76>:  mov x29, x29 //mov fp, fp
0x100072150 <+80>:  bl 0x1000724e4 ; symbol stub for: objc_retainAutoreleasedReturnValue


//加了__weak：
0x1001da0b8 <+76>:  bl 0x1001da418 ; symbol stub for: NSStringFromClass
0x1001da0bc <+80>:  str x0, [sp, #0x8] //入栈
0x1001da0c0 <+84>:  b 0x1001da0c4 ; <+88> at main.m:68:30 //跳转到 main.m 68:30 继续执行，其实就是下一条指令的地址
0x1001da0c4 <+88>:  mov x29, x29 //mov fp, fp
0x1001da0c8 <+92>:  ldr x0, [sp, #0x8] //出栈
0x1001da0cc <+96>:  bl 0x1001da49c ; symbol stub for: objc_retainAutoreleasedReturnValue
```

描述几个基本概念：
```txt
父函数执行子函数前，会将寄存器中的原始值存储在栈中，即入栈；
子函数执行后，再从栈中将内容读取到寄存器，即出栈，接着继续执行后面的指令。
寄存器[4]：
SP(Stack Pointer)：堆栈指针寄存器，指向栈顶地址
FP(Frame Pointer, R29)：帧指针寄存器，通常指向栈底地址，即指向母函数与被调用的子函数在栈中的交界
LR(Link Register, R30)：链接寄存器，保存子函数返回后执行的下一条指令的内存地址
指令[5]：
B 函数地址：跳转到对应函数中执行
BL 函数地址：将下一条指令的地址存放到 LR(R30) 寄存器中，并跳转到对应函数中执行
MOV x0 x1：寄存器间传值或者寄存器与常量之间传值，即 R0 = R1，寄存器与内存之间传值用 STR 
```
当加了__weak修饰符后，编译器在objc_autoreleaseReturnValue和objc_retainAutoreleasedReturnValue之间加入了入栈，跳转，出栈操作，导致callerAcceptsOptimizedReturn(__builtin_return_address(0))的值为 false，从而执行了objc_autorelease，加到了自动释放池之中。

通过配置编译器优化级别可以去掉这几条指令，Build Settings -> Apple Clang - Code Generation -> Optimization Level[6] -> Debug 设置为除了 None[-O0] 以外的配置即可。运行之后，可以看到 AutoreleasePool 里不会再加入对象，但也出现一条信息：
```txt
Project was compiled with optimization - stepping may behave oddly; variables may not be available.
```
一般 Debug 下，配置为 None[-O0]，Release 下配置为 Fastest，Smallest[-Os]。那么可以确定在生产环境下，此优化正常。

相应地，对于尾调用优化在 Debug 下不起作用的情况，配置为 Faster[-O2]即可生效。

### 尾调用优化
对尾调用优化的介绍，这里有 2 篇优秀的文章：

尾调用优化 - https://www.ruanyifeng.com/blog/2015/04/tail-call.html

iOS objc_msgSend尾调用优化机制详解 - https://juejin.cn/post/6844903664050536455

其中第二篇文章中，尾调用优化在Release模式下才会有，Debug模式下没有的情况，上一节有写到，可以通过设置 Optimization Level 解决。

LLVM 编译优化是通过 Pass 实现的，查看当前 Optimization Level 对应的 Pass arguments[9]：
```c
// where X can be Os,O1,O2,O3 and O4
clang -OX -mllvm -debug-pass=Arguments foo.c
```
<ImageLoader path="blog/autoreleasepool/autoreleasepool-3" />
上图是Faster[-O2]对应的 Pass Arguments，可以看到其中有一项是-tailcallelim[10]，这个 Pass 针对的就是尾调用优化。

```txt
This file transforms calls of the current function (self recursion) followed by a
return instruction with a branch to the entry of the function, creating a loop.
This pass also implements the following extensions to the basic algorithm: 1.
Trivial instructions between the call and return do not prevent the transformation
from taking place, though currently the analysis cannot support moving any really
useful instructions (only dead ones). 2. This pass transforms functions that are
prevented from being tail recursive by an associative expression to use an
accumulator variable, thus compiling the typical naive factorial or fib
implementation into efficient code. 3. TRE is performed if the function returns
void, if the return returns the result returned by the call, or if the function
returns a run-time constant on all exits from the function. It is possible, though
unlikely, that the return returns something else (like constant 0), and can still
be TRE’d. It can be TRE’d if all other return instructions in the function return
the exact same value. 4. If it can prove that callees do not access their caller
stack frame, they are marked as eligible for tail call elimination (by the code
generator).
```
Xcode 13.0 对应的 clang 版本为： Apple clang version 13.0.0 (clang-1300.0.29.3)，经过验证，此版本中Fast [-O, O1] 中没有-tailcallelim
```c
这个 StackOverflow 回答中[11]罗列了各个级别对应的 Pass，只更新到了 version 6.0，仅作为参考
```
### 结语
本篇技术分享从 iOS AutoreleasePool 到 TLS 线程局部存储，进而查看汇编代码，了解编译器优化，从而扩展到尾调用优化，详细描述了整个技术原理的探索学习过程。技术学习无止境，愿你我共勉。

欢迎关注 Android 和 iOS 无埋点 SDK 3.0 开源 GitHub 仓库，了解最新进展：

Android:

https://github.com/growingio/growingio-sdk-android-autotracker 

iOS:

https://github.com/growingio/growingio-sdk-ios-autotracker 

### 参考资料
[1] 如何理解 Xcode 11 模板项目中 main.m 的变化?: https://www.jianshu.com/p/63426e6bf7aa

[2] 黑幕背后的Autorelease: http://blog.sunnyxx.com/2014/10/15/behind-autorelease/

[3] How does objc_retainAutoreleasedReturnValue work?: https://www.galloway.me.uk/2012/02/how-does-objc_retainautoreleasedreturnvalue-work/

[4] General-purpose Registers:  https://github.com/ARM-software/abi-aa/blob/master/aapcs64/aapcs64.rst#general-purpose-registers

[5] A64 Data Transfer Instructions: https://developer.arm.com/documentation/dui0802/a/A64-Data-Transfer-Instructions?lang=en

[6] Compiler-Level Optimizations: https://developer.apple.com/library/archive/documentation/General/Conceptual/MOSXAppProgrammingGuide/Performance/Performance.html#//apple_ref/doc/uid/TP40010543-CH9-102307

[7] 尾调用优化: https://www.ruanyifeng.com/blog/2015/04/tail-call.html

[8] iOS objc_msgSend尾调用优化机制详解: https://juejin.cn/post/6844903664050536455

[9] List of optimizations available in clang and llvm opt: https://stackoverflow.com/questions/35920795/list-of-optimizations-available-in-clang-and-llvm-opt

[10] -tailcallelim: Tail Call Elimination: https://llvm.org/docs/Passes.html#tailcallelim-tail-call-elimination

[11] Clang optimization levels: https://stackoverflow.com/questions/15548023/clang-optimization-levels