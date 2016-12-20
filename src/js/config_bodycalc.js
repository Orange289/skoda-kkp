$(document).ready(function () {

    window.slider = $('#damageSlider')[0];
    window.slider_obj = $('#damageSlider');
    window.props = {
        start: [0],
        step: 1,
        range: {
            'min': [0],
            'max': [7]
        }
    };
    window.props2 = {
        start: [0],
        step: 1,
        range: {
            'min': [0],
            'max': [1]
        }
    };

    noUiSlider.create(window.slider, window.props);

    var damImg = $('.damage__img');

    window.slider.noUiSlider.on('update', function (values, handle) {
        $(".damage__show").removeClass("damage__show");
        var dam = Math.round(values[handle]);

        if(window.slider_obj.hasClass("primitive")) {
            switch (dam) {
                case 0:
                    damImg.css("background-position", "0 0");
                    $(".damage__item--prim1").addClass("damage__show");
                    break;
                case 1:
                    damImg.css("background-position", "0 -700px");
                    $(".damage__item--prim2").addClass("damage__show");
                    break;
            }
        }

        else {
            switch (dam) {
                case 0:
                    damImg.css("background-position", "0 0");
                    $(".damage__item--1").addClass("damage__show");
                    break;
                case 1:
                    damImg.css("background-position", "0 -100px");
                    $(".damage__item--2").addClass("damage__show");
                    break;
                case 2:
                    damImg.css("background-position", "0 -200px");
                    $(".damage__item--3").addClass("damage__show");
                    break;
                case 3:
                    damImg.css("background-position", "0 -300px");
                    $(".damage__item--4").addClass("damage__show");
                    break;
                case 4:
                    damImg.css("background-position", "0 -400px");
                    $(".damage__item--5").addClass("damage__show");
                    break;
                case 5:
                    damImg.css("background-position", "0 -500px");
                    $(".damage__item--6").addClass("damage__show");
                    break;
                case 6:
                    damImg.css("background-position", "0 -600px");
                    $(".damage__item--7").addClass("damage__show");
                    break;
                case 7:
                    damImg.css("background-position", "0 -700px");
                    $(".damage__item--8").addClass("damage__show");
                    break;
            }
        }

    });

});

//SVG on body calc page. OMFG

$(window).on('load',function(){

//custom "add/remove class" functions as jQuery ones don't work with SVG
    jQuery.fn.myAddClass = function (classTitle) {
        return jQuery(this).each(function() {
            var oldClass = jQuery(this).attr("class");
            oldClass = oldClass ? oldClass : '';
            jQuery(this).attr("class", (oldClass+" "+classTitle).trim());
        });
    };
    jQuery.fn.myRemoveClass = function (classTitle) {
        return jQuery(this).each(function() {
            var oldClassString = ' '+jQuery(this).attr("class")+' ';
            var newClassString = oldClassString.replace(new RegExp(' '+classTitle+' ','g'), ' ').trim()
            if (!newClassString)
                jQuery(this).removeAttr("class");
            else
                jQuery(this).attr("class", newClassString);
        });
    };



// SVG DOM access
    var svgobjects = document.getElementsByClassName('auto_svg');
    for(var i=0;i< svgobjects.length;i++){
        var svgobject = svgobjects[i];
        if ('contentDocument' in svgobject)
            var svgdom = svgobject.contentDocument;
        // ��� ��� WebKit (����� ��������� ������������� ���� ������)
        var viewBox = svgdom.rootElement.getAttribute("viewBox").split(" ");
        var aspectRatio = viewBox[2] / viewBox[3];
        svgobject.height = parseInt(svgobject.offsetWidth / aspectRatio);/**/

        // меняем слайдер на два состояния, если выбранный элемент - стекло или что-т подобное

        var element = $(svgdom.getElementsByClassName("selected"));

        if(element.attr("class") == "active primitive selected") {
            window.slider_obj.addClass("primitive");
            window.slider.noUiSlider.updateOptions(props2);
        }

        $(svgdom.getElementsByClassName("active")).click(
            function () {
                $(".calc__svg-popup").hide();
                var element = $(svgdom.getElementsByClassName("selected"));
                element.myRemoveClass("selected");
                $(this).myAddClass("selected");
                $(".svg__show").removeClass("svg__show");
                var id = $(this).attr("id");
                $(".bodycalc_damage_headline." + id).addClass("svg__show");

                if($(this).attr("class") == "active primitive selected") {
                    window.slider_obj.addClass("primitive");
                    window.slider.noUiSlider.updateOptions(props2);
                }

                else {
                    window.slider_obj.removeClass("primitive");
                    window.slider.noUiSlider.updateOptions(props);
                }
            }
        );

        $(svgdom.getElementsByClassName("choice")).click(
            function (e) {
                $(".calc__svg-popup").hide();
                $(".svg_choice_show").removeClass("svg_choice_show");
                var element = $(svgdom.getElementsByClassName("selected"));
                element.myRemoveClass("selected");
                $(this).myAddClass("selected");

                var id = $(this).attr("id");
                var po = $(this).offset();

                $('.calc__svg-popup').css({
                    'top': e.pageY + 120,
                    'left': e.pageX + 20
                });
                $('.calc__svg-popup').fadeIn();
                $('.svg_choice.' + id).addClass('svg_choice_show');
            }
        );

        $(svgdom.getElementsByClassName("blocked")).click(function(){
            $(".calc__svg-popup").hide();
            console.log("hoi");
        });
    }

    $('.svg_choice').on('click','label',function(){
        $(".svg__show").removeClass("svg__show");
        var id = $(this).find('input').attr("id");
        $(".damage__headline." + id).addClass("svg__show");
    });

    $(document).on('click', function (e) {
        if ($(e.target).closest(".calc__svg-popup").length === 0) {
            $(".calc__svg-popup").hide();
        }
    });
});
