# 项目结构布局

**项目结构布局即：如何组织代码文件和目录**

一个清晰、合理的项目布局就像一座建筑的蓝图，它不仅能反映项目的组织方式和模块划分，更能极大地影响代码的可维护性、团队协作效率以及新成员的上手速度。

```bash
uniapp-template
├── build # 构建相关
│   ├── config # 构建配置
│   │   ├── index.ts
│   │   └── proxy.ts # 跨域配置
│   └── plugins # 构建插件
│       ├── auto-Import.ts # 自动导入插件
│       ├── clean-Image.ts # 图片清理插件
│       ├── component.ts # 组件自动导入插件
│       ├── index.ts
│       ├── replace-url.ts # url替换插件
│       ├── unocss.ts # 原子化 CSS 插件
│       └── visualizer.ts # 包体积视图分析插件
├── cz.config.js # 提交规范
├── env # 环境变量
│   ├── .env # 通用环境变量
│   ├── .env.development # 开发环境变量
│   ├── .env.production # 生产环境变量
│   └── .env.test # 测试环境变量
├── eslint.config.js # eslint 配置
├── index.html # html 入口文件
├── LICENSE
├── package.json # 项目依赖包管理文件
├── pnpm-lock.yaml # pnpm 锁文件
├── README.md
├── scripts # 脚本
│   ├── cleanup-upgrade.js # 清理升级包
│   └── verify-commit.js # git 提交校验
├── src # 源代码
│   ├── api # 接口
│   │   ├── common # 通用接口
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── data-filter # 数据查询接口
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── index.ts
│   │   └── user # 用户接口
│   │       ├── index.ts
│   │       └── types.ts
│   ├── App.vue # 根组件
│   ├── components # 通用组件
│   │   ├── BroadcastScan
│   │   │   ├── config.ts
│   │   │   ├── index.ts
│   │   │   └── index.vue
│   │   └── CheckboxFilter
│   │       └── index.vue
│   ├── hooks # 自定义 hooks
│   │   ├── index.ts
│   │   ├── use-clipboard # 剪贴板
│   │   │   └── index.ts
│   │   ├── use-loading # 全局 loading
│   │   │   └── index.ts
│   │   ├── use-modal # 全局 modal
│   │   │   └── index.ts
│   │   ├── use-permission # 权限控制
│   │   │   └── index.ts
│   │   ├── use-router # 路由控制
│   │   │   └── index.ts
│   │   ├── use-share # 分享
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   └── use-toast # 全局 toast
│   │       └── index.ts
│   ├── main.ts # 入口文件
│   ├── manifest.json # app 配置文件
│   ├── pages # 页面
│   │   ├── common # 通用页面
│   │   │   ├── 404
│   │   │   │   └── index.vue
│   │   │   ├── login
│   │   │   │   ├── code-login.vue
│   │   │   │   └── index.vue
│   │   │   └── webview
│   │   │       └── index.vue
│   │   ├── examples # 示例页面
│   │   │   ├── data-display # 数据展示
│   │   │   │   └── data-list.vue
│   │   │   ├── data-filter # 数据查询
│   │   │   │   ├── data-list.vue
│   │   │   │   ├── explicit-filter.vue
│   │   │   │   ├── multi-select-list.vue
│   │   │   │   ├── search-tab.vue
│   │   │   │   ├── sort-drop.vue
│   │   │   │   └── tab-filter.vue
│   │   │   └── data-input # 数据录入
│   │   │       ├── custom-select.vue
│   │   │       ├── form-demo.vue
│   │   │       └── types.ts
│   │   ├── home # 首页
│   │   │   └── index.vue
│   │   └── mine # 个人中心
│   │       └── index.vue
│   ├── pages.json # 页面配置
│   ├── plugins # 插件
│   │   ├── index.ts
│   │   └── permission.ts # 权限控制
│   ├── router # 路由
│   │   └── index.ts
│   ├── static # 静态资源
│   │   ├── images
│   │   │   ├── 404.png
│   │   │   ├── icon-success.png
│   │   │   ├── login-bg.png
│   │   │   ├── logo.png
│   │   │   ├── pay.png
│   │   │   └── tabbar
│   │   │       ├── icon-tab-examples-active.png
│   │   │       ├── icon-tab-examples.png
│   │   │       ├── icon-tab-home-active.png
│   │   │       ├── icon-tab-home.png
│   │   │       ├── icon-tab-mine-active.png
│   │   │       └── icon-tab-mine.png
│   │   └── styles # 样式文件
│   │       └── common.scss #
│   ├── store # 状态管理
│   │   ├── index.ts
│   │   └── modules
│   │       ├── app # 应用相关
│   │       │   ├── index.ts
│   │       │   └── types.ts
│   │       ├── index.ts
│   │       └── user # 用户相关
│   │           ├── index.ts
│   │           └── types.ts
│   └── utils # 工具库
│       ├── auth # 权限控制
│       │   └── index.ts
│       ├── common
│       │   └── index.ts
│       ├── index.ts
│       ├── modals
│       │   ├── index.ts
│       │   └── types.ts
│       ├── request # 请求封装
│       │   ├── index.ts
│       │   ├── interceptors.ts # 请求拦截器
│       │   ├── status.ts # 响应状态码
│       │   └── types.ts
│       └── storage # 缓存封装
│           └── index.ts
├── stylelint.config.js # StyleLint 配置文件
├── tsconfig.json
├── types # 全局类型
│   ├── auto-imports.d.ts
│   ├── components.d.ts
│   ├── env.d.ts
│   ├── global.d.ts
│   └── module.d.ts
├── uno.config.ts # UnoCSS 配置文件
└── vite.config.ts # Vite 配置文件
```
