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
import goodsListComponent from '../pages/goodsList'
import goodsInfoComponent from '../pages/goodsInfo'
export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: homeComponent},
    {path: '/member', component: memberComponent},
    {path: '/shopcar', component: shopcarComponent},
    {path: '/search', component: searchComponent},
    {path: '/home/newsList', component: newsListComponent},
    {path: '/home/newsInfo/:id', component: newsInfoComponent},
    {path: '/home/imagesList', component: imagesListComponent},
    {path: '/home/goodsList', component: goodsListComponent},
    {path: '/home/goodsInfo/:id', component: goodsInfoComponent,name:'goodsList' },
  ],
  linkActiveClass: 'mui-active'
})
