<template>
    <div class="slider" ref="slider">
        <div class="wrapper" ref="wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        props: {
            flag: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                loop: true,
                auto: true
            }
        },
        mounted() {
            this.$nextTick(() => {
                this._initWidth()
                this._initSlider()
            })
        },
        methods: {
            _initSlider() {
                if (!this.scroll) {
                    this.scroll = new BScroll(this.$refs['slider'], {
                        click: true,
                        scrollX: true,
                        scrollY: false,
                        eventPassthrough: true,
                        momentum: false,
                        snap: {
                            loop: true,
                            threshold: 0.1,
                            easing: {
                                style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                fn: function (t) {
                                    return t * (2 - t)
                                }
                            }
                        }
                    })
                }
                this.scroll.on('scrollEnd', this._onScrollEnd)
                if (this.auto) {
                    this.scroll.trigger('scrollEnd')
                }
            },
            _onScrollEnd() {
                this.$emit("scrollEnd", this.scroll.currentPage.pageX)
                if (this.auto) {
                    if (this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(() => {
                        this.scroll.next()
                    }, 4000)
                }
            },
            _initWidth() {
                let slider = this.$refs.slider
                let wrapper = this.$refs.wrapper
                this.children = wrapper.children
                let unitWidth = slider.clientWidth
                let unitHeight = slider.clientHeight
                let totalWidth = 0
                for (let i = 0; i < this.children.length; i++) {
                    totalWidth += unitWidth
                    this.children[i].style.width = unitWidth + 'px'
                    this.children[i].style.height = unitHeight + 'px'
                }
                if (this.loop && !this.flag) {
                    totalWidth += 2 * unitWidth
                }
                wrapper.style.width = totalWidth + 'px'
            },
        }
    }
</script>

<style scoped lang='scss' ref='stylesheet/scss'>
    .slider {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        white-space: nowrap;
        .wrapper {
            height: 100%;
            white-space: nowrap;
            .media-wrapper {
                width: 100%;
                height: 100%;
                display: inline-block;
                .inner {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    overflow: hidden;
                }
            }
            img {
                height: 100%;
            }
            video {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
