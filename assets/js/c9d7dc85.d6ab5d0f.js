"use strict";(self.webpackChunkgrowingio_sdk_doc=self.webpackChunkgrowingio_sdk_doc||[]).push([[7689],{1492:function(n){n.exports=JSON.parse('{"blogPosts":[{"id":"MavenCentral","metadata":{"permalink":"/growingio-sdk-docs/blog/MavenCentral","editUrl":"https://github.com/growingio/growingio-sdk-docs/edit/master/blog/2021-07-21-maven publish.md","source":"@site/blog/2021-07-21-maven publish.md","title":"MavenCentral \u8fc1\u79fb\u6b65\u9aa4","description":"\u968f\u7740 Jcenter \u670d\u52a1\u7684\u5373\u5c06\u8fc7\u671f\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u65b0\u7684\u4ed3\u5e93\u6765\u53d1\u884c\u6211\u4eec\u7684SDK.\u4e8e\u662f\u6211\u4eec\u627e\u4e0a\u4e86 MavenCentral\uff0c\u5e76\u9488\u5bf9\u5982\u4f55\u5728MavenCentral\u63d0\u4ea4\u5305\u5199\u4e86\u8fd9\u7bc7\u6587\u7ae0\u3002","date":"2021-07-21T00:00:00.000Z","formattedDate":"July 21, 2021","tags":[{"label":"scripts","permalink":"/growingio-sdk-docs/blog/tags/scripts"},{"label":"gradle","permalink":"/growingio-sdk-docs/blog/tags/gradle"}],"readingTime":10.555,"truncated":true,"authors":[{"name":"cpacm","title":"GrowingIO SDK Team","url":"https://github.com/cpacm","imageURL":"https://avatars.githubusercontent.com/u/7134104?v=4"}],"frontMatter":{"slug":"MavenCentral","title":"MavenCentral \u8fc1\u79fb\u6b65\u9aa4","author":"cpacm","author_title":"GrowingIO SDK Team","author_url":"https://github.com/cpacm","author_image_url":"https://avatars.githubusercontent.com/u/7134104?v=4","tags":["scripts","gradle"]}},"content":"\u968f\u7740 Jcenter \u670d\u52a1\u7684\u5373\u5c06\u8fc7\u671f\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u65b0\u7684\u4ed3\u5e93\u6765\u53d1\u884c\u6211\u4eec\u7684SDK.\u4e8e\u662f\u6211\u4eec\u627e\u4e0a\u4e86 MavenCentral\uff0c\u5e76\u9488\u5bf9\u5982\u4f55\u5728MavenCentral\u63d0\u4ea4\u5305\u5199\u4e86\u8fd9\u7bc7\u6587\u7ae0\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u6ce8\u518c\u8d26\u53f7\\n\u524d\u5f80 [sonatype](https://issues.sonatype.org/) \u6ce8\u518c\u8d26\u53f7\uff0c\u8d26\u53f7\u6ce8\u518c\u5b8c\u6bd5\u540e\u9700\u8981\u63d0\u4e2aissue\u6765\u7533\u8bf7 groupid .\\n\\n\u5982 [OSSRH-66388](https://issues.sonatype.org/browse/OSSRH-66388) \u6240\u793a\uff0c\u5982\u679c\u662fGitHub\u6216gitlab\u4e0b\u7684\u9879\u76ee\uff0c\u53ef\u4ee5\u7533\u8bf7 `io.github.<yourname>`\u3002\\n\u5982\u679c\u662f\u57df\u540d\uff0c\u5219\u9700\u8981\u5728\u57df\u540d\u7684dns\u89e3\u6790\u4e0b\u6dfb\u52a0 TXT \u8bb0\u5f55\uff0c\u5982 [OSSRH-66397](https://issues.sonatype.org/browse/OSSRH-66397)\u4e3e\u4f8b\uff0ctxt\u524d\u7f00\u4e3aOSSRH-66397 \u503c\u4e3a\u7f51\u5740https://issues.sonatype.org/browse/OSSRH-66397.\\n\\n> \u57282021\u5e742\u6708\u524d\u7533\u8bf7\u7684\u8d26\u53f7\uff0cmaven\u4ed3\u5e93\u7684\u5730\u5740\u4e3a [https://oss.sonatype.org/](https://oss.sonatype.org/)\uff0c\u800c\u5728\u4e4b\u540e\u7533\u8bf7\u7684\u7684\u5730\u5740\u4e3a [https://s01.oss.sonatype.org/](https://s01.oss.sonatype.org/).\u4e0d\u8fc7\u4e5f\u53ef\u4ee5\u5728[sonatype](https://issues.sonatype.org/)\u4e0a\u63d0 issue \u6765\u7533\u8bf7\u53d8\u66f4\u57df\u540d\u5730\u5740\uff0c\u5982\u8fd9\u4e2aissue\u6240\u793a->[OSSRH-66964](https://issues.sonatype.org/browse/OSSRH-66964)\\n\\n \\n## Maven Central\\n\u6ce8\u518c\u7ed3\u675f\u540e\uff0c\u53ef\u4ee5\u524d\u5f80[nexus repository](https://s01.oss.sonatype.org/)\u67e5\u770b\u81ea\u5df1\u7684\u4ed3\u5e93\u3002\u5728\u4ed3\u5e93\u4e2d\u4e00\u822c\u5206\u4e3a\u4e24\u79cd\u63d0\u4ea4\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f SNAPSHOT \u7248\u672c\uff0c\u4e00\u79cd\u662f\u6b63\u5f0f\u7248\u672c\u3002\\n\u4e24\u8005\u4ed3\u5e93\u5730\u5740\u4e0d\u540c\uff0c\u5206\u522b\u4e3a\uff1ahttps://s01.oss.sonatype.org/content/repositories/snapshots \u548c https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/\\n\\n### SNAPSHOT\\nSNAPSHOT \u7248\u672c\u53ef\u4ee5\u5728\u540c\u4e00\u7248\u672c\u53f7\u4e0b\u591a\u6b21\u63d0\u4ea4\uff0c\u5f53\u5176\u4ed6\u4eba\u62c9\u53d6\u8be5\u7248\u672c\u53f7\u65f6\u4f1a\u53d6\u6700\u540e\u63d0\u4ea4\u7684\u5305\uff0c\u5982\u4e0b\u56fe\u6240\u793a\\n![SNAPSHOT](/img/SNAPSHOT.png)\\n\u5728 SNAPSHOT \u4ed3\u5e93\u4e2d\u540c\u4e00\u4e2a\u7248\u672c\u4e0b\u591a\u4e2a\u5305\u4f1a\u901a\u8fc7\u63d0\u4ea4\u65e5\u671f\u6765\u533a\u5206\uff0c\u8fd9\u6837\u522b\u4eba\u4f9d\u8d56\u67d0\u4e2a\u7248\u672c\u65f6\u5c31\u80fd\u83b7\u5f97\u6700\u65b0\u66f4\u65b0\u7684\u5305\u3002\\n\u540c\u65f6 SNAPSHOT \u4e0d\u4f1a\u5bf9\u63d0\u4ea4\u7684\u5305\u8fdb\u884c `close` \u64cd\u4f5c\u6765\u5bf9\u5176\u8fdb\u884c\u5ba1\u6838\uff0c\u6ca1\u6709\u4e00\u5b9a\u8981\u6709 `javadoc`\u3001`sources`\u3001`GPG\u52a0\u5bc6`\u7b49\u8981\u6c42\u3002\\n\\n### \u6b63\u5f0f\u7248\\n\u63d0\u4ea4\u6b63\u5f0f\u7248\u540e\u5305\u4f1a\u5148\u8fdb\u5165 `Staging Repositories`,\u7136\u540e\u9700\u8981\u5728\u8fd9\u91cc\u4f9d\u6b21\u6267\u884c `close` \u548c `release` \u64cd\u4f5c\uff0c`close`\u64cd\u4f5c\u4f1a\u9a8c\u8bc1\u672c\u6b21\u7684\u63d0\u4ea4\u7684\u5305\u662f\u5426\u5305\u542b `javadoc`\u3001`sources`\u3001`GPG\u52a0\u5bc6\u6587\u4ef6` \u548c `pom`\u6587\u4ef6\u7684\u5408\u6cd5\u7b49\uff0c\u901a\u8fc7\u540e\u624d\u80fd\u6267\u884c `release` \u64cd\u4f5c\u5411\u5b98\u65b9\u4ed3\u5e93\u53d1\u5e03\u3002\\n\\n![Staging Repositories](/img/Repositories.png)\\n\\n## \u5f00\u59cb\u51c6\u5907\\n\\n### 1. \u914d\u7f6e GPG \u79c1\u94a5\\n```cmd\\n# \u751f\u6210\u8bc1\u4e66\uff0c\u91cc\u9762\u4f1a\u8981\u6c42\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u6709\u6548\u671f\u4e24\u5e74\u3002\\ngpg --gen-key\\n\\n# \u67e5\u770b\u516c\u94a5\\ngpg --list-keys\\n\\n# \u67e5\u770b\u79c1\u94a5\\ngpg --list-secret-keys\\n\\n# \u5c06\u8bc1\u4e66\u4e0a\u4f20 key server\uff0c\u6069\uff0c\u56fd\u5185\u9700\u8981\u4ee3\u7406\\ngpg --keyserver-options http-proxy=127.0.0.1:1087 --send-keys D81E8990E415EDE0\\n\\n# \u67e5\u770b8\u4f4d\u77edid\\ngpg --list-keys --keyid-format short\\n\\n# \u751f\u6210\u79c1\u94a5\u6587\u4ef6\uff0c\u914d\u7f6e\u5230gradle\u4f7f\u7528\\ngpg --export-secret-keys -o secring.gpg\\n\\n# \u751f\u6210base64\u6587\u4ef6\uff0c\u540e\u7eed\u653e\u5165github secrets \u4e2d\u4f7f\u7528\\nbase64 secring.gpg > secring.gpg.b64\\n```\\n\u5177\u4f53\u53ef\u53c2\u8003 [gpg\u914d\u7f6e](https://central.sonatype.org/publish/requirements/gpg/)\\n\\n### 2. \u672c\u5730\u5168\u5c40 gradle \u914d\u7f6e\\n\u627e\u5230 `.gradle`\u6587\u4ef6\u5939\u4e0bgradle.properties\u6587\u4ef6\uff0c\u5982\u4e0b\u8fdb\u884c\u914d\u7f6e\\n\\n```gradle\\n## growingio\'s config\\nNEXUS_USERNAME=<sonatype\u8d26\u53f7>\\nNEXUS_PASSWORD=<sonatype\u5bc6\u7801>\\n\\nsigning.keyId=09B66CAF\\nsigning.password=<\u751f\u6210\u8bc1\u4e66\u65f6\u7684\u8f93\u5165\u5bc6\u7801>\\nsigning.secretKeyRingFile=<\u751f\u6210\u79c1\u94a5\u6587\u4ef6\u7684\u6587\u4ef6\u8def\u5f84>\\n```\\n\\n\u5f53\u7136\u5728\u9879\u76ee\u4e0b\u7684gradle.properties\u4e5f\u540c\u6837\u751f\u6548\u3002\\n\\n### 3. \u914d\u7f6e pom \u6587\u4ef6\\n\u5728\u6839\u9879\u76ee\u4e0b\u7684 gradle.properties \u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u8bf4\u660e\uff0c\u8fd9\u4e9b\u8bf4\u660e\u5c06\u4f1a\u4e00\u4e00\u586b\u5165\u5230 pom \u6587\u4ef6\u4e2d\\n\\n```xml\\nGROUP=com.growingio.android\\nPOM_DESCRIPTION=GrowingIO Android SDK Library.\\nPOM_DEVELOPER_EMAIL=sdk-integration@growingio.com\\nPOM_URL=https://github.com/growingio/growingio-sdk-android-autotracker\\nPOM_SCM_URL=https://github.com/growingio/growingio-sdk-android-autotracker\\nPOM_SCM_CONNECTION=scm:git@github.com:growingio/growingio-sdk-android-autotracker.git\\nPOM_SCM_DEV_CONNECTION=scm:git@github.com:growingio/growingio-sdk-android-autotracker.git\\nPOM_LICENCE_NAME=The Apache Software License, Version 2.0\\nPOM_LICENCE_URL=http://www.apache.org/licenses/LICENSE-2.0.txt\\nPOM_LICENCE_DIST=repo\\nPOM_DEVELOPER_ID=GrowingIo Sdk\\nPOM_DEVELOPER_NAME=GrowingIo Sdk\\n```\\n\\n### 4. \u7f16\u5199gradle\u7684maven\u4e0a\u4f20\u4ee3\u7801\\n[sonatype \u7684gradle\u6559\u7a0b](https://central.sonatype.org/publish/publish-gradle/) \u5df2\u7ecf\u8fc7\u671f\u597d\u4e45\u4e86\uff0c\u8fd9\u91cc\u63a8\u8350\u5728 Github \u4e0a\u7684[gradle-mvn-push](https://github.com/chrisbanes/gradle-mvn-push)\u3002\u540e\u9762\u7684\u6240\u6709\u6539\u52a8\u90fd\u57fa\u4e8e\u5728\u8fd9\u4e2a\u6587\u4ef6\u7248\u672c\u4e0a\u5f97\u6765\u7684\uff0c\u5177\u4f53\u5982\u4f55\u6539\u52a8\u5728\u540e\u7eed\u8bf4\u660e\u3002\\n\u793a\u4f8b\u4ee3\u7801 `publishMaven.gradle`\uff1a\\n\\n```groovy\\n/*\\n * Copyright 2021 Cpacm\\n *\\n * Licensed under the Apache License, Version 2.0 (the \\"License\\");\\n * you may not use this file except in compliance with the License.\\n * You may obtain a copy of the License at\\n *\\n *     http://www.apache.org/licenses/LICENSE-2.0\\n *\\n * Unless required by applicable law or agreed to in writing, software\\n * distributed under the License is distributed on an \\"AS IS\\" BASIS,\\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n * See the License for the specific language governing permissions and\\n * limitations under the License.\\n *\\n *\\n * Based on: https://github.com/mcxiaoke/gradle-mvn-push/blob/master/gradle-mvn-push.gradle.\\n *\\n * To install in a local maven repo:\\n * 1. In the project you want to test, add mavenLocal() to the repositories list.\\n * 2. In Project, run: ./gradlew publishToMavenLocal\\n *\\n * For faster runs add: -x check when building.\\n */\\n\\napply plugin: \'maven-publish\'\\napply plugin: \'signing\'\\n\\nversion = releaseConfiguration.releaseVersion\\ngroup = GROUP\\n\\n@SuppressWarnings(\\"GrMethodMayBeStatic\\")\\ndef isReleaseBuild() {\\n    return !version.contains(\\"SNAPSHOT\\")\\n}\\n\\ndef getReleaseRepositoryUrl() {\\n    return hasProperty(\'RELEASE_REPOSITORY_URL\') ? RELEASE_REPOSITORY_URL\\n            : \'https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/\'\\n}\\n\\ndef getSnapshotRepositoryUrl() {\\n    return hasProperty(\'SNAPSHOT_REPOSITORY_URL\') ? SNAPSHOT_REPOSITORY_URL\\n            : \'https://s01.oss.sonatype.org/content/repositories/snapshots/\'\\n}\\n\\ndef getRepositoryUsername() {\\n    return hasProperty(\'USERNAME\') ? USERNAME : (hasProperty(\'NEXUS_USERNAME\') ? NEXUS_USERNAME : \'\')\\n}\\n\\ndef getRepositoryPassword() {\\n    return hasProperty(\'PASSWORD\') ? PASSWORD : (hasProperty(\'NEXUS_PASSWORD\') ? NEXUS_PASSWORD : \'\')\\n}\\n\\ndef configurePom(pom) {\\n    pom.name = POM_NAME\\n    pom.packaging = POM_PACKAGING\\n    pom.description = POM_DESCRIPTION\\n    pom.url = POM_URL\\n\\n    pom.scm {\\n        url = POM_SCM_URL\\n        connection = POM_SCM_CONNECTION\\n        developerConnection = POM_SCM_DEV_CONNECTION\\n    }\\n\\n    pom.licenses {\\n        license {\\n            name = POM_LICENCE_NAME\\n            url = POM_LICENCE_URL\\n            distribution = POM_LICENCE_DIST\\n        }\\n    }\\n\\n    pom.developers {\\n        developer {\\n            id = POM_DEVELOPER_ID\\n            name = POM_DEVELOPER_NAME\\n            email = POM_DEVELOPER_EMAIL\\n        }\\n    }\\n}\\n\\nafterEvaluate { project ->\\n    def isAndroidProject = project.plugins.hasPlugin(\'com.android.application\') || project.plugins.hasPlugin(\'com.android.library\')\\n    publishing {\\n        repositories {\\n            maven {\\n                def releasesRepoUrl = getReleaseRepositoryUrl()\\n                def snapshotsRepoUrl = getSnapshotRepositoryUrl()\\n                url = isReleaseBuild() ? releasesRepoUrl : snapshotsRepoUrl\\n                credentials(PasswordCredentials) {\\n                    username = getRepositoryUsername()\\n                    password = getRepositoryPassword()\\n                }\\n            }\\n        }\\n    }\\n\\n    if (isAndroidProject) {\\n        task androidJavadocs(type: Javadoc, dependsOn: assembleDebug) {\\n            source = android.sourceSets.main.java.source\\n            classpath += project.files(android.getBootClasspath().join(File.pathSeparator))\\n            // include BuildConfig.java\\n            classpath += project.files(project.file(\\"build/generated/source/buildConfig/debug\\"))\\n            excludes = [\'**/*.kt\']\\n        }\\n\\n        task androidJavadocsJar(type: Jar, dependsOn: androidJavadocs) {\\n            classifier = \'javadoc\'\\n            from androidJavadocs.destinationDir\\n        }\\n\\n        task androidSourcesJar(type: Jar) {\\n            classifier = \'sources\'\\n            from android.sourceSets.main.java.source\\n        }\\n\\n        android.libraryVariants.all { variant ->\\n            tasks.androidJavadocs.doFirst {\\n                classpath += files(variant.javaCompileProvider.get().classpath.files.join(File.pathSeparator))\\n            }\\n        }\\n    } else {\\n\\n        task sourcesJar(type: Jar, dependsOn: classes) {\\n            classifier = \'sources\'\\n            from sourceSets.main.allSource\\n        }\\n\\n        task javadocsJar(type: Jar, dependsOn: javadoc) {\\n            classifier = \'javadoc\'\\n            from javadoc.destinationDir\\n        }\\n\\n        artifacts {\\n            archives sourcesJar\\n            archives javadocsJar\\n        }\\n    }\\n\\n    if (JavaVersion.current().isJava8Compatible()) {\\n        allprojects {\\n            tasks.withType(Javadoc) {\\n                options.addStringOption(\'Xdoclint:none\', \'-quiet\')\\n            }\\n        }\\n    }\\n\\n    if (JavaVersion.current().isJava9Compatible()) {\\n        allprojects {\\n            tasks.withType(Javadoc) {\\n                options.addBooleanOption(\'html5\', true)\\n            }\\n        }\\n    }\\n\\n    artifacts {\\n        if (isAndroidProject) {\\n            archives androidSourcesJar\\n            archives androidJavadocsJar\\n\\n            archives project.tasks.bundleDebugAar\\n        }\\n    }\\n\\n    publishing {\\n        publications {\\n            mavenAgent(MavenPublication) {\\n                groupId GROUP\\n                artifactId POM_ARTIFACT_ID\\n                version version\\n                configurePom(pom)\\n\\n                if (isAndroidProject) {\\n                    artifact bundleReleaseAar\\n                    artifact androidSourcesJar\\n\\n                    pom.withXml {\\n                        def dependenciesNode = asNode().appendNode(\'dependencies\')\\n                        project.configurations.all { configuration ->\\n                            def name = configuration.name\\n                            // api will duplicate with implementation\\n                            if (name == \'releaseImplementation\' || name == \'implementation\') {\\n                                configuration.allDependencies.each {\\n                                    if (it.name != \\"unspecified\\" && it.version != \\"unspecified\\") {\\n                                        def groupId = it.group\\n                                        def artifactId = it.name\\n                                        if (it instanceof ProjectDependency) {\\n                                            def properties = it.getDependencyProject().getProperties()\\n                                            groupId = properties.get(\\"GROUP\\")\\n                                            artifactId = properties.get(\\"POM_ARTIFACT_ID\\")\\n                                        }\\n                                        println \\"dependencies:\\" + groupId + \\":\\" + artifactId + \\":\\" + it.version\\n                                        def dependencyNode = dependenciesNode.appendNode(\'dependency\')\\n                                        dependencyNode.appendNode(\'groupId\', groupId)\\n                                        dependencyNode.appendNode(\'artifactId\', artifactId)\\n                                        dependencyNode.appendNode(\'version\', it.version)\\n                                        dependencyNode.appendNode(\'scope\', \'compile\')\\n                                    }\\n                                }\\n                            }\\n                        }\\n                    }\\n                } else {\\n                    from components.java\\n                    artifact sourcesJar\\n                    artifact javadocsJar\\n                }\\n            }\\n\\n            if (project.plugins.hasPlugin(\'java-gradle-plugin\')) {\\n                pluginMaven(MavenPublication) {\\n                    groupId GROUP\\n                    artifactId POM_ARTIFACT_ID\\n                    version version\\n                    configurePom(pom)\\n                }\\n            }\\n        }\\n    }\\n}\\n\\nsigning {\\n    required { isReleaseBuild() && gradle.taskGraph.hasTask(\\"publish\\") }\\n    publishing.publications.all { publication ->\\n        sign publication\\n    }\\n}\\n\\n```\\n\u57fa\u672c\u4f7f\u7528\uff1a\u5728\u9700\u8981\u53d1\u5e03\u7684\u9879\u76ee\u4e0b\u6dfb\u52a0 `gradle.properties`\u6587\u4ef6\uff0c\u5e76\u6ce8\u660e `ARTIFACT_ID`\u540d\uff0c\u5982\u4e0b\uff1a\\n```xml\\nPOM_NAME=autotracker\\nPOM_ARTIFACT_ID=autotracker\\nPOM_PACKAGING=aar\\nPOM_DESCRIPTION=GrowingIO Android SDK AutoTracker.\\n```\\n\u540c\u65f6\u5728 `build.gradle` \u4e2d\u5f15\u5165\u8be5\u6587\u4ef6\\n```gradle\\napply from: \\"${rootProject.projectDir}/gradle/publishMaven.gradle\\"\\n```\\n```cmd\\n# \u4e0a\u4f20\u5230\u672c\u5730\u4ed3\u5e93\\n./gradlew publishToMavenLocal\\n\\n# \u4e0a\u4f20\u5230\u8fdc\u7a0b\u4ed3\u5e93\\n./gradlew publish\\n\\n```\\n\\n### 5. Github Ci\u811a\u672c\\nGitHub\u4e0a\u6709\u63d0\u4f9b Action \u8fd9\u4e00\u5de5\u5177\uff0c\u8be5\u5de5\u5177\u53ef\u4ee5\u5728\u7ebf\u4e0a\u8fdb\u884c\u5404\u79cd\u64cd\u4f5c\uff1a\u6bd4\u5982\u7f16\u8bd1\uff0c\u6d4b\u8bd5\uff0c\u6821\u9a8c\u7b49\uff0c\u6240\u4ee5\u6253\u5305\u4e0a\u4f20\u4e5f\u662f\u53ef\u4ee5\u7684\u3002\\n1. \u914d\u7f6e Github Secrets\\n![Github Secrets](/img/Secrets.png)\\n\u5404\u4e2a\u914d\u7f6e\u5206\u522b\u5bf9\u5e94 `\u5168\u5c40 gradle \u914d\u7f6e` \u6b65\u9aa4\u4e2d\u7684\u5404\u4e2a\u53c2\u6570\uff0c\u5176\u4e2d `SIGNING_SECRET_KEY_RING_FILE` \u662f\u79d8\u94a5\u6587\u4ef6\u7ecf\u8fc7 base64 \u540e\u4ea7\u751f\u7684\u5b57\u7b26\u4e32\u3002\\n\\n2. \u81ea\u52a8 close \u548c release\\n\u8fd9\u91cc\u76f4\u63a5\u4f7f\u7528 [gradle-nexus-staging-plugin](https://github.com/Codearte/gradle-nexus-staging-plugin)\u7684\u63d2\u4ef6\u3002\u5b83\u80fd\u901a\u8fc7 sonatype \u7684api\u6765\u81ea\u52a8\u5b9e\u73b0 `Staging Repositories`\u4e0a\u7684close\u548crelease\u64cd\u4f5c\\n\\n3. \u5b8c\u6574ci\u811a\u672c\\n\\n```yml\\nname: Publish Maven\\non:\\n  release:\\n    types: [published]\\n\\njobs:\\n  publish:\\n    runs-on: ubuntu-latest\\n\\n    steps:\\n      - uses: actions/checkout@v2\\n\\n      - name: Set up JDK 1.8\\n        uses: actions/setup-java@v1\\n        with:\\n          java-version: 1.8\\n\\n      # Gradle \u7f13\u5b58\u914d\u7f6e\\n      - name: Cache Gradle packages\\n        uses: actions/cache@v2\\n        with:\\n          path: ~/.gradle/caches\\n          key: ${{ runner.os }}-gradle-${{ hashFiles(\'**/*.gradle\') }}\\n          restore-keys: ${{ runner.os }}-gradle\\n\\n      # \u7ed9 gradlew \u6587\u4ef6\u6388\u6743\\n      - name: Grant Permission to Execute\\n        run: |\\n          chmod +x gradlew\\n          chmod +x gradle/publishAllToMavenLocal.sh\\n\\n      # \u6784\u5efa\u9879\u76ee\\n      - name: Build with Gradle\\n        run: |\\n          bash ./gradle/publishAllToMavenLocal.sh\\n\\n      # \u89e3\u7801\u79d8\u94a5\\n      - name: Decode\\n        run: |\\n          echo \\"${{secrets.SIGNING_SECRET_KEY_RING_FILE}}\\" > ~/.gradle/secring.gpg.b64\\n          base64 -d ~/.gradle/secring.gpg.b64 > ~/.gradle/secring.gpg\\n\\n      - name: Publish to Sonatype\\n        env:\\n          NEXUS_USERNAME: ${{ secrets.NEXUS_USERNAME }}\\n          NEXUS_PASSWORD: ${{ secrets.NEXUS_PASSWORD }}\\n        run: ./gradlew publish -PNEXUS_USERNAME=\\"${NEXUS_USERNAME}\\" -PNEXUS_PASSWORD=\\"${NEXUS_PASSWORD}\\" -Psigning.keyId=${{secrets.SIGNING_KEY_ID}} -Psigning.password=${{secrets.SIGNING_PASSWORD}} -Psigning.secretKeyRingFile=$(echo ~/.gradle/secring.gpg)\\n\\n      - name: Close And Release Package\\n        env:\\n          NEXUS_USERNAME: ${{ secrets.NEXUS_USERNAME }}\\n          NEXUS_PASSWORD: ${{ secrets.NEXUS_PASSWORD }}\\n        run: ./gradlew tryCloseAndReleaseRepository -PNEXUS_USERNAME=\\"${NEXUS_USERNAME}\\" -PNEXUS_PASSWORD=\\"${NEXUS_PASSWORD}\\"\\n\\n```\\n\\n\u81f3\u6b64\uff0c\u4e00\u5957\u5b8c\u6574\u7684\u81ea\u52a8\u6253\u5305\u7cfb\u7edf\u5c31\u642d\u5efa\u5b8c\u6210\u4e86\u3002\\n\\n------\\n\u53c2\u8003\u8d44\u6599\uff1a\\n1. [github action](https://docs.github.com/cn/actions/reference/events-that-trigger-workflows)\\n2. [gradle \u914d\u7f6e](https://docs.gradle.org/current/userguide/signing_plugin.html#sec:signatory_credentials)\\n\\n## \u9644\u5f55\uff1a\u5173\u4e8e\u5728 GrowingIO \u5404\u4e2a\u4ed3\u5e93\u4e0a\u9047\u5230\u7684\u51e0\u4e2a\u95ee\u9898\\n\\n### gradle plugin \u63d2\u4ef6\u6253\u5305\\nplugin\u9879\u76ee\u5e94\u8be5\u5c5e\u4e8e java \u9879\u76ee\uff0c\u4f46\u5728 `publications`\u4e0b\u5b83\u4f1a\u5355\u72ec\u8d70 `pluginMaven`\uff0c\u6240\u4ee5\u9700\u8981\u5bf9\u5176\u505a\u7279\u522b\u5904\u7406\u6765\u89c4\u8303\u5176 ARTIFACT_ID\\n\\n```groovy\\nif (project.plugins.hasPlugin(\'java-gradle-plugin\')) {\\n    pluginMaven(MavenPublication) {\\n        groupId GROUP\\n        artifactId POM_ARTIFACT_ID\\n        version version\\n        configurePom(pom)\\n    }\\n}\\n\\n```\\n\\n### javadoc\u627e\u4e0d\u5230BuildConfig\u6587\u4ef6\\n\\n\u8fd9\u91cc\u9700\u8981\u5728\u751f\u6210 javadoc \u5305\u7684\u65f6\u5019\u6dfb\u52a0 BuildConfig\u7c7b\u7684\u8def\u5f84\u5230 classpath \u4e2d\u3002\\n```groovy\\ntask androidJavadocs(type: Javadoc, dependsOn: assembleDebug) {\\n    source = android.sourceSets.main.java.source\\n    classpath += project.files(android.getBootClasspath().join(File.pathSeparator))\\n    // include BuildConfig.java\\n    classpath += project.files(project.file(\\"build/generated/source/buildConfig/debug\\"))\\n    excludes = [\'**/*.kt\']\\n}\\n```\\n\u5f53\u7136\u53ef\u80fd\u4e0d\u540c\u7248\u672c\u7684gradle\u751f\u6210\u7684\u5730\u5740\u4e0d\u4e00\u6837\uff0c\u8bf7\u81ea\u5df1\u6d4b\u8bd5\u5e76\u6dfb\u52a0\\n\\n### \u5173\u4e8e uploadArchives\\n\u65e7\u7248\u672c Gradle \u7684task\uff0c\u4f9d\u8d56\u4e8e\u63d2\u4ef6 maven\u3002\u73b0\u5728\u4e00\u822c\u90fd\u662f\\n```groovy\\napply plugin: \'maven-publish\'\\n\\nafterEvaluate { project ->\\n    publishing {}\\n}\\n```\\n\u4e14\u5728 gradle \u7248\u672c 5.0\u540e\uff0c\u9700\u8981\u5c06 publishing \u653e\u7f6e\u5728 afterEvaluate \u4e2d\u3002\\n\\n### \u5173\u4e8e\u4f9d\u8d56\\napi\u4f9d\u8d56\u548cimplementation\u4f9d\u8d56\u4f1a\u91cd\u590d\u51fa\u73b0\u5728 `project.configurations.all`\u5faa\u73af\u4e2d(api > implementation)\uff0c\u6240\u4ee5\u53ea\u9700\u8981\u5224\u65ad `implementation`\u5373\u53ef\\n\\n```groovy\\npom.withXml {\\n    def dependenciesNode = asNode().appendNode(\'dependencies\')\\n    project.configurations.all { configuration ->\\n        def name = configuration.name\\n        // api will duplicate with implementation\\n        if (name == \'releaseImplementation\' || name == \'implementation\') {\\n            configuration.allDependencies.each {\\n                if (it.name != \\"unspecified\\" && it.version != \\"unspecified\\") {\\n                    def groupId = it.group\\n                    def artifactId = it.name\\n                    if (it instanceof ProjectDependency) {\\n                        def properties = it.getDependencyProject().getProperties()\\n                        groupId = properties.get(\\"GROUP\\")\\n                        artifactId = properties.get(\\"POM_ARTIFACT_ID\\")\\n                    }\\n                    println \\"dependencies:\\" + groupId + \\":\\" + artifactId + \\":\\" + it.version\\n                    def dependencyNode = dependenciesNode.appendNode(\'dependency\')\\n                    dependencyNode.appendNode(\'groupId\', groupId)\\n                    dependencyNode.appendNode(\'artifactId\', artifactId)\\n                    dependencyNode.appendNode(\'version\', it.version)\\n                    dependencyNode.appendNode(\'scope\', \'compile\')\\n                }\\n            }\\n        }\\n    }\\n}\\n```"}]}')}}]);