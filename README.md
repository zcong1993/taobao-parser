# taobao-parser

[![NPM version](https://img.shields.io/npm/v/taobao-parser.svg?style=flat)](https://npmjs.com/package/taobao-parser) [![NPM downloads](https://img.shields.io/npm/dm/taobao-parser.svg?style=flat)](https://npmjs.com/package/taobao-parser)
 [![Build Status](https://img.shields.io/circleci/project/zcong1993/taobao-parser/master.svg?style=flat)](https://circleci.com/gh/zcong1993/taobao-parser)

> get taobao item data without parser html dom, using node vm sandbox

[axios](https://github.com/mzabriskie/axios)/[cheerio](https://github.com/cheeriojs/cheerio)/[node-vm](https://nodejs.org/dist/latest-v7.x/docs/api/vm.html)

## Install

```bash
$ yarn add taobao-parser
```

## Usage

```js
const taobaoParser = require('taobao-parser')

// return a promise
taobaoParser(url)
  .then(data => {
    console.log(data)
    //=> items data here
  })
  .catch(e => console.log(e.message))
// run example.js
$ node example.js
```

## Test

Run `npm run test:local` yourself, cause circleci has network error with `taobao.com`.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**taobao-parser** © [zcong1993](https://github.com/zcong1993), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by zcong1993 with help from contributors ([list](https://github.com/zcong1993/taobao-parser/contributors)).

> [github.com/zcong1993](https://github.com/zcong1993) · GitHub [@zcong1993](https://github.com/zcong1993)
