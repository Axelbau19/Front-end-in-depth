//Creacion del router
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  //Aqui van las rutas
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: import('../views/AboutView.vue')},
    { path: '/chats', component: import('../views/ChatView.vue')},
    { path: '/chats/:chatId', component: import('../views/ChatView.vue')},
  ]
})

export default router