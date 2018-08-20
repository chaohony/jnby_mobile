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
import AW2018 from '../page/collection/AW2018.vue'
import SS2018 from '../page/collection/SS2018.vue'
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
              name: '-18FW'
            },
            {
              path: '/campaign/18ss',
              component: IsThatYou,
              name: '-18SS'

            }
          ]
        },
        {
          path: '/collection',
          component: Collection,
          name: 'COLLECTIONS',
          leaf: true,
          children: [
            {
              path: '/collection/18fw',
              component: AW2018,
              name: '-18FW',
              leaf: true,
              children: [
                {
                  path: '/collection/18fw/looks',
                  component: Looks,
                  name: 'Looks'
                },
                {
                  path: '/collection/18fw/shows',
                  component: Shows,
                  name: 'Shows'
                },
                {
                  path: '/collection/18fw/video',
                  component: Video,
                  name: 'Video'
                }
              ]
            },
            {
              path: '/collection/18ss',
              component: SS2018,
              name: '-18SS',
              leaf: true,
              children: [
                {
                  path: '/collection/18ss/looks',
                  component: Looks,
                  name: 'Looks'
                },
                {
                  path: '/collection/18ss/shows',
                  component: Shows,
                  name: 'Shows'
                },
                {
                  path: '/collection/18ss/video',
                  component: Video,
                  name: 'Video'
                }
              ]
            }
          ]
        },
        {
          path: '/projects',
          component: Projects,
          name: 'PROJECTS',
          leaf: true,
          children: [
            {
              path: '/projects/18ss',
              component: ParentChildClub,
              name: '-18SS',
              children: [
                {
                  path: '/projects/18ss/kids-show',
                  component: Looks,
                  name: 'KIDS SHOW \n 移动照相馆'
                }
              ]
            }
          ]
        },
        {
          path: '/about',
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
