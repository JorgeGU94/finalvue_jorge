<template>
    <div class="contenedor">
        <h1>Equipos Liga</h1>
        <div v-for="equipo in clubs" :key="equipo.name">
            <h3>{{ equipo.name }}</h3>
            <ul v-for="jugador in players" :key="jugador">
                <li v-if="equipo.name == jugador.team">{{ jugador.name }}</li>
            </ul>
            <input type="button" value="Nuevo Jugador" @click="mostrarFormulario(equipo.name)">
        </div>
    </div>
    <div :hidden="oculto">
        <NuevoJugadorCompVue :equipoP="equipoParam"></NuevoJugadorCompVue>
    </div>
</template>

<script>
import NuevoJugadorCompVue from '@/components/NuevoJugadorComp.vue';

export default {
    name: "equiposVista",
    components: {NuevoJugadorCompVue},
    data() {
        return {
            clubs: {},
            players: {},
            oculto: true,
            equipoParam: ""
        }
    },
    methods: {
        recogerEquipos() {
            fetch("http://localhost:3000/clubs")
            .then(response => response.json())
            .then(json => this.clubs = json)
        },
        recogerJugadores() {
            fetch("http://localhost:3000/players")
            .then(response => response.json())
            .then(json => this.players = json)
        },
        mostrarFormulario(param) {
            this.oculto = false;
            this.equipoParam = param;
            console.log(this.equipoParam);
        }

    },
    created() {
        this.recogerEquipos();
        this.recogerJugadores();
    }
}
</script>

<style>
.contenedor {
  overflow: scroll;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1, h3 {
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}

input[type="button"] {
  padding: 5px 10px;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="button"]:hover {
  background-color: #6573c3;
}
</style>
