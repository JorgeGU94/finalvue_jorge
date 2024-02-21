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
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.pagina {
  height: 100vh;
  display: flex;
}

.menu {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #3f51b5;
  color: #fff;
}

.objMenu, .objSubmenu {
  padding: 10px;
  color: #fff;
  text-decoration: none; 
  transition: background-color 0.3s; 
}

.objMenu:hover,
.objSubmenu:hover {
  background-color: #6573c3;
}

.objSubmenu {
  padding-left: 20px;
}

.router-view {
  flex: 1;
  padding: 20px; 
  background-color: #f0f0f0; 
}

.formulario {
  max-width: 400px; 
  margin: 0 auto; 
  background-color: #fff; 
  padding: 20px; 
  border-radius: 5px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
}

input[type="text"], input[type="number"], select {
  width: 100%; 
  margin-bottom: 10px;
  padding: 10px; 
  border: 1px solid #ccc;
  border-radius: 4px; 
  box-sizing: border-box; 
}

input[type="submit"] {
  width: 100%; 
  background-color: #3f51b5; 
  color: #fff; 
  padding: 10px; 
  border: none; 
  border-radius: 4px; 
  cursor: pointer; 
  transition: background-color 0.3s;
}

input[type="submit"]:hover {
  background-color: #6573c3; 
}

</style>