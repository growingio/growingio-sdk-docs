# -*- coding: utf-8 -*-
import json
from urllib import request, parse
import os
import re
import sys

readme_header = "---\ntitle: 版本记录\nsidebar_position: 0\n---\n"
readme_item_foot = ":::note \n\n 标签:**[{name}]({url})** &nbsp;&nbsp;&nbsp;&nbsp;日期: **{date}** \n\n:::"
readme_footer = "---\n## 更多发布细节请参考 [SDK Releases in Github]({url})"

# uni-app 文档的 front matter 使用固定的侧边栏顺序
uniapp_header = "---\ntitle: 版本记录\nsidebar_position: 5\n---\n"
# uni-app 各版本下载卡片，列出 github release 中上传的发布包
uniapp_download_item = "- `{name}`：[下载]({url})"

def android_releases(releases, fromId, complianceInfo = True):
    android_header_append = readme_header
    android_item_foot = readme_item_foot
    content = android_header_append
    for release in releases:
        tag_name = release["tag_name"]
        date = release["published_at"].split("T")[0]
        release_name = release["name"]
        if release["id"] < fromId:
            continue
        if release_name is None or release_name == "":
            release_name = tag_name
        if hotfix_version(release_name):
            continue
        if release["prerelease"] == True:
            continue
        if (complianceInfo):
            complianceInfo = False
            insert_text = """
:::tip SDK下载信息
类型：统计类 <br/>
开发者：北京易数科技有限公司 <br/>
无埋点包名：com.growingio.android.sdk.autotrack <br/>
最新版本：{version} <br/>
更新时间：{date} <br/>
功能说明：GrowingIO用户行为数据采集软件开发工具包（CDP）具备自动采集基本的用户行为事件，比如访问和行为数据等。目前支持代码埋点、无埋点、可视化圈选、热图等功能。<br/>
下载地址：[Maven官方仓库](https://repo1.maven.org/maven2/com/growingio/android/) <br/>
个人信息处理规则：[隐私协议](https://accounts.growingio.com/user-privacy) <br/>
使用说明：[SDK集成文档](/docs/android/Introduce) <br/>
合规说明：[SDK合规说明](/knowledge/compliance/androidCompliance) <br/>
:::

""".format(version=tag_name, date=date)
            content += insert_text
        content += "## " + release_name.upper() +"\n"
        content += release["body"] +"\n\n"
        content += android_item_foot.format(name=tag_name, url=release["html_url"],
                                                    date=date)
        content += "\n\n"
    return content

def iOS_releases(releases, fromId):
    content = readme_header
    for release in releases:
        release_name = release["name"]
        if release["id"] < fromId:
            continue
        if release_name is None or release_name == "":
            release_name = release["tag_name"]
        if hotfix_version(release_name):
            continue
        if release["prerelease"] == True:
            continue
        content += release["body"] +"\n\n"
    return content

def repo_web_url(platform):
    """把 releases api 地址转换为 github 仓库的网页地址

    :param platform: 平台配置字典
    :return: 形如 https://github.com/owner/repo 的仓库地址
    """
    return platform['releaseUrl'].replace("api.github.com/repos/", "github.com/")


def uniapp_releases(releases, platform):
    """生成 uni-app 的版本记录，附带各版本发布包的 GitHub 下载地址

    :param releases: github releases 接口返回的列表
    :param platform: 平台配置字典
    :return: version.md 的完整内容
    """
    content = uniapp_header
    content += "\n`gio-uniapp-autotracker` 的历史版本记录。`uni_modules` 发布包可从 GitHub Release 下载，npm 渠道可直接升级依赖版本。\n\n"
    # 完整的发布包下载列表入口，放在版本列表之前
    content += "全部历史版本下载地址：[SDK Releases in Github]({url})\n\n".format(url=repo_web_url(platform))
    for release in releases:
        tag_name = release["tag_name"]
        date = release["published_at"].split("T")[0]
        release_name = release["name"]
        if release["id"] < platform['fromId']:
            continue
        if release_name is None or release_name == "":
            release_name = tag_name
        if hotfix_version(release_name):
            continue
        if release["prerelease"] == True:
            continue
        # release.json 为发布流水线的元数据，不作为业务下载包展示
        assets = [a for a in release.get("assets", []) if a["name"] != "release.json"]
        content += "## " + release_name.upper() + " - " + date + "\n\n"
        if release["body"].strip() != "":
            content += release["body"] + "\n\n"
        if len(assets) > 0:
            content += "**下载地址**\n\n"
            for asset in assets:
                content += uniapp_download_item.format(name=asset["name"], url=asset["browser_download_url"]) + "\n"
            content += "\n"
        content += readme_item_foot.format(name=tag_name, url=release["html_url"], date=date)
        content += "\n\n"
    content += readme_footer.format(url=repo_web_url(platform))
    return content


def github_release(platform):
    newest_tag = None
    try:
        headers = {"User-Agent": "urllib"}  # header 字典形式
        req = request.Request(url=platform['releaseUrl'], headers=headers, method='GET')
        response = request.urlopen(req)
        releases = json.loads(response.read().decode("utf-8"))
        readme = ""
        if platform['name'] == "Android":
            readme = android_releases(releases, platform['fromId'])
        elif platform['name'] == "GioKit Android":
            readme = android_releases(releases, platform['fromId'], False)
        elif platform['name'] == "iOS":
            readme = iOS_releases(releases, platform['fromId'])
        elif platform['name'] == "uni-app":
            readme = uniapp_releases(releases, platform)
        else:
            readme = iOS_releases(releases, platform['fromId'])

        # uni-app 的版本记录已包含 github 链接，无需再拼接页脚
        if platform['name'] != "uni-app":
            readme += readme_footer.format(
                url=platform['releaseUrl'].replace("api.github.com", "github.com").replace("repos/growingio", "growingio"))

        newest_tag = releases[0]["tag_name"]

        if not os.path.exists(platform["distPath"]):
            os.makedirs(platform["distPath"])

        with(open(platform["distPath"] + platform["fileName"], 'w')) as f:
            f.write(readme)

        print("update release in " + platform["distPath"] + platform["fileName"])

    except Exception as e:
        print(e)
        pass
    return newest_tag

android_replace_pattern = r'(com\.growingio\.android:(?!autotracker-gradle-plugin\b)[\w-]+:)([\d\.]+)'
giokit_android_replace_pattern = r'(com\.growingio\.giokit:[\w-]+:)([\d\.]+)'


class GithubVersionSub(object):
    def __init__(self, version):
        self.version = version

    def sub_replace(self, matched):
        group_name = matched.group(1)
        # 对 插件 和 adapter 系列模块不做升级
        if "analytics-" in group_name:
            return matched.group(1) + matched.group(2)
        # if "autotracker-gradle-plugin" in group_name:
        #     return matched.group(1) + matched.group(2)
        return matched.group(1) + self.version

def hotfix_version(tag):
    if tag is not None \
            and tag != "" \
            and "SNAPSHOT" not in tag.upper() \
            and "BETA" not in tag.upper() \
            and "HOTFIX" not in tag.upper():
        return False
    return True

def replace_android_version(dir, version):
    for root, dirs, files in os.walk(dir, followlinks=False):
        for file in files:
            md = os.path.join(root, file)
            if md.lower().endswith(".md"):
                with(open(md, "r")) as f:
                    text = f.read()
                    result = re.sub(android_replace_pattern, GithubVersionSub(version).sub_replace, text)
                    f.close()
                with(open(md, "w")) as f:
                    f.write(result)
                    f.close()
                    print("update file:<" + md + "> to newest version:" + version)
                    pass
    pass


def replace_giokit_android_version(dir, version):
    for root, dirs, files in os.walk(dir, followlinks=False):
        for file in files:
            md = os.path.join(root, file)
            if md.lower().endswith(".md"):
                with(open(md, "r")) as f:
                    text = f.read()
                    result = re.sub(giokit_android_replace_pattern, GithubVersionSub(version).sub_replace, text)
                    f.close()
                with(open(md, "w")) as f:
                    f.write(result)
                    f.close()
                    print("update file:<" + md + "> to newest version:" + version)
                    pass
    pass

version_pattern = r'\d+\.(?:\d+\.)*\d+'

if __name__ == '__main__':
    # replace_android_version("docs/android/", "4.0.0")
    # replace_giokit_android_version("docs/giokit/android/", "2.0.0")
    config_file = './version_config.json'
    with(open(config_file, 'r')) as f:
        config = json.load(f)

    for platform in config:
        if platform['enable'] is False:
            continue
        if len(sys.argv) > 1:
            target_release = sys.argv[1]
            name = platform['name']
            if name != target_release:
                continue
        platform_newest_tag = github_release(platform)
        if not hotfix_version(platform_newest_tag):
            version = re.findall(version_pattern, platform_newest_tag)[0]
            name = platform['name']

            # update android version
            if "android" == name.lower():
                replace_android_version(platform["distPath"], version)
            # update giokit android version
            if "giokit android" == name.lower():
                replace_giokit_android_version(platform["distPath"], version)

            platform['version'] = version

    with(open(config_file, 'w')) as f:
        json.dump(config, f, ensure_ascii=False, indent=2)
