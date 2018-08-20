<template>
    <div class="different">
        <transition name="fade">
            <div class="main" v-show="flag">
                <img src="../../assets/image/different/different.png" alt="">
                <p class="ch">蓬马2018春夏系列源于电影《早餐俱乐部》中的一句台词“EVERYONE’S
                    BIZARRE”（每个人都是怪人）。每个人都有可能成为别人眼中的“怪人”，但依然有人勇敢地做自己，自顾自地怪下去。我们一直在寻找与众不同的少年先锋，希望为青少年呈现更多的可能性，鼓励更多的青少年独立思考，拥有自己的个性，坚持做自己和自己喜欢的事，不被外在标签所影响，保有少年心气最特别的部分。让他们勇敢地表达自我、追求自我。正如品牌一直传达的标语：DON’T
                    BE SERIOUS!每个人都是怪人，不一样才好玩！</p>
                <p class="en">2018 spring and summer, inspired of“Everyone’s bizarre”, the line from the movie of “The
                    Breakfast Club”. Everyone can be seen as a "freak", but there are still some people who are brave
                    enough to be themselves and continue to be different. We are always looking for unusual young
                    pioneers, hoping to present more possibility for youth，to encourage them think independently and
                    have their own personality, to be themselves and do what they love, never be affected by external
                    label, retain the most special part of the smells like teen spirit.<br>
                    Let young people bravely express and pursue themselves. As the brand slogan: DON’T BE SERIOUS!
                    Everyone’s bizarre, it’s different but funny!</p>
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
                imgList: [
                    {
                        type: 0,
                        src: require("../../assets/image/different/vol.1/xi-1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/different/vol.1/xi-2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/different/vol.1/xi-3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/different/vol.1/xi-4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/different/vol.1/xi-5.jpg")
                    },
                    {
                        type: 1,
                        src: "http://7xsh95.com1.z0.glb.clouddn.com/%E8%93%AC%E9%A9%AC%E5%AE%98%E7%BD%91-%E8%A7%86%E9%A2%91/%E4%B8%8D%E4%B8%80%E6%A0%B7%E6%89%8D%E5%A5%BD%E7%8E%A9%E4%B8%93%E9%A2%98-%E8%A7%86%E9%A2%91/vol.1-%E5%B8%AD%E5%98%89%E7%90%AA%20H264%20%E5%8E%8B%E7%BC%A9%E7%89%88.mov"
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/different/vol.2/en-1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/different/vol.2/en-2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/different/vol.2/en-3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/different/vol.2/en-4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/different/vol.2/en-5.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/different/vol.2/en-6.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/different/vol.2/en-7.jpg")
                    },
                    {
                        type: 1,
                        src: "http://7xsh95.com1.z0.glb.clouddn.com/%E8%93%AC%E9%A9%AC%E5%AE%98%E7%BD%91-%E8%A7%86%E9%A2%91/%E4%B8%8D%E4%B8%80%E6%A0%B7%E6%89%8D%E5%A5%BD%E7%8E%A9%E4%B8%93%E9%A2%98-%E8%A7%86%E9%A2%91/vol.2%E8%8B%B1%E4%BA%9A%E8%8B%B1%E5%85%B0%20Pomme%20bro%20%E8%BD%AC.mp4"
                    },
                ],
                z: '',
                flag: true,
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
            },
        }
    }
</script>

<style scoped lang='scss' ref='stylesheet/scss'>
    .different {
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
                width: 180px;
                height: 55px;
                margin-top: 99px;
                margin-bottom: 50px;
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
