// equal heights
	function equalHeight(group) {
		var tallest = 0;
		group.css({'min-height':'0'});
		group.each(function() {
			var thisHeight = $(this).height();
			if(thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.css('min-height',tallest);
	}



$(document).ready(function() {


// рандомный элемент закрывает фенсибокс
	$('.fancybox__close').on('click',function(){
		$.fancybox.close();
		return false;
	});



// обычный фенсибокс
	$('.js_fancybox').fancybox({
		padding: 0,
		margin: 10,
		mouseWheel: false,
		afterShow: function(current, previous) {
			equalHeight($('.phones_cols .phones_col'));
			equalHeight($('.phones_cols .f_info_list'));
		},
		helpers : {
			overlay : {
				css : {
					'background' : 'rgba(0, 0, 0, 0.6)'
					}
			}
		}

	});

// без кнопки "закрыть"
	$('.js_fancybox_noclose').fancybox({
		padding: 0,
		margin: 10,
		closeBtn: false,
		helpers : {
			overlay : {
				css : {
					'background' : 'rgba(0,0,0,.7)'
					}
			}
		}

	});



// фоточный фенсибокс
	$('.js_fancybox_photo').fancybox({
		padding: 10,
		margin: 30,
		nextEffect:'fade',
		prevEffect:'fade',
		helpers : {
			title : {
	            type : 'inside'
	        },
			overlay : {
				css : {
					'background' : 'rgba(0, 0, 0, 0.25)'
					}
			}
		}

	});



//  фенсибокс для видео
	$('.js_fancybox_video').fancybox({
		padding: 10,
		margin: 0,
		mouseWheel: false,
		nextEffect: 'fade',
		prevEffect: 'fade',
		wrapCSS: 'video_fancy',
		helpers : {
			overlay : {
				css : {
					'background' : 'rgba(0, 0, 0, 0.6)'
					}
			}
		}

	});



});
