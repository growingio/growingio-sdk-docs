---
sidebar_position: 1
title: Android SDK 合规说明
---

## 隐私协议

根据[工业和信息化部关于开展纵深推进APP侵害用户权益专项整治行动](http://www.gov.cn/zhengce/zhengceku/2020-08/02/content_5531975.htm)
，App 需要通过隐私协议说明应用采集数据。

为确保您的App在集成 GrowingIO SDK 之后，能够满足工信部相关合规要求，请参考以下说明。

## 隐私协议填写

### 收集和获取

在您的APP《隐私协议》中收集和获得的个人信息栏目中根据**实际情况**填写如下内容：
```
我们的产品集成了 GrowingIO SDK，我们会通过 GrowingIO SDK 收集您的设备信息（例如：操作系统、设备型号、系统版本、`AndroidID`、`IMEI` 、IP地址）用于统计分析您在 App 内的使用效果，从而改进我们的产品和服务。 
```
可在第三方SDK列表中增加如下内容(设备信息按照**实际情况**填写)：
```
GIO移动端 SDK
用途：分析收集移动应用程序(App)用户的使用情况
收集个人信息类型：设备标识信息（如IMEI、Android ID、OAID），设备类型，设备版本，系统版本，地理位置信息，网络设备制造商，IP地址，网络模式
提供方：北京易数科技有限公司
第三方SDK隐私协议链接：https://accounts.growingio.com/user-privacy
```

### 与授权合作伙伴共享

在您的APP《隐私协议》中的与授权合作伙伴共享栏目中根据**实际情况**填写如下内容:
```
我们的产品集成了 GrowingIO SDK，我们会通过 GrowingIO SDK 收集您的设备信息（例如：操作系统、设备型号、系统版本、`AndroidID`、`IMEI` 、IP地址）用于统计分析您在 App 内的使用效果，从而改进我们的产品和服务。
```

## 合规步骤

1.您需要确保 App 有《隐私协议》，并且在用户第一次启动 App 时就能向用户展示并取得用户同意；
   
2.请务必告知用户您使用了 GrowingIO SDK，请在 《隐私协议》 中添加隐私条款，参考[隐私协议填写](#隐私协议填写)
   
3.集成 [Android SDK](/docs/android)，请在用户同意《隐私协议》后 [打开 SDK 的数据收集开关（推荐）](#方式一设置数据收集开关) 或 [延迟初始化 SDK](#方式二延迟初始化)。
​
## 采集详情

### 个人信息字段采集
我们通过采集唯一设备识别码（如IMEI/AndroidID/IP地址）对用户进行唯一标识，以便进行诸如用户访问量，广告等数据统计。在无法获取设备识别码的情况下（如Android高版本API限制），我们推荐集成由[移动安全联盟MSA](http://www.msa-alliance.cn/)提供的 Oaid SDK 作为设备唯一识别码，以便正常提供统计分析服务。

### Android 设备权限

| 权限 | 用途 | 
| :--: | :-- | 
| android.permission.INTERNET | 允许应用程序联网和发送统计数据的权限，以便提供统计分析服务。必须权限| 
| android.permission.ACCESS_NETWORK_STATE | 检测联网方式，在网络异常状态下避免数据发送，节省流量和电量。必须权限| 
| android.permission.ACCESS_WIFI_STATE | 获取WIFI网络类型，检测联网方式，节省流量和电量。必须权限 | 
| android.permission.READ_PHONE_STATE | 获取用户设备的IMEI，通过IMEI对用户进行唯一标识，以便提供统计分析服务。(只在Android 10以下可用，10以上已无法获取)。可选权限| 


## 初始化

### 方式一、设置数据收集开关
GrowingIO SDK 提供 `setDataCollectionEnabled`接口，可在用户不同意数据采集时，调用该接口，设置 `false` 禁止数据采集；在用户同意数据采集时，调用该接口，设置 `true` 开启数据采集

```java
// Application 的 onCreate() 方法中主线程初始化 SDK
public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        boolean isAgreePolicy = <用户是否同意了隐私协议>;
    	CdpTrackConfiguration sConfiguration = new CdpTrackConfiguration("AccountId", "URLScheme")
            .setDataCollectionServerHost("ServerHost")
            .setDataSourceId("DataSourceId")
            .setDataCollectionEnabled(isAgreePolicy);
    	GrowingTracker.startWithConfiguration(this, sConfiguration);
    }
}
```
```java
// 在 Activity 中同意隐私条款后重新打开SDK的数据收集功能
public class MyActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (<未同意隐私协议>){
        	// 展示隐私协议弹窗，等待用户同意
        	if (<用户已经同意隐私协议>){
        		//打开SDK的数据收集功能
        		GrowingAutotracker.get().setDataCollectionEnabled(true);
        	}
        }
    }
}
```

### 方式二、延迟初始化
在同意《隐私协议》后调用 `GrowingTracker.startWithConfiguration` 进行SDK的初始化，此后在 Application 的 onCreate() 方法主线程中初始化 SDK。
```java
// 在 Activity 中同意隐私条款后初始化 SDK
public class MyActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (<未同意隐私协议>){
        	// 展示隐私协议弹窗，等待用户同意
        	if (<用户已经同意隐私协议>){
        		//GrowingIO SDK 初始化代码
		        
        	}
        }
    }
}
```

```java
// Application 的 onCreate() 方法中主线程初始化 SDK
public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        if (<用户已经同意隐私协议>){
            //GrowingIO SDK 初始化代码

        }

    }
}
```

:::warning注意
需要根据您集成是无埋点SDK还是埋点SDK，调整调用类名
:::

## 数据加密传输说明
采集 SDK 版本 >=3.3.0 使用时注意模块版本需要与采集SDK版本保持一致。
使用请参考[SDK数据加密传输](/docs/android/Configuration#3-sdk数据加密传输)。

## 数据存储发送策略说明
Android SDK 采集的用户行为数据支持设置发送间隔(最小可设置5秒)，默认15秒，SDK 会先将行为数据存入 App 本地 sqlite 数据库中，然后以每隔间隔时间向服务器发送行为数据包（最大 50 条行为数据），如果待发送行为数据量大于100条，则发送至所有数据发送完成，行为数据发送成功后将在数据库中删除。数据库中未发送的行为数据会在7天之后删除。

## 其他说明

### 获取应用多进程信息

GrowingIO SDK 默认允许 App 能在多进程环境下进行数据的统计和发送，且为了保证用户访问量数据统计的准确性，SDK 中调用了 `ActivityManager.getRunningAppProcesses` 来获取当前应用的所有进程Id。

若是不希望 GrowingIO SDK 调用该接口，可以在 SDK 初始化时设置 `setRequireAppProcessesEnabled(false)` 来关闭 SDK 获取应用进程的操作。

```java
// 需要根据您集成是无埋点SDK还是埋点SDK，调整调用类名
CdpTrackConfiguration sConfiguration = new CdpTrackConfiguration("AccountId", "URLScheme")
    .setDataCollectionServerHost("ServerHost")
    .setDataSourceId("DataSourceId")
    // 关闭 SDK 获取应用进程的操作
    .setRequireAppProcessesEnabled(false);
```

:::caution 注意
若关闭了 SDK 获取应用多进程的操作，则 SDK 不会再将子进程视为一个新的访问，新的访问永远在主进程中生成。子进程中的数据统计和发送不会受到影响。
在 SDK 版本 3.3.4 之后提供该接口。
:::

### 集成OAID SDK
具体可以参考 [采集OAID作为设备信息](/docs/android/Configuration#2-采集oaid作为设备信息)

### 关于 Google Play
如您的 App 需要在 Google Play 分发，请参照 Google Play 相关政策 - [Google Play 政策中心-用户数据帮助说明](https://support.google.com/googleplay/android-developer/answer/10144311)。
具体合规步骤同上文所述一致。

### 关于 GDPR
​为符合 [General Data Protection Regulation 欧盟通用数据保护条例​](https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84)，
请参考 [方式一设置数据收集开关](#方式一设置数据收集开关)

