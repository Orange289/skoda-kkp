// callbacks
function sliderLoadedChange(args){
	args.sliderObject.parents('.ios').find('.goTo div').removeClass('selected');
	args.sliderObject.parents('.ios').find('.goTo div:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');	
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


$(document).ready(function() {
	

// make navigation points

$('.ios').each(function() {
	$(this).find('.goTo div').remove();
	var slidesQ = $(this).find('.slider > *').length,
		i = 0;
		
	while (i < slidesQ) {
		$(this).find('.goTo').append('<div></div>');
		i++;
	}    
});



	// start ios
	$('.ios.default').iosSlider({
		desktopClickDrag: true,
		snapToChildren: true,
		infiniteSlider: true,
		autoSlide: false,
		autoSlideHoverPause: true,
		autoSlideTimer: 3000,
		autoSlideTransTimer: 500,
		onSliderLoaded: sliderLoadedChange,
		onSlideChange: sliderLoadedChange
	});
	



	
	// autoplay
	$('.ios.autoplay').iosSlider('autoSlidePlay');
	
	$('.ios.autoplay').hover(function(){
		$(this).iosSlider('autoSlidePause');
	},function(){
		$(this).iosSlider('autoSlidePlay');	
	});
	
	
	// navigation points
	$('.ios .goTo div').on('click', function(){
		$(this).parents('.ios').iosSlider('goToSlide', $(this).index() + 1);
	});
	
	// arrows
	$('.ios .arrow.prev').on('click', function(){$(this).parents('.ios').iosSlider('prevSlide');});
	$('.ios .arrow.next').on('click', function(){$(this).parents('.ios').iosSlider('nextSlide');});


		// start ios full width
	$('.iosSlider').iosSlider({
		snapToChildren: true,
		desktopClickDrag: false,
		infiniteSlider: true,
		snapSlideCenter: true,
		autoSlideTransTimer: 500,
	});
		
		// arrows
	$('.iosSlider .arrow.prev').on('click', function(){$(this).parents('.iosSlider').iosSlider('prevSlide');});
	$('.iosSlider .arrow.next').on('click', function(){$(this).parents('.iosSlider').iosSlider('nextSlide');});


	$('.ios.thumbsSlider').iosSlider({
		desktopClickDrag: false,
		snapToChildren: true,
		snapSlideCenter: true,
		infiniteSlider: true
	});           
			
	
	$('.thumbPrev').on('click', function(){
		$(this).parent().find('.ios').iosSlider('prevSlide');
	});
	$('.thumbNext').on('click', function(){
		$(this).parent().find('.ios').iosSlider('nextSlide');
	});
	

	
	

});