<template>
    <div class="kids-show">
      <div class="header">
        <img src="../../assets/image/kids-show/box.png" alt="">
      </div>
      <div class="content">
        <p>“Kids Show移动照相馆”是jnby by JNBY一年一度的会员活动。我们邀请小朋友拍摄照片，记录他们最真实、最自然的样子。在展示服装新品的同时，更展现出他们充满无限创造力和活力的状态。</p>
      </div>
      <div class="gallery-show">
        <div class="gallery-show-floor-1">
          <img src="../../assets/image/kids-show/beijing.png">
          <img src="../../assets/image/kids-show/wuhan.png">
          <img src="../../assets/image/kids-show/shanghai.png">
        </div>
        <div class="gallery-show-floor-2">
          <img src="../../assets/image/kids-show/hangzhou.png">
          <img src="../../assets/image/kids-show/guangzhou.png">
          <img src="../../assets/image/kids-show/leaf.png">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style scoped lang='scss' ref='stylesheet/scss'>
  .kids-show {
    font-size: 0;
    .header {
      padding-top: 60px;
      text-align: center;
      margin-bottom: 35px;
      img {
        width: 94px;
        height: 88px;
      }
    }
    .content {
      padding: 0 27px;
      font-size: 9px;
      text-align: justify;
      margin-bottom: 37px;
      font-family: FZLTZHK;
      font-weight: 300;
      p {
        line-height: 17px;
      }
    }
    .gallery-show {
      padding: 0 27px;
      .gallery-show-floor-1 {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
        img {
          width: 105px;
          height: 135px;
        }
      }
      .gallery-show-floor-2 {
        display: flex;
        justify-content: space-between;
        img {
          width: 105px;
          height: 135px;
        }
      }
    }
  }
</style>
