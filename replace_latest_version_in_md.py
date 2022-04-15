import json
import os

def replace_latest_version_in_md(platform):
    for root, dirs, files in os.walk(platform["distPath"], followlinks=False):
        for file in files:
            md = os.path.join(root, file)
            if md.lower().endswith(".md"):
                with(open(md, "r")) as f:
                    text = f.read()
                    text = text.replace(platform['replace'], platform['version'])
                    f.close()
                with(open(md, "w")) as f:
                    f.write(text)
                    f.close()
                    print("update file:<" + md + "> to newest version:" + platform['version'])
                    pass
    pass

if __name__ == '__main__':
    config_file = './version_config.json'
    with(open(config_file, 'r')) as f:
        config = json.load(f)
        for platform in config:
            if platform['enable'] is False:
                print("platform is disable, skip platform " + platform['name'])
                continue
            if not platform['replace']:
                print("platform have not replaceable text, skip platform " + platform['name'])
                continue
            replace_latest_version_in_md(platform)
        f.close()