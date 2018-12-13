import Vue from 'vue'

import '../assets/scss/vendor.scss'

import App from './App.vue'

window.onload = function () {
    new Vue({
        el: '#app',
        render: h => h(App)
    })
}

