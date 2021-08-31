$(window).on('load', function() {
	imagegallery();
});

$(window).on('resize', function() {
	imagegallery();
});

function imagegallery() {
	new CubeGallery('imagegallery', {
		
			minHeight: 250,
			margin: 5
		}
	);
	
	$('.imagegallery').addClass('loaded');
}
