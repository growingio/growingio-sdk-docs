---
sidebar_position: 12
title: SDK调试
---
在移动端的SDK中，有两个调试工具可以集成在SDK中帮忙更好的使用SDK。

----

## Mobile Debugger

此功能可以在网页端方便查看移动端 SDK 上传的数据信息和日志信息

### 启动 Mobile Debugger
1. 进入Mobile Debugger启动页
登录GrowingIO CDP 管理平台（一般来说，cdp都会配有数据管理），在**客户数据平台-数据校验** 选择 **Mobile Debugger** 进入Mobile Debugger启动页。
![Mobile Debugger](https://gblobscdn.gitbook.com/assets%2F-M2qbZInaXgdm8kkNosp%2F-MYdATaneuDrmM0B81Ka%2F-MYdBRkK1aVEtey9QJrW%2F%E5%9B%BE%E7%89%87.png?alt=media&token=8e43cdb0-02f8-4b97-9b11-4e274e9118ef)

2. 扫码唤起App
* 选择项目中需要进行测试的应用，并保证手机中已经安装该APP，且该APP已经集成SDK和设置过 URLScheme。
* 使用手机浏览器扫描入口的二维码唤起Debug的APP，需要注意微信中扫码无法唤起APP。

### 使用 Mobile Debugger 测试数据

在唤起Debug的APP后，该APP采集的行为数据、日志信息以及当前页面截图就会出现在网页上，测试同学可以根据数据看数据的采集以及发送情况，对数据进行测试。

#### 通过“事件流”页签查看请求数据
如下图，可以查看上报事件属性的请求数据

![Mobile Debugger](https://gblobscdn.gitbook.com/assets%2F-M2qbZInaXgdm8kkNosp%2F-MeZBV6ixYnoiiYfOOUd%2F-MeZPOkRVBIr9mSewTl5%2F%E4%BA%8B%E4%BB%B6%E6%B5%81%E9%A1%B5%E9%9D%A2.png?alt=media&token=8dce6e01-5f54-48d0-8e62-b500c6c5004d)

1. 图片中序号1：可查看当前连接的用户及设备等基本信息
2. 图片中序号2：筛选器中展示的是系统中已定义的事件标识符列表，如果筛选后无数据，说明本次连接未上报数据

#### 通过“SDK运行日志”查看SDK运行中的信息/警告/错误三种日志
如下图，可以点击日志发生的时间查看相应的日志

![连接成功后进入SDK运行日志](https://gblobscdn.gitbook.com/assets%2F-M2qbZInaXgdm8kkNosp%2F-MeZBV6ixYnoiiYfOOUd%2F-MeZRF90xKX8ecHudHtf%2FSDK%E6%97%A5%E5%BF%97.png?alt=media&token=e0069156-124e-464b-bf0d-6c88ab8cdd5c)

1. 图片中序号1：可点击暂停按钮，停止同步SDK产生的日志，便于查看当前遇到的问题；再次点击继续按钮，则同步所有产生的SDK日志，并展示最新的一条日志数据
2. 图片中序号2：点击清屏按钮，清除当前所有产生的日志

具体的字段信息可以参考 [测量协议](/docs/Measurement%20Protocol)


## 圈选

圈选，是利用GrowingIO进行无埋点数据分析之前的数据定义过程。您需要根据业务需求，将需要分析的关键事件通过可视化地方式在您的产品界面中定义出来，这个过程，就是圈选。

例如： 你关心首页banner的浏览/点击情况，那你就需要对首页banner这个元素进行圈选。

圈选的进入方式与 Mobile Debugger 一样，都是从平台进去，通过扫码打开App进入圈选功能。

### 圈选操作

在 **”数据 > 事件 > 无埋点事件”** 中点击 **“新建无埋点事件 > {App应用}”** 进入App唤醒页面。
![进入圈选](https://gblobscdn.gitbook.com/assets%2F-M2qbZInaXgdm8kkNosp%2F-MPmMF-oMi3YNjkQSnay%2F-MPmPb2Rsc4nM3-9OO97%2Fimage.png?alt=media&token=8d793638-65f9-4d18-8bf4-fa2aab085c48)

使用手机扫码成功唤起App后，开始定义无埋点事件。

![进入页面](https://gblobscdn.gitbook.com/assets%2F-M2qbZInaXgdm8kkNosp%2F-MPmMF-oMi3YNjkQSnay%2F-MPmR889yZXlnpid6ch7%2Fimage.png?alt=media&token=0dcb9931-85d6-49d3-9848-2ddfce138f82)

|项|说明|
| --- | --- |
|1|退出圈选按钮：点击后退出圈选。|
|2|链接状态：显示设备已链接或设备已断开链接|
|3|定义页面按钮：点击后开始页面定义点击|
|4|高亮已定义元素：点击后高亮左侧界面中已定义的元素信息，并进入元素定义模式。|

### 定义页面

点击 **“定义页面“**后，进入页面定义流程。
![定义页面](https://gblobscdn.gitbook.com/assets%2F-M2qbZInaXgdm8kkNosp%2F-MPmS_5rMtgiubkRmuel%2F-MPmWcfRrxBdtJGCiGH_%2Fimage.png?alt=media&token=e8e4a110-f8d7-46ee-9cfe-7eaecb04ed81)

选择需要定义的页面后，点击“**下一步**“。

:::tip
在App中，一个“页面“的构成可能包含多个「原生页面」和「H5页面」，每个页面(原生/H5)承载着不同功能的元素。
您可以在页面列表中选择页面后，通过左侧高亮区域确认该“页面“是否是目标定义“页面“。
:::

![说明](https://gblobscdn.gitbook.com/assets%2F-M2qbZInaXgdm8kkNosp%2F-MPmS_5rMtgiubkRmuel%2F-MPmakGllDW8BYmIz_sD%2Fimage.png?alt=media&token=0b6a38d8-aa25-4dcf-95eb-16758a6e9d7a)

|项|说明|
| --- | --- |
|1|(必填) 页面名称，请参考“无埋点事件命名规范“|
|2|页面事件定义业务场景描述|
|3|所属应用，定义的页面属于哪个应用，如内嵌H5页面。该选项不可编辑，默认属于圈选应用|
|4|(必填) 域名，点击定义后默认识别当前页面域名，支持使用通配符 *。|
|5|(必填) 路径，点击定义后默认识别当前页面路径，支持使用通配符 *。|
|6|路径启用/仅用状态，禁用后定义规则忽略路径变化。默认开启路径识别|
|7|查询条件，点击定义后默认识别当前页面查询参数，参数值支持使用通配符 *。|
|8|查看数据，点击后查看定义规则历史数据趋势。|

点击保存后，保存定义规则，无埋点页面事件创建成功。

> 无埋点页面事件创建成功后，仅能修改事件名称和描述。
> 同一个无埋点页面定义规则全局仅能定义一次。
