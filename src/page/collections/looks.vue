<template>
    <div class="looks">
        <shopcarts></shopcarts>
        <Slider @scrollEnd="pageChange">
            <div class="media-wrapper" v-for="(item, index) in looks" :key="index">
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
    import Shopcarts from 'components/shopcarts'

    export default {
        components: {Slider, Shopcarts},
        data() {
            return {
                z: ''
            }
        },
        props: {
            looks: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        computed: {
            length() {
                return ('00' + this.looks.length).substring(this.looks.length.toString().length)
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
    .looks {
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
