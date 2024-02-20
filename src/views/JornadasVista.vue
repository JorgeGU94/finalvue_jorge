<template>
    <div>
        <h1>Jornadas Liga</h1>
        <input type="button" value="asd" @click="recogerJornadas()">
        <table>
            <tr>
                <th>Jornada</th>
            </tr>
            <tr v-for="partido in matches" :key="partido">
                <td>{{ partido.round }} / {{ partido.date }}</td>
            </tr>
        </table>
        <label for="jornadas">Seleccione Jornada</label>
        <select name="jornadas">
            <option value=""></option>
        </select>
    </div>
</template>

<script>
export default {
    name: "jornadasVista",
    data() {
        return {
            matches: {},
        }
    },
    methods: {
        mostrarJornadas() {
            fetch("http://localhost:3000/matches")
            .then(response => response.json())
            .then(json => this.matches = json)
        },
        recogerJornadas() {

        }
    },
    created() {
        this.mostrarJornadas();
        this.recogerJornadas();
    }
}
</script>

<style>

</style>