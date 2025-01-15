---
sidebar_position: 11
title: A/B分组实验
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

分析云A/B实验产品能力，SDK侧配合提供A/B Test SDK。帮助开发者在应用程序中进行A/B测试，验证不同版本的功能效果。


--------

### SDK说明

| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| abtest  | 需要手动集成 | `ABTest` | `ABExperiment` | - |

### 依赖方式
<Tabs
  groupId="code-language"
  defaultValue="common"
  values={[
    {label: '依赖', value: 'common'},
    {label: 'BoM', value: 'bom'},
  ]
}>

<TabItem value="common">

```groovy
dependencies {
	implementation 'com.growingio.android:abtest:4.4.0'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:4.4.0')

  implementation 'com.growingio.android:abtest'
}
```

</TabItem>
</Tabs>

### 模块配置
A/B分组实验模块中提供了配置文件可以设置模块的配置：

| 配置接口                    | 参数类型         | 是否必填 | 默认值 | 说明 
| :-------------------------   | :------         | :----:  |:------  |:------| 
| setAbTestServerHost | _String_       | 否      | `https://ab.growingio.com`  | 设置AB分流服务请求地址，SaaS取默认值  |
| setAbTestExpired  | _long_ , _TimeUnit_ | 否      |  `5分`  | 配置用于设置实验结果的缓存时效     |
| setAbTestTimeout  | _long_ , _TimeUnit_  | 否      | `5秒`   | 配置AB请求超时时间 |

```java
ABTestConfig config = ABTestConfig();
config.setAbTestServerHost("Your AbTestServerHost");
config.setAbTestExpired(5, TimeUnit.MINUTES);
config.setAbTestTimeout(5,TimeUnit.SECONDS);
```

### 使用方式

```java
// 初始化无埋点SDK时, 调用方法注册A/B模块
GrowingAutotracker.startWithConfiguration(this,
                new AutotrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new ABTestLibraryGioModule(), config));
```


### 通过接口获取 A/B 分组实验
可以通过以下方法通过传入实验层Id获取具体的A/B分组实验数据。
1. `getAbTest` 该接口默认优先获取在缓存期间的实验组数据；
2. `getAbTestImmediately` 该接口会立即向服务端请求实验组数据。

| 配置参数                   | 参数类型         | 是否必填 |  说明 |
| :-------------------------   | :------         | :----: |:------| 
| layerId | _String_     | 是      | 实验层ID,用于向服务端请求实验组数据 |
| abTestCallback | _ABTestCallback_      | 是    | 接口回调，实验组数据将会在该回调中返回 |

**SDK示例代码：**
```kotlin
GrowingAutotracker.get().getAbTest(layerId,
    object : ABTestCallback {
        override fun onABExperimentReceived(experiment: ABExperiment, dataType: Int) {
            
        }

        override fun onABExperimentFailed(error: Exception) {
        }
    },
)
```

<details>
  <summary>点击查看如何获取layerId(实验层ID)</summary>

  <ImageLoader path="img/common/get_abtesting_layer_id" />

</details>

### ABTestCallback 回调
1. `onABExperimentReceived(ABExperiment experiment, int dataType)` 实验返回数据和数据来源的回调方法。
2. `onABExperimentFailed(Exception error)` 获取实验数据失败的回调方法。

**ABExperiment** 为实验返回数据，各个属性值如下表所示。

| 配置类型                   | 参数类型        | 说明 |
| :----------------------   | :------    |:------| 
| layerId | _String_  | 发出请求的实验层ID |
| strategyId | _long_  | 当前业务命中的分组ID |
| experimentId | _long_  | 当前业务命中的实验ID |
| variables | _Map{'<'}String, String{'>'}_  | 实验数据变量 |

**dataType** 表示数据来源：
* `ABTEST_CACHE = 0` 表示实验数据来源自未过期的缓存中；
* `ABTEST_HTTP = 1` 表示实验数据来源自最新的服务端请求返回数据中；
* `ABTEST_EXPIRED = 2` 表示实验数据来源自过期的缓存中（从服务端获取更新失败，过期数据使用一次后会自动清除）。
