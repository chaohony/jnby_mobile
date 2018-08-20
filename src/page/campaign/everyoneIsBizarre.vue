<template>
    <div class="everyoneIsBizarre">
        <Slider @scrollEnd="pageChange">
            <div class="media-wrapper" v-for="(item, index) in imgList" :key="index">
                <div class="inner">
                    <img v-if="!item.type" :src="item.src">
                    <video ref="video" autoplay v-else :src="item.src"></video>
                </div>
            </div>
        </Slider>
        <div class="page">
            {{ z + ' / ' + length }}
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
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-1.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-2.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-3.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-4.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-5.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-6.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-7.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-8.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-9.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-10.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-11.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-12.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-13.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-14.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-15.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-16.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-17.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-18.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/bizarre/everyone’s-bizarre-19.png")
                    },
                    {
                        type: 1,
                        src: "http://7xsh95.com1.z0.glb.clouddn.com/%E8%93%AC%E9%A9%AC%E5%AE%98%E7%BD%91-%E8%A7%86%E9%A2%91/18ss%E8%93%AC%E9%A9%AC%E7%81%B5%E6%84%9F%E8%A7%86%E9%A2%91.mov"
                    }
                ],
                z: '',
                playButtonVisible: false,
            }
        },
        computed: {
            length() {
                return ('00' + this.imgList.length).substring(this.imgList.length.toString().length)
            }
        },
        methods: {
            playButton() {
                this.$refs['video'][0].play()
                this.playButtonVisible = false
                eventBus.$emit("videoPlay")
            },
            pageChange(z) {
                // 页码刷新
                this.z = ('00' + z).substring(z.toString().length)

                // safari浏览器下视频样式调整
                let type = this.imgList[z - 1].type
                if (type) {
                    this.playButtonVisible = true
                    console.log(this.playButtonVisible)
                } else {
                    this.playButtonVisible = false
                }
            }
        }
    }
</script>

<style scoped lang='scss' ref='stylesheet/scss'>
    .everyoneIsBizarre {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        font-size: 0;
        backgrouned-color: #000;
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
