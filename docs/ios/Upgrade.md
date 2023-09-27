---
title: 从 3.x 升级至 4.x
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

4.x SDK 移除了 cdp 后缀，在集成步骤中，请参考使用非 cdp 后缀的 SDK 集成步骤，具体如下：

<Tabs>
  <TabItem value="无埋点集成" label="无埋点集成" default>

**如果您通过 Cocoapods 集成**：

将 Podfile 文件中的：
```ruby
pod 'GrowingAnalytics-cdp/Autotracker'
```

更改为：
```ruby
pod 'GrowingAnalytics/Autotracker', '>= 4.0.0'
```

**如果您通过 SwiftPM 集成**：

* 集成时，Exact Version 选择 4.x 版本
* 选择 library 时，**GrowingAutotracker_cdp** 改为选择 **GrowingAutotracker**；
* 导入时，`import GrowingAutotracker_cdp` 改为 `import GrowingAutotracker`


  </TabItem>
  <TabItem value="埋点集成" label="埋点集成">

**如果您通过 Cocoapods 集成**：

将 Podfile 文件中的：
```ruby
pod 'GrowingAnalytics-cdp/Tracker'
```

更改为：
```ruby
pod 'GrowingAnalytics/Tracker', '>= 4.0.0'
```

**如果您通过 SwiftPM 集成**：

* 集成时，Exact Version 选择 4.x 版本
* 选择 library 时，**GrowingTracker_cdp** 改为选择 **GrowingTracker**；
* 导入时，`import GrowingTracker_cdp` 改为 `import GrowingTracker`


  </TabItem>
</Tabs>


----


