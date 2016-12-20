$(document).ready(function(){
    if($('#dealer_map').length){
        ymaps.ready(initDealerMap);
    }

    var dealerMap;

    function initDealerMap(){
        //  shop map
        dealerMap = new ymaps.Map("dealer_map", {
            center: [55.708389, 37.625487],
            zoom: 13,
            controls: []
        });

        // placemarks
        dealerPlacemark = new ymaps.Placemark([55.708389,37.625487], {
                hintContent: 'Skoda',
                balloonContent: 'Skoda'
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/map-marker-x2.png',
                iconImageSize: [23, 33]
            });

        dealerMap.geoObjects.add(dealerPlacemark);




    }
});