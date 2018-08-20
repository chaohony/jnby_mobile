<template>
    <div class="parent-child-club">
        <transition name="fade">
            <div class="main" v-show="flag">
                <img src="../../assets/image/parent-child/parent-child.png" alt="">
                <p class="ch">对在寻找自我的成长道路上踽踽独行的青少年们来说，孤独的冒险精神和前行的勇气必不可少，而最可贵也最难得的则是陪伴。我们就发现了几个互相陪伴着共同成长的家庭，分享他们最珍贵的亲子状态，希望能带去有效陪伴的意义。</p>
                <p class="en">For young people who walk alone in search of their own growth, the solitary adventurous spirit and courage to move on are essential, and the most commendable and rare is companionship. We have found several families growing up with each other, sharing their most precious parental status, hoping to bring the meaning of effective companionship to everybody.</p>
            </div>
        </transition>
        <Slider @scrollEnd="pageChange">
            <div class="media-wrapper" v-for="(item, index) in imgList" :key="index">
                <div class="inner">
                    <img v-if="!item.type" :src="item.src">
                    <video autoplay v-else :src="item.src"></video>
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
                        src: require("../../assets/image/parent-child/vol.1/z-1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.1/z-2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.1/z-3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.1/z-4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.1/z-6.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.1/z-7.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.1/z-8.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.1/z-9.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.2/lu-1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.2/lu-2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.2/lu-3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.2/lu-4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.2/lu-5.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.2/lu-6.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.2/lu-7.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.2/lu-8.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.2/lu-9.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.3/t-1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.3/t-2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.3/t-3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.3/t-4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.3/t-5.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.3/t-6.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.4/ke-1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.4/ke-2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.4/ke-3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.4/ke-4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.4/ke-5.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/parent-child/vol.4/ke-6.jpg")
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
    .parent-child-club {
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
                width: 108px;
                height: 90px;
                margin-top: 111px;
                margin-bottom: 45px;
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
