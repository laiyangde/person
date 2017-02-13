(function(bone,C3D,JT,JTL){
		// i, n, a, o

	var randomObj = require('./getRandom');
	var i=bone,n=C3D,a=JT,o=JTL,r=randomObj;
	module.exports = bone.extend({},bone.Events,{
		isOut: !1,
		init:function(root){
			//三角形图片组放大缩小旋转缓动
            function triangleImgsTween() { 
            	//删除三角形容器缓动
                JT.kill(triangleImgContainer);
                var _flag = 0;//判断是否全部三角形放大完成
                for (var len = triangleImgContainer.children.length,i = 0; i < len; i++) {
                    var scaleR = randomObj.getRandom(0, 1.5);
                    //每个三角形图片随机(放大数值scaleR)放大
                    JT.to(triangleImgContainer.children[i], .6, { 
                    	scaleX: scaleR, 
                    	scaleY: 1.5 - scaleR, 
                    	ease: JT.Elastic.Out, 
                    	onUpdate: function() { this.target.updateT() }, 
                    	onEnd: function() { 
                    		//放大完成缩小
                    		JT.to(this.target, 1.4, { 
                    			scaleX: .2, 
                    			scaleY: .2, 
                    			ease: JT.Quad.In, 
                    			onUpdate: function() { this.target.updateT() }, 
                    			onEnd: function() {
                    				_flag++;
                    				//全部三角形放大完成后震动效果
                    				_flag >= len && quake(triangleImgContainer, function() { 
                    					//如果isOut为真，执行缓动时间线2 否则继续放大缩小
                    					self.isOut ? self.tl2.play() : triangleImgsTween() 
                    				}) 
                    			} 
                    		}) 
                    	} 
                    }) 
                }
                //三角形容器旋转
                JT.fromTo(triangleImgContainer, 3, { rotationY: 0 }, { rotationY: 540, onUpdate: function() { this.target.updateT()} });
                triangleTween();
                CloudTween(1);
            }
            //震动效果缓动
            function quake(target, callback) { 
                JT.to({ n: 0 }, 1, { 
                	n: 3600, 
                	ease: JT.Quad.In, 
                	onUpdate: function() {
                		target.x = Math.floor(Math.sin(this.curVars.n.num / 180 * Math.PI) * this.curVars.n.num / 1800 * 100) / 100, 
                		target.y = Math.floor(Math.sin(this.curVars.n.num / 180 * Math.PI / 2) * this.curVars.n.num / 1800 * 100) / 100, 
                		target.updateT();
                	}, 
                	onEnd: function() { callback && callback() } 
                }) 
            }
            //三角形缓动
            function triangleTween() { 
                JT.kill(triangle);
                //三角形放大
                JT.to(triangle, .2, { 
                	scaleX: 1, 
                	scaleY: 1, 
                	ease: JT.Quad.Out, 
                	onUpdate: function() { 
                		this.target.updateT() 
                	}, 
                	onEnd: function() {
                        //放大完成缩小 
                		JT.to(this.target, 2, { 
                			scaleX: 0, 
                			scaleY: 0, 
                			ease: JT.Quad.In, 
                			onUpdate: function() { this.target.updateT() } 
                		}) 
                	} 
                });
                var rotationZ = randomObj.getRandom(30, -30);
                //三角形旋转
                JT.fromTo(triangle, 2.2, { 
                	rotationZ: 0, 
                	rotationY: -90 
                }, { rotationZ: rotationZ, rotationY: 90, onUpdate: function() { this.target.updateT() } }) 
            }

            function CloudTween(angleFlag) { 
                JT.kill(Cloud);
                //三维空间中随机云图片位置
                for (var len = Cloud.children.length, i = 0; i < len; i++) {
                    //随机移动距离(即移动后两中心点之间的距离，一个点为000)
                    var dis = 6 > i ? randomObj.getRandom(50, 150) * angleFlag : randomObj.getRandom(150, 250) * angleFlag,
                    //随机移动后中心点在xz平面投影点和x轴的角度
                        rDeg1 = randomObj.getRandom(0, 360) / 180 * Math.PI,//0-2PI随机数
                    //随机两中心点之间的连线和xz平面的角度
                        angle2 = 1 == angleFlag ? randomObj.getRandom(-10, 10) : randomObj.getRandom(-80, 80),
                        rDeg2 = angle2 / 180 * Math.PI,
                    //计算移动的y值
                        y = Math.sin(rDeg2) * dis,
                    //计算移动后中心点在xz平面投影点到移动前中心点的距离（即000点）
                        xzDis = Math.abs(Math.cos(rDeg2) * dis);
                    Cloud.children[i].position(Math.cos(rDeg1) * xzDis, y, Math.sin(rDeg1) * xzDis).updateT() 
                }
                //云容器放大
                JT.to(Cloud, .5, { 
                	scaleX: 1, 
                	scaleY: 1, 
                	scaleZ: 1, 
                	ease: JT.Quad.Out, 
                	onUpdate: function() { 
                		this.target.updateT() 
                	}, 
                	onEnd: function() { 
                        //放大完缩小
                		JT.to(this.target, 1, { 
                			scaleX: 0, 
                			scaleY: 0, 
                			scaleZ: 0, 
                			ease: JT.Quad.In, 
                			onUpdate: function() { this.target.updateT() } 
                		})
                	} 
                });
                //云容器旋转
                JT.fromTo(Cloud, 2, { rotationY: 0 }, { rotationY: 360, onUpdate: function() { this.target.updateT() } });
                // 云旋转
                JT.fromTo(Cloud.children, 2, { rotationY: 0 }, { rotationY: -360, onUpdate: function() { this.target.updateT() } }) 
            }

            function triangleImgsTween2() { 
                JT.kill(triangleImgContainer);
                var _flag = 0;//判断是否全部三角形图片完成缓动标志
                for (var len = triangleImgContainer.children.length, i = 0; i < len; i++) {
                    var scaleR = randomObj.getRandom(0, 1.5),//随机放大倍数
                        dis = randomObj.getRandom(400, 600),//随机移动距离(即移动后两中心点之间的距离，一个点为000)
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
                    	onUpdate: function() { this.target.updateT() }, 
                    	onEnd: function() { 
                            //缩小并移动到000点
                            JT.to(this.target, 1.4, { 
		                		scaleX: .2, 
		                		scaleY: .2, 
		                		x: 0, 
		                		y: 0, 
		                		z: 0, 
		                		ease: JT.Quad.In, 
		                		onUpdate: function() { this.target.updateT() },
		                		onEnd: function() { _flag++, _flag >= len && quake(triangleImgContainer) } 
                    		})
                    	} 
                    }) 
                }
                JT.fromTo(triangleImgContainer, 3, { rotationY: 0 }, { rotationY: 540, onUpdate: function() { this.target.updateT() } }), 
                CloudTween(2) 
            }

            function sceneTween(scene) { 
                self.stage.addChild(scene), 
                JT.to(scene, .2, { 
                	scaleX: 1, 
                	scaleY: 1, 
                	ease: JT.Quad.Out, 
                	onUpdate: function() { this.target.updateT() }, 
                	onEnd: function() { 
                		JT.to(this.target, 2, { 
                			scaleX: 0, 
                			scaleY: 0, 
                			ease: JT.Quad.In, 
                			onUpdate: function() { this.target.updateT() }, 
                			onEnd: function() { this.target.remove() } 
                		}) 
                	} 
                }), 
                JT.fromTo(scene, 2.2, { rotationY: -90 }, { 
                	rotationY: 90, 
                	onUpdate: function() { this.target.updateT() } 
                }), 
                JT.to($("#bg"), 1, { 
                	opacity: 1, 
                	onEnd: function() { JT.to($("#bg"), 1, { opacity: 0, delay: .5 }) } 
                }), 
                JT.fromTo($("#bg"), 2.5, { scale: 1 }, { scale: 1.2 }) 
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
                    Cloud2.children[i].position(Math.cos(o) * l, u, Math.sin(o) * l).scale(1.5).updateT() }
                JT.to(Cloud2, .8, { 
                	scaleX: 1, 
                	scaleY: 1, 
                	scaleZ: 1, 
                	ease: JT.Quad.Out, 
                	onUpdate: function() { this.target.updateT() }, 
                	onEnd: function() { 
                		JT.to(this.target, 1, { 
                			scaleX: 1.5, 
                			scaleY: 1.5, 
                			scaleZ: 1.5, 
                			ease: JT.Quad.In, 
                			onUpdate: function() { this.target.updateT() } 
                		}) 
                	} 
                }), 
                JT.fromTo(Cloud2, 2, { rotationY: 0 }, { 
                	rotationY: 360, 
                	onUpdate: function() { this.target.updateT() }, 
                	onEnd: function() { this.target.remove() } 
                }), 
                JT.fromTo(Cloud2.children, 2, { rotationY: 0 }, { rotationY: -360, onUpdate: function() { this.target.updateT() } }) 
            }
            // var d = this;//
            var self = this;
            this.stage = root;//是一个sprite的实例
            var triangleImgContainer = new C3D.Sprite;//创建一个放三角形图片组的容器
            // var f = triangleImgContainer;
            triangleImgContainer.position(0, 0, 0).update();
            for (var i = 0; i < 6; i++) {
                var triangleImg = new C3D.Plane;
                triangleImg.size(100, 100).rotation(randomObj.getRandom(-180, 180),
                randomObj.getRandom(-180, 180), 
                randomObj.getRandom(-180, 180)).scale(.01).material({ image: require('../images/sanjiaoxing.png') }).update(), 
                triangleImgContainer.addChild(triangleImg);
            }
            var triangle = new C3D.Sprite;//创建一个放三角形边框的容器，形成非填充的三角形
            triangle.position(0, 0, 0).scale(.01).update();
            for (var i = 0; i < 3; i++) {
                var line = new C3D.Plane,//线条
                    centerToBorder = 60,//Math.tan(30 / 180 * Math.PI) * 210/2 即等边三角形中心点到边的垂直距离
                    deg120 = 120,
                    angle = i * deg120 + 90,//旋转角度
                    deg = angle / 180 * Math.PI;//转成弧度制
                line.size(2, 210).position(Math.floor(Math.cos(deg) * centerToBorder * 100) / 100, 
                Math.floor(Math.sin(deg) * centerToBorder * 100) / 100, 0).rotation(0, 0, angle).material({ color: "#fff" }).update(), 
                triangle.addChild(line) 
            }
            
            var Cloud = new C3D.Sprite;
            Cloud.position(0, 0, 0).scale(.01).update();
      		var cloudArr = [
      			{ w: 100, h: 100, url: require('../images/yuan.png')}, 
      			{ w: 100, h: 100, url: require('../images/jihe3.png')}, 
      			{ w: 100, h: 100, url: require('../images/jihe4.png')}, 
      			{ w: 205, h: 120, url: require('../images/yun2.png') }, 
      			{ w: 205, h: 120, url: require('../images/yun3.png')}, 
      			{ w: 205, h: 120, url: require('../images/yun4.png')}
      		]
            for (var i = 0; i < 10; i++) {
                var index = i < 5 ? i % 3 : (i - 3) % 3 + 3;
                var cloudImg = new C3D.Plane;
                cloudImg.size(cloudArr[index].w, cloudArr[index].h)
                .scale(.5)
                .material({ image: cloudArr[index].url }).update(), 
                Cloud.addChild(cloudImg); 
            }
            
            var Cloud2 = new C3D.Sprite;
            Cloud2.position(0, 0, 0).scale(.01).update();
            for (var i = 0; i < 8; i++) {
                var index = i % 3 + 3,
                    cloudImg = new C3D.Plane;
                cloudImg.size(cloudArr[index].w, cloudArr[index].h)
                .scale(.5)
                .material({ image: cloudArr[index].url }).update(), Cloud2.addChild(cloudImg) 
            }
            // this.stage.addChild(Cloud2)
            var scene1 = C3D.create({
	            	type: "sprite", 
	            	scale: [.1], 
	            	children: [
	            		{ type: "plane", size: [388, 501], position: [0, 0, -10], material: [{ image: require('../images/l1.png') }] }, 
	            		{ type: "plane", size: [388, 501], position: [0, 0, 10], material: [{ image: require('../images/l2.png') }] }, 
	            		{ type: "plane", size: [388, 501], position: [0, 0, 0], material: [{ image: require('../images/l3.png') }] }, 
	            		{ type: "plane", size: [388, 501], position: [0, 0, 0], material: [{ image: require('../images/l4.png') }] }, 
	            		{ type: "plane", size: [400, 507], position: [0, 0, -100], material: [{ image: require('../images/l5.png') }] }
	            	] 
            	});
            var scene2 = C3D.create({ 
            	type: "sprite", scale: [.1], 
            	children: [{ type: "plane", size: [487, 79], material: [{ image: require('../images/l6.png') }] }] 
            });
            this.stage.addChild(triangleImgContainer), 
            this.stage.addChild(triangle), 
            this.stage.addChild(Cloud), 
            //缓动时间线1
            this.tl = JTL.create(), 
            this.tl.add("l1", .5), 
            this.tl.add(function() { triangleImgsTween() }, "l1");
            //缓动时间线2
            this.tl2 = JTL.create(), 
            this.tl2.add("l1", .5), 
            this.tl2.add(function() { 
                triangle.remove(), 
                triangleImgsTween2();
                sceneTween(scene1); 
            }, "l1");
            this.tl2.add(function() { triangleImgsTween2(), sceneTween(scene2) }, "l1+=3"), 
            this.tl2.add(function() { 
            	triangleImgContainer.remove(), 
            	Cloud.remove(), 
            	self.stage.addChild(Cloud2), 
            	Cloud2Tween(), 
            	self.trigger("out") 
            }, "l1+=6");
		},
		in: function() {this.tl.play(); },
        out: function() { this.isOut = !0 }
	})
}).call(exports,require('lib/bone'),require('lib/css3d-engine'),require('lib/jstween'),require('lib/jstimeline'))