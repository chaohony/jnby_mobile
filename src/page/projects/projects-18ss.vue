<template>
    <div class="parent-child-club">
      <transition name="fade">
        <router-view class="window"></router-view>
      </transition>
    </div>
</template>

<script>
    import Slider from 'components/slider'
    import eventBus from '../../common/eventBus'

    export default {
        components: {Slider},
        data() {
            return {
                flag: true,
                imgList: [
                ],
                z: '',
                playButtonVisible: false,
            }
        },
        mounted() {
            setTimeout(() => {
                this.flag = false
            }, 4000)
        },
        methods: {
        }
    }
</script>

<style scoped lang='scss' ref='stylesheet/scss'>
  .window {
    transition: opacity .5s linear;
    &.fade-enter {
      opacity: 0;
    }
    &.fade-leave-active {
      opacity: 0;
    }
  }
</style>
