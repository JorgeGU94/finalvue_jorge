import { createRouter, createWebHashHistory } from 'vue-router'

import Inicio from '../views/InicioVista.vue';
import Clasificacion from '../views/ClasificacionVista.vue';
import Jornadas from '../views/JornadasVista.vue';
import NuevoPartido from '../views/NuevoPartidoVista.vue'; 
import Equipos from '../views/EquiposVista.vue';
import Jugadores from '../views/JugadoresVista.vue';
import NuevoJugador from '../views/NuevoJugadorVista.vue';
import EliminarJugador from '../views/EliminarJugadorVista.vue';

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
    path: '/nuevoPartido',
    name: 'NuevoPartido',
    component: NuevoPartido
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
  },
  {
    path: '/nuevoJugador',
    name: 'NuevoJugador',
    component: NuevoJugador
  },
  {
    path: '/eliminarJugador',
    name: 'EliminarJugador',
    component: EliminarJugador
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router