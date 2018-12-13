<template>
    <div class="site-popup__container site-popup__container--car-search js-site-popup-sx-fullscreen mfp-with-anim" id="search-auto">
        <div class="car-search">
            <div class="car-search__header">
                <h3 class="car-search__title">Выбор авто</h3>
                <form class="car-search__input">
                    <div class="input input--search" data-icon="search">
                        <input class="js-input-car-search" type="search" placeholder="29 марок, 209 моделей">
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
                <p class="car-search__status js-car-search-status">По запросу «Детонатор» ничего не найдено.</p>
            </div>
            <div class="car-search__brand-container">
                <div class="car-search__brand-container-col"><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Audi"></div>
                    <div class="car-brand-item__information" data-brand-name="Audi"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="BMW"></div>
                    <div class="car-brand-item__information" data-brand-name="BMW"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Chery"></div>
                    <div class="car-brand-item__information" data-brand-name="Chery"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Ford"></div>
                    <div class="car-brand-item__information" data-brand-name="Ford"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Hyundai"></div>
                    <div class="car-brand-item__information" data-brand-name="Hyundai"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Infiniti"></div>
                    <div class="car-brand-item__information" data-brand-name="Infiniti"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Jaguar"></div>
                    <div class="car-brand-item__information" data-brand-name="Jaguar"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Jeep"></div>
                    <div class="car-brand-item__information" data-brand-name="Jeep"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Kia"></div>
                    <div class="car-brand-item__information" data-brand-name="Kia"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Lada"></div>
                    <div class="car-brand-item__information" data-brand-name="Lada"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Geely"></div>
                    <div class="car-brand-item__information" data-brand-name="Geely"><span>123</span></div></a></div>
                <div class="car-search__brand-container-col"><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Land Rover"></div>
                    <div class="car-brand-item__information" data-brand-name="Land Rover"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Lexus"></div>
                    <div class="car-brand-item__information" data-brand-name="Lexus"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Lifan"></div>
                    <div class="car-brand-item__information" data-brand-name="Lifan"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Mazda"></div>
                    <div class="car-brand-item__information" data-brand-name="Mazda"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="MINI"></div>
                    <div class="car-brand-item__information" data-brand-name="MINI"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Mitsubishi"></div>
                    <div class="car-brand-item__information" data-brand-name="Mitsubishi"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Nissan"></div>
                    <div class="car-brand-item__information" data-brand-name="Nissan"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Porsche"></div>
                    <div class="car-brand-item__information" data-brand-name="Porsche"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Ravon"></div>
                    <div class="car-brand-item__information" data-brand-name="Ravon"><span>92</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Renault"></div>
                    <div class="car-brand-item__information" data-brand-name="Renault"><span>123</span></div></a></div>
                <div class="car-search__brand-container-col"><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Skoda"></div>
                    <div class="car-brand-item__information" data-brand-name="Skoda"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Suzuki"></div>
                    <div class="car-brand-item__information" data-brand-name="Suzuki"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Toyota"></div>
                    <div class="car-brand-item__information" data-brand-name="Toyota"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="UAZ"></div>
                    <div class="car-brand-item__information" data-brand-name="UAZ"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Volkswagen"></div>
                    <div class="car-brand-item__information" data-brand-name="Volkswagen"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Haval"></div>
                    <div class="car-brand-item__information" data-brand-name="Haval"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Genesis"></div>
                    <div class="car-brand-item__information" data-brand-name="Genesis"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Datsun"></div>
                    <div class="car-brand-item__information" data-brand-name="Datsun"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Mercedes-Benz"></div>
                    <div class="car-brand-item__information" data-brand-name="Mercedes-Benz"><span>123</span></div></a><a class="car-brand-item js-open-popup" href="#search-region">
                    <div class="car-brand-item__logo" data-brand-name="Peugeot"></div>
                    <div class="car-brand-item__information" data-brand-name="Peugeot"><span>123</span></div></a></div>
            </div>
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