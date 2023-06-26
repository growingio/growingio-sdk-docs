---
sidebar_position: 8
title: 广告模块
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

广告模块包括激活事件和深度链接(DeepLink)，激活事件是当用户应用第一次打开时有且仅发一次的事件，深度链接是提供客户通过活动网页等形式提供App渠道的跳转和下载。
在深度链接技术场景中，可以直接唤起 App 并跳转至指定页面，同时根据条件判断用户跳转路径，当用户已经安装 App 时可以直接唤起 App，当用户未安装 App 时会引导用户下载 App。

:::info
平台版本>=4.0支持，产品使用文档可参考 [深度链接](https://docs.growingio.com/op-help/docs/4.0/product-manual/acquisition-analytics/acquisition-tracing/tracking-deeplink)
:::


--------

### 深度链接配置

1. 在顶部导航栏选择 **获客分析 -> 产品配置 -> 深度链接配置**，进入深度链接配置页面

  <ImageLoader path="img/common/product_config_deeplink" />

2. 找到需要配置的 Android 应用，点击更多信息，查看当前应用的配置

3. 点击 App Links 编辑按钮，获取应用 keyStore 签名并填入表单中

  <ImageLoader path="img/android/config_app_links" />

<details>
  <summary>如何获取应用 keyStore 签名</summary>


   1. 使用命令行进入您的证书目录，一般签名分为 Debug keyStore 和 Release keyStore，开发期间建议先配置为 Debug keyStore，上线前**一定要更新为 Release keyStore**
   2. 执行以下命令：

```shell
keytool -list -v -keystore release.keystore
```

</details>

4. 点击 **复制代码片段** 按钮，进入您的应用 manifest.xml 文件中，找到入口 Activity 并粘贴

<details>
  <summary>示例格式</summary>


```xml
<activity
    android:name=".LauncherActivity"
    android:launchMode="singleTop"
    android:theme="@style/AppTheme">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>

    <!-- GrowingIO 集成配置，使用圈选和 Debugger 等功能用作唤醒 APP-->
    <intent-filter>
        <data android:scheme="growing.您的URL Scheme" />
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
    </intent-filter>

    <!-- GrowingIO App Links 配置，广告监测用途，APP 用户点击广告监测短链直接跳转 APP-->
    <intent-filter android:autoVerify="true">
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data
        android:host="Your DeepLinkHost"
        android:pathPattern="/k4rud.*"
        android:scheme="https" />
    </intent-filter>


    <intent-filter android:autoVerify="true">
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data
        android:host="Your DeepLinkHost"
        android:pathPattern="/k4r.*id.*"
        android:scheme="https" />
    </intent-filter>


    <intent-filter android:autoVerify="true">
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data
        android:host="Your DeepLinkHost"
        android:pathPattern="/k4r.*td.*"
        android:scheme="https" />
    </intent-filter>
    <!-- GrowingIO App Links 配置，广告监测用途，APP 用户点击广告监测短链直接跳转 APP-->
    
</activity>
```

</details>


:::info

- GrowingIO 暂不支持自定义 App Links 的 host，请不要修改复制的代码块中的 host

- 建议不要尝试修改或者合并 GrowingIO 所需的 Intent Filter。 See: [Google 官方解释](https://developer.android.com/training/app-links/deep-linking#adding-filters)

:::

5. 点击保存，确认修改

### SDK说明

| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| advert  | 需要手动集成 |`Activate` | `AdvertResult` | >=3.4.6 |

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
	implementation 'com.growingio.android:advert:3.5.0'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:3.5.0')

  implementation 'com.growingio.android:advert'
}
```

</TabItem>
</Tabs>

### 模块配置
Advert 广告模块中提供了配置文件可以设置模块的配置：

| 配置接口                    | 参数类型         | 是否必填 | 默认值 | 说明 
| :-------------------------   | :------         | :----:  |:------  |:------| 
| `setReadClipBoardEnable` | `Boolean`       | 否      | `true`  | 是否允许读取剪切板的应用信息  |
| `setDeepLinkHost`  | `String` | 是      |  `null`  | 是否允许该地址向应用发送链接信息，示例：https://n.datayi.cn     |
| `setDeepLinkCallback`  | `接口回调` | 否      | `null`   | 监听深度链接中的地址参数 |

```java
AdvertConfig config = new AdvertConfig();
config.setDeepLinkHost("Your DeepLinkHost")
        .setReadClipBoardEnable(true)
        .setDeepLinkCallback((params, error, appAwakePassedTime) -> {
            // accept deeplink params
        });
```

### 使用方式

<Tabs groupId="sdk-type"
  defaultValue="autotrack"
  values={[
    {label: '无埋点', value: 'autotrack'},
    {label: '埋点', value: 'track'},
  ]
}>

<TabItem value="autotrack">

```java
// 初始化无埋点SDK时, 调用方法注册广告模块
GrowingAutotracker.startWithConfiguration(this,
                new CdpAutotrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new AdvertLibraryGioModule(), config));
```

</TabItem>
<TabItem value="track">

```java
// 初始化埋点SDK时, 调用方法注册广告模块
GrowingTracker.startWithConfiguration(this,
                new CdpTrackConfiguration("accountId", "urlScheme")
                //...
                .addPreloadComponent(new AdvertLibraryGioModule(), config));
```

</TabItem>
</Tabs>

### 主动调用DeepLink接口
可以通过该方法手动发送DeepLink事件，该接口常用于应用内部广告获客接收。

| 配置接口                    | 参数类型         | 是否必填 | 默认值 | 说明
| :-------------------------   | :------         | :----:  |:------  |:------| 
| `doDeepLinkByUrl` | `String`       | 是      | `null`  | 深度链接URL，示例：https://n.datayi.cn/k4wudMXn |

**无埋点SDK示例代码：**
```java
GrowingAutotracker.get().doDeepLinkByUrl("Your DeepLinkUrl", new DeepLinkCallback() {
    @Override
    public void onReceive(Map<String, String> params, int error, long appAwakePassedTime) {
        // accept your params
    }
});
```

**埋点SDK示例代码：**
```java
GrowingTracker.get().doDeepLinkByUrl("Your DeepLinkUrl", new DeepLinkCallback() {
    @Override
    public void onReceive(Map<String, String> params, int error, long appAwakePassedTime) {
        // accept your params
    }
});
```


### 验证您的 App Links

#### 验证 Intent Filter 配置

1. 完成上述配置后，安装在手机上

2. 执行以下命令：

   ```shell
   adb shell dumpsys package d
   ```

3. 上述命令执行后的结果中，查找您应用的包名，当 Domains 已经出现与代码片段中 host 相同的字符，则说明您的 Intent Filter 配置正确，示例如下：

   ```shell
   Package: com.growingio.android.test    
   Domains: Your DeepLinkHost  
   Status:  always
   ```


#### 测试 App Links 唤起方式

当您的深度链接配置完成后，可以利用测试设备测试唤起效果，测试步骤如下：

1. 创建一条用于测试的 DeepLink

2. 在测试设备中原生场景下进行测试，如：短信、备忘录等等（不要直接在第三方软件中进行测试，第三方软件通常对 DeepLink 跳转存在限制）

3. 点击测试 DeepLink，如果可以直接跳转到 App 中，说明可以直接唤起 App，为最理想流程

4. 如果未直接跳转到 App 中，而是跳入下载引导中间页，并且系统弹窗询问是否要在应用中打开，此时可以通过 [验证 Intent Filter 配置](/docs/android/modules/advert%20module#验证-intent-filter-配置) 查看 Status，如果状态显示为 `ask`，并且确认 App Links 集成流程正确无误，则可能是当前测试设备机型在 AppLinks 遇到校验问题，对于该情况请参考下方常见问题说明

   对于 Status 状态的说明：

   | Status 状态 |                             描述                             |
   | :---------: | :----------------------------------------------------------: |
   |     ask     | App Links 校验失败, 每次打开连接跳转时会弹出一个对话框， 提示选择打开短链的 App |
   |   always    |                      校验成功，理想状态                      |
   |    never    |                       用户选择不再打开                       |
   | always-ask  | 可忽略，尚未发现这一个出现, 跟 never 一样需要手动干预才会出现 |
   |  undefined  |                  尚未校验完成， 请稍后再试                   |

#### 常见问题

Q: **多数客户可能会在验证环节得到的 Status 为 ask，这是为什么呢**

A: 

App Links 的合法性是由系统校验，不同的手机系统使用不同的校验组件，即使是一个厂商的不同型号手机都可能使用不同的校验组件。
如果系统使用 `com.android.statementservice` 进行 AppLinks 的校验，在网络正常的情况下基本都能顺利通过； 如果系统使用 `com.google.android.gms` 组件校验，因网络原因，校验有可能不通过。

常见华为 mate 系列，P 系列使用的都是 gms，也就是 Status 会为 ask。

查看自己手机是使用哪种组件，在命令行中输入以下命令：

```shell
adb shell dumpsys package i
```

综上，App Links 不能顺利通过系统检验，原因有以下可能：
- 可能是国内网络问题，使用 gms 组件校验的手机需要联通 Google 服务
- 可能是您产品配置问题，GrowingIO 填写的签名和手机上运行的 APP 签名不同

:::info

Status 状态为 ask 不代表唤起流程有问题，当用户操作允许后，后续唤起流程中将直接唤起，不会再出现询问弹窗

:::


### 应用宝微下载

GrowingIO 提供跳转到应用宝微下载的功能，应用宝微下载为腾讯应用宝体系下的微下载链接。使用应用宝微下载，在微信等腾讯旗下软件中将转至微下载逻辑

[腾讯微下载介绍](https://wikinew.open.qq.com/?title=mobile/%E5%BA%94%E7%94%A8%E5%AE%9D%E5%BE%AE%E4%B8%8B%E8%BD%BD#/iwiki/870029633)

<ImageLoader path="img/android/v_download" />

:::caution

在确认开启应用宝微下载前，请确认您已经达到腾讯微下载服务的量级标准，并且审核通过，否则直接开启将导致用户使用体验下降

:::
