<template>
    <div class="videos">
        <Slider :flag="true">
            <div class="media-wrapper" v-for="(item, index) in videos" :key="index">
                <div class="inner">
                    <img v-if="!item.type" :src="item.src">
                    <video ref="video" autoplay v-else :src="item.src" @click="playButton"></video>
                </div>
            </div>
        </Slider>
        <div class="play-button" v-if="playButtonVisible" @click="playButton">
            <img src="../../assets/image/play.png">
        </div>
    </div>
</template>

<script>
    import Slider from 'components/slider'
    import browser from '../../common/js/browser'
    import eventBus from '../../common/eventBus'

    export default {
        components: {Slider},
        data() {
            return {
                z: '',
                playButtonVisible: true,
            }
        },
        props: {
            videos: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        mounted() {
            this.playButtonVisible = true
        },
        methods: {
            playButton() {
                this.$refs['video'][0].play()
                this.playButtonVisible = false
                eventBus.$emit("videoPlay")
            }
        }
    }
</script>

<style scoped lang='scss' ref='stylesheet/scss'>
    .videos {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        font-size: 0;
        background-color: #000;
    }

    .play-button {
        img {
            position: fixed;
            z-index: 1;
            left: 50%;
            top: 50%;
            width: 60px;
            height: 60px;
            transform: translate3d(-50%, -50%, 0);
        }
    }
</style>
