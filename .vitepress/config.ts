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
            { text: "开发前准备", link: "/guides/start.md" },
            { text: "项目结构布局", link: "/guides/project-layout.md" },
            { text: "环境变量", link: "/guides/env.md" },
            { text: "开发规范", link: "/guides/standard.md" },
            { text: "静态资源使用", link: "/guides/static.md" },
            { text: "UI组件库", link: "/guides/component.md" },
            { text: "原子化 CSS", link: "/guides/css.md" },
            { text: "下拉刷新、上拉加载", link: "/guides/refresh-loadmore.md" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "gitlab",
        link: "https://gitlab.hivery.cn/template/uniapp-template",
      },
    ],
  },
});
