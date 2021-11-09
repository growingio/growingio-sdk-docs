# -*- coding: utf-8 -*-
import json
from urllib import request, parse
import os
import re

readme_header = "---\ntitle: 版本记录\nsidebar_position: 0\n---\n----\n"
readme_item_title = "## {title}\n >[{name}]({url}) 日期: {date} \n\n"
readme_footer = "### 更多发布细节请参考 [Github Releases]({url})"


def github_release(platform):
    newest_tag = None
    try:
        headers = {"User-Agent": "urllib"}  # header 字典形式
        req = request.Request(url=platform['releaseUrl'], headers=headers, method='GET')
        response = request.urlopen(req)
        releases = json.loads(response.read().decode("utf-8"))
        readme = readme_header
        for release in releases:
            release_name = release["name"]
            if release_name is None or release_name == "":
                release_name = release["tag_name"]
            readme += readme_item_title.format(title=release["tag_name"].upper(), name=release_name, url=release["html_url"],
                                               date=release["published_at"].split("T")[0])
            readme += release["body"]
            readme += "\n\n"
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


android_replace_pattern = r'(com\.growingio\.android:[\w-]+:)([\d\.]+)'
giokit_android_replace_pattern = r'(com\.growingio\.giokit:[\w-]+:)([\d\.]+)'


class GithubVersionSub(object):
    def __init__(self, version):
        self.version = version

    def sub_replace(self, matched):
        return matched.group(1) + self.version


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
    config_file = './version_config.json'
    with(open(config_file, 'r')) as f:
        config = json.load(f)

    for platform in config:
        if platform['enable'] is False:
            continue
        platform_newest_tag = github_release(platform)
        if platform_newest_tag is not None \
                and platform_newest_tag != "" \
                and "SNAPSHOT" not in platform_newest_tag.upper() \
                and "BETA" not in platform_newest_tag.upper():
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
