<template>
    <div class="app" id="app">
        <site-header />
    </div>
</template>

<style scoped src="../assets/scss/vendor.scss">
        .site-header {
            font-size: 56.5%;
        }
</style>

<script>
    // Подключаем файл компонента
    import siteHeader from './components/SiteHeader/SiteHeader.vue';
    // или можно так
    // var testComponent = require('./test-component.vue');
    export default {
        components: {
            'site-header': siteHeader
        }
    }
</script>



