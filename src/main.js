import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import store from '@/store';
import uma from 'umtrack-wx';
uma.init({
    appKey: '61c4d630e0f9bb492ba92067',
    useOpenid: true,
    autoGetOpenid: true,
    debug: false
});
let vuexStore = require("@/store/$u.mixin.js");

Vue.mixin(vuexStore);
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()