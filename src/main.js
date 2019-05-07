import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import ReportList from './components/ReportList.vue'
import ReportWorkbench from './components/ReportWorkbench.vue'
import DepositionList from './components/DepositionList.vue'

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ReportWorkbench)
Vue.use(ReportList)
Vue.use(DepositionList)

Vue.config.productionTip = false

const routes = [
                { path: '/ReportList', component: ReportList, name: "ReportList" },
                { path: '/ReportWorkbench', component: ReportWorkbench, name: "ReportWorkbench" , props: true },
                { path: '/DepositionList', component: DepositionList, name: "DepositionList"  }
               ]

const router = new VueRouter({
 routes // （缩写）相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
