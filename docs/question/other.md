---
sidebar_position: 6
title: 三方框架 常见问题
---

### 1. 第三方框架采集SDK关系与原生无埋点SDK、埋点SDK调用关系时怎样的？
**A:** 第三方框架采集SDK实现中有桥接通信代码，将第三方框架SDK采集的埋点数据转发至原生埋点SDK，由原生埋点SDK 上报至采集服务器。
<ImageLoader path="img/question/otherSDK-originSDK" />

由于目前桥接通信代码中调用的是埋点SDK的 API调用类调用对应的埋点SDK API，所以APP 只能集成埋点SDK；例如 第三方框架中调用 setLoginUserID，会调用原生埋点SDK中的 setLoginUserID API，设置的登录用户ID也会在原生埋点SDK中做本地存储；如果原生代码中调用了setLoginUserID，其后触发的第三方框架中的埋点事件也会有登录用户ID字段数据(用户多身份数据同理)；如果第三方框架代码中调用了setLoginUserID，其后触发的原生代码中的埋点事件中也会有登录用户ID字段数据(用户多身份数据同理)。

无埋点SDK API调用类：Android、Apple API调用类为 GrowingAutotracker；
埋点SDK API调用类：Android、Apple API调用类为 GrowingTracker;
如果客户需要APP集成无埋点SDK，同时也需要集成第三方框架采集SDK，则需要修改第三方框架中的API调用类；即将 GrowingTracker 替换为 GrowingAutotracker
