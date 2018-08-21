<template>
    <div class="shows">
        <Slider @scrollEnd="pageChange">
            <div class="media-wrapper" v-for="(item, index) in shows" :key="index">
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
    import Slider from 'components/slider'

    export default {
        components: {Slider},
        data() {
            return {
                z: ''
            }
        },
        props: {
            shows: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        computed: {
            length() {
                return ('00' + this.shows.length).substring(this.shows.length.toString().length)
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
    .shows {
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
