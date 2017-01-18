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
		}, 1000)

	});
}