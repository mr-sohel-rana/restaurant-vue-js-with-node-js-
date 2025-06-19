import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import ShowData from './components/ShowData.vue'
import { createRouter,createWebHistory } from 'vue-router'

const routes=[
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'ShowData',
        component:ShowData,
        path:'/showdata'
    },
]
const router=createRouter({history:createWebHistory(),routes});
export default router;
