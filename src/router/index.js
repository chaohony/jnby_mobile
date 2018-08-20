import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index.vue'
import Campaign from '../page/campaign.vue'
import Collection from '../page/collection.vue'
import Projects from '../page/projects.vue'
import BrandStory from '../page/brand-story.vue'
import Contact from '../page/contact.vue'
import CAMPAIGN18FW from '../page/campaign/campaign-18fw.vue'
import IsThatYou from '../page/campaign/isThatYou.vue'
import ParentChildClub from '../page/projects/parent-child-club.vue'
import Different from '../page/projects/different.vue'
import IsThatYou2 from '../page/projects/is-that-you.vue'
import AW2018 from '../page/collection/AW2018.vue'
import SS2018 from '../page/collection/SS2018.vue'
import AW2017 from '../page/collection/AW2017.vue'
import Looks from '../page/collection/looks.vue'
import Shows from '../page/collection/shows.vue'
import Video from '../page/collection/videos.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Index,
            hidden: true,
            name: 'index',
            redirect: '/campaign/18fw',
            children: [
                {
                    path: '/campaign',
                    component: Campaign,
                    name: 'CAMPAIGN',
                    leaf: true,
                    children: [
                        {
                            path: '/campaign/18fw',
                            component: CAMPAIGN18FW,
                            name: '18fw'
                        },
                        {
                            path: '/campaign/is-that-you',
                            component: IsThatYou,
                            name: 'IS THAT YOU'

                        }
                    ]
                },
                {
                    path: '/collection',
                    component: Collection,
                    name: 'COLLECTION',
                    leaf: true,
                    children: [
                        {
                            path: '/collection/2018AW',
                            component: AW2018,
                            name: '2018AW',
                            leaf: true,
                            children: [
                                {
                                    path: '/collection/2018AW/looks',
                                    component: Looks,
                                    name: 'Looks'
                                },
                                {
                                    path: '/collection/2018AW/shows',
                                    component: Shows,
                                    name: 'Shows'
                                },
                                {
                                    path: '/collection/2018AW/video',
                                    component: Video,
                                    name: 'Video'
                                }
                            ]
                        },
                        {
                            path: '/collection/2018SS',
                            component: SS2018,
                            name: '2018SS',
                            leaf: true,
                            children: [
                                {
                                    path: '/collection/2018SS/looks',
                                    component: Looks,
                                    name: 'Looks'
                                },
                                {
                                    path: '/collection/2018SS/shows',
                                    component: Shows,
                                    name: 'Shows'
                                },
                                {
                                    path: '/collection/2018SS/video',
                                    component: Video,
                                    name: 'Video'
                                }
                            ]
                        },
                        {
                            path: '/collection/2017AW',
                            component: AW2017,
                            name: '2017AW',
                            leaf: true,
                            children: [
                                {
                                    path: '/collection/2017AW/looks',
                                    component: Looks,
                                    name: 'Looks'
                                },
                                {
                                    path: '/collection/2017AW/shows',
                                    component: Shows,
                                    name: 'Shows'
                                },
                                {
                                    path: '/collection/2017AW/video',
                                    component: Video,
                                    name: 'Video'
                                }
                            ]
                        },
                    ]
                },
                {
                    path: '/projects',
                    component: Projects,
                    name: 'PROJECTS',
                    leaf: true,
                    children: [
                        {
                            path: '/projects/parent-child-club',
                            component: ParentChildClub,
                            name: 'PARENT - CHILD CLUB'
                        },
                        {
                            path: '/projects/different-but-funny',
                            component: Different,
                            name: 'IT\'S DIFFERENT BUT FUNNY'
                        },
                        {
                            path: '/projects/is-that-you',
                            component: IsThatYou2,
                            name: 'IS THAT YOU'
                        }
                    ]
                },
                {
                    path: '/brand-story',
                    component: BrandStory,
                    name: 'ABOUT'
                },
                {
                    path: '/contact',
                    component: Contact,
                    name: 'CONTACT'
                }
            ]
        },
    ]
})
