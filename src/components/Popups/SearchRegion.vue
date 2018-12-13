<template>
    <div class="site-popup__container site-popup__container--car-search js-site-popup-sx-fullscreen mfp-with-anim" id="search-region">
        <div class="car-search">
            <div class="car-search__header">
                <h3 class="car-search__title">Ваш город</h3>
                <form class="car-search__input">
                    <div class="input input--search" data-icon="search">
                        <input class="js-search-region-input js-input-car-search" type="search" placeholder="Название города">
                        <svg class="icon icon--20" role="img">
                            <use xlink:href="img/icons/inputs.svg#input-search"></use>
                        </svg>
                        <svg class="load-icon" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle fill="transparent" stroke-width="2" cx="12" cy="12" r="10" stroke="url(#gradientGr1)" style="stroke-dasharray: 100; stroke-dashoffset: 50;"></circle>
                            <linearGradient id="gradientGr1">
                                <stop offset="50%" stop-color="#02c5ab" stop-opacity="1"></stop>
                                <stop offset="65%" stop-color="#02c5ab" stop-opacity=".5"></stop>
                                <stop offset="100%" stop-color="#02c5ab" stop-opacity="0"></stop>
                            </linearGradient>
                        </svg>
                    </div>
                </form>
            </div>
            <div class="car-search__region-container js-region-container">
                <ul class="car-search__region-container-grid js-popupar-region">
                    <li class="car-search__region-container-col"><a class="region-card js-site-popup-close" href="#">
                        <h5 class="region-card__title">Москва</h5>
                        <ul>
                            <li>8 дилера</li>
                            <li>3122 предложений от 515 000 Р.</li>
                        </ul></a></li>
                    <li class="car-search__region-container-col"><a class="region-card js-site-popup-close" href="#">
                        <h5 class="region-card__title">Санкт-Петербург</h5>
                        <ul>
                            <li>5 дилера</li>
                            <li>2112 предложений от 515 000 Р.</li>
                        </ul></a></li>
                    <li class="car-search__region-container-col"><a class="region-card js-site-popup-close" href="#">
                        <h5 class="region-card__title">Сочи</h5>
                        <ul>
                            <li>4 дилера</li>
                            <li>1212 предложений от 515 000 Р.</li>
                        </ul></a></li>
                    <li class="car-search__region-container-col"><a class="region-card js-site-popup-close" href="#">
                        <h5 class="region-card__title">Иркутск</h5>
                        <ul>
                            <li>3 дилера</li>
                            <li>502 предложений от 1215 000 Р.</li>
                        </ul></a></li>
                    <li class="car-search__region-container-col"><a class="region-card js-site-popup-close" href="#">
                        <h5 class="region-card__title">Екатеринбург</h5>
                        <ul>
                            <li>4 дилера</li>
                            <li>1502 предложений от 1215 000 Р.</li>
                        </ul></a></li>
                    <li class="car-search__region-container-col"><a class="region-card js-site-popup-close" href="#">
                        <h5 class="region-card__title">Тюмень</h5>
                        <ul>
                            <li>4 дилера</li>
                            <li>1502 предложений от 1015 000 Р.</li>
                        </ul></a></li>
                    <li class="car-search__region-container-col"><a class="region-card js-site-popup-close" href="#">
                        <h5 class="region-card__title">Тверь</h5>
                        <ul>
                            <li>2 дилера</li>
                            <li>302 предложений от 715 000 Р.</li>
                        </ul></a></li>
                    <li class="car-search__region-container-col"><a class="region-card js-site-popup-close" href="#">
                        <h5 class="region-card__title">Иваново</h5>
                        <ul>
                            <li>2 дилера</li>
                            <li>302 предложений от 715 000 Р.</li>
                        </ul></a></li>
                </ul>
                <ul class="car-search__region-container-grid car-search__region-container-grid--no-bottom-gutters js-recommendet-regions is-hide">
                    <li class="car-search__region-item-col"><a class="car-search__region-item-link" href="#">Москва</a></li>
                    <li class="car-search__region-item-col"><a class="car-search__region-item-link" href="#">Воронеж</a></li>
                    <li class="car-search__region-item-col"><a class="car-search__region-item-link" href="#">Краснодар</a></li>
                    <li class="car-search__region-item-col"><a class="car-search__region-item-link" href="#">Вологда</a></li>
                    <li class="car-search__region-item-col"><a class="car-search__region-item-link" href="#">Липецк</a></li>
                    <li class="car-search__region-item-col"><a class="car-search__region-item-link" href="#">Иваново</a></li>
                    <li class="car-search__region-item-col"><a class="car-search__region-item-link" href="#">Вологда</a></li>
                    <li class="car-search__region-item-col"><a class="car-search__region-item-link" href="#">Санкт-Петербург</a></li>
                    <li class="car-search__region-item-col"><a class="car-search__region-item-link" href="#">Мурманск</a></li>
                </ul>
            </div>
            <ul class="regions-list-box js-all-regions is-hide">
                <li><a class="regions-list-box__line js-search-regions-list-item js-site-popup-close" href="#">
                    <h5>Москва</h5>
                    <div class="regions-list-box__line-description">Москвовская облать</div></a></li>
                <li><a class="regions-list-box__line js-search-regions-list-item js-site-popup-close" href="#">
                    <h5>Мурманск</h5>
                    <div class="regions-list-box__line-description">Мурманская область</div></a></li>
                <li><a class="regions-list-box__line js-search-regions-list-item js-site-popup-close" href="#">
                    <h5>Томск</h5>
                    <div class="regions-list-box__line-description">Томская область</div></a></li>
                <li><a class="regions-list-box__line js-search-regions-list-item js-site-popup-close" href="#">
                    <h5>Тула</h5>
                    <div class="regions-list-box__line-description">Тульская область</div></a></li>
                <li><a class="regions-list-box__line js-search-regions-list-item js-site-popup-close" href="#">
                    <h5>Краснодар</h5>
                    <div class="regions-list-box__line-description">Краснодарский край</div></a></li>
                <li><a class="regions-list-box__line js-search-regions-list-item js-site-popup-close" href="#">
                    <h5>Мурино</h5>
                    <div class="regions-list-box__line-description">Санкт-Петербург и Ленинградская область, Всеволожский район</div></a></li>
                <li><a class="regions-list-box__line js-search-regions-list-item js-site-popup-close" href="#">
                    <h5>Муромцево</h5>
                    <div class="regions-list-box__line-description">Омская область, Муромцевский район</div></a></li>
                <li><a class="regions-list-box__line js-search-regions-list-item js-site-popup-close" href="#">
                    <h5>Смоленск</h5>
                    <div class="regions-list-box__line-description">Смоленская область</div></a></li>
                <li><a class="regions-list-box__line js-search-regions-list-item js-site-popup-close" href="#">
                    <h5>Чита</h5>
                    <div class="regions-list-box__line-description">Читинская область</div></a></li>
                <li><a class="regions-list-box__line js-search-regions-list-item js-site-popup-close" href="#">
                    <h5>Махачкала</h5>
                    <div class="regions-list-box__line-description">Дагестан</div></a></li>
                <li><a class="regions-list-box__line js-search-regions-list-item js-site-popup-close" href="#">
                    <h5>Краснодар</h5>
                    <div class="regions-list-box__line-description">Краснодарский край</div></a></li>
                <li><a class="regions-list-box__line js-search-regions-list-item js-site-popup-close" href="#">
                    <h5>Пермь</h5>
                    <div class="regions-list-box__line-description">Пермская область</div></a></li>
                <li><a class="regions-list-box__line js-search-regions-list-item js-site-popup-close" href="#">
                    <h5>Вязьма</h5>
                    <div class="regions-list-box__line-description">Смоленская область</div></a></li>
            </ul>
        </div>
        <button class="right-menu-close js-site-popup-close">
            <svg class="icon" role="img">
                <use xlink:href="img/icons.svg#close"></use>
            </svg>
        </button>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped src="../../../assets/scss/application.scss">

</style>