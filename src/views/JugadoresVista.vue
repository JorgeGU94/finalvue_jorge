<template>
    <div>
        <div>
            <h2>Equipos</h2>
            <ul>
                <li v-for="equipo in clubs" :key="equipo" @click="mostrarJugadores(equipo.name)">{{ equipo.name }}</li>
            </ul>
        </div>
        <div v-if="jugadoresEquipo.length >= 0">
            <h3>Jugadores</h3>
            <ul>
                <li v-for="jugador in jugadoresEquipo" :key="jugador" @click="mostrarDatosJugadores(jugador.id)">{{ jugador.name }}</li>
            </ul>
        </div>
        <div v-if="datosJugadores.length > 0">
            <h5>Datos Jugador</h5>
            <ul v-for="dato in datosJugadores" :key="dato">
                <li>{{ dato.team }}</li>
                <li>{{ dato.scores }}</li>
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
            jugadoresEquipo: {},
            datosJugadores: [],
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
        mostrarJugadores(param) {
            fetch("http://localhost:3000/players?team=" + param)
            .then(response => response.json())
            .then(json => this.jugadoresEquipo = json)
        },
        mostrarDatosJugadores(param) {
            fetch("http://localhost:3000/players?id=" + param)
            .then(response => response.json())
            .then(json => this.datosJugadores = json)
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