<template>
    <div class="about">
      <div class="mask">
        <div class="mask-floor-1">品牌介绍</div>
        <div class="mask-floor-2"></div>
        <div class="mask-floor-3">2011年1月,江南布衣集团推出了第一个童装品牌 jnby by JNBY,被亲切地称呼小“jnby”。品牌以“自由的想象力”为口号,为28-40岁的中产阶级家庭打造极具个性和想象力的服饰系列,借助当代艺术的观念表达,强调互动的体验宗旨,以“自由、想象力、惊喜、真实”为设计核心,让每个家庭充分感受生活的乐趣。与此同时,鼓励家长与孩子一同成长,唤起家长童心之时,一起寻找更自由、更纯粹、更快乐的交流及思考空间,展现孩子们真实的天性,让每一位家长能真切体会到孩子独有的天赋,更充盈 地体会生活之美。</div>
        <div class="mask-floor-4">In January 2011, JNBY Group launched the first kids wear brand jnby by JNBY , which is amiably called “jnby”. With the slogan of "free imagination", the brand aims at creating highly personalized and imaginative clothing series for 28-40 years old middle-class families, and with the expression of contemporary art concepts, it emphasizes the tenet of the inter active experience, centering "freedom, imagination, surprise and truth" in design, so that each family can fully experience the joy of living. Also, it encourages parents and children to grow up together. When parents' childlike innocence is evoked, they can look for freer, purer and happier space for communication and thinking together with the children, revealing the true nature of the children, so that every parent can truly appreciate the children's unique talent and fully appreciate the beauty of life.</div>
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
.about {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    font-size: 0;
    background-image: url("../assets/image/about/bg.png");
    background-size: cover;
    background-position: 50%;
    overflow: scroll;
    box-sizing: border-box;
    .mask {
        min-height: 100vh;
        background-color: rgba(0,0,0,.4);
        box-sizing: border-box;
        padding: 115px 36px 0 36px;
        .mask-floor-1 {
            font-size: 12px;
            color: #fff;
            font-family: FZLTZHK;
            margin-bottom: 16px;
            letter-spacing: 2px;
        }
        .mask-floor-2 {
          width: 8px;
          border-top: 1px solid #fff;
          margin-bottom: 16px;
        }
        .mask-floor-3 {
            font-size: 9px;
            color: #fff;
            line-height: 18px;
            text-align: justify;
            margin-bottom: 27px;
        }
        .mask-floor-4 {
            font-size: 9px;
            text-align: justify;
            color: #fff;
            line-height: 18px;
            font-style:italic
        }
    }
}
</style>
