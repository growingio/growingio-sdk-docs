"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[6049],{2449:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=a(5893),o=a(1151);const r={slug:"AutoreleasePool",title:"\u4ece iOS AutoreleasePool \u5230\u7f16\u8bd1\u5668\u4f18\u5316",author:"YoloMao",author_title:"GrowingIO SDK Team",author_url:"https://github.com/YoloMao",author_image_url:"https://avatars.githubusercontent.com/u/16042670?v=4",tags:["iOS","AutoreleasePool","\u7f16\u8bd1\u5668\u4f18\u5316"]},l=void 0,s={permalink:"/growingio-sdk-docs/blog/AutoreleasePool",editUrl:"https://github.com/growingio/growingio-sdk-docs/edit/master/blog/2022-02-22-autoreleasePool.md",source:"@site/blog/2022-02-22-autoreleasePool.md",title:"\u4ece iOS AutoreleasePool \u5230\u7f16\u8bd1\u5668\u4f18\u5316",description:"main.m \u4e2d\u7684 AutoreleasePool",date:"2022-02-22T00:00:00.000Z",formattedDate:"February 22, 2022",tags:[{label:"iOS",permalink:"/growingio-sdk-docs/blog/tags/i-os"},{label:"AutoreleasePool",permalink:"/growingio-sdk-docs/blog/tags/autorelease-pool"},{label:"\u7f16\u8bd1\u5668\u4f18\u5316",permalink:"/growingio-sdk-docs/blog/tags/\u7f16\u8bd1\u5668\u4f18\u5316"}],readingTime:11.91,hasTruncateMarker:!0,authors:[{name:"YoloMao",title:"GrowingIO SDK Team",url:"https://github.com/YoloMao",imageURL:"https://avatars.githubusercontent.com/u/16042670?v=4"}],frontMatter:{slug:"AutoreleasePool",title:"\u4ece iOS AutoreleasePool \u5230\u7f16\u8bd1\u5668\u4f18\u5316",author:"YoloMao",author_title:"GrowingIO SDK Team",author_url:"https://github.com/YoloMao",author_image_url:"https://avatars.githubusercontent.com/u/16042670?v=4",tags:["iOS","AutoreleasePool","\u7f16\u8bd1\u5668\u4f18\u5316"]},unlisted:!1,prevItem:{title:"\u57fa\u4e8e GrowingIO \u73b0\u6709 SDK \u57fa\u7840\u4e0a\u7684\u4e8c\u6b21\u5f00\u53d1 - Android \u7bc7",permalink:"/growingio-sdk-docs/blog/custom android sdk"},nextItem:{title:"\u4e00\u6587\u641e\u5b9a\u524d\u7aef\u9519\u8bef\u6355\u83b7\u548c\u4e0a\u62a5",permalink:"/growingio-sdk-docs/blog/JS Error"}},i={authorsImageUrls:[void 0]},c=[{value:"Thread Local Storage",id:"thread-local-storage",level:3},{value:"\u7f16\u8bd1\u5668\u4f18\u5316",id:"\u7f16\u8bd1\u5668\u4f18\u5316",level:3},{value:"\u5c3e\u8c03\u7528\u4f18\u5316",id:"\u5c3e\u8c03\u7528\u4f18\u5316",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components},{ImageLoader:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageLoader",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"main.m \u4e2d\u7684 AutoreleasePool\n\u67d0\u6b21\u5076\u7136\u53d1\u73b0main.m\u91cc\u7684 main \u51fd\u6570\u6709\u6240\u53d8\u5316\uff0c\u7ecf\u8fc7\u4e00\u756a\u67e5\u8be2[1]\uff0c\u53d1\u73b0\u662f\u4ece Xcode 11 \u5f00\u59cb\u3002"}),"\n",(0,t.jsx)(a,{path:"blog/autoreleasepool/autoreleasepool-1"}),"\n",(0,t.jsx)(n.p,{children:"\u800c\u5728\u6b64\u4e4b\u524d\uff0c main \u51fd\u6570\u7684\u5b9e\u73b0\u4e3a\uff1a"}),"\n",(0,t.jsx)(a,{path:"blog/autoreleasepool/autoreleasepool-2"}),"\n",(0,t.jsx)(n.p,{children:"\u719f\u6089 AutoreleasePool \u5e95\u5c42\u539f\u7406\u7684\u540c\u5b66\u5e94\u8be5\u90fd\u77e5\u9053\uff0c\u5728@autoreleasepool\u4f5c\u7528\u8303\u56f4\u5185\u751f\u6210\u7684\u5bf9\u8c61\uff0c\u5728 ARC \u7684\u4f5c\u7528\u4e0b\uff0c\u5c06\u52a0\u5165\u81ea\u52a8\u91ca\u653e\u6c60\u3002\u5982 Xcode 11 \u4e4b\u524d\u7684 main \u51fd\u6570\uff0c\u5b9e\u9645\u5185\u5b58\u7ba1\u7406\u5c06\u5927\u6982\u4f1a\u5c55\u5f00\u4e3a\u4ee5\u4e0b\u5b9e\u73b0\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int main(int argc, char *argv[]) {\n  void *pool = objc_autoreleasePoolPush();\n  NSString *appDelegateClassName = NSStringFromClass([AppDelegate class]);\n\n\xa0\xa0// objc_autorelease(appDelegateClassName);\n  name = objc_autoreleaseReturnValue(appDelegateClassName); \n\n\xa0\xa0// objc_retain(appDelegateClassName);\n  name = objc_retainAutoreleasedReturnValue(appDelegateClassName);\n\n  int tmp = UIApplicationMain(argc, argv, nil, appDelegateClassName);\n  objc_release(appDelegateClassName);\n\n  // \u5bf9push\u548cpop\u4e4b\u95f4\u52a0\u5165\u81ea\u52a8\u91ca\u653e\u6c60\u7684\u5bf9\u8c61\u8fdb\u884crelease\u64cd\u4f5c\uff0c\u5373[appDelegateClassName release];\n  objc_autoreleasePoolPop(pool);\n\n  return tmp;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f46\u5b9e\u9645\u4e0a\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"UIApplicationMain\u51fd\u6570\u5728\u7a0b\u5e8f\u8fd0\u884c\u671f\u95f4\u4e0d\u4f1a\u8fd4\u56de\uff0c\u56e0\u6b64\u8fd9\u91cc\u751f\u6210\u7684 appDelegateClassName \u5bf9\u8c61\u4e00\u76f4\u4f1a\u5904\u5728\u5806\u4e0a\u65e0\u6cd5\u91ca\u653e\u9020\u6210\u5185\u5b58\u6cc4\u6f0f\uff1b"}),"\n",(0,t.jsx)(n.p,{children:"\u5e76\u4e14\u7a0b\u5e8f\u7ec8\u6b62\u4e4b\u540e\uff0c\u6240\u4f7f\u7528\u7684\u7684\u5185\u5b58\u7a7a\u95f4\u5c06\u4f1a\u7531\u7cfb\u7edf\u56de\u6536\uff0c\u81ea\u52a8\u91ca\u653e\u6c60\u7684 drain \u5728\u8fd9\u91cc\u6ca1\u6709\u610f\u4e49\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u65b0\u7684\u6a21\u677f\u4ee3\u7801\u4e2d\uff0c\u5c06 appDelegateClassName \u5bf9\u8c61\u7684\u521d\u59cb\u5316\u64cd\u4f5c\u4e0eUIApplicationMain\u5206\u79bb\u5f00\uff0c\u5c55\u5f00\u540e\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"int main(int argc, char *argv[]) {\n  NSString *appDelegateClassName;\n  void *pool = objc_autoreleasePoolPush();\n  appDelegateClassName = NSStringFromClass([AppDelegate class]);\n\n  // objc_autorelease(appDelegateClassName);\n  appDelegateClassName = objc_autoreleaseReturnValue(appDelegateClassName);\n\n  // objc_retain(appDelegateClassName);\n  appDelegateClassName = objc_retainAutoreleasedReturnValue(appDelegateClassName);\n\n  // \u672a\u77e5\u4f5c\u7528\uff0c\u5728\u6c47\u7f16\u4e2d\uff0c\u5bc4\u5b58\u5668r0\u7684\u503c\u4e3a0x0\n  objc_release(nil);\n\n  // \u5bf9\u81ea\u52a8\u91ca\u653e\u6c60\u5185\u6240\u6709\u5bf9\u8c61\u8fdb\u884crelease\u64cd\u4f5c\uff0c\u5373[appDelegateClassName release];\n  objc_autoreleasePoolPop(pool);\n\n  int tmp = UIApplicationMain(argc, argv, nil, appDelegateClassName);\n  objc_storeStrong(&appDelegateClassName, nil);\n  return tmp;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"appDelegateClassName \u5bf9\u8c61\u8fd8\u662f\u5f97\u4e0d\u5230\u91ca\u653e\uff0c\u7a0b\u5e8f\u5728\u7ec8\u6b62\u524d\u4e0d\u4f1a\u6267\u884c\u5230objc_storeStrong(&appDelegateClassName, nil);\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u90a3\u4e48\u4fee\u6539\u7684\u610f\u4e49\u4f55\u5728\u5462\uff1f"}),"\n",(0,t.jsx)(n.p,{children:"// Setup code that might create autoreleased objects goes here."}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u9700\u8981\u521b\u5efa\u81ea\u52a8\u91ca\u653e\u7684\u5bf9\u8c61\uff0c\u90a3\u4e48\u73b0\u5728\uff0c\u5728@autoreleasepool\u4f5c\u7528\u57df\u5185\u521b\u5efa\u5373\u53ef\u6b63\u5e38\u91ca\u653e\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a\u4ee5\u4e0a\u793a\u4f8b\u4ee3\u7801\u4e2d"}),"\uff0cobjc_autoreleaseReturnValue(appDelegateClassName) \u5176\u5b9e\u662f\u5728 NSStringFromClass([AppDelegate class])\u4e2d\u8c03\u7528\uff0c\u8fd9\u91cc\u5c06\u5b83\u63d0\u53d6\u51fa\u6765\u65b9\u4fbf\u7406\u89e3\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"thread-local-storage",children:"Thread Local Storage"}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u5b9e\u5728\u4e0a\u6587\u7684\u4f2a\u5b9e\u73b0\u4e2d\uff0cobjc_autoreleaseReturnValue(appDelegateClassName)\u548cobjc_retainAutoreleasedReturnValue(appDelegateClassName)\u53ef\u4ee5\u53bb\u6389\uff0c\u8fd9\u4e00\u5207\u90fd\u5f52\u529f\u4e8e AutoreleasePool \u4e0e\u7ebf\u7a0b\u5c40\u90e8\u5b58\u50a8\uff08Thread Local Storage, TLS\uff09[2]\u7684\u914d\u5408\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 arm64 \u67b6\u6784\u4e0b\uff0cobjc_autoreleaseReturnValue\u6267\u884c\u65f6\uff0c\u4f1a\u901a\u8fc7__builtin_return_address(0)\u5224\u65ad\u5f53\u524d\u51fd\u6570\u8fd4\u56de\u5730\u5740\u5bf9\u5e94\u7684\u6c47\u7f16\u6307\u4ee4\uff0c\u662f\u5426\u662fmov fp, fp\uff0c\u5982\u679c\u662f\u7684\u8bdd\uff0c\u5c06 0x1 \u4f5c\u4e3a value\uff0cRETURN_DISPOSITION_KEY \u4f5c\u4e3a key\uff0c\u5b58\u50a8\u5728 TLS \u4e2d\uff0c\u5e76\u76f4\u63a5\u8fd4\u56de obj\uff0c\u4e0d\u6267\u884cobjc_autorelease(obj)\uff1b"}),"\n",(0,t.jsx)(n.p,{children:"\u76f8\u5173\u6e90\u7801\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"// NSObject.mm\n// Prepare a value at +1 for return through a +0 autoreleasing convention.\nid \nobjc_autoreleaseReturnValue(id obj)\n{\n    if (prepareOptimizedReturn(ReturnAtPlus1)) return obj;\n\n    return objc_autorelease(obj);\n}\n\n// objc-object.h\nenum ReturnDisposition : bool {\n    ReturnAtPlus0 = false, ReturnAtPlus1 = true\n};\n\n// Try to prepare for optimized return with the given disposition (+0 or +1).\n// Returns true if the optimized path is successful.\n// Otherwise the return value must be retained and/or autoreleased as usual.\nstatic ALWAYS_INLINE bool \nprepareOptimizedReturn(ReturnDisposition disposition)\n{\n    ASSERT(getReturnDisposition() == ReturnAtPlus0);\n\n    if (callerAcceptsOptimizedReturn(__builtin_return_address(0))) {\n        if (disposition) setReturnDisposition(disposition);\n        return true;\n    }\n\n    return false;\n}\n\n//arm64\nstatic ALWAYS_INLINE bool \ncallerAcceptsOptimizedReturn(const void *ra)\n{\n    // fd 03 1d aa    mov fp, fp\n    // arm64 instructions are well-aligned\n    if (*(uint32_t *)ra == 0xaa1d03fd) {\n        return true;\n    }\n    return false;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"objc_retainAutoreleasedReturnValue\u6267\u884c\u65f6\uff0c\u5224\u65adRETURN_DISPOSITION_KEY \u5bf9\u5e94 value \u662f\u5426\u4e3a 0x1 \u5e76\u91cd\u7f6e\u4e3a 0x0\uff0c\u662f\u7684\u8bdd\uff0c\u5219\u76f4\u63a5\u8fd4\u56de obj\uff0c\u4e0d\u6267\u884cobjc_retain(obj)\uff1b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"// NSObject.mm\n// Accept a value returned through a +0 autoreleasing convention for use at +1.\nid\nobjc_retainAutoreleasedReturnValue(id obj)\n{\n    if (acceptOptimizedReturn() == ReturnAtPlus1) return obj;\n\n    return objc_retain(obj);\n}\n\n// objc-object.h\n// Try to accept an optimized return.\n// Returns the disposition of the returned object (+0 or +1).\n// An un-optimized return is +0.\nstatic ALWAYS_INLINE ReturnDisposition \nacceptOptimizedReturn()\n{\n    ReturnDisposition disposition = getReturnDisposition();\n    setReturnDisposition(ReturnAtPlus0);  // reset to the unoptimized state\n    return disposition;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u57fa\u4e8e\u4ee5\u4e0a\u4f18\u5316\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u7531\u5de5\u5382\u65b9\u6cd5\u751f\u6210\u7684\u5bf9\u8c61\u4e0d\u518d\u9700\u8981\u8fdb\u5165\u81ea\u52a8\u91ca\u653e\u6c60\uff0c\u52a0\u5feb\u4e86\u91ca\u653e\u8fc7\u7a0b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u53e6\u5916\uff0cmov fp, fp\u662f\u7f16\u8bd1\u5668\u5bf9\u4e8eobjc_autoreleaseReturnValue\u548cobjc_retainAutoreleasedReturnValue\u8fde\u7eed\u8c03\u7528\u6240\u505a\u7684\u4e00\u4e2a\u6807\u8bb0[3]\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"Well take a look at that. It\u2019s added in a mov r7, r7 in each case which is a\nnoop (i.e. does nothing as it moves r7 back into itself). If you examine the\nbinary values for these instructions then you\u2019ll see they match the values that\nwe were told to compare against. The compiler has added this as a marker to\ntell the objc_autoreleaseReturnValue that the caller is about to call\nobjc_retainAutoreleasedReturnValue.\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6309\u7167\u4ee5\u4e0a\u5206\u6790\uff0c\u65b0\u7684 main \u51fd\u6570\u6a21\u677f\u4ee3\u7801\u4e2d\uff0cappDelegateClassName \u4e0d\u4f1a\u8fdb\u5165\u81ea\u52a8\u91ca\u653e\u6c60\uff0c\u800c\u4e8b\u5b9e\u4e0a\u786e\u5b9e\u5982\u6b64\uff0c\u6267\u884c\u4ee5\u4e0b\u4ee3\u7801\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#import <UIKit/UIKit.h>\n#import "AppDelegate.h"\n\nextern void _objc_autoreleasePoolPrint(void);\n\nint main(int argc, char * argv[]) {\n//    __weak NSString *a;\n    NSString *appDelegateClassName;\n    @autoreleasepool {\n        // Setup code that might create autoreleased objects goes here.\n        appDelegateClassName = NSStringFromClass([AppDelegate class]);\n        _objc_autoreleasePoolPrint();\n    }\n\n    return UIApplicationMain(argc, argv, nil, appDelegateClassName);\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"lldb \u6253\u5370\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"objc[32590]: ##############\nobjc[32590]: AUTORELEASE POOLS for thread 0x102493880\nobjc[32590]: 0 releases pending.\nobjc[32590]: [0x1]  ................  PAGE (placeholder)\nobjc[32590]: [0x1]  ################  POOL (placeholder)\nobjc[32590]: ##############\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u81ea\u52a8\u91ca\u653e\u6c60\u4e2d\u6ca1\u6709 appDelegateClassName \u5bf9\u8c61\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u7ec6\u5fc3\u7684\u540c\u5b66\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230\uff0c\u4ee5\u4e0a\u4ee3\u7801\u4e2d\u6709\u4e2a__weak\u4fee\u9970\u7684 a \u53d8\u91cf\uff0c\u5f53\u6211\u4eec\u628a\u5b83\u4e5f\u52a0\u5165\u8fd0\u884c\u4ee3\u7801\u4e2d\u65f6\uff0clldb \u6253\u5370\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"objc[32676]: ##############\nobjc[32676]: AUTORELEASE POOLS for thread 0x1025ab880\nobjc[32676]: 2 releases pending.\nobjc[32676]: [0x14c811000]  ................  PAGE  (hot) (cold)\nobjc[32676]: [0x14c811038]  ################  POOL 0x14c811038\nobjc[32676]: [0x14c811040]       0x283f9c3e0  __NSCFString\nobjc[32676]: ##############\n"})}),"\n",(0,t.jsx)(n.p,{children:"TLS \u9ed1\u9b54\u6cd5\u5931\u7075\u4e86\uff01"}),"\n",(0,t.jsx)(n.h3,{id:"\u7f16\u8bd1\u5668\u4f18\u5316",children:"\u7f16\u8bd1\u5668\u4f18\u5316"}),"\n",(0,t.jsx)(n.p,{children:"\u65e2\u7136 AutoreleasePool \u4f9d\u636e\u6c47\u7f16\u5c42\u9762\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u90a3\u4e48\u6211\u4eec\u4fbf\u4ece\u6c47\u7f16\u4e2d\u4e00\u63a2\u7a76\u7adf\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"//\u6ca1\u6709\u52a0__weak\uff1a \n0x100072148 <+72>:  bl 0x100072478 ; symbol stub for: NSStringFromClass\n0x10007214c <+76>:  mov x29, x29 //mov fp, fp\n0x100072150 <+80>:  bl 0x1000724e4 ; symbol stub for: objc_retainAutoreleasedReturnValue\n\n\n//\u52a0\u4e86__weak\uff1a\n0x1001da0b8 <+76>:  bl 0x1001da418 ; symbol stub for: NSStringFromClass\n0x1001da0bc <+80>:  str x0, [sp, #0x8] //\u5165\u6808\n0x1001da0c0 <+84>:  b 0x1001da0c4 ; <+88> at main.m:68:30 //\u8df3\u8f6c\u5230 main.m 68:30 \u7ee7\u7eed\u6267\u884c\uff0c\u5176\u5b9e\u5c31\u662f\u4e0b\u4e00\u6761\u6307\u4ee4\u7684\u5730\u5740\n0x1001da0c4 <+88>:  mov x29, x29 //mov fp, fp\n0x1001da0c8 <+92>:  ldr x0, [sp, #0x8] //\u51fa\u6808\n0x1001da0cc <+96>:  bl 0x1001da49c ; symbol stub for: objc_retainAutoreleasedReturnValue\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u63cf\u8ff0\u51e0\u4e2a\u57fa\u672c\u6982\u5ff5\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"\u7236\u51fd\u6570\u6267\u884c\u5b50\u51fd\u6570\u524d\uff0c\u4f1a\u5c06\u5bc4\u5b58\u5668\u4e2d\u7684\u539f\u59cb\u503c\u5b58\u50a8\u5728\u6808\u4e2d\uff0c\u5373\u5165\u6808\uff1b\n\u5b50\u51fd\u6570\u6267\u884c\u540e\uff0c\u518d\u4ece\u6808\u4e2d\u5c06\u5185\u5bb9\u8bfb\u53d6\u5230\u5bc4\u5b58\u5668\uff0c\u5373\u51fa\u6808\uff0c\u63a5\u7740\u7ee7\u7eed\u6267\u884c\u540e\u9762\u7684\u6307\u4ee4\u3002\n\u5bc4\u5b58\u5668[4]\uff1a\nSP(Stack Pointer)\uff1a\u5806\u6808\u6307\u9488\u5bc4\u5b58\u5668\uff0c\u6307\u5411\u6808\u9876\u5730\u5740\nFP(Frame Pointer, R29)\uff1a\u5e27\u6307\u9488\u5bc4\u5b58\u5668\uff0c\u901a\u5e38\u6307\u5411\u6808\u5e95\u5730\u5740\uff0c\u5373\u6307\u5411\u6bcd\u51fd\u6570\u4e0e\u88ab\u8c03\u7528\u7684\u5b50\u51fd\u6570\u5728\u6808\u4e2d\u7684\u4ea4\u754c\nLR(Link Register, R30)\uff1a\u94fe\u63a5\u5bc4\u5b58\u5668\uff0c\u4fdd\u5b58\u5b50\u51fd\u6570\u8fd4\u56de\u540e\u6267\u884c\u7684\u4e0b\u4e00\u6761\u6307\u4ee4\u7684\u5185\u5b58\u5730\u5740\n\u6307\u4ee4[5]\uff1a\nB \u51fd\u6570\u5730\u5740\uff1a\u8df3\u8f6c\u5230\u5bf9\u5e94\u51fd\u6570\u4e2d\u6267\u884c\nBL \u51fd\u6570\u5730\u5740\uff1a\u5c06\u4e0b\u4e00\u6761\u6307\u4ee4\u7684\u5730\u5740\u5b58\u653e\u5230 LR(R30) \u5bc4\u5b58\u5668\u4e2d\uff0c\u5e76\u8df3\u8f6c\u5230\u5bf9\u5e94\u51fd\u6570\u4e2d\u6267\u884c\nMOV x0 x1\uff1a\u5bc4\u5b58\u5668\u95f4\u4f20\u503c\u6216\u8005\u5bc4\u5b58\u5668\u4e0e\u5e38\u91cf\u4e4b\u95f4\u4f20\u503c\uff0c\u5373 R0 = R1\uff0c\u5bc4\u5b58\u5668\u4e0e\u5185\u5b58\u4e4b\u95f4\u4f20\u503c\u7528 STR \n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u52a0\u4e86__weak\u4fee\u9970\u7b26\u540e\uff0c\u7f16\u8bd1\u5668\u5728objc_autoreleaseReturnValue\u548cobjc_retainAutoreleasedReturnValue\u4e4b\u95f4\u52a0\u5165\u4e86\u5165\u6808\uff0c\u8df3\u8f6c\uff0c\u51fa\u6808\u64cd\u4f5c\uff0c\u5bfc\u81f4callerAcceptsOptimizedReturn(__builtin_return_address(0))\u7684\u503c\u4e3a false\uff0c\u4ece\u800c\u6267\u884c\u4e86objc_autorelease\uff0c\u52a0\u5230\u4e86\u81ea\u52a8\u91ca\u653e\u6c60\u4e4b\u4e2d\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u914d\u7f6e\u7f16\u8bd1\u5668\u4f18\u5316\u7ea7\u522b\u53ef\u4ee5\u53bb\u6389\u8fd9\u51e0\u6761\u6307\u4ee4\uff0cBuild Settings -> Apple Clang - Code Generation -> Optimization Level[6] -> Debug \u8bbe\u7f6e\u4e3a\u9664\u4e86 None[-O0] \u4ee5\u5916\u7684\u914d\u7f6e\u5373\u53ef\u3002\u8fd0\u884c\u4e4b\u540e\uff0c\u53ef\u4ee5\u770b\u5230 AutoreleasePool \u91cc\u4e0d\u4f1a\u518d\u52a0\u5165\u5bf9\u8c61\uff0c\u4f46\u4e5f\u51fa\u73b0\u4e00\u6761\u4fe1\u606f\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"Project was compiled with optimization - stepping may behave oddly; variables may not be available.\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u822c Debug \u4e0b\uff0c\u914d\u7f6e\u4e3a None[-O0]\uff0cRelease \u4e0b\u914d\u7f6e\u4e3a Fastest\uff0cSmallest[-Os]\u3002\u90a3\u4e48\u53ef\u4ee5\u786e\u5b9a\u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u6b64\u4f18\u5316\u6b63\u5e38\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u76f8\u5e94\u5730\uff0c\u5bf9\u4e8e\u5c3e\u8c03\u7528\u4f18\u5316\u5728 Debug \u4e0b\u4e0d\u8d77\u4f5c\u7528\u7684\u60c5\u51b5\uff0c\u914d\u7f6e\u4e3a Faster[-O2]\u5373\u53ef\u751f\u6548\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u5c3e\u8c03\u7528\u4f18\u5316",children:"\u5c3e\u8c03\u7528\u4f18\u5316"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u5c3e\u8c03\u7528\u4f18\u5316\u7684\u4ecb\u7ecd\uff0c\u8fd9\u91cc\u6709 2 \u7bc7\u4f18\u79c0\u7684\u6587\u7ae0\uff1a"}),"\n",(0,t.jsxs)(n.p,{children:["\u5c3e\u8c03\u7528\u4f18\u5316 - ",(0,t.jsx)(n.a,{href:"https://www.ruanyifeng.com/blog/2015/04/tail-call.html",children:"https://www.ruanyifeng.com/blog/2015/04/tail-call.html"})]}),"\n",(0,t.jsxs)(n.p,{children:["iOS objc_msgSend\u5c3e\u8c03\u7528\u4f18\u5316\u673a\u5236\u8be6\u89e3 - ",(0,t.jsx)(n.a,{href:"https://juejin.cn/post/6844903664050536455",children:"https://juejin.cn/post/6844903664050536455"})]}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d\u7b2c\u4e8c\u7bc7\u6587\u7ae0\u4e2d\uff0c\u5c3e\u8c03\u7528\u4f18\u5316\u5728Release\u6a21\u5f0f\u4e0b\u624d\u4f1a\u6709\uff0cDebug\u6a21\u5f0f\u4e0b\u6ca1\u6709\u7684\u60c5\u51b5\uff0c\u4e0a\u4e00\u8282\u6709\u5199\u5230\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e Optimization Level \u89e3\u51b3\u3002"}),"\n",(0,t.jsx)(n.p,{children:"LLVM \u7f16\u8bd1\u4f18\u5316\u662f\u901a\u8fc7 Pass \u5b9e\u73b0\u7684\uff0c\u67e5\u770b\u5f53\u524d Optimization Level \u5bf9\u5e94\u7684 Pass arguments[9]\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"// where X can be Os,O1,O2,O3 and O4\nclang -OX -mllvm -debug-pass=Arguments foo.c\n"})}),"\n",(0,t.jsx)(a,{path:"blog/autoreleasepool/autoreleasepool-3"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u56fe\u662fFaster[-O2]\u5bf9\u5e94\u7684 Pass Arguments\uff0c\u53ef\u4ee5\u770b\u5230\u5176\u4e2d\u6709\u4e00\u9879\u662f-tailcallelim[10]\uff0c\u8fd9\u4e2a Pass \u9488\u5bf9\u7684\u5c31\u662f\u5c3e\u8c03\u7528\u4f18\u5316\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"This file transforms calls of the current function (self recursion) followed by a\nreturn instruction with a branch to the entry of the function, creating a loop.\nThis pass also implements the following extensions to the basic algorithm: 1.\nTrivial instructions between the call and return do not prevent the transformation\nfrom taking place, though currently the analysis cannot support moving any really\nuseful instructions (only dead ones). 2. This pass transforms functions that are\nprevented from being tail recursive by an associative expression to use an\naccumulator variable, thus compiling the typical naive factorial or fib\nimplementation into efficient code. 3. TRE is performed if the function returns\nvoid, if the return returns the result returned by the call, or if the function\nreturns a run-time constant on all exits from the function. It is possible, though\nunlikely, that the return returns something else (like constant 0), and can still\nbe TRE\u2019d. It can be TRE\u2019d if all other return instructions in the function return\nthe exact same value. 4. If it can prove that callees do not access their caller\nstack frame, they are marked as eligible for tail call elimination (by the code\ngenerator).\n"})}),"\n",(0,t.jsx)(n.p,{children:"Xcode 13.0 \u5bf9\u5e94\u7684 clang \u7248\u672c\u4e3a\uff1a Apple clang version 13.0.0 (clang-1300.0.29.3)\uff0c\u7ecf\u8fc7\u9a8c\u8bc1\uff0c\u6b64\u7248\u672c\u4e2dFast [-O, O1] \u4e2d\u6ca1\u6709-tailcallelim"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"\u8fd9\u4e2a StackOverflow \u56de\u7b54\u4e2d[11]\u7f57\u5217\u4e86\u5404\u4e2a\u7ea7\u522b\u5bf9\u5e94\u7684 Pass\uff0c\u53ea\u66f4\u65b0\u5230\u4e86 version 6.0\uff0c\u4ec5\u4f5c\u4e3a\u53c2\u8003\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u7ed3\u8bed",children:"\u7ed3\u8bed"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u7bc7\u6280\u672f\u5206\u4eab\u4ece iOS AutoreleasePool \u5230 TLS \u7ebf\u7a0b\u5c40\u90e8\u5b58\u50a8\uff0c\u8fdb\u800c\u67e5\u770b\u6c47\u7f16\u4ee3\u7801\uff0c\u4e86\u89e3\u7f16\u8bd1\u5668\u4f18\u5316\uff0c\u4ece\u800c\u6269\u5c55\u5230\u5c3e\u8c03\u7528\u4f18\u5316\uff0c\u8be6\u7ec6\u63cf\u8ff0\u4e86\u6574\u4e2a\u6280\u672f\u539f\u7406\u7684\u63a2\u7d22\u5b66\u4e60\u8fc7\u7a0b\u3002\u6280\u672f\u5b66\u4e60\u65e0\u6b62\u5883\uff0c\u613f\u4f60\u6211\u5171\u52c9\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6b22\u8fce\u5173\u6ce8 Android \u548c iOS \u65e0\u57cb\u70b9 SDK 3.0 \u5f00\u6e90 GitHub \u4ed3\u5e93\uff0c\u4e86\u89e3\u6700\u65b0\u8fdb\u5c55\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"Android:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/growingio/growingio-sdk-android-autotracker",children:"https://github.com/growingio/growingio-sdk-android-autotracker"})}),"\n",(0,t.jsx)(n.p,{children:"iOS:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/growingio/growingio-sdk-ios-autotracker",children:"https://github.com/growingio/growingio-sdk-ios-autotracker"})}),"\n",(0,t.jsx)(n.h3,{id:"\u53c2\u8003\u8d44\u6599",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,t.jsxs)(n.p,{children:["[1] \u5982\u4f55\u7406\u89e3 Xcode 11 \u6a21\u677f\u9879\u76ee\u4e2d main.m \u7684\u53d8\u5316?: ",(0,t.jsx)(n.a,{href:"https://www.jianshu.com/p/63426e6bf7aa",children:"https://www.jianshu.com/p/63426e6bf7aa"})]}),"\n",(0,t.jsxs)(n.p,{children:["[2] \u9ed1\u5e55\u80cc\u540e\u7684Autorelease: ",(0,t.jsx)(n.a,{href:"http://blog.sunnyxx.com/2014/10/15/behind-autorelease/",children:"http://blog.sunnyxx.com/2014/10/15/behind-autorelease/"})]}),"\n",(0,t.jsxs)(n.p,{children:["[3] How does objc_retainAutoreleasedReturnValue work?: ",(0,t.jsx)(n.a,{href:"https://www.galloway.me.uk/2012/02/how-does-objc_retainautoreleasedreturnvalue-work/",children:"https://www.galloway.me.uk/2012/02/how-does-objc_retainautoreleasedreturnvalue-work/"})]}),"\n",(0,t.jsxs)(n.p,{children:["[4] General-purpose Registers:  ",(0,t.jsx)(n.a,{href:"https://github.com/ARM-software/abi-aa/blob/master/aapcs64/aapcs64.rst#general-purpose-registers",children:"https://github.com/ARM-software/abi-aa/blob/master/aapcs64/aapcs64.rst#general-purpose-registers"})]}),"\n",(0,t.jsxs)(n.p,{children:["[5] A64 Data Transfer Instructions: ",(0,t.jsx)(n.a,{href:"https://developer.arm.com/documentation/dui0802/a/A64-Data-Transfer-Instructions?lang=en",children:"https://developer.arm.com/documentation/dui0802/a/A64-Data-Transfer-Instructions?lang=en"})]}),"\n",(0,t.jsxs)(n.p,{children:["[6] Compiler-Level Optimizations: ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/library/archive/documentation/General/Conceptual/MOSXAppProgrammingGuide/Performance/Performance.html#//apple_ref/doc/uid/TP40010543-CH9-102307",children:"https://developer.apple.com/library/archive/documentation/General/Conceptual/MOSXAppProgrammingGuide/Performance/Performance.html#//apple_ref/doc/uid/TP40010543-CH9-102307"})]}),"\n",(0,t.jsxs)(n.p,{children:["[7] \u5c3e\u8c03\u7528\u4f18\u5316: ",(0,t.jsx)(n.a,{href:"https://www.ruanyifeng.com/blog/2015/04/tail-call.html",children:"https://www.ruanyifeng.com/blog/2015/04/tail-call.html"})]}),"\n",(0,t.jsxs)(n.p,{children:["[8] iOS objc_msgSend\u5c3e\u8c03\u7528\u4f18\u5316\u673a\u5236\u8be6\u89e3: ",(0,t.jsx)(n.a,{href:"https://juejin.cn/post/6844903664050536455",children:"https://juejin.cn/post/6844903664050536455"})]}),"\n",(0,t.jsxs)(n.p,{children:["[9] List of optimizations available in clang and llvm opt: ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/35920795/list-of-optimizations-available-in-clang-and-llvm-opt",children:"https://stackoverflow.com/questions/35920795/list-of-optimizations-available-in-clang-and-llvm-opt"})]}),"\n",(0,t.jsxs)(n.p,{children:["[10] -tailcallelim: Tail Call Elimination: ",(0,t.jsx)(n.a,{href:"https://llvm.org/docs/Passes.html#tailcallelim-tail-call-elimination",children:"https://llvm.org/docs/Passes.html#tailcallelim-tail-call-elimination"})]}),"\n",(0,t.jsxs)(n.p,{children:["[11] Clang optimization levels: ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/15548023/clang-optimization-levels",children:"https://stackoverflow.com/questions/15548023/clang-optimization-levels"})]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>l});var t=a(7294);const o={},r=t.createContext(o);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);