import Vue from 'vue'
import App from './App'
import router from './router'
import { Header } from 'mint-ui'
import './lib/mui/css/mui.css'
Vue.component(Header.name, Header);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
