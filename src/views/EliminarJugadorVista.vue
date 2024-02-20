<template>
<div>
  <h2>Eliminar Jugador</h2>
  <label for="equipo">Seleccione Equipo</label><br>
  <select name="equipo" v-model="equipoSeleccionado" @change="recogerJugadores(equipoSeleccionado)">
    <option v-for="equipo in clubs" :key="equipo" :value="equipo.name">{{ equipo.name }}</option>
  </select><br>    
  <div v-if="players.length > 0">      
    <label for="jugador">Seleccione Jugador</label><br>
    <select name="jugador" v-model="jugadorSeleccionado">
      <option v-for="player in players" :key="player.id" :value="player.id">{{ player.name }}</option>
    </select>
  </div>
  <div v-if="this.jugadorSeleccionado != ''">
    <input type="button" value="Eliminar Jugador" @click="eliminarJugador(jugadorSeleccionado)">
  </div>
</div>

</template>

<script>
export default {
  name: "eliminarJugadorVista",
    data() {
        return {
          clubs: [],
          players: [],
          equipoSeleccionado: "",
          jugadorSeleccionado: ""
        }
    },
    methods: {
      recogerEquipos() {
        fetch("http://localhost:3000/clubs")
        .then(response => response.json())
        .then(json => this.clubs = json)
      },
      recogerJugadores(param) {
        console.log("http://localhost:3000/players?team=" + param);
        fetch("http://localhost:3000/players?team=" + param)
          .then(response => response.json())
          .then(json => {
            this.players = json
            console.log(this.players);
          })
      },
      eliminarJugador(param) {
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
        this.equipoSeleccionado = "";
        this.jugadorSeleccionado = "";
        this.players = []
      }
    },
    created() {
      this.recogerEquipos();
    }
}
</script>

<style>

</style>