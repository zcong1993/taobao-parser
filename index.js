const vm = require('vm')
const request = require('request')
const cheerio = require('cheerio')

const sandbox = {}

function getData(uri) {
  return new Promise((resolve, reject) => {
    request(uri, (err, res, body) => {
      if (err) {
        throw err
      }
      // console.log(body)
      const $ = cheerio.load(body, {
        ignoreWhitespace: true,
        xmlMode: true
      })

      let fin = $('script').filter((i, el) => {
        return $(el)
      }).map((i, el) => {
        return $(el).text()
      }).get()
      // get json data in script
      fin = fin[6]
      // console.log(fin)
      // disable function call
      const script = new vm.Script(fin.replace(/([a-zA-Z_]+\(\))/, '//$1'))
      script.runInNewContext(sandbox)
      let items = sandbox.g_page_config.mods.itemlist.data.auctions
      if (items) {
        resolve(items)
      } else {
        reject(new Error('error'))
      }
    })
  })
}

module.exports = getData
