<template>
    <div>
        <h1>Jornadas Liga</h1>
        <table>
            <tr>
                <th>Jornada</th>
            </tr>
            <tr v-for="partido in matches" :key="partido">
                <td>{{ partido.round }} / {{ partido.date }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "jornadasVista",
    data() {
        return {
            matches: {}
        }
    },
    methods: {
        mostrarJornadas() {
            fetch("http://localhost:3000/matches")
            .then(response => response.json())
            .then(json => this.matches = json)
        }
    },
    created() {
        this.mostrarJornadas();
    }
}
</script>

<style>

</style>