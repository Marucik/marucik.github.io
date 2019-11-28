<template>
  <div class="content projectsCarousel">
    <button class="sliderControls" @click="prevSlide">
      &#8810;
    </button>
    <tiny-slider
      :mouse-drag="true"
      :loop="false"
      :rewind="true"
      :items="itemNumber"
      :nav="false"
      :controls="false"
      ref="tinySlider"
    >
      <div v-for="item in projects" :key="item.name">
        <h2 class="textCenter">{{ item.name }}</h2>
        <div class="inline">
          <a class="link" :href="item.link" target="_blank">Github</a>
          <a v-if="item.live" class="link" :href="item.live" target="_blank"
            >Live</a
          >
        </div>
        <p class="textCenter">
          {{ item.description }}
        </p>
      </div>
    </tiny-slider>
    <button class="sliderControls" @click="nextSlide">
      &#8811;
    </button>
  </div>
</template>

<script>
import object from "@/data/main.js";
import TinySlider from "vue-tiny-slider";

export default {
  data() {
    return {
      projects: object.projects,
      next: this.$refs.next
    };
  },
  props: {
    itemNumber: {
      type: Number,
      default: 2
    }
  },
  components: {
    TinySlider
  },
  methods: {
    nextSlide() {
      this.$refs.tinySlider.slider.goTo("next");
    },
    prevSlide() {
      this.$refs.tinySlider.slider.goTo("prev");
    }
  }
};
</script>

<style lang="scss">
@import "tiny-slider/src/tiny-slider.scss";

.inline {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
}

.link {
  color: white;
}

.sliderControls {
  font-size: 2rem;
  color: white;
  background: none;
  border: none;
}
</style>
