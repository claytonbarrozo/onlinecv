$(document).ready(function()
{
	setBindings();
});

function setBindings(){
	$("nav a").click(function(e){
		e.preventDefault();
		var sectionId = e.currentTarget.id + "Section";
			//alert('button id ' + e.currentTarget.id);
	
	$("html body").animate({
		scrollTop: $("#" + sectionId).offset().top
		}, 1000);

	});
}
//Hide Header on Scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
		didScroll = true;
});

setInterval(function(){
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);


function hasScrolled() {
	var st = $(this).scrollTop();
 // Make sure they scroll more than delta
	if(Math.abs(lastScrollTop - st) <= delta)
		return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
	if (st > lastScrollTop && st > navbarHeight){
		$('nav').removeClass('nav-down').addClass('nav-up');
		// Scroll Down
	} else {
		// Scroll Up
		if (st + $(window).height() <$(document).height()) {
			$('nav').removeClass('nav-up').addClass('nav-down');
		}
	}
	lastScrollTop = st;
}
















