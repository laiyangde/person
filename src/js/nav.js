(function(bone, JT) { 
	require('../css/nav.css');
   	require('./getRandom');
    module.exports = bone.extend({}, bone.Events, { 
    	isOut: !1, 
    	init: function($main) {
            var _self = this;
            this.stage = $main;
            var _html = require('./navHtml');
            this.stage.append(_html), 
            this.$el = this.stage.find("#nav"), 
            this.bg = this.$el.find(".bg"), 
            this.bar = this.$el.find(".bar"), 
            this.btnOn = this.$el.find(".on"), 
            this.btnOff = this.$el.find(".off"), 
            this.muteOn = this.$el.find(".muteOn"), 
            this.muteOff = this.$el.find(".muteOff"), 
            // this.bgm = $("#bgm")[0], 
            this.bg.css({ display: "none", opacity: 0 }), 
            JT.set(this.bar, { x: 640 }), 
            this.btnOn.on("touchend", function() { _self.navOn() }), 
            this.bg.on("touchend", function() { _self.navOff() }), 
            this.muteOn.on("touchend", function() { 
                _self.muteOn.css({ display: "none" }), 
                _self.muteOff.css({ display: "block" })
                // _self.bgm.pause() 
            }), 
            this.muteOff.on("touchend", function() { 
                _self.muteOn.css({ display: "block" }), 
                _self.muteOff.css({ display: "none" })
                // _self.bgm.play() 
            });
            var Q = [2, 5, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 0, 1];
            this.$el.find(".item").each(function(index, item) { 
            	$(item).on("touchend", function() { 
            		_self.navOff(), 
            		_self.trigger("item", Q[index]) 
            	}) 
            }) 
    	}, 
    	navOn: function() { 
    		this.trigger("navOn"), 
    		JT.to(this.bg, .3, { 
    			opacity: .8, 
    			onStart: function() { this.target.style.display = "block" } 
    		}), 
    		JT.to(this.bar, .3, { 
    			x: 0, 
    			ease: JT.Quad.Out 
    		}) 
    	}, 
    	navOff: function() { 
    		this.trigger("navOff"), 
    		JT.to(this.bg, .3, { 
    			opacity: 0, 
    			onEnd: function() { 
    				this.target.style.display = "none" 
    			}
    		}), 
    		JT.to(this.bar, .3, { 
    			x: 640,
    			ease: JT.Quad.Out 
    		}) 
    	} 
    }) 
}).call(exports, require('lib/bone'), require('lib/jstween'))