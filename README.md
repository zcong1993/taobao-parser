# taobao-parser

[![NPM version](https://img.shields.io/npm/v/taobao-parser.svg?style=flat)](https://npmjs.com/package/taobao-parser) [![NPM downloads](https://img.shields.io/npm/dm/taobao-parser.svg?style=flat)](https://npmjs.com/package/taobao-parser)

[request](https://github.com/request/request)/[cheerio](https://github.com/cheeriojs/cheerio)/[node-vm](https://nodejs.org/dist/latest-v7.x/docs/api/vm.html)

> get items&#39; json data  in taobao search page without parser html dom, using node vm sandbox

> project template [egoist/template-nm](https://github.com/egoist/template-nm)

## Install

```bash
yarn add taobao-parser
```

## Usage

```js
const taobaoParser = require('taobao-parser')

taobaoParser(url)
  .then(data => {
    console.log(data)
    //=> items data here
  })
// run example.js
$ node example.js
```

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
