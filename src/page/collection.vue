<template>
    <div class="collections">
        <transition name="fade">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang='scss' ref='stylesheet/scss'>
    .view {
        transition: opacity .5s linear;
        &.fade-enter {
            opacity: 0;
        }
        &.fade-leave-active {
            opacity: 0;
        }
    }
</style>
