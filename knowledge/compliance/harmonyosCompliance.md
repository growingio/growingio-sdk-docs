---
sidebar_position: 5
title: HarmonyOS SDK 合规说明

---

## 隐私协议

根据[工业和信息化部关于开展纵深推进 APP 侵害用户权益专项整治行动](http://www.gov.cn/zhengce/zhengceku/2020-08/02/content_5531975.htm)的指导，应用程序（App）必须通过详细的隐私协议来明确阐述其所采集的用户数据。

为确保您的 App 在集成 GrowingIO SDK 之后，能够全面符合工业和信息化部的相关合规要求及国家法律规定，请您参考以下指南进行操作。

## 隐私协议填写

### 收集和获取

在您的APP《隐私协议》中收集和获得的个人信息栏目中根据**实际情况**填写如下内容：

```
我们的产品集成了 GrowingIO SDK，我们会通过 GrowingIO SDK 收集您的设备信息（例如：操作系统、设备型号、系统版本）用于统计分析您在 App 内的使用效果，从而改进我们的产品和服务。 
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
我们的产品集成了 GrowingIO SDK，我们会通过 GrowingIO SDK 收集您的设备信息（例如：操作系统、设备型号、系统版本）用于统计分析您在 App 内的使用效果，从而改进我们的产品和服务。
```

## 合规步骤

1. 您需要确保 App 有详细且明确的符合国家法律法规规定的《隐私协议》或相关政策，且该协议将全面阐述如何收集、使用、存储及保护最终用户的个人信息。

2. 在最终用户首次启动 App 时，系统应向最终用户自动弹出或展示《隐私协议》的界面，该界面应设计直观、易于理解，并同时提出 “同意协议”、“拒绝协议” 两种明确的选项，以供用户选择。用户必须在做出选择后，才能继续使用 App，以确保对其个人信息的收集和处理的充分知情及自主选择。

3. 请务必告知最终用户，App 中集成并使用了 GrowingIO SDK。在《隐私协议》中，您需要特别添加关于 GrowingIO SDK 使用的个人隐私条款，协议链接为：https://accounts.growingio.com/user-privacy 明确说明 SDK 的提供方、详细信息、数据收集范围、目的、存储方式及安全保障措施等。

4. 我们特别提醒，请在最终用户明确同意《隐私协议》后，再行启动 SDK 的数据采集功能。

5. 若最终用户拒绝《隐私协议》，请勿使用 GrowingIO SDK 进行采集，以尊重用户的意愿。

6. 用户单独同意合规
   根据《个人信息保护法》第 23、25、26、29 和 39 条以及《信息安全技术个人信息处理中告知同意的实施指南》第 9.2 条的规定，“单独同意” 主要适用于以下五种情形：

   1）向其他个人信息处理者提供其处理的个人信息；

   2）公开其处理的个人信息；

   3）将公共场所收集的个人图像/身份特征信息用于非公共安全之目的；

   4）处理敏感个人信息（敏感个人信息的具体判断及分级标准参见：国家标准 GB/T 35273-2020 \<信息安全技术个人信息安全规范\>）；

   5）向境外提供个人信息。

   针对上述情形，在用户做出单独同意之前，您应当通过增强式告知或即时提示的方式，针对需要单独同意的事项予以专门、充分的告知。这就意味着您不能将单独同意事项捆绑或者混同在其他同意事项中，采取一揽子的方式取得最终用户的同意。而是应该将“单独同意”事项抽离出来单独告知。例如通过弹窗，可下滑查看的嵌套网页、跳转到另一页面以增强告知等方式清晰明确地对用户进行告知说明。

## 采集详情

### 设备权限

|               权限               | 用途                                                       | 是否必须 | 申请时机       |
| :------------------------------: | :--------------------------------------------------------- | -------- | -------------- |
|     ohos.permission.INTERNET     | 允许应用程序联网和发送统计数据的权限，以便提供统计分析服务 | 必须权限 | 发送埋点数据时 |
| ohos.permission.GET_NETWORK_INFO | 获取当前联网方式的权限，以便提供统计分析服务               | 必须权限 | 发送埋点数据时 |

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

  startAnalytics() {
    let config = ...
    // 1.dataCollectionEnabled 设置为 false
    config.dataCollectionEnabled = false
    // 2.初始化 GrowingIO SDK
    // GrowingIO SDK 初始化代码
    GrowingAnalytics.start(this.context, config)
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

HarmonyOS SDK 采集的用户行为数据支持设置发送间隔，默认 15 秒，SDK 会先将行为数据存入 App 本地 sqlite 数据库中，然后以每隔间隔时间向服务器发送行为数据包（最大 500 条行为数据），如果待发送行为数据量大于 500 条，则发送至所有数据发送完成，行为数据发送成功后将在数据库中删除。数据库中未发送的行为数据会在 7 天之后删除。