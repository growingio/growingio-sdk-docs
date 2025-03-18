---
sidebar_position: 7
title: A/B测试模块
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
**使用时注意模块版本需要与采集 SDK 版本保持一致**
:::

--------

<Tabs>
  <TabItem value="swiftPM" label="Swift Package Manager集成" default>

### 模块集成

1. 添加 **GrowingModule_ABTesting** Package

<ImageLoader path="img/ios/add_package_ab_testing" width='50%'/>

2. 在 AppDelegate.swift 中导入 `import GrowingModule_ABTesting`

### 模块配置

模块中提供了相关配置：

| 配置接口              | 参数类型     | 是否必填 | 默认值 | 说明                                                         |
| :-------------------- | :----------- | :------: | :----- | :----------------------------------------------------------- |
| `abTestingRequestInterval`       | `UInt` |    否    | `5`    | 单个实验 TTL 时长，超出 TTL 时获取对应实验则重新请求；单位分钟 |
| `abTestingServerHost` | `String`   |    否     | `https://ab.growingio.com`  | 设置AB分流服务请求地址，SaaS取默认值            |
| `abTestingRequestTimeout`       | `TimeInterval` |    否    | `5`    | ABTesting 获取实验配置的请求超时时间；单位秒 |

```swift
let config = AutotrackConfig(accountId: "YourAccountId")
config?.dataCollectionServerHost = "YourServerHost"
config?.dataSourceId = "YourDatasourceId"
config?.urlScheme = "YourURLScheme"

// ABTesting 配置地址
config?.abTestingServerHost = "YourABTestingServerHost"
// 单个实验 TTL 时长
config?.abTestingRequestInterval = 5
// 获取实验配置的请求超时时间
let networkConfig = NetworkConfig()
networkConfig.abTestingRequestTimeout = 2.0
config?.networkConfig = networkConfig

Autotracker.start(config!, launchOptions: launchOptions)
```

### 获取实验配置

根据传入的 layerId，获取实验配置变量

```swift
ABTesting.fetchExperiment(_ layerId: String, completedBlock: (ABTExperiment?) -> Void)
```

| 参数             | 参数类型                                    | 是否必填 | 默认值 | 说明                                                         |
| :--------------- | :------------------------------------------ | :------: | :----- | :----------------------------------------------------------- |
| `layerId`        | `String`                                  |    是    | `nil`  | 实验层 id                                                    |
| `completedBlock` | `(ABTExperiment?) -> Void` |    否    | `nil`  | 根据返回的 experiment 判断，若 experiment 为 nil，则为请求失败，请按需重试；若 experiment.experimentId 或 experiment.strategyId 为 nil，则未命中实验 |

```swift
ABTesting.fetchExperiment("Put layerId here") { experiment in
    guard let exp = experiment else {
        return
    }
    
    if let experimentId = exp.experimentId, experimentId.count > 0,
       let strategyId = exp.strategyId, strategyId.count > 0 {
        // 命中实验
        // 获取实验配置参数
        let variables = exp.variables
    } else {
        // 未命中实验
    }
}
```

  </TabItem>
  <TabItem value="cocoapods" label="Cocoapods集成">

### 模块集成

1. 在您的 Podfile 文件中添加

```ruby
pod 'GrowingAnalytics/ABTesting'
```

打开终端，切换到项目目录，执行 `pod install` 或 `pod update`

2. 在 AppDelegate.m 中导入 `#import "GrowingABTesting.h"`

### 模块配置

ABTesting 模块中提供了相关配置：

| 配置接口              | 参数类型     | 是否必填 | 默认值 | 说明                                                         |
| :-------------------- | :----------- | :------: | :----- | :----------------------------------------------------------- |
| `abTestingRequestInterval`       | `NSUInteger` |    否    | `5`    | 单个实验 TTL 时长，超出 TTL 时获取对应实验则重新请求；单位分钟 |
| `abTestingServerHost` | `NSString`   |    是    | `https://ab.growingio.com`  | ABTesting 配置地址，示例：https://ab.growingio.com                |
| `abTestingRequestTimeout`       | `NSTimeInterval` |    否    | `5`    | ABTesting 获取实验配置的请求超时时间；单位秒 |

```objectivec
GrowingAutotrackConfiguration *configuration = [GrowingAutotrackConfiguration configurationWithProjectId:@"YourAccountId"];
configuration.dataCollectionServerHost = @"YourServerHost";
configuration.dataSourceId = @"YourDatasourceId";
configuration.urlScheme = @"YourURLScheme";

// ABTesting 配置地址
configuration.abTestingServerHost = @"YourABTestingServerHost";
// 单个实验 TTL 时长
configuration.abTestingRequestInterval = 5;
// 获取实验配置的请求超时时间
GrowingNetworkConfig *networkConfig = [GrowingNetworkConfig config];
networkConfig.abTestingRequestTimeout = 2.0f;
configuration.networkConfig = networkConfig;

[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];
```

### 获取实验配置

根据传入的 layerId，获取实验配置变量

```objectivec
+ (void)fetchExperiment:(NSString *)layerId completedBlock:(void (^)(GrowingABTExperiment *_Nullable))completedBlock;
```

| 参数             | 参数类型                                    | 是否必填 | 默认值 | 说明                                                         |
| :--------------- | :------------------------------------------ | :------: | :----- | :----------------------------------------------------------- |
| `layerId`        | `NSString`                                  |    是    | `nil`  | 实验层 id                                                    |
| `completedBlock` | `void (^)(GrowingABTExperiment *_Nullable)` |    否    | `nil`  | 根据返回的 experiment 判断，若 experiment 为 nil，则为请求失败，请按需重试；若 experiment.experimentId 或 experiment.strategyId 为 nil，则未命中实验 |

```objectivec
[GrowingABTesting fetchExperiment:@"Put layerId here" completedBlock:^(GrowingABTExperiment * _Nullable experiment) {
    if (!experiment) {
        // 请求失败
        return;
    }
    if (experiment.experimentId.length > 0 && experiment.strategyId.length > 0) {
        // 命中实验
        // 获取实验配置参数
        NSDictionary *variables = experiment.variables;
    } else {
        // 未命中实验
    }
}];
```

  </TabItem>
</Tabs>