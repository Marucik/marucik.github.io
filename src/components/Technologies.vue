<template>
  <div class="content technologiesContainer">
    <div v-for="name in technologies" :key="name" class="techBlock">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
import object from "@/data/main.js";

export default {
  data() {
    return {
      technologies: object.tech
    };
  }
};
</script>

<style lang="scss">
.technologiesContainer {
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.techBlock {
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 1rem;
  width: calc(100% / 5);
  height: calc(100% / 4);
  border: 2px white solid;
  @media screen and (max-width: 1080px) {
    width: calc(100% / 3);
  }
}

.techBlock p {
  text-align: center;
}
</style>
