import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import homeComponent from '../pages/home'
import memberComponent from '../pages/member'
import shopcarComponent from '../pages/shopcar'
import searchComponent from '../pages/search'
import newsListComponent from '../pages/newsList'
import newsInfoComponent from '../pages/newsInfo'
import imagesListComponent from '../pages/imagesList'
export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: homeComponent},
    {path: '/member', component: memberComponent},
    {path: '/shopcar', component: shopcarComponent},
    {path: '/search', component: searchComponent},
    {path: '/home/newsList', component: newsListComponent},
    {path: '/home/newsInfo/:id', component: newsInfoComponent},
    {path: '/home/imagesList', component: imagesListComponent}
  ],
  linkActiveClass: 'mui-active'
})
