<template>
    <div class="aside">
        <div class="btn-wrapper" @click="toggleAside" :class="{active: visible, inactive: !visible && flag}">
            <span ref="span" class="span-1"></span>
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
                                <div class="first-route-children" v-for="(children, i) in route.children" :key="i" @click="expandSecondRoute(children, route)">
                                    <router-link :to="children.path" v-if="!children.leaf">{{ children.name }}</router-link>
                                    <div v-else>{{ children.name }}</div>
                                    <div class="second-route-children-wrapper" v-if="children.children" :class="{'second-item-active': !children.fold}">
                                        <div class="second-route-children" v-for="(grandChildren, x) in children.children" :key="x" @click.stop>
                                            <router-link :to="grandChildren.path">{{ grandChildren.name }}</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="router-item-right" v-if="route.leaf">
                                <img src="../assets/image/arrow.png" :class="{fold: !route.fold}">
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
        data() {
            return {
                routerList: [],
                flag: false
            }
        },
        mounted() {
            let list = this.$router.options.routes[0].children.filter(i => !i.hidden)
            list.forEach(i => {
                if(i.leaf) {
                    i.fold = true
                    if(i.children) {
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
                    if(!this.visible) {
                        this.flag = true
                    }
                })
            },
            initScroll() {
                if(!this.scroll) {
                    this.scroll = new BScroll(this.$refs.aside, {
                        click: true,
                        probeType: 3
                    })
                } else {
                    this.scroll.refresh()
                }
            },
            expandFirstRoute(route) {
                if(!route.leaf) return
                route.fold = !route.fold

                if(route.name === 'COLLECTION') {
                    if(route.fold) {
                        this.height = document.querySelector('.COLLECTION').style.height
                        document.querySelector('.COLLECTION').style.height = '0px'
                    } else {
                        document.querySelector('.COLLECTION').style.height = this.height
                    }
                }
            },
            expandSecondRoute(children, route) {
                children.fold = !children.fold
                if(route.name === 'COLLECTION') {
                    let count = 0
                    for(let i = 0 ; i < route.children.length; i++) {
                        if(!route.children[i].fold) {
                            count++
                        }
                    }
                    document.querySelector('.COLLECTION').style.height = (90 + count * 70) + 'px'
                }
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
                background-color: #fff;
            }
            &.active {
                span {
                    &:first-child {
                        animation: run1 .5s linear;
                        animation-fill-mode: forwards;
                    }
                    &:nth-child(2) {
                        animation: run2 .5s linear;
                        animation-fill-mode: forwards;
                    }
                    &:last-child {
                        animation: run3 .5s linear;
                        animation-fill-mode: forwards;
                    }
                }
            }
            &.inactive {
                span {
                    &:first-child {
                        animation: run11 .5s linear;
                        animation-fill-mode: forwards;
                    }
                    &:nth-child(2) {
                        animation: run22 .5s linear;
                        animation-fill-mode: forwards;
                    }
                    &:last-child {
                        animation: run33 .5s linear;
                        animation-fill-mode: forwards;
                    }
                }
            }
        }
        aside {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            width: 300px;
            background-color: rgba(0, 0, 0, .6);
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
                    width: 97px;
                    height: 33px;
                    position: relative;
                    left: 50%;
                    margin-left: -48px;
                    padding-top: 60px;
                    padding-bottom: 54px;
                }
                .router-container {
                    .router-item {
                        position: relative;
                        text-align: center;
                        font-size: 14px;
                        color: #fff;
                        font-family: AkzidenzGrotesk-BoldExtended;
                        margin-bottom: 32px;
                        .router-item-right {
                            position: absolute;
                            right: 17px;
                            top: -1px;
                            width: 16px;
                            height: 9px;
                            img {
                                width: 100%;
                                height: 100%;
                                transition: transform .3s linear;
                                transform-origin: 50% 50%;
                                &.fold {
                                    transform: rotate(180deg);
                                }
                            }
                        }
                        .first-route-children-wrapper {
                            height: 0;
                            font-size: 12px;
                            overflow: hidden;
                            transition: height .5s ease-in-out;
                            margin-top: 12px;
                            background-color: rgba(255,255,255,.14);
                            .second-route-children-wrapper {
                                height: 0;
                                overflow: hidden;
                                transition: height .5s ease-in-out;
                                .second-route-children {
                                    font-family: DINPro-Regular;
                                    font-size: 12px;
                                    color: #fff;
                                    text-align: center;
                                    margin: 10px 0;
                                    &:first-child {
                                        margin-top: 8px;
                                    }
                                    &:last-child {
                                        margin-bottom: 8px;
                                    }
                                }
                                &.second-item-active {
                                    height: 70px;
                                }
                            }
                            .first-route-children {
                                font-family: DIN-Bold;
                                &:first-child {
                                    margin-top: 10px
                                }
                                &:last-child {
                                    margin-bottom: 10px;
                                }
                                margin: 17px 0;
                            }
                        }
                        &.router-item-active {
                            .first-route-children-wrapper {
                                &.CAMPAIGN {
                                    height: 90px;
                                }
                                &.PROJECTS {
                                    height: 90px;
                                }
                                &.COLLECTION {
                                    height: 90px;
                                }
                            }
                        }
                        &:last-child {
                            padding-bottom: 100px;
                        }
                    }
                }
            }
        }

    }


    @keyframes run1 {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(11px);
        }
        100% {
            transform: translateY(11px) rotate(45deg);
        }
    }
    @keyframes run2 {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        51% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes run3 {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-11px);
        }
        100% {
            transform: translateY(-11px) rotate(-45deg);
        }
    }

    @keyframes run11 {
        0% {
            transform: translateY(11px);
        }
        50% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(0) rotate(0);
        }
    }
    @keyframes run22 {
        0% {
            opacity: 0;
        }
        1% {
            opacity: 1;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes run33 {
        0% {
            transform: translateY(-11px);
        }
        50% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(0) rotate(0);
        }
    }

</style>
