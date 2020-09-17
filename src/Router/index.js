import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import AboutPage from "@/components/AboutPage";
import MainPage from "@/components/MainPage";
import MomentsPage from "@/components/MomentsPage";
import VideoPage from "@/components/VideoPage";


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: home,
            children: [
                {path: '/', component: MainPage, name: 'home', meta: {title: '首页'}},
                {path: '/about', component: AboutPage, name: 'home', meta: {title: '关于'}},
                {path: '/moments', component: MomentsPage, name: 'MomentsPage', meta: {title: '朋友圈'}},
                {path: '/video', component: VideoPage, name: 'VideoPage', meta: {title: '小视频'}}
            ]
        }
    ]
})
