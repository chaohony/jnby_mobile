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
                        src: require("../../assets/image/collections-fw-looks/01.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/02.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/03.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/04.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/05.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/06.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/07.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/08.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/09.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/10.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/11.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/12.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/13.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/14.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/15.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/16.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/17.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/18.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/19.jpg")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-looks/20.jpg")
                    }
                ],
                shows: [
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/01.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/02.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/03.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/04.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/05.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/06.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/07.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/08.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/09.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/10.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/11.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/12.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/13.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/14.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/14.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/15.png")
                    },
                    {
                        type: 0,
                        src: require("../../assets/image/collections-fw-shows/16.png")
                    }
                ],
                videos: [
                    {
                        type: 1,
                        src: 'https://rebuildsoft-jnby.oss-cn-hangzhou.aliyuncs.com/video/18-aw.mp4'
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
