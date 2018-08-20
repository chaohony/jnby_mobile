<template>
    <div class="AW-2018">
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
                        src: require("../../assets/image/aw2018/looks/1.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/2.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/3.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/4.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/5.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/6.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/7.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/8.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/9.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/10.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/11.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/12.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/13.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/14.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/15.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/16.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/17.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/18.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/19.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/20.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/21.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/22.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/23.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/24.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/25.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/26.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/27.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/28.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/29.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/30.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/31.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/32.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/33.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/34.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/35.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/36.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/37.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/38.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/39.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/40.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/41.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/42.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/43.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/44.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/45.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/46.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/47.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/48.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/49.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/50.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/51.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/looks/52.png")
                    },
                ],
                shows: [
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/1.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/2.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/3.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/4.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/5.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/6.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/7.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/8.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/9.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/10.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/11.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/12.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/13.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/14.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/14.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/15.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/16.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/17.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/18.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/aw2018/shows/19.jpg")
                    }
                ],
                videos: [
                    {
                        type: 1,
                        src: 'http://7xsh95.com1.z0.glb.clouddn.com/%E8%93%AC%E9%A9%AC%E5%AE%98%E7%BD%91-%E8%A7%86%E9%A2%91/%E8%93%AC%E9%A9%AC%203%E5%88%86%E9%92%9F%20%20%20%E5%B0%8F%E7%89%88%E6%9C%AC.mp4'
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
