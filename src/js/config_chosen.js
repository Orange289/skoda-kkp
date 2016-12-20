
$(document).ready(function() {
    $(".chosen-select").chosen({
        disable_search: true,
        allow_single_deselect: true
    });

    $(".chosen-drop-wrapper").mCustomScrollbar({
        theme:"dark-thick",
        mouseWheel:true,
        scrollInertia: 400,
        mouseWheelPixels: 162
    });

});

