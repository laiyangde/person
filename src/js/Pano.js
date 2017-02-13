(function(bone,C3D,JT,JTL){
	// B, C, E, Q
	require('./getRandom');
    module.exports = bone.extend({}, bone.Events, { 
    	init: function(root) {
            function panoTween() { 
                //全景背景容器旋转
            	JT.fromTo(panoBg, 4, { rotationY: -720 }, { 
            		rotationY: 0, 
            		ease: JT.Quad.Out, 
            		onUpdate: function() { this.target.updateT().updateV() } 
            	});
                //全景背景缓动
                for (var i = 0, len = panoBg.children.length; i < len; i++){ 
                	JT.from(panoBg.children[i], 3, { 
                		x: 0, 
                		z: 0, 
                		scaleX: .01, 
                		scaleY: .01, 
                		delay: .05 * i, 
                		ease: JT.Quad.Out, 
                		onUpdate: function() { 
                			this.target.updateT() 
                		}, 
                		onStart: function() { 
                			this.target.visibility({ alpha: 1 }).updateV() 
                		} 
                	});
                }
                //全景元素缓动
                for (var i = 0, len = panoItems.children.length; i < len; i++){ 
                	JT.from(panoItems.children[i], 2, { 
                		x: 0, 
                		z: 0, 
                		scaleX: .01, 
                		scaleY: .01, 
                		scaleZ: .01, 
                		delay: Math.random() + 2, 
                		ease: JT.Quad.Out, 
                		onUpdate: function() { this.target.updateT() }, 
                		onStart: function() { this.target.visibility({ alpha: 1 }).updateV() } 
                	});
                }
                 //全景元素容器旋转
                JT.fromTo(panoItems, 4.2, { rotationY: -720 }, { 
                	rotationY: 0, 
                	ease: JT.Quad.Out, 
                	onUpdate: function() { 
                		this.target.updateT().updateV() 
                	} 
                }), 
                //显示三角形按钮
                JT.fromTo(panoDots, 2, { rotationY: -360, alpha: 0 }, { 
                	rotationY: 0, 
                	alpha: 1, 
                	delay: 2, 
                	ease: JT.Quad.Out, 
                	onUpdate: function() { 
                		this.target.updateT().updateV() 
                	}, 
                	onStart: function() { 
                		this.target.visibility({ alpha: 1 }).updateV() 
                	} 
                }), 
                //显示上下的天空
                panoSky.visibility({ visible: !0 }).updateV();
                // 设置背景图
                var bg = $("#bg");
                bg.css({ "background-image": 'url("http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/zwj/images/pano/cube/front.jpg")' }), 
                JT.to(bg, 2, { opacity: 1, delay: 2 }) 
            }
            var _self = this;
            this.stage = root;
            var count = 20,//图片数量
                Rect = { w: 2580, h: 1170 },
                _width = Rect.w / count,
                radius = 406,//多边形中心点到每条边的垂直距离
                panoData = [
                    { url: require('../images/70.png') }, 
                    { url: require('../images/81.png') }, 
                    { url: require('../images/83.png') }, 
                    { url: require('../images/84.png') }, 
                    { url: require('../images/85.png') }, 
                    { url: require('../images/86.png') }, 
                    { url: require('../images/87.png') }, 
                    { url: require('../images/88.png') }, 
                    { url: require('../images/89.png') }, 
                    { url: require('../images/71.png') }, 
                    { url: require('../images/72.png') }, 
                    { url: require('../images/73.png') }, 
                    { url: require('../images/74.png') }, 
                    { url: require('../images/75.png') }, 
                    { url: require('../images/76.png') }, 
                    { url: require('../images/77.png') }, 
                    { url: require('../images/78.png') }, 
                    { url: require('../images/79.png') }, 
                    { url: require('../images/80.png') }, 
                    { url: require('../images/82.png') }
                ],
            panoBg = new C3D.Sprite;
            panoBg.name("panoBg").position(0, 0, 0).update();
            //20个平面围成一个接近园的多边形柱体
            for (var i = 0; count > i; i++) {
                var _panoP = new C3D.Plane,//每个面
                    _angle = -360 / count * i,//每个面要旋转的角度
                    _deg = _angle / 180 * Math.PI,
                    _r = radius;//形成的圆柱半径
                _panoP.size(_width, Rect.h)
                .position(Math.sin(_deg) * _r, 0, Math.cos(_deg) * _r)
                .rotation(0, _angle + 180, 0).visibility({ alpha: 0 })
                .material({ image: panoData[i].url, bothsides: !1 })//bothsides  BackfaceVisibility=hidden
                .update(), 
                panoBg.addChild(_panoP);
                // console.log(parseInt(Math.sin(_deg) * _r)) 
            }
            var panoItemsData = [
	            { 
	            	x: 37, y: 440, w: 202, h: 107, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p1.png", 
	            	imgs: [require('../images/90.png'), require('../images/91.png')], l: 10 
	            }, 
	            { 
	            	x: 60, y: 451, w: 526, h: 679, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p2.png", 
	            	imgs: [require('../images/119.png'), require('../images/120.png'), require('../images/121.png'), require('../images/122.png'), require('../images/123.png')], l: 25 
	            }, 
	            { 
	            	x: 512, y: 46, w: 304, h: 220, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p3.png", 
	            	imgs: [require('../images/128.png'), require('../images/129.png'), require('../images/130.png'), require('../images/131.png')], l: 15 
	            }, 
	            { x: 271, y: 37, w: 253, h: 128, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p4.png", 
	            	imgs: [require('../images/132.png'), require('../images/133.png'), require('../images/134.png')], l: 20 
	            }, 
	            { x: 61, y: 868, w: 384, h: 159, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p5.png", 
	            	imgs: [require('../images/135.png'), require('../images/136.png'), require('../images/137.png'), require('../images/138.png')], l: 30 
	            }, 
	            { 
	            	x: 433, y: 807, w: 531, h: 350, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p6.png", 
	            	imgs: [require('../images/139.png'), require('../images/140.png'), require('../images/141.png'), require('../images/142.png'), require('../images/143.png')], l: 10 
	            }, 
	            { x: 2151, y: 1028, w: 83, h: 95, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p7.png", 
	            	imgs: [require('../images/144.png'), require('../images/145.png')], l: 10 
	            }, 
	            { 
	            	x: 2292, y: 826, w: 26, h: 52, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p8.png", 
	            	imgs: [require('../images/146.png')], l: 5 
	            }, 
	            { 
	            	x: 2241, y: 37, w: 260, h: 268, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p9.png", 
	            	imgs: [require('../images/147.png'), require('../images/148.png'), require('../images/149.png')], l: 15 
	            }, 
	            { 
	            	x: 2288, y: 817, w: 158, h: 151, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p10.png", 
	            	imgs: [require('../images/92.png'), require('../images/93.png')], l: 15 
	            }, 
	            { 
	            	x: 1775, y: 633, w: 276, h: 410, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p11.png", 
	            	imgs: [require('../images/94.png'), require('../images/95.png'), require('../images/96.png')], l: 20 
	            }, 
	            { 
	            	x: 2097, y: 745, w: 221, h: 265, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p12.png", 
	            	imgs: [require('../images/97.png'), require('../images/98.png')], l: 20 
	            }, 
	            { 
	            	x: 2367, y: 388, w: 176, h: 238, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p13.png", 
	            	imgs: [require('../images/99.png'), require('../images/100.png')], l: 15 
	            }, 
	            { 
	            	x: 933, y: 480, w: 410, h: 547, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p14.png", 
	            	imgs: [require('../images/101.png'), require('../images/102.png'), require('../images/103.png'), require('../images/104.png')], l: 25 
	            }, 
	            { 
	            	x: 1376, y: 949, w: 366, h: 183, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p15.png", 
	            	imgs: [require('../images/105.png'), require('../images/106.png'), require('../images/107.png'), require('../images/108.png')], l: 20 
	            }, 
	            { 
	            	x: 1512, y: 323, w: 262, h: 179, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p16.png", 
	            	imgs: [require('../images/109.png'), require('../images/110.png'), require('../images/111.png')], l: 25 
	            }, 
	            { 
	            	x: 1691, y: 91, w: 253, h: 160, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p17.png", 
	            	imgs: [require('../images/112.png'), require('../images/113.png'), require('../images/114.png')], l: 30 
	            }, 
	            { 
	            	x: 1187, y: 250, w: 184, h: 196, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p18.png", 
	            	imgs: [require('../images/115.png'), require('../images/116.png')], l: 15 
	            }, 
	            { 
	            	x: 1230, y: 117, w: 102, h: 99, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p19.png", 
	            	imgs: [require('../images/117.png'), require('../images/118.png')], l: 10 
	            }, 
	            { 
	            	x: 1056, y: 57, w: 189, h: 188, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p20.png", 
	            	imgs: [require('../images/124.png'), require('../images/125.png')], l: 5 
	            }, 
	            { 
	            	x: 824, y: 291, w: 170, h: 154, 
	            	url: "http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/images/pano/p21.png", 
	            	imgs: [require('../images/126.png'), require('../images/127.png')], l: 10 
	            }
            ],
            panoItems = new C3D.Sprite;
            panoItems.name("panoItems").position(0, 0, 0).update(), 
            $.each(panoItemsData, function(index, item) {
                var itemData = item,
                    startArea = Math.floor(itemData.x / _width),
                    endArea = Math.floor((itemData.x + itemData.w) / _width),
                    panoItem = (itemData.x % _width, new C3D.Sprite);
                panoItem.visibility({ alpha: 0 }).updateV();
                for (var i = startArea; i <= endArea; i++) {
                    var panoItemChild = new C3D.Plane,
                        _angle = -360 / count * i,
                        _deg = _angle / 180 * Math.PI,
                        _r = radius;
                    panoItemChild.size(_width, itemData.h)
                    .position(Math.sin(_deg) * _r, itemData.y + itemData.h / 2 - Rect.h / 2, Math.cos(_deg) * _r)
                    .rotation(0, _angle + 180, 0)
                    .material({ image: itemData.imgs[i - startArea], bothsides: !1 }).update(), 
                    panoItem.addChild(panoItemChild) 
                }
                var F = -360 / count * (endArea + startArea) / 2 + 180,
                    H = F / 180 * Math.PI,
                    J = itemData.l;
                panoItem.position(Math.sin(H) * J, 0, Math.cos(H) * J).updateT(), panoItems.addChild(panoItem) 
            });
            var panoDotsData = [
	            { name: "labelb", x: 1210, y: 484, dot: require('../images/12.png'), w: 180, h: 48, label: require('../images/56.png') }, 
	            { name: "labels", x: 386, y: 976, dot: require('../images/12.png'), w: 198, h: 48, label: require('../images/62.png') }, 
	            { name: "label1", x: 114, y: 180, dot: require('../images/6.png'), w: 264, h: 47, label: require('../images/63.png') }, 
	            { name: "label2", x: 716, y: 256, dot: require('../images/6.png'), w: 229, h: 48, label: require('../images/64.png') }, 
	            { name: "label3", x: 450, y: 376, dot: require('../images/6.png'), w: 159, h: 48, label: require('../images/65.png') }, 
	            { name: "label4", x: 216, y: 666, dot: require('../images/6.png'), w: 288, h: 48, label: require('../images/66.png') }, 
	            { name: "label5", x: 1034, y: 746, dot: require('../images/7.png'), w: 265, h: 47, label: require('../images/67.png') }, 
	            { name: "label6", x: 1438, y: 558, dot: require('../images/7.png'), w: 287, h: 48, label: require('../images/68.png') }, 
	            { name: "label7", x: 1558, y: 756, dot: require('../images/7.png'), w: 264, h: 48, label: require('../images/69.png') }, 
	            { name: "label8", x: 1168, y: 666, dot: require('../images/7.png'), w: 335, h: 48, label: require('../images/57.png') }, 
	            { name: "label9", x: 2042, y: 338, dot: require('../images/5.png'), w: 201, h: 48, label: require('../images/58.png') }, 
	            { name: "label10", x: 1936, y: 600, dot: require('../images/5.png'), w: 283, h: 48, label: require('../images/59.png') }, 
	            { name: "label11", x: 2104, y: 744, dot: require('../images/5.png'), w: 312, h: 48, label: require('../images/60.png') }, 
	            { name: "label12", x: 2006, y: 904, dot: require('../images/5.png'), w: 206, h: 48, label: require('../images/61.png') }
            ],

            panoDots = new C3D.Sprite;
            panoDots.name("panoDots").visibility({ alpha: 0 }).position(0, 0, 0).update();
            $.each(panoDotsData, function(index, item) {
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
                    	}, 
                    	{ 
                    		type: "plane", name: "label", size: [0, itemData.h], 
                    		rotation: [w, 0, 0], origin: [0, 25],
                    		 material: [{ image: itemData.label }], bothsides: !1 
                    	}] 
                    });
                h.position(Math.sin(G) * M, .9 * (itemData.y - Rect.h / 2), Math.cos(G) * M)
                .rotation(0, Q + 180 - 5, 0).updateT(), 
                h.on("touchend", function() { _self.trigger("dot", index) }), 
                h.r0 = Q, 
                h.w0 = itemData.w,
                JT.to(h.dot, .4, { 
                	scaleX: 1.2, 
                	scaleY: 1.2, 
                	yoyo: !0, 
                	repeat: -1, 
                	ease: JT.Quad.InOut, 
                	onUpdate: function() { 
                		this.target.updateT() 
                	} 
                }), 
                panoDots.addChild(h) 
            });

            var panoSky = C3D.create({ 
            	type: "sprite", 
            	name: "panoSky", 
            	visibility: [{ visible: !1 }], 
            	children: [
            	{ type: "plane", size: [500, 600], position: [0, -700, 0], rotation: [-90, 0, 90], material: [{ image: require('../images/11.png') }] },
            	{ type: "plane", size: [500, 600], position: [0, 700, 0], rotation: [90, 0, -90], material: [{ image: require('../images/11.png') }] }
            	] 
            });
            this.stage.addChild(panoBg), 
            this.stage.addChild(panoItems), 
            this.stage.addChild(panoDots), 
            this.stage.addChild(panoSky), 
            this.tl = JTL.create(), 
            this.tl.add("l1", 0), 
            this.tl.add(function() { panoTween() }, "l1"), 
            this.tl.add(function() { _self.trigger("over") }, "l1+=5") 
        }, 
        "in": function() { this.tl.play() }, 
        out: function() {} 
    })	
}).call(exports,require('lib/bone'),require('lib/css3d-engine'),require('lib/jstween'),require('lib/jstimeline'))