import eventBus from '../eventBus'
let flag = true
eventBus.$on('videoPlay', () => {
    flag = false
})
function browser() {

    return function() {
        //取得浏览器的userAgent字符串
        var userAgent = navigator.userAgent;
        var isIE = window.ActiveXObject != undefined && userAgent.indexOf("MSIE") > -1;
        var isFirefox = userAgent.indexOf("Firefox") > -1;
        var isOpera = window.opr != undefined;
        var isChrome = userAgent.indexOf("Chrome") && window.chrome;
        var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Version") > -1;
        if(flag) {
            if (isIE) {
                return "IE";
            } else if (isFirefox) {
                return "Firefox";
            } else if (isOpera) {
                return "Opera";
            } else if (isChrome) {
                return "Chrome";
            } else if (isSafari) {
                return "Safari";
            } else {
                return "Unknow";
            }
        } else {
            return 'Unknow'
        }
    }
}

export default browser
