---
id: measurement
title: 测量协议
sidebar_position: 4
---
--------------
该文章记录了 GrowingIO SDK 上传时所有的字段及其参数意义。

### 所有事件携带的信息(context)

| 字段名称 | 数据类型 | 是否必有 | 解释说明|
| :---- | ---- | ---- | ---- |
| platform | string | ✅ | 操作平台<br /> 1. Android;<br /> 2. iOS<br /> 3. Web |
| platformVersion | string | ✅ | 操作系统版本 |
| deviceId | string | ✅ | 设备ID(访问用户ID) |
| userId | string | ❌ | 登录用户ID |
| sessionId | string | ✅ | 访问会话ID |
| eventType | string | ✅ | 事件类型：**VISIT**，<br />**CUSTOM**，<br />**LOGIN_USER_ATTRIBUTES**，<br />**APP_CLOSED**，<br />**PAGE**，<br />**VIEW_CLICK**，<br />**VIEW_CHANGE**，<br />**ACTIVATE** |
| timestamp | long | ✅ | 时间戳 |
| domain | string | ✅ | APP包名或者H5页面的域名 |
| urlScheme | string | ✅ | 链接协议 |
| appState | string | ✅ | APP状态：1. FOREGROUND 前台运行 <br /> 2. BACKGROUND 后台运行 |
| eventSequenceId | long | ✅ | 事件请求编号 |
| dataSourceId | string | ✅ | CDP特有，只有在cdp上面才是必须字段 |
| gioId | string | ❌ | CDP特有，idMapping使用 |
| networkState | string | ✅ | 网络类型：**2G**,**3G**,**4G**,**5G**,**WIFI**,**UNKNOWN** |
| appChannel | string | ❌ | 应用渠道（Android 特有）|
| screenHeight | int | ✅ | 屏幕高度 |
| screenWidth | int | ✅ | 屏幕宽度 |
| deviceBrand | string | ✅ | 设备品牌 |
| deviceModel | string | ✅ | 设备型号 |
| deviceType | string | ✅ | 设备类型：**PHONE**,**PAD**,… |
| appVersion | string | ✅ | APP版本，用户配置 |
| appName | string | ✅ | APP名称 |
| language | string | ✅ | 语言, ISO 639标准 <br />Android：ISO 639 alpha-2 or alpha-3<br />iOS：ISO 639-1 code if available, or the ISO 639-2 code if not<br /> > ISO 639 不是一个稳定的标准 |
| latitude | double | ❌ | 纬度 |
| longitude | double | ❌ | 经度 |
| sdkVersion | string | ✅ | SDK 版本号 |
| userKey | string | ❌ | 登录用户ID的类型(用户自定义) |
| timezoneOffset | string | ✅ | 时区偏移  |
| operatingSystem | string | ❌ | 小程序必有，系统类型 |


### 访问事件(VISIT)

* 请求发送时机：每当产生一个新的访问时
* 请求Body

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| imei | string | ❌ | IMEI（Android 特有）|
| androidId | string | ❌ | AndroidId（Android 特有）|
| oaid | string | ❌ | 国内的广告ID（Android 特有）|
| googleAdvertisingId | string | ❌ | google广告ID（Android 特有）|
| idfa | string | ❌ | iOS广告标识符（iOS 特有）|
| idfv | string | ❌ | iOS应用开发商标识符（iOS 特有）|
| extraSdk | Map{'<'}string, string{'>'} | ❌ | 额外的SDK信息 |

示例

```json
{
  "platform": "Android",
  "platformVersion": "12",
  "deviceId": "ef512d03-9912-377f-8e6e-2bc27c9c6b9b",
  "sessionId": "351b2e50-1be9-4b17-b899-49445f305ec6",
  "eventType": "VISIT",
  "timestamp": 1692911673474,
  "domain": "com.growingio.myapplication",
  "urlScheme": "growing.12345678",
  "appState": "BACKGROUND",
  "eventSequenceId": 1,
  "dataSourceId": "12345678",
  "networkState": "WIFI",
  "screenHeight": 2160,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "sdk_gphone64_arm64",
  "deviceType": "PHONE",
  "appName": "My Application",
  "appVersion": "1.0",
  "language": "zh",
  "sdkVersion": "4.0.0-SNAPSHOT",
  "timezoneOffset": "-480",
  "androidId": "c71972f5ace2b4f9"
}
```

### 埋点事件(CUSTOM)

* 请求发送时机：当用户主动调用track类型的接口时，半自动埋点，自主业务采集
* 请求Body

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| eventName | string | ✅ | 埋点事件的标识符 |
| path | string | ❌ | 埋点事件关联的page |
| pageShowTimestamp | long | ❌ | 埋点事件关联的page的显示时间戳 |
| attributes | Map{'<'}string, string{'>'} | ❌ | 埋点事件属性 |
| query | string | ❌ | Hybrid页面url 中的query |
| resourceItem | 对象 ResourceItem | ❌ | 物品模型（CDP 特有）|

**ResourceItem**

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| id | string | ✅ | 物品模型id |
| key | string | ✅ | 物品模型key |
| attributes | Map{'<'}string, string{'>'} | ❌ | 物品模型属性 |

示例

```json
{
  "platform": "Android",
  "platformVersion": "12",
  "deviceId": "ef512d03-9912-377f-8e6e-2bc27c9c6b9b",
  "sessionId": "80210d54-66d1-42a5-beff-595985bfede3",
  "eventType": "CUSTOM",
  "timestamp": 1692911996960,
  "domain": "com.growingio.myapplication",
  "urlScheme": "growing.12345678",
  "appState": "FOREGROUND",
  "eventSequenceId": 2,
  "dataSourceId": "12345678",
  "networkState": "WIFI",
  "screenHeight": 2160,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "sdk_gphone64_arm64",
  "deviceType": "PHONE",
  "appName": "My Application",
  "appVersion": "1.0",
  "language": "zh",
  "sdkVersion": "4.0.0-SNAPSHOT",
  "timezoneOffset": "-480",
  "attributes": {
    "goods": "Shoe",
    "brand": "Nick"
  },
  "eventName": "pay"
}
```

### 用户属性事件(LOGIN_USER_ATTRIBUTES)

* 请求发送时机：当用户主动调用track类型的接口时
* 请求Body

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| attributes | Map{'<'}string, string{'>'} | ✅ | 登录用户属性 |

示例

```json
{
  "platform": "Android",
  "platformVersion": "12",
  "deviceId": "ef512d03-9912-377f-8e6e-2bc27c9c6b9b",
  "sessionId": "da55d848-82ff-4a46-94df-b005589c18ae",
  "eventType": "LOGIN_USER_ATTRIBUTES",
  "timestamp": 1692912458904,
  "domain": "com.growingio.myapplication",
  "urlScheme": "growing.12345678",
  "appState": "FOREGROUND",
  "eventSequenceId": 0,
  "dataSourceId": "12345678",
  "networkState": "WIFI",
  "screenHeight": 2160,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "sdk_gphone64_arm64",
  "deviceType": "PHONE",
  "appName": "My Application",
  "appVersion": "1.0",
  "language": "zh",
  "sdkVersion": "4.0.0-SNAPSHOT",
  "timezoneOffset": "-480",
  "attributes": {
    "vipLevel": "10",
    "email": "xxx@growingio.com"
  }
}
```

### APP、小程序关闭事件(APP_CLOSED)

* 请求发送时机：当用户关闭APP时，立刻发送

* 请求Body

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| 无 |

示例

```json
{
  "platform": "Android",
  "platformVersion": "12",
  "deviceId": "ef512d03-9912-377f-8e6e-2bc27c9c6b9b",
  "sessionId": "da55d848-82ff-4a46-94df-b005589c18ae",
  "eventType": "APP_CLOSED",
  "timestamp": 1692912530812,
  "domain": "com.growingio.myapplication",
  "urlScheme": "growing.12345678",
  "appState": "FOREGROUND",
  "eventSequenceId": 0,
  "dataSourceId": "12345678",
  "networkState": "WIFI",
  "screenHeight": 2160,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "sdk_gphone64_arm64",
  "deviceType": "PHONE",
  "appName": "My Application",
  "appVersion": "1.0",
  "language": "zh",
  "sdkVersion": "4.0.0-SNAPSHOT",
  "timezoneOffset": "-480"
}
```

### 页面浏览事件(PAGE)

* 请求发送时机：当用户打开一个页面时
* 请求Body

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| path | string | ✅ | 页面名 |
| orientation | string | ✅ | 屏幕显示方向:<br/> **PORTRAIT 竖向** <br/>**LANDSCAPE 横向** |
| title | string | ❌ | 页面标题 |
| referralPage | string | ❌ | 来源页面 |
| query | string | ❌ | Hybrid页面url 中的query |
| protocolType | string | ❌ | Hybrid页面url 中的协议头，如https |
| attributes | Map{'<'}string, string{'>'} | ❌ | 页面属性 |

示例

```json
{
  "platform": "Android",
  "platformVersion": "12",
  "deviceId": "ef512d03-9912-377f-8e6e-2bc27c9c6b9b",
  "sessionId": "b64dbce1-fbae-497e-b6fe-be3a69ae289c",
  "eventType": "PAGE",
  "timestamp": 1692912241647,
  "domain": "com.growingio.myapplication",
  "urlScheme": "growing.12345678",
  "appState": "FOREGROUND",
  "eventSequenceId": 5,
  "dataSourceId": "12345678",
  "networkState": "WIFI",
  "screenHeight": 2160,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "sdk_gphone64_arm64",
  "deviceType": "PHONE",
  "appName": "My Application",
  "appVersion": "1.0",
  "language": "zh",
  "sdkVersion": "4.0.0-SNAPSHOT",
  "timezoneOffset": "-480",
  "attributes": {
    "pageName": "MainPage"
  },
  "path": "/Main",
  "orientation": "PORTRAIT",
  "title": "My Application",
  "referralPage": ""
}
```

### 元素点击事件(VIEW_CLICK)

* 请求发送时机：当用户点击页面元素的时候
* 请求Body

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| path | string | ✅ | 元素所属页面名
| pageShowTimestamp | long | ✅ | 页面显示时间 |
| textValue | string | ❌ | 元素文本内容 |
| xpath | string | ✅ | 元素骨架 |
| xcontent | string | ✅ | 元素样式/元素位置组 |
| index | int | ❌ | 列表元素序号 |
| hyperlink | string | ❌ | Hybrid页面元素的href |
| query | string | ❌ | Hybrid页面url 中的query |

示例

```json
{
  "platform": "Android",
  "platformVersion": "12",
  "deviceId": "ef512d03-9912-377f-8e6e-2bc27c9c6b9b",
  "sessionId": "c4462783-9bd9-4b05-8775-31f8125a8599",
  "eventType": "VIEW_CLICK",
  "timestamp": 1692912568659,
  "domain": "com.growingio.myapplication",
  "urlScheme": "growing.12345678",
  "appState": "FOREGROUND",
  "eventSequenceId": 10,
  "dataSourceId": "12345678",
  "networkState": "WIFI",
  "screenHeight": 2160,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "sdk_gphone64_arm64",
  "deviceType": "PHONE",
  "appName": "My Application",
  "appVersion": "1.0",
  "language": "zh",
  "sdkVersion": "4.0.0-SNAPSHOT",
  "timezoneOffset": "-480",
  "path": "",
  "textValue": "显示悬浮窗",
  "xpath": "/MainActivity/DecorView/LinearLayout/FrameLayout/ActionBarOverlayLayout/ContentFrameLayout/LinearLayout/AppCompatTextView",
  "index": -1,
  "xcontent": "/0/0/0/0/decor_content_parent/0/0/tv1"
}
```

### 输入框改变内容事件(VIEW_CHANGE)

* 请求发送时机：当用户对App上的输入元素有改变的行为时
* 请求Body

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| path | string | ✅ | 元素所属页面名 |
| pageShowTimestamp | long | ✅ | 页面显示时间 |
| textValue | string | ❌ | 元素文本内容 |
| xpath | string | ✅ | xpath标识符 |
| index | int | ❌ | 列表元素序号 |
| hyperlink | string | ❌ | Hybrid页面元素的href|
| query | string | ❌ | Hybrid页面url 中的query |

示例

```json
{
  "platform": "Android",
  "platformVersion": "12",
  "deviceId": "ef512d03-9912-377f-8e6e-2bc27c9c6b9b",
  "sessionId": "a911d86e-200d-43be-942c-4899b9ff6aed",
  "eventType": "VIEW_CHANGE",
  "timestamp": 1692912805657,
  "domain": "com.growingio.myapplication",
  "urlScheme": "growing.12345678",
  "appState": "FOREGROUND",
  "eventSequenceId": 14,
  "dataSourceId": "12345678",
  "networkState": "WIFI",
  "screenHeight": 2160,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "sdk_gphone64_arm64",
  "deviceType": "PHONE",
  "appName": "My Application",
  "appVersion": "1.0",
  "language": "zh",
  "sdkVersion": "4.0.0-SNAPSHOT",
  "timezoneOffset": "-480",
  "path": "",
  "textValue": "张三",
  "xpath": "/MainActivity/DecorView/LinearLayout/FrameLayout/ActionBarOverlayLayout/ContentFrameLayout/LinearLayout/AppCompatEditText",
  "index": -1,
  "xcontent": "/0/0/0/0/decor_content_parent/0/0/et"
}
```

### 激活事件(ACTIVATE)

* 请求发送时机：当 App 首次激活打开时
* 请求Body

| 字段名称            | 数据类型            | 是否必有 | 解释说明                        |
| :------------------ | ------------------- | -------- | ------------------------------- |
| attributes     | Map{'<'}string, string{'>'}      | ❌        | 激活相关属性 |
| imei                | string              | ❌        | IMEI（Android 特有）            |
| androidId           | string              | ❌        | AndroidId（Android 特有）       |
| oaid                | string              | ❌        | 国内的广告ID（Android 特有）    |
| googleAdvertisingId | string              | ❌        | google广告ID（Android 特有）    |
| idfa                | string              | ❌        | iOS广告标识符（iOS 特有）       |
| idfv                | string              | ❌        | iOS应用开发商标识符（iOS 特有） |

示例

```json
{
  "platform": "Android",
  "platformVersion": "12",
  "deviceId": "ef512d03-9912-377f-8e6e-2bc27c9c6b9b",
  "sessionId": "58ef553b-9c60-4b48-8e8b-60b2b085077c",
  "eventType": "ACTIVATE",
  "timestamp": 1692912871447,
  "domain": "com.growingio.myapplication",
  "urlScheme": "growing.12345678",
  "appState": "FOREGROUND",
  "eventSequenceId": 0,
  "dataSourceId": "12345678",
  "networkState": "WIFI",
  "screenHeight": 2160,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "sdk_gphone64_arm64",
  "deviceType": "PHONE",
  "appName": "My Application",
  "appVersion": "1.0",
  "language": "zh",
  "sdkVersion": "4.0.0-SNAPSHOT",
  "timezoneOffset": "-480",
  "attributes": {
    "userAgent": "Dalvik/2.1.0 (Linux; U; Android 12; sdk_gphone64_arm64 Build/SE1A.211012.001)"
  },
  "eventName": "$app_activation",
  "androidId": "c71972f5ace2b4f9"
}
```
