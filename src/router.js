import { createRouter, createWebHistory } from "vue-router";
import AppMain from './components/Appmain.vue'
import ProjectDetail from './components/ProjectDetail.vue'
const router = createRouter({
    history:createWebHistory(),
    linkExactActiveClass:'active',
    routes:[
        {
            path:'/',
            name:'home',
            component:AppMain
        },
        {
            path:'/dettaglio-progetto/:slug',
            name:'project-detail',
            component:ProjectDetail
        },
        // {
        //     path:'/tipi',
        //     name:'types',
        //     component:Types
        // },
        // {
        //     path:'/tecnologie',
        //     name:'technologies',
        //     component:Technologies
        // },
        // {
        //     path:'/:pathMatch(.*)*',
        //     component:Error404
        // },


    ]
})

export {router}
