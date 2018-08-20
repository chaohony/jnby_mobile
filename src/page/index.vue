<template>
    <div class="index">
        <aside-navi :visible.sync="visible"></aside-navi>
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
