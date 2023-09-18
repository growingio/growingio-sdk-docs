---
sidebar_position: 3
title: 埋点使用规范
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 规范步骤

埋点的使用建议遵循以下四个步骤：<br/>
**1. 需求规划**：“指标+属性”体系梳理<br/>
**2. 平台配置**：“指标+属性”平台配置<br/>
**3. 代码实施**：调用埋点接口实施代码<br/>
**4. 数据校验**：数据正确性校验

## 埋点事件示例

### 需求规划

在 GrowingIO 上着手进行任何分析之前，首先要确定的问题是：如何设计“指标+属性”的体系？对于部分无埋点事件，我们通过圈选确定“指标”，而“属性”则是由 GrowingIO 提供的数个预定义属性。对于埋点事件，我们可以相对更自由地选择定义“指标+属性”的体系。

更具体的说，从实际场景出发，我们需要确定在分析中需要用到哪些量化的值，然后用什么样的属性来分解这些值。

例如，对于在分析用户购买产品情况时，用户的购买产品次数，就是我们需要量化的“指标”；而每次购买所含具体产品名称、产品规格ID、付款金额等就是“属性”；产品规格ID表示产品对应的规格，使用宽、高两个标准来定义产品规格；那么对于购买产品这件事，我们就可以这样设计“指标+属性”:

**指标**：购买产品<br/>
**属性**：

* 产品规格ID
* 产品名称
* 付款金额

**维度表**：产品规格<br/>
**维度表字段**：宽、高

#### 规划方案示例

**埋点方案规划：**
<ImageLoader path="img/basicKnowledge/metricplanning" />

**属性规划：**
<ImageLoader path="img/basicKnowledge/eventVariable" />

**维度表规划：**
<ImageLoader path="img/basicKnowledge/dimensionTable" />

:::info 说明
| 名词 | 说明 |
| :-: | :---- |
| Identifier | 埋点事件标识符 |
| Event Name | 埋点事件名称 |
| Event Variable Label | 事件属性标识符 |
| Event Variable Name | 事件属性名称 |
| Trigger | 埋点事件的触发时机 |
| Type | 事件属性的类型 |
| Description | 事件属性的描述 |
:::

### 平台配置

当我们完成“指标+属性”的设计之后，请勿直接开始代码的实施，需要先到平台找到“平台管理”-->“客户数据平台”-->“事件管理”-->“埋点事件”功能，在其中完成对应的配置。已配置则无需再次配置。

这样可以避免您不小心使用了 GrowingIO 不允许的字符类型作为标识符，然后就直接上线，从而导致无法分析数据。

**根据规划方案在平台完成创建**：

#### 事件属性创建示例

<ImageLoader path="img/basicKnowledge/eventVariableCreate" />

:::info 提示
事件属性的配置项“关联维度表”为非必选项，需要与您的埋点方案相对应。<br/>
**每个事件属性最多只能关联一个维度表**<br/>
如果埋点方案中埋点事件没有对应的属性，则无需关联。<br/>
示例中“产品规格ID”事件属性需关联维度表”产品规格“，其他事件属性无需关联
:::

:::caution 注意
创建事件属性时，类型选择支持三种类型：字符串、整数、小数。<br/>
事件属性类型为整数或小数，事件分析时，该属性不会在属性拆解中出现；而是会自动生成该属性对应总和、平均值、最大值、最小值、每人总计指标。<br/>
如果您的属性是数字类型，而又希望在属性拆解时使用，不希望自动生成指标，则属性类型需设置为字符串。<br/>
:::

**维度表创建示例**：
<ImageLoader path="img/basicKnowledge/dimensionCreate" />

:::caution 注意
维度表非必须项。具体根据您的业务需求和规划方案决定是否需要使用该功能。
:::

#### 埋点事件创建示例

<ImageLoader path="img/basicKnowledge/eventCreate" />

:::info 提示
埋点事件的配置项“关联事件属性”为非必选项，需要与您的埋点方案相对应。<br/>
如果埋点方案中埋点事件没有对应的属性，则无需关联。<br/>
示例中“购买产品”包含三个属性，即需要在“关联事件属性”中关联对应的三个“事件属性”。
:::

### 代码实施

在完成了配置之后，需要开发同学在合适的地方添加埋点代码，完成以上设计的 “埋点事件和事件变量” 的实施。即调用 GrowingIO SDK 提供的API接口，上传数据。

此步骤中，建议您将设计好的规划方案交给开发同学，并将您设计的每个埋点事件与事件变量的业务含义和触发时机传达给他们，以便开发同学在实施过程中能够从数据业务场景出发，在合适的地方添加埋点代码。

接下来，请开发同学参考以下文档，完成代码的实施。下面将提供各端SDK埋点事件API的调用示例，实际应用中需要根据规划方案中的埋点具体需要在哪个端实施。

#### 维度表数据上报

维度表数据上报支持两种方式，服务端代码上报和CSV格式文档上传

**服务端代码上报示例**：

[服务端代码上报说明文档](/docs/server/Java%20SDK#维度表apicdp平台版本21)

```java
GioCdpItemMessage msg = new GioCdpItemMessage.Builder()
                .id("0001")
                .key("productRule")
                .addItemVariable("width", "60")
                .addItemVariable("height", "60")
                .build();
```

**CSV格式文档上传示例**：

| item_id | height | width |
| :-: | :-: | :-: |
| 0001 | 60 | 60

#### 埋点事件数据上报

#### Android

[埋点事件说明文档](/docs/android/api#6-设置埋点事件)
<Tabs className="unique-tabs"
  groupId="sdk-type"
  defaultValue="autotrack"
  values={[
    {label: '无埋点SDK', value: 'autotrack'},
    {label: '埋点SDK', value: 'track'},
  ]
}>

<TabItem value="autotrack">

```java
Map<String, String> map = new HashMap<>();
map.put("productRuleID_var", "0001");
map.put("productName_var", "绘画纸");
map.put("paymentAmount_var", "15.52");
GrowingAutotracker.get().trackCustomEvent("purchaseProduct", map);
```

</TabItem>
<TabItem value="track">

```java
Map<String, String> map = new HashMap<>();
map.put("productRuleID_var", "0001");
map.put("productName_var", "绘画纸");
map.put("paymentAmount_var", "15.52");
GrowingTracker.get().trackCustomEvent("purchaseProduct", map);
```

</TabItem>
</Tabs>

#### iOS

[埋点事件说明文档](/docs/ios/api#7-设置埋点事件)
<Tabs className="unique-tabs"
  groupId="sdk-type"
  defaultValue="autotrack"
  values={[
    {label: '无埋点SDK', value: 'autotrack'},
    {label: '埋点SDK', value: 'track'},
  ]
}>

<TabItem value="autotrack">

```swift
let proDict = [
    "productRuleID_var": "0001",
    "productName_var": "绘画纸",
    "paymentAmount_var": "15.52"
]
Autotracker.track("purchaseProduct", attributes: proDict)
```

</TabItem>
<TabItem value="track">

```swift
let proDict = [
    "productRuleID_var": "0001",
    "productName_var": "绘画纸",
    "paymentAmount_var": "15.52"
]
Tracker.track("purchaseProduct", attributes: proDict)
```

</TabItem>
</Tabs>

#### Web

[埋点事件说明文档](/docs/webjs/commonlyApi#6埋点事件track)

```js
  gdp('track', 'purchaseProduct', {
    productRuleID_var: "0001",
    productName_var: "绘画纸",
    paymentAmount_var: 15.52
  });
```

#### 小程序

[埋点事件说明文档](/docs/miniprogram/commonlyApi#6埋点事件track)

```js
  gdp('track', 'purchaseProduct', {
    productRuleID_var: "0001",
    productName_var: "绘画纸",
    paymentAmount_var: 15.52
  });
```

#### 服务端JAVA

[埋点事件说明文档](/docs/server/Java%20SDK#埋点事件api)

```java
GioCdpEventMessage msg = new GioCdpEventMessage.Builder()
                    .eventTime(System.currentTimeMillis())            // 默认为系统当前时间 (选填)
                    .anonymousId("device_id")    // 访问用户ID (选填)
                    .loginUserKey("account")     // 登录用户KEY (选填)
                    .loginUserId("417abcabcabcbac")// 登录用户ID (选填)
                    .eventKey("purchaseProduct")
                    .addEventVariable("productRuleID_var", "0001")
                    .addEventVariable("productName_var", "绘画纸")
                    .addEventVariable("paymentAmount_var", "15.52")
                    .build();
```

### 数据校验

代码实施后，我们当然需要对数据的正确性和是否成功上传进行校验。校验工作分为三步完成。<br/>
**第一步：通过 Debugger 工具 即时验证**<br/>
**第二步：通过 事件实时查询 查询验证**<br/>
**第三步：通过 分析图表 分析验证**

#### 1. 即时验证： 日志验证或工具验证

即时验证埋点事件主要关注以下四点：<br/>

1. 触发时机需要和埋点方案规划一致<br/>
2. "eventType": "CUSTOM" 表示事件类型为埋点事件。<br/>
3. "eventName": "purchaseProduct" 表示埋点事件标识符是 purchaseProduct，确保正确。<br/>
4. attributes 中的 key 对应事件属性，value 对应事件属性的值，确保 key 和 value 都正确。<br/>
数据关注点请参考[校验时需关注字段和说明](/docs/debugverify#校验时需关注字段和说明)。
:::info
即时校验确保采集SDK发送的数据是正确的<br/>
**服务端SDK在 debug 模式下，会输出事件数据日志，但是事件数据不会上报至服务端数据库**
:::

**日志验证：** GrowingIO SDK 提供 debug 日志输出模式。开发过程中开启 debug 模式，可在日志中查看采集端采集数据的日志。<br/>
数据关注点请参考[校验时需关注字段和说明](/docs/debugverify#校验时需关注字段和说明)。
**示例**：

```js
{
  "deviceId": "74d9922d-0781-4923-9b29-5663086a6049",
  "userId": "1234",
  "gioId": "1234",
  "sessionId": "78df8eb1-bb5b-4cb9-8534-4fe895befb25",
  "dataSourceId": "b216b87f868929e2",
  "eventType": "CUSTOM",
  "globalSequenceId": 4,
  "timestamp": 1642493805705,
  "domain": "wxff5c1a54a305fbea",
  "path": "pages/index/index",
  "query": "",
  "title": "",
  "platform": "MinP",
  "platformVersion": "Weixin 8.0.5",
  "networkState": "wifi",
  "appChannel": "scn:1001",
  "appVersion": "1.0.0",
  "screenWidth": 1125,
  "screenHeight": 2436,
  "deviceBrand": "devtools",
  "deviceModel": "iPhone 12/13 mini",
  "deviceType": "devtools",
  "language": "zh_CN",
  "sdkVersion": "3.3.3",
  "eventName": "purchaseProduct",
  "attributes": {
    "productRuleID_var": "0001",
    "productName_var": "绘画纸",
    "paymentAmount_var": 15.52
  },
  "eventSequenceId": 1
}
```

**工具验证：**
针对 iOS 和 Android APP， GrowingIO 提供了 工具校验
[Mobile Debugger](/docs/debugverify/mobiledebugger) 和 [GioKit](/docs/giokit)。<br/>
数据关注点请参考[校验时需关注字段和说明](/docs/debugverify#校验时需关注字段和说明)。

#### 2. 事件实时查询 验证

需要先在平台找到“平台管理”-->“客户数据平台”-->“数据校验”-->“事件实时查询”功能。<br/>
输入访问用户ID/登录用户ID 点击查询；访问用户ID 对应 deviceId 的值，登录用户ID 对应 userId 的值。<br/>
找到事件标识符：purchaseProduct  事件类型：custom_event 的数据 进行数据核对。<br/>
数据关注点请参考[校验时需关注字段和说明](/docs/debugverify#校验时需关注字段和说明)。
:::info
事件实时查询 验证，可确保采集数据已上报至服务端数据库<br/>
:::

#### 3. 分析图表 分析验证

需要先在平台找到“增长平台”-->“默认项目”-->“分析模型”-->“事件分析”功能。

添加指标和属性拆解，切换时间范围，切换数据展示样式。

示例：
<ImageLoader path="img/basicKnowledge/eventAnalysis" />
至此，完成埋点事件数据采集上报展示的验证。

## 用户属性事件示例

### 需求规划

用户属性可用来标记用户群体

例如，为登录用户添加年龄和等级属性，用于标记登录用户的年龄和等级信息

#### 规划方案示例

<ImageLoader path="img/basicKnowledge/userAttributes" />

### 平台配置

完成规划设计之后，请勿直接开始代码的实施，需要先到平台“平台管理”-->“客户数据平台”-->“用户管理”-->“用户属性”功能，在其中完成对应的配置。已配置则无需再次配置。

#### 用户属性事件创建示例

<ImageLoader path="img/basicKnowledge/userAttributesCreate" />

### 代码实施

开发同学根据规划方案参考以下文档，完成代码的实施。下面将提供各端SDK用户属性 API 的调用示例，实际应用中需要根据规划方案中的埋点具体需要在哪个端实施。

#### Android

[用户属性说明文档](/docs/android/api#7-设置登录用户属性)
<Tabs className="unique-tabs"
  groupId="sdk-type"
  defaultValue="autotrack"
  values={[
    {label: '无埋点SDK', value: 'autotrack'},
    {label: '埋点SDK', value: 'track'},
  ]
}>

<TabItem value="autotrack">

```java
Map<String, String> map = new HashMap<>();
map.put("age_ppl", "18");
map.put("level_ppl", "黑卡");
GrowingAutotracker.get().setLoginUserAttributes(map);
```

</TabItem>
<TabItem value="track">

```java
Map<String, String> map = new HashMap<>();
map.put("age_ppl", "18");
map.put("level_ppl", "黑卡");
GrowingTracker.get().setLoginUserAttributes(map);
```

</TabItem>
</Tabs>

#### iOS

[用户属性说明文档](/docs/ios/api#8-设置登录用户属性)
<Tabs className="unique-tabs"
  groupId="sdk-type"
  defaultValue="autotrack"
  values={[
    {label: '无埋点SDK', value: 'autotrack'},
    {label: '埋点SDK', value: 'track'},
  ]
}>

<TabItem value="autotrack">

```swift
let userDict = [
    "age_ppl": "18",
    "level_ppl": "黑卡"
]
Autotracker.setLoginUserAttributes(userDict)
```

</TabItem>
<TabItem value="track">

```swift
let userDict = [
    "age_ppl": "18",
    "level_ppl": "黑卡"
]
Tracker.setLoginUserAttributes(userDict)
```

</TabItem>
</Tabs>

#### Web

[用户属性说明文档](/docs/webjs/commonlyApi#7用户属性setuserattributes)

```js
gdp('setUserAttributes', { age_ppl: '18'， level_ppl: '黑卡' });
```

#### 小程序

[用户属性说明文档](/docs/miniprogram/commonlyApi#7登录用户属性setuserattributes)

```js
gdp('setUserAttributes', { age_ppl: '18'， level_ppl: '黑卡' });
```

#### 服务端JAVA

[用户属性说明文档](/docs/server/Java%20SDK#登录用户属性-api)

```java
GioCdpUserMessage msg = new GioCdpUserMessage.Builder()
                .time(System.currentTimeMillis())      // 默认为系统当前时间 (选填)
                .anonymousId("device_id")              // 访问用户ID (选填)
                .loginUserKey("account")               // 登录用户KEY (选填)
                .loginUserId("loginUserId")            // 登录用户ID的 (必填)
                .addUserVariable("age_ppl", "18")   // 登录用户属性
                .addUserVariable("level_ppl", "黑卡")  // 登录用户属性
                .build();
```

### 数据校验

#### 1. 即时验证

即时验证用户属性主要关注以下三点：<br/>

1. 触发时机需要和规划方案规划一致<br/>
2. "eventType": "LOGIN_USER_ATTRIBUTES" 表示事件类型为用户属性事件。<br/>
3. attributes 中的 key 对应用户属性，value 对应用户属性的值，确保 key 和 value 都正确。<br/>
:::info
即时校验只是确保采集SDK发送的数据是正确的<br/>
**服务端SDK在 debug 模式下，会输出事件日志，但是事件数据不会上报至服务端数据库**
:::

**日志验证：** GrowingIO SDK 提供 debug 日志输出模式。开发过程中开启 debug 模式，可在日志中查看 采集端采集数据的日志。<br/>
**示例**：

```js
{
  "deviceId": "74d9922d-0781-4923-9b29-5663086a6049",
  "userId": "1234",
  "gioId": "1234",
  "sessionId": "78df8eb1-bb5b-4cb9-8534-4fe895befb25",
  "dataSourceId": "b216b87f868929e2",
  "eventType": "LOGIN_USER_ATTRIBUTES",
  "globalSequenceId": 1,
  "timestamp": 1642493805521,
  "domain": "wxff5c1a54a305fbea",
  "path": "pages/index/index",
  "platform": "MinP",
  "platformVersion": "Weixin 8.0.5",
  "networkState": "wifi",
  "appChannel": "scn:1001",
  "appVersion": "1.0.0",
  "screenWidth": 1125,
  "screenHeight": 2436,
  "deviceBrand": "devtools",
  "deviceModel": "iPhone 12/13 mini",
  "deviceType": "devtools",
  "language": "zh_CN",
  "sdkVersion": "3.3.3",
  "attributes": {
    "age_ppl": "18",
    "level_ppl": "黑卡"
  },
  "eventSequenceId": 1
}
```

**工具验证：**
针对 iOS 和 Android APP， GrowingIO 提供了 工具校验
[Mobile Debugger](/docs/debugverify/mobiledebugger) 和 [GioKit](/docs/giokit)

#### 2.分析验证

需要先在平台找到“增长平台”-->“默认项目”-->“用户洞察”-->“用户属性”功能。

查找到对应的用户属性，查看对应的数据。

示例：
<ImageLoader path="img/basicKnowledge/userAttributeAnalysis" />

至此，完成用户属性数据采集上报展示的验证。
