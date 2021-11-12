---
hide_title: true
hide_table_of_contents: false
sidebar_label: AGP7.0 共享依赖
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## 在项目之间共享依赖版本 

在AGP7.0以上集成 Android SDK时，推荐在项目的 settings.gradle 进行统一的依赖设置，这样有利于在项目之间进行依赖版本的共享，这也是Gradle官方推荐的做法

如果用户项目在 settings.gradle 中进行统一依赖，那么可以按照如下方法分别集成 GrowingIO 无埋点SDK和埋点SDK

### 集成无埋点SDK

1、 在项目的 gradle.properties 文件中设置SDK当前最新的版本号

```groovy
# 上下版本应保持一致
gioVersion=3.3.0
gioCoordinates = com.growingio.android:autotracker-gradle-plugin:3.3.0

```

2、在项目的 settings.gradle 文件中设置 pluginManagement 模块，设置全局仓库和插件


<Tabs
  groupId="code-language"
  defaultValue="groovy"
  values={[
    {label: 'groovy', value: 'groovy'},
    {label: 'kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="groovy" default>

```groovy
pluginManagement {

    // 设置全局仓库地址，相当于在以前的 allprojects 中设置
    repositories {
    	...

        // 添加maven仓库，AndroidStudio会自动设置，如果已经存在不需要重复添加
        mavenCentral()
        //如果使用 SNAPSHOT 版本，则需要使用如下该仓库。
        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }
    }

    // 声明插件依赖项
    plugins {

  //      声明GrowingIO 插件
        id "com.growingio.android.autotracker" version gioVersion

        ...

    }

    // 设置插件解析策略
    resolutionStrategy {
        eachPlugin {

            switch (requested.id.id) {

                // 解析GgowingIO 插件
                case  "com.growingio.android.autotracker":
                    useModule(gioCoordinates)
                    break
            }
        }
    }
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin
pluginManagement {

    // 设置全局仓库地址，相当于在以前的 allprojects 中设置
    repositories {
    	...

        // 添加maven仓库，AndroidStudio会自动设置，如果已经存在不需要重复添加
        mavenCentral()
        //如果使用 SNAPSHOT 版本，则需要使用如下该仓库。
        maven ("https://s01.oss.sonatype.org/content/repositories/snapshots/")
    }

    // 声明插件依赖项
    plugins {
    	...

        //      声明GrowingIO 插件
        val gioVersion: String by settings
        id ("com.growingio.android.autotracker") version gioVersion

    }

    // 设置插件解析策略
    resolutionStrategy {
        eachPlugin {
            when  (requested.id.id) {

                // 解析GgowingIO 插件
                "com.growingio.android.autotracker" -> {
                    val gioCoordinates: String by settings
                    useModule(gioCoordinates)
                }

                ...

            }
        }
    }
}
```

</TabItem>
</Tabs>


3、在项目的 settings.gradle 文件中设置 dependencyResolutionManagement 模块，设置依赖的地址

<Tabs
  groupId="code-language"
  defaultValue="groovy"
  values={[
    {label: 'groovy', value: 'groovy'},
    {label: 'kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="groovy">

```groovy
enableFeaturePreview('VERSION_CATALOGS')
dependencyResolutionManagement {

    repositories {
    	...

        // 添加maven仓库，AndroidStudio会自动设置，如果已经存在不需要重复添加
        mavenCentral()
        //如果使用 SNAPSHOT 版本，则需要使用如下该仓库。
        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }
    }

    versionCatalogs {
        libs {

        	// 声明版本号，并且设置依赖
            version('autotracker', gioVersion)
            alias("gio-autotracker").to('com.growingio.android','autotracker-cdp').versionRef('autotracker')

            ... 

        }
    }
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin

enableFeaturePreview("VERSION_CATALOGS")
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {

    	...

        // 添加maven仓库，AndroidStudio会自动设置，如果已经存在不需要重复添加
        mavenCentral()
        //如果使用 SNAPSHOT 版本，则需要使用如下该仓库。
        maven ("https://s01.oss.sonatype.org/content/repositories/snapshots/")
    }


    versionCatalogs {
        create("libs") {

            val gioVersion: String by settings
            version("autotracker", gioVersion)
            alias("gio-autotracker").to("com.growingio.android","autotracker-cdp").versionRef("autotracker")

            ... 
        }
    }

}

```

</TabItem>
</Tabs>



4、 在module 级别的 build.gradle 文件中设置插件和依赖

<Tabs
  groupId="code-language"
  defaultValue="groovy"
  values={[
    {label: 'groovy', value: 'groovy'},
    {label: 'kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="groovy">

```groovy
plugins {

	// 设置 GrowingIO 无埋点插件
    id "com.growingio.android.autotracker"
    ... 
}

dependencies {

	// 设置 GrowingIO 无埋点依赖
    implementation libs.gio.autotracker
    ...
}

```

</TabItem>

<TabItem value="kotlin">

```kotlin
plugins {

	// 设置 GrowingIO 无埋点插件
    id ("com.growingio.android.autotracker")
    ...
}

dependencies {

	// 设置 GrowingIO 无埋点依赖
    implementation(libs.gio.autotracker)
    ...
}

```

</TabItem>
</Tabs>



### 集成埋点SDK

1、 在项目的 gradle.properties 文件中设置SDK当前最新的版本号

```groovy

# 设置版本号
gioVersion=3.3.0
```

2、在项目的 settings.gradle 文件中设置 pluginManagement 模块，设置全局仓库和插件

<Tabs
  groupId="code-language"
  defaultValue="groovy"
  values={[
    {label: 'groovy', value: 'groovy'},
    {label: 'kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="groovy">

```groovy
pluginManagement {

    // 设置全局仓库地址，相当于在以前的 allprojects 中设置
    repositories {
    	...

        // 添加maven仓库，AndroidStudio会自动设置，如果已经存在不需要重复添加
        mavenCentral()
        //如果使用 SNAPSHOT 版本，则需要使用如下该仓库。
        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }
    }

}
```

</TabItem>

<TabItem value="kotlin">

```kotlin
pluginManagement {

    // 设置全局仓库地址，相当于在以前的 allprojects 中设置
    repositories {
    	...

        // 添加maven仓库，AndroidStudio会自动设置，如果已经存在不需要重复添加
        mavenCentral()
        //如果使用 SNAPSHOT 版本，则需要使用如下该仓库。
        maven ("https://s01.oss.sonatype.org/content/repositories/snapshots/")
    }
}
```

</TabItem>
</Tabs>


3、在项目的 settings.gradle 文件中设置 dependencyResolutionManagement 模块，设置依赖的地址

<Tabs
  groupId="code-language"
  defaultValue="groovy"
  values={[
    {label: 'groovy', value: 'groovy'},
    {label: 'kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="groovy">

```groovy
enableFeaturePreview('VERSION_CATALOGS')
dependencyResolutionManagement {

    repositories {
    	...

        // 添加maven仓库，AndroidStudio会自动设置，如果已经存在不需要重复添加
        mavenCentral()
        //如果使用 SNAPSHOT 版本，则需要使用如下该仓库。
        maven { url "https://s01.oss.sonatype.org/content/repositories/snapshots/" }
    }

    versionCatalogs {
        libs {

        	// 声明版本号，并且设置依赖
            version('tracker', gioVersion)
            alias("gio-tracker").to('com.growingio.android','tracker-cdp').versionRef('tracker')

            ... 
        }
    }
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin
enableFeaturePreview("VERSION_CATALOGS")
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {

    	...

        // 添加maven仓库，AndroidStudio会自动设置，如果已经存在不需要重复添加
        mavenCentral()
        //如果使用 SNAPSHOT 版本，则需要使用如下该仓库。
        maven ("https://s01.oss.sonatype.org/content/repositories/snapshots/")
    }

    versionCatalogs {
        create("libs") {

            // 声明版本号，并且设置依赖
            val gioVersion: String by settings
            version("tracker", gioVersion)
            alias("gio-tracker").to("com.growingio.android","tracker-cdp").versionRef("tracker")

            ... 
        }
    }
}
```

</TabItem>
</Tabs>



4、 在module 级别的 build.gradle 文件中设置依赖

<Tabs
  groupId="code-language"
  defaultValue="groovy"
  values={[
    {label: 'groovy', value: 'groovy'},
    {label: 'kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="groovy">

```groovy
dependencies {

	// 设置 GrowingIO 无埋点依赖
    implementation libs.gio.tracker
    ...
}
```
</TabItem>

<TabItem value="kotlin">

```kotlin
dependencies {

	// 设置 GrowingIO 埋点依赖
    implementation(libs.gio.tracker)
    ...
}
```
</TabItem>
</Tabs>




