$(document).ready(function(){

//sliders in calculator

    $('.js_nouislider').not('.sliderInited').each(function(e){
        if(typeof window.sliderCounter == "undefined"){
            window.sliderCounter = 0;
        }
        window.sliderCounter++;

        var range = $(this).attr('data-range');

        var option = $(this).closest('.js_nouislider').find('#'+range+'Slider').eq(0);


        var rangeValueMin = parseInt(option.attr('data-min-val'));
        var rangeValueMax = parseInt(option.attr('data-max-val'));
        var rangeMinAvailable = parseInt(option.attr('data-min-available'));
        var rangeMaxAvailable = parseInt(option.attr('data-max-available'));
        var rangeStep = parseInt(option.attr('data-step'));
        var rangeStart = '[' +  parseInt(option.attr('data-start')) + ']';
        var rangeDensity = parseInt(option.attr('data-density'));
        var rangePipStep = parseInt(option.attr('data-pip-step'));


        // create pip values array
        var rangePipValues = [];
        for (var i = rangeValueMin; i < rangeValueMax; i += rangePipStep){
            if(i > 0){
                rangePipValues.push(i);
            }
        }



        var Slider = this;
        var props = {
            start: rangeStart, // Handle start position
            range: { // Slider can select '0' to '100'
                'min': rangeValueMin,
                'max': rangeValueMax
            },

            step: rangeStep,
            format: wNumb({
                decimals: 0
            }),
            pips:{
                mode: 'values',
                values:rangePipValues,
                density: rangeDensity
            },
            connect: 'lower'
        }
        noUiSlider.create(Slider, props);

        // When the slider value changes, update the input and span
        Slider.noUiSlider.on('update', function( values, handle ) {

            $(Slider).find('.noUi-handle').text(values[handle])
        });

        // min, max values which are available
        Slider.noUiSlider.on('change', function ( values, handle ) {

            if ( values[handle] < rangeMinAvailable ) {
                Slider.noUiSlider.set(rangeMinAvailable);
            } else if ( values[handle] > rangeMaxAvailable ) {
                Slider.noUiSlider.set(rangeMaxAvailable);
            }
        });


        // create not available lines
        var min_w = (rangeMinAvailable - rangeValueMin) / (rangeValueMax-rangeValueMin) * 100 + '%';
        var max_w = (rangeValueMax - rangeMaxAvailable) / (rangeValueMax-rangeValueMin) * 100 + '%';

        $(this).find(".noUi-base").prepend('<div class="min_line"></div>');
        $(this).find(".noUi-base").find('.min_line').width(min_w);

        $(this).find(".noUi-base").append('<div class="max_line"></div>');
        $(this).find(".noUi-base").find('.max_line').width(max_w);

        $(this).addClass('sliderInited');
    });
});

