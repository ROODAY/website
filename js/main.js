/*
App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return ['red', 'yellow', 'blue'];
	}
});
*/


$(window).load(function() {
	setTimeout(function(){
		$("#loading").fadeOut('slow');
	}, 500);
});

$(document).ready(function(){
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
	var scrollAmount = $(document.body.scrollTop);
	slideNav();

	causeRepaintsOn = $("h1, h2, h3, h4, h5, p");
	$(window).resize(function() {
		causeRepaintsOn.css("z-index", 1);
		$(".sizeus div").css("min-height", "100vh");
	});

	$(window).scroll(function () {
		slideNav();
	});

	$("#rooday h1").fitText(0.5);//, {minFontSize: '150px', maxFontSize: '30rem'});

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
					scrollTop: target.offset().top - 51
					}, 1000);
					return false;
				}
			}
		});
	});
});

function slideNav() {
    if ($(window).scrollTop() >= ($(window).height() - $("#navbar").height())) {
        $('.navbar').stop().animate({"margin-top": '0'});
    } else {
        $('.navbar').stop().animate({"margin-top": -1 * $("#navbar").height()});
    }
}