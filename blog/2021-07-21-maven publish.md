---
slug: MavenCentral
title: MavenCentral 迁移步骤
author: cpacm
author_title: GrowingIO SDK Team
author_url: https://github.com/cpacm
author_image_url: https://avatars.githubusercontent.com/u/7134104?v=4
tags: [scripts, gradle]
---

随着 Jcenter 服务的即将过期，我们需要一个新的仓库来发行我们的SDK.于是我们找上了 MavenCentral，并针对如何在MavenCentral提交包写了这篇文章。

<!--truncate-->

## 注册账号
前往 [sonatype](https://issues.sonatype.org/) 注册账号，账号注册完毕后需要提个issue来申请 groupid .

如 [OSSRH-66388](https://issues.sonatype.org/browse/OSSRH-66388) 所示，如果是GitHub或gitlab下的项目，可以申请 `io.github.<yourname>`。
如果是域名，则需要在域名的dns解析下添加 TXT 记录，如 [OSSRH-66397](https://issues.sonatype.org/browse/OSSRH-66397)举例，txt前缀为OSSRH-66397 值为网址https://issues.sonatype.org/browse/OSSRH-66397.

> 在2021年2月前申请的账号，maven仓库的地址为 [https://oss.sonatype.org/](https://oss.sonatype.org/)，而在之后申请的的地址为 [https://s01.oss.sonatype.org/](https://s01.oss.sonatype.org/).不过也可以在[sonatype](https://issues.sonatype.org/)上提 issue 来申请变更域名地址，如这个issue所示->[OSSRH-66964](https://issues.sonatype.org/browse/OSSRH-66964)

 
## Maven Central
注册结束后，可以前往[nexus repository](https://s01.oss.sonatype.org/)查看自己的仓库。在仓库中一般分为两种提交方式，一种是 SNAPSHOT 版本，一种是正式版本。
两者仓库地址不同，分别为：https://s01.oss.sonatype.org/content/repositories/snapshots 和 https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/

### SNAPSHOT
SNAPSHOT 版本可以在同一版本号下多次提交，当其他人拉取该版本号时会取最后提交的包，如下图所示
![SNAPSHOT](/img/SNAPSHOT.png)
在 SNAPSHOT 仓库中同一个版本下多个包会通过提交日期来区分，这样别人依赖某个版本时就能获得最新更新的包。
同时 SNAPSHOT 不会对提交的包进行 `close` 操作来对其进行审核，没有一定要有 `javadoc`、`sources`、`GPG加密`等要求。

### 正式版
提交正式版后包会先进入 `Staging Repositories`,然后需要在这里依次执行 `close` 和 `release` 操作，`close`操作会验证本次的提交的包是否包含 `javadoc`、`sources`、`GPG加密文件` 和 `pom`文件的合法等，通过后才能执行 `release` 操作向官方仓库发布。

![Staging Repositories](/img/Repositories.png)

## 开始准备

### 1. 配置 GPG 私钥
```cmd
# 生成证书，里面会要求输入用户名和密码，有效期两年。
gpg --gen-key

# 查看公钥
gpg --list-keys

# 查看私钥
gpg --list-secret-keys

# 将证书上传 key server，恩，国内需要代理
gpg --keyserver-options http-proxy=127.0.0.1:1087 --send-keys D81E8990E415EDE0

# 查看8位短id
gpg --list-keys --keyid-format short

# 生成私钥文件，配置到gradle使用
gpg --export-secret-keys -o secring.gpg

# 生成base64文件，后续放入github secrets 中使用
base64 secring.gpg > secring.gpg.b64
```
具体可参考 [gpg配置](https://central.sonatype.org/publish/requirements/gpg/)

### 2. 本地全局 gradle 配置
找到 `.gradle`文件夹下gradle.properties文件，如下进行配置

```gradle
## growingio's config
NEXUS_USERNAME=<sonatype账号>
NEXUS_PASSWORD=<sonatype密码>

signing.keyId=09B66CAF
signing.password=<生成证书时的输入密码>
signing.secretKeyRingFile=<生成私钥文件的文件路径>
```

当然在项目下的gradle.properties也同样生效。

### 3. 配置 pom 文件
在根项目下的 gradle.properties 添加以下配置说明，这些说明将会一一填入到 pom 文件中

```xml
GROUP=com.growingio.android
POM_DESCRIPTION=GrowingIO Android SDK Library.
POM_DEVELOPER_EMAIL=sdk-integration@growingio.com
POM_URL=https://github.com/growingio/growingio-sdk-android-autotracker
POM_SCM_URL=https://github.com/growingio/growingio-sdk-android-autotracker
POM_SCM_CONNECTION=scm:git@github.com:growingio/growingio-sdk-android-autotracker.git
POM_SCM_DEV_CONNECTION=scm:git@github.com:growingio/growingio-sdk-android-autotracker.git
POM_LICENCE_NAME=The Apache Software License, Version 2.0
POM_LICENCE_URL=http://www.apache.org/licenses/LICENSE-2.0.txt
POM_LICENCE_DIST=repo
POM_DEVELOPER_ID=GrowingIo Sdk
POM_DEVELOPER_NAME=GrowingIo Sdk
```

### 4. 编写gradle的maven上传代码
[sonatype 的gradle教程](https://central.sonatype.org/publish/publish-gradle/) 已经过期好久了，这里推荐在 Github 上的[gradle-mvn-push](https://github.com/chrisbanes/gradle-mvn-push)。后面的所有改动都基于在这个文件版本上得来的，具体如何改动在后续说明。
示例代码 `publishMaven.gradle`：

```groovy
/*
 * Copyright 2021 Cpacm
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 * Based on: https://github.com/mcxiaoke/gradle-mvn-push/blob/master/gradle-mvn-push.gradle.
 *
 * To install in a local maven repo:
 * 1. In the project you want to test, add mavenLocal() to the repositories list.
 * 2. In Project, run: ./gradlew publishToMavenLocal
 *
 * For faster runs add: -x check when building.
 */

apply plugin: 'maven-publish'
apply plugin: 'signing'

version = releaseConfiguration.releaseVersion
group = GROUP

@SuppressWarnings("GrMethodMayBeStatic")
def isReleaseBuild() {
    return !version.contains("SNAPSHOT")
}

def getReleaseRepositoryUrl() {
    return hasProperty('RELEASE_REPOSITORY_URL') ? RELEASE_REPOSITORY_URL
            : 'https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/'
}

def getSnapshotRepositoryUrl() {
    return hasProperty('SNAPSHOT_REPOSITORY_URL') ? SNAPSHOT_REPOSITORY_URL
            : 'https://s01.oss.sonatype.org/content/repositories/snapshots/'
}

def getRepositoryUsername() {
    return hasProperty('USERNAME') ? USERNAME : (hasProperty('NEXUS_USERNAME') ? NEXUS_USERNAME : '')
}

def getRepositoryPassword() {
    return hasProperty('PASSWORD') ? PASSWORD : (hasProperty('NEXUS_PASSWORD') ? NEXUS_PASSWORD : '')
}

def configurePom(pom) {
    pom.name = POM_NAME
    pom.packaging = POM_PACKAGING
    pom.description = POM_DESCRIPTION
    pom.url = POM_URL

    pom.scm {
        url = POM_SCM_URL
        connection = POM_SCM_CONNECTION
        developerConnection = POM_SCM_DEV_CONNECTION
    }

    pom.licenses {
        license {
            name = POM_LICENCE_NAME
            url = POM_LICENCE_URL
            distribution = POM_LICENCE_DIST
        }
    }

    pom.developers {
        developer {
            id = POM_DEVELOPER_ID
            name = POM_DEVELOPER_NAME
            email = POM_DEVELOPER_EMAIL
        }
    }
}

afterEvaluate { project ->
    def isAndroidProject = project.plugins.hasPlugin('com.android.application') || project.plugins.hasPlugin('com.android.library')
    publishing {
        repositories {
            maven {
                def releasesRepoUrl = getReleaseRepositoryUrl()
                def snapshotsRepoUrl = getSnapshotRepositoryUrl()
                url = isReleaseBuild() ? releasesRepoUrl : snapshotsRepoUrl
                credentials(PasswordCredentials) {
                    username = getRepositoryUsername()
                    password = getRepositoryPassword()
                }
            }
        }
    }

    if (isAndroidProject) {
        task androidJavadocs(type: Javadoc, dependsOn: assembleDebug) {
            source = android.sourceSets.main.java.source
            classpath += project.files(android.getBootClasspath().join(File.pathSeparator))
            // include BuildConfig.java
            classpath += project.files(project.file("build/generated/source/buildConfig/debug"))
            excludes = ['**/*.kt']
        }

        task androidJavadocsJar(type: Jar, dependsOn: androidJavadocs) {
            classifier = 'javadoc'
            from androidJavadocs.destinationDir
        }

        task androidSourcesJar(type: Jar) {
            classifier = 'sources'
            from android.sourceSets.main.java.source
        }

        android.libraryVariants.all { variant ->
            tasks.androidJavadocs.doFirst {
                classpath += files(variant.javaCompileProvider.get().classpath.files.join(File.pathSeparator))
            }
        }
    } else {

        task sourcesJar(type: Jar, dependsOn: classes) {
            classifier = 'sources'
            from sourceSets.main.allSource
        }

        task javadocsJar(type: Jar, dependsOn: javadoc) {
            classifier = 'javadoc'
            from javadoc.destinationDir
        }

        artifacts {
            archives sourcesJar
            archives javadocsJar
        }
    }

    if (JavaVersion.current().isJava8Compatible()) {
        allprojects {
            tasks.withType(Javadoc) {
                options.addStringOption('Xdoclint:none', '-quiet')
            }
        }
    }

    if (JavaVersion.current().isJava9Compatible()) {
        allprojects {
            tasks.withType(Javadoc) {
                options.addBooleanOption('html5', true)
            }
        }
    }

    artifacts {
        if (isAndroidProject) {
            archives androidSourcesJar
            archives androidJavadocsJar

            archives project.tasks.bundleDebugAar
        }
    }

    publishing {
        publications {
            mavenAgent(MavenPublication) {
                groupId GROUP
                artifactId POM_ARTIFACT_ID
                version version
                configurePom(pom)

                if (isAndroidProject) {
                    artifact bundleReleaseAar
                    artifact androidSourcesJar

                    pom.withXml {
                        def dependenciesNode = asNode().appendNode('dependencies')
                        project.configurations.all { configuration ->
                            def name = configuration.name
                            // api will duplicate with implementation
                            if (name == 'releaseImplementation' || name == 'implementation') {
                                configuration.allDependencies.each {
                                    if (it.name != "unspecified" && it.version != "unspecified") {
                                        def groupId = it.group
                                        def artifactId = it.name
                                        if (it instanceof ProjectDependency) {
                                            def properties = it.getDependencyProject().getProperties()
                                            groupId = properties.get("GROUP")
                                            artifactId = properties.get("POM_ARTIFACT_ID")
                                        }
                                        println "dependencies:" + groupId + ":" + artifactId + ":" + it.version
                                        def dependencyNode = dependenciesNode.appendNode('dependency')
                                        dependencyNode.appendNode('groupId', groupId)
                                        dependencyNode.appendNode('artifactId', artifactId)
                                        dependencyNode.appendNode('version', it.version)
                                        dependencyNode.appendNode('scope', 'compile')
                                    }
                                }
                            }
                        }
                    }
                } else {
                    from components.java
                    artifact sourcesJar
                    artifact javadocsJar
                }
            }

            if (project.plugins.hasPlugin('java-gradle-plugin')) {
                pluginMaven(MavenPublication) {
                    groupId GROUP
                    artifactId POM_ARTIFACT_ID
                    version version
                    configurePom(pom)
                }
            }
        }
    }
}

signing {
    required { isReleaseBuild() && gradle.taskGraph.hasTask("publish") }
    publishing.publications.all { publication ->
        sign publication
    }
}

```
基本使用：在需要发布的项目下添加 `gradle.properties`文件，并注明 `ARTIFACT_ID`名，如下：
```xml
POM_NAME=autotracker
POM_ARTIFACT_ID=autotracker
POM_PACKAGING=aar
POM_DESCRIPTION=GrowingIO Android SDK AutoTracker.
```
同时在 `build.gradle` 中引入该文件
```gradle
apply from: "${rootProject.projectDir}/gradle/publishMaven.gradle"
```
```cmd
# 上传到本地仓库
./gradlew publishToMavenLocal

# 上传到远程仓库
./gradlew publish

```

### 5. Github Ci脚本
GitHub上有提供 Action 这一工具，该工具可以在线上进行各种操作：比如编译，测试，校验等，所以打包上传也是可以的。
1. 配置 Github Secrets
![Github Secrets](/img/Secrets.png)
各个配置分别对应 `全局 gradle 配置` 步骤中的各个参数，其中 `SIGNING_SECRET_KEY_RING_FILE` 是秘钥文件经过 base64 后产生的字符串。

2. 自动 close 和 release
这里直接使用 [gradle-nexus-staging-plugin](https://github.com/Codearte/gradle-nexus-staging-plugin)的插件。它能通过 sonatype 的api来自动实现 `Staging Repositories`上的close和release操作

3. 完整ci脚本

```yml
name: Publish Maven
on:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8

      # Gradle 缓存配置
      - name: Cache Gradle packages
        uses: actions/cache@v2
        with:
          path: ~/.gradle/caches
          key: ${{ runner.os }}-gradle-${{ hashFiles('**/*.gradle') }}
          restore-keys: ${{ runner.os }}-gradle

      # 给 gradlew 文件授权
      - name: Grant Permission to Execute
        run: |
          chmod +x gradlew
          chmod +x gradle/publishAllToMavenLocal.sh

      # 构建项目
      - name: Build with Gradle
        run: |
          bash ./gradle/publishAllToMavenLocal.sh

      # 解码秘钥
      - name: Decode
        run: |
          echo "${{secrets.SIGNING_SECRET_KEY_RING_FILE}}" > ~/.gradle/secring.gpg.b64
          base64 -d ~/.gradle/secring.gpg.b64 > ~/.gradle/secring.gpg

      - name: Publish to Sonatype
        env:
          NEXUS_USERNAME: ${{ secrets.NEXUS_USERNAME }}
          NEXUS_PASSWORD: ${{ secrets.NEXUS_PASSWORD }}
        run: ./gradlew publish -PNEXUS_USERNAME="${NEXUS_USERNAME}" -PNEXUS_PASSWORD="${NEXUS_PASSWORD}" -Psigning.keyId=${{secrets.SIGNING_KEY_ID}} -Psigning.password=${{secrets.SIGNING_PASSWORD}} -Psigning.secretKeyRingFile=$(echo ~/.gradle/secring.gpg)

      - name: Close And Release Package
        env:
          NEXUS_USERNAME: ${{ secrets.NEXUS_USERNAME }}
          NEXUS_PASSWORD: ${{ secrets.NEXUS_PASSWORD }}
        run: ./gradlew tryCloseAndReleaseRepository -PNEXUS_USERNAME="${NEXUS_USERNAME}" -PNEXUS_PASSWORD="${NEXUS_PASSWORD}"

```

至此，一套完整的自动打包系统就搭建完成了。

------
参考资料：
1. [github action](https://docs.github.com/cn/actions/reference/events-that-trigger-workflows)
2. [gradle 配置](https://docs.gradle.org/current/userguide/signing_plugin.html#sec:signatory_credentials)

## 附录：关于在 GrowingIO 各个仓库上遇到的几个问题

### gradle plugin 插件打包
plugin项目应该属于 java 项目，但在 `publications`下它会单独走 `pluginMaven`，所以需要对其做特别处理来规范其 ARTIFACT_ID

```groovy
if (project.plugins.hasPlugin('java-gradle-plugin')) {
    pluginMaven(MavenPublication) {
        groupId GROUP
        artifactId POM_ARTIFACT_ID
        version version
        configurePom(pom)
    }
}

```

### javadoc找不到BuildConfig文件

这里需要在生成 javadoc 包的时候添加 BuildConfig类的路径到 classpath 中。
```groovy
task androidJavadocs(type: Javadoc, dependsOn: assembleDebug) {
    source = android.sourceSets.main.java.source
    classpath += project.files(android.getBootClasspath().join(File.pathSeparator))
    // include BuildConfig.java
    classpath += project.files(project.file("build/generated/source/buildConfig/debug"))
    excludes = ['**/*.kt']
}
```
当然可能不同版本的gradle生成的地址不一样，请自己测试并添加

### 关于 uploadArchives
旧版本 Gradle 的task，依赖于插件 maven。现在一般都是
```groovy
apply plugin: 'maven-publish'

afterEvaluate { project ->
    publishing {}
}
```
且在 gradle 版本 5.0后，需要将 publishing 放置在 afterEvaluate 中。

### 关于依赖
api依赖和implementation依赖会重复出现在 `project.configurations.all`循环中(api > implementation)，所以只需要判断 `implementation`即可

```groovy
pom.withXml {
    def dependenciesNode = asNode().appendNode('dependencies')
    project.configurations.all { configuration ->
        def name = configuration.name
        // api will duplicate with implementation
        if (name == 'releaseImplementation' || name == 'implementation') {
            configuration.allDependencies.each {
                if (it.name != "unspecified" && it.version != "unspecified") {
                    def groupId = it.group
                    def artifactId = it.name
                    if (it instanceof ProjectDependency) {
                        def properties = it.getDependencyProject().getProperties()
                        groupId = properties.get("GROUP")
                        artifactId = properties.get("POM_ARTIFACT_ID")
                    }
                    println "dependencies:" + groupId + ":" + artifactId + ":" + it.version
                    def dependencyNode = dependenciesNode.appendNode('dependency')
                    dependencyNode.appendNode('groupId', groupId)
                    dependencyNode.appendNode('artifactId', artifactId)
                    dependencyNode.appendNode('version', it.version)
                    dependencyNode.appendNode('scope', 'compile')
                }
            }
        }
    }
}
```