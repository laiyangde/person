/*! create by laiyangde */
webpackJsonp([1],Array(31).concat([
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function (bone, JT) {
	    __webpack_require__(32);
	    __webpack_require__(16);
	    module.exports = bone.extend({}, bone.Events, {
	        isOut: !1,
	        init: function init($main) {
	            var _self = this;
	            this.stage = $main;
	            var _html = __webpack_require__(50);
	            this.stage.append(_html), this.$el = this.stage.find("#nav"), this.bg = this.$el.find(".bg"), this.bar = this.$el.find(".bar"), this.btnOn = this.$el.find(".on"), this.btnOff = this.$el.find(".off"), this.muteOn = this.$el.find(".muteOn"), this.muteOff = this.$el.find(".muteOff"),
	            // this.bgm = $("#bgm")[0], 
	            this.bg.css({ display: "none", opacity: 0 }), JT.set(this.bar, { x: 640 }), this.btnOn.on("touchend", function () {
	                _self.navOn();
	            }), this.bg.on("touchend", function () {
	                _self.navOff();
	            }), this.muteOn.on("touchend", function () {
	                _self.muteOn.css({ display: "none" }), _self.muteOff.css({ display: "block" });
	                // _self.bgm.pause() 
	            }), this.muteOff.on("touchend", function () {
	                _self.muteOn.css({ display: "block" }), _self.muteOff.css({ display: "none" });
	                // _self.bgm.play() 
	            });
	            var Q = [2, 5, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 0, 1];
	            this.$el.find(".item").each(function (index, item) {
	                $(item).on("touchend", function () {
	                    _self.navOff(), _self.trigger("item", Q[index]);
	                });
	            });
	        },
	        navOn: function navOn() {
	            this.trigger("navOn"), JT.to(this.bg, .3, {
	                opacity: .8,
	                onStart: function onStart() {
	                    this.target.style.display = "block";
	                }
	            }), JT.to(this.bar, .3, {
	                x: 0,
	                ease: JT.Quad.Out
	            });
	        },
	        navOff: function navOff() {
	            this.trigger("navOff"), JT.to(this.bg, .3, {
	                opacity: 0,
	                onEnd: function onEnd() {
	                    this.target.style.display = "none";
	                }
	            }), JT.to(this.bar, .3, {
	                x: 640,
	                ease: JT.Quad.Out
	            });
	        }
	    });
	}).call(exports, __webpack_require__(10), __webpack_require__(11));

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./nav.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./nav.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "#nav,\r\n#nav .bg {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    height: 100%\r\n}\r\n\r\n#nav,\r\n#nav .bg,\r\n#nav .on {\r\n    position: absolute\r\n}\r\n\r\n#nav {\r\n    display: none\r\n}\r\n\r\n#nav .bg {\r\n    width: 640px;\r\n    background: #000;\r\n    opacity: 1\r\n}\r\n\r\n#nav .on {\r\n    right: 10px;\r\n    top: 10px;\r\n    width: 80px;\r\n    height: 80px;\r\n    background: url(" + __webpack_require__(34) + ")\r\n}\r\n\r\n#nav .mute {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 100px\r\n}\r\n\r\n#nav .bar,\r\n#nav .mute .muteOff,\r\n#nav .mute .muteOn {\r\n    top: 0;\r\n    position: absolute;\r\n    right: 0\r\n}\r\n\r\n#nav .mute .muteOn {\r\n    width: 80px;\r\n    height: 80px;\r\n    background: url(" + __webpack_require__(35) + ")\r\n}\r\n\r\n#nav .mute .muteOff {\r\n    width: 80px;\r\n    height: 80px;\r\n    background: url(" + __webpack_require__(36) + ");\r\n    display: none\r\n}\r\n\r\n#nav .bar {\r\n    height: 100%\r\n}\r\n\r\n#nav .bar .item {\r\n    position: absolute;\r\n    right: 0;\r\n    width: 390px\r\n}\r\n\r\n#nav .bar .part1,\r\n#nav .bar .part2,\r\n#nav .bar .part3,\r\n#nav .bar .part4,\r\n#nav .bar .part5 {\r\n    position: absolute;\r\n    right: 0;\r\n    width: 540px\r\n}\r\n\r\n#nav .bar .part1 {\r\n    top: 0;\r\n    height: 28%;\r\n    background: url(" + __webpack_require__(37) + ") 25px center no-repeat #2a46da\r\n}\r\n\r\n#nav .bar .part1 .item {\r\n    height: 25%\r\n}\r\n\r\n#nav .bar .part1 .item1 {\r\n    top: 0;\r\n    background: url(" + __webpack_require__(38) + ") right center no-repeat\r\n}\r\n\r\n#nav .bar .part1 .item2 {\r\n    top: 25%;\r\n    background: url(" + __webpack_require__(39) + ") right center no-repeat\r\n}\r\n\r\n#nav .bar .part1 .item3 {\r\n    top: 50%;\r\n    background: url(" + __webpack_require__(40) + ") right center no-repeat\r\n}\r\n\r\n#nav .bar .part1 .item4 {\r\n    top: 75%;\r\n    background: url(" + __webpack_require__(41) + ") right center no-repeat\r\n}\r\n\r\n#nav .bar .part2 {\r\n    top: 28%;\r\n    height: 28%;\r\n    background: url(" + __webpack_require__(42) + ") 25px center no-repeat #8c0b44\r\n}\r\n\r\n#nav .bar .part2 .item {\r\n    height: 25%\r\n}\r\n\r\n#nav .bar .part2 .item1 {\r\n    top: 0;\r\n    background: url(" + __webpack_require__(43) + ") right center no-repeat\r\n}\r\n\r\n#nav .bar .part2 .item2 {\r\n    top: 25%;\r\n    background: url(" + __webpack_require__(44) + ") right center no-repeat\r\n}\r\n\r\n#nav .bar .part2 .item3 {\r\n    top: 50%;\r\n    background: url(" + __webpack_require__(45) + ") right center no-repeat\r\n}\r\n\r\n#nav .bar .part2 .item4 {\r\n    top: 75%;\r\n    background: url(" + __webpack_require__(46) + ") right center no-repeat\r\n}\r\n\r\n#nav .bar .part3 {\r\n    top: 56%;\r\n    height: 28%;\r\n    background: url(" + __webpack_require__(42) + ") 25px center no-repeat #4f1175\r\n}\r\n\r\n#nav .bar .part3 .item {\r\n    height: 25%\r\n}\r\n\r\n#nav .bar .part3 .item1 {\r\n    top: 0;\r\n    background: url(" + __webpack_require__(46) + ") right center no-repeat\r\n}\r\n\r\n#nav .bar .part3 .item2 {\r\n    top: 25%;\r\n    background: url(" + __webpack_require__(46) + ") right center no-repeat\r\n}\r\n\r\n#nav .bar .part3 .item3 {\r\n    top: 50%;\r\n    background: url(" + __webpack_require__(46) + ") right center no-repeat\r\n}\r\n\r\n#nav .bar .part3 .item4 {\r\n    top: 75%;\r\n    background: url(" + __webpack_require__(46) + ") right center no-repeat\r\n}\r\n\r\n#nav .bar .part4 {\r\n    top: 84%;\r\n    height: 8%;\r\n    background: url(" + __webpack_require__(47) + ") 55px center no-repeat #e9492a\r\n}\r\n\r\n#nav .bar .part4 .item {\r\n    height: 100%\r\n}\r\n\r\n#nav .bar .part4 .item1 {\r\n    top: 0;\r\n    background: url(" + __webpack_require__(46) + ") right center no-repeat\r\n}\r\n\r\n#nav .bar .part5 {\r\n    top: 92%;\r\n    height: 8%;\r\n    background: url(" + __webpack_require__(48) + ") 55px center no-repeat #c92606\r\n}\r\n\r\n#nav .bar .part5 .item {\r\n    height: 100%\r\n}\r\n\r\n#nav .bar .part5 .item1 {\r\n    top: 0;\r\n    background: url(" + __webpack_require__(46) + ") right center no-repeat\r\n}\r\n\r\n#nav .bar .off {\r\n    position: absolute;\r\n    right: 540px;\r\n    top: 0;\r\n    width: 80px;\r\n    height: 80px;\r\n    background: url(" + __webpack_require__(49) + ");\r\n    pointer-events: none\r\n}\r\n", ""]);

	// exports


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/4875c265-icon.png";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/9e245fc7-icon2.png";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/9020bb42-icon3.png";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/70c2e684-icon4.png";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/18bf560b-icon5.png";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/5a29911b-icon6.png";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/ed91e431-naodong.png";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/b79052b6-daka.png";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/c74b0bd7-icon7.png";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/c8e1acde-zaoyin.png";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/15ed39c1-yanxiu.png";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/c63f305e-pk.png";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/c18fb627-gc.png";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/74a7f66c-icon9.png";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/8301e21f-icon10.png";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/9f3c5346-icon11.png";

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	module.exports = '<div id=nav><div class=bg></div><div class=on></div><div class=mute><div class=muteOn></div><div class=muteOff></div></div><div class=bar><div class=part1><div class="item item1"></div><div class="item item2"></div><div class="item item3"></div><div class="item item4"></div></div><div class=part2><div class="item item1"></div><div class="item item2"></div><div class="item item3"></div><div class="item item4"></div></div><div class=part3><div class="item item1"></div><div class="item item2"></div><div class="item item3"></div><div class="item item4"></div></div><div class=part4><div class="item item1"></div></div><div class=part5><div class="item item1"></div></div><div class=off></div></div></div>';

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	(function (bone, C3D, JT, JTL) {
	    // B, C, E, Q
	    __webpack_require__(16);
	    module.exports = bone.extend({}, bone.Events, {
	        init: function init(root) {
	            function panoTween() {
	                //全景背景容器旋转
	                JT.fromTo(panoBg, 4, { rotationY: -720 }, {
	                    rotationY: 0,
	                    ease: JT.Quad.Out,
	                    onUpdate: function onUpdate() {
	                        this.target.updateT().updateV();
	                    }
	                });
	                //全景背景缓动
	                for (var i = 0, len = panoBg.children.length; i < len; i++) {
	                    JT.from(panoBg.children[i], 3, {
	                        x: 0,
	                        z: 0,
	                        scaleX: .01,
	                        scaleY: .01,
	                        delay: .05 * i,
	                        ease: JT.Quad.Out,
	                        onUpdate: function onUpdate() {
	                            this.target.updateT();
	                        },
	                        onStart: function onStart() {
	                            this.target.visibility({ alpha: 1 }).updateV();
	                        }
	                    });
	                }
	                //全景元素缓动
	                for (var i = 0, len = panoItems.children.length; i < len; i++) {
	                    JT.from(panoItems.children[i], 2, {
	                        x: 0,
	                        z: 0,
	                        scaleX: .01,
	                        scaleY: .01,
	                        scaleZ: .01,
	                        delay: Math.random() + 2,
	                        ease: JT.Quad.Out,
	                        onUpdate: function onUpdate() {
	                            this.target.updateT();
	                        },
	                        onStart: function onStart() {
	                            this.target.visibility({ alpha: 1 }).updateV();
	                        }
	                    });
	                }
	                //全景元素容器旋转
	                JT.fromTo(panoItems, 4.2, { rotationY: -720 }, {
	                    rotationY: 0,
	                    ease: JT.Quad.Out,
	                    onUpdate: function onUpdate() {
	                        this.target.updateT().updateV();
	                    }
	                }),
	                //显示三角形按钮
	                JT.fromTo(panoDots, 2, { rotationY: -360, alpha: 0 }, {
	                    rotationY: 0,
	                    alpha: 1,
	                    delay: 2,
	                    ease: JT.Quad.Out,
	                    onUpdate: function onUpdate() {
	                        this.target.updateT().updateV();
	                    },
	                    onStart: function onStart() {
	                        this.target.visibility({ alpha: 1 }).updateV();
	                    }
	                }),
	                //显示上下的天空
	                panoSky.visibility({ visible: !0 }).updateV();
	                // 设置背景图
	                var bg = $("#bg");
	                bg.css({ "background-image": 'url("http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/zwj/images/pano/cube/front.jpg")' }), JT.to(bg, 2, { opacity: 1, delay: 2 });
	            }
	            var _self = this;
	            this.stage = root;
	            var count = 20,
	                //图片数量
	            Rect = { w: 2580, h: 1170 },
	                _width = Rect.w / count,
	                radius = 406,
	                //多边形中心点到每条边的垂直距离
	            panoData = [{ url: __webpack_require__(52) }, { url: __webpack_require__(53) }, { url: __webpack_require__(54) }, { url: __webpack_require__(55) }, { url: __webpack_require__(56) }, { url: __webpack_require__(57) }, { url: __webpack_require__(58) }, { url: __webpack_require__(59) }, { url: __webpack_require__(60) }, { url: __webpack_require__(61) }, { url: __webpack_require__(62) }, { url: __webpack_require__(63) }, { url: __webpack_require__(64) }, { url: __webpack_require__(65) }, { url: __webpack_require__(66) }, { url: __webpack_require__(67) }, { url: __webpack_require__(68) }, { url: __webpack_require__(69) }, { url: __webpack_require__(70) }, { url: __webpack_require__(71) }],
	                panoBg = new C3D.Sprite();
	            panoBg.name("panoBg").position(0, 0, 0).update();
	            //20个平面围成一个接近园的多边形柱体
	            for (var i = 0; count > i; i++) {
	                var _panoP = new C3D.Plane(),
	                    //每个面
	                _angle = -360 / count * i,
	                    //每个面要旋转的角度
	                _deg = _angle / 180 * Math.PI,
	                    _r = radius; //形成的圆柱半径
	                _panoP.size(_width, Rect.h).position(Math.sin(_deg) * _r, 0, Math.cos(_deg) * _r).rotation(0, _angle + 180, 0).visibility({ alpha: 0 }).material({ image: panoData[i].url, bothsides: !1 }) //bothsides  BackfaceVisibility=hidden
	                .update(), panoBg.addChild(_panoP);
	                // console.log(parseInt(Math.sin(_deg) * _r)) 
	            }
	            var panoItemsData = [{
	                x: 37, y: 440, w: 202, h: 107,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p1.png",
	                imgs: [__webpack_require__(72), __webpack_require__(73)], l: 10
	            }, {
	                x: 60, y: 451, w: 526, h: 679,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p2.png",
	                imgs: [__webpack_require__(74), __webpack_require__(75), __webpack_require__(76), __webpack_require__(77), __webpack_require__(78)], l: 25
	            }, {
	                x: 512, y: 46, w: 304, h: 220,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p3.png",
	                imgs: [__webpack_require__(79), __webpack_require__(80), __webpack_require__(81), __webpack_require__(82)], l: 15
	            }, { x: 271, y: 37, w: 253, h: 128,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p4.png",
	                imgs: [__webpack_require__(83), __webpack_require__(84), __webpack_require__(85)], l: 20
	            }, { x: 61, y: 868, w: 384, h: 159,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p5.png",
	                imgs: [__webpack_require__(86), __webpack_require__(87), __webpack_require__(88), __webpack_require__(89)], l: 30
	            }, {
	                x: 433, y: 807, w: 531, h: 350,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p6.png",
	                imgs: [__webpack_require__(90), __webpack_require__(91), __webpack_require__(92), __webpack_require__(93), __webpack_require__(94)], l: 10
	            }, { x: 2151, y: 1028, w: 83, h: 95,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p7.png",
	                imgs: [__webpack_require__(95), __webpack_require__(96)], l: 10
	            }, {
	                x: 2292, y: 826, w: 26, h: 52,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p8.png",
	                imgs: [__webpack_require__(97)], l: 5
	            }, {
	                x: 2241, y: 37, w: 260, h: 268,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p9.png",
	                imgs: [__webpack_require__(98), __webpack_require__(99), __webpack_require__(100)], l: 15
	            }, {
	                x: 2288, y: 817, w: 158, h: 151,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p10.png",
	                imgs: [__webpack_require__(101), __webpack_require__(102)], l: 15
	            }, {
	                x: 1775, y: 633, w: 276, h: 410,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p11.png",
	                imgs: [__webpack_require__(103), __webpack_require__(104), __webpack_require__(105)], l: 20
	            }, {
	                x: 2097, y: 745, w: 221, h: 265,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p12.png",
	                imgs: [__webpack_require__(106), __webpack_require__(107)], l: 20
	            }, {
	                x: 2367, y: 388, w: 176, h: 238,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p13.png",
	                imgs: [__webpack_require__(108), __webpack_require__(109)], l: 15
	            }, {
	                x: 933, y: 480, w: 410, h: 547,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p14.png",
	                imgs: [__webpack_require__(110), __webpack_require__(111), __webpack_require__(112), __webpack_require__(113)], l: 25
	            }, {
	                x: 1376, y: 949, w: 366, h: 183,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p15.png",
	                imgs: [__webpack_require__(114), __webpack_require__(115), __webpack_require__(116), __webpack_require__(117)], l: 20
	            }, {
	                x: 1512, y: 323, w: 262, h: 179,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p16.png",
	                imgs: [__webpack_require__(118), __webpack_require__(119), __webpack_require__(120)], l: 25
	            }, {
	                x: 1691, y: 91, w: 253, h: 160,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p17.png",
	                imgs: [__webpack_require__(121), __webpack_require__(122), __webpack_require__(123)], l: 30
	            }, {
	                x: 1187, y: 250, w: 184, h: 196,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p18.png",
	                imgs: [__webpack_require__(124), __webpack_require__(125)], l: 15
	            }, {
	                x: 1230, y: 117, w: 102, h: 99,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p19.png",
	                imgs: [__webpack_require__(126), __webpack_require__(127)], l: 10
	            }, {
	                x: 1056, y: 57, w: 189, h: 188,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p20.png",
	                imgs: [__webpack_require__(128), __webpack_require__(129)], l: 5
	            }, {
	                x: 824, y: 291, w: 170, h: 154,
	                url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p21.png",
	                imgs: [__webpack_require__(130), __webpack_require__(131)], l: 10
	            }],
	                panoItems = new C3D.Sprite();
	            panoItems.name("panoItems").position(0, 0, 0).update(), $.each(panoItemsData, function (index, item) {
	                var itemData = item,
	                    startArea = Math.floor(itemData.x / _width),
	                    endArea = Math.floor((itemData.x + itemData.w) / _width),
	                    panoItem = (itemData.x % _width, new C3D.Sprite());
	                panoItem.visibility({ alpha: 0 }).updateV();
	                for (var i = startArea; i <= endArea; i++) {
	                    var panoItemChild = new C3D.Plane(),
	                        _angle = -360 / count * i,
	                        _deg = _angle / 180 * Math.PI,
	                        _r = radius;
	                    panoItemChild.size(_width, itemData.h).position(Math.sin(_deg) * _r, itemData.y + itemData.h / 2 - Rect.h / 2, Math.cos(_deg) * _r).rotation(0, _angle + 180, 0).material({ image: itemData.imgs[i - startArea], bothsides: !1 }).update(), panoItem.addChild(panoItemChild);
	                }
	                var F = -360 / count * (endArea + startArea) / 2 + 180,
	                    H = F / 180 * Math.PI,
	                    J = itemData.l;
	                panoItem.position(Math.sin(H) * J, 0, Math.cos(H) * J).updateT(), panoItems.addChild(panoItem);
	            });
	            var panoDotsData = [{ name: "labelb", x: 1210, y: 484, dot: __webpack_require__(132), w: 180, h: 48, label: __webpack_require__(133) }, { name: "labels", x: 386, y: 976, dot: __webpack_require__(132), w: 198, h: 48, label: __webpack_require__(134) }, { name: "label1", x: 114, y: 180, dot: __webpack_require__(135), w: 264, h: 47, label: __webpack_require__(136) }, { name: "label2", x: 716, y: 256, dot: __webpack_require__(135), w: 229, h: 48, label: __webpack_require__(137) }, { name: "label3", x: 450, y: 376, dot: __webpack_require__(135), w: 159, h: 48, label: __webpack_require__(138) }, { name: "label4", x: 216, y: 666, dot: __webpack_require__(135), w: 288, h: 48, label: __webpack_require__(139) }, { name: "label5", x: 1034, y: 746, dot: __webpack_require__(140), w: 265, h: 47, label: __webpack_require__(141) }, { name: "label6", x: 1438, y: 558, dot: __webpack_require__(140), w: 287, h: 48, label: __webpack_require__(142) }, { name: "label7", x: 1558, y: 756, dot: __webpack_require__(140), w: 264, h: 48, label: __webpack_require__(143) }, { name: "label8", x: 1168, y: 666, dot: __webpack_require__(140), w: 335, h: 48, label: __webpack_require__(144) }, { name: "label9", x: 2042, y: 338, dot: __webpack_require__(145), w: 201, h: 48, label: __webpack_require__(146) }, { name: "label10", x: 1936, y: 600, dot: __webpack_require__(145), w: 283, h: 48, label: __webpack_require__(147) }, { name: "label11", x: 2104, y: 744, dot: __webpack_require__(145), w: 312, h: 48, label: __webpack_require__(148) }, { name: "label12", x: 2006, y: 904, dot: __webpack_require__(145), w: 206, h: 48, label: __webpack_require__(149) }],
	                panoDots = new C3D.Sprite();
	            panoDots.name("panoDots").visibility({ alpha: 0 }).position(0, 0, 0).update();
	            $.each(panoDotsData, function (index, item) {
	                var itemData = item,
	                    Q = -360 * (itemData.x - 80) / Rect.w,
	                    w = 90 * (itemData.y - Rect.h / 2) / Rect.h,
	                    G = Q / 180 * Math.PI,
	                    M = radius - 80,
	                    h = C3D.create({
	                    type: "sprite",
	                    name: itemData.name,
	                    scale: [.6], children: [{
	                        type: "plane",
	                        name: "dot",
	                        size: [97, 97],
	                        position: [0, 2, 2],
	                        rotation: [w, 0, 0],
	                        material: [{ image: itemData.dot }], bothsides: !1
	                    }, {
	                        type: "plane", name: "label", size: [0, itemData.h],
	                        rotation: [w, 0, 0], origin: [0, 25],
	                        material: [{ image: itemData.label }], bothsides: !1
	                    }]
	                });
	                h.position(Math.sin(G) * M, .9 * (itemData.y - Rect.h / 2), Math.cos(G) * M).rotation(0, Q + 180 - 5, 0).updateT(), h.on("touchend", function () {
	                    _self.trigger("dot", index);
	                }), h.r0 = Q, h.w0 = itemData.w, JT.to(h.dot, .4, {
	                    scaleX: 1.2,
	                    scaleY: 1.2,
	                    yoyo: !0,
	                    repeat: -1,
	                    ease: JT.Quad.InOut,
	                    onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    }
	                }), panoDots.addChild(h);
	            });

	            var panoSky = C3D.create({
	                type: "sprite",
	                name: "panoSky",
	                visibility: [{ visible: !1 }],
	                children: [{ type: "plane", size: [500, 600], position: [0, -700, 0], rotation: [-90, 0, 90], material: [{ image: __webpack_require__(150) }] }, { type: "plane", size: [500, 600], position: [0, 700, 0], rotation: [90, 0, -90], material: [{ image: __webpack_require__(150) }] }]
	            });
	            this.stage.addChild(panoBg), this.stage.addChild(panoItems), this.stage.addChild(panoDots), this.stage.addChild(panoSky), this.tl = JTL.create(), this.tl.add("l1", 0), this.tl.add(function () {
	                panoTween();
	            }, "l1"), this.tl.add(function () {
	                _self.trigger("over");
	            }, "l1+=5");
	        },
	        "in": function _in() {
	            this.tl.play();
	        },
	        out: function out() {}
	    });
	}).call(exports, __webpack_require__(10), __webpack_require__(13), __webpack_require__(11), __webpack_require__(12));

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/8b5d7e94-70.png";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/066aba35-81.png";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/29965790-83.png";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/59ae6a90-84.png";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/6b5d408d-85.png";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/3e631946-86.png";

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/33cf4930-87.png";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/c2191682-88.png";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/a837708d-89.png";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/8266ec8c-71.png";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/43f908b4-72.png";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/bf17a4c5-73.png";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/b2751287-74.png";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/4e89534e-75.png";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/10aad69d-76.png";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/7cb551bf-77.png";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/056b8f38-78.png";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/0ee87510-79.png";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/266ca35e-80.png";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/f98a13b8-82.png";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/8d87d832-90.png";

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/a4a08649-91.png";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/a3c6b8ce-119.png";

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/8ac647a3-120.png";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/e52bc3fc-121.png";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/0d557aab-122.png";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/d39b29ed-123.png";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/9c59ae13-128.png";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/56780f23-129.png";

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/77745f61-130.png";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/9e801400-131.png";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/00efaac0-132.png";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/2aa36491-133.png";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/5be82ddd-134.png";

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/4954cc8b-135.png";

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/cf1965c4-136.png";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/ea69dae9-137.png";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/5e478398-138.png";

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/6992664f-139.png";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/dea355f5-140.png";

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/dc0562ad-141.png";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/9db24bec-142.png";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/fdb9aba6-143.png";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/9d6cf661-144.png";

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/eebde160-145.png";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/8d978ebb-146.png";

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/89287744-147.png";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/414f077c-148.png";

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/b59aaa20-149.png";

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/d59bcce2-92.png";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/8f1ca799-93.png";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/68148a35-94.png";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/ff614d87-95.png";

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/f22c9910-96.png";

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/f551daac-97.png";

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/e7442546-98.png";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/dfd15b0b-99.png";

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/1d84f89f-100.png";

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/a63f5ca4-101.png";

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/b25a46f4-102.png";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/ee0cf7d5-103.png";

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/22b98e93-104.png";

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/22b98e93-105.png";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/f4860b2e-106.png";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/fd521d3c-107.png";

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/847394c7-108.png";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/a8a9ac2f-109.png";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/5f7564a2-110.png";

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/482e4495-111.png";

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/86809669-112.png";

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/a742a9ee-113.png";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/1024fd8a-114.png";

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/a2a3d76b-115.png";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/3cfaf472-116.png";

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/6549ad0d-117.png";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/effad843-118.png";

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/e0a7ccb7-124.png";

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/a7e80ad0-125.png";

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/eefc817f-126.png";

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/0dd2874d-127.png";

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/0fe13ef3-12.png";

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/e2063411-56.png";

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/90bfcca5-62.png";

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/57d02865-6.png";

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/9cf7be2b-63.png";

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/ed91e431-64.png";

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/b79052b6-65.png";

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/b12c8451-66.png";

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/ad798163-7.png";

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/c8e1acde-67.png";

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/15ed39c1-68.png";

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/c63f305e-69.png";

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/986d0163-57.png";

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/9751d81f-5.png";

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/e993fc8c-58.png";

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/cfce55f1-59.png";

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/554d7eaf-60.png";

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/77a7bfa7-61.png";

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/1eccaee3-11.png";

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function (bone, JT) {

	    __webpack_require__(152);
	    var randomObj = __webpack_require__(16);
	    module.exports = bone.extend({}, bone.Events, { isOut: !1,
	        init: function init($main) {
	            var _self = this;
	            this.stage = $main;
	            var _html = __webpack_require__(158);
	            this.stage.append(_html), this.$el = this.stage.find("#pop"), this.bg = this.$el.children(".bg"), this.dots = this.$el.children(".dots"), this.content = this.$el.children(".content"), this.share = this.$el.children(".share"), this.share2 = this.$el.children(".share2"), this.btnClose = this.$el.children(".close"), this.textarea = this.$el.find("textarea"), this.textarea.on("focus", function () {
	                this.innerHTML = "";
	            }).on("blur", function () {
	                "" == this.innerHTML && (this.innerHTML = "要说谁能陪我去造物节一起造，我反正是想不到其他人了，先别废话，来了你就造。＃每个人都是造物者＃");
	            }), this.bg.css({ opacity: 0 }), this.bg.on("touchend", function () {
	                _self.popOff();
	            }), this.btnClose.on("touchend", function () {
	                _self.popOff();
	            });
	            for (var Q = 0; 16 > Q; Q++) {
	                this.dots.append('<div class="dot"></div>');
	            }this.dots.find(".dot").each(function (index, item) {
	                JT.set(item, { x: 0, y: 0, scale: .1, rotationX: 0, rotationY: 0, opacity: 0 });
	            }), JT.set(this.dots, { z: -200 }), JT.set(this.content, { z: 0 }), JT.set(this.btnClose, { z: 50 }), JT.set(this.share, { z: 100 }), JT.set(this.share2, { z: 100 }), this.$el.find(".invitation .btn").on("touchend", function () {
	                _self.shareOn();
	            }), this.share.on("touchend", function () {
	                _self.shareOff();
	            }), this.share2.on("touchend", function () {
	                _self.share2Off(), _self.popOff();
	            });
	        },
	        curContent: null,
	        popOn: function popOn(A) {
	            switch (this.trigger("popOn"), this.$el.css({ display: "block" }), JT.to(this.bg, .3, { opacity: .8 }), A) {
	                case 0:
	                    this.curContent = this.$el.find(".code");
	                    break;
	                case 1:
	                    window.ua.weixin ? this.curContent = this.$el.find(".invitation") : this.share2On();
	                    break;
	                default:
	                    this.curContent = this.$el.find(".other"), this.curContent.html('<img class="info" src="http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/zwj/images/pop/' + (A + 1) + '/info.jpg" />');
	            }
	            this.curContent && (this.dotsOn(), JT.fromTo(this.btnClose, .3, { rotation: -180, opacity: 0 }, {
	                rotation: 0,
	                opacity: 1,
	                ease: JT.Quad.Out,
	                onStart: function onStart() {
	                    this.target.style.display = "block";
	                }
	            }), JT.to(this.curContent, .3, {
	                opacity: 1,
	                onStart: function onStart() {
	                    this.target.style.display = "block";
	                }
	            }));
	        },
	        popOff: function popOff() {
	            var _self = this;
	            JT.to(this.bg, .3, { opacity: 0,
	                onEnd: function onEnd() {
	                    _self.$el.css({ display: "none" }), _self.trigger("popOff");
	                }
	            }), this.curContent && (this.dotsOff(), JT.to(this.btnClose, .3, {
	                rotation: 180,
	                opacity: 0,
	                ease: JT.Quad.In,
	                onEnd: function onEnd() {
	                    this.target.style.display = "none";
	                }
	            }), JT.to(this.curContent, .3, {
	                opacity: 0,
	                onEnd: function onEnd() {
	                    this.target.style.display = "none", _self.curContent = null;
	                }
	            }));
	        },
	        dotsOn: function dotsOn() {
	            this.dots.find(".dot").each(function (index, item) {
	                var g = randomObj.getRandom(-400, 400),
	                    Q = randomObj.getRandom(-500, 500),
	                    I = 2 * Math.random(),
	                    w = randomObj.getRandom(-90, 90),
	                    D = randomObj.getRandom(-90, 90),
	                    G = Math.random() + .5;
	                JT.kill(item), JT.to(item, .3, {
	                    x: g / 2,
	                    y: Q / 2,
	                    scale: I / 2,
	                    rotationX: w / 2,
	                    rotationY: D / 2,
	                    opacity: G / 2,
	                    ease: JT.Quad.Out
	                }), JT.call(.25, function () {
	                    JT.kill(item), JT.to(item, 5, { x: g, y: Q, scale: I, rotationX: w, rotationY: D, opacity: G, ease: JT.Quad.Out });
	                });
	            });
	        },
	        dotsOff: function dotsOff() {
	            this.dots.find(".dot").each(function (index, item) {
	                JT.kill(item), JT.to(item, .3, { x: 0, y: 0, scale: .1, rotationY: 90, opacity: 0, ease: JT.Quad.Out });
	            });
	        },
	        shareOn: function shareOn() {
	            JT.to(this.$el.find(".share"), .3, { opacity: 1, onStart: function onStart() {
	                    this.target.style.display = "block";
	                } });
	        },
	        shareOff: function shareOff() {
	            JT.to(this.$el.find(".share"), .3, { opacity: 0, onEnd: function onEnd() {
	                    this.target.style.display = "none";
	                } });
	        },
	        share2On: function share2On() {
	            JT.to(this.$el.find(".share2"), .3, { opacity: 1, onStart: function onStart() {
	                    this.target.style.display = "block";
	                } });
	        },
	        share2Off: function share2Off() {
	            JT.to(this.$el.find(".share2"), .3, { opacity: 0, onEnd: function onEnd() {
	                    this.target.style.display = "none";
	                } });
	        }
	    });
	}).call(exports, __webpack_require__(10), __webpack_require__(11));

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./popup.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./popup.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "#pop,\r\n#pop>.bg {\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%\r\n}\r\n\r\n#pop {\r\n    position: absolute;\r\n    width: 640px;\r\n    display: none;\r\n    z-index: 100\r\n}\r\n\r\n#pop>.bg {\r\n    position: absolute;\r\n    width: 100%;\r\n    background: #000;\r\n    opacity: 1\r\n}\r\n\r\n#pop .close,\r\n#pop .content,\r\n#pop .share {\r\n    display: none;\r\n    opacity: 0\r\n}\r\n\r\n#pop .content,\r\n#pop .dots {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%\r\n}\r\n\r\n#pop .dots .dot {\r\n    position: absolute;\r\n    width: 100px;\r\n    height: 100px;\r\n    background: url(" + __webpack_require__(17) + ");\r\n    margin: -50px 0 0 -50px\r\n}\r\n\r\n#pop .code div,\r\n#pop .other .info {\r\n    position: absolute;\r\n    left: -211px;\r\n    top: -283px;\r\n    width: 422px;\r\n    height: 566px\r\n}\r\n\r\n#pop .code .p2 {\r\n    background: url(" + __webpack_require__(154) + ")\r\n}\r\n\r\n#pop .invitation .bg {\r\n    position: absolute;\r\n    left: -249px;\r\n    top: -375px;\r\n    width: 498px;\r\n    height: 699px;\r\n    background: url(" + __webpack_require__(155) + ")\r\n}\r\n\r\n#pop .invitation .avatar {\r\n    position: absolute;\r\n    width: 96px;\r\n    height: 96px;\r\n    left: -48px;\r\n    top: -276px;\r\n    -webkit-border-radius: 50px;\r\n    overflow: hidden\r\n}\r\n\r\n#pop .invitation .avatar img {\r\n    width: 100%;\r\n    height: 100%\r\n}\r\n\r\n#pop .invitation .title,\r\n#pop .invitation textarea {\r\n    position: absolute;\r\n    width: 300px;\r\n    left: -150px;\r\n    text-align: center\r\n}\r\n\r\n#pop .invitation .title {\r\n    top: -125px;\r\n    font-size: 40px;\r\n    line-height: 40px;\r\n    height: 40px\r\n}\r\n\r\n#pop .invitation textarea {\r\n    border: 0;\r\n    height: 240px;\r\n    top: -70px;\r\n    font-size: 22px;\r\n    line-height: 36px;\r\n    resize: none;\r\n    color: #a3a3a3\r\n}\r\n\r\n#pop .invitation .btn {\r\n    position: absolute;\r\n    left: -212px;\r\n    top: 340px;\r\n    width: 424px;\r\n    height: 78px;\r\n    background: url(" + __webpack_require__(156) + ")\r\n}\r\n\r\n#pop .close {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    width: 73px;\r\n    height: 73px;\r\n    background: url(" + __webpack_require__(39) + ");\r\n    margin: 250px 0 0 -36px\r\n}\r\n\r\n#pop .share,\r\n#pop .share>.bg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%\r\n}\r\n\r\n#pop .share>.bg {\r\n    background: #000;\r\n    opacity: .8\r\n}\r\n\r\n#pop .share .t1 {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 20px;\r\n    width: 234px;\r\n    height: 96px;\r\n    background: url(" + __webpack_require__(157) + ")\r\n}\r\n\r\n#pop .share2,\r\n#pop .share2>.bg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%\r\n}\r\n\r\n#pop .share2 {\r\n    opacity: 0;\r\n    display: none\r\n}\r\n\r\n#pop .share2 .t1 {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 20px;\r\n    width: 234px;\r\n    height: 96px;\r\n    background: url(" + __webpack_require__(157) + ")\r\n}\r\n", ""]);

	// exports


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/e756e9de-tao.png";

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/fe25d3b7-who.png";

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/90bfcca5-yaoqinghan.png";

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/69e1c25e-inviteFriend.png";

/***/ },
/* 158 */
/***/ function(module, exports) {

	'use strict';

	module.exports = '<div id=pop><div class=bg></div><div class=dots></div><div class="content other"></div><div class="content invitation"><div class=bg></div><div class=avatar></div><p class=title></p><textarea maxlength=60>要说谁能陪我去造物节一起造，我反正是想不到其他人了，先别废话，来了你就造。＃每个人都是造物者＃</textarea><div class=btn></div></div><div class="content code"><div class=p2></div></div><div class=close></div><div class=share><div class=bg></div><div class=t1></div></div><div class=share2><div class=bg></div><div class=t1></div></div></div>';

/***/ }
]));