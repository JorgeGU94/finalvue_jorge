import { createRouter, createWebHashHistory } from 'vue-router'

import Inicio from '../views/InicioVista.vue';
import Clasificacion from '../views/ClasificacionVista.vue';
import Jornadas from '../views/JornadasVista.vue';
import Equipos from '../views/EquiposVista.vue';
import Jugadores from '../views/JugadoresVista.vue';


const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/clasificacion',
    name: 'Clasificacion',
    component: Clasificacion
  },
  {
    path: '/jornadas',
    name: 'Jornadas',
    component: Jornadas
  },
  {
    path: '/equipos',
    name: 'Equipos',
    component: Equipos
  },
  {
    path: '/jugadores',
    name: 'Jugadores',
    component: Jugadores
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router