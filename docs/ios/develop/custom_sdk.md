---
sidebar_position: 2
title: 自定义 SDK
---
--------------

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## SDK结构介绍

SDK 可以通过拆分成模块、服务实现模块化，在 GrowingIO 的 SDK 中，已经有多个模块功能已经从代码中分离出来，后续将会独立出更多的模块，[GrowingAnalytics.podspec](https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/GrowingAnalytics.podspec) 文件中包含了所有的相关信息。

### ** 模块 **

具有单独业务功能的模块，例如圈选，Mobile Debugger。模块遵循 [模块协议](https://github.com/growingio/growingio-sdk-ios-autotracker/blob/master/GrowingTrackerCore/Public/GrowingModuleProtocol.h) 且需要进行初始化操作，并可能使用服务。Module 可以去除。

| 名称     | 说明 | 是否可选 |
| :------: | :------:   | :------:   |
| MobileDebugger | 数据调试 Mobile Debugger，默认集成在埋点 SDK 中 | 是 |
| WebCircle | 基于无埋点的圈选插件，默认集成在无埋点 SDK 中 | 是 |
| Hybrid | 混合开发模式，默认集成在无埋点 SDK 中（无埋点中自动注入），埋点 SDK 需要手动导入 | 是 |
| Protobuf |使用 protocol buffer 格式保存和上传事件数据，集成即生效；默认为 JSON 格式，2 种格式互不兼容，迁移将导致数据库内未上传的事件数据丢失|是|
| 更多开发中... |||

### ** 服务 **

具有单个逻辑处理的单元，供 Module 使用，可替换，可去除。例如网络发送服务、加密服务。对应的 Service Protocol 协议可以去 [Services](https://github.com/growingio/growingio-sdk-ios-autotracker/tree/master/GrowingTrackerCore/Public) 下查看。

> 您可以创建自己的 Service 服务并替换原有 Service 服务，例如选用自己的加密服务。您不应该去除任意 Service，除非您的模块和核心库都没有使用该 Service。

|     名称      |                    说明                    | 是否可选 |
| :-----------: | :----------------------------------------: | :------: |
|   Database    |          数据库服务，处理事件数据          |    是    |
|    Network    |                网络发送服务                |    是    |
|   WebSocket   | websocket 服务，用于圈选以及 Mobile Debugger |    是    |
|  Compression  |     压缩服务，用于网络发送时的数据压缩(与 Encryption 一起使用)     |    是   |
|  Encryption   |     加密服务，用于网络发送时的数据加密 (与 Compression 一起使用)     |    是    |
| 更多开发中... |                                            |          |



### ** 核心库 **

| 名称     | 说明 | 是否可选 |
| :------- | :------:  | :------:  |
| TrackerCore | 埋点核心库，包含最基本的埋点逻辑，以及 service 协议，是最基础的模块 | 否 |
| AutotrackerCore | 无埋点核心库，依赖于埋点核心库，包含无埋点的注入逻辑 | 否（埋点 SDK 无需集成此库） |

### ** 外壳 **

`GrowingTracker` 和 `GrowingAutotracker` 属于外壳部分，相当于一个菜篮，里面装了从市场中选购的 `Module`以及 `Service` ，外壳一般只要一个对外接口类，可以自行定义接口开放程度。

> 如果需要高度定制化 SDK，可以创建自己的外壳类，并在 spec 配置中选择您需要依赖的 Module 以及 Service。

| 名称        |    说明    |                             依赖                             |
| :---------- | :--------: | :----------------------------------------------------------: |
| Tracker     |  埋点 SDK  | TrackerCore、MobileDebugger、Database、Network、Encryption、Compression |
| Autotracker | 无埋点 SDK | AutotrackerCore、Hybrid、MobileDebugger、WebCircle、Database、Network、Encryption、Compression |

### ** 配置项 **

对于常用的可选配置，增加了配置项，通过 Pod 引入可以实现

| 名称        |   说明    | 版本 |
| :---------- | :-------: | :---------: |
| DISABLE_IDFA     |  禁用 IDFA，且 SDK 中不会再有相关获取 IDFA 代码逻辑  | <font color='red'>>=3.2.0</font> |

:::info
使用请参考 [**常用可选模块配置**](/docs/ios/base/Configuration#%E5%B8%B8%E7%94%A8%E5%8F%AF%E9%80%89%E6%A8%A1%E5%9D%97%E9%85%8D%E7%BD%AE)
:::

## 二次开发

### 1. 创建一个外壳

因为外壳固定配置了 Module 以及 Service，所以我们需要自定义我们的外壳，才能自定义配置 Module 以及 Service ,使用 Cocoapods 配置最为方便，这里以修改 SDK 的 Autotracker 配置为例：

1. 首先自定义开发就不能使用 Cocoapods 库上的 Autotracker 版本，可以从 [Github仓库](https://github.com/growingio/growingio-sdk-ios-autotracker) 上下载最新的 Release包 （版本大于或等于 3.2.1）

2. 解压到本地，然后在原工程的 podfile 文件中修改依赖关系为路径依赖：

```
原来：
pod 'GrowingAnalytics/Autotracker'
修改后：
pod 'GrowingAnalytics/Autotracker', :path => './../growingio-sdk-ios-autotracker'
```

> 路径请设置为相对路径，例如 ./../growingio-sdk-ios-autotracker

3. 修改 GrowingAnalytics.podspec 文件中 Autotracker 的配置：

```
s.subspec 'Autotracker' do |autotracker|
  autotracker.source_files = 'GrowingAutotracker/**/*{.h,.m,.c,.cpp,.mm}'
  autotracker.dependency 'GrowingAnalytics/AutotrackerCore'
  autotracker.dependency 'GrowingAnalytics/MobileDebugger'
  autotracker.dependency 'GrowingAnalytics/WebCircle'

  autotracker.dependency 'GrowingAnalytics/Network'
  autotracker.dependency 'GrowingAnalytics/Encryption'
  autotracker.dependency 'GrowingAnalytics/Compression'
end
```

例如需要去掉 WebCirle 和 MobileDebugger ，则修改为：

```
s.subspec 'Autotracker' do |autotracker|
  autotracker.source_files = 'GrowingAutotracker/**/*{.h,.m,.c,.cpp,.mm}'
  autotracker.dependency 'GrowingAnalytics/AutotrackerCore'

  autotracker.dependency 'GrowingAnalytics/Network'
  autotracker.dependency 'GrowingAnalytics/Encryption'
  autotracker.dependency 'GrowingAnalytics/Compression'
end
```

对于 AutoTracker 中的 Service ，不建议去除，建议替换，例如 Network 负责网络，如果去除将无法进行网络数据发送，用户可以自定义一个网络 Service 来进行替换原来固有的 Network，这点后续会进行说明。

4. 执行 pod install ，所修改的 Autotracker 配置即可生效。

> Autotracker 中只包含了一个 GrowingAutotracker 类（Tracker 同理），如果用户想在其基础上修改扩展，请参考或使用这个类

### 2. 替换 Service

替换 Service 适用于想替换某个逻辑单元的代码，例如 网络服务，加密 想使用自己的。

#### 2.1 制作 Service

Service 必定继承其对应的 Protocol，例如加密 Service 对应协议为 GrowingEncryptionService：

```c
@protocol GrowingEncryptionService <GrowingBaseService>

@optional

/// event相关数据在上传之前的加密处理
/// @param data 将要加密的NSData对象
/// @param hint 盐值
- (NSData *_Nonnull)encryptEventData:(NSData *_Nonnull)data factor:(unsigned char)hint;

/// 本地数据存储加密（如当天已使用数据网络上传的数据量等）
/// @param data 将要加密的NSData对象
- (NSData *_Nonnull)encryptLocalData:(NSData *_Nonnull)data;

/// 本地数据存储解密（如当天已使用数据网络上传的数据量等）
/// @param data 将要解密的NSData对象
- (NSData *_Nonnull)decryptLocalData:(NSData *_Nonnull)data;

@end
```

您可以创建一个类，遵循 GrowingEncryptionService 协议，在对应的方法中写您自己的逻辑，例如这里在CustomEncryptionClass 中实现：

```c
- (NSData *_Nonnull)encryptEventData:(NSData *_Nonnull)data factor:(unsigned char)hint {
    NSMutableData *dataM = [[NSMutableData alloc] initWithLength:data.length];
    // 加密逻辑处理您的数据
    return dataM;
}
```

然后需要将 GrowingEncryptionService 对应的实现类 implclass 修改为您自己创建的类，例如上述的 CustomEncryptionClass，替换方案有：

1. 注解 (推荐)

```c
GrowingService(GrowingEncryptionService, CustomEncryptionClass)
```

2. 代码

初始化SDK前调用

```c
[[GrowingServiceManager sharedInstance] registerService:NSProtocolFromString(GrowingEncryptionService)
                                                                 implClass:NSClassFromString(@"CustomEncryptionClass")];
```

这样，加密服务就使用的您自己的了，下面我们需要将代码导入。

#### 2.2 替换 Service

参考 Encryption 的配置，新增一个

```c
  s.subspec 'Encryption' do |service|
      service.source_files = 'Services/Encryption/**/*{.h,.m,.c,.cpp,.mm}'
      service.dependency 'GrowingAnalytics/TrackerCore'
  end
```

并将 2.1 创建的代码放置对应的 CustomEncryption 目录下

```c
  s.subspec 'CustomEncryption' do |service|
      service.source_files = 'Services/CustomEncryption/**/*{.h,.m,.c,.cpp,.mm}'
      service.dependency 'GrowingAnalytics/TrackerCore'
  end
```

修改 spec 文件进行配置：

```c
  s.subspec 'Autotracker' do |autotracker|
      autotracker.source_files = 'GrowingAutotracker/**/*{.h,.m,.c,.cpp,.mm}'
      autotracker.dependency 'GrowingAnalytics/AutotrackerCore'
      autotracker.dependency 'GrowingAnalytics/MobileDebugger'
      autotracker.dependency 'GrowingAnalytics/WebCircle'
      
      autotracker.dependency 'GrowingAnalytics/Network'
      autotracker.dependency 'GrowingAnalytics/CustomEncryption' #原为Encryption
      autotracker.dependency 'GrowingAnalytics/Compression'
  end
```

这样 Autotracker 就替换了 Encryption 的服务。

### 3. 扩展 Module 

扩展 Module 适用于 用户有额外的业务需求的场景，这里举例了几种，都可以作为扩展 Module 进行，例如：

1. SDK 运行的同时，还想将事件写入自己的数据库中做额外操作
2. SDK 中事件少了，想添加自己的额外事件

但需要注意是单独的业务场景，您需要将逻辑全部封装在 Module 中，Module 可是使用 TrackerCore 中的类，但 TrackerCore 不应该依赖 Module 中的类。

#### 3.1 示例 1

SDK 运行的同时，还想将事件写入自己的数据库中做额外操作

1. 找到 GrowingEventManager 事件发送的入口 postEventBuidler:，可以添加拦截者来处理事件信息

```c
//拦截者做额外处理
@protocol GrowingEventInterceptor <NSObject>
@optional
- (void)growingEventManagerChannels:(NSMutableArray<GrowingEventChannel *> *)channels;
//事件被触发
- (void)growingEventManagerEventTriggered:(NSString * _Nullable)eventType;
//在未完成构造event前，返回builder
- (void)growingEventManagerEventWillBuild:(GrowingBaseBuilder* _Nullable)builder;
//在完成构造event之后，返回event
- (void)growingEventManagerEventDidBuild:(GrowingBaseEvent* _Nullable)event;
//频段事件的网络请求request对象
- (id<GrowingRequestProtocol>_Nullable)growingEventManagerRequestWithChannel:(GrowingEventChannel* _Nullable)channel;
@end
```

那么我们只需要创建一个类，添加到 GrowingEventManager 拦截者中

```c
/// 添加拦截者 - 执行顺序不保证有序
/// @param interceptor 拦截者
- (void)addInterceptor:(NSObject<GrowingEventInterceptor>* _Nonnull)interceptor;
```

即可以通过代理回调获得事件信息，然后做自己的逻辑处理。

2. Module 的处理

module 需要继承 GrowingModuleProtocol 协议

```c
#import <Foundation/Foundation.h>
#import "GrowingModuleProtocol.h"

NS_ASSUME_NONNULL_BEGIN

@interface CustomEventModule : NSObject <GrowingModuleProtocol>

@end

NS_ASSUME_NONNULL_END
```

同时使用 GrowingMod 注册 Module 到 SDK 中，并实现 growingModInit 方法，在方法中将自己添加到 GrowingEventManager 拦截者中 

```c
#import "CustomEventModule.h"
#import "GrowingEventManager.h"


GrowingMod(CustomEventModule)

@implementation CustomEventModule

- (void)growingModInit:(GrowingContext *)context {
    [[GrowingEventManager sharedInstance] addInterceptor:self];
}

- (void)growingEventManagerEventDidBuild:(GrowingBaseEvent* _Nullable)event {
    // do your work
}

@end
```

这样 Module 就实现了功能。

#### 3.2 示例 2

SDK 中事件少了，想添加自己的额外事件，这部分可以参考 https://github.com/growingio/growingio-sdk-ios-advertising 

1. 首先 SDK 中的事件均继承自 GrowingBaseEvent , 您可以继承该类或者其子类，例如 GrowingActivateEvent

```c
#import "GrowingReengageEvent.h"

NS_ASSUME_NONNULL_BEGIN
@class GrowingActivateBuilder;

@interface GrowingActivateEvent : GrowingReengageEvent

+ (GrowingActivateBuilder *_Nonnull)builder;

@end

@interface GrowingActivateBuilder : GrowingReengageBuilder

- (GrowingActivateBuilder *_Nonnull (^)(NSDictionary *_Nonnull))setExtraParams;

@end

NS_ASSUME_NONNULL_END
```

2. 发送时机由用户自定，再者就是事件如何发送，均使用 Builder 方式传入

```c
GrowingReengageBuilder *builder = GrowingReengageEvent.builder.setExtraParams(params);
[self postEventBuidler:builder];
```

3. 如果事件发送地址需要自定义，可以参考 https://github.com/growingio/growingio-sdk-ios-advertising 中的处理

```c
/// 由于vst 以及 reenage activate，发送地址和3.0不一致，需要另创建2个channel来发送
- (void)growingEventManagerChannels:(NSMutableArray<GrowingEventChannel *> *)channels {
    [channels addObject:[GrowingEventChannel eventChannelWithEventTypes:@[@"vst"]
                                                            urlTemplate:@"v3/%@/ios/pv?stm=%llu"
                                                          isCustomEvent:NO]];
    [channels addObject:[GrowingEventChannel eventChannelWithEventTypes:@[@"reengage",@"activate"]
                                                             urlTemplate:@"app/%@/ios/ctvt"
                                                           isCustomEvent:NO]];
}
```

