/*!
 @Name：通用
 @Author：赖杨德
 */

;(function(window,undefined) {
    function Gao7(){
        var self = this,
            ua = window.navigator.userAgent.toLowerCase(),
            version = {};
        self.events={};
        version.ios = ua.indexOf('iphone') > -1;
        version.android = ua.indexOf('android') > -1 || ua.indexOf('adr') > -1;
        version.weixin = ua.match(/MicroMessenger/i) == 'micromessenger';
        version.client = window.weixinConfig ? !!(weixinConfig.pid*1) : null;
        self.version =  version;
        self.clearAnimate=function(dom){
            if (!dom || dom.length===0) return;
            dom.length === undefined ? self._clearAnimate(dom) : self._clearAnimates(dom);
        }
        self.animate=function(dom){
            if (!dom || dom.length===0) return;
            dom.length === undefined ? self._animate(dom) : self._animates(dom);
        }
    }
    var __proto = Gao7.prototype;
    __proto.random=function(min,max){
        return Math.floor((max-min+1)*Math.random())+min;
    }
    __proto.query=function(selector){
        return window.document.documentElement.querySelector(selector);
    }    
    __proto.querys=function(selector){
        return window.document.documentElement.querySelectorAll(selector);
    }
    __proto.animateCache=function(){
        var _doms = this.querys(".ani"),
            _len  = _doms.length;
        if (!_len) return;
        for (var i = 0; i < _len; i++) _doms[i].attributes["style"] ? 
            _doms[i].setAttribute("animate-style-cache", _doms[i].attributes["style"].value) :
            null, _doms[i].style.visibility = "hidden";
    }
    __proto._clearAnimate=function(dom){
        dom.attributes["animate-style-cache"] && 
        dom.setAttribute("style", dom.attributes["animate-style-cache"].value), 
        dom.style.visibility = "hidden",
        dom.attributes["animate-effect"] && (effect = dom.attributes["animate-effect"].value,
        dom.className = dom.className.replace(" " + effect +" animated", ""))
    }
    __proto._clearAnimates=function(doms){
        var _len = doms.length;
        for (var i = 0; i < _len; i++)
        this._clearAnimate(doms[i]);
    }
    __proto._animate=function(dom){
        dom.style.visibility = "visible", 
        effect = dom.attributes["animate-effect"] ? dom.attributes["animate-effect"].value : "", 
        dom.className = dom.className + "  " + effect + " " + "animated", 
        style = dom.attributes["style"].value, 
        duration = dom.attributes["animate-duration"] ? dom.attributes["animate-duration"].value : "", 
        duration && (style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";"), 
        delay = dom.attributes["animate-delay"] ? dom.attributes["animate-delay"].value : "", 
        delay && (style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";"), 
        dom.setAttribute("style", style)
    }
    __proto._animates=function(doms){
         var _len = doms.length;
        for (var i = 0; i < _len; i++)
        this._animate(doms[i]);
    }
    __proto.loadImage=function(tasks,onComplete,onProgress,prefix){
        var tasks = tasks || [],
            total = tasks.length;
            if (!total) {onProgress && onProgress(100); onComplete && onComplete(); return;};
        var self = this,
            img = document.createElement("img"),
            count = 0;
            img.onload = img.onerror = img.onabort=function(){
                count++;
                onProgress && onProgress(Math.floor(count/total*100));
                if (count === total) {
                    onComplete && onComplete()
                }else{
                    img.src =tasks[count];
                }
            }
            img.src =tasks[0];
    }
    __proto.loadFont=function(url,complete,progress){
        var request = new XMLHttpRequest(),
            self =this;
        request.open( 'GET',url, true );
        complete && self.oneEvent(request,'font.load',function(event){
            complete(event.target.response);
            progress && self.removeEvent(request,'font.progress');
            request = null;
        });
        progress && self.addEvent(request,'font.progress',progress);
        request.responseType = 'arraybuffer';
        request.send( null );
    }
    __proto.addEvent=function(obj,event,callback){
        var self = this;
        if (self.events[event]) {throw new Error( "名字:"+event.split('.')[0]+"已存在！");}
            self.events[event] = callback;
        obj.addEventListener(event.split('.')[1],callback,false);
    }
    __proto.removeEvent=function(obj,event){
        obj.removeEventListener(event.split('.')[1],this.events[event],false);
        delete this.events[event];
    }
    __proto.oneEvent=function(obj,event,callback){
        var self = this;
        self.addEvent(obj,event,function(e){
            callback.apply(this,arguments);
            self.removeEvent(obj,event);
        })
    }
    __proto.msg=function(content){
        layer.open({
            content: content
            ,skin: 'msg'
            ,time: 2 //2秒后自动关闭
        });
    }

    __proto.istel=function(value){
        return /^1[34578]\d{9}$/.test(value);
    }

    var _Gao7 = new Gao7();
    if (typeof(module) !== 'undefined')
    {
        module.exports = _Gao7;
    }
    else if (typeof define === 'function' && define.amd) {
        define([], function () {
            return _Gao7;
        });
    }else{
        window.gao7  =_Gao7;
    }

})(window);