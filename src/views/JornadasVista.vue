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
                <div v-else>
                    <p>{{ partido.team1 }} <input type="text" size="2" v-model="goles1"> - <input type="text" size="2" v-model="goles2"> {{ partido.team2 }}</p>
                    <input type="button" value="Insertar resultado" @click="insertarResultado(partido.id, goles1, goles2)">
                </div>
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
            jornadaSeleccionada: "",
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
        },
        insertarResultado(idPartido, goles1, goles2){
            let resultado = [goles1, goles2];
            let url = "http://localhost:3000/matches?id=" + idPartido;
            let aux = [];
            
            fetch(url)
            .then(response => response.json())
            .then(json => {
                aux = json;
                aux[0].score = resultado;
                console.log(aux);
                
                let init = {
                method: "PUT",
                body: JSON.stringify(aux),
                headers: { "Content-Type": "application/json" },
                };

                fetch(url, init)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Error al actualizar los resultados');
                    }
                    return response.json();
                })
                .catch((error) => console.error(error));
            })

        }
    },
    created() {
        this.recogerJornadas();
    }
}
</script>

<style>

</style>