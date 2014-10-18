/* Lettering.JS 0.6.1 by Dave Rupert  - http://daverupert.com */
(function($){function injector(t,splitter,klass,after){var a=t.text().split(splitter),inject='';if(a.length){$(a).each(function(i,item){inject+='<span class="'+klass+(i+1)+'">'+item+'</span>'+after});t.empty().append(inject)}}var methods={init:function(){return this.each(function(){injector($(this),'','char','')})},words:function(){return this.each(function(){injector($(this),' ','word',' ')})},lines:function(){return this.each(function(){var r="eefec303079ad17405c889e092e105b0";injector($(this).children("br").replaceWith(r).end(),r,'line','')})}};$.fn.lettering=function(method){if(method&&methods[method]){return methods[method].apply(this,[].slice.call(arguments,1))}else if(method==='letters'||!method){return methods.init.apply(this,[].slice.call(arguments,0))}$.error('Method '+method+' does not exist on jQuery.lettering');return this}})(jQuery);

/* ScrollMagic v1.0.6 | (c) Jan Paepke, @janpaepke | license & info: http://janpaepke.github.io/ScrollMagic */
!function($){ScrollMagic=function(e){"use strict";var t="ScrollMagic",n={container:window,vertical:!0,globalSceneOptions:{},loglevel:2},i=this,o=$.extend({},n,e),s=[],a=!1,l=0,c="PAUSED",g=!0,u=0,d=!1,f=!0,h=function(){if($.each(o,function(e){n.hasOwnProperty(e)||(m(2,'WARNING: Unknown option "'+e+'"'),delete o[e])}),o.container=$(o.container).first(),0==o.container.length)return void m(1,"ERROR creating object ScrollMagic: No valid scroll container supplied");g=!$.contains(document,o.container.get(0)),u=o.vertical?o.container.height():o.container.width(),o.container.on("scroll resize",w);try{TweenLite.ticker.addEventListener("tick",v),d=!0}catch(e){o.container.on("scroll resize",v),d=!1}m(3,"added new "+t+" controller")},p=function(){return o.vertical?o.container.scrollTop():o.container.scrollLeft()},v=function(){if(a&&f){var e=$.isArray(a)?a:s,t=l;l=i.scrollPos();var r=l-t;c=0==r?"PAUSED":r>0?"FORWARD":"REVERSE",i.updateScene(e,!0),0==e.length&&o.loglevel>=3&&m(3,"updating 0 Scenes (nothing added to controller)"),a=!1}},w=function(e){"resize"==e.type&&(u=o.vertical?o.container.height():o.container.width()),a=!0},m=function(e){if(o.loglevel>=e){var n="("+t+") ->",i=Array.prototype.splice.call(arguments,1),s=Function.prototype.bind.call(r,window);i.unshift(e,n),s.apply(window,i)}};return this.addScene=function(e){return $.isArray(e)?$.each(e,function(e,t){i.addScene(t)}):e.parent()!=i?e.addTo(i):-1==$.inArray(s,e)&&(s.push(e),$.each(o.globalSceneOptions,function(t,r){e[t]&&e[t].call(e,r)}),m(3,"added Scene ("+s.length+" total)")),i},this.removeScene=function(e){if($.isArray(e))$.each(e,function(e,t){i.removeScene(t)});else{var t=$.inArray(e,s);t>-1&&(s.splice(t,1),e.remove(),m(3,"removed Scene ("+s.length+" total)"))}return i},this.updateScene=function(e,t){return $.isArray(e)?$.each(e,function(r,n){m(3,"updating Scene "+(r+1)+"/"+e.length+" ("+s.length+" total)"),i.updateScene(n,t)}):t?e.update(!0):($.isArray(a)||(a=[]),-1==$.inArray(e,a)&&a.push(e)),i},this.update=function(e){return w({type:"resize"}),e&&v(),i},this.scrollPos=function(e){return arguments.length?($.isFunction(e)||(e=function(){return e}),p=e,i):p.call(i)},this.info=function(e){var t={size:u,vertical:o.vertical,scrollPos:l,scrollDirection:c,container:o.container,isDocument:g};return arguments.length?void 0!==t[e]?t[e]:void m(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(o.loglevel!=e&&(o.loglevel=e),i):o.loglevel},this.enabled=function(e){return arguments.length?(f!=e&&(f=!!e,i.updateScene(s,!0)),i):f},this.destroy=function(e){for(;s.length>0;){var r=s[s.length-1];r.destroy(e)}return o.container.off("scroll resize",w),d?TweenLite.ticker.removeEventListener("tick",v):o.container.off("scroll resize",v),m(3,"destroyed "+t+" (reset: "+(e?"true":"false")+")"),null},h(),i},ScrollScene=function(e){"use strict";var t,i,o,s,a=["onCenter","onEnter","onLeave"],l="ScrollScene",c={duration:0,offset:0,triggerElement:null,triggerHook:a[0],reverse:!0,tweenChanges:!1,loglevel:2},g=this,u=$.extend({},c,e),d="BEFORE",f=0,h={start:0,end:0},p=!0,v=function(){m(),g.on("change.internal",function(e){m(),"loglevel"!=e.what&&"tweenChanges"!=e.what&&("reverse"!=e.what&&null===u.triggerElement&&R(),g.update(),("DURING"!==d&&"duration"==e.what||"AFTER"===d&&0==u.duration)&&y())}),g.on("progress.internal",function(){E(),y()})},w=function(e){if(u.loglevel>=e){var t="("+l+") ->",n=Array.prototype.splice.call(arguments,1),i=Function.prototype.bind.call(r,window);n.unshift(e,t),i.apply(window,n)}},m=function(){if($.each(u,function(e){c.hasOwnProperty(e)||(w(2,'WARNING: Unknown option "'+e+'"'),delete u[e])}),u.duration=parseFloat(u.duration),(!$.isNumeric(u.duration)||u.duration<0)&&(w(1,'ERROR: Invalid value for option "duration":',u.duration),u.duration=c.duration),u.offset=parseFloat(u.offset),$.isNumeric(u.offset)||(w(1,'ERROR: Invalid value for option "offset":',u.offset),u.offset=c.offset),null!=u.triggerElement&&0==$(u.triggerElement).length&&(w(1,'ERROR: Element defined in option "triggerElement" was not found:',u.triggerElement),u.triggerElement=c.triggerElement),$.isNumeric(u.triggerHook)||-1!=$.inArray(u.triggerHook,a)||(w(1,'ERROR: Invalid value for option "triggerHook": ',u.triggerHook),u.triggerHook=c.triggerHook),!$.isNumeric(u.loglevel)||u.loglevel<0||u.loglevel>3){var e=u.loglevel;u.loglevel=c.loglevel,w(1,'ERROR: Invalid value for option "loglevel":',e)}if(i&&t&&u.triggerElement&&u.loglevel>=2){var r=i.getTweensOf($(u.triggerElement)),n=t.info("vertical");$.each(r,function(e,t){var r=t.vars.css||t.vars,i=n?void 0!==r.top||void 0!==r.bottom:void 0!==r.left||void 0!==r.right;return i?(w(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),!1):void 0})}},R=function(){h={start:g.startPosition()},t&&(h.start-=t.info("size")*g.triggerHook()),h.end=h.start+u.duration},E=function(e){var t=e>=0&&1>=e?e:f;if(i){if(-1===i.repeat())if(("DURING"===d||"AFTER"===d&&0==u.duration)&&i.paused())i.play();else{if("DURING"===d||i.paused())return!1;i.pause()}else{if(t==i.progress())return!1;0==u.duration?"AFTER"==d?i.play():i.reverse():u.tweenChanges?i.tweenTo(t*i.duration()):i.progress(t).pause()}return!0}return!1},y=function(e){if(o&&t){var r=t.info();if(e||"DURING"!==d&&("AFTER"!==d||0!=u.duration)){var i={position:s.inFlow?"relative":"absolute",top:0,left:0},a=o.css("position")!=i.position;s.pushFollowers?"AFTER"===d&&0==parseFloat(s.spacer.css("padding-top"))?a=!0:"BEFORE"===d&&0==parseFloat(s.spacer.css("padding-bottom"))&&(a=!0):i[r.vertical?"top":"left"]=u.duration*f,o.css(i),a&&S()}else{"fixed"!=o.css("position")&&(o.css("position","fixed"),S());var l=n(s.spacer,!0),c=u.reverse||0==u.duration?r.scrollPos-h.start:Math.round(f*u.duration*10)/10;l.top-=parseFloat(s.spacer.css("margin-top")),l[r.vertical?"top":"left"]+=c,o.css({top:l.top,left:l.left})}}},S=function(){if(o&&t&&s.inFlow){var e="AFTER"===d,r="BEFORE"===d,n="DURING"===d,i="fixed"==o.css("position"),a=t.info("vertical"),l=s.spacer.children().first(),c=$.inArray(s.spacer.css("display"),["block","flex","list-item","table","-webkit-box"])>-1,g={};c?(g["margin-top"]=r||n&&i?o.css("margin-top"):"auto",g["margin-bottom"]=e||n&&i?o.css("margin-bottom"):"auto"):g["margin-top"]=g["margin-bottom"]="auto",s.relSize.width?i?$(window).width()==s.spacer.parent().width()?o.css("width","inherit"):o.css("width",s.spacer.width()):o.css("width","100%"):(g["min-width"]=l.outerWidth(!0),g.width=i?g["min-width"]:"auto"),s.relSize.height?i?$(window).height()==s.spacer.parent().height()?o.css("height","inherit"):o.css("height",s.spacer.height()):o.css("height","100%"):(g["min-height"]=l.outerHeight(!c),g.height=i?g["min-height"]:"auto"),s.pushFollowers&&(g["padding"+(a?"Top":"Left")]=u.duration*f,g["padding"+(a?"Bottom":"Right")]=u.duration*(1-f)),s.spacer.css(g)}},b=function(){t&&o&&"DURING"===d&&(t.info("isDocument")||y())},F=function(){t&&o&&("DURING"===d||"AFTER"===d&&0==u.duration)&&(s.relSize.width&&$(window).width()!=s.spacer.parent().width()||s.relSize.height&&$(window).height()!=s.spacer.parent().height())&&S()};return this.parent=function(){return t},this.duration=function(e){return arguments.length?(u.duration!=e&&(u.duration=e,g.trigger("change",{what:"duration",newval:e})),g):u.duration},this.offset=function(e){return arguments.length?(u.offset!=e&&(u.offset=e,g.trigger("change",{what:"offset",newval:e})),g):u.offset},this.triggerElement=function(e){return arguments.length?(u.triggerElement!=e&&(u.triggerElement=e,g.trigger("change",{what:"triggerElement",newval:e})),g):u.triggerElement},this.triggerHook=function(e){if(!arguments.length){var t;if($.isNumeric(u.triggerHook))t=u.triggerHook;else switch(u.triggerHook){case"onCenter":t=.5;break;case"onLeave":t=0;break;case"onEnter":default:t=1}return t}return u.triggerHook!=e&&(u.triggerHook=e,g.trigger("change",{what:"triggerHook",newval:e})),g},this.reverse=function(e){return arguments.length?(u.reverse!=e&&(u.reverse=e,g.trigger("change",{what:"reverse",newval:e})),g):u.reverse},this.tweenChanges=function(e){return arguments.length?(u.tweenChanges!=e&&(u.tweenChanges=e,g.trigger("change",{what:"tweenChanges",newval:e})),g):u.tweenChanges},this.loglevel=function(e){return arguments.length?(u.loglevel!=e&&(u.loglevel=e,g.trigger("change",{what:"loglevel",newval:e})),g):u.loglevel},this.state=function(){return d},this.startPosition=function(){var e=u.offset;if(t){var r=t.info();if(null===u.triggerElement)e+=r.size*g.triggerHook();else{for(var i=$(u.triggerElement).first(),o=n(t.info("container"));i.parent().data("ScrollMagicPinSpacer");)i=i.parent();var s=n(i);r.isDocument||(o.top-=r.scrollPos,o.left-=r.scrollPos),e+=r.vertical?s.top-o.top:s.left-o.left}}return e},this.update=function(e){if(t)if(e)if(t.enabled()&&p){var r,n=t.info("scrollPos");null!==u.triggerElement&&R(),r=u.duration>0?(n-h.start)/(h.end-h.start):n>=h.start?1:0,g.trigger("update",{startPos:h.start,endPos:h.end,scrollPos:n}),g.progress(r)}else o&&"fixed"==o.css("position")&&y(!0);else t.updateScene(g,!1);return g},this.progress=function(e){if(arguments.length){var r=!1,n=d,i=t?t.info("scrollDirection"):"PAUSED";if(0>=e&&"BEFORE"!==d&&(e>=f||u.reverse)?(f=0,d="BEFORE",r=!0):e>0&&1>e&&(e>=f||u.reverse)?(f=e,d="DURING",r=!0):e>=1&&"AFTER"!==d?(f=1,d="AFTER",r=!0):"DURING"!==d||u.reverse||y(),r){var o={progress:f,state:d,scrollDirection:i},s=d!=n,a="BEFORE"===d&&0==u.duration;s&&(("DURING"===d||0==u.duration)&&g.trigger("enter",o),("BEFORE"===d||"BEFORE"===n)&&g.trigger(a?"end":"start",o)),g.trigger("progress",o),s&&(("AFTER"===d||"AFTER"===n)&&g.trigger(a?"start":"end",o),("DURING"!==d||0==u.duration)&&g.trigger("leave",o))}return g}return f},this.setTween=function(e){i&&g.removeTween();try{i=new TimelineMax({smoothChildTiming:!0}).add(e).pause()}catch(e){w(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenMaxObject")}finally{return e.repeat&&-1===e.repeat()&&(i.repeat(-1),i.yoyo(e.yoyo())),m(),w(3,"added tween"),E(),g}},this.removeTween=function(e){return i&&(e&&E(0),i.kill(),i=void 0,w(3,"removed tween (reset: "+(e?"true":"false")+")")),g},this.setPin=function(e,t){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t=$.extend({},r,t);if(e=$(e).first(),0==e.length)return w(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),g;if("fixed"==e.css("position"))return w(1,"ERROR: Pin does not work with elements that are positioned 'fixed'."),g;if(o){if(o===e)return g;g.removePin()}o=e,o.parent().hide();var n="absolute"!=o.css("position"),i=o.css(["display","top","left","bottom","right"]),a=o.css(["width","height"]);o.parent().show();var l=$("<div></div>").addClass(t.spacerClass).css(i).data("ScrollMagicPinSpacer",!0).css({position:n?"relative":"absolute","margin-left":"auto","margin-right":"auto","box-sizing":"content-box","-moz-box-sizing":"content-box","-webkit-box-sizing":"content-box"});return!n&&t.pushFollowers&&(w(2,"WARNING: If the pinned element is positioned absolutely pushFollowers is disabled."),t.pushFollowers=!1),s={spacer:l,relSize:{width:"%"===a.width.slice(-1),height:"%"===a.height.slice(-1)},pushFollowers:t.pushFollowers,inFlow:n,origStyle:o.attr("style")},s.relSize.width&&l.css("width",a.width),s.relSize.height&&l.css("height",a.height),o.before(l).appendTo(l).css({position:n?"relative":"absolute",top:"auto",left:"auto",bottom:"auto",right:"auto"}),$(window).on("scroll resize",b),w(3,"added pin"),y(),g},this.removePin=function(e){return o&&(e||!t?(o.insertBefore(s.spacer).attr("style",s.origStyle),s.spacer.remove()):"DURING"===d&&y(!0),$(window).off("scroll resize",b),o=void 0,w(3,"removed pin (reset: "+(e?"true":"false")+")")),g},this.addTo=function(e){return t!=e?(t&&t.removeScene(g),t=e,m(),R(),S(),t.info("container").on("resize",F),w(3,"added "+l+" to controller"),e.addScene(g),g.update(),g):void 0},this.enabled=function(e){return arguments.length?(p!=e&&(p=!!e,g.update(!0)),g):p},this.remove=function(){if(t){t.info("container").off("resize",F);var e=t;t=void 0,w(3,"removed "+l+" from controller"),e.removeScene(g)}return g},this.destroy=function(e){return this.removeTween(e),this.removePin(e),this.remove(),this.off("start end enter leave progress change update change.internal progress.internal"),w(3,"destroyed "+l+" (reset: "+(e?"true":"false")+")"),null},this.on=function(e,t){if($.isFunction(t)){var r=$.trim(e).toLowerCase().replace(/(\w+)\.(\w+)/g,"$1."+l+"_$2").replace(/( |^)(\w+)( |$)/g,"$1$2."+l+"$3");$(g).on(r,t)}else w(1,"ERROR calling method 'on()': Supplied argument is not a valid callback!");return g},this.off=function(e,t){var r=$.trim(e).toLowerCase().replace(/(\w+)\.(\w+)/g,"$1."+l+"_$2").replace(/( |^)(\w+)( |$)/g,"$1$2."+l+"$3");return $(g).off(r,t),g},this.trigger=function(e,t){w(3,"event fired:",e,"->",t);var r={type:$.trim(e).toLowerCase(),target:g};return $.isPlainObject(t)&&(r=$.extend({},t,r)),$(g).trigger(r),g},v(),g};var e=window.console=window.console||{},t=["error","warn","log"];e.log||(e.log=$.noop),$.each(t,function(t,r){e[r]||(e[r]=e.log)});var r=function(r){(r>t.length||0>=r)&&(r=t.length);var n=new Date,i=("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+":"+("00"+n.getMilliseconds()).slice(-3),o=t[r-1],s=Array.prototype.splice.call(arguments,1),a=Function.prototype.bind.call(e[o],e);s.unshift(i),a.apply(e,s)},n=function(e,t){var r={top:0,left:0},n=e[0];if(n)if(n.getBoundingClientRect){var i=n.getBoundingClientRect();r.top=i.top,r.left=i.left,t||(r.top+=$(document).scrollTop(),r.left+=$(document).scrollLeft())}else r=e.offset()||r,t&&(r.top-=$(document).scrollTop(),r.left-=$(document).scrollLeft());return r}}(jQuery);

/*
	@overview
	Debug Extension for ScrollMagic.
	by Jan Paepke 2014 (@janpaepke)
	http://janpaepke.github.io/ScrollMagic

	@version	1.0.8
	@license	Dual licensed under MIT license and GPL.
	@author		Jan Paepke - e-mail@janpaepke.de
*/
(function($) {
	/**
	 * Add Indicators for a ScrollScene.  
	 * __REQUIRES__ ScrollMagic Debug Extension: `jquery.scrollmagic.debug.js`  
	 * The indicatos can only be added _AFTER_ the scene has been added to a controller.
	 * @public

	 * @example
	 * // add basic indicators
	 * scene.addIndicators()
	 *
	 * // passing options
	 * scene.addIndicators({zindex: 100, colorEnd: "#FFFFFF"});
	 *
	 * @param {object} [options] - An object containing one or more options for the indicators.
	 * @param {(string|object)} [options.parent=undefined] - A selector, DOM Object or a jQuery object that the indicators should be added to.  
	 														 If undefined, the scene's container will be used.
	 * @param {number} [options.zindex=-1] - CSS zindex for the indicator container.
	 * @param {number} [options.indent=0] - Additional position offset for the indicators (useful, when having multiple scenes starting at the same time).
	 * @param {number} [options.suffix=""] - This string will be attached to the start and end indicator (useful for identification when working with multiple scenes).
	 * @param {string} [options.colorTrigger=blue] - CSS color definition for the trigger indicator.
	 * @param {string} [options.colorStart=green] - CSS color definition for the start indicator.
	 * @param {string} [options.colorEnd=red] - CSS color definition for the end indicator.
	*/
	ScrollScene.prototype.addIndicators = function(options) {
		var
			DEFAULT_OPTIONS = {
				parent: undefined,
				zindex: -1,
				indent: 0,
				suffix: "",
				colorTrigger: "blue",
				colorStart: "green",
				colorEnd: "red"
			};


		var
			scene = this,
			options = $.extend({}, DEFAULT_OPTIONS, options),
			controller = this.parent();
		if (controller) {
			var
				cParams = controller.info(),
				suffix = (options.labelSuffix == "") ? "" : " " + options.suffix,
				$container = $(options.parent).length > 0
							 ? $(options.parent)
							 : cParams.isDocument ? $("body") : cParams.container, // check if window element (then use body)
				$wrap = $("<div></div>")
						.addClass("ScrollSceneIndicators")
						.data("options", options)
						.css({
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							"text-align": "center",
							"z-index": options.zindex,
							"pointer-events": "none",
							"font-size": 10
						}),
				$triggerHook = $("<div>trigger</div>")
								.css({
									position: "fixed",
									overflow: "visible",
									color: options.colorTrigger
								})
								.addClass("hook");
				$start = $("<div>start" + suffix + "</div>")
								.css({
									position: "absolute",
									overflow: "visible",
									color: options.colorStart
								})
								.addClass("start");
				$end = $("<div>end" + suffix + "</div>")
								.css({
									position: "absolute",
									overflow: "visible",
									color: options.colorEnd
								})
								.addClass("end");

			if ($container.css("position") == "static") {
				$container.css("position", "relative"); // positioning needed for correct display of indicators
			}

			scene.indicators = $wrap
				    			.append($triggerHook)
				    			.append($start)
				    			.append($end)
				    			.appendTo($container);

			scene.updateIndicators();
			function callUpdate(e) {
				if ((e.type == "scroll" || e.type == "resize") && !cParams.isDocument) {
					scene.updateIndicators(true);
				} else {
					scene.updateIndicators();
				}
			}
			scene.on("change.debug", callUpdate)
			cParams.container.on("resize scroll", callUpdate);
			if (!cParams.isDocument) {
				$(window).on("scroll resize", callUpdate);
			}
		} else {
			console.log("ERROR: Please add Scene to controller before adding indicators.")
		}
		return scene;
	};
	ScrollScene.prototype.updateIndicators = function(triggerOnly) {
		var
			scene = this,
			controller = scene.parent(),
			indicators = scene.indicators,
			options = indicators.data("options");
		if (indicators && controller) {
			var
				cParams = controller.info(),
				$triggerHook = indicators.children(".hook"),
				$start = indicators.children(".start"),
				$end = indicators.children(".end"),
				parentOffset = cParams.container.offset() || {top: 0, left: 0},
				parentPos = cParams.vertical ? parentOffset.top : parentOffset.left,
				hookPos = (cParams.size * scene.triggerHook()) + parentPos,
				direction = cParams.vertical ? "v" : "h";

			if (cParams.isDocument) { // account for possible body positioning
				var bodyOffset = indicators.offsetParent().is("body") ? $("body").offset() : parentOffset;
				indicators.css({
					top: -bodyOffset.top,
					left: -bodyOffset.left
				})
			} else {
				hookPos -=  cParams.vertical ? $(document).scrollTop() : $(document).scrollLeft();
			}

			$triggerHook
				.attr("data-hook", hookPos)
				.attr("data-direction", direction)
				.data("parent", cParams.container);

			$otherhook = $(".ScrollSceneIndicators .hook[data-hook=\""+ hookPos +"\"][data-direction="+direction+"]:visible").not($triggerHook);
			if ($otherhook.length > 0 && $otherhook.data("parent") == cParams.container) {
				$triggerHook.hide();
			} else {
				$triggerHook.show();
				var flip = hookPos > cParams.size*0.8; // put name above line?	
				if (cParams.vertical) {
					// triggerHook
					$triggerHook.css({
						top: flip ? hookPos - $triggerHook.height() - 2 : hookPos,
						left: (cParams.isDocument ? cParams.container.width() : parentOffset.left + cParams.container.width() - $(document).scrollLeft()) - 70 - options.indent,
						width: 40,
						height: "auto",
						padding: "0 8px 2px 8px",
						"border-top": flip ? "none" : "1px solid blue",
						"border-bottom": flip ? "1px solid blue" : "none",
						"border-left": "none",
						"border-right": "none"
					});
				} else {
					$triggerHook.css({
						top: (cParams.isDocument ? cParams.container.height() : parentOffset.top + cParams.container.height() - $(document).scrollTop()) - 40 - options.indent,
						left: flip ? hookPos - $triggerHook.width() - 9: hookPos,
						width: "auto",
						height: 20,
						padding: "5px 5px 0 5px",
						"border-top": "none",
						"border-bottom": "none",
						"border-left": flip ? "none" : "1px solid blue",
						"border-right": flip ? "1px solid blue" : "none"
					});
				}
			}
			
			if (!triggerOnly) {
				var
					startPos = scene.triggerOffset(),
					endPos = startPos + scene.duration(),
					resetCSS = {
						"border": "none",
						top: "auto",
						bottom: "auto",
						left: "auto",
						right: "auto"
					};
				
				$start.css(resetCSS);
				$end.css(resetCSS);

				if (scene.duration() == 0) {
					$end.hide();
				} else {
					$end.show();
				}
				if (cParams.vertical) {
					// start
					$start.css({
						top: startPos,
						right: 71-cParams.container.scrollLeft() + options.indent,
						"border-top": "1px solid green",
						padding: "0 8px 0 8px"
					});
					// end
					$end.css({
						top: endPos,
						right: 71-cParams.container.scrollLeft() + options.indent,
						"border-top": "1px solid red",
						padding: "0 8px 0 8px"
					});
				} else {
					// start
					$start.css({
						left: startPos,
						bottom: 40-cParams.container.scrollTop() + options.indent,
						"border-left": "1px solid green",
						padding: "0 8px 0 8px"
					});
					// end
					$end.css({
						left: endPos,
						bottom: 40-cParams.container.scrollTop() + options.indent,
						"border-left": "1px solid red",
						padding: "0 8px 0 8px"
					});
				}
			}
		}
	};
})(jQuery);

/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

/*
  Keypress version 2.0.3 (c) 2014 David Mauro.
  Licensed under the Apache License, Version 2.0
  http://www.apache.org/licenses/LICENSE-2.0
*/
(function(){var o,v,x,y,z,q,w,A,E,F,G,H,r,s,p,m,t,B,I,C={}.hasOwnProperty,j=[].indexOf||function(a){for(var c=0,b=this.length;c<b;c++)if(c in this&&this[c]===a)return c;return-1};q={is_unordered:!1,is_counting:!1,is_exclusive:!1,is_solitary:!1,prevent_default:!1,prevent_repeat:!1};B="meta alt option ctrl shift cmd".split(" ");m="ctrl";o={debug:!1};var D=function(a){var c,b;for(c in a)C.call(a,c)&&(b=a[c],!1!==b&&(this[c]=b));this.keys=this.keys||[];this.count=this.count||0};D.prototype.allows_key_repeat=
function(){return!this.prevent_repeat&&"function"===typeof this.on_keydown};D.prototype.reset=function(){this.count=0;return this.keyup_fired=null};var g=function(a,c){var b,d;this.should_force_event_defaults=this.should_suppress_event_defaults=!1;this.sequence_delay=800;this._registered_combos=[];this._keys_down=[];this._active_combos=[];this._sequence=[];this._sequence_timer=null;this._prevent_capture=!1;this._defaults=c||{};for(b in q)C.call(q,b)&&(d=q[b],this._defaults[b]=this._defaults[b]||d);
a=a||document.body;b=function(a,b,c){if(a.addEventListener)return a.addEventListener(b,c);if(a.attachEvent)return a.attachEvent("on"+b,c)};var e=this;b(a,"keydown",function(a){a=a||window.event;e._receive_input(a,!0);return e._bug_catcher(a)});var f=this;b(a,"keyup",function(a){a=a||window.event;return f._receive_input(a,!1)});var h=this;b(window,"blur",function(){var a,b,c,d;d=h._keys_down;b=0;for(c=d.length;b<c;b++)a=d[b],h._key_up(a,{});return h._keys_down=[]})};g.prototype._bug_catcher=function(a){var c;
if("cmd"===m&&0<=j.call(this._keys_down,"cmd")&&"cmd"!==(c=y(a.keyCode))&&"shift"!==c&&"alt"!==c&&"caps"!==c&&"tab"!==c)return this._receive_input(a,!1)};g.prototype._cmd_bug_check=function(a){return"cmd"===m&&0<=j.call(this._keys_down,"cmd")&&0>j.call(a,"cmd")?!1:!0};g.prototype._prevent_default=function(a,c){if((c||this.should_suppress_event_defaults)&&!this.should_force_event_defaults)if(a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation)return a.stopPropagation()};g.prototype._get_active_combos=
function(a){var c,b;c=[];b=w(this._keys_down,function(b){return b!==a});b.push(a);this._match_combo_arrays(b,function(a){return function(b){if(a._cmd_bug_check(b.keys))return c.push(b)}}(this));this._fuzzy_match_combo_arrays(b,function(a){return function(b){if(!(0<=j.call(c,b))&&!b.is_solitary&&a._cmd_bug_check(b.keys))return c.push(b)}}(this));return c};g.prototype._get_potential_combos=function(a){var c,b,d,e,f;b=[];f=this._registered_combos;d=0;for(e=f.length;d<e;d++)c=f[d],c.is_sequence||0<=j.call(c.keys,
a)&&this._cmd_bug_check(c.keys)&&b.push(c);return b};g.prototype._add_to_active_combos=function(a){var c,b,d,e,f,h,i,g,n,k,l;h=!1;f=!0;d=!1;if(0<=j.call(this._active_combos,a))return!0;if(this._active_combos.length){e=i=0;for(k=this._active_combos.length;0<=k?i<k:i>k;e=0<=k?++i:--i)if((c=this._active_combos[e])&&c.is_exclusive&&a.is_exclusive){c=c.keys;if(!h){g=0;for(n=c.length;g<n;g++)if(b=c[g],h=!0,0>j.call(a.keys,b)){h=!1;break}}if(f&&!h){l=a.keys;g=0;for(n=l.length;g<n;g++)if(b=l[g],f=!1,0>j.call(c,
b)){f=!0;break}}h&&(d?(c=this._active_combos.splice(e,1)[0],null!=c&&c.reset()):(c=this._active_combos.splice(e,1,a)[0],null!=c&&c.reset(),d=!0),f=!1)}}f&&this._active_combos.unshift(a);return h||f};g.prototype._remove_from_active_combos=function(a){var c,b,d,e;b=d=0;for(e=this._active_combos.length;0<=e?d<e:d>e;b=0<=e?++d:--d)if(c=this._active_combos[b],c===a){a=this._active_combos.splice(b,1)[0];a.reset();break}};g.prototype._get_possible_sequences=function(){var a,c,b,d,e,f,h,i,g,n,k,l;d=[];n=
this._registered_combos;f=0;for(g=n.length;f<g;f++){a=n[f];c=h=1;for(k=this._sequence.length;1<=k?h<=k:h>=k;c=1<=k?++h:--h)if(e=this._sequence.slice(-c),a.is_sequence){if(0>j.call(a.keys,"shift")&&(e=w(e,function(a){return"shift"!==a}),!e.length))continue;c=i=0;for(l=e.length;0<=l?i<l:i>l;c=0<=l?++i:--i)if(a.keys[c]===e[c])b=!0;else{b=!1;break}b&&d.push(a)}}return d};g.prototype._add_key_to_sequence=function(a,c){var b,d,e,f;this._sequence.push(a);d=this._get_possible_sequences();if(d.length){e=0;
for(f=d.length;e<f;e++)b=d[e],this._prevent_default(c,b.prevent_default);this._sequence_timer&&clearTimeout(this._sequence_timer);-1<this.sequence_delay&&(this._sequence_timer=setTimeout(function(){return this._sequence=[]},this.sequence_delay))}else this._sequence=[]};g.prototype._get_sequence=function(a){var c,b,d,e,f,h,i,g,n,k,l,u;k=this._registered_combos;h=0;for(n=k.length;h<n;h++)if(c=k[h],c.is_sequence){b=i=1;for(l=this._sequence.length;1<=l?i<=l:i>=l;b=1<=l?++i:--i)if(f=w(this._sequence,function(a){return 0<=
j.call(c.keys,"shift")?!0:"shift"!==a}).slice(-b),c.keys.length===f.length){b=g=0;for(u=f.length;0<=u?g<u:g>u;b=0<=u?++g:--g)if(e=f[b],!(0>j.call(c.keys,"shift")&&"shift"===e)&&!("shift"===a&&0>j.call(c.keys,"shift")))if(c.keys[b]===e)d=!0;else{d=!1;break}}if(d)return c}return!1};g.prototype._receive_input=function(a,c){var b;if(this._prevent_capture)this._keys_down.length&&(this._keys_down=[]);else if(b=y(a.keyCode),(c||this._keys_down.length||!("alt"===b||b===m))&&b)return c?this._key_down(b,a):
this._key_up(b,a)};g.prototype._fire=function(a,c,b,d){"function"===typeof c["on_"+a]&&this._prevent_default(b,!0!==c["on_"+a].call(c["this"],b,c.count,d));"release"===a&&(c.count=0);if("keyup"===a)return c.keyup_fired=!0};g.prototype._match_combo_arrays=function(a,c){var b,d,e,f;f=this._registered_combos;d=0;for(e=f.length;d<e;d++)b=f[d],(!b.is_unordered&&x(a,b.keys)||b.is_unordered&&v(a,b.keys))&&c(b)};g.prototype._fuzzy_match_combo_arrays=function(a,c){var b,d,e,f;f=this._registered_combos;d=0;
for(e=f.length;d<e;d++)b=f[d],(!b.is_unordered&&F(b.keys,a)||b.is_unordered&&E(b.keys,a))&&c(b)};g.prototype._keys_remain=function(a){var c,b,d,e;e=a.keys;b=0;for(d=e.length;b<d;b++)if(a=e[b],0<=j.call(this._keys_down,a)){c=!0;break}return c};g.prototype._key_down=function(a,c){var b,d,e,f,h;(b=z(a,c))&&(a=b);this._add_key_to_sequence(a,c);(b=this._get_sequence(a))&&this._fire("keydown",b,c);for(e in t)b=t[e],c[b]&&(e===a||0<=j.call(this._keys_down,e)||this._keys_down.push(e));for(e in t)if(b=t[e],
e!==a&&0<=j.call(this._keys_down,e)&&!c[b]&&!("cmd"===e&&"cmd"!==m)){b=d=0;for(f=this._keys_down.length;0<=f?d<f:d>f;b=0<=f?++d:--d)this._keys_down[b]===e&&this._keys_down.splice(b,1)}d=this._get_active_combos(a);e=this._get_potential_combos(a);f=0;for(h=d.length;f<h;f++)b=d[f],this._handle_combo_down(b,e,a,c);if(e.length){d=0;for(f=e.length;d<f;d++)b=e[d],this._prevent_default(c,b.prevent_default)}0>j.call(this._keys_down,a)&&this._keys_down.push(a)};g.prototype._handle_combo_down=function(a,c,b,
d){var e,f,h,g,m;if(0>j.call(a.keys,b))return!1;this._prevent_default(d,a&&a.prevent_default);e=!1;if(0<=j.call(this._keys_down,b)&&(e=!0,!a.allows_key_repeat()))return!1;h=this._add_to_active_combos(a,b);b=a.keyup_fired=!1;if(a.is_exclusive){g=0;for(m=c.length;g<m;g++)if(f=c[g],f.is_exclusive&&f.keys.length>a.keys.length){b=!0;break}}if(!b&&(a.is_counting&&"function"===typeof a.on_keydown&&(a.count+=1),h))return this._fire("keydown",a,d,e)};g.prototype._key_up=function(a,c){var b,d,e,f,h,g;b=a;(e=
z(a,c))&&(a=e);e=s[b];c.shiftKey?e&&0<=j.call(this._keys_down,e)||(a=b):b&&0<=j.call(this._keys_down,b)||(a=e);(f=this._get_sequence(a))&&this._fire("keyup",f,c);if(0>j.call(this._keys_down,a))return!1;f=h=0;for(g=this._keys_down.length;0<=g?h<g:h>g;f=0<=g?++h:--h)if((d=this._keys_down[f])===a||d===e||d===b){this._keys_down.splice(f,1);break}d=this._active_combos.length;e=[];g=this._active_combos;f=0;for(h=g.length;f<h;f++)b=g[f],0<=j.call(b.keys,a)&&e.push(b);f=0;for(h=e.length;f<h;f++)b=e[f],this._handle_combo_up(b,
c,a);if(1<d){h=this._active_combos;d=0;for(f=h.length;d<f;d++)b=h[d],void 0===b||0<=j.call(e,b)||this._keys_remain(b)||this._remove_from_active_combos(b)}};g.prototype._handle_combo_up=function(a,c,b){var d,e;this._prevent_default(c,a&&a.prevent_default);e=this._keys_remain(a);if(!a.keyup_fired&&(d=this._keys_down.slice(),d.push(b),!a.is_solitary||v(d,a.keys)))this._fire("keyup",a,c),a.is_counting&&("function"===typeof a.on_keyup&&"function"!==typeof a.on_keydown)&&(a.count+=1);e||(this._fire("release",
a,c),this._remove_from_active_combos(a))};g.prototype.simple_combo=function(a,c){return this.register_combo({keys:a,on_keydown:c})};g.prototype.counting_combo=function(a,c){return this.register_combo({keys:a,is_counting:!0,is_unordered:!1,on_keydown:c})};g.prototype.sequence_combo=function(a,c){return this.register_combo({keys:a,on_keydown:c,is_sequence:!0})};g.prototype.register_combo=function(a){var c,b,d;"string"===typeof a.keys&&(a.keys=a.keys.split(" "));d=this._defaults;for(c in d)C.call(d,
c)&&(b=d[c],void 0===a[c]&&(a[c]=b));a=new D(a);if(I(a))return this._registered_combos.push(a),a};g.prototype.register_many=function(a){var c,b,d,e;e=[];b=0;for(d=a.length;b<d;b++)c=a[b],e.push(this.register_combo(c));return e};g.prototype.unregister_combo=function(a){var c,b,d,e,f,g;if(!a)return!1;var i=this;b=function(a){var b,c,d,e;e=[];b=c=0;for(d=i._registered_combos.length;0<=d?c<d:c>d;b=0<=d?++c:--c)if(a===i._registered_combos[b]){i._registered_combos.splice(b,1);break}else e.push(void 0);
return e};if(null!=a.keys)return b(a);"string"===typeof a&&(a=a.split(" "));f=this._registered_combos;g=[];d=0;for(e=f.length;d<e;d++)c=f[d],null!=c&&(c.is_unordered&&v(a,c.keys)||!c.is_unordered&&x(a,c.keys)?g.push(b(c)):g.push(void 0));return g};g.prototype.unregister_many=function(a){var c,b,d,e;e=[];b=0;for(d=a.length;b<d;b++)c=a[b],e.push(this.unregister_combo(c));return e};g.prototype.get_registered_combos=function(){return this._registered_combos};g.prototype.reset=function(){return this._registered_combos=
[]};g.prototype.listen=function(){return this._prevent_capture=!1};g.prototype.stop_listening=function(){return this._prevent_capture=!0};g.prototype.get_meta_key=function(){return m};o.Listener=g;y=function(a){return r[a]};w=function(a,c){var b;if(a.filter)return a.filter(c);var d,e,f;f=[];d=0;for(e=a.length;d<e;d++)b=a[d],c(b)&&f.push(b);return f};v=function(a,c){var b,d,e;if(a.length!==c.length)return!1;d=0;for(e=a.length;d<e;d++)if(b=a[d],!(0<=j.call(c,b)))return!1;return!0};x=function(a,c){var b,
d,e;if(a.length!==c.length)return!1;b=d=0;for(e=a.length;0<=e?d<e:d>e;b=0<=e?++d:--d)if(a[b]!==c[b])return!1;return!0};E=function(a,c){var b,d,e;d=0;for(e=a.length;d<e;d++)if(b=a[d],0>j.call(c,b))return!1;return!0};A=Array.prototype.indexOf||function(a,c){var b,d,e;b=d=0;for(e=a.length;0<=e?d<=e:d>=e;b=0<=e?++d:--d)if(a[b]===c)return b;return-1};F=function(a,c){var b,d,e,f;e=d=0;for(f=a.length;e<f;e++)if(b=a[e],b=A.call(c,b),b>=d)d=b;else return!1;return!0};p=function(){if(o.debug)return console.log.apply(console,
arguments)};G=function(a){var c,b,d;c=!1;for(d in r)if(b=r[d],a===b){c=!0;break}if(!c)for(d in s)if(b=s[d],a===b){c=!0;break}return c};I=function(a){var c,b,d,e,f,g,i;f=!0;a.keys.length||p("You're trying to bind a combo with no keys:",a);b=g=0;for(i=a.keys.length;0<=i?g<i:g>i;b=0<=i?++g:--g)d=a.keys[b],(c=H[d])&&(d=a.keys[b]=c),"meta"===d&&a.keys.splice(b,1,m),"cmd"===d&&p('Warning: use the "meta" key rather than "cmd" for Windows compatibility');i=a.keys;c=0;for(g=i.length;c<g;c++)d=i[c],G(d)||(p('Do not recognize the key "'+
d+'"'),f=!1);if(0<=j.call(a.keys,"meta")||0<=j.call(a.keys,"cmd")){c=a.keys.slice();g=0;for(i=B.length;g<i;g++)d=B[g],-1<(b=A.call(c,d))&&c.splice(b,1);1<c.length&&(p("META and CMD key combos cannot have more than 1 non-modifier keys",a,c),f=!1)}for(e in a)"undefined"===q[e]&&p("The property "+e+" is not a valid combo property. Your combo has still been registered.");return f};z=function(a,c){var b;if(!c.shiftKey)return!1;b=s[a];return null!=b?b:!1};t={cmd:"metaKey",ctrl:"ctrlKey",shift:"shiftKey",
alt:"altKey"};H={escape:"esc",control:"ctrl",command:"cmd","break":"pause",windows:"cmd",option:"alt",caps_lock:"caps",apostrophe:"'",semicolon:";",tilde:"~",accent:"`",scroll_lock:"scroll",num_lock:"num"};s={"/":"?",".":">",",":"<","'":'"',";":":","[":"{","]":"}","\\":"|","`":"~","=":"+","-":"_",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(","0":")"};r={"0":"\\",8:"backspace",9:"tab",12:"num",13:"enter",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"caps",27:"esc",32:"space",33:"pageup",34:"pagedown",
35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",44:"print",45:"insert",46:"delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",91:"cmd",92:"cmd",93:"cmd",96:"num_0",97:"num_1",98:"num_2",99:"num_3",100:"num_4",101:"num_5",102:"num_6",103:"num_7",104:"num_8",105:"num_9",106:"num_multiply",
107:"num_add",108:"num_enter",109:"num_subtract",110:"num_decimal",111:"num_divide",124:"print",144:"num",145:"scroll",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",223:"`",224:"cmd",225:"alt",57392:"ctrl",63289:"num",59:";"};-1!==navigator.userAgent.indexOf("Mac OS X")&&(m="cmd");-1!==navigator.userAgent.indexOf("Opera")&&(r["17"]="cmd");"function"===typeof define&&define.amd?define([],function(){return o}):"undefined"!==typeof exports&&null!==exports?exports.keypress=
o:window.keypress=o}).call(this);

/*!
 * jQuery Browser Plugin 0.0.6
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2014 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 30-03-2014
 */!function(a,b){"use strict";var c,d;if(a.uaMatch=function(a){a=a.toLowerCase();var b=/(opr)[\/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c=/(ipad)/.exec(a)||/(iphone)/.exec(a)||/(android)/.exec(a)||/(windows phone)/.exec(a)||/(win)/.exec(a)||/(mac)/.exec(a)||/(linux)/.exec(a)||/(cros)/i.exec(a)||[];return{browser:b[3]||b[1]||"",version:b[2]||"0",platform:c[0]||""}},c=a.uaMatch(b.navigator.userAgent),d={},c.browser&&(d[c.browser]=!0,d.version=c.version,d.versionNumber=parseInt(c.version)),c.platform&&(d[c.platform]=!0),(d.android||d.ipad||d.iphone||d["windows phone"])&&(d.mobile=!0),(d.cros||d.mac||d.linux||d.win)&&(d.desktop=!0),(d.chrome||d.opr||d.safari)&&(d.webkit=!0),d.rv){var e="msie";c.browser=e,d[e]=!0}if(d.opr){var f="opera";c.browser=f,d[f]=!0}if(d.safari&&d.android){var g="android";c.browser=g,d[g]=!0}d.name=c.browser,d.platform=c.platform,a.browser=d}(jQuery,window);

var github = (function(){
  function escapeHtml(str) {
    return $('<div/>').text(str).html();
  }
  function render(target, repos){
    var i = 0, fragment = '', t = $(target)[0];

    for(i = 0; i < repos.length; i++) {
      fragment += '<li><a href="'+repos[i].html_url+'">'+repos[i].name+'</a><p>'+escapeHtml(repos[i].description||'')+'</p></li>';
    }
    t.innerHTML = fragment;
  }
  return {
    showRepos: function(options){
      $.ajax({
          url: "https://api.github.com/users/"+options.user+"/repos?sort=pushed&callback=?"
        , dataType: 'jsonp'
        , error: function (err) { $(options.target + ' li.loading').addClass('error').text("Error loading feed"); }
        , success: function(data) {
          var repos = [];
          if (!data || !data.data) { return; }
          for (var i = 0; i < data.data.length; i++) {
            if (options.skip_forks && data.data[i].fork) { continue; }
            repos.push(data.data[i]);
          }
          if (options.count) { repos.splice(options.count); }
          render(options.target, repos);
        }
      });
    }
  };
})();
