<template>
    <div class="app" id="app">
        <site-header />
        <main>
            <div class="section">
                <div class="container">
                    <button class="button js-open-popup" @click="openModal">Open Modal</button>
                </div>
            </div>

            <magnific-popup-modal :show="false" :config="{closeOnBgClick:true}" ref="modal">
                <!--<region-popup />-->
                <auto-popup />
            </magnific-popup-modal>

        </main>

    </div>
</template>


<style scoped src="../assets/scss/vendor.scss">
</style>

<script>
    import siteHeader from './components/SiteHeader/SiteHeader.vue';
    import MagnificPopupModal from './components/Mfp/Mfp.vue';
    import SearchAuto from './components/Popups/SearchAuto.vue';
    import SearchRegion from './components/Popups/SearchRegion.vue';


    export default {
        components: {
            'site-header': siteHeader,
            'magnific-popup-modal': MagnificPopupModal,
            'auto-popup': SearchAuto,
            'region-popup': SearchRegion

        },
        methods: {

            openModal () {
                this.$refs.modal.open()
            },

            openModal2 () {
                this.$refs.modal2.open()
            }

        }
    }
</script>
