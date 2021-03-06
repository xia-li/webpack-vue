import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import VueResource from 'vue-resource'

Vue.use(VueResource);
//设置根域名
Vue.http.options.root = 'http://www.lovegf.cn:8899/';
//设置post提交时的表单提交格式
Vue.http.options.emulateJSON = true;
//设置全局过滤器
Vue.filter('dateForm', (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(dateStr).format(pattern)
});
//懒加载组件
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  error:'/static/images/2.jpg',
  loading: '/static/images/1.jpg',
  listenEvents:['scroll']
});
//导入css样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './css/common.css'
//按需导入mint-ui组件
import {
  Header,
  Swipe,
  SwipeItem,
  Button
} from 'mint-ui'

Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
