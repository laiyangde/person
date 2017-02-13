// require.ensure([], function(require){
//     require('../images/1.png')
// });
require('../css/main.css');
(function(bone,C3D,JT){
	require('$');
	require('lib/bone');
	require('lib/jstween');
	require('lib/jstimeline');
	require('lib/css3d-engine');
	require('lib/orienter');
	var nav, //导航模块
	Pano, //全景模块
	popup,//弹窗模块
	startAnimate = require('./startAnimate'),//开始的缓动动画
	addTouch = require('./addTouch'),//绑定touch事件  判断手势
	randomObj = require('./getRandom'),//获取随机数
	startObj = bone.extend({},bone.Events,{
		init:function(){
			this.$main = $("#main");
			//没有做任何操作，猜测是一种设计模式，防止后期加东西好维护
			randomObj.init();
			//绑定触摸事件
			addTouch.init(this.$main);
			//建立舞台并设置尺寸
			this.stage = new C3D.Stage({ el: $("#three")[0] });
            this.stage.size(640, window.innerHeight).update();
            //创建一个三维容器（创建以方便分组使用）
    		this.root = new C3D.Sprite;
    		this.root.position(0, 0, -600).update(); 
    		this.stage.addChild(this.root);
    		//初始化缓动动画
    		startAnimate.init(this.root);
    		//更新舞台尺寸
    		this.resize();
            this.ready();
		},
        resize: function() {
            var self = this;
            setTimeout(function() { 
            	self.stage.size(640, window.innerHeight).update() 
            }, 500) 
    	},
    	isReady: false, 
    	ready: function(){
            if (!this.isReady) { 
            	this.isReady = true;
                var _self = this;
                //播放音乐注释了
             //    if (ua.android) {
             //        var _play = function() { 
             //        	$("#bgm")[0].play(), $("body").off("touchend", _play) 
             //    	};
             //    	$("body").on("touchend", _play) 
            	// } else {
            	// 	$("#bgm")[0].play();
            	// }
                //播放时间线动画1   即加载动画
                startAnimate["in"]();

                //加载远程图片及js   
                !function() { 
		            require.ensure([], function(require){
		            	var arr = [require('./nav'),require('./Pano'),require('./popup')];
                        (function(_nav, _Pano, _popup) { 
                        	nav = _nav, Pano = _Pano, popup = _popup, _self.complete() 
                        }).apply(null, arr) 		            	
					});
            	}(require)
            }
    	},
    	complete:function(){
            function start() { isLockMove = false, loop() }

            function cancelAni() { isLockMove = true, requestID && cancelAnimationFrame(requestID) }

            function loop() { 
            	requestID = requestAnimationFrame(loop);
                var lons = (d.lon + f.lon + c.lon) % 360,
                    lats = .35 * (d.lat + f.lat + c.lat);
                //旋转一周后重置  lons有%360 所以这里需要重置下
                lons - startObj.root.panoBg.rotationY > 180 && (startObj.root.panoBg.rotationY += 360), 
                lons - startObj.root.panoBg.rotationY < -180 && (startObj.root.panoBg.rotationY -= 360);

                var n = lons - startObj.root.panoBg.rotationY,
                    a = lats - startObj.root.panoBg.rotationX;
                Math.abs(n) < .1 ? startObj.root.panoBg.rotationY = lons : startObj.root.panoBg.rotationY += .3 * n, 
                Math.abs(a) < .1 ? startObj.root.panoBg.rotationX = lats : startObj.root.panoBg.rotationX += .15 * a, 
                startObj.root.panoBg.updateT(), 
                startObj.root.panoDots.rotationY = startObj.root.panoBg.rotationY, 
                startObj.root.panoDots.rotationX = startObj.root.panoBg.rotationX, 
                startObj.root.panoDots.updateT(), 
                startObj.root.panoSky.rotationY = startObj.root.panoBg.rotationY - 90, 
                startObj.root.panoSky.rotationX = startObj.root.panoBg.rotationX, 
                startObj.root.panoSky.updateT(), 
                lons - startObj.root.panoItems.rotationY > 180 && (startObj.root.panoItems.rotationY += 360), 
                lons - startObj.root.panoItems.rotationY < -180 && (startObj.root.panoItems.rotationY -= 360);
                var o = lons - startObj.root.panoItems.rotationY,
                    r = lats - startObj.root.panoItems.rotationX;
                Math.abs(o) < .1 ? startObj.root.panoItems.rotationY = lons : startObj.root.panoItems.rotationY += .25 * o, 
                Math.abs(r) < .1 ? startObj.root.panoItems.rotationX = lats : startObj.root.panoItems.rotationX += .15 * r, 
                startObj.root.panoItems.updateT();

                var s = -150 - 20 * Math.abs(n);
                startObj.root.z += .1 * (s - startObj.root.z), 
                startObj.root.updateT(), 
                showDotsTitle(startObj.root.panoDots.rotationY) 
            }

            function showDotsTitle(rotateY) {
                var i = (-180 - rotateY) % 360;
                i = i > 0 ? i - 360 : i;
                for (var i = 0, len = startObj.root.panoDots.children.length; i < len; i++) {
                    var child = startObj.root.panoDots.children[i];
                    child.r0 > i - 5 && child.r0 < i + 25 ? 
                    0 == child.label.width && 
                    (
                    	JT.kill(child.label), 
                    	JT.to(child.label, .3, 
                    	{ 
                        	width: child.w0, 
                        	ease: JT.Quad.Out, 
                        	onUpdate: function() { this.target.updateS() } 
                    	})
                    ) 
                    : 
                    child.label.width == child.w0 && (JT.kill(child.label), 
                    JT.to(child.label, .3, { width: 0, ease: JT.Quad.Out, onUpdate: function() { this.target.updateS() } })) 
                } 
            }
            var _self = this;
            //初始化导航
            nav.init(this.$main);
            //初始化弹窗
            popup.init(this.$main);
            //加载完成 可以播放时间线2动画了
            startAnimate.out();
            //初始化全景
            Pano.init(_self.root);
            startAnimate.on("out", function() {
            	JT.to(_self.root, 4, { z: -150, ease: JT.Quad.InOut, onUpdate: function() { this.target.updateT() } }),
            	JT.to(_self.stage.camera, 4, { fov: 60, ease: JT.Quad.InOut, onUpdate: function() { this.target.updateT() } }), 
            	Pano["in"]();
            });
            nav.on("navOn", function() { cancelAni(), JT.to(_self.stage.el, .3, { x: -200, ease: JT.Quad.Out }) });
            nav.on("navOff", function() { start(), JT.to(_self.stage.el, .3, { x: 0, ease: JT.Quad.Out }) }), 
            nav.on("item", function(t) { popup.popOn(t) });
            Pano.on("over", function() { start(), nav.$el.css({ display: "block" }), "invitation" == window.ups.act && popup.popOn(1) });
            Pano.on("dot", function(t) { popup.popOn(t) }), popup.on("popOn", function() { cancelAni() }), 
            popup.on("popOff", function() { start() });
            //通过触发touch 移动
            var c = { lon: 0, lat: 0 };
            addTouch.on("move", function(t) { 
            	//ax ay是实时移动距离
            	isLockMove || (c.lon = (c.lon - .2 * t.ax) % 360, c.lat = Math.max(-90, Math.min(90, c.lat + .2 * t.ay))) 
            });
            var requestID, 
            	//通过陀螺仪移动
            	d = { lat: 0, lon: 0 },

                f = { lon: 0, lat: 0 },
                isLockMove = true,
                orienter = new Orienter;
            orienter.onOrient = function(t) { 
            	d.lat = t.lat, 
            	d.lon = -t.lon, 
            	//如果isLockMove 设置f和d相反
            	isLockMove && (f.lat = -d.lat, f.lon = -d.lon) 
            }, 
            orienter.init() 
    	}
	})
	startObj.init();
}).call(exports,require('lib/bone'),require('lib/css3d-engine'),require('lib/jstween'))