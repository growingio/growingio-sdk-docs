---
sidebar_position: 2
title: PHP SDK
---

### 版本记录
|    版本    | 说明 |  日期  |
|:-------:| :----:  |  :-------:  |
| v1.0.3 | 支持埋点事件事件变量、用户变量可传列表类型 |  2022-04-20 |
| v1.0.2 | 支持埋点事件可传eventTime参数 |  2022-04-02 |
| v1.0.1 | 支持userKey字段设置 | 2022-02-11 |

### 简介
GrowingIO提供在Server端部署的PHP SDK,从而可以方便的进行事件上报等操作。

源码托管在 [growingio/growingio-php-sdk](https://github.com/growingio/growingio-php-sdk)

> php 版本 => 5.5
---

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

### 集成 & 安装
php sdk已经发布在[Packagist](https://packagist.org/packages/growingio/php-sdk), 可以通过[Composer](https://getcomposer.org)进行安装
```composer
"growingio/php-sdk": "1.0.3"
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
| 参数         | 必选  | 类型   | 默认值  | 说明                                              |
| :----------- | :---- | :----- | :------ | ------------------------------------------------- |
| accountID    | true  | string |         | 项目 ID,见数据源配置                              |
| host         | true  | string |         | 数据收集服务域名,请参考运维手册或联系技术支持获取 |
| dataSourceId | true  | string |         | 数据源 ID,见数据源配置                            |
| props        | false | array  | array() | 初始化配置额外参数                                |
###### 初始化配置额外参数
| 参数  | 必选  | 类型    | 默认值 | 说明                                     |
| :---- | :---- | :------ | :----- | ---------------------------------------- |
| debug | false | boolean | false  | debug 模式, 此模式仅打印日志, 不发送数据 |

**代码示例**
```php
$accountID = '1234567887654321';
$host = 'https://localhost.com';
$dataSourceId = '12345678';
$props = array('debug' => true);

$gio = GrowingIO::getInstance($accountID, $host, $dataSourceId, $props);
```

## API说明
### 埋点事件
发送一个埋点事件。在添加发送的埋点事件代码之前，需在CDP平台事件管理界面创建埋点事件以及关联事件属性

**参数说明**

| 参数         | 是否必填  | 类型   | 默认值           | 说明                                                                     |
| :----------- | :----: | :-----: | :---------------: | ---------- |
| eventTime    | false | int    | 当前时间的时间戳 | 事件发生时间(毫秒)；<br/>需要开启“自定义event_time上报”功能方可生效，请联系技术支持确认 |
| loginUserKey | false | string |                  | 登录用户KEY，传此参数时，同时需传登录用户ID |
| anonymousId  |   false  | string           |      | 访问用户ID，与登录用户ID，不能同时为空 |
| loginUserId  | false  | string |                  | 登录用户ID，与访问用户ID，不能同时为空 |
| eventKey     | true  | string |                  | 埋点事件标识符 |
| properties   | false | array  | array()          | 事件发生时,所伴随的维度信息；<br/>value支持 string\|double\|int\|数组,数组中元素支持string\|double\|int    |
**代码示例**
```php
$gio->trackCustomEvent($gio->getCustomEventFactory('loginUserId', 'eventName')
    ->setEventTime(1648524854000)
    ->setLoginUserKey('loginUserKey')
    ->setProperties(array('attrKey1' => 'attrValue1', 'attrKey2' => 'attrValue2', 'attrKey3' => array("Volvo","BMW","Toyota")))
    ->create());
```

:::info

详细使用示例:[埋点事件示例](/knowledge/basicknowledge/trackEventUse#埋点事件示例)

:::
### 登录用户属性事件
以登录用户的身份定义登录用户属性，比如年龄、性别、会员等级等，用于用户信息相关分析<br/>
在添加登录用户属性代码之前，需要在CDP平台用户管理界面中创建用户属性

**参数说明**

| 参数         | 是否必填  | 类型   | 默认值 | 说明         |
| :----------- | :----: | :-----: | :----- | ------------ |
| loginUserKey | false | string |        | 登录用户KEY，传此参数时，同时需传登录用户ID |
| loginUserId  | false  | string |        | 登录用户ID，与访问用户ID，不能同时为空 |
| anonymousId  | false | string  |        | 访问用户ID，与登录用户ID，不能同时为空  |
| properties   | true  | array  |        | 用户属性信息；<br/>value支持 string\|double\|int\|数组,数组中元素支持string\|double\|int |

**代码示例**
```php
$gio->setUserAttributesEvent($gio->getUserAttributesFactory('loginUserId')
    ->setLoginUserKey('loginUserKey')
    ->setProperties(array('gender' => 'male', 'age' => '18','education' => array('本科','硕士')))
    ->create());
```
:::info

详细使用示例:[用户属性事件示例](/knowledge/basicknowledge/trackEventUse#用户属性事件示例)

:::


### 维度表
上传一个维度表记录。在添加所需要上传维度表记录代码之前，需要在维度表管理界面中创建对应维度表及其属性

**参数说明**

| 参数       | 必选  | 类型   | 默认值  | 说明             |
| :--------- | :---- | :----- | :------ | ---------------- |
| itemId     | true  | string |         | 维度表模型ID(记录ID)|
| itemKey    | true  | string |         | 维度表标识符        |
| properties | false | array  | array() | 维度表属性及值      |

**代码示例**
```php
$gio->setItemAttributes(
    '1001',
    'product',
    array('color' => 'red')
);
```
## 集成示例
```php
<?php
use com\growingio\GrowingIO;

include_once 'path/src/GrowingIO.php'; // path为对应路径

// 请在您调试前,将accountID修改为您的项目AccountID
// 所有埋点事件需要提前在GrowingIO产品中进行定义
// 所有埋点事件的属性也需要提前在GrowingIO产品中进行定义
$accountID = '1234567887654321';
$host = 'https://localhost.com';
$dataSourceId = '12345678';
$props = array('debug' => true);
$gio = GrowingIO::getInstance($accountID, $host, $dataSourceId, $props);

// 采集自定义事件
$gio->trackCustomEvent($gio->getCustomEventFactory('loginUserId', 'eventName')
    ->setLoginUserKey('loginUserKey')
    ->setProperties(array('attrKey1' => 'attrValue1', 'attrKey2' => 'attrValue2'))
    ->create()
);

// 设置登录用户变量
$gio->setUserAttributesEvent($gio->getUserAttributesFactory('loginUserId')
    ->setLoginUserKey('loginUserKey')
    ->setProperties(array('gender' => 'male', 'age' => '18'))
    ->create());

// 设置物品模型
$gio->setItemAttributes(
    '1001',
    'product',
    array('color' => 'red')
);
```
## 程序测试

请按照如下步骤进行埋点数据的开发联调。

### 完成埋点事件的配置

在GrowingIO【数据】>【数据管理】中创建埋点事件及事件属性/登录用户属性，如图所示。
![custom data](https://3953104361-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M2qbZInaXgdm8kkNosp%2F-M3jX91jAu6IT2O2PJVo%2F-M3jYpHFW7WpKIaXRTx1%2Fimage.png?alt=media&token=a2dae343-1204-4d36-ad08-9c7099016b11)

### 测试程序配置

1. 在您的PHP项目中集成增加GrowingIO PHP SDK的依赖（首次集成需要）
2. SDK初始化配置中debug 配置为 true
3. 在您的PHP项目中找到合适的埋点位置，调用埋点事件API/登录用户属性API上传数据
4. 在输出的日志中查找是否包含期望事件内容
   


### 完成以上测试步骤后
1. 修改SDK初始化时 debug 配置为 false 或不设置，并触发埋点事件
2. 在线查询GrowingIO数据库，确认数据上传成功
