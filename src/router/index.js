import Vue from 'vue'
import VueRouter from 'vue-router'
import JieLongInfoView from "@/views/JieLongInfoView.vue";
import JieLongHistoryView from "@/components/JieLongHistoryView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/JieLongInfoView/:groupId',
        name: 'jieLongInfoView',
        meta: {
            title: '接龙详细',
            isLogin: true,
            requiresAuth: true
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
