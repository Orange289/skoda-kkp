$(document).ready(function(){function e(e){e?(e.removeClass("active"),$("."+e.data("toggletarget")).slideUp(300)):($(".js_toggle_submenu").removeClass("active"),$(".js_header_submenu").slideUp(300))}function s(e){var s=$("."+e.data("toggletarget")),t=$(".page-header").position().top+71;e.addClass("active"),0==s.parents(".page-header").length&&s.offset({top:t}),s.slideDown(300)}function t(){f.each(function(){$(this).offset().left+$(this).width()+50>_.offset().left?($(this).addClass("is_hidden"),m.eq($(this).index()).show()):($(this).removeClass("is_hidden"),m.eq($(this).index()).hide())})}function i(){0==f.filter(".is_hidden").length?(_.css({visibility:"hidden"}),e(_)):_.css({visibility:"visible"})}function n(){$(".js_chosen_select").chosen({disable_search_threshold:100,no_results_text:"Ничего не найдено",placeholder_text_single:" "}),$(".js_chosen_select").on("chosen:showing_dropdown",function(e,s){var t=s.chosen.container[0];$(t).find("li").wrapInner("<span></span>"),$(t).find(".js_custom_scroll").length||($(t).find(".chosen-results").wrap('<div class="js_custom_scroll"></div>'),customScrollInit())});var e=$(".js_chosen_select").next(),s=e.find("input");e.find("input").on("keyup",function(){e.find("li").wrapInner("<span></span>"),s.focus()})}function a(e){e.is(":checked")?(e.is(":radio")&&e.parent().siblings().removeClass("checked"),e.parent().addClass("checked")):e.parent().removeClass("checked")}function o(){$(window).bind("resize",function(){$(".sidebar_col").removeClass("sidebar_col_fix"),sbwH=$(".sidebar_col").outerHeight(),sbwT=$(".sidebar_col").offset().top,sbH=$(".sidenav_wrapper").outerHeight(),ctH=$(".content_col").outerHeight(),wH=$(window).height(),sbH>ctH&&$(".sidebar_col").addClass("sidebar_col_fix"),$(window).scroll(function(){var e=$(window).scrollTop();wH<sbH?$(".sidenav_wrapper").css({position:"static !important"}):e<sbwT?$(".sidenav_wrapper").css({position:"absolute",top:0,bottom:"auto"}):e>sbwH-sbH+sbwT?$(".sidenav_wrapper").css({position:"absolute",bottom:0,top:"auto"}):$(".sidenav_wrapper").css({position:"fixed",top:0,bottom:"auto"})})}).triggerHandler("resize")}function l(){$(".js_datepicker").datepicker($.datepicker.regional.ru),$(document).on("click",".js_datepicker_show",function(){$(this).siblings(".js_datepicker").prop("disabled")||$(this).siblings(".js_datepicker").datepicker("show")})}function d(){$.datepicker.setDefaults($.datepicker.regional.ru),$(".js_event_calendar").datepicker({showOtherMonths:!0,onChangeMonthYear:function(e,s,t){c(s,$(this))}});var e=$(".js_event_calendar").datepicker("getDate").getMonth()+1;c(e,$(".js_event_calendar"))}function c(e,s){$.ajax({url:"temp/data/events.json",type:"get",dataType:"json",data:{month:e},success:function(e){for(var t in e){var i=e[t].day,n=e[t].link;s.find("a.ui-state-default").each(function(){var e=$(this).text();e==i&&($(this).addClass("has_event"),$(this).attr("href",n))})}r(s)}})}function r(e){function s(e){var s=e.target;if($(s).hasClass("has_event")){var t=$(s).attr("href");location.href=t}e.stopPropagation(),e.preventDefault()}for(var t=e.find(".ui-state-default").parents(".ui-datepicker-calendar"),i=0;i<t.length;i++)t[i].addEventListener("click",s,!0)}function h(){$(".js_date_mask").mask("99.99.9999"),$(".js_time_mask").mask("99:99"),$(".js_phone_mask").mask("(999) 999-99-99")}svg4everybody({}),$(document).on("click",".js_toggle_submenu",function(t){var i=$(this);i.hasClass("active")?e():(e(),s(i)),t.preventDefault()});var _=$("#js_hamburger"),p=$("#js_header-nav"),u=$("#js_header-nav-sub"),f=p.find(".page-header__link"),m=u.find(".page-header__link");$(window).on("resize",function(){t(),i()}),$(function(){t(),i()}),$(".js_slick_slider").length>0&&($(".js_slick_slider").slick({pauseOnHover:!1,autoplay:!0,autoplaySpeed:6e3,dots:!0,infinite:!0,speed:200,fade:!0,cssEase:"linear",arrows:!0,prevArrow:$(".slick_prev"),nextArrow:$(".slick_next")}),$(".js_slick_slider").hover(function(){$(".js_slick_slider").slick("slickPause")},function(){$(".js_slick_slider").slick("slickPlay")})),n(),$(".js_tabs .js_tab").each(function(){$(this).addClass("hideme")}),$(".js_tabs").each(function(){if($(this).find(".js_tabs_select .current").length){var e=$(this).find(".current a").attr("href");$(e).addClass("current").removeClass("hideme")}else{var e=$(this).find(".js_tabs_select li:first-child a").attr("href");$(this).find(".js_tabs_select li:first-child").addClass("current"),$(e).addClass("current").removeClass("hideme")}}),$(".js_tabs_select a").click(function(){if(!$(this).parent("li").hasClass("current")){var e=$(this).attr("href");$(this).closest(".js_tabs").find("> .js_tabs_select .current").removeClass("current"),$(this).closest(".js_tabs").find("> .js_tab.current").addClass("hideme").removeClass("current"),$(this).parent("li").addClass("current"),$(e).addClass("current").removeClass("hideme")}return!1}),$(document).on("click",".js_slidedown_trigger",function(){$(this).parents(".js_slidedown").hasClass("opened")?$(this).parents(".js_slidedown").find(".js_slidedown_content").stop(!0,!0).slideUp(300,function(){$(this).parents(".js_slidedown").removeClass("opened")}):($(this).parents(".js_slidedown").find(".js_slidedown_content").stop(!0,!0).slideDown(500),$(this).parents(".js_slidedown").addClass("opened"))}),$(document).on("click",".js_calls_show",function(){$(this).parents(".calls_shown").length||$(".calls_shown").toggleClass("calls_shown").find(".js_calls_show_wrapper").toggleClass("hideme"),$(this).parents(".phones_col").toggleClass("calls_shown").find(".js_calls_show_wrapper").toggleClass("hideme"),equalHeight($(".phones_cols .phones_col"))});var g=$(".js_move_under_header");if(g.length){var v=$(".menu_green").innerHeight(),b=$(".head_title").outerHeight()/2,w=$(".menu_green_wrapper").innerHeight()-v,k=parseInt($(".main_content").css("padding-top")),j=0-(w+k-b);g.css("margin-top",j)}$(document).on("click",".frm_trigger",function(){$(this).closest(".fixed_right_menu").toggleClass("frm_closed")});var C=parseInt($(".green_drop").css("width")),y=$(".menu_green").innerWidth();if($(window).load(function(){$(".menu_green .hasdrop").each(function(){var e=$(this).position().left;$(this).find(".dropdown").hasClass("green_simple_drop")||(e<y-C?$(this).find(".dropdown").css("left",e):$(this).find(".dropdown").css({left:"auto",right:0}))})}),$(".dropmodels_wrapper").each(function(){$(this).find(".dropmodel_list_item:first").addClass("active");var e="#"+$(this).find(".dropmodel_list_item.active .dropmodel_list_link").attr("data-id");$(this).find(e).addClass("active")}),$(".dropmodel_list_item").hover(function(){if(!$(this).hasClass("active")){$(this).closest(".dropmodels_lists").find(".active").removeClass("active"),$(this).addClass("active");var e="#"+$(this).find(".dropmodel_list_link").attr("data-id");$(this).closest(".dropmodels_wrapper").find(".dropmodel_tab").removeClass("active"),$(e).addClass("active")}},function(){}),!Modernizr.input.placeholder){$("input").each(function(){$(this).attr("placeholder")&&$(this).addClass("placeholder")}),$("input[type=password]").addClass("password");var x=$("input.placeholder");x.each(function(){""==$(this).val()&&(thisPlaceholder=$(this).attr("placeholder"),$(this).val(thisPlaceholder))}),x.focus(function(){$(this).val()==$(this).attr("placeholder")&&$(this).val("")}),x.blur(function(){""==$(this).val()&&(thisPlaceholder=$(this).attr("placeholder"),$(this).val(thisPlaceholder))}),x.parents("form").submit(function(){$(this).val()==$(this).attr("placeholder")})}$(".js_custom_check input").each(function(){a($(this))}),$(document).on("change",".js_custom_check input",function(){a($(this))}),$(".js_hidden_content").click(function(e){$(this).toggleClass("opened").next(".item_hidden_content").slideToggle(200),e.preventDefault()}),$(".js_slider_model").click(function(e){$(this).addClass("selected").siblings(".js_slider_model").removeClass("selected"),e.preventDefault()}),$(".js_amount .amount_btn").click(function(){var e=parseFloat($(this).siblings("input").data("max")),s=parseFloat($(this).siblings("input").val());$(this).hasClass("prev")&&1!=s?$(this).siblings("input").val(s-1):$(this).hasClass("next")&&s<e&&$(this).siblings("input").val(s+1)}),$(".js_amount input").on("keyup",function(){var e=$(this).val();e=e.replace(/[^0-9]/g,""),$(this).val()!=e&&$(this).val(e),e=parseInt(e)||1;var s=parseInt($(this).data("max"));e>s&&(e=s),1!==e&&$(this).val(e).focus()}),$(".js_amount input").on("blur",function(){""===$(this).val()&&$(this).val(1)}),$(".sidebar_col").length>0&&$(window).load(function(){o()}),$(".parallax").each(function(){var e=$(this),s=$(this).position();$(window).scroll(function(){var t=$(window).scrollTop(),i=s.top+t/e.data("speed");$(e).css("top",function(){if(t>$(this).data("start"))return i<$(this).data("end")||0===$(this).data("end")?i+"px":$(this).data("end")+"px"})})}),$(".js_show_form").click(function(e){$(this).hide(),$("#js_form").slideDown(function(){o()}),e.preventDefault()}),$(document).on("click",".js_calc_form_trigger",function(){$(".calc_banner_form").show()}),$(document).on("click",function(e){$(document).mouseup(function(e){var s=$(".calc_banner_form");s.is(e.target)||0!==s.has(e.target).length||s.hide()})}),$(".bodycalc_table").on("click",".bodycalc_td_name.hasarrow_left",function(){$(this).toggleClass("up"),$(this).parents(".bodycalc_tr").find(".bodycalc_table_second").slideToggle()}),$(".bodycalc_model_wrapper").on({click:function(){$(this).find(".bodycalc_model_list_drop").toggleClass("dropped"),$(this).find("ul").slideToggle("fast")},mouseleave:function(){$(this).find("ul").slideUp("fast"),$(this).find(".bodycalc_model_list_drop").removeClass("dropped")}}),$(".calculation__open").on("click",function(){$(this).toggleClass("calculation__open--open"),$(this).parents(".calculation__item").find(".calculation__content").slideToggle("fast")}),$(".calculation__item--total-hover").hover(function(){$(".calculation__content--total").toggleClass("calculation__show"),$(".calculation__content--hover").toggleClass("calculation__show")},function(){$(".calculation__content--total").toggleClass("calculation__show"),$(".calculation__content--hover").toggleClass("calculation__show")}),$(".models__item-wrapper").on({click:function(){$(this).find(".models__list-drop").toggleClass("dropped"),$(this).find("ul").slideToggle("fast")},mouseleave:function(){$(this).find("ul").slideUp("fast"),$(this).find(".models__list-drop").removeClass("dropped")}}),l(),$(".js_event_calendar").length&&d(),$(".datepicker").datepicker({showOtherMonths:!0,selectOtherMonths:!0,showOn:"both",buttonImageOnly:!0,dateFormat:"dd.mm.yy",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],dayNamesShort:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],firstDay:1}),h(),$(".page-header__dealer-name").on("click",function(){$(this).toggleClass("page-header__dropped"),$(this).parents(".page-header__dealer").find(".page-header__dealer-list").slideToggle()}),$(".page-header__dealer-item").on("click",function(){var e=$(this).text();$(".page-header__dealer-list").css("display","none"),$(".page-header__dealer-name").removeClass("page-header__dropped"),$(".page-header__dealer-name").text(e)}),$(".question-ico").hover(function(){$(".parts__comment").toggleClass("parts__comment-show")},function(){$(".parts__comment").toggleClass("parts__comment-show")}),$(".btn--exception").on("click",function(){$(".admin__add-exception").css("display","block")}),$(".icon_edit_input").on("click",function(){$(this).css("display","none"),$(".btn--edit-block").css("display","inline-block"),$(this).parents(".admin__edit-block").find(".form__input").removeAttr("disabled")}),$(".btn--edit-block").on("click",function(){$(this).css("display","none"),$(this).parents(".admin__edit-block").find(".admin__icon--edit").css("display","inline-block"),$(this).parents(".admin__edit-block").find(".form__input").attr("disabled","")}),$(".tab").on("click",function(){$(".pagination--dealer").css("display","block"),$(".howmuch--dealer").css("display","block")}),$(".dealer__tab").on("click",function(){$(".pagination--dealer").css("display","none"),$(".howmuch--dealer").css("display","none")})});