# 开发规范

## 页面管理

1. 新增页面放在 `src/pages` 目录下，并使用 `kebab-case` 命名，如 `src/pages/examples/data-input/form-demo.vue`。
2. 创建完页面后台，在 `src/pages.json` 中增加页面配置。
3. 页面创建注意按模块划分，同一功能模块的页面尽量放在一个目录下。例如：
   ```bash
   pages
   ├── common # 公共页面
   │   ├── 404
   │   │   └── index.vue
   │   ├── login
   │   │   ├── code-login.vue
   │   │   └── index.vue
   │   └── webview
   │       └── index.vue
   ├── examples # 示例页面
   │   ├── data-display # 数据展示
   │   │   └── data-list.vue
   │   ├── data-filter # 数据查询
   │   │   ├── data-list.vue
   │   │   ├── explicit-filter.vue
   │   │   ├── multi-select-list.vue
   │   │   ├── search-tab.vue
   │   │   ├── sort-drop.vue
   │   │   └── tab-filter.vue
   │   └── data-input # 数据录入
   │       ├── custom-select.vue
   │       ├── form-demo.vue
   │       └── types.ts
   ├── home
   │   └── index.vue
   └── mine
    └── index.vue
   ```
4. 在新增的 `vue` 文件中，输入 `v3` 按 `tab` 键，会自动生成页面基础模版。

## 接口管理

1. 接口全部存放在 `src/api` 目录下，接口目录划分、命名应尽量与页面目录一致，至少应与功能模块划分对齐，如：`src/api/examples`。
2. 接口类型声明，每个接口模块都应有对应的 `types.ts` 文件，用于存放接口响应、参数类型声明。
3. 接口文件夹下的 `index.ts` 文件，用于导出本模块下的所有接口和类型。
4. 接口命名：命名已 `api` 为前缀、小驼峰，如：`apiUserInfo`。

```bash
api
├── common # 公共接口
│   ├── index.ts # 存放公共接口，导出 common 文件下的所有接口和类型
│   ├── types.ts # 存放公共接口的参数和返回值类型
│   └── user # 用户接口
│       ├── index.ts
│       └── types.ts
├── examples # 示例页面模块接口
│   ├── data-filter # 数据查询模块接口
│   │   ├── index.ts
│   │   └── types.ts
│   └── index.ts
└── index.ts # 导出所有接口和类型
```

5. 接口使用方式：按上述规则新增接口后，无论在哪个文件下，`import { apiXXX } from '@/api'` 即可导入 `apiXXX`
 