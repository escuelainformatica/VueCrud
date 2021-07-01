import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto'
import ProfesoresTabla from "@/views/profesores/ProfesoresTabla";
import ProfesorInsertar from "@/views/profesores/ProfesorInsertar";
import ProfesorActualizar from "@/views/profesores/ProfesorActualizar";
import ProfesorEliminar from "@/views/profesores/ProfesorEliminar";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Pagina/Contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/profesor/listado',
    name: 'profesor_listado',
    component: ProfesoresTabla
  },
  {
    path: '/profesor/insertar',
    name: 'profesor_insertar',
    component: ProfesorInsertar
  },
  {
    path: '/profesor/actualizar',
    name: 'profesor_actualizar',
    component: ProfesorActualizar
  },
  {
    path: '/profesor/eliminar',
    name: 'profesor_eliminar',
    component: ProfesorEliminar
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
