import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import store from '@/store';
import uma from 'umtrack-wx';
// uma.init({
//     appKey: '61c4d630e0f9bb492ba92067',
//     useOpenid: true,
//     autoGetOpenid: true,
//     debug: false
// });
let vuexStore = require("@/store/$u.mixin.js");
(function(w, d, s, q, i) {
    w[q] = w[q] || [];
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s);
    j.async = true;
    j.id = 'beacon-aplus';
    j.src = 'https://d.alicdn.com/alilog/mlog/aplus/' + i + '.js';
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'aplus_queue', '203467608');
//集成应用的appKey
aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['appKey', '61c53d06e014255fcbc7c7fd']
});
aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['aplus-waiting', 'MAN']
});
//是否开启调试模式 
aplus_queue.push({
    action: 'aplus.setMetaInfo',
    arguments: ['DEBUG', false]
});
Vue.mixin(vuexStore);
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()