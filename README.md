#j-lazyload
一个简单的基于jQuery的图片懒加载插件
##Demo
[Demo展示](http://jaliy.github.io/lazyload/)
##使用方法:
$(selector).lazyload(options);
##参数选项
 * options.container        {{Object}}      : 滚动监听容器，默认window
 * options.data_src         {{String}}      : 图片来源data-{{data_src}}，默认src，转成元素上的就是data-src
 * options.placeholder      {{String}}      : 图片加载前显示的图片，建议使用较小的图片
 * options.error_img        {{String}}      : 图片加载出错时显示的图片，默认null
 * options.preload_height   {{Number}}      : 预加载高度，默认0，
 * options.onShow           {{Function}}    : 滚动到可视区域后的处理函数，默认null
 * options.onLoad           {{Function}}    : 图片加载完后处理函数，默认null
 * options.onError          {{Function}}    : 图片加载出错后处理函数，函数会有一个参数，指向出错的图片src
