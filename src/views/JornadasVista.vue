<template>
    <div>
        <h1>Jornadas Liga</h1>
        <label for="jornadas">Seleccione Jornada</label><br>
        <select name="jornadas" v-model="jornadaSeleccionada" @change="recogerPartidos(jornadaSeleccionada)">
            <option :value="elemento" v-for="elemento in 16" :key="elemento">Jornada {{ elemento }}</option>
        </select>
        <div v-if="this.matches.length > 0">
            <div v-for="partido in matches" :key="partido">
                <p>Fecha del Partido: {{ partido.date }}</p>
                <p v-if="partido.score != null">{{ partido.team1 }} {{ partido.score[0] }} - {{ partido.score[1] }} {{ partido.team2 }}</p>
                <p v-else>{{ partido.team1 }} <input type="text" size="2"> - <input type="text" size="2"> {{ partido.team2 }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "jornadasVista",
    data() {
        return {
            matches: {},
            ultimaJornada: {},
            numJornadas: "",
            jornadaSeleccionada: ""
        }
    },
    methods: {
        recogerJornadas() {
            let partidos = {};

            fetch("http://localhost:3000/matches")
            .then(response => response.json())
            .then(json => {
                partidos = json;
                let longitud = partidos.length;

                fetch("http://localhost:3000/matches?id=" + longitud)
                .then(response => response.json())
                .then(json => {
                    this.ultimaJornada = json;
                    this.ultimaJornada.forEach(element => {
                        this.numJornadas = element.round.substr(-2);
                    });
                })
            })

        },
        recogerPartidos(param) {
            console.log("http://localhost:3000/matches?round=Jornada " + param);
            fetch("http://localhost:3000/matches?round=Jornada " + param)
            .then(response => response.json())
            .then(json => this.matches = json)
        }
    },
    created() {
        this.recogerJornadas();
    }
}
</script>

<style>

</style>