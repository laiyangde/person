(function(bone){
 	var random = bone.extend({}, bone.Events, { 
 			init: function() {},
 			getRandom:function(min,max){
 				return min + Math.floor(Math.random() * (max - min) * 100) / 100 
 			}
 		})
 	module.exports = random;
}).call(exports,require('lib/bone'))