<template>
    <div class="shopcarts">
        <div class="wrapper">
            <div class="shoppingcart-wrapper" :class="running ? 'running' : 'paused'">
                <div class="inner" @click.stop="doFunction">
                    <img class="balloon" src="../assets/image/test.png" alt="..."/>
                </div>
                <div class="erweima-outter" ref="outter" :class="z1 ? 'z1' : 'z-1'">
                    <div class="erweima-wrapper" :class="[min ? 'min' : 'max', hidden ? 'hidden' : '']">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                running: true,
                min: true,
                z1: false,
                hidden: true
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.bindTransitionend()
            })
        },
        methods: {
            bindTransitionend() {
                this.$refs['outter'].addEventListener('transitionend', () => {
                    if (this.min && this.z1) {
                        this.hidden = !this.hidden
                        this.z1 = !this.z1
                        this.running = !this.running
                    }
                })

            },
            doFunction() {
                this.z1 = !this.z1
                this.running = !this.running
                this.hidden = !this.hidden
                this.min = !this.min
                setTimeout(() => {
                    this.min = !this.min
                }, 5000)
            }
        }
    }
</script>

<style scoped lang='scss' ref='stylesheet/scss'>
    .wrapper {
        width: 100px;
        height: 100px;
        position: fixed;
        bottom: 50px;
        right: 50px;
        z-index: 100000000;
    }
    .shoppingcart-wrapper {
        display: inline-block;
        position: relative;
        border-radius: 50%;
        animation: run 10s linear;
        animation-iteration-count: infinite;
        font-size: 0;
    }
    .running {
        animation-play-state: running;
    }
    .paused {
        animation-play-state: paused;
    }
    .inner {
        width:100%;
        height:100%;
        border-radius:50%;
        overflow:hidden
    }
    img.balloon {
        width: 34px;
        height: 34px;
    }
    .erweima-wrapper {
        position: absolute;
        min-width: 34px;
        min-height: 34px;
        max-width: 100px;
        max-height: 100px;
        border-radius: 50%;
        transition: width .5s ease-in-out, height .5s ease-in-out;
        overflow: hidden;
        background-color: transparent;
        background-image: url("../assets/image/scanner.png");
        background-size: 100px 100px;
        background-repeat: no-repeat;
        background-position: center;
    }
    .z-1 {
        z-index: -1;
    }
    .z1 {
        z-index: 10;
    }
    .min {
        width: 50px;
        height: 50px;
    }
    .max {
        width: 100px;
        height: 100px;
    }
    .hidden {
        visibility: hidden;
    }
    .visibility {
        visibility: visible;
    }
    .erweima-outter {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes run {
        from {
            transform: translate3d(0, 0, 0);
        }
        25% {
            transform: translate3d(40px, 40px, 0);
        }
        50% {
            transform: translate3d(0, 80px, 0);
        }
        75% {
            transform: translate3d(-40px, 40px, 0);
        }
        to {
            transform: translate3d(0, 0, 0);
        }
    }
</style>
