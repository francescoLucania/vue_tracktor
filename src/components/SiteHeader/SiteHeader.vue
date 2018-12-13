<template>
    <header class="site-header js-site-header">
        <div class="container">
            <nav class="site-header__navigate"><a class="site-header__logo" href="https://autospot.ru/"><img src="img/logo.svg" alt="logo" data-color="black"><img src="img/logo-w.svg" alt="logo" data-color="white"></a>
                <div class="site-header__menu">
                    <div class="site-header__menu-local-block">
                        <ul class="site-header__menu-item is-sx">
                        </ul>
                        <ul class="site-header__menu-item is-desktop is-hide">
                            <li class="tooltip-box"><a class="tooltip-link js-open-tooltip-link" href="#">BMW</a>
                                <div class="tooltip">
                                    <div class="tooltip__body">
                                        <ul class="tabs tabs--small tabs--column tabs--outline">
                                            <li class="tabs__item"><a href="#">Москва</a></li>
                                            <li class="tabs__item"><a href="#">Санкт-Петербург</a></li>
                                            <li class="tabs__item"><a href="#">Сочи</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="tooltip-box"><a class="tooltip-link js-open-tooltip-link" href="#">6 Gran Coupe</a>
                                <div class="tooltip">
                                    <div class="tooltip__body">
                                        <ul class="tabs tabs--small tabs--column tabs--outline">
                                            <li class="tabs__item"><a href="#">Москва</a></li>
                                            <li class="tabs__item"><a href="#">Санкт-Петербург</a></li>
                                            <li class="tabs__item"><a href="#">Сочи</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li class="tooltip-box"><a class="tooltip-link js-open-tooltip-link" href="#">Авто в наличии</a>
                                <div class="tooltip">
                                    <div class="tooltip__body">
                                        <ul class="tabs tabs--small tabs--column tabs--outline">
                                            <li class="tabs__item"><a href="#">Москва</a></li>
                                            <li class="tabs__item"><a href="#">Санкт-Петербург</a></li>
                                            <li class="tabs__item"><a href="#">Сочи</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="site-header__menu-item is-desktop is-hide">
                            <li><a class="site-header__back-link" href="#">
                                <svg class="icon" role="img">
                                    <use xlink:href="img/icons.svg#arrow"></use>
                                </svg><span>К списку авто</span></a></li>
                        </ul>
                    </div>
                    <div class="site-header__menu-global-block">
                        <ul class="site-header__menu-item is-hide is-desktop">
                            <li><a href="#">Индекс цен</a></li>
                            <li><a href="#">Тест-драйв</a></li>
                            <li><a href="#">Блог</a></li>
                        </ul>
                        <ul class="site-header__menu-item not-mobile">
                            <li class="tooltip-box"><a class="tooltip-link js-open-tooltip-link" href="#search-region">Любой регион</a>
                                <div class="tooltip tooltip--region">
                                    <div class="tooltip-regions-body tooltip-regions-body--absolute-footer">
                                        <div class="tooltip-regions-body__header">Город<a class="tooltip-regions-body__back-link js-close-tooltip" href="#">
                                            <svg class="icon" role="img">
                                                <use xlink:href="img/icons.svg#arrow-back"></use>
                                            </svg></a></div>
                                        <div class="tooltip-regions-body__content">
                                            <div class="tooltip-region-search">
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
                                            </div>
                                            <div class="tooltip-regions-body__actions-box js-region-container">
                                                <div class="tooltip-region-search__items-box js-region-recommended-container"><a class="tooltip-region-search__recommender-item js-close-tooltip js-tooltip-region-recommended-search-item" href="#">Москва</a><a class="tooltip-region-search__recommender-item js-close-tooltip js-tooltip-region-recommended-search-item" href="#">Санкт-Петербург</a></div>
                                                <div class="tooltip-region-search__items-box js-region-neighbor-container is-hide">
                                                    <div class="tooltip-region-search__item js-tooltip-region-neighbor-search-item">Москва<a class="js-tooltip-region-search-item-close" href="#">Убрать</a></div>
                                                    <div class="tooltip-region-search__item js-tooltip-region-neighbor-search-item">Санкт-Петербург<a class="js-tooltip-region-search-item-close" href="#">Убрать</a></div>
                                                </div>
                                                <div class="tooltip-region-search-slider">
                                                    <h5 class="tooltip-region-search-slider__title">Расширенный радиус поиска, км</h5>
                                                    <div class="tooltip-region-search-slider__dial js-tooltip-region-dial ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min" style="width: 50%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 50%;"></span></div>
                                                    <div class="tooltip-region-search-slider__dial-information"><span>0</span><span>100</span><span>200</span><span>300</span><span>400</span></div>
                                                </div>
                                            </div>
                                            <ul class="regions-list-box regions-list-box--type-tooltip js-all-regions is-hide">
                                                <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                    <h5>Москва</h5>
                                                    <div class="regions-list-box__line-description">Москвовская облать</div></a></li>
                                                <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                    <h5>Мурманск</h5>
                                                    <div class="regions-list-box__line-description">Мурманская область</div></a></li>
                                                <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                    <h5>Томск</h5>
                                                    <div class="regions-list-box__line-description">Томская область</div></a></li>
                                                <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                    <h5>Тула</h5>
                                                    <div class="regions-list-box__line-description">Тульская область</div></a></li>
                                                <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                    <h5>Краснодар</h5>
                                                    <div class="regions-list-box__line-description">Краснодарский край</div></a></li>
                                                <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                    <h5>Мурино</h5>
                                                    <div class="regions-list-box__line-description">Санкт-Петербург и Ленинградская область, Всеволожский район</div></a></li>
                                                <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                    <h5>Муромцево</h5>
                                                    <div class="regions-list-box__line-description">Омская область, Муромцевский район</div></a></li>
                                                <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                    <h5>Смоленск</h5>
                                                    <div class="regions-list-box__line-description">Смоленская область</div></a></li>
                                                <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                    <h5>Чита</h5>
                                                    <div class="regions-list-box__line-description">Читинская область</div></a></li>
                                                <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                    <h5>Махачкала</h5>
                                                    <div class="regions-list-box__line-description">Дагестан</div></a></li>
                                                <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                    <h5>Краснодар</h5>
                                                    <div class="regions-list-box__line-description">Краснодарский край</div></a></li>
                                                <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                    <h5>Пермь</h5>
                                                    <div class="regions-list-box__line-description">Пермская область</div></a></li>
                                                <li><a class="regions-list-box__line js-search-regions-list-item js-close-tooltip" href="#">
                                                    <h5>Вязьма</h5>
                                                    <div class="regions-list-box__line-description">Смоленская область</div></a></li>
                                            </ul>
                                        </div>
                                        <div class="tooltip-regions-body__footer js-region-container"><a class="button button--block button--secondary js-close-tooltip" href="#" role="button">Сохранить</a></div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="tel:84996483462">+7 499 648-34-62</a></li>
                        </ul>
                        <ul class="site-header__menu-item site-header__menu-item--icon-links">
                            <li><a href="#" data-icon="" data-compare="" role="button">Сравнение
                                <svg class="icon" role="img" data-compare="">
                                    <use xlink:href="img/icons.svg#compare"></use>
                                </svg></a></li>
                            <li><a class="favourites-link is-active" href="#" data-icon="" role="button">Избранное
                                <svg class="icon" role="img" data-favourites="">
                                    <use xlink:href="img/icons.svg#heart-outline"></use>
                                </svg>
                                <svg class="icon" role="img" data-favourites="">
                                    <use xlink:href="img/icons.svg#heart"></use>
                                </svg></a></li>
                            <li><a class="burger js-open-right-menu" href="#" data-icon="" role="button">Открыть главное меню
                                <svg class="icon" role="img">
                                    <use xlink:href="img/icons.svg#burger"></use>
                                </svg></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>

    export default {

    }
</script>

<style scoped src="../../../assets/scss/application.scss">

</style>