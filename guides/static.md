# 静态资源使用

## Iconify 图标使用

- 安装 vscode 智能提示的插件: [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)

- 找图标：网址  [https://icones.js.org/](https://icones.js.org/)  或者 vscode 安装 - [Icônes](https://marketplace.visualstudio.com/items?itemName=afzalsayed96.icones)

- 确定图标名字：找到图标后复制名字 如：'mdi:adjust' 或者 'mdi-adjust'，则对应的 uniapp 写法为：

  ```ts
  <view class="i-mdi-alarm text-40 text-red-5" />
  ```

- 设置样式：同 html 标签一样直接应用 style 属性或者 class 属性; 通过设置 color 和 font-size 属性设置对应的颜色和大小

:::warning
icones 图标库目前拥有超过 500 万个图标，为了减少项目安装依赖时间，目前仅安装了 [Material Design Icons](https://icones.js.org/collection/mdi)
如需其它图标库，可自行安装，例如，以下命令会安装 [Remix Icon](https://icones.js.org/collection/ri)

```bash
pnpm i @iconify-json/ri
```

**无论安装多少 Iconify 图标都不会影响打包体积**
:::

## 本地图片、线上图片使用

开发过程中，经常遇到本地图片资源过大导致打包尺寸太大问题，通常解决方法是：将图片资源放到服务器上，这样又回产生新的问题：

1. 开发过程中需要频繁更换图片，每次更换图片都需要重新上传图片资源，非常麻烦。
2. 由本地图片切换成线上图片后需要去使用图片的地方修改图片路径。

**解决思路：开发过程中使用本地图片开发，打包后自动删除本地图片并在使用处自动替换为线上路径，开发完成后统一将本地图片上传至服务器**
:::info
待完善，有时间再补充
:::
