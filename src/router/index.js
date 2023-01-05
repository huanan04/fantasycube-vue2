import Vue from 'vue'
import VueRouter from 'vue-router'
import JieLongInfoView from "@/views/gushijielong/JieLongInfoView.vue";
import JieLongHistoryView from "@/views/gushijielong/JieLongHistoryView.vue";
import JieLongHomeView from "@/views/gushijielong/JieLongHomeView.vue";
Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'JieLongHomeView',
        meta: {
            title:'接龙首页'
        },
        component: JieLongHomeView
    },
    {
        path: '/JieLongInfo/:groupId',
        name: 'jieLongInfoView',
        meta: {
            title: '接龙详细'
        },
        component: JieLongInfoView
    },
    {
        path: '/JieLongHistory',
        name: 'jieLongHistory',
        meta: {
            title: '历史接龙'
        },
        component: JieLongHistoryView
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title||'故事接龙'
    next()
})
export default router
