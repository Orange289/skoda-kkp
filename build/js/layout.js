function kdxMenuOpen(){$(".kdx-nav").toggleClass("kdx-nav--opened").find(".kdx-nav__body").slideToggle()}$("body").append('<div class="kdx-nav" ><div class="kdx-nav__trigger">Kdx Menu</div><div class="kdx-nav__body clearfix"><a href="index.html">калькулятор</a><a href="list.html">модели</a><h4>админка (дилер)</h4><a href="requests.html">список заявок</a><a href="parts.html">категории запчастей</a><a href="discounts.html">скидки</a><a href="pricing.html">наценка</a><a href="hours.html">стоимость н/ч</a><a href="supplements.html">расходники</a><a href="democalc.html">демо-калькулятор</a><a href="profile.html">профиль</a><h4>админка (импортер)</h4><a href="stats.html">статистика</a><a href="imp-requests.html">список заявок</a><a href="dealers.html">дилеры</a><a href="dealer-page.html">страница дилера</a><a href="logs.html">история изменений</a><a href="imp-profile.html">профиль</a></div></div>'),$(document).on("click",".kdx-nav__trigger",function(){return kdxMenuOpen(),!1});