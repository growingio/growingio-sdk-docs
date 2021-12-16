---
sidebar_position: 2
title: React Native SDK
---
--------------
针对于SDK 3.0 上的 RN 插件，当前仅支持埋点sdk。

源码托管在 [growingio/react-native-growingio-sdk-tracker-plugin](https://github.com/growingio/react-native-growingio-sdk-tracker-plugin)

----

## 环境配置
:::info
请确保原生工程中已经添加**原生埋点SDK**, 如果没有, 请移步至原生端埋点SDK集成文档: [**Android 埋点SDK**](/docs/android/base/Getting%20Started#集成埋点sdk)、[**iOS 埋点SDK**](/docs/ios/base/Getting_Started#埋点sdk集成)
:::
## React Native SDK集成
### 添加依赖

`$ npm install react-native-growing-tracker@1.0.1-cdp --save`

#### 自动安装
:::info
React Native 0.6.0版本及其以上可以跳过该步骤
:::
`$ react-native link react-native-growing-tracker`



##### 使用本地模块安装 (进行自定义修改)

1. git clone 插件仓库

```shell
git clone git@github.com:growingio/react-native-growingio-sdk-tracker-plugin.git
git checkout cdp
```

2. 在项目的package.json中添加对应模块

```json
"dependencies": {
    ...
    "react-native-growing-tracker": "file:path/react-native-growingio-sdk-tracker-plugin"
},
```

3.  获取依赖

```shell
yarn
```

4. 执行项目

```shell
react-native run-ios
react-native run-android
```



#### 手动安装

##### iOS

1. 打开Xcode，在您的工程目录中点击 `Libraries` ➜ `Add Files to [your project's name]`
2. 选择添加 `node_modules` ➜ react-native-growingio-tracker ➜ `RNGrowingTracker.xcodeproj`
3. 选择您的目标项目， `Build Phases` ➜ `Link Binary With Libraries`添加 `libRNGrowingTracker.a` 
4. 运行项目 (`Cmd+R`)

##### Android

1. 打开您的首页Activity `android/app/src/main/java/[...]/MainActivity.java`
  - 导入包文件 `com.reactnativegrowingtracker.GrowingTrackerPackage;`
  - 在`getPackages()` 方法中添加 `new GrowingTrackerPackage()` 
2. 引入Android Native工程 `android/settings.gradle`:
    ```
    include ':reactnativegrowingtracker'
    project(':reactnativegrowingtracker').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-growing-tracker//android')
    ```
3. 在app中添加Android Native依赖 `android/app/build.gradle`:
    ```
    implementation project(':reactnativegrowingtracker')
    ```
### 引入到文件
```javascript
import GrowingTracker from 'react-native-growing-tracker';

// TODO: What to do with the module?
GrowingTracker;
```

## API说明

### 1. 设置登录用户ID
当用户登录之后调用 `setLoginUserId` ，设置登录用户ID
#### 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :-----------------------------------: |
| userId | string |  是  |  undefine  | 设置登录用户标识 |
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
### 3. 设置用户地理位置
设置用户当前的地理位置，基于WGS-84坐标
#### 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :-----------------------------------: |
| latitude | number |  是  |  undefine  | 设置纬度 |
| longitude | number |  是  |  undefine  | 设置经度 |
#### 代码示例
```javascript
GrowingTracker.setLocation(100.0, 100.0);
```
### 4. 清除用户的地理位置
清除用户当前的地理位置
#### 代码示例
```javascript
GrowingTracker.cleanLocation();
```
### 5. 获取设备ID
获取设备ID，又称为匿名用户ID，SDK 自动生成用来定义唯一设备
#### 代码示例
```javascript
GrowingTracker.getDeviceId().then(setDeviceId);
```
### 6. 数据采集开关
打开或关闭数据采集
#### 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :-----------------------------------: |
| enabled | boolean |  是  |  true  | 是否采集数据 |
#### 代码示例
```javascript
GrowingTracker.setDataCollectionEnabled(true);
```

### 7. 设置登录用户属性
以登录用户的身份定义登录用户属性，用于用户信息相关分析。
#### 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :-----------------------------------: |
| attributes | object |  是  |  undefine  | 登录用户属性 |
#### 代码示例
```javascript
GrowingTracker.setLoginUserAttributes({
    key1: 'value1',
    key2: 'value2',
});
```
### 8. 埋点事件
发送一个埋点事件。在添加所需要发送的事件代码之前，需要在事件管理用户界面配置事件以及事件属性。
#### 参数说明
| 参数名 |  类型   | 必填 | 默认值 |                 说明                  |
| :----: | :-----: | :--: | :----: | :----------------------------------- |
| eventName | string |  是  |  undefine  | 事件名，事件标识符 |
| attributes | object | 否 |  null  | 事件发生时所伴随的维度信息（可选） |
| itemKey | string | 否 | null | 事件发生关联的物品模型Key（可选，与itemId参数一起传入） |
| itemId | string | 否 | null | 事件发生关联的物品模型ID （可选，与itemKey参数一起传入 |
#### 代码示例
```javascript
GrowingTracker.trackCustomEvent('trackCustomEvent(string)');
GrowingTracker.trackCustomEvent('trackCustomEvent(string)', {
   key1: 'value1',
   key2: 'value2',
});
GrowingTracker.trackCustomEvent(
   'trackCustomEvent(string)',
   null,
   'itemKey',
   'itemId'
);
GrowingTracker.trackCustomEvent(
   'trackCustomEvent(string)',
   {
     key1: 'value1',
     key2: 'value2',
   },
   'itemKey',
   'itemId'
);
```
