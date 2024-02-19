<template>
    <div class="contenedor">
        <h1>Equipos Liga</h1>
        <div v-for="equipo in clubs" :key="equipo">
            <h3>{{ equipo.name }}</h3>
            <ul v-for="jugador in players" :key="jugador">
                <li v-if="equipo.name == jugador.team">{{ jugador.name }}</li>
            </ul>
            <input type="button" value="Nuevo Jugador">
        </div>
    </div>
</template>

<script>
export default {
    name: "equiposVista",
    data() {
        return {
            clubs: {},
            players: {}
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
