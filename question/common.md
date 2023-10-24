---
sidebar_position: 1
title: SDK 共性问题
---

### 1. Release 版本与 Hotfix 版本怎么区别？
**A：**release 版本是正式版本；例如：release-3.3.1；hotfix版本是非正式版本，是所在版本的 Bug 紧急修复版本；Android 的 hotfix 版本对应带有日期的SNAPSHOT版本，例如：release-3.2.3-09141-SNAPSHOT； 下一个release 版本会包含上个版本的所有 hotfix 版本的内容。

### 2.  SDK 初始化参数 AccountID、DataSourceID、Host 获取方式

**A：**AccountID、DataSourceID需要在CDP增长平台上新建数据源，或从已创建的数据源中获取, 如不清楚或无权限请联系项目经理；操作步骤参考[帮助文档](/docs/android/)。

Host需要服务端部署，如不清楚请联系该项目的运维或项目经理。

### 3. SDK 集成成功，但是数据库中没有查到SDK上报的数据？
**A：**
- SDK 初始化参数 AccountID、DataSourceID、Host 填写是否正确；
- Host 是否可以访问：在IP/域名后 加healthy-check 如果返回 OK 则表示可以访问，例如：[http://cdp.growingio.com/healthy-check](http://cdp.growingio.com/healthy-check)
- web js sdk 默认不采集 localhost、127.0.0.1 页面数据；
- 服务端SDK， 如果Java SDK 运行模式，test:仅输出消息体，不发送消息，production: 发送消息；如果PHP SDK，初始化时 debug 配置为 true ，仅输出消息体，不发送消息。
  
### 4. 访问事件的计算口径是什么，各端的Session周期是怎样的？
**A：** Session 由各端SDK维护
Web端：首次访问时生成 session，当用户30分钟内无操作行为，之后有操作行为，刷新 session。<br/>
移动端：冷启动时生成 session，当App进入后台30秒后再次启动，刷新session。<br/>
小程序：冷启动时生成 session，当小程序进入后台5分钟后再次启动，刷新session。<br/>
  
### 5. 页面浏览事件的生成时机口径是什么？
**A：**页面的一次浏览行为，通过Page事件来统计的
- H5、Web：集成代码中的gdp('send'), 监听history及hashtag
- 小程序：onShow
- APP：安卓：onResume
- iOS：viewDidAppear
  
### 6. 采集数据接收的服务器(即Host)停掉之后，移动端采集到的数据会存多长时间呢。其他端的数据是否直接就丢掉了？
**A：**各端SDK侧存储时间：

- Android 2.0/3.0 7天
- iOS 3.0 7天
- iOS 2.0 持久化存储不做删除
- Web 小程序 没有持久化

### 7. GIO帮助文档有英文版吗？
**A：** 目前帮助文档还未提供英文版，产品英文版本已经在 2.2 版本上支持

### 8. GIO各端SDK采集数据的发送数据策略是怎样的？
**A：** 
发送数据策略：<br/>
WeB JS SDK: 采集数据发送策略为实时上报，即事件生成即向服务器发送请求。<br/>
小程序SDK：采集数据发送策略采用节流技术，即设置执行周期为1秒，只有在大于等于执行周期时才向服务器发送请求，执行周期内调用不发送。<br/>
iOS 和Android SDK：以每隔默认时间15秒的情况下向服务器发送事件包（最大500条事件）。<br/>
发送失败处理策略：<br/>
iOS 和Android失败后数据还在数据库中会再次发送请求；web 和小程序会一直重发；<br/>
服务端SDK，请求失败后数据直接丢弃。


### 9. 埋点和无埋点区别是什么？为什么要有埋点SDK和无埋点SDK？
**A:** 埋点和无埋点是业界常见的两种数据采集方式；
- 埋点采集属于主观数据采集，采集的范围、口径具有主观性
    优点是数据质量稳定，适合用于指标长期监测 （数据准确）
    缺点是由于实施过程中的主观性，经常导致漏埋、时机不对、参数不对等因素导致数据质量问题，需要大量的数据稽核（体现在指标梳理和数据校验）
- 无埋点采集属于客观采集，采集的范围、口径不受主观因素影响
    优点是数据采集全面，无需提前设计，适合短期数据（如投放页、活动页）的采集监测，后期运营业务人员通过界面圈选定义即可分析使用，实施工作量低，也因为客观性适合用于做机器学习的行为特征使用
    缺点是数据不受主观因素控制，与开发技术框架关连比较紧密，采集的数据价值密度低（和业务相关性低；目前支持的有原生 Android、iOS、小程序、Web）
- 无埋点SDK是包含埋点SDK全部功能的；区别在于是否支持无埋点数据采集；
- 埋点SDK默认仅自动采集预定义的访问量、访问属性数据。行为数据、业务数据需要通过埋点采集实现。（事件：VISIT、CUSTOM、LOGIN_USER_ATTRIBUTES、APP_CLOSED）
- 无埋点SDK是全量自动采集用户行为数据，同时包含埋点SDK；（事件：VISIT、CUSTOM、LOGIN_USER_ATTRIBUTES、APP_CLOSED、PAGE、VIEW_CLICK、FROM_SUBMIT）
- 无埋点SDK接入简单，只需要开人员发引入SDK，完成初始化，就可以全量的采集用户行为数据。适用于全量的，初期的分析数据采集。后期有自己的一套埋点采集方案，再加入埋点也是支持的。
- 埋点SDK具有针对性的数据采集，适合有一整套埋点方案体系的专业分析。这样采集的数据更干净、准确、具有分析的针对性；采集数据量相对少，可减少服务器成本。
- 对于一些使用第三方框架开发的APP，由于暂不支持无埋点采集，原生部分需要使用埋点SDK，第三方框架中使用对应的第三方SDK，也可以自定义适配插件，支持第三方框架的数据采集。

### 10. 客户端SDK DeviceID 生成机制简要逻辑是什么？
**A:**
- iOS： IDFA > IDFV > 随机访问用户ID
- Android：androidId  > imei > 随机访问用户ID 
- 小程序：OpenID > 随机访问用户ID
- Web: 随机访问用户ID
  
访问用户ID 的生成时机是在SDK初始化时。<br/>
iOS设备如果想要使用IDFA作为访问用户ID，需要在用户授权获取到之后初始化SDK；如果拒绝授权，iOS 按照优先级 IDFV > 随机访问用户ID, 生成访问用户ID  DeviceID；Keychain存储，删掉应用后再次安装还是同一个DeviceID。
```c
NSString *deviceId;
NSUUID *uuid = ((NSUUID * (*)(id, SEL))[sharedManager methodForSelector:advertisingIdentifierSelector])(
        sharedManager, advertisingIdentifierSelector);
deviceId = [uuid UUIDString];

deviceId = [[[UIDevice currentDevice] identifierForVendor] UUIDString];

deviceId = [[NSUUID UUID] UUIDString];
```

Android 设备首先会获取AndroidID，如果AndroidID 为空或为“9774d56d682e549c”(山寨机或其他设备)，会通过用户授权获取IMEI，如果IMEI获取不到，会随机访问用户ID  作为DeviceID。本地文件存储，删掉应用后再次按照逻辑生成可能会不一样。

```Java
String deviceId = null;

String adId = getAndroidId();
deviceId = UUID.nameUUIDFromBytes(adId.getBytes(Charset.forName("UTF-8"))).toString();
        
String imi = getImei();
deviceId = UUID.nameUUIDFromBytes(imi.getBytes(Charset.forName("UTF-8"))).toString();

deviceId = UUID.randomUUID().toString();
```

小程序：如果SDK设置了强制登录模式，小程序打开时调用 wx.login 获取openid或unionId，且调用 identify 上报openid，会使用 openid 作为 DeviceID ，否则会自动生成 随机访问用户ID 作为 DeviceID。存储在 storage 里面，删除小程序再次进入 DeviceID 会改变（DeviceID不是 openid的情况下）。参考[强制登录模式](/docs/miniprogram/initSettings#forcelogin)

Web: 随机访问用户ID  存储在 localStorage 中，永久有效。<br/>
这样复杂逻辑的目的是尽量使用 DeviceID 标识唯一一台设备，将同一台设备上的访问用户标识为同一个用户。

### 11. 移动端 SDK 2.0升3.0版本SDK 与 2.0SDK、3.0SDK的关系是什么？ 
**A:**
2.0升3.0版本SDK autotracker-upgrade (仅无埋点SDK，埋点暂不兼容) 是对 3.0 SDK API进行封装 ，实现  2.0 SDK API 可以调用 3.0 SDK API。

<ImageLoader path="img/question/2update3" />

使用：集成 2.0升3.0版本SDK + 3.0 SDK<br/>
测量协议：2.0升3.0版本SDK  按照3.0的测量协议发送数据<br/>
补充：[3.0 SDK 版本与 CDP 平台支持功能对应关系](/docs#平台支持功能的版本与-sdk版本对应关系)

### 12. 客户端 SDK path 值的生成逻辑是什么？
**A:**
- Web： 如果设置 hashtag 为 true时，hashtag会作为 path的一部分 <br/>
如URL：https://blog.growingio.com/posts/search?keywords=data<br/>
字段和值： domain: blog.growingio.com；<br/>   path:/posts/search； <br/>  query: keywords=data
- 小程序：
"path": "pages/index/index"
逻辑：从 page目录 至显示页面的目录嵌套路径。
- iOS：
"path" : "/UITabBarController/UINavigationController[1]/ViewController[0]"<br/> 
逻辑：从根 Controller到当前展示 Controller 的嵌套路径，  [1]:表示有多个 Controller 时 给Controller 分配的编号。
- Android：
"path": "/NestedFragmentActivity/GreenFragment[fragment1]"<br/> 
逻辑：从根Activity到当前展示 Fragment 的嵌套路径， [fragment1]:表示 给Fragment 设置分配的tag
内嵌H5页面：内嵌H5 页面的 path 的生成逻辑和Web 的 path 生成逻辑相同。

### 13.SDK 数据加密压缩传输是怎么实现的？
**A:**
数据加密压缩传输是SDK在发送数据请求时对数据进行加密压缩，在请求头中设置压缩和加密标记；服务端收到请求后根据请求头标记自动选择对应的解密和解压缩方式对数据进行处理。<br/> 
对SDK 日志中的数据和数据端数据库中查询到的数据没有影响。<br/> 
使用抓包工具，看到的数据将是密文数据。<br/> 
注：数据格式 JSON 和 Protobuf  都可加密压缩<br/> 
**加密算法:** VDS_XOR<br/> 
xor_code stm的16进制的最后一个字节( xor_code = stm&0xff), 对压缩的内容按字节XOR(xor_code) 
数据处理前处理方式：SendData = Encode(Crypt(Compress(Data)))<br/> 
**优势**<br/> 
数据加密增强一定的数据安全性，数据压缩可以节省一部分用户流量<br/> 
**劣势**<br/> 
会增加加密压缩的计算开销
