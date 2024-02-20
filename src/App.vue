<template>
    <div class="pagina">
        <div class="menu">
            <router-link to="/" class="objMenu">Inicio</router-link>
            <router-link to="/clasificacion" class="objMenu">Clasificación</router-link>
            <router-link to="/jornadas" class="objMenu">Jornadas</router-link>
            <router-link to="/nuevoPartido" class="objSubmenu">Nuevo Partido</router-link>
            <router-link to="/equipos" class="objMenu">Equipos</router-link>
            <router-link to="/jugadores" class="objMenu">Jugadores</router-link>
            <router-link to="/nuevoJugador" class="objSubmenu">Nuevo Jugador</router-link>
            <router-link to="/eliminarJugador" class="objSubmenu">Eliminar Jugador</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
};
</script>
  
<style>
/* Estilos CSS mejorados */
body {
  margin: 0;
  font-family: Arial, sans-serif; /* Utiliza una fuente común para mejorar la legibilidad */
}

.pagina {
  height: 100vh;
  display: flex;
}

.menu {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #3f51b5; /* Cambia el color de fondo del menú */
  color: #fff; /* Cambia el color del texto del menú a blanco */
}

.objMenu,
.objSubmenu {
  padding: 10px;
  color: #fff; /* Cambia el color del texto de los enlaces */
  text-decoration: none; /* Quita el subrayado de los enlaces */
  transition: background-color 0.3s; /* Añade una transición suave al cambio de color de fondo */
}

.objMenu:hover,
.objSubmenu:hover {
  background-color: #6573c3; /* Cambia el color de fondo al pasar el cursor sobre los enlaces */
}

.objSubmenu {
  padding-left: 20px; /* Añade un espacio adicional para los submenús */
}

</style>