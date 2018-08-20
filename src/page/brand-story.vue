<template>
    <div class="brand-story">
        <div class="mask">
            <div class="mask-floor-1">2016年7月，江南布衣集团推出了“Z世代”品牌“蓬马”（POMME DE TERRE）。品牌展现了一个随性、鬼马、雅痞的形象。设计注重质感的呈现，寻求轻松的着装体验与更深层次的情感触动。并且填补了青少年设计师品牌这一市场空缺。
                <div style="height: 5px;"></div>
处在“自我发展期”的Z世代群体，有自主意识，自信心和价值观的养成充分影响着他们的未来。蓬马作为这个群体的发言人，从衣食住行多个维度，给予他们足够的探索空间，找到一种更适合他们自由成长的生活方式。</div>
            <div class="mask-floor-2">In July 2016, JNBY Group launched the “Generation Z” brand “Pomme de terre ”that shows a youth image who are individual, wicked and enjoyable. The design focuses on the presentation of the texture, seeking for a relaxed dressing experience and a deeper emotional touch. It also fills the market gap of young designer brand.
                <div style="height: 5px;"></div>
The young people of “Generation Z” in the “self exploration period” have a strong sense of independent consciousness. The cultivation of self-confidence and values will fully affect their future. As a spokesperson for young people, Pomme de terre gives them enough space to find a way of life which is more suitable for them to grow freely in many dimensions of clothing, food, living and outing.</div>
            <div class="mask-floor-3">
                Z世代：意指在1990年代中期至2000年出生的人。他们又被称为网络世代、互联网世代，统指受到互联网、即时通讯、短讯、MP3、智能手机和平板电脑等科技产物影响很大的一代人。
            </div>
            <div class="mask-floor-4">
                Generation Z：it refers to the people who born between the mid-1990s and 2000s. They are also known as the Net Generation or the Internet Generation, which is a generation that has been influenced by technology products such as the Internet, instant messaging, SMS, MP3, smart-phone and IPAD.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: false
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.brand-story {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    font-size: 0;
    background-image: url("../assets/image/brand-story/brand-story.png");
    background-size: cover;
    background-position: 50%;
    overflow: scroll;
    box-sizing: border-box;

    .mask {
        min-height: 100vh;
        background-color: rgba(0,0,0,.6);
        box-sizing: border-box;
        padding: 100px 30px 30px 30px;
        .mask-floor-1 {
            font-size: 10px;
            color: #fff;
            line-height: 15px;
            font-family: HYQiHei-60S;
            margin-bottom: 13px;
            text-align: justify;
        }
        .mask-floor-2 {
            font-size: 10px;
            line-height: 13px;
            font-family: DIN-Medium;
            color: #fff;
            padding-bottom: 30px;
            border-bottom: 1px solid #aaa299;
            text-align: justify;
        }
        .mask-floor-3 {
            padding-top: 10px;
            font-size: 8px;
            color: #fff;
            line-height: 17px;
            text-align: justify;
            font-family: HYQiHei-60S;
            margin-bottom: 10px;
        }
        .mask-floor-4 {
            font-size: 8px;
            text-align: justify;
            color: #fff;
            line-height: 11px;
            font-family: DIN-Medium;
        }
    }
}
</style>
