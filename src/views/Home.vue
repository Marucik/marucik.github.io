<template>
  <div class="home">
    <div class="container">
      <div class="logo">
        <button @click="currentTab = 'Intro'" class="logoButton contentChanger">
          <img class="logoImg" src="@/assets/img/logo.png" alt="logo" />
        </button>
      </div>
      <div v-if="isDesktop" class="contentContainer">
        <component :is="currentTab" class="animation"></component>
      </div>
      <div v-else class="contentContainer">
        <Intro />
        <component
          v-for="tab in tabs"
          :key="tab"
          :is="tab"
          class="animation"
        ></component>
      </div>
    </div>
    <footer v-if="isDesktop">
      <div class="buttonsContainer">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="currentTab = tab"
          class="button contentChanger"
        >
          {{ tab }}
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import Technologies from "@/components/Technologies.vue";
import Contact from "@/components/Contact.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "Home",
  components: {
    Intro,
    Technologies,
    Contact,
    Projects
  },
  data() {
    return {
      currentTab: "Intro",
      tabs: ["Technologies", "Projects", "Contact"],
      window: {
        width: 0
      }
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    }
  },
  computed: {
    isDesktop() {
      if (this.window.width >= 1080) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background: radial-gradient(
      600.25px at 0% 100%,
      rgba(255, 0, 0, 0.15) 0%,
      rgba(255, 0, 0, 0) 100%
    ),
    radial-gradient(
      600.52px at 100% 0%,
      rgba(0, 102, 255, 0.15) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #000000;
}

button:hover {
  cursor: pointer;
}

button:focus {
  outline: none;
}

.container {
  display: flex;
  flex-flow: row;
  min-height: 70vh;
  @media screen and (max-width: 1080px) {
    flex-flow: column;
    align-items: center;
  }
}

.logo {
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  width: 45%;
  padding: 2.5rem;
  -webkit-animation: flicker-in-1 1s ease-in-out both;
  animation: flicker-in-1 1s ease-in-out both;
  @media screen and (max-width: 1080px) {
    padding: 2rem 0 0 0;
  }
}

.logoButton {
  background-color: transparent;
  border: 0;
  width: 100%;
  height: 100%;
}

.logoImg {
  width: 100%;
}

.contentContainer {
  display: flex;
  flex-flow: column;
  justify-content: center;
  color: white;
  padding: 2.5rem;
  font-size: 1.2rem;
  min-width: 65%;
  max-width: 65%;
  @media screen and (max-width: 1080px) {
    padding: 0.2rem;
    max-width: 90%;
  }
}

.animation {
  -webkit-animation: flicker-in-1 1s ease-in-out both;
  animation: flicker-in-1 1s ease-in-out both;
}

.introParagraph {
  text-align: right;
  flex-flow: column;
  @media screen and (max-width: 1080px) {
    text-align: center;
  }
}

footer {
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 30vh;
  color: white;
  -webkit-animation: flicker-in-1 1s ease-in-out both;
  animation: flicker-in-1 1s ease-in-out both;
}

.buttonsContainer {
  width: 70%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
}

.button {
  background: transparent;
  border: solid 4px #fff;
  color: white;
  font-size: 2rem;
  width: 220px;
  padding: 1.3rem;
  width: 270px;
}

.contentChanger {
  transition: transform 500ms ease-out;
}

.contentChanger:hover {
  transform: translateY(-2px);
  transition: transform 300ms ease-in;
}

.content {
  display: flex;
  @media screen and (max-width: 1080px) {
    margin: 2rem 0;
    justify-content: center;
  }
}

.textCenter {
  text-align: center;
}
</style>
