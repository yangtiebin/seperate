import Vue from 'vue'

import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './Router'
import VueWechatTitle from 'vue-wechat-title'

Vue.config.productionTip = false
Vue.use(VueWechatTitle)

Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
