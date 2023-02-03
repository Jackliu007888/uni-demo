# 智能农批 V1.1.6

## 引入 vant

### 复制 vant-weapp 组建到项目

```bash
npm i @vant/weapp --production

// cd ./src && mkdir wxcomponents && cd wxcomponents && mkdir vant

cp -rf node_modules/@vant/weapp/dist/* ./src/wxcomponents/vant
```

### pages.json 配置

在 pages.json 中在 globalStyle 或者具体 page 的 style 中引入 Vant 的组件

为方便使用，已全局引入组件，后续视项目情况优化

## HTTP

### 请求规范

-
