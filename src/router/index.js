import Vue from 'vue'
import VueRouter from 'vue-router'
import JieLongInfoView from "@/views/JieLongInfoView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/JieLongInfoView/:groupId',
        name: 'jieLongInfoView',
        meta: {
            title: '接龙详细'
        },
        component: JieLongInfoView
    }
]

const router = new VueRouter({
    routes
})

// router.beforeEach((to, from, next) => {
//     console.log(to.meta,'ceasdasda')
//   // document.title = to.meta.title
//   next()
// })
export default router
