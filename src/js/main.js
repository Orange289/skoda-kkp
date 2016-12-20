$(document).ready(function(){

//main slider init
	if(  $('.js_slick_slider').length>0) {
		$('.js_slick_slider').slick({
			pauseOnHover: false,
			autoplay: true,
			autoplaySpeed: 6000,
	    dots: true,
	      infinite: true,
	      speed: 200,
	      fade: true,
	      cssEase: 'linear',
	      arrows: true,
	      prevArrow: $('.slick_prev'),
	      nextArrow: $('.slick_next')
	  });

	  $('.js_slick_slider').hover(
	  	function(){
		  	$('.js_slick_slider').slick('slickPause');
		  }, function(){
		  	$('.js_slick_slider').slick('slickPlay');
		  }
	  );
	}



// tabs
	$('.js_tabs .js_tab').each(function(){$(this).addClass('hideme');});

	$('.js_tabs').each(function(){

		if($(this).find('.js_tabs_select .current').length){
			var targetTab = $(this).find('.current a').attr('href');
			$(targetTab).addClass('current').removeClass('hideme');
		}
		else {
			var targetTab = $(this).find('.js_tabs_select li:first-child a').attr('href');
			$(this).find('.js_tabs_select li:first-child').addClass('current');
			$(targetTab).addClass('current').removeClass('hideme');
		}
	});

	$('.js_tabs_select a').click(function(){
		if(!$(this).parent('li').hasClass('current')){
			var targetTab = $(this).attr('href');
			$(this).closest('.js_tabs').find('> .js_tabs_select .current').removeClass('current');
			$(this).closest('.js_tabs').find('> .js_tab.current').addClass('hideme').removeClass('current');
			$(this).parent('li').addClass('current');
			$(targetTab).addClass('current').removeClass('hideme');
		}
		return false;
	});
// ***************************


// SLIDEDOWN
$(document).on('click','.js_slidedown_trigger',function(){
	if(!$(this).parents('.js_slidedown').hasClass('opened')){
		$(this).parents('.js_slidedown').find('.js_slidedown_content').stop(true,true).slideDown(500);
		$(this).parents('.js_slidedown').addClass('opened');
	}
	else {
		$(this).parents('.js_slidedown').find('.js_slidedown_content').stop(true,true).slideUp(300,function(){$(this).parents('.js_slidedown').removeClass('opened');});
	}
});




// show call forms
$(document).on('click','.js_calls_show',function(){
		if(!$(this).parents('.calls_shown').length){
			$('.calls_shown').toggleClass('calls_shown').find('.js_calls_show_wrapper').toggleClass('hideme');
		}
		$(this).parents('.phones_col').toggleClass('calls_shown').find('.js_calls_show_wrapper').toggleClass('hideme');
// next function is in fancybox/confing_fancybox.js now
		equalHeight($('.phones_cols .phones_col'));
});


// move content under the header
var moveUnder = $('.js_move_under_header');
if(moveUnder.length){
	var greenHeight = $('.menu_green').innerHeight(),
	    titleHalf = $('.head_title').outerHeight()/2,
		headHeight = $('.menu_green_wrapper').innerHeight()-greenHeight,
		mainPadding = parseInt($('.main_content').css('padding-top')),
		underMargin = 0 - (headHeight + mainPadding - titleHalf);

	moveUnder.css('margin-top',underMargin);

}

// right menu opener
$(document).on('click','.frm_trigger',function(){
	$(this).closest('.fixed_right_menu').toggleClass('frm_closed');
});

// GREEN MENU DROPS POSITION
var greenDropW = parseInt($('.green_drop').css('width')),
	grenMenuW = $('.menu_green').innerWidth();

$(window).load(function(){
	$('.menu_green .hasdrop').each(function(){
		var greenItemPos =$(this).position().left;
		if(!$(this).find('.dropdown').hasClass('green_simple_drop')) {
			if(greenItemPos<grenMenuW-greenDropW){

					$(this).find('.dropdown').css('left',greenItemPos);
			}
			else{$(this).find('.dropdown').css({'left':'auto','right':0});}
		}
	});
});


// GREEN MENU dropdown tabs
$('.dropmodels_wrapper').each(function(){
	$(this).find('.dropmodel_list_item:first').addClass('active');
	var dropTabTarget = '#' + $(this).find('.dropmodel_list_item.active .dropmodel_list_link').attr('data-id');
	$(this).find(dropTabTarget).addClass('active');
});

$('.dropmodel_list_item').hover(function(){
	if(!$(this).hasClass('active')){
		$(this).closest('.dropmodels_lists').find('.active').removeClass('active');
		$(this).addClass('active');
		var dropTabTarget = '#' + $(this).find('.dropmodel_list_link').attr('data-id');
		$(this).closest('.dropmodels_wrapper').find('.dropmodel_tab').removeClass('active');
		$(dropTabTarget).addClass('active');
	}
},function(){
	// do nothing
});


// crossbrowser placeholder in forms

	if(!Modernizr.input.placeholder) {

		$('input').each(function(){
			if($(this).attr('placeholder')){$(this).addClass('placeholder');}
		});

		$('input[type=password]').addClass('password');

		var phTarget = $('input.placeholder');

		phTarget.each(function(){
			if($(this).val() == '') {
				thisPlaceholder = $(this).attr('placeholder');
				$(this).val(thisPlaceholder);
			}
		});

		phTarget.focus(function(){
			if($(this).val() == $(this).attr('placeholder')) {
				$(this).val('');
			}
		});
		phTarget.blur(function(){
			if($(this).val() == '') {
				thisPlaceholder = $(this).attr('placeholder');
				$(this).val(thisPlaceholder);
			}
		});

		phTarget.parents('form').submit(function(){
			if($(this).val() == $(this).attr('placeholder')) {
//				return false;
			}
		});
	}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// CUSTOM CHECKBOX/RADIO
function customCheck(checkTarget){
	if(checkTarget.is(':checked')){
			if(checkTarget.is(':radio')){
			checkTarget.parent().siblings().removeClass('checked');
		}
		checkTarget.parent().addClass('checked');
	}
	else{
		checkTarget.parent().removeClass('checked');
	}
}
// check defaults or F5
$('.js_custom_check input').each(function(){
	customCheck($(this));
});
// on change
$(document).on('change','.js_custom_check input',function(){
	customCheck($(this));
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




$('.js_hidden_content').click(function(e){
	$(this).toggleClass('opened').next('.item_hidden_content').slideToggle(200);
	e.preventDefault();
});

$('.js_slider_model').click(function(e){
	$(this).addClass('selected').siblings('.js_slider_model').removeClass('selected');
	e.preventDefault();
});



$('.js_amount .amount_btn').click(function(){
	var max_amount = parseFloat($(this).siblings('input').data('max'));
	var inp_val = parseFloat($(this).siblings('input').val());
	if ($(this).hasClass('prev')&&(inp_val!=1)) {
		$(this).siblings('input').val(inp_val-1);
	}
	else if ($(this).hasClass('next')&&(inp_val<max_amount)) {
		$(this).siblings('input').val(inp_val+1);
	}
});



$(".js_amount input").on('keyup', function(){
	var val = $(this).val();
	val = val.replace(/[^0-9]/g, "");

  if( $(this).val() != val)
  	$(this).val(val);

  val = parseInt(val) || 1;
  var intMax = parseInt($(this).data('max'));

  if( val > intMax) val = intMax;
	if( val !== 1) $(this).val(val).focus();
});

$(".js_amount input").on('blur', function(){
	if( $(this).val() === '' )
		$(this).val(1);
})


function fixAside(){
	$(window).bind('resize',function(){
		$('.sidebar_col').removeClass('sidebar_col_fix');
		sbwH = $('.sidebar_col').outerHeight();
		sbwT = $('.sidebar_col').offset().top;
		sbH = $('.sidenav_wrapper').outerHeight();
		ctH = $('.content_col').outerHeight(),
		wH = $(window).height();

		if(sbH > ctH) $('.sidebar_col').addClass('sidebar_col_fix');

		$(window).scroll(function(){
			var wT = $(window).scrollTop();
			if(wH < sbH){
				$('.sidenav_wrapper').css({position:'static !important'});
			}else{
				if(wT < sbwT){
					$('.sidenav_wrapper').css({position:'absolute',top:0,bottom:'auto'});
				}else if(wT > (sbwH - sbH + sbwT)){
					$('.sidenav_wrapper').css({position:'absolute',bottom:0,top:'auto'});
				}else{
					$('.sidenav_wrapper').css({position:'fixed',top:0,bottom:'auto'});
				}
			}
		});

	}).triggerHandler('resize');
}

if ($('.sidebar_col').length>0) {
	$(window).load(function(){
		fixAside();
	});
}




$(".parallax").each(function(){
	var elems = $(this);
	var elemsPos = $(this).position();
	$(window).scroll(function() {
		var st = $(window).scrollTop();
		var newYPos = elemsPos.top+(st/elems.data("speed"));
		$(elems).css("top", function(){
			if(st>$(this).data("start")){
				if(newYPos<$(this).data("end") || $(this).data("end") === 0) return newYPos+"px";
				else return $(this).data("end")+"px";
			}
		});
	});
});



$('.js_show_form').click(function(e){
	$(this).hide();
	$('#js_form').slideDown(function(){
		fixAside();
	});

	e.preventDefault();
});


$(document).on('click', '.js_calc_form_trigger', function(){
    $('.calc_banner_form').show();
});

$(document).on('click',function(e){

    // close addr_choose when click outside
    $(document).mouseup(function (e){
        var container = $(".calc_banner_form");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.hide();
        }
    });
});

//table row children
	$(".bodycalc_table").on("click", ".bodycalc_td_name.hasarrow_left", function(){
		$(this).toggleClass("up");
		$(this).parents(".bodycalc_tr").find(".bodycalc_table_second").slideToggle();
	});


//select on body calc list page
	$(".bodycalc_model_wrapper").on({
		click: function() {
			$(this).find(".bodycalc_model_list_drop").toggleClass("dropped");
			$(this).find("ul").slideToggle("fast");
		},
		mouseleave: function() {
			$(this).find("ul").slideUp("fast");
			$(this).find(".bodycalc_model_list_drop").removeClass("dropped");
		}
	});



	$(".calculation__open").on("click", function(){
		$(this).toggleClass("calculation__open--open");
		$(this).parents(".calculation__item").find(".calculation__content").slideToggle("fast");
	});

	$(".calculation__item--total-hover").hover(function() {
		$(".calculation__content--total").toggleClass("calculation__show");
		$(".calculation__content--hover").toggleClass("calculation__show");

	},
		function() {
			$(".calculation__content--total").toggleClass("calculation__show");
			$(".calculation__content--hover").toggleClass("calculation__show");
		}
	)

	//select on body calc list page
	$(".models__item-wrapper").on({
		click: function() {
			$(this).find(".models__list-drop").toggleClass("dropped");
			$(this).find("ul").slideToggle("fast");
		},
		mouseleave: function() {
			$(this).find("ul").slideUp("fast");
			$(this).find(".models__list-drop").removeClass("dropped");
		}
	});

});
