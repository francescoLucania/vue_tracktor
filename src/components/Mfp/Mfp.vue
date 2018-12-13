<template>
    <div class="mfp-hide" ref="modal">
        <slot></slot>
    </div>
</template>

<script>
    import _ from 'underscore'
    import $ from 'jquery'
    import 'magnific-popup'
    export default {
        name: 'magnific-popup-modal',
        props: {
            show: {
                type: Boolean,
                default: false
            },
            config: {
                type: Object,
                default: function () {
                    return {
                        type: 'inline',
                        removalDelay: 0,
                        mainClass: 'site-popup',
                        closeMarkup: '',
                        callbacks: {
                            delegate: 'a',

                            open: function () {

                                $('.js-close-right-menu').trigger('click');

                                if ($('html').hasClass('mod_touchevents')) {
                                    scrollPosition = window.pageYOffset;
                                    bodyPopupMobileMod();
                                }

                                if ($(window).height() < $(document).height()) {
                                    $('.js-site-header').css({'padding-right': scrollSize().width + 'px'});
                                }

                            },

                            close: function () {

                                if ($('html').hasClass('mod_touchevents')) {
                                    window.scrollTo(0, scrollPosition);
                                    bodyPopupMobileModClose()
                                }

                                $('body').css('padding-right', '');
                            },
                            midClick: true
                        }


                        // magnific defaults
                        // disableOn: null,
                        // mainClass: '',
                        // preloader: true,
                        // focus: '',
                        // closeOnContentClick: false,
                        // closeOnBgClick: false,
                        // closeBtnInside: true,
                        // showCloseBtn: true,
                        // enableEscapeKey: true,
                        // modal: false,
                        // alignTop: false,
                        // index: null,
                        // fixedContentPos: 'auto',
                        // fixedBgPos: 'auto',
                        // overflowY: 'auto',
                        // removalDelay: 0,
                        // // closeMarkup: '',
                        // // prependTo: document.body,
                        // autoFocusLast: true
                    }
                }
            }
        },

        data () {
            return {
                visible: this.show
            }
        },
        mounted () {
            this[this.visible ? 'open' : 'close']()
        },
        methods: {
            /**
             * Opens the modal
             * @param {object} options Last chance to define options on this call to Magnific Popup's open() method
             */
            open: function (options) {
                if (!!$.magnificPopup.instance.isOpen && this.visible) {
                    return
                }
                let root = this
                let config = _.extend(
                    this.config,
                    {
                        items: {
                            src: $(this.$refs.modal),
                            type: 'inline'
                        },
                        callbacks: {
                            open: function () {
                                root.visible = true
                                root.$emit('open')

                                $('.js-close-right-menu').trigger('click');

                                if ($('html').hasClass('mod_touchevents')) {
                                    scrollPosition = window.pageYOffset;
                                    bodyPopupMobileMod();
                                }

                                if ($(window).height() < $(document).height()) {
                                    $('.js-site-header').css({'padding-right': scrollSize().width + 'px'});
                                }
                            },
                            close: root.close
                        }
                    },
                    options || {})
                $.magnificPopup.open(config)
            },
            /**
             * Closes the modal
             */
            close: function () {

                if ($('html').hasClass('mod_touchevents')) {
                    window.scrollTo(0, scrollPosition);
                    bodyPopupMobileModClose()
                }

                $('body').css('padding-right', '');
            },
            midClick: true,
            toggle: function () {
                this[this.visible ? 'close' : 'open']()
            }
        }
    }

    $(document).on('click', '.js-site-popup-close', function () {

        $('.site-popup').css('display','none');
        $.magnificPopup.close();
        return false
    });
</script>

<style scoped src="../../../assets/scss/application.scss">

</style>