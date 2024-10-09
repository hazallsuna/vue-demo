import { createRouter, createWebHistory } from "vue-router";
import LayoutPage from '@/components/LayoutPage.vue'
import TodoPage from '@/components/TodoPage.vue'
import PostPage from '@/components/PostPage.vue'
import AlbumPage from '@/components/AlbumPage.vue'

const routes = [{

     path: '/',
     component: LayoutPage 
    },
    {
    path: '/user/:userId/todos',
    component: TodoPage
    },
    {
    path: '/user/:userId/posts',
    component: PostPage
    },
    {
    path:'/user/:userId/albums',
    component: AlbumPage
    }
    
    
   ];

const router = Router();
export default router;
function Router(){
    const router = new createRouter(
        {
            history:createWebHistory(),
            routes,
        });
    return router;
}