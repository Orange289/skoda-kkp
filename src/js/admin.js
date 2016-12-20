/**
 * Created by Kodix on 07.04.2016.
 */

$(document).ready(function() {
    $(".panel-body").on("keyup", ".form-control", function() {
        $(this).parents(".panel-body").find(".submit").show();
    });

    $(".panel-body").on("click", ".delete", function(e) {
        $(this).parents(".panel-body").find(".submit").show();
        e.preventDefault();
    });

    $(".panel-body").on({
        click: function() {
            $(this).animate({width: "170px"},200);
        },
        blur: function() {
            $(this).animate({width: "90px"},200);

        }
    }, "textarea");


    $(".td_blocked input").attr("disabled",true);

    var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( ".button" ),
        lbl = wrapper.find( "mark" );

    inp.focus(function () {
        wrapper.addClass("focus");
    }).blur(function () {
        wrapper.removeClass("focus");
    });


    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "Выбрать" );
        }else
            btn.text( file_name );
    }).change();
});