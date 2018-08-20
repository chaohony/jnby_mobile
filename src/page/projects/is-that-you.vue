<template>
    <div class="is-that-you">
        <transition name="fade">
            <div class="main" v-show="flag">
                <img src="../../assets/image/is-that-you/ball.png" alt="">
                <p class="ch">2017AW我们寻觅了几位来自不同国家的青少年，因着他们各自不同的成长环境，呈现出他们不同的性格特点，不同的兴趣爱好，不同的生活方式。</p>
                <p class="en">In the 2017 autumn and winter, we had found several teenagers from different countries, basing on their different growth environment, in order to show their different characteristics, hobbies, and life styles.</p>
            </div>
        </transition>
        <Slider @scrollEnd="pageChange">
            <div class="media-wrapper" v-for="(item, index) in imgList" :key="index">
                <div class="inner">
                    <img v-if="!item.type" :src="item.src">
                    <video ref="video" autoplay v-else :src="item.src"></video>
                </div>
            </div>
        </Slider>
        <div class="page">
            {{ z + ' / ' + this.imgList.length }}
        </div>
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
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.1/d-1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.1/d-2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.1/d-3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.2/h-1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.2/h-2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.2/h-3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.2/h-4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.2/h-5.jpg")
                    },
                    {
                        type: 1,
                        src: 'http://7xsh95.com1.z0.glb.clouddn.com/%E8%93%AC%E9%A9%AC%E5%AE%98%E7%BD%91-%E8%A7%86%E9%A2%91/is%20that%20you%E4%B8%93%E9%A2%98-VOL.3-Sasuke%20harakuchi.mp4'
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.3/s-1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.3/s-2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.3/s-3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.3/s-4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.3/s-5.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.4/ma-1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.4/ma-2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.4/ma-3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.4/ma-4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.4/ma-5.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.5/de-1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.5/de-2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.5/de-3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.5/de-4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.5/de-5.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.6/na-1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.6/na-2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/is-that-you/vol.6/na-3.jpg")
                    },
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
            pageChange(z) {
                this.z = ('00' + z).substring(z.toString().length)
                // safari浏览器下视频样式调整
                let type = this.imgList[z - 1].type
                if (type) {
                    this.playButtonVisible = true
                } else {
                    this.playButtonVisible = false
                }
            },
            playButton() {
                this.$refs['video'][0].play()
                this.playButtonVisible = false
                eventBus.$emit("videoPlay")
            }
        }
    }
</script>

<style scoped lang='scss' ref='stylesheet/scss'>
    .is-that-you {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        font-size: 0;
        background-color: #000;
        .main {
            background-color: rgba(0, 0, 0, .6);
            text-align: center;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            transition: opacity .5s linear;
            &.fade-enter {
                opacity: 0;
            }
            &.fade-leave-active {
                opacity: 0;
            }
            img {
                width: 111px;
                height: 73px;
                margin-top: 120px;
                margin-bottom: 53px;
            }
            .ch {
                margin: 0 38px;
                margin-bottom: 12px;
                color: #fff;
                font-size: 10px;
                font-family: HYQiHei-60S;
                line-height: 16px;
                text-align: justify;
            }
            .en {
                margin: 0 38px;
                color: #fff;
                font-size: 10px;
                font-family: DIN-Medium;
                line-height: 16px;
                text-align: justify;
            }
        }
        .page {
            position: fixed;
            bottom: 42px;
            z-index: 1;
            text-align: center;
            left: 0;
            right: 0;
            color: #fff;
            font-family: DIN-Bold;
            font-size: 13px;
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
    }
</style>
