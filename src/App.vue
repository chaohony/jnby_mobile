<template>
    <div id="app">
        <transition name="fade">
            <router-view class="router-view"/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style scoped lang='scss' ref='stylesheet/scss'>
    .router-view {
        transition: opacity .5s linear;
        &.fade-enter {
            opacity: 0;
        }
        &.fade-leave-active {
            opacity: 0;
        }
    }
</style>
