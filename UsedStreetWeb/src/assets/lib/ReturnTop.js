/**
 * Created by Administrator on 2017/5/15.
 */
export default {
    install ( Vue, options ) {
        Vue.prototype.$top = function ( topOrIdName, duration, dir ) {
            this.$nextTick( () => {
                if ( typeof topOrIdName == 'number' ) {
                    window.scrollTop = top;
                    document.body.scrollTop = top;
                } else {
                    (function (idName,duration,dir) {
                        if(typeof idName != 'object') { idName = document.getElementById(idName); }
                        if(!idName) return;
                        var z = {};
                        z.el = idName;
                        z.p = getPos(idName,dir);
                        z.s = getScroll();
                        z.clear = function(){window.clearInterval(z.timer);z.timer=null};
                        z.clear();
                        z.t=(new Date).getTime();
                        z.step = function(){
                            var t = (new Date).getTime();
                            var p = (t - z.t) / duration;
                            if (t >= duration + z.t) {
                                z.clear();
                                window.setTimeout(function(){z.scroll(z.p.y, z.p.x)},13);
                            } else {
                                var st = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.p.y-z.s.t) + z.s.t;
                                var sl = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.p.x-z.s.l) + z.s.l;
                                z.scroll(st, sl);
                            }
                        };
                        z.scroll = function (t, l){window.scrollTo(l, t)};
                        z.timer = window.setInterval(function(){z.step();},13);
                    })( topOrIdName, duration, dir );
                    function intval(v) {
                        v = parseInt(v);
                        return isNaN(v) ? 0 : v;
                    }

                    //获取元素信息
                    function getPos(e,dir) {
                        var l = 0;
                        var t  = 0;
                        var dir = dir || 0;
                        var w = intval(e.style.width);
                        var h = intval(e.style.height);
                        var wb = e.offsetWidth;
                        var hb = e.offsetHeight;
                        while (e.offsetParent){
                            l += e.offsetLeft + (e.currentStyle?intval(e.currentStyle.borderLeftWidth):0);
                            t += e.offsetTop  + (e.currentStyle?intval(e.currentStyle.borderTopWidth):0);
                            e = e.offsetParent;
                        }
                        l += e.offsetLeft + (e.currentStyle?intval(e.currentStyle.borderLeftWidth):0);
                        t  += e.offsetTop  + (e.currentStyle?intval(e.currentStyle.borderTopWidth):0) - dir;
                        return {x:l, y:t, w:w, h:h, wb:wb, hb:hb};
                    }

                    //获取滚动条信息
                    function getScroll() {
                        var t, l, w, h;
                        if (document.documentElement && document.documentElement.scrollTop) {
                            t = document.documentElement.scrollTop;
                            l = document.documentElement.scrollLeft;
                            w = document.documentElement.scrollWidth;
                            h = document.documentElement.scrollHeight;
                        } else if (document.body) {
                            t = document.body.scrollTop;
                            l = document.body.scrollLeft;
                            w = document.body.scrollWidth;
                            h = document.body.scrollHeight;
                        }
                        return { t: t, l: l, w: w, h: h };
                    }
                }
            })
        }
    }
}
