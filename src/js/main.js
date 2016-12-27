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

//custom select

function customSelectInit () {
    $(".js_chosen_select").chosen({
        disable_search_threshold: 100,
        no_results_text: "Ничего не найдено",
        placeholder_text_single: " "
    });

    $('.js_chosen_select').on('chosen:showing_dropdown', function(e, params) {
        var el = params.chosen.container[0];
        $(el).find('li').wrapInner('<span></span>');
        if (!$(el).find('.js_custom_scroll').length) {
            $(el).find('.chosen-results').wrap('<div class="js_custom_scroll"></div>');
            customScrollInit();
        }
    });
    var list = $('.js_chosen_select').next();
    var input = list.find('input');
    list.find('input').on('keyup',function(){
        list.find('li').wrapInner('<span></span>');
        input.focus();
     })


}
customSelectInit();


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

	//datepicker init
function datePicker() {
    $(".js_datepicker").datepicker($.datepicker.regional["ru"]);

    $(document).on('click', '.js_datepicker_show', function () {
        if (!$(this).siblings(".js_datepicker").prop('disabled')) {
            $(this).siblings(".js_datepicker").datepicker("show");
        }
    });
}
datePicker();

	function eventCalendar() {
	    $.datepicker.setDefaults($.datepicker.regional[ "ru" ]);

	    $('.js_event_calendar').datepicker( {
	        showOtherMonths: true,
	        onChangeMonthYear: function(year,month, inst) {
	            setEvents(month, $(this));
	        }
	    });

	    var currentMonth = $( ".js_event_calendar" ).datepicker( "getDate" ).getMonth() + 1;
	    setEvents(currentMonth, $('.js_event_calendar'));
	}

	//инициализация
	if($('.js_event_calendar').length) {
	    eventCalendar();
	}

	//добавляем события в календарь
	function setEvents(month, thisItem) {
	    $.ajax({
	        url: 'temp/data/events.json',
	        type: 'get',
	        dataType: 'json',
	        data: {'month': month},
	        success: function(eventsData) {
	            for (var i in eventsData) {
	                var day = eventsData[i].day;
	                var link =  eventsData[i].link;

	                thisItem.find('a.ui-state-default').each(function(){
	                    var calendarDay = $(this).text();
	                    if(calendarDay == day) {
	                        $(this).addClass('has_event');
	                        $(this).attr('href',link)
	                    }
	                });
	            }
	            preventDatepicker(thisItem);
	        }
	    });
	}

	//предотвращаем выделеие даты в календаре
	function preventDatepicker (thisItem) {
	    var elems = thisItem.find('.ui-state-default').parents('.ui-datepicker-calendar');
	    for (var i = 0; i < elems.length; i++) {
	      elems[i].addEventListener("click", prevent, true);
	    }
	    function prevent(event) {
	        var linkSource = event.target;
	        if ($(linkSource).hasClass('has_event')) {
	            var linkItem = $(linkSource).attr('href');
	            //ручной переход по ссылке
	            location.href = linkItem;
	        }
	        event.stopPropagation();
	        event.preventDefault();
	    }
	}


	$( ".datepicker" ).datepicker({
	  showOtherMonths: true,
	  selectOtherMonths: true,
	  showOn: "both",
	  buttonImageOnly: true,
	  dateFormat: "dd.mm.yy",
	  monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь","Декабрь" ],
	  monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
	  dayNames: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
	  dayNamesShort: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
	  dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
	  firstDay: 1,
	});


	// input mask
	function maskedInput() {
			$(".js_date_mask").mask("99.99.9999");
			$(".js_time_mask").mask("99:99");
			$(".js_phone_mask").mask("(999) 999-99-99");
	}
	maskedInput();

	//open dealer-list (header)

	$(".page-header__dealer-name").on("click", function(){
		$(this).toggleClass("page-header__dropped");
		$(this).parents(".page-header__dealer").find(".page-header__dealer-list").slideToggle();
	});

	$(".page-header__dealer-item").on("click", function(){
		var $newval = $(this).text();
		$(".page-header__dealer-list").css('display','none');
		$(".page-header__dealer-name").removeClass("page-header__dropped");
		$(".page-header__dealer-name").text($newval);
	});

	$(".question-ico").hover(function() {
		$(".parts__comment").toggleClass("parts__comment-show");
	},
		function() {
			$(".parts__comment").toggleClass("parts__comment-show");
		}
	)


})
