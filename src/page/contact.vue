<template>
  <div class="contact">
    <div class="mask">
      <transition name="fade">
        <div class="icon-container" v-if="show">
          <div class="icon-container-block">
            <div class="img-wrapper">
              <img src="../assets/image/contact/cinema.png">
            </div>
            <a href="http://www.insstar.cn/jnby_by_jnby">
              <span>Instagram: jnby_by_jnby</span>
            </a>
          </div>
          <div class="icon-container-block">
            <div class="img-wrapper">
              <img src="../assets/image/contact/sina.png">
            </div>
            <a href="https://weibo.com/jnbykids?topnav=1&wvr=5&from=company">
              <span>Weibo: jnby_by_JNBY</span>
            </a>
          </div>
          <div class="icon-container-block" @click="show = !show">
            <div class="img-wrapper">
              <img src="../assets/image/contact/wechat.png">
            </div>
            <a href="https://mp.weixin.qq.com/s?__biz=MjM5MDUyMTcyNA==&mid=2650704435&idx=1&sn=437e2a442c5f17ddfd535359c5321aa2&chksm=be49aa20893e23364c20d458f94d4a1fc83d42b4f11cd652f94ffa5cb8c558246aa692395281#rd">
              <span>Wechat: jnbybyJNBY</span>
            </a>
          </div>
          <div class="icon-container-block">
            <div class="img-wrapper">
              <img src="../assets/image/contact/location.png">
            </div>
            <a href="http://www.jnbygroup.com">
              <span>STORES</span>
            </a>
          </div>

        </div>
      </transition>
      <transition name="fade2">
        <div class="scanner-wrapper" v-if="!show">
          <img class="close" src="../assets/image/contact/close.png" @click="show = !show">
          <img class="scanner" src="../assets/image/contact/scanner.png">
        </div>
      </transition>
      <div class="footer">
        <div class="footer-floor-1">FREE CUSTOMER SERVICE HOTLINE: 400-883-5000</div>
        <div class="footer-floor-2">E-MAIL: SERVICE@JNBY.COM</div>
        <div class="footer-floor-3">copyright © jnby by JNBY</div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .contact {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background-image: url("../assets/image/contact/bg.png");
    background-size: cover;
    background-position: 50%;
    font-size: 0;
    .mask {
      height: 100vh;
      background-color: rgba(0, 0, 0, .4);
      overflow: hidden;
      text-align: center;
      .icon-container {
        display: inline-block;
        text-align: left;
        width: 250px;
        transition: transform .3s linear;
        transform-origin: 40%;
        position: absolute;
        top: 147px;
        left: 68px;
        .icon-container-block {
          margin-bottom: 39px;
          .img-wrapper {
            display: inline-block;
            vertical-align: middle;
            margin-right: 41px;
            width: 40px;
            text-align: center;
          }
          span {
            font-size: 14px;
            color: #fff;
            vertical-align: middle;
            font-weight: bold;
          }
          &:first-child {
            img {
              width: 25px;
              height: 25px;
            }
          }
          &:nth-child(2) {
            img {
              width: 25px;
              height: 21px;
            }
          }
          &:nth-child(3) {
            img {
              width: 27px;
              height: 21px;
            }
          }
          &:nth-child(4) {
            img {
              width: 40px;
              height: 35px;
            }
          }
        }
        &.fade-enter {
          transform: scaleX(0);
        }
        &.fade-leave-active {
          transform: scaleX(0);
        }

      }
      .scanner-wrapper {
        display: inline-block;
        width: 250px;
        height: 250px;
        position: absolute;
        top: 167px;
        left: 50%;
        background-color: rgba(255, 255, 255, .14);
        position: relative;
        transition: transform .3s linear;
        transform-origin: 50%;
        margin-left: -370px;
        &.fade2-enter {
          transform: scaleX(0);
        }
        &.fade2-leave-active {
          transform: scaleX(0);
        }
        .close {
          position: absolute;
          top: 12px;
          right: 11px;
          width: 15px;
          height: 15px;
        }
        .scanner {
          width: 135px;
          height: 135px;
          margin-top: 57px;
        }
      }
      .footer {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 58px;
        .footer-floor-1 {
          display: block;
          text-align: center;
          font-size: 9px;
          color: #fff;
          line-height: 7px;
          font-family: DIN-Medium;
          margin-bottom: 10px;
        }
        .footer-floor-2 {
          display: block;
          text-align: center;
          font-size: 9px;
          color: #fff;
          line-height: 7px;
          font-family: DIN-Medium;
          margin-bottom: 10px;
        }
        .footer-floor-3 {
          display: block;
          text-align: center;
          font-size: 9px;
          color: #fff;
          line-height: 7px;
          font-family: DIN-Medium;
        }
      }
    }
  }

</style>
