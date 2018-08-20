<template>
    <div class="index">
        <aside-navi :visible.sync="visible"></aside-navi>
        <transition name="fade">
            <div class="brand-title" v-show="!visible">
                <router-link to="/">
                    <img src="../assets/image/title.png" alt="">
                </router-link>
            </div>
        </transition>
        <keep-alive>
            <transition name="fade">
                <router-view class="window"></router-view>
            </transition>
        </keep-alive>
    </div>
</template>

<script>
    import asideNavi from 'components/aside-navi.vue'
    export default {
        components: {asideNavi},
        data() {
            return {
                current: 0,
                visible: false
            }
        },
        watch: {
            $route() {
                this.visible = false
            }
        },
        mounted () {
            this.timer = setInterval(() => {
                this.current++
                if(this.current === 3) {
                    this.current = 0
                }
            }, 6000)
        }
    }
</script>

<style scoped lang='scss' ref='stylesheet/scss'>
    .index {
        font-size: 0;
        .brand-title {
            &.fade-enter {
                opacity: 0;
            }
            &.fade-leave-active {
                opacity: 0;
            }
            position: fixed;
            top: 15px;
            left: 50%;
            width: 97px;
            height: 33px;
            margin-left: -48px;
            transition: opacity .2s linear;
            z-index: 10000;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .window {
            transition: opacity .5s linear;
            &.fade-enter {
                opacity: 0;
            }
            &.fade-leave-active {
                opacity: 0;
            }
        }
    }
</style>
