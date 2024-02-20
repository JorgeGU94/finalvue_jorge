<template>
<form method="POST" @submit.prevent="insertarJugador(equipoSeleccionado)">
    <label for="nombre">Nombre del Jugador</label><br>
    <input type="text" name="nombre" v-model="nombre" required><br>
    <label for="equipo">Equipo del Jugador</label><br>
    <select name="equipo" v-model="equipoSeleccionado" v-if="equipoP == ''">
        <option value="" disabled selected>Seleccione un equipo</option>
        <option v-for="equipo in clubs" :key="equipo" :value="equipo.name">{{ equipo.name }}</option>
    </select>
    <select name="equipo" v-model="equipoSeleccionado" v-else>
        <option :value="equipoP" selected>{{ equipoP }}</option>
    </select>
    <br>
    <label for="goles">Goles del Jugador</label><br>
    <input type="number" name="goles" v-model="goles" required><br>
    <input type="submit" value="Añadir Jugador">
</form>

</template>

<script>
export default {
    name: "nuevoJugadorVista",
    props: ["equipoP"],
    data() {
        return {
            clubs: {},
            nombre: "",
            goles: 0
        }
    },
    methods: {
        recogerEquipos() {
            fetch("http://localhost:3000/clubs")
            .then(response => response.json())
            .then(json => this.clubs = json)
        },
        insertarJugador(param) {
            let nuevoJugador = {
                name: this.nombre,
                team: param,
                scores: this.goles
            };

            let URL = "http://localhost:3000/players";
            let init = {
            method: "POST",
            body: JSON.stringify(nuevoJugador),
            headers: { "Content-Type": "application/json" },
            };

            fetch(URL, init)
                .then((response) => response.json())
                .catch((error) => console.error(error));

            this.nombre = "";
            this.goles = "";
            // lo que coños que resetee el select
        }
    },
    created() {
        this.recogerEquipos();
        console.log(this.equipo);
    }
}
</script>

<style>

</style>