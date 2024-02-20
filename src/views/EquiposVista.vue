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
    height: 100vh;
    overflow: scroll;
}
</style>
