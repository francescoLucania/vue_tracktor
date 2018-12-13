import Vue from 'vue'

import SiteHeader from "./SiteHeader";

window.onload = function () {
    new Vue({
        name: 'site-header',
        el: '#header',
        render: h => h(SiteHeader)
    })
}