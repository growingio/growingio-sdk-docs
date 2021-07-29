---
sidebar_position: 2
title: PHP SDK
---
GrowingIO提供在Server端部署的PHP SDK,从而可以方便的进行事件上报等操作。

源码托管在 [growingio/growingio-php-sdk](https://github.com/growingio/growingio-php-sdk)

> php 版本 => 5.5

----

### 集成 & 安装
php sdk已经发布在[Packagist](https://packagist.org/packages/phpmailer/phpmailer), 可以通过[Composer](https://getcomposer.org)进行安装
```composer
"growingio/php-sdk": "dev-op"
```
```php
<?php
use com\growingio\GrowingIO;
//Load Composer's autoloader
require 'vendor/autoload.php';
```
如果没有使用Composer, 可以直接下载源代码到php配置中指定的include_path目录中, 并手动加载类文件
```php
<?php
use com\growingio\GrowingIO;

include_once 'path/src/GrowingIO.php'; // path为对应路径
```

### 初始化配置
###### 初始化参数
|参数|必选|类型|默认值|说明|
|:----|:----|:----|:----|-----|
|accountID|true|string| |项目 ID,见数据源配置|
|host|true|string| |数据收集服务域名,请参考运维手册或联系技术支持获取|
|dataSourceId|true|string| |数据源 ID,见数据源配置|
|props|false|array|array()|初始化配置额外参数|
###### 初始化配置额外参数
|参数|必选|类型|默认值|说明|
|:----|:----|:----|:----|-----|
|debug|false|boolean|false|debug 模式, 此模式仅打印日志, 不发送数据|
###### 示例
```php
$accountID = '1234567887654321';
$host = 'https://localhost.com';
$dataSourceId = '12345678';
$props = array('debug' => true);

$gio = GrowingIO::getInstance($accountID, $host, $dataSourceId, $props);
```

### 数据采集API
**1\. 采集自定义事件**
###### 接口功能
> 发送一个自定义事件。在添加所需要发送的事件代码之前,需要在事件管理用户界面配置事件以及事件级变量

###### 请求参数
|参数|必选|类型|默认值|说明|
|:----|:----|:----|:----|-----|
|loginUserId|true|string| |登录用户id|
|eventKey|true|string| |事件名, 事件标识符|
|properties|false|array|array()|事件发生时,所伴随的维度信息|
|id|false|string|null|事件发生时关联的物品模型id|
|key|false|string|null|事件发生时关联的物品模型key|
###### 示例
```php
$gio->track(
    'loginUserId',
    'eventName',
    array('attrKey' => 'attrValue'),
    'itemId',
    'itemKey'
);
```
**2\. 设置登录用户变量**
###### 接口功能
> 以登录用户的身份定义用户属性变量,用于用户信息相关分析

###### 请求参数
|参数|必选|类型|默认值|说明|
|:----|:----|:----|:----|-----|
|loginUserId|true|string| |登录用户id|
|properties|true|array| |用户属性信息|
###### 示例
```php
$gio->setUserAttributes(
    'loginUserId', 
    array('gender' => 'male')
);
```
**3\. 设置物品模型**
###### 接口功能
> 上传物品模型

###### 请求参数
|参数|必选|类型|默认值|说明|
|:----|:----|:----|:----|-----|
|itemId|true|string| |物品模型id|
|itemKey|true|string| |物品模型key|
|properties|false|array|array()|物品模型属性信息|
###### 示例
```php
$gio->setItemAttributes(
    '1001',
    'product',
    array('color' => 'red')
);
```

### 集成示例
```php
<?php
use com\growingio\GrowingIO;

include_once 'path/src/GrowingIO.php'; // path为对应路径

// 请在您调试前,将accountID修改为您的项目AccountID
// 所有自定义事件需要提前在GrowingIO产品中进行定义
// 所有自定义事件的属性也需要提前在GrowingIO产品中进行定义
$accountID = '1234567887654321';
$host = 'https://localhost.com';
$dataSourceId = '12345678';
$props = array('debug' => true);
$gio = GrowingIO::getInstance($accountID, $host, $dataSourceId, $props);

// 采集自定义事件
$gio->track(
    'loginUserId',
    'eventName',
    array('attrKey' => 'attrValue'),
    'itemId',
    'itemKey'
);

// 设置登录用户变量
$gio->setUserAttributes(
    'loginUserId', 
    array('gender' => 'male')
);

// 设置物品模型
$gio->setItemAttributes(
    '1001',
    'product',
    array('color' => 'red')
);
```