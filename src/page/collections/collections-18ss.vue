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
                        src: require("../../assets/image/collections-ss-looks/01.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/02.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/03.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/04.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/05.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/06.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/07.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/08.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/09.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/10.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/11.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/12.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/13.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/14.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/15.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/16.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/17.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/18.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/19.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-looks/20.png")
                    }
                ],
                shows: [
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/01.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/02.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/03.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/04.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/05.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/06.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/07.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/08.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/09.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/10.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/11.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/12.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/13.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/14.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/14.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/15.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-ss-shows/16.png")
                    }
                ],
                videos: [
                    {
                        type: 1,
                        src: 'https://rebuildsoft-jnby.oss-cn-hangzhou.aliyuncs.com/video/18-ss.mp4'
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
