<template>
  <app-header class="mb-3" />
  <div class="container"><router-view /></div>
  <!-- <app-headerCliente class="mb-3" />
  <div class="container2"><router-view /></div> -->
</template>


<script>
import Header from "./components/Header";
/* import HeaderCliente from "./components/HeaderCliente"; */

export default {
  name: "App",
  components: {
    "app-header": Header,
    /* "app-headerCliente": HeaderCliente, */
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
</style>
