import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index.vue'
import Campaign from '../page/campaign.vue'
import Collections from '../page/collections.vue'
import Projects from '../page/projects.vue'
import About from '../page/about.vue'
import Contact from '../page/contact.vue'
import Campaigns18FW from '../page/campaigns/campaigns-18fw.vue'
import CAMPAIGNS18SS from '../page/campaigns/campaigns-18ss.vue'
import Projects18SS from '../page/projects/projects-18ss.vue'
import Collections18FW from '../page/collections/collections-18fw.vue'
import Collections18SS from '../page/collections/collections-18ss.vue'
import KidsShow from '../page/projects/kids-show.vue'
import Looks from '../page/collections/looks.vue'
import Shows from '../page/collections/shows.vue'
import Video from '../page/collections/videos.vue'

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
          name: 'CAMPAIGNS',
          leaf: true,
          children: [
            {
              path: '/campaign/18fw',
              component: Campaigns18FW,
              name: '-18FW'
            },
            {
              path: '/campaign/18ss',
              component: CAMPAIGNS18SS,
              name: '-18SS'

            }
          ]
        },
        {
          path: '/collections',
          component: Collections,
          name: 'COLLECTIONS',
          leaf: true,
          children: [
            {
              path: '/collections/18fw',
              component: Collections18FW,
              name: '-18FW',
              leaf: true,
              children: [
                {
                  path: '/collections/18fw/looks',
                  component: Looks,
                  name: 'LOOKS'
                },
                {
                  path: '/collections/18fw/shows',
                  component: Shows,
                  name: 'SHOW'
                },
                {
                  path: '/collections/18fw/video',
                  component: Video,
                  name: 'VIDEO'
                }
              ]
            },
            {
              path: '/collections/18ss',
              component: Collections18SS,
              name: '-18SS',
              leaf: true,
              children: [
                {
                  path: '/collections/18ss/looks',
                  component: Looks,
                  name: 'LOOKS'
                },
                {
                  path: '/collections/18ss/shows',
                  component: Shows,
                  name: 'SHOW'
                },
                {
                  path: '/collections/18ss/video',
                  component: Video,
                  name: 'VIDEO'
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
              component: Projects18SS,
              name: '-18SS',
              leaf: true,
              children: [
                {
                  path: '/projects/18ss/kids-show',
                  component: KidsShow,
                  name: 'KIDS SHOW <div style="height: 5px;"></div> 移动照相馆'
                }
              ]
            }
          ]
        },
        {
          path: '/about',
          component: About,
          name: 'ABOUT'
        },
        {
          path: '/contact',
          component: Contact,
          name: 'CONTACT'
        }
      ]
    },
  ],
  linkActiveClass: 'link-active'
})
