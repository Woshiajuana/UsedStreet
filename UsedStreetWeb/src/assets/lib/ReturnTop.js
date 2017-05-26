/**
 * Created by Administrator on 2017/5/15.
 */
export default {
    install ( Vue, options ) {
        Vue.prototype.$top = function ( top ,type) {
            this.$nextTick( () => {
                if (!type) {
                    window.scrollTop = top;
                    document.body.scrollTop = top;
                } else {
                    var doc = window.document;
                    (function (acceleration,time) {
                        var timer = '',
                            acceleration = acceleration || 0.1,
                            time = time || 10,
                            speed = 1 + acceleration;
                        clearInterval(timer);
                        timer = setInterval(function() {
                            if (getScrollTop() <= 0){
                                clearInterval(timer);
                                return;
                            }
                            //这行代码是关键，取得滚动条竖直距离，除以speed后再给滚动条设置竖直距离
                            setScrollTop(Math.floor(getScrollTop() / speed));
                        }, time);
                        return this;
                    })( 0.2,20 );
                    function setScrollTop(value) {
                        doc.documentElement.scrollTop = value;
                        doc.body.scrollTop = value;
                    }
                    //取得滚动条的竖直距离
                    function getScrollTop() {
                        return doc.documentElement.scrollTop || doc.body.scrollTop;
                    }
                }
            })
        }
    }
}
