<template>
  <div id="app">
    <Acceuil />
    <router-view />
  </div>
</template>

<script>
import Acceuil from "./components/Home.vue";

export default {
  components: {
    Acceuil,
  },
};
</script>
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
}
</style>
