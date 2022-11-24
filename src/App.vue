<template>
  <app-header class="mb-3" />
  <div class="container"><router-view /></div>
  <app-footer/>
</template>


<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
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