<template>
    <div class="isThatYou">
        <Slider @scrollEnd="pageChange">
            <div class="media-wrapper" v-for="(item, index) in imgList" :key="index">
                <div class="inner">
                    <img v-if="!item.type" :src="item.src">
                    <video autoplay v-else :src="item.src" controls></video>
                </div>
            </div>
        </Slider>
        <div class="page">
            {{ z + ' / ' + length }}
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import Slider from 'components/slider'
    export default {
        name: "campaign",
        components: {Slider},
        data() {
            return {
                imgList: [
                    {
                        type: 0,
                        src: require("../../assets/image/campaign-is-that-you/is-1.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/campaign-is-that-you/is-2.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/campaign-is-that-you/is-3.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/campaign-is-that-you/is-4.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/campaign-is-that-you/is-5.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/campaign-is-that-you/is-6.png")
                    }
                ],
                z: ''
            }
        },
        computed: {
            length() {
                return ('00' + this.imgList.length).substring(this.imgList.length.toString().length)
            }
        },
        methods: {
            pageChange(z) {
                this.z = ('00' + z).substring(z.toString().length)
            }
        }
    }
</script>

<style scoped lang='scss' ref='stylesheet/scss'>
    .isThatYou {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        font-size: 0;
        background-color: #000;
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
    }
</style>
