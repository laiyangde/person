/*! create by laiyangde */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".js/" + ({}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var require;'use strict';

	// require.ensure([], function(require){
	//     require('../images/1.png')
	// });
	__webpack_require__(1);
	(function (bone, C3D, JT) {
	    __webpack_require__(9);
	    __webpack_require__(10);
	    __webpack_require__(11);
	    __webpack_require__(12);
	    __webpack_require__(13);
	    __webpack_require__(14);
	    var nav,
	        //导航模块
	    Pano,
	        //全景模块
	    popup,
	        //弹窗模块
	    startAnimate = __webpack_require__(15),
	        //开始的缓动动画
	    addTouch = __webpack_require__(30),
	        //绑定touch事件  判断手势
	    randomObj = __webpack_require__(16),
	        //获取随机数
	    startObj = bone.extend({}, bone.Events, {
	        init: function init() {
	            this.$main = $("#main");
	            //没有做任何操作，猜测是一种设计模式，防止后期加东西好维护
	            randomObj.init();
	            //绑定触摸事件
	            addTouch.init(this.$main);
	            //建立舞台并设置尺寸
	            this.stage = new C3D.Stage({ el: $("#three")[0] });
	            this.stage.size(640, window.innerHeight).update();
	            //创建一个三维容器（创建以方便分组使用）
	            this.root = new C3D.Sprite();
	            this.root.position(0, 0, -600).update();
	            this.stage.addChild(this.root);
	            //初始化缓动动画
	            startAnimate.init(this.root);
	            //更新舞台尺寸
	            this.resize();
	            this.ready();
	        },
	        resize: function resize() {
	            var self = this;
	            setTimeout(function () {
	                self.stage.size(640, window.innerHeight).update();
	            }, 500);
	        },
	        isReady: false,
	        ready: function ready() {
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
	                !function () {
	                    __webpack_require__.e/* nsure */(1, function (require) {
	                        var arr = [__webpack_require__(31), __webpack_require__(51), __webpack_require__(151)];
	                        (function (_nav, _Pano, _popup) {
	                            nav = _nav, Pano = _Pano, popup = _popup, _self.complete();
	                        }).apply(null, arr);
	                    });
	                }(require);
	            }
	        },
	        complete: function complete() {
	            function start() {
	                isLockMove = false, loop();
	            }

	            function cancelAni() {
	                isLockMove = true, requestID && cancelAnimationFrame(requestID);
	            }

	            function loop() {
	                requestID = requestAnimationFrame(loop);
	                var lons = (d.lon + f.lon + c.lon) % 360,
	                    lats = .35 * (d.lat + f.lat + c.lat);
	                //旋转一周后重置  lons有%360 所以这里需要重置下
	                lons - startObj.root.panoBg.rotationY > 180 && (startObj.root.panoBg.rotationY += 360), lons - startObj.root.panoBg.rotationY < -180 && (startObj.root.panoBg.rotationY -= 360);

	                var n = lons - startObj.root.panoBg.rotationY,
	                    a = lats - startObj.root.panoBg.rotationX;
	                Math.abs(n) < .1 ? startObj.root.panoBg.rotationY = lons : startObj.root.panoBg.rotationY += .3 * n, Math.abs(a) < .1 ? startObj.root.panoBg.rotationX = lats : startObj.root.panoBg.rotationX += .15 * a, startObj.root.panoBg.updateT(), startObj.root.panoDots.rotationY = startObj.root.panoBg.rotationY, startObj.root.panoDots.rotationX = startObj.root.panoBg.rotationX, startObj.root.panoDots.updateT(), startObj.root.panoSky.rotationY = startObj.root.panoBg.rotationY - 90, startObj.root.panoSky.rotationX = startObj.root.panoBg.rotationX, startObj.root.panoSky.updateT(), lons - startObj.root.panoItems.rotationY > 180 && (startObj.root.panoItems.rotationY += 360), lons - startObj.root.panoItems.rotationY < -180 && (startObj.root.panoItems.rotationY -= 360);
	                var o = lons - startObj.root.panoItems.rotationY,
	                    r = lats - startObj.root.panoItems.rotationX;
	                Math.abs(o) < .1 ? startObj.root.panoItems.rotationY = lons : startObj.root.panoItems.rotationY += .25 * o, Math.abs(r) < .1 ? startObj.root.panoItems.rotationX = lats : startObj.root.panoItems.rotationX += .15 * r, startObj.root.panoItems.updateT();

	                var s = -150 - 20 * Math.abs(n);
	                startObj.root.z += .1 * (s - startObj.root.z), startObj.root.updateT(), showDotsTitle(startObj.root.panoDots.rotationY);
	            }

	            function showDotsTitle(rotateY) {
	                var i = (-180 - rotateY) % 360;
	                i = i > 0 ? i - 360 : i;
	                for (var i = 0, len = startObj.root.panoDots.children.length; i < len; i++) {
	                    var child = startObj.root.panoDots.children[i];
	                    child.r0 > i - 5 && child.r0 < i + 25 ? 0 == child.label.width && (JT.kill(child.label), JT.to(child.label, .3, {
	                        width: child.w0,
	                        ease: JT.Quad.Out,
	                        onUpdate: function onUpdate() {
	                            this.target.updateS();
	                        }
	                    })) : child.label.width == child.w0 && (JT.kill(child.label), JT.to(child.label, .3, { width: 0, ease: JT.Quad.Out, onUpdate: function onUpdate() {
	                            this.target.updateS();
	                        } }));
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
	            startAnimate.on("out", function () {
	                JT.to(_self.root, 4, { z: -150, ease: JT.Quad.InOut, onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    } }), JT.to(_self.stage.camera, 4, { fov: 60, ease: JT.Quad.InOut, onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    } }), Pano["in"]();
	            });
	            nav.on("navOn", function () {
	                cancelAni(), JT.to(_self.stage.el, .3, { x: -200, ease: JT.Quad.Out });
	            });
	            nav.on("navOff", function () {
	                start(), JT.to(_self.stage.el, .3, { x: 0, ease: JT.Quad.Out });
	            }), nav.on("item", function (t) {
	                popup.popOn(t);
	            });
	            Pano.on("over", function () {
	                start(), nav.$el.css({ display: "block" }), "invitation" == window.ups.act && popup.popOn(1);
	            });
	            Pano.on("dot", function (t) {
	                popup.popOn(t);
	            }), popup.on("popOn", function () {
	                cancelAni();
	            }), popup.on("popOff", function () {
	                start();
	            });
	            //通过触发touch 移动
	            var c = { lon: 0, lat: 0 };
	            addTouch.on("move", function (t) {
	                //ax ay是实时移动距离
	                isLockMove || (c.lon = (c.lon - .2 * t.ax) % 360, c.lat = Math.max(-90, Math.min(90, c.lat + .2 * t.ay)));
	            });
	            var requestID,

	            //通过陀螺仪移动
	            d = { lat: 0, lon: 0 },
	                f = { lon: 0, lat: 0 },
	                isLockMove = true,
	                orienter = new Orienter();
	            orienter.onOrient = function (t) {
	                d.lat = t.lat, d.lon = -t.lon,
	                //如果isLockMove 设置f和d相反
	                isLockMove && (f.lat = -d.lat, f.lon = -d.lon);
	            }, orienter.init();
	        }
	    });
	    startObj.init();
	}).call(exports, __webpack_require__(10), __webpack_require__(13), __webpack_require__(11));

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = window.$;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * VERSION: 0.3.0
	 * DATE: 2016-11-22
	 * GIT: https://github.com/shrekshrek/bone
	 * @author: Shrek.wang
	 **/

	(function (factory) {

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(9), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, exports) {
	            window.Bone = factory(exports, $);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        var $ = require('$');
	        factory(exports, $);
	    } else {
	        window.Bone = factory({}, window.$);
	    }
	})(function (Bone, $) {

	    var slice = [].slice;

	    Bone.$ = $;

	    // other function
	    // ---------------

	    var isFunction = function isFunction(obj) {
	        return typeof obj == 'function' || false;
	    };

	    var result = function result(object, property, fallback) {
	        var value = object == null ? void 0 : object[property];
	        if (value === void 0) {
	            value = fallback;
	        }
	        return isFunction(value) ? value.call(object) : value;
	    };

	    var bind = function bind(func, context) {
	        return Function.prototype.bind.apply(func, slice.call(arguments, 1));
	    };

	    Bone.bind = bind;

	    var extend = function extend(obj) {
	        var length = arguments.length;
	        if (length < 2 || obj == null) return obj;
	        for (var index = 1; index < length; index++) {
	            var source = arguments[index],
	                ks = keys(source),
	                l = ks.length;
	            for (var i = 0; i < l; i++) {
	                var key = ks[i];
	                obj[key] = source[key];
	            }
	        }
	        return obj;
	    };

	    Bone.extend = extend;

	    var keys = function keys(obj) {
	        var keys = [];
	        for (var key in obj) {
	            keys.push(key);
	        }
	        return keys;
	    };

	    var size = function size(obj) {
	        if (obj == null) return 0;
	        return obj.length !== undefined ? obj.length : keys(obj).length;
	    };

	    var isEmpty = function isEmpty(obj) {
	        if (obj == null) return true;
	        if (obj.length !== undefined) return obj.length === 0;
	        return keys(obj).length === 0;
	    };

	    var idCounter = 0;
	    var uniqueId = function uniqueId(prefix) {
	        var id = ++idCounter + '';
	        return prefix ? prefix + id : id;
	    };

	    // Bone.Events
	    // ---------------

	    //     var object = {};
	    //     Bone.extend(object, Bone.Events);
	    //     object.on('expand', function(){ alert('expanded'); });
	    //     object.trigger('expand');

	    var Events = Bone.Events = {};

	    var eventSplitter = /\s+/;

	    var eventsApi = function eventsApi(iteratee, memo, name, callback, opts) {
	        var i = 0,
	            names;
	        if (name && (typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	            if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
	            for (names = keys(name); i < names.length; i++) {
	                memo = iteratee(memo, names[i], name[names[i]], opts);
	            }
	        } else if (name && eventSplitter.test(name)) {
	            for (names = name.split(eventSplitter); i < names.length; i++) {
	                memo = iteratee(memo, names[i], callback, opts);
	            }
	        } else {
	            memo = iteratee(memo, name, callback, opts);
	        }
	        return memo;
	    };

	    Events.on = function (name, callback, context) {
	        return internalOn(this, name, callback, context);
	    };

	    var internalOn = function internalOn(obj, name, callback, context, listening) {
	        obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
	            context: context,
	            ctx: obj,
	            listening: listening
	        });

	        if (listening) {
	            var listeners = obj._listeners || (obj._listeners = {});
	            listeners[listening.id] = listening;
	        }

	        return obj;
	    };

	    Events.listenTo = function (obj, name, callback) {
	        if (!obj) return this;
	        var id = obj._listenId || (obj._listenId = uniqueId('l'));
	        var listeningTo = this._listeningTo || (this._listeningTo = {});
	        var listening = listeningTo[id];

	        if (!listening) {
	            var thisId = this._listenId || (this._listenId = uniqueId('l'));
	            listening = listeningTo[id] = { obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0 };
	        }

	        internalOn(obj, name, callback, this, listening);
	        return this;
	    };

	    var onApi = function onApi(events, name, callback, options) {
	        if (callback) {
	            var handlers = events[name] || (events[name] = []);
	            var context = options.context,
	                ctx = options.ctx,
	                listening = options.listening;
	            if (listening) listening.count++;

	            handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
	        }
	        return events;
	    };

	    Events.off = function (name, callback, context) {
	        if (!this._events) return this;
	        this._events = eventsApi(offApi, this._events, name, callback, {
	            context: context,
	            listeners: this._listeners
	        });
	        return this;
	    };

	    Events.stopListening = function (obj, name, callback) {
	        var listeningTo = this._listeningTo;
	        if (!listeningTo) return this;

	        var ids = obj ? [obj._listenId] : keys(listeningTo);

	        for (var i = 0; i < ids.length; i++) {
	            var listening = listeningTo[ids[i]];

	            if (!listening) break;

	            listening.obj.off(name, callback, this);
	        }
	        if (isEmpty(listeningTo)) this._listeningTo = void 0;

	        return this;
	    };

	    var offApi = function offApi(events, name, callback, options) {
	        if (!events) return;

	        var i = 0,
	            listening;
	        var context = options.context,
	            listeners = options.listeners;

	        if (!name && !callback && !context) {
	            var ids = keys(listeners);
	            for (; i < ids.length; i++) {
	                listening = listeners[ids[i]];
	                delete listeners[listening.id];
	                delete listening.listeningTo[listening.objId];
	            }
	            return;
	        }

	        var names = name ? [name] : keys(events);
	        for (; i < names.length; i++) {
	            name = names[i];
	            var handlers = events[name];

	            if (!handlers) break;

	            var remaining = [];
	            for (var j = 0; j < handlers.length; j++) {
	                var handler = handlers[j];
	                if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
	                    remaining.push(handler);
	                } else {
	                    listening = handler.listening;
	                    if (listening && --listening.count === 0) {
	                        delete listeners[listening.id];
	                        delete listening.listeningTo[listening.objId];
	                    }
	                }
	            }

	            if (remaining.length) {
	                events[name] = remaining;
	            } else {
	                delete events[name];
	            }
	        }
	        if (size(events)) return events;
	    };

	    Events.once = function (name, callback, context) {
	        var events = eventsApi(onceMap, {}, name, callback, bind(this.off, this));
	        return this.on(events, void 0, context);
	    };

	    Events.listenToOnce = function (obj, name, callback) {
	        var events = eventsApi(onceMap, {}, name, callback, bind(this.stopListening, this, obj));
	        return this.listenTo(obj, events);
	    };

	    var onceMap = function onceMap(map, name, callback, offer) {
	        if (callback) {
	            var once = map[name] = function () {
	                offer(name, once);
	                callback.apply(this, arguments);
	            };
	            once._callback = callback;
	        }
	        return map;
	    };

	    Events.trigger = function (name) {
	        if (!this._events) return this;

	        var length = Math.max(0, arguments.length - 1);
	        var args = Array(length);
	        for (var i = 0; i < length; i++) {
	            args[i] = arguments[i + 1];
	        }eventsApi(triggerApi, this._events, name, void 0, args);
	        return this;
	    };

	    var triggerApi = function triggerApi(objEvents, name, cb, args) {
	        if (objEvents) {
	            var events = objEvents[name];
	            var allEvents = objEvents.all;
	            if (events && allEvents) allEvents = allEvents.slice();
	            if (events) triggerEvents(events, args);
	            if (allEvents) triggerEvents(allEvents, [name].concat(args));
	        }
	        return objEvents;
	    };

	    var triggerEvents = function triggerEvents(events, args) {
	        var ev,
	            i = -1,
	            l = events.length,
	            a1 = args[0],
	            a2 = args[1],
	            a3 = args[2];
	        switch (args.length) {
	            case 0:
	                while (++i < l) {
	                    (ev = events[i]).callback.call(ev.ctx);
	                }return;
	            case 1:
	                while (++i < l) {
	                    (ev = events[i]).callback.call(ev.ctx, a1);
	                }return;
	            case 2:
	                while (++i < l) {
	                    (ev = events[i]).callback.call(ev.ctx, a1, a2);
	                }return;
	            case 3:
	                while (++i < l) {
	                    (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
	                }return;
	            default:
	                while (++i < l) {
	                    (ev = events[i]).callback.apply(ev.ctx, args);
	                }return;
	        }
	    };

	    extend(Bone, Events);

	    // Bone.Class
	    // ---------------

	    var Class = Bone.Class = function (options) {
	        this.initialize.apply(this, arguments);
	    };

	    extend(Class.prototype, Events, {
	        initialize: function initialize() {}
	    });

	    // Bone.View
	    // ---------------

	    var View = Bone.View = function (options) {
	        this.cid = uniqueId('view');
	        options || (options = {});
	        for (var i in viewOptions) {
	            if (options[viewOptions[i]]) this[viewOptions[i]] = options[viewOptions[i]];
	        }
	        this._ensureElement();
	        this.initialize.apply(this, arguments);
	    };

	    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	    var viewOptions = ['el', 'id', 'attributes', 'className', 'tagName', 'events'];

	    extend(View.prototype, Events, {
	        tagName: 'div',

	        $: function $(selector) {
	            return this.$el.find(selector);
	        },

	        initialize: function initialize() {},

	        render: function render() {
	            return this;
	        },

	        remove: function remove() {
	            this._removeElement();
	            this.stopListening();
	            return this;
	        },

	        _removeElement: function _removeElement() {
	            this.$el.remove();
	        },

	        setElement: function setElement(element) {
	            this.undelegateEvents();
	            this._setElement(element);
	            this.delegateEvents();
	            return this;
	        },

	        _setElement: function _setElement(el) {
	            this.$el = el instanceof Bone.$ ? el : Bone.$(el);
	            this.el = this.$el[0];
	        },

	        delegateEvents: function delegateEvents(events) {
	            events || (events = result(this, 'events'));
	            if (!events) return this;
	            this.undelegateEvents();
	            for (var key in events) {
	                var method = events[key];
	                if (!isFunction(method)) method = this[method];
	                if (!method) continue;
	                var match = key.match(delegateEventSplitter);
	                this.delegate(match[1], match[2], bind(method, this));
	            }
	            return this;
	        },

	        delegate: function delegate(eventName, selector, listener) {
	            this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
	            return this;
	        },

	        undelegateEvents: function undelegateEvents() {
	            if (this.$el) this.$el.off('.delegateEvents' + this.cid);
	            return this;
	        },

	        undelegate: function undelegate(eventName, selector, listener) {
	            this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
	            return this;
	        },

	        _createElement: function _createElement(tagName) {
	            return document.createElement(tagName);
	        },

	        _ensureElement: function _ensureElement() {
	            if (!this.el) {
	                var attrs = extend({}, result(this, 'attributes'));
	                if (this.id) attrs.id = result(this, 'id');
	                if (this.className) attrs['class'] = result(this, 'className');
	                this.setElement(this._createElement(result(this, 'tagName')));
	                this._setAttributes(attrs);
	            } else {
	                this.setElement(result(this, 'el'));
	            }
	        },

	        _setAttributes: function _setAttributes(attributes) {
	            this.$el.attr(attributes);
	        }

	    });

	    // Bone.Router
	    // ---------------

	    var Router = Bone.Router = function (options) {
	        options || (options = {});
	        if (options.routes) this.routes = options.routes;
	        this._bindRoutes();
	        this.initialize.apply(this, arguments);
	    };

	    var optionalParam = /\((.*?)\)/g;
	    var namedParam = /(\(\?)?:\w+/g;
	    var splatParam = /\*\w+/g;
	    var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	    extend(Router.prototype, Events, {

	        initialize: function initialize() {},

	        route: function route(_route, name, callback) {
	            _route = this._routeToRegExp(_route);
	            if (isFunction(name)) {
	                callback = name;
	                name = '';
	            }
	            if (!callback) callback = this[name];
	            var router = this;
	            Bone.history.route(_route, function (fragment) {
	                var args = router._extractParameters(_route, fragment);
	                if (router.execute(callback, args, name) !== false) {
	                    router.trigger.apply(router, ['route:' + name].concat(args));
	                    router.trigger('route', name, args);
	                    Bone.history.trigger('route', router, name, args);
	                }
	            });
	            return this;
	        },

	        execute: function execute(callback, args, name) {
	            if (callback) callback.apply(this, args);
	        },

	        navigate: function navigate(fragment, options) {
	            Bone.history.navigate(fragment, options);
	            return this;
	        },

	        _bindRoutes: function _bindRoutes() {
	            if (!this.routes) return;
	            var route,
	                routes = keys(this.routes);
	            while ((route = routes.pop()) != null) {
	                this.route(route, this.routes[route]);
	            }
	        },

	        _routeToRegExp: function _routeToRegExp(route) {
	            route = route.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
	                return optional ? match : '([^/?]+)';
	            }).replace(splatParam, '([^?]*?)');
	            return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	        },

	        _extractParameters: function _extractParameters(route, fragment) {
	            var params = route.exec(fragment).slice(1);
	            var _p = [];
	            for (var i in params) {
	                var param = params[i];
	                if (i === params.length - 1) _p[i] = param || null;else _p[i] = param ? decodeURIComponent(param) : null;
	            }
	            return _p;
	        }

	    });

	    // Bone.History
	    // ----------------

	    var History = Bone.History = function () {
	        this.handlers = [];
	        this.checkUrl = bind(this.checkUrl, this);

	        if (typeof window !== 'undefined') {
	            this.location = window.location;
	            this.history = window.history;
	        }
	    };

	    var routeStripper = /^[#\/]|\s+$/g;

	    var rootStripper = /^\/+|\/+$/g;

	    var pathStripper = /#.*$/;

	    History.started = false;

	    extend(History.prototype, Events, {
	        atRoot: function atRoot() {
	            var path = this.location.pathname.replace(/[^\/]$/, '$&/');
	            return path === this.root && !this.getSearch();
	        },

	        matchRoot: function matchRoot() {
	            var path = this.decodeFragment(this.location.pathname);
	            var root = path.slice(0, this.root.length - 1) + '/';
	            return root === this.root;
	        },

	        decodeFragment: function decodeFragment(fragment) {
	            return decodeURI(fragment.replace(/%25/g, '%2525'));
	        },

	        getSearch: function getSearch() {
	            var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
	            return match ? match[0] : '';
	        },

	        getHash: function getHash(window) {
	            var match = (window || this).location.href.match(/#(.*)$/);
	            return match ? match[1] : '';
	        },

	        getPath: function getPath() {
	            var path = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
	            return path.charAt(0) === '/' ? path.slice(1) : path;
	        },

	        getFragment: function getFragment(fragment) {
	            if (fragment == null) {
	                if (this._usePushState || !this._wantsHashChange) {
	                    fragment = this.getPath();
	                } else {
	                    fragment = this.getHash();
	                }
	            }
	            return fragment.replace(routeStripper, '');
	        },

	        start: function start(options) {
	            if (History.started) throw new Error("Bone.history has already been started");
	            History.started = true;

	            this.options = extend({ root: '/' }, this.options, options);
	            this.root = this.options.root;
	            this._wantsHashChange = this.options.hashChange !== false;
	            this._hasHashChange = 'onhashchange' in window;
	            this._useHashChange = this._wantsHashChange && this._hasHashChange;
	            this._wantsPushState = !!this.options.pushState;
	            this._hasPushState = !!(this.history && this.history.pushState);
	            this._usePushState = this._wantsPushState && this._hasPushState;
	            this.fragment = this.getFragment();

	            this.root = ('/' + this.root + '/').replace(rootStripper, '/');

	            if (this._wantsHashChange && this._wantsPushState) {
	                if (!this._hasPushState && !this.atRoot()) {
	                    var root = this.root.slice(0, -1) || '/';
	                    this.location.replace(root + '#' + this.getPath());
	                    return true;
	                } else if (this._hasPushState && this.atRoot()) {
	                    this.navigate(this.getHash(), { replace: true });
	                }
	            }

	            var addEventListener = window.addEventListener || function (eventName, listener) {
	                return attachEvent('on' + eventName, listener);
	            };

	            if (this._usePushState) {
	                addEventListener('popstate', this.checkUrl, false);
	            } else if (this._useHashChange) {
	                addEventListener('hashchange', this.checkUrl, false);
	            }

	            if (!this.options.silent) return this.loadUrl();
	        },

	        stop: function stop() {
	            var removeEventListener = window.removeEventListener || function (eventName, listener) {
	                return detachEvent('on' + eventName, listener);
	            };

	            if (this._usePushState) {
	                removeEventListener('popstate', this.checkUrl, false);
	            } else if (this._useHashChange) {
	                removeEventListener('hashchange', this.checkUrl, false);
	            }

	            if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	            History.started = false;
	        },

	        route: function route(_route2, callback) {
	            this.handlers.unshift({ route: _route2, callback: callback });
	        },

	        checkUrl: function checkUrl(e) {
	            var current = this.getFragment();
	            if (current === this.fragment) return false;
	            this.loadUrl();
	        },

	        loadUrl: function loadUrl(fragment) {
	            if (!this.matchRoot()) return false;
	            fragment = this.fragment = this.getFragment(fragment);
	            for (var i in this.handlers) {
	                var handler = this.handlers[i];
	                if (handler.route.test(fragment)) {
	                    handler.callback(fragment);
	                    return true;
	                }
	            }
	        },

	        navigate: function navigate(fragment, options) {
	            if (!History.started) return false;
	            if (!options || options === true) options = { trigger: !!options };

	            fragment = fragment.replace(pathStripper, '');

	            var root = this.root;
	            if (fragment === '' || fragment.charAt(0) === '?') {
	                root = root.slice(0, -1) || '/';
	            }
	            var url = root + fragment;

	            fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

	            if (this.fragment === fragment) return;
	            this.fragment = fragment;

	            if (this._usePushState) {
	                this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);
	            } else if (this._wantsHashChange) {
	                this._updateHash(this.location, fragment, options.replace);
	            } else {
	                return this.location.assign(url);
	            }
	            if (options.trigger) return this.loadUrl(fragment);
	        },

	        _updateHash: function _updateHash(location, fragment, replace) {
	            if (replace) {
	                var href = location.href.replace(/(javascript:|#).*$/, '');
	                location.replace(href + '#' + fragment);
	            } else {
	                location.hash = '#' + fragment;
	            }
	        }

	    });

	    Bone.history = new History();

	    // extend
	    // ----------------

	    var extend2 = function extend2(protoProps, staticProps) {
	        var parent = this;
	        var child;

	        if (protoProps && Object.prototype.hasOwnProperty.call(protoProps, 'constructor')) {
	            child = protoProps.constructor;
	        } else {
	            child = function child() {
	                return parent.apply(this, arguments);
	            };
	        }

	        extend(child, parent, staticProps);

	        var Surrogate = function Surrogate() {
	            this.constructor = child;
	        };
	        Surrogate.prototype = parent.prototype;
	        child.prototype = new Surrogate();

	        if (protoProps) extend(child.prototype, protoProps);

	        child.__super__ = parent.prototype;

	        return child;
	    };

	    Router.extend = History.extend = Class.extend = View.extend = extend2;

	    return Bone;
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * VERSION: 0.7.0
	 * DATE: 2016-8-17
	 * GIT: https://github.com/shrekshrek/jstween
	 * @author: Shrek.wang
	 **/

	(function (factory) {

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	            window.JT = factory(exports);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        factory(exports);
	    } else {
	        window.JT = factory({});
	    }
	})(function (JT) {
	    // --------------------------------------------------------------------辅助方法
	    function extend(obj, obj2) {
	        for (var prop in obj2) {
	            obj[prop] = obj2[prop];
	        }
	    }

	    function each(obj, callback) {
	        if (obj.length && obj.length > 0) {
	            for (var i = 0; i < obj.length; i++) {
	                callback.call(obj[i], i, obj[i]);
	            }
	        } else {
	            callback.call(obj, 0, obj);
	        }
	    }

	    //  WebkitTransform 转 -webkit-transform
	    function hyphenize(str) {
	        return str.replace(/([A-Z])/g, "-$1").toLowerCase();
	    }

	    //  webkitTransform 转 WebkitTransform
	    function firstUper(str) {
	        return str.replace(/\b(\w)|\s(\w)/g, function (m) {
	            return m.toUpperCase();
	        });
	    }

	    function fixed3(n) {
	        return Math.round(n * 1000) / 1000;
	    }

	    // --------------------------------------------------------------------time fix
	    Date.now = Date.now || function () {
	        return new Date().getTime();
	    };

	    var nowOffset = Date.now();

	    var now = function now() {
	        return Date.now() - nowOffset;
	    };

	    // --------------------------------------------------------------------prefix
	    var prefix = '';

	    (function () {
	        var _d = document.createElement('div');
	        var _prefixes = ['Webkit', 'Moz', 'Ms', 'O'];

	        for (var i in _prefixes) {
	            if (_prefixes[i] + 'Transform' in _d.style) {
	                prefix = _prefixes[i];
	                break;
	            }
	        }
	    })();

	    function browserPrefix(str) {
	        if (str) {
	            return prefix + firstUper(str);
	        } else {
	            return prefix;
	        }
	    }

	    var requestFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	        window.setTimeout(callback, 1000 / 60);
	    };

	    // --------------------------------------------------------------------dom style相关方法
	    function getElement(target) {
	        if (!target) throw "target is undefined, can't tween!!!";

	        if (typeof target == 'string') {
	            return typeof document === 'undefined' ? target : document.querySelectorAll ? document.querySelectorAll(target) : document.getElementById(target.charAt(0) === '#' ? target.substr(1) : target);
	        } else {
	            return target;
	        }
	    }

	    function checkPropName(target, name) {
	        if (name == 'rotation' || name == 'scale') return name;

	        if (target._jt_obj[name] !== undefined) return name;

	        if (target.style[name] !== undefined) return name;

	        name = browserPrefix(name);
	        if (target.style[name] !== undefined) return name;

	        return undefined;
	    }

	    function checkValue(o1, o2, o3, push) {
	        var o = {};
	        if (o2 instanceof Array) {
	            o.num = [];
	            for (var i in o2) {
	                var _o = calcValue(o1, o2[i]);
	                o.num[i] = _o.num;
	                o.unit = _o.unit;
	            }
	            if (o3 != undefined) {
	                if (push) {
	                    o.num.push(o3.num);
	                } else {
	                    o.num.unshift(o3.num);
	                }
	            }
	        } else {
	            o = calcValue(o1, o2);
	        }
	        return o;
	    }

	    function calcValue(o1, o2) {
	        var _o = regValue(o2);

	        if (o1.unit == 'rem' && _o.unit != 'rem') {
	            checkRem();
	            o1.num = fixed3(o1.num * remUnit);
	            o1.unit = 'px';
	        } else if (o1.unit != 'rem' && _o.unit == 'rem') {
	            checkRem();
	            o1.num = fixed3(o1.num / remUnit);
	            o1.unit = 'rem';
	        }

	        var _value;
	        switch (_o.ext) {
	            case '+=':
	                _value = o1.num + _o.num;
	                break;
	            case '-=':
	                _value = o1.num - _o.num;
	                break;
	            default:
	                _value = _o.num;
	                break;
	        }
	        return { num: _value, unit: _o.unit || o1.unit };
	    }

	    function checkJtobj(target) {
	        if (target._jt_obj == undefined) target._jt_obj = {
	            perspective: 0,
	            x: 0,
	            y: 0,
	            z: 0,
	            rotationX: 0,
	            rotationY: 0,
	            rotationZ: 0,
	            scaleX: 1,
	            scaleY: 1,
	            scaleZ: 1,
	            skewX: 0,
	            skewY: 0
	        };
	    }

	    function regValue(value) {
	        var _r = /(\+=|-=|)(-|)(\d+\.\d+|\d+)(e[+-]?[0-9]{0,2}|)(rem|px|%|)/i;
	        var _a = _r.exec(value);
	        if (_a) return { num: fixed3(_a[2] + _a[3] + _a[4]), unit: _a[5], ext: _a[1] };else return { num: 0, unit: 'px', ext: '' };
	    }

	    function checkString(value) {
	        return (/\S\s+\S/g.test(value) || !/\d/g.test(value)
	        );
	    }

	    function getProp(target, name) {
	        switch (name) {
	            case 'perspective':
	            case 'x':
	            case 'y':
	            case 'z':
	            case 'rotationX':
	            case 'rotationY':
	            case 'rotationZ':
	            case 'scaleX':
	            case 'scaleY':
	            case 'scaleZ':
	            case 'skewX':
	            case 'skewY':
	                return target._jt_obj[name];
	            case 'rotation':
	                return target._jt_obj['rotationZ'];
	            case 'scale':
	                return target._jt_obj['scaleX'];
	            default:
	                return getStyle(target, name);
	        }
	    }

	    function getStyle(target, name) {
	        if (target.style[name]) {
	            return target.style[name];
	        } else if (document.defaultView && document.defaultView.getComputedStyle) {
	            var _p = hyphenize(name);
	            var _s = document.defaultView.getComputedStyle(target, '');
	            return _s && _s.getPropertyValue(_p);
	        } else if (target.currentStyle) {
	            return target.currentStyle[name];
	        } else {
	            return null;
	        }
	    }

	    function setProp(target, name, value) {
	        switch (name) {
	            case 'perspective':
	            case 'x':
	            case 'y':
	            case 'z':
	            case 'rotationX':
	            case 'rotationY':
	            case 'rotationZ':
	            case 'scaleX':
	            case 'scaleY':
	            case 'scaleZ':
	            case 'skewX':
	            case 'skewY':
	                target._jt_obj[name] = value;
	                return true;
	            case 'rotation':
	                target._jt_obj['rotationZ'] = value;
	                return true;
	            case 'scale':
	                target._jt_obj['scaleX'] = value;
	                target._jt_obj['scaleY'] = value;
	                return true;
	            default:
	                setStyle(target, name, value);
	                return false;
	        }
	    }

	    function setStyle(target, name, value) {
	        target.style[name] = value;
	    }

	    function isDOM(obj) {
	        return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.nodeType === 1;
	    }

	    function updateTransform(obj) {
	        var _t = '';
	        if (obj._jt_obj.perspective) _t += 'perspective(' + obj._jt_obj.perspective + ') ';
	        if (obj._jt_obj.x || obj._jt_obj.y || obj._jt_obj.z) _t += 'translate3d(' + checkNumber(obj._jt_obj.x) + ',' + checkNumber(obj._jt_obj.y) + ',' + checkNumber(obj._jt_obj.z) + ') ';
	        if (obj._jt_obj.rotationX) _t += 'rotateX(' + obj._jt_obj.rotationX % 360 + 'deg) ';
	        if (obj._jt_obj.rotationY) _t += 'rotateY(' + obj._jt_obj.rotationY % 360 + 'deg) ';
	        if (obj._jt_obj.rotationZ) _t += 'rotateZ(' + obj._jt_obj.rotationZ % 360 + 'deg) ';
	        if (obj._jt_obj.scaleX != 1 || obj._jt_obj.scaleY != 1 || obj._jt_obj.scaleZ != 1) _t += 'scale3d(' + obj._jt_obj.scaleX + ', ' + obj._jt_obj.scaleY + ', ' + obj._jt_obj.scaleZ + ') ';
	        if (obj._jt_obj.skewX || obj._jt_obj.skewY) _t += 'skew(' + obj._jt_obj.skewX + 'deg,' + obj._jt_obj.skewY + 'deg) ';
	        obj.style[browserPrefix('transform')] = _t;
	    }

	    function checkNumber(value) {
	        return value + (typeof value == 'number' ? 'px' : '');
	    }

	    // --------------------------------------------------------------------计算1rem单位值
	    var body, tempDiv, remUnit;

	    function checkRem() {
	        if (!tempDiv) {
	            tempDiv = document.createElement('div');
	            tempDiv.style.cssText = 'border:0 solid; position:absolute; line-height:0px;';
	        }
	        if (!body) {
	            body = document.getElementsByTagName('body')[0];
	        }

	        body.appendChild(tempDiv);
	        tempDiv.style.borderLeftWidth = '1rem';
	        remUnit = parseFloat(tempDiv.offsetWidth);
	        body.removeChild(tempDiv);
	    }

	    // --------------------------------------------------------------------全局update
	    var tweens = [];
	    var isUpdating = false;
	    var lastTime = 0;

	    function globalUpdate() {
	        isUpdating = true;
	        var _len = tweens.length;
	        var _len2 = calls.length;
	        if (_len === 0 && _len2 === 0) {
	            isUpdating = false;
	            return;
	        }

	        var _now = now();
	        var _step = _now - lastTime;
	        lastTime = _now;

	        for (var i = 0; i < _len; i++) {
	            var _tween = tweens[i];
	            if (_tween && !_tween._update(_step)) {
	                if (_tween.isActive) {
	                    _tween.isActive = false;
	                    tweens.splice(i, 1);
	                    if (_tween.onEnd) _tween.onEnd.apply(_tween, _tween.onEndParams);
	                }
	                i--;
	                _len--;
	            }
	        }

	        for (var j = 0; j < _len2; j++) {
	            var _call = calls[j];
	            if (_call && !_call._update(_step)) {
	                calls.splice(j, 1);
	                if (_call.onEnd) _call.onEnd.apply(_call, _call.onEndParams);
	                j--;
	                _len2--;
	            }
	        }

	        requestFrame(globalUpdate);
	    }

	    // --------------------------------------------------------------------tween
	    function tween() {
	        this.initialize.apply(this, arguments);
	    }

	    extend(tween.prototype, {
	        initialize: function initialize(target, time, fromVars, toVars, isDom) {
	            this.fromVars = fromVars;
	            this.curVars = {};
	            this.toVars = toVars;
	            this.target = target;
	            this.duration = Math.max(time, 0) * 1000;
	            this.ease = toVars.ease || JT.Linear.None;
	            this.delay = Math.max(toVars.delay || 0, 0) * 1000;
	            this.yoyo = toVars.yoyo || false;
	            this.repeat = this.curRepeat = Math.floor(toVars.repeat || 0);
	            this.repeatDelay = Math.max(toVars.repeatDelay || 0, 0) * 1000;
	            this.onStart = toVars.onStart || null;
	            this.onStartParams = toVars.onStartParams || [];
	            this.onRepeat = toVars.onRepeat || null;
	            this.onRepeatParams = toVars.onRepeatParams || [];
	            this.onEnd = toVars.onEnd || null;
	            this.onEndParams = toVars.onEndParams || [];
	            this.onUpdate = toVars.onUpdate || null;
	            this.onUpdateParams = toVars.onUpdateParams || [];
	            this.isPlaying = toVars.isPlaying || true;
	            this.interpolation = toVars.interpolation || null;
	            this.isActive = toVars.isActive || true;

	            this.isReverse = false;
	            this.isDom = isDom;

	            this.curTime = 0;
	            this.isStart = false;
	            this.startTime = this.delay;
	            this.endTime = this.startTime + this.repeatDelay + this.duration;

	            if (this.delay != 0) {
	                this._updateProp();
	                if (this.onUpdate) this.onUpdate.apply(this, this.onUpdateParams);
	            }

	            if (this.isActive) this._addSelf();
	        },

	        _update: function _update(time) {
	            if (!this.isPlaying) return true;

	            this.curTime += time;

	            if (this.curTime < this.startTime) return true;

	            if (!this.isStart) this.curTime += this.repeatDelay;

	            if (this.curTime < this.startTime + this.repeatDelay) return true;

	            if (this.curTime < this.endTime) {
	                this._updateProp();
	                if (this.onUpdate) this.onUpdate.apply(this, this.onUpdateParams);
	            } else {
	                if (this.curRepeat == 0) {
	                    this._updateProp();
	                    if (this.onUpdate) this.onUpdate.apply(this, this.onUpdateParams);
	                    // if (this.onEnd) this.onEnd.apply(this, this.onEndParams);
	                    this._checkStart();
	                    return false;
	                }

	                if (this.yoyo) this.isReverse = !this.isReverse;

	                var _time = (this.curTime - this.endTime) % (this.duration + this.repeatDelay);
	                if (this.repeatDelay == 0) {
	                    this.curTime = this.startTime + _time;
	                    this._updateProp();
	                } else {
	                    this._updateProp();
	                    this.curTime = this.startTime + _time;
	                }

	                if (this.onUpdate) this.onUpdate.apply(this, this.onUpdateParams);
	                if (this.onRepeat) this.onRepeat.apply(this, this.onRepeatParams);
	                if (this.curRepeat > 0) this.curRepeat--;
	            }

	            this._checkStart();

	            return true;
	        },

	        _checkStart: function _checkStart() {
	            if (!this.isStart) {
	                this.isStart = true;
	                if (this.onStart) this.onStart.apply(this, this.onStartParams);
	            }
	        },

	        _updateProp: function _updateProp() {
	            var _elapsed = this.duration == 0 ? 1 : (this.curTime - this.startTime - this.repeatDelay) / this.duration;
	            _elapsed = Math.max(0, Math.min(1, _elapsed));

	            if (this.isReverse) _elapsed = 1 - _elapsed;

	            var _radio = this.ease(_elapsed);

	            var _trans = false;

	            for (var prop in this.fromVars) {
	                var _start = this.fromVars[prop];
	                var _end = this.toVars[prop];

	                var _n;
	                if (_end.num instanceof Array) {
	                    _n = this.interpolation(_end.num, _radio);
	                } else {
	                    _n = _start.num + (_end.num - _start.num) * _radio;
	                }
	                _n = fixed3(_n);
	                this.curVars[prop] = { num: _n, unit: _end.unit };

	                if (this.isDom) {
	                    if (Math.abs(_end.num - _start.num) > 20) {
	                        _n = Math.round(_n);
	                    }
	                    if (setProp(this.target, prop, _n + (_end.unit || 0))) _trans = true;
	                } else {
	                    this.target[prop] = _n + (_end.unit || 0);
	                }
	            }

	            if (_trans) updateTransform(this.target);
	        },

	        _toEnd: function _toEnd() {
	            var _trans = false;

	            for (var prop in this.fromVars) {
	                var _end = this.toVars[prop];

	                var _n = fixed3(_end.num);
	                this.curVars[prop] = { num: _n, unit: _end.unit };

	                if (this.isDom) {
	                    if (setProp(this.target, prop, _n + (_end.unit || 0))) _trans = true;
	                } else {
	                    this.target[prop] = _n + (_end.unit || 0);
	                }
	            }

	            if (_trans) updateTransform(this.target);
	        },

	        _addSelf: function _addSelf() {
	            this.isActive = true;
	            tweens.push(this);
	            if (!isUpdating) {
	                lastTime = JT.now();
	                globalUpdate();
	            }
	        },

	        _removeSelf: function _removeSelf() {
	            this.isActive = false;
	            var i = tweens.indexOf(this);
	            if (i !== -1) {
	                tweens.splice(i, 1);
	            }
	        },

	        active: function active() {
	            this._addSelf();
	        },

	        play: function play() {
	            this.isPlaying = true;
	        },

	        pause: function pause() {
	            this.isPlaying = false;
	        },

	        kill: function kill(toEnd) {
	            this._removeSelf();
	            if (toEnd) {
	                this._toEnd();
	                if (this.onEnd) this.onEnd.apply(this, this.onEndParams);
	            }
	        }
	    });

	    // --------------------------------------------------------------------tween 全局方法
	    extend(JT, {
	        get: function get(target, param) {
	            var _target = getElement(target);
	            if (_target.length !== undefined) {
	                _target = _target[0];
	            }
	            if (isDOM(_target)) {
	                checkJtobj(_target);
	                var _name = checkPropName(_target, param);
	                if (_name) return getProp(_target, _name);else return null;
	            } else {
	                return _target[param];
	            }
	        },

	        set: function set(target, params) {
	            var _target = getElement(target);
	            each(_target, function (index, obj) {
	                if (isDOM(obj)) {
	                    checkJtobj(obj);
	                    var _trans = false;
	                    for (var i in params) {
	                        var _name = checkPropName(obj, i);
	                        if (_name) {
	                            if (checkString(params[i])) {
	                                setProp(obj, _name, params[i]);
	                            } else {
	                                var _o = checkValue(regValue(getProp(obj, _name)), params[i]);
	                                if (setProp(obj, _name, _o.num + (_o.unit || 0))) _trans = true;
	                            }
	                        }
	                    }

	                    if (_trans) updateTransform(obj);
	                } else {
	                    for (var j in params) {
	                        var _o = checkValue(regValue(obj[j]), params[j]);
	                        obj[j] = _o.num + (_o.unit || 0);
	                    }
	                }
	            });
	        },

	        fromTo: function fromTo(target, time, fromVars, toVars) {
	            checkBezier(toVars);
	            var _target = getElement(target);
	            var _tweens = [];
	            each(_target, function (index, obj) {
	                var _fromVars = {};
	                var _toVars = {};
	                var _isDom = isDOM(obj);
	                if (_isDom) {
	                    checkJtobj(obj);
	                    for (var i in toVars) {
	                        var _name = checkPropName(obj, i);
	                        if (_name) {
	                            var _o = regValue(getProp(obj, _name));
	                            _fromVars[_name] = checkValue(_o, fromVars[i]);
	                            _toVars[_name] = checkValue(_o, toVars[i], _fromVars[_name], false);
	                        } else {
	                            _toVars[i] = toVars[i];
	                        }
	                    }
	                } else {
	                    for (var i in toVars) {
	                        if (obj[i] !== undefined) {
	                            var _o = regValue(obj[i]);
	                            _fromVars[i] = checkValue(_o, fromVars[i]);
	                            _toVars[i] = checkValue(_o, toVars[i], _fromVars[i], false);
	                        } else {
	                            _toVars[i] = toVars[i];
	                        }
	                    }
	                }

	                var _tween = new tween(obj, time, _fromVars, _toVars, _isDom);
	                _tweens.push(_tween);
	            });

	            if (_tweens.length == 1) {
	                return _tweens[0];
	            } else {
	                return _tweens;
	            }
	        },

	        from: function from(target, time, fromVars) {
	            checkBezier(fromVars);
	            var _target = getElement(target);
	            var _tweens = [];
	            each(_target, function (index, obj) {
	                var _fromVars = {};
	                var _toVars = {};
	                var _isDom = isDOM(obj);
	                if (_isDom) {
	                    checkJtobj(obj);
	                    for (var i in fromVars) {
	                        var _name = checkPropName(obj, i);
	                        if (_name) {
	                            var _o = regValue(getProp(obj, _name));
	                            _fromVars[_name] = checkValue(_o, fromVars[i], _o, true);
	                            _toVars[_name] = _o;
	                        } else {
	                            _toVars[i] = fromVars[i];
	                        }
	                    }
	                } else {
	                    for (var i in fromVars) {
	                        if (obj[i] !== undefined) {
	                            var _o = regValue(obj[i]);
	                            _fromVars[i] = checkValue(_o, fromVars[i], _o, true);
	                            _toVars[i] = _o;
	                        } else {
	                            _toVars[i] = fromVars[i];
	                        }
	                    }
	                }

	                var _tween = new tween(obj, time, _fromVars, _toVars, _isDom);
	                _tweens.push(_tween);
	            });

	            if (_tweens.length == 1) {
	                return _tweens[0];
	            } else {
	                return _tweens;
	            }
	        },

	        to: function to(target, time, toVars) {
	            checkBezier(toVars);
	            var _target = getElement(target);
	            var _tweens = [];
	            each(_target, function (index, obj) {
	                var _fromVars = {};
	                var _toVars = {};
	                var _isDom = isDOM(obj);
	                if (_isDom) {
	                    checkJtobj(obj);
	                    for (var i in toVars) {
	                        var _name = checkPropName(obj, i);
	                        if (_name) {
	                            var _o = regValue(getProp(obj, _name));
	                            _fromVars[_name] = _o;
	                            _toVars[_name] = checkValue(_o, toVars[i], _o, false);
	                        } else {
	                            _toVars[i] = toVars[i];
	                        }
	                    }
	                } else {
	                    for (var i in toVars) {
	                        if (obj[i] !== undefined) {
	                            var _o = regValue(obj[i]);
	                            _fromVars[i] = _o;
	                            _toVars[i] = checkValue(_o, toVars[i], _o, false);
	                        } else {
	                            _toVars[i] = toVars[i];
	                        }
	                    }
	                }

	                var _tween = new tween(obj, time, _fromVars, _toVars, _isDom);
	                _tweens.push(_tween);
	            });

	            if (_tweens.length == 1) {
	                return _tweens[0];
	            } else {
	                return _tweens;
	            }
	        },

	        kill: function kill(target, toEnd) {
	            var _target = getElement(target);
	            each(_target, function (index, obj) {
	                var _len = tweens.length;
	                for (var i = _len - 1; i >= 0; i--) {
	                    var _tween = tweens[i];
	                    if (_tween.target === obj) {
	                        _tween.kill(toEnd);
	                    }
	                }
	            });
	        },

	        killAll: function killAll(toEnd) {
	            var _len = tweens.length;
	            for (var i = _len - 1; i >= 0; i--) {
	                var _tween = tweens[i];
	                _tween.kill(toEnd);
	            }
	        },

	        play: function play(target) {
	            actionProxyTween(target, 'play');
	        },

	        playAll: function playAll() {
	            actionProxyAllTweens('play');
	        },

	        pause: function pause(target) {
	            actionProxyTween(target, 'pause');
	        },

	        pauseAll: function pauseAll() {
	            actionProxyAllTweens('pause');
	        },

	        isTweening: function isTweening(target) {
	            var _target = getElement(target);
	            _target = _target[0] || _target;
	            var _len = tweens.length;
	            for (var i = _len - 1; i >= 0; i--) {
	                var _tween = tweens[i];
	                if (_tween.target === _target) {
	                    return true;
	                }
	            }
	            return false;
	        }

	    });

	    function actionProxyTween(target, action) {
	        var _target = getElement(target);
	        var _len = tweens.length;
	        each(_target, function (index, obj) {
	            for (var i = _len - 1; i >= 0; i--) {
	                var _tween = tweens[i];
	                if (_tween.target === obj) {
	                    _tween[action]();
	                }
	            }
	        });
	    }

	    function actionProxyAllTweens(action) {
	        var _len = tweens.length;
	        for (var i = _len - 1; i >= 0; i--) {
	            var _tween = tweens[i];
	            _tween[action]();
	        }
	    }

	    // --------------------------------------------------------------------call
	    var calls = [];

	    function _call2() {
	        this.initialize.apply(this, arguments);
	    }

	    extend(_call2.prototype, {
	        initialize: function initialize(time, callback, params, isPlaying) {
	            this.delay = time * 1000;
	            this.onEnd = callback || null;
	            this.onEndParams = params || [];

	            this.curTime = 0;
	            this.endTime = this.delay;
	            this.isPlaying = isPlaying || true;

	            if (this.delay != 0) {
	                this._addSelf();
	            } else {
	                if (this.onEnd) this.onEnd.apply(this, this.onEndParams);
	            }
	        },

	        _update: function _update(time) {
	            if (!this.isPlaying) return true;

	            this.curTime += time;

	            if (this.curTime < this.endTime) return true;

	            // if (this.onEnd) this.onEnd.apply(this, this.onEndParams);
	            return false;
	        },

	        _addSelf: function _addSelf() {
	            calls.push(this);
	            if (!isUpdating) {
	                lastTime = JT.now();
	                globalUpdate();
	            }
	        },

	        _removeSelf: function _removeSelf() {
	            var i = calls.indexOf(this);
	            if (i !== -1) {
	                calls.splice(i, 1);
	            }
	        },

	        play: function play() {
	            this.isPlaying = true;
	        },

	        pause: function pause() {
	            this.isPlaying = false;
	        },

	        kill: function kill(toEnd) {
	            this._removeSelf();
	            if (toEnd) {
	                this._toEnd();
	                if (this.onEnd) this.onEnd.apply(this, this.onEndParams);
	            }
	        }
	    });

	    //---------------------------------------------------------------call 全局方法
	    extend(JT, {
	        call: function call(time, callback, params, isPlaying) {
	            return new _call2(time, callback, params, isPlaying);
	        },

	        killCall: function killCall(callback, toEnd) {
	            var _target = callback;
	            var _len = calls.length;
	            each(_target, function (index, obj) {
	                for (var i = _len - 1; i >= 0; i--) {
	                    var _call = calls[i];
	                    if (_call.onEnd === obj) {
	                        _call.kill(toEnd);
	                    }
	                }
	            });
	        },

	        killAllCalls: function killAllCalls(toEnd) {
	            var _len = calls.length;
	            for (var i = _len - 1; i >= 0; i--) {
	                var _call = calls[i];
	                _call.kill(toEnd);
	            }
	        },

	        playCall: function playCall(callback) {
	            actionProxyCall(callback, 'play');
	        },

	        playAllCalls: function playAllCalls() {
	            actionProxyAllCalls('play');
	        },

	        pauseCall: function pauseCall(callback) {
	            actionProxyCall(callback, 'pause');
	        },

	        pauseAllCalls: function pauseAllCalls() {
	            actionProxyAllCalls('pause');
	        }

	    });

	    function actionProxyCall(callback, action) {
	        var _target = callback;
	        var _len = calls.length;
	        each(_target, function (index, obj) {
	            for (var i = _len - 1; i >= 0; i--) {
	                var _call = calls[i];
	                if (_call.onEnd === obj) {
	                    _call[action]();
	                }
	            }
	        });
	    }

	    function actionProxyAllCalls(action) {
	        var _len = calls.length;
	        for (var i = _len - 1; i >= 0; i--) {
	            var _call = calls[i];
	            _call[action]();
	        }
	    }

	    // --------------------------------------------------------------------bezier
	    extend(JT, {
	        path: function path(obj) {
	            checkBezier(obj);
	            var _ease = obj.ease || JT.Linear.None;
	            var _step = obj.step || 1;

	            var _radio,
	                _arr = [];
	            for (var i = 0; i <= _step; i++) {
	                _radio = _ease(i / _step);
	                var _o = {};
	                for (var j in obj) {
	                    if (obj[j] instanceof Array) {
	                        _o[j] = obj.interpolation(obj[j], _radio);
	                    }
	                }
	                _arr.push(_o);
	            }
	            return _arr;
	        }
	    });

	    function checkBezier(obj) {
	        if (obj.bezier) {
	            sortBezier(obj, obj.bezier);
	            obj.interpolation = Bezier;
	            delete obj.bezier;
	        }
	        if (obj.through) {
	            sortBezier(obj, obj.through);
	            obj.interpolation = Through;
	            delete obj.through;
	        }
	        if (obj.linear) {
	            sortBezier(obj, obj.linear);
	            obj.interpolation = Linear;
	            delete obj.linear;
	        }
	    }

	    function sortBezier(target, arr) {
	        for (var i in arr) {
	            for (var j in arr[i]) {
	                if (i == 0) {
	                    target[j] = [arr[i][j]];
	                } else {
	                    target[j].push(arr[i][j]);
	                }
	            }
	        }
	    }

	    function Linear(v, k) {
	        var m = v.length - 1,
	            f = m * k,
	            i = Math.floor(f),
	            fn = Utils.Linear;
	        if (k < 0) return fn(v[0], v[1], f);
	        if (k > 1) return fn(v[m], v[m - 1], m - f);
	        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
	    }

	    function Bezier(v, k) {
	        var b = 0,
	            n = v.length - 1,
	            pw = Math.pow,
	            bn = Utils.Bernstein,
	            i;
	        for (i = 0; i <= n; i++) {
	            b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
	        }
	        return b;
	    }

	    function Through(v, k) {
	        var m = v.length - 1,
	            f = m * k,
	            i = Math.floor(f),
	            fn = Utils.Through;
	        if (v[0] === v[m]) {
	            if (k < 0) i = Math.floor(f = m * (1 + k));
	            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
	        } else {
	            if (k < 0) return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
	            if (k > 1) return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
	            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
	        }
	    }

	    var Utils = {
	        Linear: function Linear(p0, p1, t) {
	            return (p1 - p0) * t + p0;
	        },

	        Bernstein: function Bernstein(n, i) {
	            var fc = Utils.Factorial;
	            return fc(n) / fc(i) / fc(n - i);
	        },

	        Factorial: function () {
	            var a = [1];
	            return function (n) {
	                var s = 1,
	                    i;
	                if (a[n]) return a[n];
	                for (i = n; i > 1; i--) {
	                    s *= i;
	                }return a[n] = s;
	            };
	        }(),

	        Through: function Through(p0, p1, p2, p3, t) {
	            var v0 = (p2 - p0) * 0.5,
	                v1 = (p3 - p1) * 0.5,
	                t2 = t * t,
	                t3 = t * t2;
	            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
	        }
	    };

	    // --------------------------------------------------------------------缓动选项
	    extend(JT, {
	        Linear: {
	            None: function None(k) {
	                return k;
	            }
	        },
	        Quad: {
	            In: function In(k) {
	                return k * k;
	            },
	            Out: function Out(k) {
	                return k * (2 - k);
	            },
	            InOut: function InOut(k) {
	                if ((k *= 2) < 1) return 0.5 * k * k;
	                return -0.5 * (--k * (k - 2) - 1);
	            }
	        },
	        Cubic: {
	            In: function In(k) {
	                return k * k * k;
	            },
	            Out: function Out(k) {
	                return --k * k * k + 1;
	            },
	            InOut: function InOut(k) {
	                if ((k *= 2) < 1) return 0.5 * k * k * k;
	                return 0.5 * ((k -= 2) * k * k + 2);
	            }
	        },
	        Quart: {
	            In: function In(k) {
	                return k * k * k * k;
	            },
	            Out: function Out(k) {
	                return 1 - --k * k * k * k;
	            },
	            InOut: function InOut(k) {
	                if ((k *= 2) < 1) return 0.5 * k * k * k * k;
	                return -0.5 * ((k -= 2) * k * k * k - 2);
	            }
	        },
	        Quint: {
	            In: function In(k) {
	                return k * k * k * k * k;
	            },
	            Out: function Out(k) {
	                return --k * k * k * k * k + 1;
	            },
	            InOut: function InOut(k) {
	                if ((k *= 2) < 1) return 0.5 * k * k * k * k * k;
	                return 0.5 * ((k -= 2) * k * k * k * k + 2);
	            }
	        },
	        Sine: {
	            In: function In(k) {
	                return 1 - Math.cos(k * Math.PI / 2);
	            },
	            Out: function Out(k) {
	                return Math.sin(k * Math.PI / 2);
	            },
	            InOut: function InOut(k) {
	                return 0.5 * (1 - Math.cos(Math.PI * k));
	            }
	        },
	        Expo: {
	            In: function In(k) {
	                return k === 0 ? 0 : Math.pow(1024, k - 1);
	            },
	            Out: function Out(k) {
	                return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
	            },
	            InOut: function InOut(k) {
	                if (k === 0) return 0;
	                if (k === 1) return 1;
	                if ((k *= 2) < 1) return 0.5 * Math.pow(1024, k - 1);
	                return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
	            }
	        },
	        Circ: {
	            In: function In(k) {
	                return 1 - Math.sqrt(1 - k * k);
	            },
	            Out: function Out(k) {
	                return Math.sqrt(1 - --k * k);
	            },
	            InOut: function InOut(k) {
	                if ((k *= 2) < 1) return -0.5 * (Math.sqrt(1 - k * k) - 1);
	                return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
	            }
	        },
	        Elastic: {
	            In: function In(k) {
	                var s,
	                    a = 0.1,
	                    p = 0.4;
	                if (k === 0) return 0;
	                if (k === 1) return 1;
	                if (!a || a < 1) {
	                    a = 1;
	                    s = p / 4;
	                } else s = p * Math.asin(1 / a) / (2 * Math.PI);
	                return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
	            },
	            Out: function Out(k) {
	                var s,
	                    a = 0.1,
	                    p = 0.4;
	                if (k === 0) return 0;
	                if (k === 1) return 1;
	                if (!a || a < 1) {
	                    a = 1;
	                    s = p / 4;
	                } else s = p * Math.asin(1 / a) / (2 * Math.PI);
	                return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
	            },
	            InOut: function InOut(k) {
	                var s,
	                    a = 0.1,
	                    p = 0.4;
	                if (k === 0) return 0;
	                if (k === 1) return 1;
	                if (!a || a < 1) {
	                    a = 1;
	                    s = p / 4;
	                } else s = p * Math.asin(1 / a) / (2 * Math.PI);
	                if ((k *= 2) < 1) return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
	                return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
	            }
	        },
	        Back: {
	            In: function In(k) {
	                var s = 1.70158;
	                return k * k * ((s + 1) * k - s);
	            },
	            Out: function Out(k) {
	                var s = 1.70158;
	                return --k * k * ((s + 1) * k + s) + 1;
	            },
	            InOut: function InOut(k) {
	                var s = 1.70158 * 1.525;
	                if ((k *= 2) < 1) return 0.5 * (k * k * ((s + 1) * k - s));
	                return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
	            }
	        },
	        Bounce: {
	            In: function In(k) {
	                return 1 - JT.Bounce.Out(1 - k);
	            },
	            Out: function Out(k) {
	                if (k < 1 / 2.75) {
	                    return 7.5625 * k * k;
	                } else if (k < 2 / 2.75) {
	                    return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
	                } else if (k < 2.5 / 2.75) {
	                    return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
	                } else {
	                    return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
	                }
	            },
	            InOut: function InOut(k) {
	                if (k < 0.5) return JT.Bounce.In(k * 2) * 0.5;
	                return JT.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
	            }
	        }
	    });

	    JT.now = now;

	    return JT;
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * VERSION: 0.3.0
	 * DATE: 2016-8-17
	 * GIT: https://github.com/shrekshrek/jstween
	 * @author: Shrek.wang
	 **/

	(function (factory) {

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(11), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (JT, exports) {
	            window.JTL = factory(exports, JT);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        var JT = require('./jstween');
	        factory(exports, JT);
	    } else {
	        window.JTL = factory({}, window.JT);
	    }
	})(function (JTL, JT) {
	    // --------------------------------------------------------------------辅助方法
	    function extend(obj, obj2) {
	        for (var prop in obj2) {
	            obj[prop] = obj2[prop];
	        }
	    }

	    function regValue(value) {
	        var _r = /(^[a-zA-Z]\w*|)(\+=|-=|)(\d*\.\d*|\d*)/;
	        var _a = _r.exec(value);
	        return { label: _a[1], ext: _a[2], num: parseFloat(_a[3]) };
	    }

	    var requestFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	        window.setTimeout(callback, 1000 / 60);
	    };

	    // --------------------------------------------------------------------全局update
	    var timelines = [];
	    var isUpdating = false;
	    var lastTime = 0;
	    // var lastStep = 0;

	    function globalUpdate() {
	        isUpdating = true;
	        var _len = timelines.length;
	        if (_len === 0) {
	            isUpdating = false;
	            return;
	        }

	        var _now = JT.now();
	        var _step = _now - lastTime;
	        lastTime = _now;

	        // if (lastStep == 0 || _step < lastStep * 10) {
	        for (var i = _len - 1; i >= 0; i--) {
	            timelines[i]._update(_step);
	        }
	        // }

	        // lastStep = _step;

	        requestFrame(globalUpdate);
	    }

	    // --------------------------------------------------------------------timeline
	    function timeline() {
	        this.initialize.apply(this, arguments);
	    }

	    extend(timeline.prototype, {
	        initialize: function initialize() {
	            this.labels = [];
	            this.labelTime = 0;

	            this.anchors = [];
	            this.anchorId = 0;

	            this.tweens = [];

	            this.isPlaying = false;

	            this.curTime = 0;
	        },

	        _update: function _update(time) {
	            if (!this.isPlaying) return;

	            this.curTime += time;

	            this._checkHandler();
	        },

	        _addSelf: function _addSelf() {
	            timelines.push(this);
	            if (!isUpdating) {
	                lastTime = JT.now();
	                globalUpdate();
	            }
	        },

	        _removeSelf: function _removeSelf() {
	            var i = timelines.indexOf(this);
	            if (i !== -1) {
	                timelines.splice(i, 1);
	            }
	        },

	        _checkHandler: function _checkHandler() {
	            var _len = this.anchors.length;
	            if (this.anchorId >= _len) {
	                this._removeSelf();
	                this.isPlaying = false;
	                return;
	            }

	            var _handler = this.anchors[this.anchorId];
	            if (this.curTime >= _handler.time * 1000) {
	                if (this.anchorId == _len - 1) {
	                    this._removeSelf();
	                    this.isPlaying = false;
	                    _handler.handler.apply();
	                } else {
	                    _handler.handler.apply();
	                    this.anchorId++;
	                    this._checkHandler();
	                }
	            }
	        },

	        _parseTweenTime: function _parseTweenTime(time, vars, position) {
	            var _duration = Math.max(time, 0);
	            var _delay = Math.max(vars.delay || 0, 0);
	            var _repeat = Math.max(0, Math.floor(vars.repeat || 0));
	            var _repeatDelay = Math.max(vars.repeatDelay || 0, 0);
	            var _totalDuration = _delay + _duration + (_repeatDelay + _duration) * _repeat;

	            var _startTime = this._parsePosition(position);

	            this.labelTime = Math.max(this.labelTime, _startTime + _totalDuration);

	            return _startTime;
	        },

	        _parsePosition: function _parsePosition(position) {
	            if (position == undefined) return this.labelTime;

	            var _o = regValue(position);
	            var _time = 0;
	            if (_o.label) {
	                _time = this.getLabelTime(_o.label);
	            } else if (_o.ext) {
	                _time = this.labelTime;
	            } else if (_o.num) {
	                _time = _o.num;
	            }

	            switch (_o.ext) {
	                case '+=':
	                    _time += _o.num;
	                    break;
	                case '-=':
	                    _time -= _o.num;
	                    break;
	            }

	            return _time;
	        },

	        _addAnchor: function _addAnchor(handler, position) {
	            var _len = this.anchors.length;
	            if (_len == 0) {
	                this.anchors.push({ time: position, handler: handler });
	                return;
	            } else if (_len > 0) {
	                for (var i = _len - 1; i >= 0; i--) {
	                    var _handler = this.anchors[i];
	                    if (position >= _handler.time) {
	                        this.anchors.splice(i + 1, 0, { time: position, handler: handler });
	                        return;
	                    }
	                }
	            }
	        },

	        _addTween: function _addTween(tween) {
	            if (tween.length != undefined) {
	                for (var i in tween) {
	                    this.tweens.push(tween[i]);
	                }
	            } else {
	                this.tweens.push(tween);
	            }
	        },

	        _removeTween: function _removeTween(tween) {
	            var i = this.tweens.indexOf(tween);
	            if (i !== -1) this.tweens.splice(i, 1);
	        },

	        fromTo: function fromTo(target, time, fromVars, toVars, position) {
	            var _self = this;
	            var _end = toVars.onEnd;
	            toVars.onEnd = function (params) {
	                _self._removeTween(this);
	                if (_end) _end.apply(this, params);
	            };
	            var _handler = function _handler() {
	                var _tween = JT.fromTo(target, time, fromVars, toVars);
	                _self._addTween(_tween);
	            };
	            var _time = this._parseTweenTime(time, toVars, position);
	            this._addAnchor(_handler, _time);
	            return this;
	        },

	        from: function from(target, time, fromVars, position) {
	            var _self = this;
	            var _end = fromVars.onEnd;
	            fromVars.onEnd = function (params) {
	                _self._removeTween(this);
	                if (_end) _end.apply(this, params);
	            };
	            var _handler = function _handler() {
	                var _tween = JT.from(target, time, fromVars);
	                _self._addTween(_tween);
	            };
	            var _time = this._parseTweenTime(time, fromVars, position);
	            this._addAnchor(_handler, _time);
	            return this;
	        },

	        to: function to(target, time, toVars, position) {
	            var _self = this;
	            var _end = toVars.onEnd;
	            toVars.onEnd = function (params) {
	                _self._removeTween(this);
	                if (_end) _end.apply(this, params);
	            };
	            var _handler = function _handler() {
	                var _tween = JT.to(target, time, toVars);
	                _self._addTween(_tween);
	            };
	            var _time = this._parseTweenTime(time, toVars, position);
	            this._addAnchor(_handler, _time);
	            return this;
	        },

	        kill: function kill(target, position) {
	            var _handler = function _handler() {
	                JT.kill(target, true);
	            };
	            var _time = this._parseTweenTime(0, {}, position);
	            this._addAnchor(_handler, _time);
	            return this;
	        },

	        add: function add(obj, position) {
	            var _time = this._parsePosition(position);
	            switch (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) {
	                case 'function':
	                    this._addAnchor(obj, _time);
	                    break;
	                case 'string':
	                    this.addLabel(obj, _time);
	                    break;
	                default:
	                    throw 'add action is wrong!!!';
	                    break;
	            }
	            return this;
	        },

	        addLabel: function addLabel(name, position) {
	            this.removeLabel(name);
	            var _time = this._parsePosition(position);
	            this.labels.push({ name: name, time: _time });
	            return this;
	        },

	        removeLabel: function removeLabel(name) {
	            var _len = this.labels.length;
	            for (var i = _len - 1; i >= 0; i--) {
	                var _label = this.labels[i];
	                if (name == _label.name) {
	                    this.labels.splice(i, 1);
	                    return this;
	                }
	            }
	            return this;
	        },

	        getLabelTime: function getLabelTime(name) {
	            var _len = this.labels.length;
	            for (var i = _len - 1; i >= 0; i--) {
	                var _label = this.labels[i];
	                if (name == _label.name) {
	                    return _label.time;
	                }
	            }
	            return this.labelTime;
	        },

	        totalTime: function totalTime() {
	            return this.labelTime;
	        },

	        play: function play(position) {
	            if (this.isPlaying) this.pause();
	            // if (this.isPlaying) return;

	            var _len = this.tweens.length;
	            for (var i = _len - 1; i >= 0; i--) {
	                this.tweens[i].play();
	            }

	            this._addSelf();
	            this.isPlaying = true;

	            if (position !== undefined) {
	                this.seek(position);
	            }
	        },

	        pause: function pause() {
	            if (!this.isPlaying) return;

	            var _len = this.tweens.length;
	            for (var i = _len - 1; i >= 0; i--) {
	                this.tweens[i].pause();
	            }

	            this._removeSelf();
	            this.isPlaying = false;
	        },

	        seek: function seek(position) {
	            var _time = this._parsePosition(position);
	            this.curTime = _time * 1000;

	            var _len = this.anchors.length;
	            for (var i = 0; i < _len; i++) {
	                var _handler = this.anchors[i];
	                if (_handler.time * 1000 >= this.curTime) {
	                    this.anchorId = i;
	                    return;
	                }
	            }
	        },

	        clear: function clear() {
	            var _len = this.tweens.length;
	            for (var i = _len - 1; i >= 0; i--) {
	                this.tweens[i].kill();
	            }
	            this.tweens = [];
	            this.curTime = 0;

	            this.labels = [];
	            this.labelTime = 0;

	            this.anchors = [];
	            this.anchorId = 0;
	        }

	    });

	    //---------------------------------------------------------------全局方法
	    extend(JTL, {
	        create: function create() {
	            return new timeline();
	        },
	        kill: function kill(tl) {
	            tl.clear();
	        }
	    });

	    return JTL;
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * VERSION: 0.8.2
	 * DATE: 2016-09-13
	 * GIT: https://github.com/shrekshrek/css3d-engine
	 * @author: Shrek.wang
	 **/

	(function (factory) {

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	            window.C3D = factory(exports);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        factory(exports);
	    } else {
	        window.C3D = factory({});
	    }
	})(function (C3D) {
	    // --------------------------------------------------------------------extend
	    var keys = function keys(obj) {
	        var keys = [];
	        for (var key in obj) {
	            keys.push(key);
	        }
	        return keys;
	    };

	    var extend = function extend(obj) {
	        var length = arguments.length;
	        if (length < 2 || obj == null) return obj;
	        for (var index = 1; index < length; index++) {
	            var source = arguments[index],
	                ks = keys(source),
	                l = ks.length;
	            for (var i = 0; i < l; i++) {
	                var key = ks[i];
	                obj[key] = source[key];
	            }
	        }
	        return obj;
	    };

	    var extend2 = function extend2(protoProps, staticProps) {
	        var parent = this;
	        var child;

	        if (protoProps && Object.prototype.hasOwnProperty.call(protoProps, 'constructor')) {
	            child = protoProps.constructor;
	        } else {
	            child = function child() {
	                return parent.apply(this, arguments);
	            };
	        }

	        extend(child, parent, staticProps);

	        var Surrogate = function Surrogate() {
	            this.constructor = child;
	        };
	        Surrogate.prototype = parent.prototype;
	        child.prototype = new Surrogate();

	        if (protoProps) extend(child.prototype, protoProps);

	        child.__super__ = parent.prototype;

	        return child;
	    };

	    // --------------------------------------------------------------------检测是否支持,浏览器补全方法
	    var prefix = '';

	    (function () {
	        var _d = document.createElement('div');
	        var _prefixes = ['Webkit', 'Moz', 'Ms', 'O'];

	        for (var i in _prefixes) {
	            if (_prefixes[i] + 'Transform' in _d.style) {
	                prefix = _prefixes[i];
	                break;
	            }
	        }
	    })();

	    // --------------------------------------------------------------------color辅助方法
	    C3D.getRandomColor = function () {
	        return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
	    };

	    C3D.rgb2hex = function (r, g, b) {
	        return (r << 16 | g << 8 | b).toString(16);
	    };

	    C3D.hex2rgb = function (s) {
	        var _n = Math.floor('0x' + s);
	        var _r = _n >> 16 & 255;
	        var _g = _n >> 8 & 255;
	        var _b = _n & 255;
	        return [_r, _g, _b];
	    };

	    // --------------------------------------------------------------------其他辅助方法
	    function fixed0(n) {
	        return Math.round(n);
	    }

	    function fixed2(n) {
	        return Math.round(n * 100) / 100;
	    }

	    //  webkitTransform 转 WebkitTransform
	    function firstUper(str) {
	        return str.replace(/\b(\w)|\s(\w)/g, function (m) {
	            return m.toUpperCase();
	        });
	    }

	    // --------------------------------------------------------------------3d元素基类
	    C3D.Object = function () {
	        this.initialize.apply(this, arguments);
	    };

	    extend(C3D.Object.prototype, {
	        x: 0,
	        y: 0,
	        z: 0,
	        position: function position(x, y, z) {
	            switch (arguments.length) {
	                case 1:
	                    this.x = x;
	                    this.y = x;
	                    this.z = x;
	                    break;
	                case 2:
	                    this.x = x;
	                    this.y = y;
	                    break;
	                case 3:
	                    this.x = x;
	                    this.y = y;
	                    this.z = z;
	                    break;
	            }
	            return this;
	        },
	        move: function move(x, y, z) {
	            switch (arguments.length) {
	                case 1:
	                    this.x += x;
	                    this.y += x;
	                    this.z += x;
	                    break;
	                case 2:
	                    this.x += x;
	                    this.y += y;
	                    break;
	                case 3:
	                    this.x += x;
	                    this.y += y;
	                    this.z += z;
	                    break;
	            }
	            return this;
	        },

	        rotationX: 0,
	        rotationY: 0,
	        rotationZ: 0,
	        rotation: function rotation(x, y, z) {
	            switch (arguments.length) {
	                case 1:
	                    this.rotationX = x;
	                    this.rotationY = x;
	                    this.rotationZ = x;
	                    break;
	                case 2:
	                    this.rotationX = x;
	                    this.rotationY = y;
	                    break;
	                case 3:
	                    this.rotationX = x;
	                    this.rotationY = y;
	                    this.rotationZ = z;
	                    break;
	            }
	            return this;
	        },
	        rotate: function rotate(x, y, z) {
	            switch (arguments.length) {
	                case 1:
	                    this.rotationX += x;
	                    this.rotationY += x;
	                    this.rotationZ += x;
	                    break;
	                case 2:
	                    this.rotationX += x;
	                    this.rotationY += y;
	                    break;
	                case 3:
	                    this.rotationX += x;
	                    this.rotationY += y;
	                    this.rotationZ += z;
	                    break;
	            }
	            return this;
	        },

	        scaleX: 1,
	        scaleY: 1,
	        scaleZ: 1,
	        scale: function scale(x, y, z) {
	            switch (arguments.length) {
	                case 1:
	                    this.scaleX = x;
	                    this.scaleY = x;
	                    this.scaleZ = x;
	                    break;
	                case 2:
	                    this.scaleX = x;
	                    this.scaleY = y;
	                    break;
	                case 3:
	                    this.scaleX = x;
	                    this.scaleY = y;
	                    this.scaleZ = z;
	                    break;
	            }
	            return this;
	        },

	        width: 0,
	        height: 0,
	        depth: 0,
	        size: function size(x, y, z) {
	            switch (arguments.length) {
	                case 1:
	                    this.width = x;
	                    this.height = x;
	                    this.depth = x;
	                    break;
	                case 2:
	                    this.width = x;
	                    this.height = y;
	                    break;
	                case 3:
	                    this.width = x;
	                    this.height = y;
	                    this.depth = z;
	                    break;
	            }
	            return this;
	        },

	        originX: 0,
	        originY: 0,
	        originZ: 0,
	        __orgO: { x: 0, y: 0, z: 0 },
	        __orgT: { x: 0, y: 0, z: 0 },
	        __orgF: { x: 0, y: 0, z: 0 },
	        origin: function origin(x, y, z) {
	            switch (arguments.length) {
	                case 1:
	                    this.originX = x;
	                    this.originY = x;
	                    this.originZ = x;
	                    break;
	                case 2:
	                    this.originX = x;
	                    this.originY = y;
	                    break;
	                case 3:
	                    this.originX = x;
	                    this.originY = y;
	                    this.originZ = z;
	                    break;
	            }
	            return this;
	        },

	        __sort: ['X', 'Y', 'Z'],
	        sort: function sort(s0, s1, s2) {
	            if (arguments.length > 3) throw 'sort arguments is wrong!';
	            this.__sort = [s0, s1, s2];
	            return this;
	        },

	        initialize: function initialize() {
	            this.x = 0;
	            this.y = 0;
	            this.z = 0;
	            this.rotationX = 0;
	            this.rotationY = 0;
	            this.rotationZ = 0;
	            this.scaleX = 1;
	            this.scaleY = 1;
	            this.scaleZ = 1;
	            this.width = 0;
	            this.height = 0;
	            this.depth = 0;
	            this.originX = '50%';
	            this.originY = '50%';
	            this.originZ = '0px';
	            this.__orgO = { x: '50%', y: '50%', z: '0px' };
	            this.__orgT = { x: '-50%', y: '-50%', z: '0px' };
	            this.__orgF = { x: 0, y: 0, z: 0 };
	            this.children = [];
	        },

	        parent: null,
	        children: null,
	        addChild: function addChild(view) {
	            if (view.parent != null) view.parent.removeChild(view);
	            if (view.__name != '') {
	                if (this[view.__name] !== undefined) throw view.__name + ' already exist!';
	                this[view.__name] = view;
	            }
	            this.children.push(view);
	            view.parent = this;
	            return this;
	        },
	        removeChild: function removeChild(view) {
	            for (var i = this.children.length - 1; i >= 0; i--) {
	                if (this.children[i] === view) {
	                    if (view.__name != '') delete this[view.__name];
	                    this.children.splice(i, 1);
	                    view.parent = null;
	                    return this;
	                }
	            }
	            return this;
	        },
	        removeAllChild: function removeAllChild() {
	            for (var i = this.children.length - 1; i >= 0; i--) {
	                var view = this.children[i];
	                if (view.__name != '') delete this[view.__name];
	                view.parent = null;
	            }
	            this.children = [];
	            return this;
	        },
	        remove: function remove() {
	            if (this.parent != null) {
	                this.parent.removeChild(this);
	            }
	            return this;
	        }

	    });
	    C3D.Object.extend = extend2;

	    C3D.Sprite = C3D.Object.extend({
	        el: null,
	        alpha: 1,
	        visible: true,
	        initialize: function initialize(params) {
	            C3D.Sprite.__super__.initialize.apply(this, [params]);

	            this.__name = '';
	            this.__id = '';
	            this.__class = '';

	            this.alpha = 1;
	            this.visible = true;

	            var _dom;

	            if (params && params.el) {
	                switch (_typeof(params.el)) {
	                    case 'string':
	                        _dom = document.createElement('div');
	                        _dom.innerHTML = params.el;
	                        break;
	                    case 'object':
	                        if (params.el.nodeType === 1) {
	                            _dom = params.el;
	                        }
	                        break;
	                }
	            }

	            if (!_dom) {
	                _dom = document.createElement('div');
	            }

	            _dom.style.position = 'absolute';
	            _dom.style[prefix + 'Transform'] = 'translateZ(0px)';
	            _dom.style[prefix + 'TransformStyle'] = 'preserve-3d';
	            this.el = _dom;
	            _dom.le = this;
	        },

	        __name: '',
	        name: function name(str) {
	            this.__name = str;
	            if (str == '') delete this.el.dataset.name;else this.el.dataset.name = str;
	            return this;
	        },

	        __id: '',
	        id: function id(str) {
	            this.__id = str;
	            this.el.id = str;
	            return this;
	        },

	        __class: '',
	        class: function _class(str) {
	            this.__class = str;
	            this.el.className = str;
	            return this;
	        },

	        update: function update() {
	            this.updateS();
	            this.updateM();
	            this.updateO();
	            this.updateT();
	            this.updateV();
	            return this;
	        },

	        updateS: function updateS() {
	            //this.el.style[prefix + 'TransformOrigin'] = '50% 50%';
	            return this;
	        },

	        updateM: function updateM() {
	            if (!this.__mat) return this;

	            for (var i in this.__mat) {
	                switch (i) {
	                    case 'bothsides':
	                        this.el.style[prefix + 'BackfaceVisibility'] = this.__mat[i] ? 'visible' : 'hidden';
	                        break;
	                    case 'image':
	                        this.el.style['background' + firstUper(i)] = this.__mat[i] !== '' ? 'url(' + this.__mat[i] + ')' : '';
	                        break;
	                    default:
	                        this.el.style['background' + firstUper(i)] = this.__mat[i];
	                        break;
	                }
	            }

	            return this;
	        },

	        updateO: function updateO() {
	            if (typeof this.originX == 'number') {
	                var _x = fixed0(this.originX - this.__orgF.x);
	                this.__orgO.x = _x + 'px';
	                this.__orgT.x = -_x + 'px';
	            } else {
	                this.__orgO.x = this.originX;
	                this.__orgT.x = '-' + this.originX;
	            }

	            if (typeof this.originY == 'number') {
	                var _y = fixed0(this.originY - this.__orgF.y);
	                this.__orgO.y = _y + 'px';
	                this.__orgT.y = -_y + 'px';
	            } else {
	                this.__orgO.y = this.originY;
	                this.__orgT.y = '-' + this.originY;
	            }

	            if (typeof this.originZ == 'number') {
	                var _z = fixed0(this.originZ - this.__orgF.z);
	                this.__orgO.z = _z + 'px';
	                this.__orgT.z = -_z + 'px';
	            } else {
	                this.__orgO.z = this.__orgT.z = '0px';
	            }

	            this.el.style[prefix + 'TransformOrigin'] = this.__orgO.x + ' ' + this.__orgO.y + ' ' + this.__orgO.z;

	            return this;
	        },

	        updateT: function updateT() {
	            var _S0 = this.__sort[0];
	            var _S1 = this.__sort[1];
	            var _S2 = this.__sort[2];
	            this.el.style[prefix + 'Transform'] = 'translate3d(' + this.__orgT.x + ', ' + this.__orgT.y + ', ' + this.__orgT.z + ') ' + 'translate3d(' + fixed2(this.x) + 'px,' + fixed2(this.y) + 'px,' + fixed2(this.z) + 'px) ' + 'rotate' + _S0 + '(' + fixed2(this['rotation' + _S0]) % 360 + 'deg) ' + 'rotate' + _S1 + '(' + fixed2(this['rotation' + _S1]) % 360 + 'deg) ' + 'rotate' + _S2 + '(' + fixed2(this['rotation' + _S2]) % 360 + 'deg) ' + 'scale3d(' + fixed2(this.scaleX) + ', ' + fixed2(this.scaleY) + ', ' + fixed2(this.scaleZ) + ') ';
	            return this;
	        },

	        updateV: function updateV() {
	            this.el.style.opacity = this.alpha;
	            this.el.style.display = this.visible ? 'block' : 'none';
	            return this;
	        },

	        addChild: function addChild(view) {
	            C3D.Sprite.__super__.addChild.apply(this, [view]);
	            if (this.el && view.el) this.el.appendChild(view.el);
	            return this;
	        },

	        removeChild: function removeChild(view) {
	            for (var i = this.children.length - 1; i >= 0; i--) {
	                if (this.children[i] === view) {
	                    if (view.__name != '') delete this[view.__name];
	                    this.children.splice(i, 1);
	                    view.parent = null;
	                    this.el.removeChild(view.el);
	                    return this;
	                }
	            }
	            return this;
	        },

	        removeAllChild: function removeAllChild() {
	            for (var i = this.children.length - 1; i >= 0; i--) {
	                var view = this.children[i];
	                if (view.__name != '') delete this[view.__name];
	                view.parent = null;
	                this.el.removeChild(view.el);
	            }
	            this.children = [];
	            return this;
	        },

	        on: function on(events) {
	            if ((typeof events === 'undefined' ? 'undefined' : _typeof(events)) === 'object') {
	                for (var i in events) {
	                    this.el.addEventListener(i, events[i], false);
	                }
	            } else if (arguments.length === 2) {
	                this.el.addEventListener(arguments[0], arguments[1], false);
	            } else if (arguments.length === 3) {
	                this.el.addEventListener(arguments[0], arguments[1], arguments[2]);
	            }
	            return this;
	        },
	        off: function off(events) {
	            if ((typeof events === 'undefined' ? 'undefined' : _typeof(events)) === 'object') {
	                for (var i in events) {
	                    this.el.removeEventListener(i, events[i], false);
	                }
	            } else if (arguments.length === 2) {
	                this.el.removeEventListener(arguments[0], arguments[1], false);
	            }
	            return this;
	        },

	        buttonMode: function buttonMode(bool) {
	            if (bool) {
	                this.el.style.cursor = 'pointer';
	            } else {
	                this.el.style.cursor = 'auto';
	            }
	            return this;
	        },

	        __mat: null,
	        material: function material(obj) {
	            this.__mat = obj;
	            return this;
	        },

	        visibility: function visibility(obj) {
	            if (obj.visible !== undefined) this.visible = obj.visible;

	            if (obj.alpha !== undefined) this.alpha = obj.alpha;

	            return this;
	        }
	    });

	    // --------------------------------------------------------------------3d核心元件
	    C3D.Stage = C3D.Sprite.extend({
	        camera: null,
	        fov: null,
	        __rfix: null,
	        __pfix: null,
	        initialize: function initialize(params) {
	            C3D.Stage.__super__.initialize.apply(this, [params]);

	            if (!(params && params.el)) {
	                this.el.style.top = '0px';
	                this.el.style.left = '0px';
	                this.el.style.width = '0px';
	                this.el.style.height = '0px';
	            }
	            this.el.style[prefix + 'Perspective'] = '800px';
	            this.el.style[prefix + 'TransformStyle'] = 'flat';
	            this.el.style[prefix + 'Transform'] = '';
	            this.el.style.overflow = 'hidden';

	            this.__rfix = new C3D.Sprite();
	            this.el.appendChild(this.__rfix.el);

	            this.__pfix = new C3D.Sprite();
	            this.__rfix.el.appendChild(this.__pfix.el);

	            this.setCamera(new C3D.Camera());
	        },

	        updateS: function updateS() {
	            this.el.style.width = fixed0(this.width) + 'px';
	            this.el.style.height = fixed0(this.height) + 'px';
	            return this;
	        },
	        updateT: function updateT() {
	            this.fov = fixed0(0.5 / Math.tan(this.camera.fov * 0.5 / 180 * Math.PI) * this.height);
	            this.el.style[prefix + 'Perspective'] = this.fov + 'px';
	            this.__rfix.position(fixed0(this.width / 2), fixed0(this.height / 2), this.fov).rotation(-this.camera.rotationX, -this.camera.rotationY, -this.camera.rotationZ).updateT();
	            this.__pfix.position(-this.camera.x, -this.camera.y, -this.camera.z).updateT();
	            return this;
	        },

	        addChild: function addChild(view) {
	            this.__pfix.addChild(view);
	            return this;
	        },
	        removeChild: function removeChild(view) {
	            this.__pfix.removeChild(view);
	            return this;
	        },
	        setCamera: function setCamera(cam) {
	            if (this.camera) {
	                this.camera.stage = null;
	            }
	            this.camera = cam;
	            this.camera.stage = this;
	            return this;
	        }
	    });

	    C3D.Camera = C3D.Object.extend({
	        fov: null,
	        stage: null,
	        initialize: function initialize(params) {
	            C3D.Camera.__super__.initialize.apply(this, [params]);
	            this.fov = 75;
	        },
	        update: function update() {
	            this.updateT();
	            return this;
	        },
	        updateS: function updateS() {
	            return this;
	        },
	        updateM: function updateM() {
	            return this;
	        },
	        updateT: function updateT() {
	            if (this.stage) this.stage.updateT();
	            return this;
	        },
	        updateV: function updateV() {
	            return this;
	        }
	    });

	    // --------------------------------------------------------------------3d显示元件
	    C3D.Plane = C3D.Sprite.extend({
	        initialize: function initialize(params) {
	            C3D.Plane.__super__.initialize.apply(this, [params]);
	        },

	        update: function update() {
	            C3D.Plane.__super__.update.apply(this);
	            this.updateF();
	            return this;
	        },

	        updateS: function updateS() {
	            this.el.style.width = fixed0(this.width) + 'px';
	            this.el.style.height = fixed0(this.height) + 'px';
	            return this;
	        },

	        updateF: function updateF() {
	            if (!this.__flt) return this;

	            var _flt = '';
	            for (var i in this.__flt) {
	                _flt += this.__flt[i] !== '' ? i + '(' + this.__flt[i].join(',') + ')' : '';
	            }
	            if (_flt !== '') this.el.style[prefix + 'Filter'] = _flt;

	            return this;
	        },

	        __flt: null,
	        filter: function filter(obj) {
	            this.__flt = obj;
	            return this;
	        }
	    });

	    C3D.Box = C3D.Sprite.extend({
	        front: null,
	        back: null,
	        left: null,
	        right: null,
	        up: null,
	        down: null,
	        initialize: function initialize(params) {
	            C3D.Box.__super__.initialize.apply(this, [params]);

	            this.front = new C3D.Plane();
	            this.front.name = 'front';
	            this.addChild(this.front);

	            this.back = new C3D.Plane();
	            this.back.name = 'back';
	            this.addChild(this.back);

	            this.left = new C3D.Plane();
	            this.left.name = 'left';
	            this.addChild(this.left);

	            this.right = new C3D.Plane();
	            this.right.name = 'right';
	            this.addChild(this.right);

	            this.up = new C3D.Plane();
	            this.up.name = 'up';
	            this.addChild(this.up);

	            this.down = new C3D.Plane();
	            this.down.name = 'down';
	            this.addChild(this.down);
	        },

	        update: function update() {
	            C3D.Box.__super__.update.apply(this);
	            this.updateF();
	            return this;
	        },

	        updateS: function updateS() {
	            var _w = fixed0(this.width);
	            var _h = fixed0(this.height);
	            var _d = fixed0(this.depth);

	            this.__orgF.x = this.width / 2;
	            this.__orgF.y = this.height / 2;
	            this.__orgF.z = this.depth / 2;

	            this.front.size(_w, _h, 0).position(0, 0, _d / 2).rotation(0, 0, 0).updateS().updateT();
	            this.back.size(_w, _h, 0).position(0, 0, -_d / 2).rotation(0, 180, 0).updateS().updateT();
	            this.left.size(_d, _h, 0).position(-_w / 2, 0, 0).rotation(0, -90, 0).updateS().updateT();
	            this.right.size(_d, _h, 0).position(_w / 2, 0, 0).rotation(0, 90, 0).updateS().updateT();
	            this.up.size(_w, _d, 0).position(0, -_h / 2, 0).rotation(90, 0, 0).updateS().updateT();
	            this.down.size(_w, _d, 0).position(0, _h / 2, 0).rotation(-90, 0, 0).updateS().updateT();

	            return this;
	        },

	        updateM: function updateM() {
	            if (!this.__mat) return this;

	            var _unique = true;
	            for (var i in this.__mat) {
	                switch (i) {
	                    case 'front':
	                    case 'back':
	                    case 'left':
	                    case 'right':
	                    case 'up':
	                    case 'down':
	                        if (this.__mat[i].bothsides == undefined) this.__mat[i].bothsides = false;
	                        this[i].material(this.__mat[i]).updateM();
	                        _unique = false;
	                        break;
	                }
	            }

	            if (_unique) {
	                if (this.__mat.bothsides == undefined) this.__mat.bothsides = false;
	                this.front.material(this.__mat).updateM();
	                this.back.material(this.__mat).updateM();
	                this.left.material(this.__mat).updateM();
	                this.right.material(this.__mat).updateM();
	                this.up.material(this.__mat).updateM();
	                this.down.material(this.__mat).updateM();
	            }

	            return this;
	        },

	        updateF: function updateF() {
	            if (!this.__flt) return this;

	            this.front.filter(this.__flt).updateF();
	            this.back.filter(this.__flt).updateF();
	            this.left.filter(this.__flt).updateF();
	            this.right.filter(this.__flt).updateF();
	            this.up.filter(this.__flt).updateF();
	            this.down.filter(this.__flt).updateF();

	            return this;
	        },

	        __flt: null,
	        filter: function filter(obj) {
	            this.__flt = obj;
	            return this;
	        }
	    });

	    C3D.Skybox = C3D.Box.extend({
	        updateS: function updateS() {
	            var _w = fixed0(this.width);
	            var _h = fixed0(this.height);
	            var _d = fixed0(this.depth);

	            this.__orgF.x = this.width / 2;
	            this.__orgF.y = this.height / 2;
	            this.__orgF.z = this.depth / 2;

	            this.front.size(_w, _h, 0).position(0, 0, -_d / 2).rotation(0, 0, 0).updateS().updateT();
	            this.back.size(_w, _h, 0).position(0, 0, _d / 2).rotation(0, 180, 0).updateS().updateT();
	            this.left.size(_d, _h, 0).position(-_w / 2, 0, 0).rotation(0, 90, 0).updateS().updateT();
	            this.right.size(_d, _h, 0).position(_w / 2, 0, 0).rotation(0, -90, 0).updateS().updateT();
	            this.up.size(_w, _d, 0).position(0, -_h / 2, 0).rotation(-90, 0, 0).updateS().updateT();
	            this.down.size(_w, _d, 0).position(0, _h / 2, 0).rotation(90, 0, 0).updateS().updateT();

	            return this;
	        }

	    });

	    // --------------------------------------------------------------------创建场景
	    function createObj(obj) {
	        var _o;
	        switch (obj.type) {
	            case 'sprite':
	                _o = new C3D.Sprite(obj.el ? { el: obj.el } : undefined);
	                break;
	            case 'plane':
	                _o = new C3D.Plane(obj.el ? { el: obj.el } : undefined);
	                break;
	            case 'box':
	                _o = new C3D.Box(obj.el ? { el: obj.el } : undefined);
	                break;
	            case 'skybox':
	                _o = new C3D.Skybox(obj.el ? { el: obj.el } : undefined);
	                break;
	        }

	        if (obj.size != undefined) _o.size.apply(_o, obj.size);
	        if (obj.position != undefined) _o.position.apply(_o, obj.position);
	        if (obj.rotation != undefined) _o.rotation.apply(_o, obj.rotation);
	        if (obj.scale != undefined) _o.scale.apply(_o, obj.scale);
	        if (obj.origin != undefined) _o.origin.apply(_o, obj.origin);
	        if (obj.visibility != undefined) _o.visibility.apply(_o, obj.visibility);
	        if (obj.material != undefined) _o.material.apply(_o, obj.material);
	        if (obj.filter != undefined) _o.filter.apply(_o, obj.filter);
	        if (obj.name != undefined) _o.name.apply(_o, [obj.name]);
	        if (obj.id != undefined) _o.id.apply(_o, [obj.id]);
	        if (obj.class != undefined) _o.class.apply(_o, [obj.class]);

	        _o.update();

	        if (obj.children) {
	            for (var i = 0, _len = obj.children.length; i < _len; i++) {
	                var _obj = obj.children[i];
	                var _o2 = createObj(_obj);
	                _o.addChild(_o2);
	            }
	        }

	        return _o;
	    }

	    C3D.create = function (obj) {
	        var _obj;
	        switch (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) {
	            case 'array':
	                _obj = { type: 'sprite', children: obj };
	                break;
	            case 'object':
	                _obj = obj;
	                break;
	            default:
	                return;
	        }

	        return createObj(_obj);
	    };

	    return C3D;
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/*!
	 * VERSION: 0.2.0
	 * DATE: 2016-10-20
	 * GIT: https://github.com/shrekshrek/orienter
	 * @author: Shrek.wang
	 **/

	(function (factory) {

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	            window.Orienter = factory(exports);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        factory(exports);
	    } else {
	        window.Orienter = factory({});
	    }
	})(function (Orienter) {

	    Orienter = function Orienter() {
	        this.initialize.apply(this, arguments);
	    };

	    Orienter.prototype = {
	        lon: 0,
	        lat: 0,
	        direction: 0,
	        fix: 0,
	        os: '',
	        initialize: function initialize(config) {
	            var _config = config || {};

	            this.onOrient = _config.onOrient || function () {};
	            this.onChange = _config.onChange || function () {};

	            this._orient = this._orient.bind(this);
	            this._change = this._change.bind(this);

	            this.lon = 0;
	            this.lat = 0;
	            this.direction = window.orientation || 0;

	            switch (this.direction) {
	                case 0:
	                    this.fix = 0;
	                    break;
	                case 90:
	                    this.fix = -270;
	                    break;
	                case -90:
	                    this.fix = -90;
	                    break;
	            }

	            if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
	                this.os = 'ios';
	            } else {
	                this.os = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') ? 'android' : '';
	            }
	        },

	        init: function init() {
	            window.addEventListener('deviceorientation', this._orient, false);
	            window.addEventListener('orientationchange', this._change, false);
	        },

	        destroy: function destroy() {
	            window.removeEventListener('deviceorientation', this._orient, false);
	            window.removeEventListener('orientationchange', this._change, false);
	        },

	        _change: function _change(event) {
	            this.direction = window.orientation;

	            this.onChange(this.direction);
	        },

	        changeDirectionTo: function changeDirectionTo(n) {
	            this.direction = n;
	        },

	        _orient: function _orient(event) {
	            switch (this.os) {
	                case 'ios':
	                    switch (this.direction) {
	                        case 0:
	                            this.lon = event.alpha + event.gamma;
	                            if (event.beta > 0) this.lat = event.beta - 90;
	                            break;
	                        case 90:
	                            if (event.gamma < 0) {
	                                this.lon = event.alpha - 90;
	                            } else {
	                                this.lon = event.alpha - 270;
	                            }
	                            if (event.gamma > 0) {
	                                this.lat = 90 - event.gamma;
	                            } else {
	                                this.lat = -90 - event.gamma;
	                            }
	                            break;
	                        case -90:
	                            if (event.gamma < 0) {
	                                this.lon = event.alpha - 90;
	                            } else {
	                                this.lon = event.alpha - 270;
	                            }
	                            if (event.gamma < 0) {
	                                this.lat = 90 + event.gamma;
	                            } else {
	                                this.lat = -90 + event.gamma;
	                            }
	                            break;
	                    }
	                    break;
	                case 'android':
	                    switch (this.direction) {
	                        case 0:
	                            this.lon = event.alpha + event.gamma + 30;
	                            if (event.gamma > 90) {
	                                this.lat = 90 - event.beta;
	                            } else {
	                                this.lat = event.beta - 90;
	                            }
	                            break;
	                        case 90:
	                            this.lon = event.alpha - 230;
	                            if (event.gamma > 0) {
	                                this.lat = 270 - event.gamma;
	                            } else {
	                                this.lat = -90 - event.gamma;
	                            }
	                            break;
	                        case -90:
	                            this.lon = event.alpha - 180;
	                            this.lat = -90 + event.gamma;
	                            break;
	                    }
	                    break;
	            }

	            this.lon += this.fix;
	            this.lon %= 360;
	            if (this.lon < 0) this.lon += 360;

	            this.lon = Math.round(this.lon);
	            this.lat = Math.round(this.lat);

	            this.onOrient({
	                a: Math.round(event.alpha),
	                b: Math.round(event.beta),
	                g: Math.round(event.gamma),
	                lon: this.lon,
	                lat: this.lat,
	                dir: this.direction
	            });
	        }

	    };

	    return Orienter;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	(function (bone, C3D, JT, JTL) {
	    // i, n, a, o

	    var randomObj = __webpack_require__(16);
	    var i = bone,
	        n = C3D,
	        a = JT,
	        o = JTL,
	        r = randomObj;
	    module.exports = bone.extend({}, bone.Events, {
	        isOut: !1,
	        init: function init(root) {
	            //三角形图片组放大缩小旋转缓动
	            function triangleImgsTween() {
	                //删除三角形容器缓动
	                JT.kill(triangleImgContainer);
	                var _flag = 0; //判断是否全部三角形放大完成
	                for (var len = triangleImgContainer.children.length, i = 0; i < len; i++) {
	                    var scaleR = randomObj.getRandom(0, 1.5);
	                    //每个三角形图片随机(放大数值scaleR)放大
	                    JT.to(triangleImgContainer.children[i], .6, {
	                        scaleX: scaleR,
	                        scaleY: 1.5 - scaleR,
	                        ease: JT.Elastic.Out,
	                        onUpdate: function onUpdate() {
	                            this.target.updateT();
	                        },
	                        onEnd: function onEnd() {
	                            //放大完成缩小
	                            JT.to(this.target, 1.4, {
	                                scaleX: .2,
	                                scaleY: .2,
	                                ease: JT.Quad.In,
	                                onUpdate: function onUpdate() {
	                                    this.target.updateT();
	                                },
	                                onEnd: function onEnd() {
	                                    _flag++;
	                                    //全部三角形放大完成后震动效果
	                                    _flag >= len && quake(triangleImgContainer, function () {
	                                        //如果isOut为真，执行缓动时间线2 否则继续放大缩小
	                                        self.isOut ? self.tl2.play() : triangleImgsTween();
	                                    });
	                                }
	                            });
	                        }
	                    });
	                }
	                //三角形容器旋转
	                JT.fromTo(triangleImgContainer, 3, { rotationY: 0 }, { rotationY: 540, onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    } });
	                triangleTween();
	                CloudTween(1);
	            }
	            //震动效果缓动
	            function quake(target, callback) {
	                JT.to({ n: 0 }, 1, {
	                    n: 3600,
	                    ease: JT.Quad.In,
	                    onUpdate: function onUpdate() {
	                        target.x = Math.floor(Math.sin(this.curVars.n.num / 180 * Math.PI) * this.curVars.n.num / 1800 * 100) / 100, target.y = Math.floor(Math.sin(this.curVars.n.num / 180 * Math.PI / 2) * this.curVars.n.num / 1800 * 100) / 100, target.updateT();
	                    },
	                    onEnd: function onEnd() {
	                        callback && callback();
	                    }
	                });
	            }
	            //三角形缓动
	            function triangleTween() {
	                JT.kill(triangle);
	                //三角形放大
	                JT.to(triangle, .2, {
	                    scaleX: 1,
	                    scaleY: 1,
	                    ease: JT.Quad.Out,
	                    onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    },
	                    onEnd: function onEnd() {
	                        //放大完成缩小 
	                        JT.to(this.target, 2, {
	                            scaleX: 0,
	                            scaleY: 0,
	                            ease: JT.Quad.In,
	                            onUpdate: function onUpdate() {
	                                this.target.updateT();
	                            }
	                        });
	                    }
	                });
	                var rotationZ = randomObj.getRandom(30, -30);
	                //三角形旋转
	                JT.fromTo(triangle, 2.2, {
	                    rotationZ: 0,
	                    rotationY: -90
	                }, { rotationZ: rotationZ, rotationY: 90, onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    } });
	            }

	            function CloudTween(angleFlag) {
	                JT.kill(Cloud);
	                //三维空间中随机云图片位置
	                for (var len = Cloud.children.length, i = 0; i < len; i++) {
	                    //随机移动距离(即移动后两中心点之间的距离，一个点为000)
	                    var dis = 6 > i ? randomObj.getRandom(50, 150) * angleFlag : randomObj.getRandom(150, 250) * angleFlag,

	                    //随机移动后中心点在xz平面投影点和x轴的角度
	                    rDeg1 = randomObj.getRandom(0, 360) / 180 * Math.PI,
	                        //0-2PI随机数
	                    //随机两中心点之间的连线和xz平面的角度
	                    angle2 = 1 == angleFlag ? randomObj.getRandom(-10, 10) : randomObj.getRandom(-80, 80),
	                        rDeg2 = angle2 / 180 * Math.PI,

	                    //计算移动的y值
	                    y = Math.sin(rDeg2) * dis,

	                    //计算移动后中心点在xz平面投影点到移动前中心点的距离（即000点）
	                    xzDis = Math.abs(Math.cos(rDeg2) * dis);
	                    Cloud.children[i].position(Math.cos(rDeg1) * xzDis, y, Math.sin(rDeg1) * xzDis).updateT();
	                }
	                //云容器放大
	                JT.to(Cloud, .5, {
	                    scaleX: 1,
	                    scaleY: 1,
	                    scaleZ: 1,
	                    ease: JT.Quad.Out,
	                    onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    },
	                    onEnd: function onEnd() {
	                        //放大完缩小
	                        JT.to(this.target, 1, {
	                            scaleX: 0,
	                            scaleY: 0,
	                            scaleZ: 0,
	                            ease: JT.Quad.In,
	                            onUpdate: function onUpdate() {
	                                this.target.updateT();
	                            }
	                        });
	                    }
	                });
	                //云容器旋转
	                JT.fromTo(Cloud, 2, { rotationY: 0 }, { rotationY: 360, onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    } });
	                // 云旋转
	                JT.fromTo(Cloud.children, 2, { rotationY: 0 }, { rotationY: -360, onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    } });
	            }

	            function triangleImgsTween2() {
	                JT.kill(triangleImgContainer);
	                var _flag = 0; //判断是否全部三角形图片完成缓动标志
	                for (var len = triangleImgContainer.children.length, i = 0; i < len; i++) {
	                    var scaleR = randomObj.getRandom(0, 1.5),
	                        //随机放大倍数
	                    dis = randomObj.getRandom(400, 600),
	                        //随机移动距离(即移动后两中心点之间的距离，一个点为000)
	                    //随机移动后中心点在xz平面投影点和x轴的角度
	                    angle1 = randomObj.getRandom(0, 360),
	                        rDeg1 = angle1 / 180 * Math.PI,

	                    //随机两中心点之间的连线和xz平面的角度
	                    angle2 = randomObj.getRandom(-80, 80),
	                        rDeg2 = angle2 / 180 * Math.PI,

	                    //计算移动的y值
	                    y = Math.sin(rDeg2) * dis,

	                    //计算移动后中心点在xz平面投影点到移动前中心点的距离（即000点）
	                    xzDis = Math.abs(Math.cos(rDeg2) * dis);

	                    //移动并放大到随机位置
	                    JT.to(triangleImgContainer.children[i], .6, {
	                        scaleX: scaleR,
	                        scaleY: 1.5 - scaleR,
	                        x: Math.cos(rDeg1) * xzDis,
	                        y: y,
	                        z: Math.sin(rDeg1) * xzDis,
	                        ease: JT.Quad.Out,
	                        onUpdate: function onUpdate() {
	                            this.target.updateT();
	                        },
	                        onEnd: function onEnd() {
	                            //缩小并移动到000点
	                            JT.to(this.target, 1.4, {
	                                scaleX: .2,
	                                scaleY: .2,
	                                x: 0,
	                                y: 0,
	                                z: 0,
	                                ease: JT.Quad.In,
	                                onUpdate: function onUpdate() {
	                                    this.target.updateT();
	                                },
	                                onEnd: function onEnd() {
	                                    _flag++, _flag >= len && quake(triangleImgContainer);
	                                }
	                            });
	                        }
	                    });
	                }
	                JT.fromTo(triangleImgContainer, 3, { rotationY: 0 }, { rotationY: 540, onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    } }), CloudTween(2);
	            }

	            function sceneTween(scene) {
	                self.stage.addChild(scene), JT.to(scene, .2, {
	                    scaleX: 1,
	                    scaleY: 1,
	                    ease: JT.Quad.Out,
	                    onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    },
	                    onEnd: function onEnd() {
	                        JT.to(this.target, 2, {
	                            scaleX: 0,
	                            scaleY: 0,
	                            ease: JT.Quad.In,
	                            onUpdate: function onUpdate() {
	                                this.target.updateT();
	                            },
	                            onEnd: function onEnd() {
	                                this.target.remove();
	                            }
	                        });
	                    }
	                }), JT.fromTo(scene, 2.2, { rotationY: -90 }, {
	                    rotationY: 90,
	                    onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    }
	                }), JT.to($("#bg"), 1, {
	                    opacity: 1,
	                    onEnd: function onEnd() {
	                        JT.to($("#bg"), 1, { opacity: 0, delay: .5 });
	                    }
	                }), JT.fromTo($("#bg"), 2.5, { scale: 1 }, { scale: 1.2 });
	            }

	            function Cloud2Tween() {
	                JT.kill(Cloud2);
	                for (var len = Cloud2.children.length, i = 0; i < len; i++) {
	                    var e = r.getRandom(200, 800),
	                        n = r.getRandom(0, 360),
	                        o = n / 180 * Math.PI,
	                        s = r.getRandom(-25, 25),
	                        h = s / 180 * Math.PI,
	                        u = Math.sin(h) * e,
	                        l = Math.abs(Math.cos(h) * e);
	                    Cloud2.children[i].position(Math.cos(o) * l, u, Math.sin(o) * l).scale(1.5).updateT();
	                }
	                JT.to(Cloud2, .8, {
	                    scaleX: 1,
	                    scaleY: 1,
	                    scaleZ: 1,
	                    ease: JT.Quad.Out,
	                    onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    },
	                    onEnd: function onEnd() {
	                        JT.to(this.target, 1, {
	                            scaleX: 1.5,
	                            scaleY: 1.5,
	                            scaleZ: 1.5,
	                            ease: JT.Quad.In,
	                            onUpdate: function onUpdate() {
	                                this.target.updateT();
	                            }
	                        });
	                    }
	                }), JT.fromTo(Cloud2, 2, { rotationY: 0 }, {
	                    rotationY: 360,
	                    onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    },
	                    onEnd: function onEnd() {
	                        this.target.remove();
	                    }
	                }), JT.fromTo(Cloud2.children, 2, { rotationY: 0 }, { rotationY: -360, onUpdate: function onUpdate() {
	                        this.target.updateT();
	                    } });
	            }
	            // var d = this;//
	            var self = this;
	            this.stage = root; //是一个sprite的实例
	            var triangleImgContainer = new C3D.Sprite(); //创建一个放三角形图片组的容器
	            // var f = triangleImgContainer;
	            triangleImgContainer.position(0, 0, 0).update();
	            for (var i = 0; i < 6; i++) {
	                var triangleImg = new C3D.Plane();
	                triangleImg.size(100, 100).rotation(randomObj.getRandom(-180, 180), randomObj.getRandom(-180, 180), randomObj.getRandom(-180, 180)).scale(.01).material({ image: __webpack_require__(17) }).update(), triangleImgContainer.addChild(triangleImg);
	            }
	            var triangle = new C3D.Sprite(); //创建一个放三角形边框的容器，形成非填充的三角形
	            triangle.position(0, 0, 0).scale(.01).update();
	            for (var i = 0; i < 3; i++) {
	                var line = new C3D.Plane(),
	                    //线条
	                centerToBorder = 60,
	                    //Math.tan(30 / 180 * Math.PI) * 210/2 即等边三角形中心点到边的垂直距离
	                deg120 = 120,
	                    angle = i * deg120 + 90,
	                    //旋转角度
	                deg = angle / 180 * Math.PI; //转成弧度制
	                line.size(2, 210).position(Math.floor(Math.cos(deg) * centerToBorder * 100) / 100, Math.floor(Math.sin(deg) * centerToBorder * 100) / 100, 0).rotation(0, 0, angle).material({ color: "#fff" }).update(), triangle.addChild(line);
	            }

	            var Cloud = new C3D.Sprite();
	            Cloud.position(0, 0, 0).scale(.01).update();
	            var cloudArr = [{ w: 100, h: 100, url: __webpack_require__(18) }, { w: 100, h: 100, url: __webpack_require__(19) }, { w: 100, h: 100, url: __webpack_require__(20) }, { w: 205, h: 120, url: __webpack_require__(21) }, { w: 205, h: 120, url: __webpack_require__(22) }, { w: 205, h: 120, url: __webpack_require__(23) }];
	            for (var i = 0; i < 10; i++) {
	                var index = i < 5 ? i % 3 : (i - 3) % 3 + 3;
	                var cloudImg = new C3D.Plane();
	                cloudImg.size(cloudArr[index].w, cloudArr[index].h).scale(.5).material({ image: cloudArr[index].url }).update(), Cloud.addChild(cloudImg);
	            }

	            var Cloud2 = new C3D.Sprite();
	            Cloud2.position(0, 0, 0).scale(.01).update();
	            for (var i = 0; i < 8; i++) {
	                var index = i % 3 + 3,
	                    cloudImg = new C3D.Plane();
	                cloudImg.size(cloudArr[index].w, cloudArr[index].h).scale(.5).material({ image: cloudArr[index].url }).update(), Cloud2.addChild(cloudImg);
	            }
	            // this.stage.addChild(Cloud2)
	            var scene1 = C3D.create({
	                type: "sprite",
	                scale: [.1],
	                children: [{ type: "plane", size: [388, 501], position: [0, 0, -10], material: [{ image: __webpack_require__(24) }] }, { type: "plane", size: [388, 501], position: [0, 0, 10], material: [{ image: __webpack_require__(25) }] }, { type: "plane", size: [388, 501], position: [0, 0, 0], material: [{ image: __webpack_require__(26) }] }, { type: "plane", size: [388, 501], position: [0, 0, 0], material: [{ image: __webpack_require__(27) }] }, { type: "plane", size: [400, 507], position: [0, 0, -100], material: [{ image: __webpack_require__(28) }] }]
	            });
	            var scene2 = C3D.create({
	                type: "sprite", scale: [.1],
	                children: [{ type: "plane", size: [487, 79], material: [{ image: __webpack_require__(29) }] }]
	            });
	            this.stage.addChild(triangleImgContainer), this.stage.addChild(triangle), this.stage.addChild(Cloud),
	            //缓动时间线1
	            this.tl = JTL.create(), this.tl.add("l1", .5), this.tl.add(function () {
	                triangleImgsTween();
	            }, "l1");
	            //缓动时间线2
	            this.tl2 = JTL.create(), this.tl2.add("l1", .5), this.tl2.add(function () {
	                triangle.remove(), triangleImgsTween2();
	                sceneTween(scene1);
	            }, "l1");
	            this.tl2.add(function () {
	                triangleImgsTween2(), sceneTween(scene2);
	            }, "l1+=3"), this.tl2.add(function () {
	                triangleImgContainer.remove(), Cloud.remove(), self.stage.addChild(Cloud2), Cloud2Tween(), self.trigger("out");
	            }, "l1+=6");
	        },
	        in: function _in() {
	            this.tl.play();
	        },
	        out: function out() {
	            this.isOut = !0;
	        }
	    });
	}).call(exports, __webpack_require__(10), __webpack_require__(13), __webpack_require__(11), __webpack_require__(12));

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function (bone) {
	  var random = bone.extend({}, bone.Events, {
	    init: function init() {},
	    getRandom: function getRandom(min, max) {
	      return min + Math.floor(Math.random() * (max - min) * 100) / 100;
	    }
	  });
	  module.exports = random;
	}).call(exports, __webpack_require__(10));

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/e68f3f63-sanjiaoxing.png";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/b1b7fe47-yuan.png";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/2df84407-jihe3.png";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/82056429-jihe4.png";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/61280ad6-yun2.png";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/9c4df4c0-yun3.png";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/74f5a916-yun4.png";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/44791aee-l1.png";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/e21f3797-l2.png";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/7f85a468-l3.png";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/5395e244-l4.png";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/056b65bd-l5.png";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/7423cb53-l6.png";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	(function (bone) {
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
	        init: function init($main) {
	            this.stage = $main, this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.stage.on("touchstart", this.onTouchStart);
	        },
	        clear: function clear() {
	            this.stage.off("touchstart", this.onTouchStart), this.stage.off("touchmove", this.onTouchMove), this.stage.off("touchend", this.onTouchEnd);
	        },
	        onTouchStart: function onTouchStart(t) {
	            this.firstDir = "", t = t.changedTouches[0], this.originTouchPos.x = this.oldTouchPos.x = this.newTouchPos.x = t.clientX, this.originTouchPos.y = this.oldTouchPos.y = this.newTouchPos.y = t.clientY, this.originTime = this.oldTime = this.newTime = Date.now(), this.dx = this.dy = this.ax = this.ay = 0, this.stage.on("touchmove", this.onTouchMove), this.stage.on("touchend", this.onTouchEnd), this.trigger(this.START);
	        },
	        onTouchMove: function onTouchMove(t) {
	            return t = t.changedTouches[0], this.newTouchPos.x = t.clientX, this.newTouchPos.y = t.clientY, this.newTime = Date.now(), this.checkGesture(), this.oldTouchPos.x = this.newTouchPos.x, this.oldTouchPos.y = this.newTouchPos.y, this.oldTime = this.newTime, !1;
	        },
	        onTouchEnd: function onTouchEnd() {
	            this.newTime = Date.now();
	            var t = (this.newTime - this.oldTime) / 1e3;
	            this.trigger(this.END, { dx: this.dx, dy: this.dy, ax: 2 * this.time > t ? this.ax : 0, ay: 2 * this.time > t ? this.ay : 0, dir: this.firstDir }), this.stage.off("touchmove", this.onTouchMove), this.stage.off("touchend", this.onTouchEnd);
	        },
	        checkGesture: function checkGesture() {
	            this.dx = this.fixed2(this.newTouchPos.x - this.originTouchPos.x), this.dy = this.fixed2(this.newTouchPos.y - this.originTouchPos.y), this.ax = this.fixed2(this.newTouchPos.x - this.oldTouchPos.x), this.ay = this.fixed2(this.newTouchPos.y - this.oldTouchPos.y), this.time = (this.newTime - this.oldTime) / 1e3, "" == this.firstDir && (Math.abs(this.ax) > Math.abs(this.ay) ? this.firstDir = "x" : Math.abs(this.ax) < Math.abs(this.ay) && (this.firstDir = "y")), this.trigger(this.MOVE, { dx: this.dx, dy: this.dy, ax: this.ax, ay: this.ay, dir: this.firstDir });
	        },
	        fixed2: function fixed2(t) {
	            return Math.floor(100 * t) / 100;
	        }
	    });
	}).call(exports, __webpack_require__(10));

/***/ }
/******/ ]);