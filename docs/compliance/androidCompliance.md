---
sidebar_position: 1
title: Android SDK 合规说明
---

## 隐私政策

根据[工业和信息化部关于开展纵深推进APP侵害用户权益专项整治行动](http://www.gov.cn/zhengce/zhengceku/2020-08/02/content_5531975.htm)
，App 需要通过隐私政策说明应用采集数据。为保证您的在集成 GrowingIO SDK之后，能够满足工信部相关合规要求，请参考以下说明。

### 合规步骤
1. 您需要确保 App 有《隐私政策》，并且在用户第一次启动 App 时就能向用户展示并取得用户同意；
2. 请务必告知用户您使用了 GrowingIO SDK，请在 《隐私政策》 中添加如下参考条款：
** 我们的产品集成了GrowingIO SDK, GrowingIO SDK 需要手机的唯一设备识别码（IMEI/Android ID/IP地址）以提供统计分析服务 **；
3. 请在用户同意《隐私政策》之后再初始化GrowingIO SDK 或打开 GrowingIO SDK 的数据收集开关。
​

### 关于 Google Play
如您的 App 需要在 Google Play 分发，请参照 Google Play 相关政策 - [Google Play 政策中心-用户数据帮助说明](https://support.google.com/googleplay/android-developer/answer/10144311)。
具体合规步骤同上文所述一致。

### 关于 GDPR
​请参考 [General Data Protection Regulation 欧盟通用数据保护条例​](https://zh.wikipedia.org/wiki/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84)

### 免责声明
如果客户使用 GrowingIO 产品进行数据收集，应当保证数据来源合法合规，或者已经取得相关方和终端用户授权。
客户对终端用户的信息处理应当合法合规，否则 GrowingIO 有权要求客户停止使用 GrowingIO 产品进行数据收集和处理，并保留追究责任的权利，且不视为GrowingIO违约。

如客户使用 GrowingIO 产品对客户指定的第三方进行数据收集和处理，由此行为产生的第三方诉求和相应责任，GrowingIO 有权要求客户承担或补偿。

## 采集详情

### 一、个人信息字段采集
我们通过采集唯一设备识别码（如IMEI/AndroidID/IP地址）对用户进行唯一标识，以便进行诸如用户访问量，广告等数据统计。在无法获取设备识别码的情况下（如Android高版本API限制），我们推荐集成由[移动安全联盟MSA](http://www.msa-alliance.cn/)提供的 Oaid SDK 作为设备唯一识别码，以便正常提供统计分析服务。

### 二、Android 设备权限

| 权限 | 用途 | 
| :--: | :-- | 
| android.permission.INTERNET | 允许应用程序联网和发送统计数据的权限，以便提供统计分析服务。| 
| android.permission.ACCESS_NETWORK_STATE | 检测联网方式，在网络异常状态下避免数据发送，节省流量和电量。| 
| android.permission.ACCESS_WIFI_STATE | 获取WIFI网络类型，检测联网方式，节省流量和电量。 | 
| android.permission.READ_PHONE_STATE | 获取用户设备的IMEI，通过IMEI对用户进行唯一标识，以便提供统计分析服务。(只在Android 10以下可用，10以上已无法获取)| 


## 初始化步骤

### 方式一、延迟初始化
在同意《隐私政策》后调用 `GrowingTracker.startWithConfiguration` 进行SDK的初始化，此后在 Application 的 onCreate() 方法主线程中初始化 SDK。
```java
// 在 Activity 中同意隐私条款后初始化 SDK
public class MyActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        if (<未同意隐私政策>){
        	// 展示隐私政策弹窗，等待用户同意
        	if (<用户已经同意隐私政策>){
        		//GrowingIO SDK的初始化
		        CdpTrackConfiguration sConfiguration = new CdpTrackConfiguration("AccountId", "URLScheme")
		                .setDataCollectionServerHost("ServerHost")
		                .setDataSourceId("DataSourceId");
		        GrowingTracker.startWithConfiguration(getApplication(), sConfiguration);
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

        if (<用户已经同意隐私政策>){
        	CdpTrackConfiguration sConfiguration = new CdpTrackConfiguration("AccountId", "URLScheme")
                .setDataCollectionServerHost("ServerHost")
                .setDataSourceId("DataSourceId");
        	GrowingTracker.startWithConfiguration(this, sConfiguration);
        }

    }
}
```

### 方式二、关闭数据收集开关
GrowingIO SDK 提供 `setDataCollectionEnabled`接口，可在用户不同意数据采集时，调用该接口，设置 `false` 禁止数据采集；在用户同意数据采集时，调用该接口，设置 `true` 开启数据采集

```java
// Application 的 onCreate() 方法中主线程初始化 SDK
public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        boolean isAgreePolicy = <用户是否同意了隐私政策>;
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

        if (<未同意隐私政策>){
        	// 展示隐私协议弹窗，等待用户同意
        	if (<用户已经同意隐私政策>){
        		//打开SDK的数据收集功能
        		GrowingAutotracker.get().setDataCollectionEnabled(true);
        	}
        }
    }
}
```

## 其他说明

### 获取应用多进程信息

GrowingIO SDK 默认允许 App 能在多进程环境下进行数据的统计和发送，且为了保证用户访问量数据统计的准确性，SDK 中调用了 `ActivityManager.getRunningAppProcesses` 来获取当前应用的所有进程Id。

若是不想 GrowingIO SDK 调用该接口，可以在 SDK 初始化时设置 `setRequireAppProcessesEnabled(false)` 来关闭 SDK 获取应用进程的操作。

```java
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
具体可以参考 [采集OAID作为设备信息](/docs/android/base/Configuration#2-采集oaid作为设备信息)




