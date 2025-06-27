# 环境变量

## 环境变量模式

`.env.[mode]` 文件

```bash
├── env # 环境变量
│   ├── .env # 通用环境变量，所有环境下都会加载
│   ├── .env.development # 开发环境变量
│   ├── .env.production # 生产环境变量
│   └── .env.test # 测试环境变量
```

## 常用环境变量说明

- **VITE_APP_ENV**：环境模式

- **VITE_APP_TITLE**：页面标题

- **VITE_API_BASE_URL**：接口地址

- **VITE_APP_PORT**：端口号

- **VITE_APP_PROXY**：h5 是否需要配置代理

- **VITE_API_PREFIX**：API 代理前缀

- **VITE_DROP_CONSOLE**：是否在构建式删除 console

:::warning
`VITE_API_BASE_URL` 除特殊情况外，接口地址尽量截止到域名

正确示例：`https://api.github.com`

错误示例：`https://api.github.com/api/weixin`
:::

## 环境变量使用

```typescript
console.log(import.meta.env.VITE_APP_TITLE); // uniapp 快速开发模版
```
