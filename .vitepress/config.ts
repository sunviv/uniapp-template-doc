import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/uniapp-template-doc/",
  title: "uniapp 快速开发模版",
  description: "uniapp 快速开发模版",
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "开发指南", link: "/guides/start.md" },
      { text: "示例页面", link: "/examples" },
    ],

    sidebar: {
      "/guides/": [
        {
          text: "",
          items: [
            { text: "快速开始", link: "/guides/start.md" },
            { text: "项目结构布局", link: "/guides/project-layout.md" },
            { text: "环境变量", link: "/guides/env.md" },
            { text: "开发规范", link: "/guides/standard.md" },
            { text: "静态资源使用", link: "/guides/static.md" },
            { text: "UI组件库", link: "/guides/component.md" },
          ],
        },
      ],
      // "/examples/": [
      // {
      //   text: "数据筛选",
      //   link: "/examples/data-filter.md",
      // },
      // {
      //   text: "数据展示",
      //   link: "/examples/data-display.md",
      // },
      // {
      //   text: "数据录入",
      //   link: "/examples/data-input.md",
      // },
      // ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/sunviv/uniapp-template" },
    ],
  },
});
