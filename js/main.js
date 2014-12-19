$(window).load(function() {
	$("#spacer").height($("#navbar").height());
	$("#top").height($(window).height - $("#navbar").height());
	$("#loading-blue").css({
		"margin-left": "-54px",
		"background-color": "#FFF"
	});
	$("#loading-purple").css({
		"margin-left": "-53px",
		"background-color": "#FFF"
	});
	$("#loading-red").css({
		"margin-left": "-52px",
		"background-color": "#FFF"
	});
	$("#loading-yellow").css({
		"margin-left": "-51px",
		"background-color": "#FFF"
		
	});
	$("#loading-purple2").css({
		"top": "0",
		"z-index": "99999"
	});
	setTimeout(function(){
		$("#circle-container").css("z-index", "9999");
		$("#loading-purple2").css({
			"width": "100vw",
			"border-radius": "0",
			"height": (2 * $("#navbar").height())
			
		});
		$("#grower").css({
			"border-radius": "0",
			"width": "100vw",
			"height": "100vh"
		});
		setTimeout(function(){
			$("#loading-container").css("opacity", "0");
			setTimeout(function(){
				$("#loading-container").css("display", "none");
				$(".jumbotron *").css("box-shadow", "0px 0px 0px rgba(0,0,0,0.23)");
			}, 1000);
		}, 1000);
	}, 1000);
});

$(document).ready(function(){
	$.material.init();
	if (!window.jXHR){
        var jxhr = document.createElement('script');
        jxhr.type = 'text/javascript';
        jxhr.src = 'js/vendor/jXHR.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(jxhr, s);
    }
    github.showRepos({
        user: 'ROODAY',
        count: 10,
        skip_forks: true,
        target: '#gh_repos'
    });
	var listener = new window.keypress.Listener();
	listener.sequence_combo("up up down down left right left right b a enter", function() {
	    var s = document.createElement('script');
	    s.setAttribute('src','https://nthitz.github.io/turndownforwhatjs/tdfw.js');
	    document.body.appendChild(s);
	}, true);
	listener.sequence_combo("a b a c a b b", function() {
	    var i,s,ss = ['http://kathack.com/js/kh.js','http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js'];
	    for(i=0; i!=ss.length; i++) {
	      s = document.createElement('script');
	      s.src = ss[i];
	      document.body.appendChild(s);
	    } void(0);
	}, true);
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
					scrollTop: target.offset().top - $("#navbar").height()
					}, 1000);
					return false;
				}
			}
		});
	});

	$(window).scroll(function() {
	    if ($(window).scrollTop() > $(window).height()) {
	        $(".navbar-brand").css("opacity", "1.0");
	    }
	    else {
	        $(".navbar-brand").css("opacity", "0.0");
	    }
	});
	$(window).resize(function() {
		$("#spacer").height($("#navbar").height());
		$("#top").height($(window).height - $("#navbar").height());
	});
});