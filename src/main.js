import Vue from 'vue'
import App from './App'
import router from './router'
import { Header, Swipe, SwipeItem} from 'mint-ui'
import VueResource from 'vue-resource'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './css/common.css'
Vue.use(VueResource);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
