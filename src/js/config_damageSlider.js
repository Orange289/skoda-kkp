$(document).ready(function () {

    var slider = $('#damageSlider')[0];
    var props = {
        start: [0],
        step: 1,
        range: {
            'min': [0],
            'max': [7]
        }
    }

    noUiSlider.create(slider, props);

    var damName = $('.bodycalc_damage_name');
    var damDesc = $('.bodycalc_damage_full');
    var damImg = $('.bodycalc_damage_img');

    slider.noUiSlider.on('update', function (values, handle) {
        var dam = Math.round(values[handle]);
        switch (dam) {
            case 0:
                damName.html("Царапки");
                damDesc.html("Супер-мелкие повреждения, зачем вам в ремонт?");
                damImg.css("background-position", "0 0");
                break;
            case 1:
                damName.html("Царапины");
                damDesc.html("Царапины ЛКП, притертости, сколы, незначительные деформации,повреждения  менее 10% площади детали");
                damImg.css("background-position", "0 -100px");
                break;
            case 2:
                damName.html("Шарапки");
                damDesc.html("Тут уже посильнее задело, кажись");
                damImg.css("background-position", "0 -200px");
                break;
            case 3:
                damName.html("Журапки");
                damDesc.html("Ездить можно");
                damImg.css("background-position", "0 -300px");
                break;
            case 4:
                damName.html("Марапки");
                damDesc.html("Да нормально пока что");
                damImg.css("background-position", "0 -400px");
                break;
            case 5:
                damName.html("Кирапки");
                damDesc.html("Что-то не очень ваше авто выглядит");
                damImg.css("background-position", "0 -500px");
                break;
            case 6:
                damName.html("Сильные вмятины");
                damDesc.html("Повреждение более 30% площади  детали, повреждение ребер жесткости, каркаса или внутренних усилителей детали");
                damImg.css("background-position", "0 -600px");
                break;
            case 7:
                damName.html("Гарапки");
                damDesc.html("Как вам вообще не стыдно на такой машине разъезжать?!");
                damImg.css("background-position", "0 -700px");
                break;
        }


    });

});