<template>
    <div>
        <h1>Clasificación Liga</h1>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Puntos</th>
            </tr>
            <tr v-for="equipo in clubs" :key="equipo.id">
                <td @click="mostrarJugadores(equipo.name)">{{ equipo.name }}</td>
                <td>{{ equipo.points }}</td>
            </tr>
        </table>
        <div v-if="players.length > 0" class="jugadores">
            <h3>Jugadores</h3>
            <p v-for="jugador in players" :key="jugador.id">{{ jugador.name }} - {{ jugador.scores }} goles</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "clasificacionVista",
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
            .then(json => {
                this.clubs = json;
                this.clubs.sort((a, b) => b.points - a.points);
            })
        },
        mostrarJugadores(param) {
            fetch("http://localhost:3000/players?team=" + param )
            .then(response => response.json())
            .then(json => this.players = json)
        }
    },
    created() {
        this.recogerEquipos();
    }

}
</script>

<style>

</style>