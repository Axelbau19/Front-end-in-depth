//Creacion del router
//Agregamos el metodo hash
import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(),
  //Aqui van las rutas
  routes: [
    //Reedirecionar al home
    //{path: '/home', redirect:'/'},
    //utilizamos name para nombrar la rutas
    { 
      path: '/', 
      name:'home', 
      component: HomeView, 
      alias:'/home',
      meta:{
        requiresAuth: false
      }  },
    //Utilizo aqui las rutas anidadas para poder darle una ruta 1 ruta 2 rutas 
    {
      path: '/session',  
      component: () => import('../views/SessionView.vue'),
      children:[{
        path: '',
        components: {
          default: () => import('../views/LoginView.vue'),
          register: () => import('../views/RegisterView.vue')
        }
      }]
    },
    { path: '/about', name:'about', component: () => import('../views/AboutView.vue')},
    { 
      path: '/chats', 
      // creamos asincronismo
      component: () =>  import('../views/ChatView.vue'),
      //Creando una ruta anidada
      children:[
        { 
          path: ':chatId',
           component: ()=>  import('../views/ChiatView.vue'),
           //Toma los params y props 
          props: (route) => {
            return{
              chatId: route.params.chatId
            }
          }
        }],
      meta: {
        requiresAuth:true,
        roles : ['Admin']
      }
    }
  ]
})
//Guardas de navegacion

router.beforeEach((to,from) =>{
  console.log(to,from)
  /*if(to.meta?.requiresAuth && to.meta?.roles.includes('admin') ){
    console.log(to.path, 'Necesita autorizacion')
    //Hasta que de permiso 
    return '/session'
  }
  //Cuando estemos en este path , nos va redirigir a about
  //Da permisos en roles
  if(to.path === '/') return { name: 'about'}*/
  return true
})

export default router