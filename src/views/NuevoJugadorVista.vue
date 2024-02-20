<template>
    <div>
        <NuevoJugadorComp :equipoP="equipoParam"></NuevoJugadorComp>
    </div>
</template>

<script>
import NuevoJugadorComp from '@/components/NuevoJugadorComp.vue';

export default {
    name: "nuevoJugador",
    components: {NuevoJugadorComp},
    data() {
        return {
            equipoParam: ""
        }
    }
}
</script>

<style>

</style>