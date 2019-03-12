# [sn-taro-utils](https://github.com/CozySnail/sn-taro-utils)
[![](https://img.shields.io/static/v1.svg?label=Powered%20by&message=snail&color=%3CCOLOR%3E)](https://github.com/CozySnail/sn-taro-utils)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/CozySnail/sn-taro-utils/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/CozySnail/sn-taro-utils.svg?branch=master)](https://travis-ci.org/CozySnail/sn-taro-utils)
[![Coveralls](https://img.shields.io/coveralls/CozySnail/sn-taro-utils.svg)](https://coveralls.io/github/CozySnail/sn-taro-utils)
[![npm](https://img.shields.io/badge/npm-6.8.0-orange.svg)](https://www.npmjs.com/package/sn-taro-utils)
[![NPM downloads](http://img.shields.io/npm/dm/sn-taro-utils.svg?style=flat-square)](http://www.npmtrends.com/sn-taro-utils)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/CozySnail/sn-taro-utils.svg)](http://isitmaintained.com/project/CozySnail/sn-taro-utils "Percentage of issues still open")

[简体中文](README.md) | English

The best third party `JS|TS` library for Taro. 

## Characteristics

- Coded in ES6+ or TypeScript, easily compile and generate production code
- Integrated babel-runtime (Default set to closed)
- Third parties rely on automatic injection(Tree shaking)
- Supports multi environment, including default browsers, Node, AMD, CMD, Webpack, Rollup, Fis and so on.
- Integrated code style lint(eslint|tslint).
- Integrated unit test environment(mocha).
- Integrated test coverage(istanbul).
- Integrated continuous integration tool [travis-ci](https://www.travis-ci.org/)
- Supports banner
- Supports one-key renaming.
- Supports [sideEffects](https://github.com/webpack/webpack/tree/master/examples/side-effects)
- Integrated Issue template

**Note:** When `export` and `export default` are not used at the same time, there is the option to 
turn on `legacy mode`. Under `legacy mode`, the module system can be compatible with `IE6-8`. For more information on legacy mode, 
please see rollup supplemental file. 

## Compatibility
Unit tests guarantee support on the following environment:

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 29+ | 55+  | 9+   | 50+  | 9+   | 4+   | 4+ |

> Note: Compiling code depend on ES5, so you need import [es5-shim](http://github.com/es-shims/es5-shim/) to compatible with `IE6-8`, here is a [demo](./demo/demo-global.html)

## Usage Instructions

Using npm, download and install the code. 

```bash
$ npm install --save sn-taro-utils
```

For node environment：

```js
const snJsUtils = require('../dist/index.js');
```

For webpack or similar environment：

```js
import { DateUtil } from 'sn-taro-utils';
```

For requirejs environment:

```js
requirejs(['node_modules/sn-taro-utils/dist/index.aio.js'], function (snJsUtils) {
    console.log(snJsUtils.DateUtil.formatDate(new Date(), 'yyyy-MM-dd'));
})
```

## Documents
[API](./doc/api.md)

## Contribution Guide

For the first time to run, you need to install dependencies firstly.

```bash
$ npm install
```

To build the project:

```bash
$ npm run build
```

To run unit tests:

```bash
$ npm test
```

Modify the version number in package.json, modify the version number in README.md, modify the CHANGELOG.md, and then release the new version.

```bash
$ npm run release
```

Publish the new version to NPM.

```bash
$ npm publish
```

## Contributors

[contributors](https://github.com/CozySnail/sn-taro-utils/graphs/contributors)

## :gear: Change Log
[CHANGELOG.md](./CHANGELOG.md)

## TODO
[TODO.md](./TODO.md)

## :bulb: Current Users
