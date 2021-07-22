---
sidebar_position: 4
title: 二次开发
---

如果熟悉了自定义SDK和自定义模块后基本上就能在这些基础上进行二次开发，下面罗列了一些使用SDK的场景，并给出了推荐的做法。

#### 不熟悉Android开发或只想快速集成

那么直接参考 [如何集成](http://localhost:3000/growingio-sdk-docs/docs/android/base/Getting%20Started)，使用我们提供默认的SDK集成即可。

#### 想要集成一些额外的功能，如数据加密
可以通过API接口手动注册已有的功能模块或自己根据模块的数据定义来自己实现想要的功能。

#### 想要App线上环境去除SDK调试工具
参考 [自定义SDK](http://localhost:3000/growingio-sdk-docs/docs/android/develop/coutom%20sdk)，根据需要集成SDK。
另外可以单独给运营的同事打一个带有SDK调试工具（圈选和Mobile Debugger）的独立App。

#### 不想要某些框架想要接入自己的框架，如网络框架
参考 [自定义模块](http://localhost:3000/growingio-sdk-docs/docs/android/develop/custom%20module)，重新定义一个模块来完成自己的功能封装。

#### 在一些第三方跨应用平台上使用
一般我们会尽量提供常见的第三方平台的集成方案，若没有则可以参考 [自定义SDK](http://localhost:3000/growingio-sdk-docs/docs/android/develop/coutom%20sdk)来封装自己需要的SDK功能。