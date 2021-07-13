import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../components/NewsView';
import NewsDataView from '../../views/NewsView';


const AskView = () => import("../components/AskView");
const UserView = () => import("../components/UserView");

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
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
            path: '/ask',
            component: AskView,
        },
        {
            path: '/user',
            component: UserView,
        },
        {
            path: '/newsDataView'
            ,component : NewsDataView,
        }
    ]
});


