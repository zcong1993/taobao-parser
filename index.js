const vm = require('vm')
const axios = require('axios')
const cheerio = require('cheerio')

function crawler(url) {
  return axios.get(url)
    .then(res => cheerio.load(res.data, {
      ignoreWhitespace: true,
      xmlMode: true
    }))
}

module.exports = url => {
  return crawler(url)
    .then($ => {
      return $('script')
        .filter((_, el) => /g_page_config/.test($(el).text()))
        .text()
        .replace(/([a-zA-Z_]+\(\))/, '//$1')
    })
    .then(rawData => {
      const sandbox = {}
      const script = new vm.Script(rawData)
      script.runInNewContext(sandbox)
      return sandbox.g_page_config.mods.itemlist.data.auctions
    })
}
