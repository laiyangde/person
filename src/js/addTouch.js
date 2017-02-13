(function(bone){
    module.exports = bone.extend({}, bone.Events, { 
        START: "start", 
        END: "end", 
        MOVE: "move", 
        stage: null, 
        originTouchPos: { x: 0, y: 0 }, 
        oldTouchPos: { x: 0, y: 0 }, 
        newTouchPos: { x: 0, y: 0 }, 
        firstDir: "", 
        originTime: 0, 
        oldTime: 0, 
        newTime: 0, 
        dx: 0, 
        dy: 0, 
        ax: 0, 
        ay: 0, 
        time: 0, 
        init: function($main) { 
            this.stage = $main, 
            this.onTouchStart = this.onTouchStart.bind(this), 
            this.onTouchMove = this.onTouchMove.bind(this), 
            this.onTouchEnd = this.onTouchEnd.bind(this), 
            this.stage.on("touchstart", this.onTouchStart) 
        }, 
        clear: function() { 
            this.stage.off("touchstart", this.onTouchStart), 
            this.stage.off("touchmove", this.onTouchMove), 
            this.stage.off("touchend", this.onTouchEnd) 
        }, 
        onTouchStart: function(t) { 
            this.firstDir = "", 
            t = t.changedTouches[0], 
            this.originTouchPos.x = this.oldTouchPos.x = this.newTouchPos.x = t.clientX, 
            this.originTouchPos.y = this.oldTouchPos.y = this.newTouchPos.y = t.clientY, 
            this.originTime = this.oldTime = this.newTime = Date.now(), 
            this.dx = this.dy = this.ax = this.ay = 0, 
            this.stage.on("touchmove", this.onTouchMove), 
            this.stage.on("touchend", this.onTouchEnd), 
            this.trigger(this.START);
        }, 
        onTouchMove: function(t) {
            return t = t.changedTouches[0], 
            this.newTouchPos.x = t.clientX, 
            this.newTouchPos.y = t.clientY, 
            this.newTime = Date.now(), 
            this.checkGesture(), 
            this.oldTouchPos.x = this.newTouchPos.x, 
            this.oldTouchPos.y = this.newTouchPos.y, 
            this.oldTime = this.newTime, !1 
        }, 
        onTouchEnd: function() { 
            this.newTime = Date.now();
            var t = (this.newTime - this.oldTime) / 1e3;
            this.trigger(this.END, { dx: this.dx, dy: this.dy, ax: 2 * this.time > t ? this.ax : 0, ay: 2 * this.time > t ? this.ay : 0, dir: this.firstDir }), 
            this.stage.off("touchmove", this.onTouchMove), this.stage.off("touchend", this.onTouchEnd) 
        }, 
        checkGesture: function() { 
            this.dx = this.fixed2(this.newTouchPos.x - this.originTouchPos.x), 
            this.dy = this.fixed2(this.newTouchPos.y - this.originTouchPos.y), 
            this.ax = this.fixed2(this.newTouchPos.x - this.oldTouchPos.x), 
            this.ay = this.fixed2(this.newTouchPos.y - this.oldTouchPos.y), 
            this.time = (this.newTime - this.oldTime) / 1e3, 
            "" == this.firstDir && (Math.abs(this.ax) > Math.abs(this.ay) ? this.firstDir = "x" : Math.abs(this.ax) < Math.abs(this.ay) && (this.firstDir = "y")),
            this.trigger(this.MOVE, { dx: this.dx, dy: this.dy, ax: this.ax, ay: this.ay, dir: this.firstDir }) 
        }, 
        fixed2: function(t) {
            return Math.floor(100 * t) / 100 
        } 
    });
}).call(exports,require('lib/bone'))