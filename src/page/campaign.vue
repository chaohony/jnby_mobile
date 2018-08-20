<template>
    <div class="campaign">
        <transition name="fade">
            <router-view class="window"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .campaign {
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
