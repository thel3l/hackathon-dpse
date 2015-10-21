/*! Pushy - v0.9.2 - 2014-9-13
* Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
* https://github.com/christophery/pushy/
* by Christopher Yee */

$(function() {
	var pushy = $('.pushy'), //menu css class
		body = $('body'),
		container = $('#container'), //container css class
		push = $('.push'), //css class to add pushy capability
		siteOverlay = $('.site-overlay'), //site overlay
		pushyClass = "pushy-left pushy-open", //menu position & menu open class
		pushyActiveClass = "pushy-active", //css class to toggle site overlay
		containerClass = "site-container", //container open class
		pushClass = "push-push", //css class to add pushy capability
		menuBtn = $('#menuicon, .pushy a'), //css classes to toggle the menu
		menuSpeed = 200, //jQuery fallback menu speed
		menuWidth = pushy.width() + "px"; //jQuery fallback menu width

	function togglePushy(){
		body.toggleClass(pushyActiveClass); //toggle site overlay
		pushy.toggleClass(pushyClass);
		container.toggleClass(containerClass);
		push.toggleClass(pushClass); //css class to add pushy capability
	}

	function openPushyFallback(){
		body.addClass(pushyActiveClass);
		pushy.animate({left: "0px"}, menuSpeed);
		container.animate({left: menuWidth}, menuSpeed);
		push.animate({left: menuWidth}, menuSpeed); //css class to add pushy capability
	}

	function closePushyFallback(){
		body.removeClass(pushyActiveClass);
		pushy.animate({left: "-" + menuWidth}, menuSpeed);
		container.animate({left: "0px"}, menuSpeed);
		push.animate({left: "0px"}, menuSpeed); //css class to add pushy capability
	}

	//checks if 3d transforms are supported removing the modernizr dependency
	cssTransforms3d = (function csstransforms3d(){
		var el = document.createElement('p'),
		supported = false,
		transforms = {
		    'webkitTransform':'-webkit-transform',
		    'OTransform':'-o-transform',
		    'msTransform':'-ms-transform',
		    'MozTransform':'-moz-transform',
		    'transform':'transform'
		};

		// Add it to the body to get the computed style
		document.body.insertBefore(el, null);

		for(var t in transforms){
		    if( el.style[t] !== undefined ){
		        el.style[t] = 'translate3d(1px,1px,1px)';
		        supported = window.getComputedStyle(el).getPropertyValue(transforms[t]);
		    }
		}

		document.body.removeChild(el);

		return (supported !== undefined && supported.length > 0 && supported !== "none");
	})();

	if(cssTransforms3d){
		//toggle menu
		menuBtn.click(function() {
			togglePushy();
		});
		//close menu when clicking site overlay
		siteOverlay.click(function(){
			togglePushy();
		});
	}else{
		//jQuery fallback
		pushy.css({left: "-" + menuWidth}); //hide menu by default
		container.css({"overflow-x": "hidden"}); //fixes IE scrollbar issue

		//keep track of menu state (open/close)
		var state = true;

		//toggle menu
		menuBtn.click(function() {
			if (state) {
				openPushyFallback();
				state = false;
			} else {
				closePushyFallback();
				state = true;
			}
		});

		//close menu when clicking site overlay
		siteOverlay.click(function(){
			if (state) {
				openPushyFallback();
				state = false;
			} else {
				closePushyFallback();
				state = true;
			}
		});
	}

	//Mark active navbar section
    var falsehandler;
    var truesect;
    $.fn.isOnScreen = function(){
        var element = this.get(0);
        var bounds = element.getBoundingClientRect();
        var extraheight = element.offsetHeight - window.innerHeight;
        if (extraheight<=0) {
        	extraheight = 0;
        } else {
        	extraheight = extraheight * 2;
        }
        return bounds.top < window.innerHeight && bounds.top >= 0 && bounds.bottom <= window.innerHeight + extraheight;
	};
	
    $(window).scroll(function(){
        checkandreplace();
    });
    
    function checkandreplace() {
        falsehandler = 0;
        truesect = 0;
        for (i=1;i<=5;i++) {
	        if ($("#sect"+i).isOnScreen() == true) {
	            truesect = i;
	        } else {
	            falsehandler++;
	        };
	    };
	    
        if (falsehandler!==5) {
            for (i=1;i<=5;i++) {
            	
                if (i==truesect) {
                document.getElementById("navlink"+i).className = "active";
				} else {
					document.getElementById("navlink"+i).className = "";
				}
				
        	};
    	};
	};

	checkandreplace();

});