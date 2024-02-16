<template>
    <div>
        <h1>Clasificación Liga</h1>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Puntos</th>
            </tr>
            <tr v-for="equipo in clubs" :key="equipo">
                <td>{{ equipo.name }}</td>
                <td>{{ equipo.points }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "clasificacionVista",
    data() {
        return {
            clubs: {}
        }
    },
    methods: {
        mostrarClasificacion() {
            fetch("http://localhost:3000/clubs")
            .then(response => response.json())
            .then(json => this.clubs = json)
        }
    },
    created() {
        this.mostrarClasificacion();
    }

}
</script>

<style>

</style>