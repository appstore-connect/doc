import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Connect 文档',
  description: 'Connect 文档站点',
  base: '/doc/',

  bundler: viteBundler(),

  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '指南',
        link: '/guide/',
      },
    ],
    sidebar: {
      '/guide/': getGuideSidebar('指南'),
    },
  }),
});

function getGuideSidebar() {
  return [
    {
      title: '指南',
      collapsable: false,
      // sidebarDepth: 3,
      children: ['', 'huawei', 'yyb', 'xiaomi', 'vivo', 'oppo', 'honor'],
    },
    // {
    //   title: "废弃接口",
    //   collapsable: false,
    //   children: ["Deprecated"],
    // },
  ];
}
