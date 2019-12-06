<template>
  <div class="content technologiesContainer">
    <h2>I work with:</h2>
    <div class="blocksContainer">
      <div v-for="name in technologies" :key="name" class="techBlock">
        <p>{{ name }}</p>
      </div>
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
  flex-flow: column;
}

.blocksContainer {
  display: flex;
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
  border: 2px white solid;
  @media screen and (max-width: 1080px) {
    width: calc(100% / 2.7);
  }
}

.techBlock p {
  text-align: center;
  margin: calc(100% / 14) 0;
}
</style>
