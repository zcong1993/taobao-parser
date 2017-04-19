const taobaoParser = require('../')

// only enable in local test
// cause circleci has network err with taobao.com
if (process.env.TEST_ENV === 'local') {
  const url = 'https://s.taobao.com/search?q=nodejs&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_20170419&ie=utf8'

  test('core', () => {
    return taobaoParser(url)
      .then(data => {
        expect(data.length).toBe(36)
        const index = data.findIndex(item => /node/i.test(item.raw_title))
        expect(index > -1).toBeTruthy()
      })
  })
}

test('main', () => {
  expect(typeof taobaoParser).toBe('function')
})
