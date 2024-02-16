<template>
    <div class="pagina">
        <div class="menu">
            <router-link to="/" class="objMenu">Inicio</router-link>
            <router-link to="/clasificacion" class="objMenu">Clasificación</router-link>
            <router-link to="/jornadas" class="objMenu">Jornadas</router-link>
            <router-link to="/nuevaJornada" class="objSubmenu">Nuevo Partido</router-link>
            <router-link to="/equipos" class="objMenu">Equipos</router-link>
            <router-link to="/nuevoJugador" class="objSubmenu">Nuevo Jugador</router-link>
            <router-link to="/borrarJugador" class="objSubmenu">Eliminar Jugador</router-link>
        </div>
        <div class="cuerpo">
    
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
}
.pagina {
  height: 100vh;
  display: flex;
}

.menu {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    background-color: aquamarine;
}

.objMenu {
    padding: 10px;
}

.objSubmenu {
    padding: 5px;
    padding-left: 20px;
}

.cuerpo {
    flex: 1;
    background-color: azure;
}

</style>