---
title: 测量协议
sidebar_position: 12
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
| eventType | string | ✅ | 事件类型：**VISIT**，<br />**CUSTOM**，<br />**VISITOR_ATTRIBUTES**，<br />**LOGIN_USER_ATTRIBUTES**，<br />**CONVERSION_VARIABLES**，<br />**APP_CLOSED**，<br />**PAGE**，<br />**PAGE_ATTRIBUTES**，<br />**VIEW_CLICK**，<br />**VIEW_CHANGE**，<br />**FORM_SUBMIT** |
| timestamp | long | ✅ | 时间戳 |
| domain | string | ✅ | APP包名或者H5页面的域名 |
| urlScheme | string | ✅ | 链接协议 |
| appState | string | ✅ | APP状态：1. FOREGROUND 前台运行 <br /> 2. BACKGROUND 后台运行 |
| globalSequenceId | long | ✅ | 全局请求编号 |
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
| latitude | double | ❌ | 维度 |
| longitude | double | ❌ | 经度 |
| sdkVersion | string | ✅ | SDK 版本号 |
| userKey | string | ❌ | 登录用户ID的类型(用户自定义) |

### 访问事件(VISIT)

* 请求发送时机：每当产生一个新的访问时
* 服务器请求地址
* 请求Body

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| imei | string | ❌ | IMEI（Android 特有）|
| androidId | string | ❌ | AndroidId（Android 特有）|
| oaid | string | ❌ | 国内的广告ID（Android 特有）|
| googleAdvertisingId | string | ❌ | google广告ID（Android 特有）|
| idfa | string | ❌ | iOS广告标识符（iOS 特有）|
| idfv | string | ❌ | iOS应用开发商标识符（iOS 特有）|
| extraSdk | Map<string, string> | ❌ | 额外的SDK信息 |

示例

```json
{
  "deviceId": "7196f014-d7bc-4bd8-b920-757cb2375ff6",
  "userId": "张三",
  "sessionId": "d5cbcf77-b38b-4223-954f-c6a2fdc0c098",
  "eventType": "VISIT",
  "timestamp": 1506069592985,
  "domain": "com.growingio.app",
  "urlScheme": "growing.756c39fb86f318cc",
  "appState": "FOREGROUND",
  "globalSequenceId": 99,
  "eventSequenceId": 3,
  "networkState": "4G",
  "appChannel": "应用宝",
  "screenHeight": 1920,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "Nexus 5",
  "deviceType": "PHONE",
  "platform": "Android",
  "platformVersion": "7.1.2",
  "appName": "看数小助手",
  "appVersion": "1.2.4",
  "language": "zh_CN",
  "latitude": 39.988518,
  "longitude": 116.478797,
  "oaid": "eeefbf75-3df7-15e0-ffb5-ff1ff09f1ec3",
  "sdkVersion": "3.0.1",
  "extraSdk": {
    "GrowingTouch": "1.2.3"
  }
}
```

### 埋点事件(CUSTOM)

* 请求发送时机：当用户主动调用track类型的接口时，半自动埋点，自主业务采集
* 服务器请求地址
* 请求Body

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| eventName | string | ✅ | 埋点事件的标识符 |
| path | string | ❌ | 埋点事件关联的page |
| pageShowTimestamp | long | ❌ | 埋点事件关联的page的显示时间戳 |
| attributes | Map<string, string> | ❌ | 埋点事件属性 |
| query | string | ❌ | Hybrid页面url 中的query |
| resourceItem | 对象 ResourceItem | ❌ | 物品模型（CDP 特有）|

** ResourceItem **

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| id | string | ✅ | 物品模型id |
| key | string | ✅ | 物品模型key |
| attributes | Map<string, string> | ❌ | 物品模型属性 |

示例
```json
{
  "deviceId": "7196f014-d7bc-4bd8-b920-757cb2375ff6",
  "userId": "张三",
  "sessionId": "d5cbcf77-b38b-4223-954f-c6a2fdc0c098",
  "eventType": "CUSTOM",
  "timestamp": 1506069592985,
  "domain": "com.growingio.app",
  "urlScheme": "growing.756c39fb86f318cc",
  "appState": "FOREGROUND",
  "globalSequenceId": 99,
  "eventSequenceId": 3,
  "eventName": "pay",
  "networkState": "4G",
  "appChannel": "应用宝",
  "screenHeight": 1920,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "Nexus 5",
  "deviceType": "PHONE",
  "platform": "Android",
  "platformVersion": "7.1.2",
  "appName": "看数小助手",
  "appVersion": "1.2.4",
  "language": "zh_CN",
  "latitude": 39.988518,
  "longitude": 116.478797,
  "sdkVersion": "3.0.1",
  "attributes": {
    "goods": "shoe",
    "brand": "Nick"
  }
  "resourceItem": {
    "key": "itemKey",
    "id": "itemId"
  }
}
```

### 用户属性事件(LOGIN_USER_ATTRIBUTES)

* 请求发送时机：当用户主动调用track类型的接口时
* 服务器请求地址
* 请求Body

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| attributes | Map<string, string> | ✅ | 登录用户属性 |

示例

```json
{
  "deviceId": "7196f014-d7bc-4bd8-b920-757cb2375ff6",
  "userId": "张三",
  "sessionId": "d5cbcf77-b38b-4223-954f-c6a2fdc0c098",
  "eventType": "LOGIN_USER_ATTRIBUTES",
  "timestamp": 1506069592985,
  "domain": "com.growingio.app",
  "urlScheme": "growing.756c39fb86f318cc",
  "appState": "FOREGROUND",
  "globalSequenceId": 99,
  "eventSequenceId": 3,
  "attributes": {
    "vipLevel": "10",
    "email": "xxx@growingio.com"
  }
}
```

### APP、小程序关闭事件(APP_CLOSED)

* 请求发送时机：当用户关闭APP时，立刻发送

* 服务器请求地址

* 请求Body

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| 无 |

示例

```json
{
  "deviceId": "7196f014-d7bc-4bd8-b920-757cb2375ff6",
  "userId": "张三",
  "sessionId": "d5cbcf77-b38b-4223-954f-c6a2fdc0c098",
  "eventType": "APP_CLOSED",
  "timestamp": 1506069592985,
  "domain": "com.growingio.app",
  "urlScheme": "growing.756c39fb86f318cc",
  "appState": "FOREGROUND",
  "globalSequenceId": 99,
  "eventSequenceId": 3,
  "networkState": "4G",
  "appChannel": "应用宝",
  "screenHeight": 1920,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "Nexus 5",
  "deviceType": "PHONE",
  "platform": "Android",
  "platformVersion": "7.1.2",
  "appName": "看数小助手",
  "appVersion": "1.2.4",
  "language": "zh_CN",
  "latitude": 39.988518,
  "longitude": 116.478797,
  "sdkVersion": "3.0.1",
}
```

### 页面浏览事件(PAGE)

* 请求发送时机：当用户打开一个页面时
* 服务器请求地址
* 请求Body

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| path | string | ✅ | 页面名 |
| orientation | string | ✅ | 屏幕显示方向:<br/> **PORTRAIT 竖向 ** <br/>** LANDSCAPE 横向 ** |
| title | string | ❌ | 页面标题 |
| referralPage | string | ❌ | 来源页面 |
| query | string | ❌ | Hybrid页面url 中的query |
| protocolType | string | ❌ | Hybrid页面url 中的协议头，如https |

示例

```json
{
  "deviceId": "7196f014-d7bc-4bd8-b920-757cb2375ff6",
  "userId": "张三",
  "sessionId": "d5cbcf77-b38b-4223-954f-c6a2fdc0c098",
  "eventType": "PAGE",
  "timestamp": 1506069592985,
  "domain": "com.growingio.app",
  "urlScheme": "growing.756c39fb86f318cc",
  "appState": "FOREGROUND",
  "globalSequenceId": 99,
  "eventSequenceId": 3,
  "path": "/NestedFragmentActivity/GreenFragment[fragment1]",
  "orientation": "PORTRAIT",
  "title": "GreenFragment",
  "networkState": "4G",
  "appChannel": "应用宝",
  "screenHeight": 1920,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "Nexus 5",
  "deviceType": "PHONE",
  "platform": "Android",
  "platformVersion": "7.1.2",
  "appName": "看数小助手",
  "appVersion": "1.2.4",
  "language": "zh_CN",
  "latitude": 39.988518,
  "longitude": 116.478797,
  "sdkVersion": "3.0.1",
}
```

### 元素点击事件(VIEW_CLICK)

* 请求发送时机：当用户点击页面元素的时候
* 服务器请求地址
* 请求Body

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| path | string | ✅ | 元素所属页面名
| pageShowTimestamp | long | ✅ | 页面显示时间 |
| textValue | string | ❌ | 元素文本内容 |
| xpath | string | ✅ | xpath标识符 |
| index | int | ❌ | 列表元素序号 |
| hyperlink | string | ❌ | Hybrid页面元素的href |
| query | string | ❌ | Hybrid页面url 中的query |

示例

```json
{
  "deviceId": "7196f014-d7bc-4bd8-b920-757cb2375ff6",
  "userId": "张三",
  "sessionId": "d5cbcf77-b38b-4223-954f-c6a2fdc0c098",
  "eventType": "VIEW_CLICK",
  "timestamp": 1506069592985,
  "domain": "com.growingio.app",
  "urlScheme": "growing.756c39fb86f318cc",
  "appState": "FOREGROUND",
  "globalSequenceId": 99,
  "eventSequenceId": 3,
  "path": "/NestedFragmentActivity/GreenFragment[fragment1]",
  "pageShowTimestamp": 1506069592985,
  "textValue": "登录",
  "xpath": "/Page/LinearLayout[0]/FrameLayout[1]/Button#login",
  "networkState": "4G",
  "appChannel": "应用宝",
  "screenHeight": 1920,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "Nexus 5",
  "deviceType": "PHONE",
  "platform": "Android",
  "platformVersion": "7.1.2",
  "appName": "看数小助手",
  "appVersion": "1.2.4",
  "language": "zh_CN",
  "latitude": 39.988518,
  "longitude": 116.478797,
  "sdkVersion": "3.0.1",
}
```

### 输入框改变内容事件(VIEW_CHANGE)

* 请求发送时机：当用户对App上的输入元素有改变的行为时
* 服务器请求地址
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
  "deviceId": "7196f014-d7bc-4bd8-b920-757cb2375ff6",
  "userId": "张三",
  "sessionId": "d5cbcf77-b38b-4223-954f-c6a2fdc0c098",
  "eventType": "VIEW_CHANGE",
  "timestamp": 1506069592985,
  "domain": "com.growingio.app",
  "urlScheme": "growing.756c39fb86f318cc",
  "appState": "FOREGROUND",
  "globalSequenceId": 99,
  "eventSequenceId": 3,
  "path": "/NestedFragmentActivity/GreenFragment[fragment1]",
  "pageShowTimestamp": 1506069592985,
  "textValue": "张三",
  "xpath": "/Page/LinearLayout[0]/FrameLayout[1]/EditText#loginName",
  "networkState": "4G",
  "appChannel": "应用宝",
  "screenHeight": 1920,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "Nexus 5",
  "deviceType": "PHONE",
  "platform": "Android",
  "platformVersion": "7.1.2",
  "appName": "看数小助手",
  "appVersion": "1.2.4",
  "language": "zh_CN",
  "latitude": 39.988518,
  "longitude": 116.478797,
  "sdkVersion": "3.0.1",
}
```

### 网页、小程序表单提交事件(FORM_SUBMIT)

* 请求发送时机：网页、小程序页面发生表单提交事件
* 服务器请求地址
* 请求Body

| 字段名称 | 数据类型 | 是否必有 | 解释说明 |
| :---- | ---- | ---- | ---- |
| path | string | ✅ | 元素所属页面名 |
| pageShowTimestamp | long | ✅ | 页面显示时间 |
| xpath | string | ✅ | xpath标识符 |
| index | int | ❌ | 列表元素序号 |
| query | string | ❌ | Hybrid页面url 中的query |

示例
```json
{
  "deviceId": "7196f014-d7bc-4bd8-b920-757cb2375ff6",
  "userId": "张三",
  "sessionId": "d5cbcf77-b38b-4223-954f-c6a2fdc0c098",
  "eventType": "FORM_SUBMIT",
  "timestamp": 1506069592985,
  "domain": "www.growingio.com",
  "urlScheme": "growing.756c39fb86f318cc",
  "appState": "FOREGROUND",
  "globalSequenceId": 99,
  "eventSequenceId": 3,
  "path": "/",
  "pageShowTimestamp": 1506069592985,
  "xpath": "/div.align-items-start.d-flex.flex-column.justify-content-between.scaffold/div.align-items-start.d-flex.flex-fill.flex-row.justify-content-start/div.full/div/form",
  "networkState": "4G",
  "appChannel": "应用宝",
  "screenHeight": 1920,
  "screenWidth": 1080,
  "deviceBrand": "google",
  "deviceModel": "Nexus 5",
  "deviceType": "PHONE",
  "platform": "Android",
  "platformVersion": "7.1.2",
  "appName": "看数小助手",
  "appVersion": "1.2.4",
  "language": "zh_CN",
  "latitude": 39.988518,
  "longitude": 116.478797,
  "sdkVersion": "3.0.1",
}
```
