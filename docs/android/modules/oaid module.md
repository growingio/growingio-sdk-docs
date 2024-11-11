---
sidebar_position: 5
title: OAID 模块
---

在 Android 10 版本中，非系统应用无法获取 IMEI。加上以前 Android 版本已经对 MAC 地址， AndroidID 的获取做了限制， 在 Android10 中缺少一种唯一标记设备的标识符。 在海外， Google 推荐使用 Google 的广告 ID 作为广告的唯一识别符，在国内[移动安全联盟MSA](http://www.msa-alliance.cn/col.jsp?id=120) 联合各大手机制造商推出了 OAID 的概念， 作为唯一广告标识符。OAID 的准确性和覆盖率均满足广告场景的使用需求。

GrowingIO SDK 集成 OAID 模块后将会在访问事件中携带 oaid 字段，可以帮助用于广告的渠道追踪。

:::caution
项目需要添加[国内移动安全联盟MSA](http://www.msa-alliance.cn/col.jsp?id=120)下的sdk。
在 OAID SDK 1.0.26及其后续版本，获得OAID值需要传入从 MSA 机构获得的证书；

3.3.0 ~ 3.3.3版本无法传入客户自己获得的OAID值或OAID证书，若需要这些功能，请使用版本>=3.3.4 SDK。
:::

--------
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### SDK说明
| 关键词   | 是否集成|  输入数据类 | 输出数据类 | 最低SDK版本 |
| :------- | :------:   | --:|  ---:| :---|
| oaid  | 需要手动集成 | `OaidHelper` | `String` | >=3.3.4 |

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
	implementation 'com.growingio.android:oaid:3.5.4'
}
```
</TabItem>

<TabItem value="bom">

```groovy
dependencies {
  // Import the BoM for the GrowingIO platform
  implementation platform('com.growingio.android:autotracker-bom:3.5.4')

  implementation 'com.growingio.android:oaid'
}
```

</TabItem>
</Tabs>

### 模块配置
OAID 模块中提供了配置文件可以设置OAID的来源，默认优先级为：
1. 直接提供从移动安全联盟SDK中获取到的OAID值，`setProvideOaid` 或者异步回调 `setProvideOaidCallback`; (推荐)
2. 提供证书内容，SDK会通过提供的证书去请求OAID值 `setProvideCert`;
3. 提供证书在 `asset` 的地址 `setProvideCertAsset`;
4. 通过异步回调提供证书内容 `setProvideCertCallback`;
5. 若以上策略都未通过，则会默认从asset下获取 context.getPackageName() + ".cert.pem" 名称的证书。

```java
// 请选择其中一种方式传入oaid，若多处设置，则按照以下优先级获取
// provideOaid -> OnProvideOaidCallback
// 请提供oaid需要的证书，默认将从asset下获取 context.getPackageName() + ".cert.pem" 名称的证书。若多处设置，则按照以下优先级获取
// provideCert -> provideCertAsset -> OnProvideCertCallback -> 默认
OaidConfig oaidConfig = new OaidConfig();
oaidConfig.setProvideOaid("<YOUR OAID>");
// 或者
oaidConfig.setProvideOaidCallback(context -> {
    //require oaid logic,it's will run in sub thread.
    return "<YOUR OAID>";
});
// 或者
oaidConfig.setProvideCert("<YOUR CERT VALUE>");
// 或者
oaidConfig.setProvideCertAsset("<THE PATH OF YOUR CERT IN ASSET>");
// 或者
oaidConfig.setProvideCertCallback(new OaidConfig.OnProvideCertCallback() {
    @Override
    public String provideCertJob(Context context) {
        //require cert logic,it's will run in sub thread.
        return "<YOUR CERT VALUE>";
    }
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
// 初始化SDK时，可以提前注册 oaid 模块
GrowingAutotracker.startWithConfiguration(this,
        new CdpAutotrackConfiguration("accountId", "urlScheme")
        // ...
        .addPreloadComponent(new OaidLibraryGioModule(), oaidConfig)

);
```

</TabItem>
<TabItem value="track">

```java
// 初始化SDK时，可以提前注册 oaid 模块
GrowingTracker.startWithConfiguration(this,
        new CdpTrackConfiguration("accountId", "urlScheme")
        //...
        .addPreloadComponent(new OaidLibraryGioModule(), oaidConfig)
);
```

</TabItem>
</Tabs>

### 示例
配置完成后之后会在 `Visit` 事件中添加 `oaid` 字段：

```json
    ╔═══════════════════════════════════════════════════════════════════════════════════════
    ║ {
    ║   "eventType": "VISIT",
    ║   "oaid": "xxxxxxx-xxxxx-xxxxxx",
    ║   "deviceId": "c2369951-098c-34ec-831c-858fe348df1d",
    ║   // ...
    ║ }
    ╚═══════════════════════════════════════════════════════════════════════════════════════
```
