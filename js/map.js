$(document).ready(function() {
	$('.map img').click(function() {
		$('.map-hover').fadeIn(500);
	}); //end click

	$('.map-hover').find('.close-map').click(function(){
		$(this).parent().fadeOut(500);
	}) //end click
}) //end ready
