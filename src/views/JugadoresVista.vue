<template>
    <div>
        <div>
            <h2>Equipos</h2>
            <ul>
                <li v-for="equipo in clubs" :key="equipo" @click="mostrarJugadores(equipo.name)">{{ equipo.name }}</li>
            </ul>
        </div>
        <div>
            <ul>
                <li v-for="jugador in jugadoresEquipo" :key="jugador">{{ jugador.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "jugadoresVista",
    data() {
        return {
            clubs: {},
            players: {},
            jugadoresEquipo: {}
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
        mostrarJugadores() {
            // if () {

            // }
        }

    },
    created() {
        this.recogerEquipos();
        this.recogerJugadores();
    }
}
</script>

<style>

</style>