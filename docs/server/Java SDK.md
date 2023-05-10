---
sidebar_position: 1
title: JAVA SDK
---

import ImageLoader from '@site/src/components/ImageLoader';

### 版本记录

|    版本    | 说明 |  日期  |
|:-------:| :----  |  :-------:  |
| 1.0.13-cdp | 1.修复initConfig不生效<br/> 2.升级pb版本为3.27.1<br/> |  2023-03-27 |
| 1.0.12-cdp | 支持埋点事件事件变量、用户变量可传列表类型 |  2022-04-20 |
| 1.0.11-cdp | 支持埋点事件可传eventTime参数 |  2022-04-02 |
| 1.0.10-cdp | 支持最近测量协议 | 2021-11-08 |
| 1.0.9-cdp | 1. 支持userKey字段设置<br/>  2. 支持设置访问用户ID<br/> | 2022-02-11 |

### 简介

Java SDK 源码托管在 [growingio/growingio-java-sdk](https://github.com/growingio/growingio-java-sdk/tree/gdp)

GrowingIO提供在Server端部署的SDK，从而可以方便的进行事件上报等操作。
> 支持 java 7+, 如需支持java 6参见 [支持 Java 6 版本环境](#支持-java-6-版本环境)

:::info
Java SDK从1.0.10-cdp版本开始使用v3协议进行事件上报, 使用前确认平台版本支持v3协议

支持的平台版本为 OP-13.6、OP-14.x、OP-2.x 版本
:::

### 集成准备

#### 获取SDK初始化必传参数：AccountID、DataSourceID、Host

:::info
AccountID：项目ID，代表一个项目<br/>
DataSourceID：数据源ID，代表一个数据源<br/>
Host：采集数据上报的服务器地址，非平台地址<br/>

AccountID、DataSourceID 需要在CDP增长平台上新建数据源，或从已创建的数据源中获取, 如不清楚或无权限请联系您的专属项目经理或技术支持
:::

##### 创建

<ImageLoader path="img/common/createapplication" />

##### 查看

<ImageLoader path="img/common/showServerDataSourceID" />

### 依赖

我们推荐使用 Maven 管理Java 项目，请在 pom.xml 文件中，添加一下依赖信息，Maven将自动获取 Java SDK 并更新项目配置

pom.xml

```xml
<dependencies>
    <dependency>
        <groupId>io.growing.sdk.java</groupId>
        <artifactId>growingio-java-sdk</artifactId>
        <version>1.0.13-cdp</version>
    </dependency>
</dependencies>
```

若出现依赖冲突的问题（例如运行时找不到类），可以选择使用 standalone

```xml
<dependency>
    <groupId>io.growing.sdk.java</groupId>
    <artifactId>growingio-java-sdk</artifactId>
    <version>1.0.13-cdp</version>
    <classifier>standalone</classifier>
    <exclusions>
        <exclusion>
            <groupId>com.google.protobuf</groupId>
            <artifactId>protobuf-java</artifactId>
        </exclusion>
    </exclusions>
</dependency>     
```

如果使用gradle依赖，可以使用如下集成方式

```gradle
implementation 'io.growing.sdk.java:growingio-java-sdk:1.0.13-cdp'
```

若出现依赖冲突的问题（例如运行时找不到类），可以选择使用 standalone

```gradle
implementation('io.growing.sdk.java:growingio-java-sdk:1.0.13-cdp:standalone') {
    exclude module: 'protobuf-java'
}
```

### 配置文件信息

配置在资源目录
resources/gio.properties

```properties
#项目采集端地址, https://api.growingio.com 需要填写完整的url地址, 如不清楚请联系您的专属项目经理
api.host=Your ServerHost
#项目的AccountID
project.id=填写您项目的AccountID
#消息发送间隔时间,单位ms（默认 100）
send.msg.interval=100
#消息发送线程数量 （默认 3）
send.msg.thread=3
#消息队列大小 （默认 500）
msg.store.queue.size=500
#日志级别输出 (debug | error)
logger.level=debug
#自定义日志输出实现类
logger.implemention=io.growing.sdk.java.logger.GioLoggerImpl
#运行模式，test:仅输出消息体，不发送消息，production: 发送消息
run.mode=test
# 设置代理, 如果不设置，默认为不使用代理
# proxy.host=127.0.0.1
# proxy.port=3128
# 设置代理认证用户密码, 如果不设置，默认为不使用用户验证 [认证加密方式为 Basic base64]
# proxy.user=demo
# proxy.password=demo
#http 连接超时时间,默认2秒
#connection.timeout=2000
#http 连接读取时间,默认2秒
#read.timeout=2000
# 带拒绝策略的发送策略，默认不采用，此策略在队列快满时打印出debug日志，并且会使用新的线程（个数同send.msg.thread）加速消费队列元素
# 但可能仍然消费速度不够，导致抛出GIOSendBeRejectedException异常，为了保险起见，使用者应当捕获该异常。
# 并且此策略新增了shutdownAwait方法关联了队列状态和JVM关闭钩子，此举旨在防止主线程关闭时，内存队列未消费的元素丢失。
# msg.store.strategy=abortPolicy
# 队列负载率，当为0.5时，表明，队列中元素达到一半时，会出现debug日志，并会使用新线程加速消费队列。队列负载降低到0.5以下后，恢复
# 此值越大，队列越接近满状态，加速线程执行的时间越提前。"加速"可能对接口接收服务造成压力，谨慎使用！
# msg.store.queue.load_factor=0.5
```

:::info 注意
请按照您的项目情况修改`api.host` 和 `project.id`。<br/>
run.mode 表示运行模式。当值为 test 时，仅输出消息体，不发送采集数据；当值为 production 时， 才向发送采集数据。

:::

#### 事件消息

* 默认采用阻塞队列，队列大小为500.
* 如果队列满了，新的消息会被丢弃（可通过 `msg.store.queue.size` 和 `send.msg.interval` 调节队列大小和消息发送间隔时间，避免丢消息）

### 代码示例

```java
// Config GrowingIO
// 参数需要从CDP增长平台上，创建新应用，或从已创建的数据源中获取, 如不清楚请联系您的专属项目经理
// YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
// YourDatasourceId eg: 11223344aabbcc
private static GrowingAPI project = new GrowingAPI.Builder().setProjectKey("your accountId").setDataSourceId("your dataSourceId").build();

//事件行为消息体，anonymousId 和 loginUserId 参数，不能同时为空
GioCdpEventMessage eventMessage = new GioCdpEventMessage.Builder()
    .eventTime(System.currentTimeMillis())            // 默认为系统当前时间 (选填)
    .eventKey("3")                                    // 埋点事件标识 (必填)
    .eventNumValue(1.0)                               // 打点事件数值 (选填), 已废弃
    .anonymousId("device_id")                         // 访问用户ID (选填)
    .loginUserKey("account")                          // 登录用户KEY (选填)
    .loginUserId("417abcabcabcbac")                   // 登陆用户ID (选填)
    .addEventVariable("product_name", "苹果")          // 事件属性 (选填)
    .addEventVariable("product_classify", "水果")      // 事件属性 (选填)
    .addEventVariable("product_price", 14)            // 事件属性 (选填)
    .addItem("item_id", "item_key")                   // 物品模型ID, KEY (选填)
    .build();

//上传事件行为消息到服务器
project.send(eventMessage);
```

## API说明

### 设置项目信息

**参数说明**

| 参数名称        | 类型   | 是否必填 | 说明     |
| :--------------- | :------: | :--------: | -------- |
| setProjectKey   | string | 是       | 项目ID   |
| setDataSourceId | string | 是       | 数据源ID |

```java
// Config GrowingIO
// 参数需要从CDP增长平台上，创建新应用，或从已创建的数据源中获取, 如不清楚请联系您的专属项目经理
// YourAccountId eg: 0a1b4118dd954ec3bcc69da5138bdb96
// YourDatasourceId eg: 11223344aabbcc
private static GrowingAPI project = new GrowingAPI.Builder().setProjectKey("your accountId").setDataSourceId("your dataSourceId").build();
```

### 埋点事件

发送一个埋点事件。在添加发送的埋点事件代码之前，需在CDP平台事件管理界面创建埋点事件以及关联事件属性

**参数说明**

| 参数名称         | 类型                          | 是否必填 | 说明               |
| :-------------- | :---------------------------: | :--------------: | ------------------ |
| eventTime         | long                          | 否       | 事件发生时间(毫秒)；<br/>需要开启“自定义event_time上报”功能方可生效，请联系技术支持确认 |
| eventKey          | string                        | 是       | 埋点事件标识 |
| anonymousId       | string                        | 否       | 访问用户ID，与登录用户ID，不能同时为空 |
| loginUserKey      | string                        | 否       | 登录用户KEY，传此参数时，同时需传登录用户ID |
| loginUserId       | string                        | 否       | 登录用户ID，与访问用户ID，不能同时为空|
| addEventVariable  | (string, object)              | 否       | 事件发生时所伴随的属性信息；<br/>object支持 string\|double\|int\|List,List 中元素支持string\|double\|int；<br/>当事件属性关联有维度表时，属性值为对应的维度表模型ID(记录ID) |
| addEventVariables | map<string,object>            | 否       | 事件属性集合；<br/>object支持 string\|double\|int\|List,List 中元素支持string\|double\|int；<br/>当事件属性关联有维度表时，属性值为对应的维度表模型ID(记录ID)                |
| addItem           | (string, string)              | 否       | 物品模型ID, 物品模型Key |

**代码示例**

```java
// anonymousId 和 loginUserId 参数，不能同时为空
GioCdpEventMessage msg = new GioCdpEventMessage.Builder()
                    .eventTime(System.currentTimeMillis())            // 默认为系统当前时间 (选填)
                    .eventKey("eventKey")                             // 事件标识 (必填)
                    .anonymousId("device_id")                         // 访问用户ID (选填)
                    .loginUserKey("account")                          // 登录用户KEY (选填)
                    .loginUserId("417abcabcabcbac")                   // 登录用户ID (选填)
                    .addEventVariable("product_name", "cdp苹果")       // 事件属性 (选填)
                    .addEventVariable("product_classify", Arrays.asList("苹果", "香蕉"))       // 事件属性 (选填)
                    .addEventVariables(map)                           // 事件属性集合 (选填)
                    .addItem("itemId", "itemKey")                     // 物品模型ID, KEY (选填)
                    .build();
```

:::info

详细使用示例:[埋点事件示例](/docs/basicknowledge/trackEventUse#埋点事件示例)

:::

### 登录用户属性事件

以登录用户的身份定义登录用户属性，比如年龄、性别、会员等级等，用于用户信息相关分析。<br/>
在添加登录用户属性代码之前，需要在CDP平台用户管理界面中创建用户属性

**参数说明**

| 参数名称         | 类型                          | 是否必填 | 说明               |
| :-------------- | :---------------------------: | :--------: | ------------------ |
| time             | long                          | 否       | 事件发生时间(毫秒) |
| anonymousId      | string                        | 否       | 访问用户ID，与登录用户ID，不能同时为空  |
| loginUserKey     | string                        | 否       | 登录用户KEY，传此参数时，同时需传登录用户ID |
| loginUserId      | string                        | 是       | 登录用户ID，与访问用户ID，不能同时为空 |
| addUserVariable  | (string, object)              | 否       | 登录用户属性；<br/>object支持 string\|double\|int\|List,List中元素支持string\|double\|int      |
| addUserVariables | map<string,object>            | 否       | 登录用户属性集合；<br/>object支持 string\|double\|int\|List,List 中元素支持string\|double\|int   |

**代码示例**

```java
// anonymousId 和 loginUserId 参数，不能同时为空
GioCdpUserMessage msg = new GioCdpUserMessage.Builder()
                .time(System.currentTimeMillis())      // 默认为系统当前时间 (选填)
                .anonymousId("device_id")              // 访问用户ID (选填)
                .loginUserKey("account")               // 登录用户KEY (选填)
                .loginUserId("loginUserId")            // 登录用户ID的 (选填)
                .addUserVariable("gender", "man")      // 登录用户属性 (选填)
                .addUserVariable("education", Arrays.asList("本科", "硕士"))      // 登录用户属性 (选填)
                .addUserVariables(map)                 // 登录用户属性集合 (选填)
                .build();
```

:::info

详细使用示例:[用户属性事件示例](/docs/basicknowledge/trackEventUse#用户属性事件示例)

:::

### 物品模型(CDP平台版本<2.1)

发送一个物品模型。在添加所需要发送的物品模型代码之前，需要在物品管理界面中创建对应物品及其属性

**参数说明**

| 参数名称        | 类型               | 是否必填 | 说明                                 |
| --------------- | ------------------ | -------- | ------------------------------------ |
| id              | string             | 是       | 物品模型ID                           |
| key             | string             | 是       | 物品模型KEY                          |
| addItemVariable | map<string,string> | 否       | 物品模型属性及值；多个属性可调用多次 |

**代码示例**

```java
GioCdpItemMessage msg = new GioCdpItemMessage.Builder()
                .id("1001")                        // 物品模型ID (必填)
                .key("product")                    // 物品模型KEY (必填)
                .addItemVariable("color", "red")   // 物品模型属性 (选填)
                .build();
```

### 维度表(CDP平台版本>=2.1)

上传一个维度表记录。在添加所需要上传维度表记录代码之前，需要在维度表管理界面中创建对应维度表及其属性

**参数说明**

| 参数名称        | 类型               | 是否必填 | 说明                               |
| --------------- | ------------------ | -------- | ---------------------------------- |
| id              | string             | 是       | 维度表模型ID(记录ID)               |
| key             | string             | 是       | 维度表标识符                       |
| addItemVariable | map<string,string> | 否       | 维度表属性及值；多个属性可调用多次 |

**代码示例**

```java
GioCdpItemMessage msg = new GioCdpItemMessage.Builder()
                .id("1001")                        // 维度表模型ID(记录ID) (必填)
                .key("product")                    // 维度表标识符 (必填)
                .addItemVariable("color", "red")   // 维度表属性 (选填)
                .build();
```

### 用户融合

可将不同类型的登录用户ID识别为一个登录用户

**参数说明**

| 参数名称      | 类型               | 是否必填 | 说明                  |
| ------------- | ------------------ | -------- | --------------------- |
| addIdentities | (string, string)   | 否       | 用户KEY, 用户ID       |
| addIdentities | map<string,string> | 否       | (用户KEY, 用户ID)集合 |

**代码示例**

```java
GioCdpUserMappingMessage msg = new GioCdpUserMappingMessage.Builder()
        .addIdentities("phone", "1**********1")          // 登录用户KEY, 登录用户ID
        .addIdentities("email", "2********0@qq.com")     // 登录用户KEY, 登录用户ID
        .addIdentities(map)
        .build();
```

## 程序测试

请按照如下步骤进行埋点数据的开发联调。

### 完成埋点事件的配置

在GrowingIO【数据】>【数据管理】中创建埋点事件及事件属性/登录用户属性，如图所示。
![custom data](https://3953104361-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M2qbZInaXgdm8kkNosp%2F-M3jX91jAu6IT2O2PJVo%2F-M3jYpHFW7WpKIaXRTx1%2Fimage.png?alt=media&token=a2dae343-1204-4d36-ad08-9c7099016b11)

### 测试程序配置

1. 在您的Java项目中的pom.xml中增加GrowingIO Java SDK的依赖（首次集成需要）
2. 在gio.properties配置文件将run.mode定义为test
3. 在您的Java项目中找到合适的埋点位置，调用埋点事件API/登录用户属性API上传数据
4. 在输出的日志中查找是否包含期望事件内容，如下：

> gio message is [{"cs1":"10324","t":"cstm","var":{"product_name":"苹果"},"tm":1575895053509,"n":"order"}]

![code](https://3953104361-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M2qbZInaXgdm8kkNosp%2F-M3jX91jAu6IT2O2PJVo%2F-M3jZ7JgLc5nEzRbIQQh%2Fimage.png?alt=media&token=02d9d860-892b-43f5-b90c-4c8a9155401a)

完成以上测试步骤后：

1. 修改gio.properties文件并将run.mode定义为production，并触发埋点事件 。
2. 在线查询GrowingIO数据库，确认数据上传成功。

## Debugger选项

### SDK log 输出级别

通过以下配置可以控制 sdk 的日志输出级别

```xml
# debug: 输出 debug 信息，建议连调阶段开启，可输出消息的发送报文
# error: 仅输出 错误日志，不会输出 debug 级别的信息
logger.level=debug
```

### 自定义SDK log 输出

通过以下配置，可自定义日志输出实现类, 默认为 `io.growing.sdk.java.logger.GioLoggerImpl` 会将日志输出到 控制台

```xml
logger.implementation=io.growing.sdk.java.demo.DemoLogger
```

自定义日志输出实现类示例，DemoLogger 类需要客户自己实现，客户可根据自己的系统内部的日志工具将 sdk 的日志输出，并制定适合自己业务的日志保存策略

```java
public class DemoLogger implements GioLoggerInterface {
    private final Logger logger = LoggerFactory.getLogger(DemoLogger.class);

    public void debug(String msg) {
        logger.debug(msg);
    }

    public void error(String msg) {
        logger.error(msg);
    }
}
```

比如以上 demo 中，采用的就是 SLF4J 和 Log4j2 的组合, 客户可通过自己的日志工具定制 日志保留时间，及日志存储大小。

### 自定义配置文件路径

* 需要在 GrowingAPI 初始化之前调用 initConfig(String configFilePath)，进行配置初始化

### 自定义配置

* 如果需要自定义 Properties 进行配置初始化，则需要在 GrowingAPI 初始化之前调用 `initConfig(Properties properties)`，进行配置初始化。
* 自定义 properties key 参考 `gio_default.properties` 文件


### 支持 Java 6 版本环境
Protobuf 从 3.6.0 版本开始不再支持 java 6，相关信息参见[Drop java 6 support](https://github.com/protocolbuffers/protobuf/pull/4224)

使用如下依赖方式，依赖java 6的pb版本
```xml
<dependency>
    <groupId>io.growing.sdk.java</groupId>
    <artifactId>growingio-java-sdk</artifactId>
    <version>1.0.13-cdp</version>
    <exclusions>
        <exclusion>
            <groupId>com.google.protobuf</groupId>
            <artifactId>protobuf-java</artifactId>
        </exclusion>
    </exclusions>
</dependency>

<dependency>
    <groupId>com.google.protobuf</groupId>
    <artifactId>protobuf-java</artifactId>
    <version>3.5.1</version>
</dependency>
```