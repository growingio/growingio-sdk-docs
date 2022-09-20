'use strict';

const fs = require('fs-extra');
const path = require('path');
const recursiveReaddir = require('recursive-readdir');

const buildDirectory = path.join(__dirname, 'build');
const absoluteUrlRegExp = /(href|src)="(?!http[s]|ftp?:\/\/)([^"]+)"/g;

const isDirectory = dirPath => path.extname(dirPath) === '';

const convertAbsolutePathsToRelative = (content, filePath) =>
  content.replace(absoluteUrlRegExp, (_absoluteUrl, $1, $2) => {
    const currentDirPath = path.dirname(filePath);
    const relativeDirPath = currentDirPath === '.' ? '.' : path.relative(currentDirPath, '');
    // 锚点 不能走 原先逻辑 替换
    let relativePath;
    let index = $2.indexOf('#');
    if (index != -1) {
      // 直接 # 则相对于当前页面不做相对路径处理
      if (index == 0) {
        relativePath = $2;
      } else {
        relativePath = path.join(relativeDirPath, $2.substring(0, index) + 'index.html');
        relativePath += $2.substring(index);
      }
    } else {

      relativePath = path.join(relativeDirPath, $2);
      // path.extname(filePath);
      if (relativePath.endsWith('/')) {
        relativePath = path.join(relativePath, 'index.html');
      }
    }

    return `${$1}="${relativePath}"`;
  });

const websiteTextualFileExtensions = ['.css', '.js', '.html', '.xml'];
const isNotWebsiteTextualFile = (filePath, stats) =>
  !(stats.isDirectory() || websiteTextualFileExtensions.includes(path.extname(filePath)));

const postProcess = async () => {
  const filePaths = await recursiveReaddir(buildDirectory, [isNotWebsiteTextualFile]);
  await Promise.all(
    filePaths.map(async filePath => {
      const content = await fs.readFile(filePath);
      const relativePath = path.relative(buildDirectory, filePath);
      await fs.writeFile(filePath, convertAbsolutePathsToRelative(String(content), relativePath));
    })
  );
};

postProcess();