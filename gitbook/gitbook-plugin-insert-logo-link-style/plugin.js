require(['gitbook', 'jQuery'], function (gitbook, $) {
  var src = ''
  var style = ''
  var link = ''
  var target = ''

  var insertLogo = function (src, style, link, target) {
    $('.book-summary').children().eq(0).before('<a class="book-logo" ' + (target?'target="' + target + '" ':'') +'href="' + link + '"><img src="' + src + '" style="' + style + '"></a>')
  }

  gitbook.events.bind('start', function (e, config) {
    src = config['insert-logo-link-style']['src']
    style = config['insert-logo-link-style']['style']
    link = config['insert-logo-link-style']['link']
    target = config['insert-logo-link-style']['target']
  })

  gitbook.events.bind("page.change", function() {
    insertLogo(src, style, link, target)
  })
})
