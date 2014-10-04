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