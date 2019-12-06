<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "@/views/Home.vue";

export default {
  components: {
    Home
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_noramlize.scss";
@import "@/assets/scss/_animation.scss";
@import url("https://fonts.googleapis.com/css?family=Lato");

* {
  font-family: "Lato", sans-serif;
  box-sizing: border-box;
}

body {
  /* overflow: hidden; */
  margin: 0;
}
</style>
