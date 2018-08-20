<template>
    <div class="AW-2017">
        <transition name="fade">
            <router-view class="view" :looks="looks" :shows="shows" :videos="videos"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                looks: [
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/5.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/6.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/7.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/8.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/9.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/10.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/11.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/12.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/13.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/14.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/15.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/16.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/17.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/18.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/19.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/20.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/21.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/22.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/23.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/24.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/25.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/26.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/27.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/28.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/29.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/30.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/31.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/32.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/33.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/34.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/looks/35.jpg")
                    },
                ],
                shows: [
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/shows/1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/shows/2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/shows/3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/shows/4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/shows/5.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/shows/6.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/shows/7.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/shows/8.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/shows/9.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/shows/10.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/shows/11.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/shows/12.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/shows/13.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2017/shows/14.jpg")
                    }
                ],
                videos: [
                    {
                        type: 1,
                        src: 'http://7xsh95.com1.z0.glb.clouddn.com/17AWshow1min.mp4'
                    }
                ]
            }
        }
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
