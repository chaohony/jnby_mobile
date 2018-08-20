<template>
    <div class="SS-2018">
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
                        src: require("../../assets/image/ss2018/looks/1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/5.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/6.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/7.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/8.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/9.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/10.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/11.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/12.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/13.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/14.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/15.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/16.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/17.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/18.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/19.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/20.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/21.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/22.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/23.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/24.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/25.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/26.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/27.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/28.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/29.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/30.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/31.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/32.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/33.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/34.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/35.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/36.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/37.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/38.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/39.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/40.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/41.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/42.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/43.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/44.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/45.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/46.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/47.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/48.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/49.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/looks/50.jpg")
                    },
                ],
                shows: [
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/5.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/6.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/7.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/8.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/9.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/10.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/11.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/12.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/13.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/14.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/14.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/15.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/16.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/17.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/18.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/19.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/20.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/21.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/22.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/23.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/24.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/25.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/ss2018/shows/26.jpg")
                    }
                ],
                videos: [
                    {
                        type: 1,
                        src: 'http://7xsh95.com1.z0.glb.clouddn.com/2018SS-show1min.mp4'
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
