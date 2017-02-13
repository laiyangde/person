(function(bone,JT){
	 
        	require('../css/popup.css');
            var randomObj = require('./getRandom');
            module.exports = bone.extend({}, bone.Events, { isOut: !1, 
            	init: function($main) {
                    var _self = this;
                    this.stage = $main;
                    var _html = require('./popupHtml');
                    this.stage.append(_html), 
                    this.$el = this.stage.find("#pop"), 
                    this.bg = this.$el.children(".bg"), 
                    this.dots = this.$el.children(".dots"), 
                    this.content = this.$el.children(".content"), 
                    this.share = this.$el.children(".share"), 
                    this.share2 = this.$el.children(".share2"), 
                    this.btnClose = this.$el.children(".close"), 
                    this.textarea = this.$el.find("textarea"), 
                    this.textarea.on("focus", function() { this.innerHTML = "" }).on("blur", function() { 
                    	"" == this.innerHTML && (
                    		this.innerHTML = "要说谁能陪我去造物节一起造，我反正是想不到其他人了，先别废话，来了你就造。＃每个人都是造物者＃") 
                    }), 
                    this.bg.css({ opacity: 0 }), 
                    this.bg.on("touchend", function() { _self.popOff() }), 
                    this.btnClose.on("touchend", function() { _self.popOff() });
                    for (var Q = 0; 16 > Q; Q++) 
                    this.dots.append('<div class="dot"></div>');
                    this.dots.find(".dot").each(function(index, item) { 
                    	JT.set(item, { x: 0, y: 0, scale: .1, rotationX: 0, rotationY: 0, opacity: 0 }) 
                    }), 
                    JT.set(this.dots, { z: -200 }), 
                    JT.set(this.content, { z: 0 }), 
                    JT.set(this.btnClose, { z: 50 }), 
                    JT.set(this.share, { z: 100 }), 
                    JT.set(this.share2, { z: 100 }), 
                    this.$el.find(".invitation .btn").on("touchend", function() { 
                    	_self.shareOn() 
                    }), 
                    this.share.on("touchend", function() { _self.shareOff() }), 
                    this.share2.on("touchend", function() { _self.share2Off(), _self.popOff() }) 
            	}, 
            	curContent: null, 
            	popOn: function(A) {
                    switch (this.trigger("popOn"), this.$el.css({ display: "block" }), JT.to(this.bg, .3, { opacity: .8 }), A) {
                        case 0:
                            this.curContent = this.$el.find(".code");
                            break;
                        case 1:
                            window.ua.weixin ? this.curContent = this.$el.find(".invitation") : this.share2On();
                            break;
                        default:
                            this.curContent = this.$el.find(".other"), 
                            this.curContent.html('<img class="info" src="http://static.im20.com.cn/v1484103737!/show.im20.com.cn/impublic/zwj/images/pop/' + (A + 1) + '/info.jpg" />') 
                        }
                    this.curContent && (this.dotsOn(), 
                    	JT.fromTo(this.btnClose, .3, { rotation: -180, opacity: 0 }, { 
                    		rotation: 0, 
                    		opacity: 1, 
                    		ease: JT.Quad.Out, 
                    		onStart: function() { 
                    			this.target.style.display = "block" 
                    		} 
                    	}), 
                    	JT.to(this.curContent, .3, { 
                    		opacity: 1, 
                    		onStart: function() { this.target.style.display = "block" } 
                    	})) 
                }, 
                popOff: function() {
                    var _self = this;
                    JT.to(this.bg, .3, { opacity: 0, 
                    	onEnd: function() { 
	                    	_self.$el.css({ display: "none" }), 
	                    	_self.trigger("popOff") 
                    	} 
                	}), 
                	this.curContent && (this.dotsOff(), 
                		JT.to(this.btnClose, .3, { 
                			rotation: 180, 
                			opacity: 0, 
                			ease: JT.Quad.In, 
                			onEnd: function() { 
                				this.target.style.display = "none" 
                			} 
                		}), 
                		JT.to(this.curContent, .3, { 
                			opacity: 0, 
                			onEnd: function() { this.target.style.display = "none", _self.curContent = null } 
                		})) 
                }, 
                dotsOn: function() { 
                	this.dots.find(".dot").each(function(index, item) {
                        var g = randomObj.getRandom(-400, 400),
                            Q = randomObj.getRandom(-500, 500),
                            I = 2 * Math.random(),
                            w = randomObj.getRandom(-90, 90),
                            D = randomObj.getRandom(-90, 90),
                            G = Math.random() + .5;
                        JT.kill(item), 
                        JT.to(item, .3, { 
                        	x: g / 2, 
                        	y: Q / 2, 
                        	scale: I / 2, 
                        	rotationX: w / 2, 
                        	rotationY: D / 2, 
                        	opacity: G / 2, 
                        	ease: JT.Quad.Out 
                        }), 
                        JT.call(.25, function() { 
                        	JT.kill(item), 
                        	JT.to(item, 5, { x: g, y: Q, scale: I, rotationX: w, rotationY: D, opacity: G, ease: JT.Quad.Out }) 
                        }) 
                    }) 
                }, 
                dotsOff: function() { 
                	this.dots.find(".dot").each(function(index, item) { 
                		JT.kill(item), 
                		JT.to(item, .3, { x: 0, y: 0, scale: .1, rotationY: 90, opacity: 0, ease: JT.Quad.Out }) }) 
                }, 
                shareOn: function() { 
                	JT.to(this.$el.find(".share"), .3, { opacity: 1, onStart: function() { this.target.style.display = "block" } }) 
                }, 
                shareOff: function() { 
                	JT.to(this.$el.find(".share"), .3, { opacity: 0, onEnd: function() { this.target.style.display = "none" } }) 
                }, 
                share2On: function() { 
                	JT.to(this.$el.find(".share2"), .3, { opacity: 1, onStart: function() { this.target.style.display = "block" } }) 
                }, 
                share2Off: function() { 
                	JT.to(this.$el.find(".share2"), .3, { opacity: 0, onEnd: function() { this.target.style.display = "none" } }) 
                } 
            }) 
		
}).call(exports,require('lib/bone'),require('lib/jstween'))