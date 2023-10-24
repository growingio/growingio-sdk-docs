---
sidebar_position: 7
title: 服务端 常见问题
---

### 1. 日志中可以看到埋点数据，但是平台或数据库中查不到数据，是哪里的问题？
**A:** 服务端SDK 开启日志模式时，不向服务端发送数据。需要关闭日志模式。

### 2. 服务端埋点报错：PKIX path validation failed: java.security.cert.CertPathValidatorException:
**A:** validty check fail
数据验证错误，检查ssl证书是否过期，重新配置证书，或者重启nginx

### 3. JAVA SDK请求报证书错误，js端 和 iOS端 请求都没问题，可以正常上传，https://uatcollect.gmcc.net/healthy-check 也OK，该怎么处理？
**A:** 可通过 [https://www.myssl.cn/tools/check-server-cert.html](https://www.myssl.cn/tools/check-server-cert.html) 检查中间证书是否完整
通过 [https://www.ssllabs.com/ssltest/analyze.html](https://www.ssllabs.com/ssltest/analyze.html)、[https://myssl.com/ssl.html](https://myssl.com/ssl.html) 对 https进行深度检查

## Java SDK
### 1. 报错如下图所示:显示host连接超时，但是在我们自己的demo使用客户的host发数据是没有问题?
Failed to connect xxxxxx, cause connect timed out
<ImageLoader path="img/question/failedtoconnect" />

**A:** 解决方法：删除或注释 配置文件中的默认配置proxy设置

### 2. 在pom中添加依赖时，为什么找不到 jar包？
**A:** 需要在pom 和 settings.xml 中添加配置
```html
<id>oss.sonatype.org-snapshot</id>
<url>https://oss.sonatype.org/content/repositories/snapshots</url> 
```
在项目根路径下进行 `mvn-U clean compile -DskipTtests`

### 3.程序调用后为什么没有在console中打印日志信息？
**A**：需要在gio.properties配置文件将`run.mode`定义为test，才能在输出日志。
也可通过在gio.properties中配置`logger.implementation=io.growing.sdk.java.logger.GioLoggerImpl`
实现一个日志打印的类，也可输入日志

### 4.程序调用后为什么服务端没有收到数据？
**A**:需要在gio.properties配置文件将`run.mode`定义为production，才会向采集服务器发送数据。

## PHP
### 1.程序调用后为什么没有在console中打印日志信息？
**A**:需要在初始化时，配置额外的参数 `$props = array('debug' => true)`。

### 2.程序调用后为什么服务端没有收到数据？
**A**:初始化时配置了额外参数 debug 为 true，**此模式仅打印日志，不发送数据**；需要设置为 false或不设置，才会向采集服务器发送数据。