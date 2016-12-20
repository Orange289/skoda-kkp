$(document).ready(function(){
    $( ".datepicker" ).datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showOn: "both",
        buttonImage: "img/calendar.png",
        buttonImageOnly: true,
        dateFormat: "dd.mm.yy",
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
        dayNames: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
        dayNamesShort: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        firstDay: 1,
        /*onSelect: function(date){
            if(typeof arDealersTime !== 'undefined')
                KdxForms.time.call(date);
        },
        beforeShowDay: function(date){
            var canShow = true;

            if(typeof arDealersTime !== 'undefined'){
                var dealerID = KdxForms.time.getDealer();

                var arNames = [
                    'sut', 'mon', 'tue', 'wed', 'thu', 'fri', 'sun'
                ];

                var today = arNames[ date.getDay() ];

                if(typeof arDealersTime[dealerID][today] === 'undefined')
                    canShow = false;
            }

            return [canShow, "", ""];
        }*/
    });
});