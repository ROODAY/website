$(window).load(function() {
	setTimeout(function(){
		$("#loading").fadeOut('slow');
	}, 500);
	$("#spacer").height($("#navbar").height());
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


});