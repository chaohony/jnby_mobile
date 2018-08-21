<template>
  <div class="aside">
    <div class="btn-wrapper" @click="toggleAside" :class="{active: visible, inactive: !visible && flag, black: black}">
      <span class="span-1"></span>
      <span class="span-2"></span>
      <span class="span-3"></span>
    </div>
    <transition name="fade">
      <aside v-show="visible" ref="aside">
        <div class="aside-container">
          <router-link to="/">
            <img class="title" src="../assets/image/title.png">
          </router-link>
          <ul class="router-container">
            <li class="router-item"
                :class="{'router-item-active': !route.fold}"
                v-for="(route, index) in routerList"
                :key="index"
                @click="expandFirstRoute(route)">
              <div class="router-item-text">
                <router-link :to="route.path" v-if="!route.leaf">{{ route.name }}</router-link>
                <div v-else>{{ route.name }}</div>
              </div>
              <div class="first-route-children-wrapper" :class="route.name" @click.stop>
                <div class="first-route-children" v-for="(children, i) in route.children" :key="i"
                     @click="expandSecondRoute(children, route)">
                  <router-link :to="children.path" v-if="!children.leaf">{{ children.name }}</router-link>
                  <div v-else>{{ children.name }}</div>
                  <div class="second-route-children-wrapper" v-if="children.children"
                       :class="{'second-item-active': !children.fold}">
                    <div class="second-route-children" v-for="(grandChildren, x) in children.children" :key="x"
                         @click.stop>
                      <router-link :to="grandChildren.path" v-html="grandChildren.name"></router-link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </transition>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    props: {
      visible: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      $route(n) {
        let path = n.path
        let flag = path === '/projects/18ss/kids-show'
        this.makeBarBlack(flag)
      }
    },
    data() {
      return {
        routerList: [],
        flag: false,
        black: false
      }
    },
    mounted() {
      let list = this.$router.options.routes[0].children.filter(i => !i.hidden)
      list.forEach(i => {
        if (i.leaf) {
          i.fold = true
          if (i.children) {
            i.children.forEach(ii => {
              ii.fold = true
            })
          }
        }
      })
      this.routerList = list

      setTimeout(() => {
        this.initScroll()
      }, 20)

    },
    methods: {
      toggleAside() {
        this.$emit("update:visible", !this.visible)
        this.$nextTick(() => {
          if (!this.visible) {
            this.flag = true
          }
        })
      },
      initScroll() {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.aside, {
            click: true,
            probeType: 3
          })
        } else {
          this.scroll.refresh()
        }
      },
      expandFirstRoute(route) {
        if (!route.leaf) return
        route.fold = !route.fold
        if (route.name === 'COLLECTIONS') {
          if (route.fold) {
            this.height = document.querySelector('.COLLECTIONS').clientHeight + "px"
            document.querySelector('.COLLECTIONS').style.height = '0px'
          } else {
            document.querySelector('.COLLECTIONS').style.height = this.height
          }
        } else if (route.name === 'PROJECTS') {
          if (route.fold) {
            this.projectsHeight = document.querySelector('.PROJECTS').clientHeight + 'px'
            document.querySelector('.PROJECTS').style.height = '0px'
          } else {
            document.querySelector('.PROJECTS').style.height = this.projectsHeight
          }
        }
      },
      expandSecondRoute(children, route) {
        children.fold = !children.fold
        if (route.name === 'COLLECTIONS') {
          let count = 0
          for (let i = 0; i < route.children.length; i++) {
            if (!route.children[i].fold) {
              count++
            }
          }
          document.querySelector('.COLLECTIONS').style.height = (45 + count * 60) + 'px'
        } else if (route.name === 'PROJECTS') {
          if (children.fold) {
            document.querySelector('.PROJECTS').style.height = 20 + 'px'
          } else {
            document.querySelector('.PROJECTS').style.height = 60 + 'px'
          }
        }
      },
      makeBarBlack(flag) {
        this.black = flag
      }
    }
  }
</script>


<style scoped lang='scss' ref='stylesheet/scss'>
  .aside {
    font-size: 0;
    position: relative;
    z-index: 10000;
    .btn-wrapper {
      position: fixed;
      top: 28px;
      left: 30px;
      width: 31px;
      height: 20px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      z-index: 2;
      span {
        display: inline-block;
        width: 100%;
        height: 4px;
        transition: all .2s linear;
        background-color: #fff;

      }
      &.black {
        span {
          background-color: #000;
        }
      }
      &.active {
        span {
          background-color: #858585;
        }
      }
    }

    aside {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      width: 205px;
      background-color: rgba(0, 0, 0, .3);
      overflow: hidden;
      transition: transform .3s linear;
      transform: translateX(0);
      &.fade-enter {
        transform: translateX(-100%);
      }
      &.fade-leave-active {
        transform: translateX(-100%);
      }
      .aside-container {
        .title {
          width: 59px;
          height: 73px;
          position: relative;
          margin-left: 40px;
          padding-top: 51px;
          padding-bottom: 82px;
        }
        .router-container {
          .router-item {
            position: relative;
            text-align: left;
            padding-left: 40px;
            font-size: 17px;
            color: #fff;
            font-family: 'Avain-Bold';
            font-weight: bold;
            padding-bottom: 15px;
            .first-route-children-wrapper {
              height: 0;
              font-size: 12px;
              overflow: hidden;
              transition: height .2s ease-in-out;
              letter-spacing: 1px;
              .first-route-children {
                margin-top: 10px;
              }
              .second-route-children-wrapper {
                height: 0;
                overflow: hidden;
                transition: height .2s ease-in-out;
                .second-route-children {
                  font-size: 12px;
                  color: #fff;
                  text-align: left;
                  margin-top: 8px;
                  padding-left: 8px;
                }
                &.second-item-active {
                  height: 60px;
                }
              }

            }
            &.router-item-active {
              .first-route-children-wrapper {
                &.CAMPAIGNS {
                  height: 45px;
                }
                &.PROJECTS {
                  height: 22px;
                }
                &.COLLECTIONS {
                  height: 45px;
                }
              }
            }
            &:last-child {
              padding-bottom: 100px;
            }
          }
        }
      }
      .link-active {
        color: rgb(231, 189, 52);
      }
    }

  }

</style>
