---
sidebar_position: 1
title: JAVA SDK
---

Java SDK 源码托管在 [growingio/growingio-java-sdk](https://github.com/growingio/growingio-java-sdk)

GrowingIO提供在Server端部署的SDK，从而可以方便的进行事件上报等操作。
> 支持 java6,7,8

----

## 依赖

我们推荐使用 Maven 管理Java 项目，请在 pom.xml 文件中，添加一下依赖信息，Maven将自动获取 Java SDK 并更新项目配置

pom.xml

```maven
<dependencies>
    <dependency>
        <groupId>io.growing.sdk.java</groupId>
        <artifactId>growingio-java-sdk</artifactId>
        <version>1.0.5</version>
    </dependency>
</dependencies>
```

若出现依赖冲突的问题（例如运行时找不到类），可以选择使用 standalone     

```maven
<dependency>
    <groupId>io.growing.sdk.java</groupId>
    <artifactId>growingio-java-sdk</artifactId>
    <version>1.0.5</version>
    <classifier>standalone</classifier>
    <exclusions>
        <exclusion>
            <groupId>org.xerial.snappy</groupId>
            <artifactId>snappy-java</artifactId>
        </exclusion>
        <exclusion>
            <groupId>org.json</groupId>
            <artifactId>json</artifactId>
        </exclusion>
    </exclusions>
</dependency>    
```

## 示例程序

```java
//事件行为消息体
GIOEventMessage eventMessage = new GIOEventMessage.Builder()
    .eventTime(System.currentTimeMillis())            // 默认为系统当前时间,选填
    .eventKey("3")                                    // 事件标识 (必填)
    .eventNumValue(1.0)                               // 打点事件数值 (选填)
    .loginUserId("417abcabcabcbac")                   // 带用登陆用户ID的 (选填)
    .addEventVariable("product_name", "苹果")          // 事件级变量 (选填)
    .addEventVariable("product_classify", "水果")      // 事件级变量 (选填)
    .addEventVariable("product_price", 14)            // 事件级变量 (选填)
    .build();

//上传事件行为消息到服务器
GrowingAPI.send(eventMessage);
```

## 配置文件信息

gio.properties

```properties
#项目采集端地址
api.host=https://api.growingio.com
#项目的AccountID
project.id=填写您项目的AccountID
#消息发送间隔时间,单位ms（默认 100）
send.msg.interval=100
#消息发送线程数量 （默认 3）
send.msg.thread=3
#消息队列大小 （默认 500）
msg.store.queue.size=500
#数据压缩 false:不压缩,true:压缩
#不压缩可节省cpu，压缩可省带宽
compress=true
#日志级别输出 (debug | error)
logger.level=debug
#自定义日志输出实现类
logger.implemention=io.growing.sdk.java.logger.GioLoggerImpl
#运行模式，test:仅输出消息体，不发送消息，production: 发送消息
run.mode=test
# 设置代理, 如果不设置，默认为不使用代理
proxy.host=127.0.0.1
proxy.port=3128
# 设置代理认证用户密码, 如果不设置，默认为不使用用户验证 [认证加密方式为 Basic base64]
proxy.user=demo
proxy.password=demo
#http 连接超时时间,默认2秒
#connection.timeout=2000
#http 连接读取时间,默认2秒
#read.timeout=2000
```

## 事件消息

* 默认采用阻塞队列，队列大小为500.
* 如果队列满了，新的消息会被丢弃（可通过 `msg.store.queue.size` 和 `send.msg.interval` 调节队列大小和消息发送间隔时间，避免丢消息）

## API

### 项目信息

|参数名称|类型|是否必填|说明|
| --- | --- | --- | --- |
|setProjectKey|string|是|项目ID|
|setDataSourceId|string|是|数据源ID|


### 自定义事件API
|参数名称|类型|是否必填|说明|
| --- | --- | --- | --- |
|eventKey|string|是|埋点事件的Key。|
|loginUserId|string|是|登录用户ID。|
|eventTime|long|否|事件发生时间。|
|addEventVariable|(string, string|double|Int)|否|事件级变量。|
|addEventVariables|map<string,object>|否|事件级变量集合。|

**代码示例**
```java
public class Demo {
    private static GrowingAPI projectA = new GrowingAPI.Builder().setProjectKey("项目ID").setDataSourceId("数据源ID").build();
    
    public static void main(String[] args) {
        sendCdpCustomEvent();
    }   
    public static void sendCdpCustomEvent() {
        Map<String, Object> map = new HashMap<String, Object>();
        GioCdpEventMessage msg = new GioCdpEventMessage.Builder()
                        .eventTime(System.currentTimeMillis())  // 默认为系统当前时间(选填)
                        .eventKey("test")  // 事件标识 (必填)
                        .loginUserId("test")  // 登录用户ID (必填)
                        .addEventVariable("product_name", "cdp苹果")  // 事件级变量 (选填)
                        .addEventVariables(map)  // 事件级变量集合 (选填)
                        .build();
        projectA.send(msg);
    }
}
```

### 物品模型API

|参数名称|类型|是否必填|说明|
| --- | --- | --- | --- |
|id|string|是|物品模型id|
|key|string|是|物品模型key|
|addItemVariable|map<string,string>|否|物品模型变量|

```java
 /**
 * send cdp item message
 */
public static void sendCdpItem() {
    //事件行为消息体
    GioCdpItemMessage msg = new GioCdpItemMessage.Builder()
            .id("item-test")                        // 物品模型id
            .key("test")                            // 物品模型key
            .addItemVariable("item_name", "cdp苹果") // 物品模型变量 (选填)
            .build();

    projectA.send(msg);

}
```

### 用户变量 API

|参数名称|类型|是否必填|说明|
| --- | --- | --- | --- |
|loginUserId|string|是|登录用户ID。|
|time|long|否|事件发生时间。|
|addUserVariable|string, string|double|Int)|否|用户变量。|
|addUserVariables|map<string,object>|否|用户变量集合。|


示例代码：

```java

public class Demo {
    private static GrowingAPI projectA = new GrowingAPI.Builder().setProjectKey("项目ID").setDataSourceId("数据源ID").build();
    public static void main(String[] args) {
        sendCdpUser();
    }
    public static void sendCdpUser() {
        Map<String, Object> map = new HashMap<String, Object>();
        //事件行为消息体
        GioCdpUserMessage msg = new GioCdpUserMessage.Builder()
        .time(System.currentTimeMillis())      
        // 默认为系统当前时间,选填
        .loginUserId("417abcabcabcbac")        
        // 带用登陆用户ID的 (必填)
        .addUserVariable("user", "test")       
        // 用户变量 (选填)
        .addUserVariables(map)                 
        // 用户变量集合 (选填)
        .build();
        projectB.send(msg);
    }
}
```

## 程序测试

请按照如下步骤进行埋点数据的开发联调。

### 完成埋点事件的配置

在GrowingIO【数据】>【数据管理】中创建自定义事件及事件属性/登录用户属性，如图所示。
![custom data](https://gblobscdn.gitbook.com/assets%2F-M2qbZInaXgdm8kkNosp%2F-M3jX91jAu6IT2O2PJVo%2F-M3jYpHFW7WpKIaXRTx1%2Fimage.png?alt=media&token=a2dae343-1204-4d36-ad08-9c7099016b11)

### 测试程序配置

1. 在您的Java项目中的pom.xml中增加GrowingIO Java SDK的依赖（首次集成需要）
2. 在gio.properties配置文件将run.mode定义为test
3. 在您的Java项目中找到合适的埋点位置，调用自定义事件API/用户变量API上传数据
4. 在输出的日志中查找是否包含期望事件内容，如下：
> gio message is [{"cs1":"10324","t":"cstm","var":{"product_name":"苹果"},"tm":1575895053509,"n":"order"}]

![code](https://gblobscdn.gitbook.com/assets%2F-M2qbZInaXgdm8kkNosp%2F-M3jX91jAu6IT2O2PJVo%2F-M3jZ7JgLc5nEzRbIQQh%2Fimage.png?alt=media&token=02d9d860-892b-43f5-b90c-4c8a9155401a)

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