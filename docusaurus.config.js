const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '一站式数据增长引擎',
  tagline: '数据+智能+营销，赋能商业决策，实现业绩增长',
  url: 'https://growingio.github.io/growingio-sdk-docs',
  baseUrl: '/growingio-sdk-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  trailingSlash: false,
  organizationName: 'growingio', // Usually your GitHub org/user name.
  projectName: 'growingio-sdk-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'GrowingIO Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'home',
          position: 'left',
          label: '文档',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://www.growingio.com/',
          label: '官网',
          position: 'right',
        },
        {
          href: 'https://github.com/growingio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '文档',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'SDK',
          items: [
            {
              label: 'Android',
              href: 'https://github.com/growingio/growingio-sdk-android-autotracker',
            },
            {
              label: 'iOS',
              href: 'https://github.com/growingio/growingio-sdk-ios-autotracker',
            },
            {
              label: 'Web',
              href: 'https://github.com/growingio/growingio-sdk-js-autotracker',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              href: 'https://www.growingio.com/',
              label: '官网',
            },
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/growingio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 北京易数科技有限公司 -- Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['groovy','java','kotlin','swift','objectivec','php','dart'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
