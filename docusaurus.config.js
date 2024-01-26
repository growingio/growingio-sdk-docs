const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '一站式数据增长引擎',
  tagline: '数据+智能+营销，赋能商业决策，实现业绩增长',
  url: 'https://growingio.github.io',
  baseUrl: '/growingio-sdk-docs/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  trailingSlash: false,
  organizationName: 'growingio', // Usually your GitHub org/user name.
  projectName: 'growingio-sdk-docs', // Usually your repo name.
  staticDirectories: ['static'],
  themeConfig: {
    announcementBar: {
      id: 'announcement-bar',
      content: '若要集成3.0老版本的SDK, 请前往 👉 <a target="_blank" rel="noopener noreferrer" href="https://growingio.github.io/growingio-sdk-docs-v3/">GrowingIO SDK 3.0 </a> 👈',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'GrowingIO Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_white.svg',

      },
      items: [
        {
          type:'dropdown',
          label: '客户端文档',
          position: 'left',
          to: '/docs',
          items: [
            {to: '/docs/android/', label: 'Android'},
            {to: '/docs/ios/', label: 'iOS'},
            {to: '/docs/webjs/', label: 'Web JS'},
            {to: '/docs/miniprogram/', label: '小程序'},
            {to: '/docs/framework/', label: '多平台'},
          ],
        },
        {
          type:'dropdown',
          label: '服务端文档',
          position: 'left',
          to: '/docs/server/',
          items: [
            {to: '/docs/server/Java SDK', label: 'Java SDK'},
            {to: '/docs/server/PHP SDK', label: 'PHP SDK'},
            {to: '/docs/server/Python SDK', label: 'Python SDK'},
          ],
        },
        {
          type:'dropdown',
          label: '数据指南',
          position: 'left',
          to: '/knowledge',
          items: [
            {to: '/knowledge/basicknowledge/', label: '基础知识'},
            {to: '/knowledge/compliance/', label: '合规指南'},
            {to: '/knowledge/debugverify/', label: '数据校验'},
            {to: '/knowledge/measurement/', label: '测量协议'}
          ],
        },
        {to: '/docs/question', label: '常见问题', position: 'left'},
        {
          href: 'https://growingio.github.io/growingio-sdk-docs-v3/',
          label: 'V3.0文档',
          position: 'right',
        },
        {to: '/blog', label: '博客', position: 'right'},
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
              label: '客户端文档',
              to: '/docs',
            },
            {
              label: '服务端文档',
              to: '/docs/server/',
            },
            {
              label: '数据指南',
              to: '/knowledge',
            },
            {
              label: '常见问题',
              to: '/docs/question',
            },
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'Android SDK',
              href: 'https://github.com/growingio/growingio-sdk-android-autotracker',
            },
            {
              label: 'iOS SDK',
              href: 'https://github.com/growingio/growingio-sdk-ios-autotracker',
            },
            {
              label: 'Web SDK',
              href: 'https://github.com/growingio/growingio-sdk-webjs-autotracker/tree/CDP',
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
              label: '分析云增长平台',
              href: 'https://docs.growingio.com/op-help/',
            },
            {
              label: '旧文档地址',
              href: 'https://growingio.github.io/growingio-sdk-docs-v3/',
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
          path: 'docs',
          sidebarPath: 'sidebars.js',
          // Please change this to your repo.
          editUrl:
            'https://github.com/growingio/growingio-sdk-docs/edit/master/',
        },
        blog: {
          path: 'blog',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/growingio/growingio-sdk-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en","zh"],
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'knowledge',
        path: 'knowledge',
        routeBasePath: 'knowledge',
        editUrl: 'https://github.com/growingio/growingio-sdk-docs/edit/master/',
        sidebarPath: require.resolve('./sidebarsKnowledge.js'),
        showLastUpdateTime: true,
      }
    ],
    './src/components/feedback',
  ],
};
