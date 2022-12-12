<template>
  <app-header :key ="mostrarN"/>
  <div class="container"><router-view /></div>
  <app-footer/>
</template>


<script>
import Header from "./components/HeaderCliente";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  data(){
    return{
        valornumero:this.$store.state.perfil,
        mostrarN:this.$store.state.mostrar,
    }
  },
};
</script>

<style>
#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
</style>