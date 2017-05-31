/**
 * Created by Administrator on 2017/5/15.
 */
export default {
    install ( Vue, options ) {
        Vue.prototype.$message = function ( options ) {
            if ( !options || typeof options.msg == 'undefined') return;
            var type = options.type || 'info',
                time = options.time || 3000,
                divEle = document.createElement('div'),
                str = `<svg class="message-icon">
                       <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#${ type }-icon"></use></svg>
                       <span> ${ options.msg } </span>`;
            divEle.className = 'message-wrap slideInDown animated ' + type;
            divEle.innerHTML = str;
            document.body.appendChild(divEle);
            divEle.style.marginLeft = '-' + divEle.offsetWidth / 2 + 'px';
            setTimeout(() => {
                divEle.classList = 'message-wrap slideOutUp animated ' + type;
                setTimeout(() => {
                    document.body.removeChild(divEle)
                },350)
            },time);
        }
    }
}
