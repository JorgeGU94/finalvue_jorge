<template>
    <div>
        <div>
            <h2>Jugadores</h2>
            <h3>Seleccione el equipo</h3>
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
            <div v-for="dato in datosJugadores" :key="dato">
                <p>Equipo: {{ dato.team }}</p>
                <p>Goles: {{ dato.scores }}</p>
                <input type="number" name="goles" v-model="goles">
                <input type="button" value="Añadir Goles" @click="sumarGoles(dato.id, dato.scores)"><br>
                <input type="button" value="Eliminar Jugador" @click="borrarJugador(dato.id)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "jugadoresVista",
    data() {
        return {
            clubs: [],
            players: [],
            jugadoresEquipo: [],
            datosJugadores: [],
            goles: 0
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
            console.log("http://localhost:3000/players?team=" + param);
            fetch("http://localhost:3000/players?team=" + param)
            .then(response => response.json())
            .then(json => {
                this.jugadoresEquipo = json
                console.log(this.jugadoresEquipo)
            })
        },
        mostrarDatosJugadores(param) {
            fetch("http://localhost:3000/players?id=" + param)
            .then(response => response.json())
            .then(json => this.datosJugadores = json)
        },
        sumarGoles(param1, param2) {
            let golesTotales = this.goles + param2;
            let init = {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ scores: golesTotales }),
            };

            fetch("http://localhost:3000/players/" + param1, init)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al actualizar los goles');
                }
                return response.json();
            })
            .catch((error) => console.error(error));
            this.goles = 0;
            this.players = [];
            this.jugadoresEquipo = [];
            this.datosJugadores = [];
        },
        borrarJugador(param) {
            let init = {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            };

            fetch("http://localhost:3000/players/" + param, init)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al eliminar el jugador');
                }
                console.log('Jugador eliminado exitosamente');
            })
            .catch((error) => console.error(error));
            this.players = [];
            this.jugadoresEquipo = [];
            this.datosJugadores = [];
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