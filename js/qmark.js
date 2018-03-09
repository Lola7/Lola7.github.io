/**
 * 标记插件
 * 实现功能：
 * 1.在图片上进行标记，可以增加，修改，拖动，放大缩小，删除标记，保存标记后的图一个可下载的链接
 * @param  {[type]} global [description]
 * @return {[type]}        [description]
 */
;(function(global) {
    "use strict";
    //默认标记参数
    var markOpts = {
        quan: true,
        line: true
    };
    var qmark = {
        config: function (opts) {
            //没有默认参数，直接返回默认参数
            if(!opts){
                return markOpts;
            }
            //若有自定义参数，则覆盖默认参数
            for(var key in opts){
                markOpts[key] = opts[key];
            }
            return this;
        },
        listen: function listen(elem) {
            if(typeof elem === "string"){
                var elems = document.querySelectorAll(elem),
                    i = elems.length;
                while(i--){
                    listen(elems[i]);
                }
                return ;
            }
            //这里可将部分功能函数写在这里
            return this;
        },
        feature1: function() {
            //...
        },
        feature2: function() {
            //...
        }
    };
    // 最后将插件对象暴露给全局对象
    ('qmark' in global) && (global.qmark = qmark);
})(window);
