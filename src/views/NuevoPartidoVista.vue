<template>
  <div>
    <h2>Nuevo partido</h2>
    <form method="POST" @submit.prevent="insertarPartido()">
        <label for="round">Jornada del Partido</label><br>
        <input type="text" name="round" v-model="round" required><br>
        <label for="date">Fecha del Partido</label><br>
        <input type="text" name="date" v-model="date" required><br><br>
        <select name="equipo" v-model="equipo1">
          <option value="" disabled selected>Seleccione el primer equipo</option>
          <option v-for="equipo in clubs" :key="equipo.name" :value="equipo.name">{{ equipo.name }}</option>
        </select><br><br>
        <select name="equipo" v-model="equipo2" v-if="equipo1 != ''">
            <option value="" disabled selected>Seleccione el segundo equipo</option>
            <option value="" disabled selected>{{ this.equipo1 }}</option>
            <option v-for="equipo in clubs.filter(e => e.name !== equipo1)" :key="equipo.name" :value="equipo.name">{{ equipo.name }}</option>
        </select><br><br>
        <h4>Resultado (Opcional)</h4>
        <input type="text" placeholder="0" v-model="goles1" size="2"><input type="text" placeholder="0" v-model="goles2" size="2"><br><br>
        <input type="submit" value="Añadir Partido">
    </form>
  </div>
</template>

<script>
export default {
name: "nuevoPartidoVista",
    data() {
        return {
            clubs: {},
            round: "",
            date: "",
            equipo1: "",
            equipo2: "",
            goles1: "",
            goles2: ""
        }
    },
    methods: {
        recogerEquipos() {
            fetch("http://localhost:3000/clubs")
            .then(response => response.json())
            .then(json => this.clubs = json)
        },
        insertarPartido() {
          let nuevoPartido;
          if (this.goesl1 != "" && this.goles2 != "") {
            nuevoPartido = {
              round: this.round,
              date: this.date,
              team1: this.equipo1,
              team2: this.equipo2,
              scores: [this.goles1, this.goles2]
            };
          } else {
            nuevoPartido = {
              round: this.round,
              date: this.date,
              team1: this.equipo1,
              team2: this.equipo2,
            };
          }

          let URL = "http://localhost:3000/matches";
          let init = {
          method: "POST",
          body: JSON.stringify(nuevoPartido),
          headers: { "Content-Type": "application/json" },
          };

          fetch(URL, init)
          .then((response) => response.json())
          .catch((error) => console.error(error));

          this.round = "";
          this.date = "";
          this.equipo1 = "";
          this.equipo2 = "";
          this.goles1 = "";
          this.goles2 = "";
        }
    },
    created() {
        this.recogerEquipos();
    }
}
</script>

<style>

</style>