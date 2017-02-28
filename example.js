const parser = require('./')

const url = 'https://s.taobao.com/search?initiative_id=tbindexz_20170228&ie=utf8&spm=a21bo.50862.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q=%E5%A2%A8%E6%B0%B4&suggest=0_1&_input_charset=utf-8&wq=moshui&suggest_query=moshui&source=suggest'

parser(url)
  .then(data => console.log(data))
  .catch(err => console.log(err.message))
