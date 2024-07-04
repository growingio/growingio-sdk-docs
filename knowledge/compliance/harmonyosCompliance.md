---
sidebar_position: 5
title: HarmonyOS SDK 合规说明
---

## 隐私协议

根据[工业和信息化部关于开展纵深推进APP侵害用户权益专项整治行动](http://www.gov.cn/zhengce/zhengceku/2020-08/02/content_5531975.htm)
，App 需要通过隐私协议说明应用采集数据。

为确保您的App在集成 GrowingIO SDK 之后，能够满足工信部相关合规要求，请参考以下说明。

## 隐私协议填写

### 收集和获取

在您的APP《隐私协议》中收集和获得的个人信息栏目中根据**实际情况**填写如下内容：
```
我们的产品集成了 GrowingIO SDK，我们会通过 GrowingIO SDK 收集您的设备信息（例如：操作系统、设备型号、系统版本、IP地址）用于统计分析您在 App 内的使用效果，从而改进我们的产品和服务。 
```
可在第三方SDK列表中增加如下内容(设备信息按照**实际情况**填写)：
```
GrowingIO HarmonyOS SDK
用途：分析收集移动应用程序(App)用户的使用情况
收集个人信息类型：设备类型，设备版本，系统版本，地理位置信息，网络设备制造商，IP地址，网络模式
提供方：北京易数科技有限公司
第三方SDK隐私协议链接：https://accounts.growingio.com/user-privacy
```

### 与授权合作伙伴共享

在您的APP《隐私协议》中的与授权合作伙伴共享栏目中根据**实际情况**填写如下内容:
```
我们的产品集成了 GrowingIO SDK，我们会通过 GrowingIO SDK 收集您的设备信息（例如：操作系统、设备型号、系统版本、IP地址）用于统计分析您在 App 内的使用效果，从而改进我们的产品和服务。
```

## 合规步骤

1.您需要确保 App 有《隐私协议》，并且在用户第一次启动 App 时就能向用户展示并取得用户同意；
   
2.请务必告知用户您使用了 GrowingIO SDK，请在 《隐私协议》 中添加隐私条款，参考[隐私协议填写](#隐私协议填写)
   
3.集成 [HarmonyOS SDK](/docs/framework/HarmonyOS)，请在用户同意《隐私协议》后 [打开 SDK 的数据采集开关（推荐）](#方式一设置数据采集开关) 或 [延迟初始化 SDK](#方式二延迟初始化)。
​
## 采集详情

### 设备权限

| 权限 | 用途 | 
| :--: | :-- | 
| ohos.permission.INTERNET | 允许应用程序联网和发送统计数据的权限，以便提供统计分析服务。必须权限| 
| ohos.permission.GET_NETWORK_INFO | 获取当前联网方式的权限，以便提供统计分析服务。必须权限| 

## 初始化

### 方式一、设置数据采集开关

在 AbilityStage 的 onCreate 方法中初始化 SDK (Stage 模型)：
```typescript
export default class MyAbilityStage extends AbilityStage {
  onCreate(): void {
    // 应用的HAP在首次加载的时，为该Module初始化操作
    this.startAnalytics()
  }
  onAcceptWant(want: Want): string {
    // 仅specified模式下触发
    return 'MyAbilityStage'
  }

  async startAnalytics() {
    let config = ...
    // 1.dataCollectionEnabled 设置为 false
    config.dataCollectionEnabled = false
    // 2.初始化 GrowingIO SDK
    // GrowingIO SDK 初始化代码
    await GrowingAnalytics.start(this.context, config)
  }
}
```

某一时刻，用户同意隐私协议后:
```typescript
GrowingAnalytics.setDataCollectionEnabled(true)
```

### 方式二、延迟初始化

在 EntryAbility 的 onCreate 方法中同意隐私协议后初始化 SDK (Stage 模型)：
```typescript
export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        if (<未同意隐私协议>){
        	// 展示隐私协议弹窗，等待用户同意
            ...

        	if (<用户同意了隐私协议>){
        		// GrowingIO SDK 初始化代码
		        ...
        	}
        } else {
            //用户已经同意隐私协议
            // GrowingIO SDK 初始化代码
            ...
        }
    }
}
```

## 数据存储发送策略说明
HarmonyOS SDK 采集的用户行为数据支持设置发送间隔，默认15秒，SDK 会先将行为数据存入 App 本地 sqlite 数据库中，然后以每隔间隔时间向服务器发送行为数据包（最大 500 条行为数据），如果待发送行为数据量大于500条，则发送至所有数据发送完成，行为数据发送成功后将在数据库中删除。数据库中未发送的行为数据会在7天之后删除。