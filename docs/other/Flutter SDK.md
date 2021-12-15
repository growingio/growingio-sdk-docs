---
sidebar_position: 1
title: Flutter SDK
---
--------------
针对于SDK 3.0 上的flutter插件，当前仅支持埋点sdk。

源码托管在 [growingio/flutter-growingio-sdk-tracker-plugin](https://github.com/growingio/flutter-growingio-sdk-tracker-plugin)

:::info
集成环境：dart sdk: ">=2.7.0 且<3.0.0"
  flutter: ">=1.20.0"

对应的是CDP分支，而不是master分支进行测试
:::
## 环境配置
:::info
请确保原生工程中已经添加**原生埋点SDK**, 如果没有, 请移步至原生端埋点SDK集成文档: [**Android 埋点SDK**](/docs/android/base/Getting%20Started#集成埋点sdk)、[**iOS 埋点SDK**](/docs/ios/base/Getting_Started#埋点sdk集成)
:::
## Flutter SDK 集成
### 添加依赖

以工程`flutter_app`为例，在`pubspec.yaml`文件中添加依赖

```c
dependencies:
  growingio_sdk_tracker_plugin:
    git:
      ref: CDP
      url: https://github.com/growingio/flutter-growingio-sdk-tracker-plugin.git
```

然后执行 `flutter pub get` 指令
:::info注意
部分用户无法访问github.com，从而无法下拉插件库的情况，可以修改域名为hub.fastgit.org，即可解决
:::

## API说明

### 1. 设置登录用户ID
当用户登录之后调用 `setLoginUserId` ，设置登录用户ID
#### 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :-----------------------------------: |
| userId | String |  是  |  undefine  | 设置登录用户标识 |
#### 代码示例
```javascript
GrowingTracker.setLoginUserId('loginUserId');
```
### 2. 清除登录用户ID
当用户登出之后调用 `cleanLoginUserId`，清除已经设置的登录用户ID
####  代码示例
```javascript
GrowingTracker.cleanLoginUserId();
```
### 3. 设置登录用户属性
以登录用户的身份定义登录用户属性，用于用户信息相关分析。
#### 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :-----------------------------------: |
| attributes | Map |  是  |  undefine  | 登录用户属性 |
#### 代码示例
```javascript
GrowingTracker.setLoginUserAttributes({
    key1: 'value1',
    key2: 'value2',
});
```
### 4. 埋点事件
发送一个埋点事件。在添加所需要发送的事件代码之前，需要在事件管理用户界面配置事件以及事件属性。
#### 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :----------------------------------- |
| eventName | String |  是  |  undefine  | 事件名，事件标识符 |
| attributes | Map | 否 |  null  | 事件发生时所伴随的维度信息（可选） |
| itemKey | String | 否 | null | 事件发生关联的物品模型Key（可选，与itemId参数一起传入） |
| itemId | String | 否 | null | 事件发生关联的物品模型ID （可选，与itemKey参数一起传入 |
#### 代码示例
```javascript
GrowingTracker.trackCustomEvent('eventId'); 

GrowingTracker.trackCustomEvent('eventId', variable: {'testkey': 'testValue', 'testNumKey': '2333'});

GrowingTracker.trackCustomEventItemKeyId('eventId', 'testKey','testId');

GrowingTracker.trackCustomEventItemKeyId('eventId', 'testKey','testId',variable: {'testkey': 'testValue', 'testNumKey': '2333'});
```
