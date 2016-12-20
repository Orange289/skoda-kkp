// LAYOUT NAVIGATION
$('body').append('<div class="kdx-nav" >' +
    '<div class="kdx-nav__trigger">Kdx Menu</div>' +
        '<div class="kdx-nav__body clearfix">' +
								'<a href="index.html">калькулятор</a>' +
				        '<a href="list.html">модели</a>' +
        '</div>' +
    '</div>');

// Fix nav close / open

// Uncomment this to show kdx_nav on page load
// Comment this to hide kdx_nav on page load
//$('.kdx_nav').toggleClass('opened').find('.kdx_nav_body').slideToggle(0);
//

function kdxMenuOpen(){
  $('.kdx-nav').toggleClass('kdx-nav--opened').find('.kdx-nav__body').slideToggle();
}
$(document).on('click','.kdx-nav__trigger',function(){
    kdxMenuOpen();
    return false;
});
