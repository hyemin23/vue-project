import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../components/NewsView';


const AskView = () => import("../components/AskView");

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect : '/news'
        },
        {
            //path : url 주소
            path: '/news',
            // component : url 주소로 갔을 때 표시될 컴포넌트
            component:NewsView,
        },
        {
            path: '/AskView',
            component: AskView,
        },
    ]
});

