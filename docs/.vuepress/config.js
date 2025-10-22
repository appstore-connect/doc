import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'AppStore Connect 文档',
  description: 'AppStore Connect 文档站点',
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
      '/guide/': [
        {
          text: '指南',
          children: ['/guide/README.md'],
        },
      ],
    },
  }),
})

