# [sn-taro-utils](https://github.com/CozySnail/sn-taro-utils)
[![](https://img.shields.io/static/v1.svg?label=Powered%20by&message=snail&color=%3CCOLOR%3E)](https://github.com/CozySnail/sn-taro-utils)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/CozySnail/sn-taro-utils/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/CozySnail/sn-taro-utils.svg?branch=master)](https://travis-ci.org/CozySnail/sn-taro-utils)
[![Coveralls](https://img.shields.io/coveralls/CozySnail/sn-taro-utils.svg)](https://coveralls.io/github/CozySnail/sn-taro-utils)
[![npm](https://img.shields.io/badge/npm-6.8.0-orange.svg)](https://www.npmjs.com/package/sn-taro-utils)
[![NPM downloads](http://img.shields.io/npm/dm/sn-taro-utils.svg?style=flat-square)](http://www.npmtrends.com/sn-taro-utils)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/CozySnail/sn-taro-utils.svg)](http://isitmaintained.com/project/CozySnail/sn-taro-utils "Percentage of issues still open")

简体中文 | [English](README.en-US.md)

针对 Taro 开发的一套 `JS|TS` 第三方库

## :star: 特性

- 支持ES6+或TypeScript编写源码，编译生成生产代码
- 集成 babel-runtime (默认关闭)
- 第三方依赖自动注入（自动剔除第三方依赖无用代码tree shaking）
- 多环境支持（支持浏览器原生，支持AMD，CMD，支持Webpack，Rollup，fis等，支持Node）
- 集成代码风格校验(eslint|tslint)
- 集成单元测试环境（mocha）
- 集成测试覆盖率（istanbul）
- 集成可持续构建工具[travis-ci](https://www.travis-ci.org/)
- 支持自定义banner
- 支持一键重命名
- 支持[sideEffects](https://juejin.im/post/5b4ff9ece51d45190c18bb65)
- 集成ISSUE_TEMPLATE

> 注意: 如果不同时使用 `export` 与 `export default` 可打开 `legacy模式`，`legacy模式` 下的模块系统可以兼容 `ie6-8`，见rollup配置文件

## :pill: 兼容性
单元测试保证支持如下环境：

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 29+ | 55+  | 9+   | 50+  | 9+   | 4+   | 4+ |

**注意：编译代码依赖ES5环境，对于ie6-8需要引入[es5-shim](http://github.com/es-shims/es5-shim/)才可以兼容，可以查看[demo/demo-global.html](./demo/demo-global.html)中的例子**

## :rocket: 使用者指南

通过npm下载安装代码

```bash
$ npm install --save sn-taro-utils
```

如果你是node环境

```js
const snJsUtils = require('../dist/index.js');
```

如果你是webpack等环境

```js
import { DateUtil } from 'sn-taro-utils';
```

如果你是requirejs环境

```js
requirejs(['node_modules/sn-taro-utils/dist/index.aio.js'], function (snJsUtils) {
    console.log(snJsUtils.DateUtil.formatDate(new Date(), 'yyyy-MM-dd'));
})
```

## :bookmark_tabs: 文档
[API](./doc/api.zh-CN.md)

## :kissing_heart: 贡献者指南

首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试:

```bash
$ npm test
```

修改 package.json 中的版本号，修改 README.md 中的版本号，修改 CHANGELOG.md，然后发布新版

```bash
$ npm run release
```

将新版本发布到npm

```bash
$ npm publish
```

## 贡献者列表

[contributors](https://github.com/CozySnail/sn-taro-utils/graphs/contributors)

## :gear: 更新日志
[CHANGELOG.md](./CHANGELOG.md)

## :airplane: 计划列表
[TODO.md](./TODO.md)

## :bulb: 谁在使用
