# 小程序通用开发框架

## git 工作流

- master 分支 最新的稳定代码
- vx.x.x 分支 版本分支，x.x.x 是此次开发的版本号。
- feat-xxx 分支 特性（新的功能）分支
- fix-xxx 分支 修复分支

### 正常开发迭代

![正常开发迭代](http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuSfDB2v9BLBGrRLJA3FKCz0pi59uihiF8lgqe_rf-oweEB9AfRJKn1BTn9GKtQJIafByF2LCJMWgiEjEoo_AnQSN9C-5fXox4K_tD3pjd_XqNS-pZWbS6Cx3vMWYTC42vUcS5UcP9Jc9IK0DBxPkpmMwTGD4JkVfpcrF9tG0oMUT3S_cT2Rdv-Pcbc1rDjc6GIHHp7ZMF-7PrcxY_Vfa_xgdItg1MbwidvfKcax8ks0t09q5Ytqa5q3Y2iaNJtPqWRq0aNY_fmUaTKCRn8md-nS-Qrp_RCfEO1Z330C1XzIy56021000)

### 线上 bug 修复

![线上 bug 修复](http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuSfDB2v9BLBGrRLJK4hBhD1DAYqfoS_JJSx9JCvMib9uihiFek9fH_lJzbqAw4guC3NXDcl_kgTBUbzEN_ToqOodExSzszhzOlrKN0P0R0Kx83sp92SnwMd_n1TRj-SMFPtG0TJyj6C3H0MNGsfU2j0Z0000)

## 开发规范

- 利用自动化工具 eslint 、prettier、stylelint 做代码检测
- 利用 husky 来保证提交到 git 仓库的代码是符合要求的。
- 利用 lint-staged 做增量检测
- 利用 cz-customizable 和 commitlint 做 git 代码提交信息规范化

### eslint

- 检查语法错误，避免低级 bug；
- 统一团队代码风格
- 确保代码遵循最佳实践

### prettier

prettier 是一个专注于代码格式化的工具。它通过解析代码并匹配自己的一套规则，来强制执行一致的代码展示格式。
它在美化代码方面有很大的优势，配合 ESLint 可以对 ESLint 格式化基础上做一个很好的补充。

### stylelint

stylelint 是为 css 的 lint 工具。

- 可格式化 css 代码
- 检查 css 语法错误与不合理的写法
- 指定 css 书写顺序

### husky

对于不使用 vscode 的，或者没有安装 eslint、preitter 与 stylelint 插件的同学来说，就不能实现在保存的时候自动的去修复与和格式化代码。

这样提交到 git 仓库的代码还是不符合要求的。因此需要引入强制的手段来保证提交到 git 仓库的代码时符合我们的要求的。

husky 是一个用来管理 git hook 的工具，git hook 即在我们使用 git 提交代码的过程中会触发的钩子。

### lint-staged

之前我们的配置是每次 git commit 的时候都执行一次 npm run lint，这个命令会把 src 文件夹下的所有符合文件格式的文件都走一遍 eslint 校验，这显然是不太合理的；尤其是项目越来越大的时候这更是一个很耗时的操作。所以，我们需要过滤出 git 暂存区里的文件，仅对暂存区的文件做 eslint 校验即可。

lint-staged 就是这样一个工具，它可以帮我们过滤出 Git 代码暂存区文件(被 git add 的文件)。这个很实用，因为我们如果对整个项目的代码做一个检查，可能耗时很长，如果是老项目，要对之前的代码做一个代码规范检查并修改的话，这可能就麻烦了呀，可能导致项目改动很大。

lint-staged 总是将所有暂存文件的列表传递给任务

### cz-customizable 和 commitlint

- cz-customizable 可自定义的 Commitizen 插件（或独立实用程序），可帮助实现一致的提交消息
- 检查 commit 是否符合某种规范的校验工具
- Gitmoji Commit Message 规范

  格式：

  ```xml
  <emoji> <type>(<scope>): <subject>
  <BLANK LINE>
  <body>
  <BLANK LINE>
  <footer>
  ```

  例子： `✨ feat(blog): add comment section`

**_注意：提交代码须改为 `npm run commit`_**

## 项目结构

```tree
.
├── .eslintrc.js // eslint 配置
├── .commitlintrc.js // commitlint 配置
├── .cz-config.js // cz-config 配置
├── .eslintcache
├── .eslintignore // eslint 忽略配置文件
├── .eslintrc.js  // eslint 配置
├── .git
├── .gitignore
├── .husky  // husky 配置
├── .prettierignore // prettier 忽略配置文件
├── .prettierrc.js // prettier 配置
├── .stylelintignore // stylelint 忽略配置文件
├── .stylelintrc.js // stylelint 配置
├── README.md
├── dist // 打包输出目录
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── src
│   ├── App.vue
│   ├── api
│   │   ├── http.ts // 通用请求库
│   │   ├── interface // ts定义接口Model
│   │   └── modeles // 定义各个对象的接口
│   ├── env.d.ts
│   ├── main.ts
│   ├── manifest.json
│   ├── pages
│   ├── pages.json // 页面配置文件
│   ├── static
│   ├── uni.scss
│   ├── utils // 工具库
│   └── wxcomponents // 第三方UI组件
├── tsconfig.json
└── vite.config.ts

```

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

- 通用数据格式
  - msg
  - code
  - data
- 分页数据格式
  - msg
  - code
  - data
    - records // 数据数组
    - size // 当前页面
    - total // 总条数
    - current // 当前页
    - pages // 总页数

### 请求流程

- 定义接口 Model
  - 在 `src/api/interface` 目录下定义接口 Model
  - 例如 `src/api/interface/demo.ts` 文件
- 定义请求
  - 在 `src/api/modules` 目录下定义请求
  - 例 `src/api/modules/demo.ts` 文件
  - 定义请求参数格式
  - 定义返回接口格式
