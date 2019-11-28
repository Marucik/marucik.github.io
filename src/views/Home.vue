<template>
  <div class="home">
    <main>
      <div class="container">
        <div class="logo">
          <button
            @click="currentTab = 'Intro'"
            class="logoButton contentChanger"
          >
            <img class="logoImg" src="@/assets/img/logo.png" alt="logo" />
          </button>
        </div>
        <div class="contentContainer">
          <component :is="currentTab" class="contentVisibility"></component>
        </div>
      </div>
      <footer>
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
    </main>
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
      tabs: ["Technologies", "Projects", "Contact"]
    };
  }
};
</script>

<style lang="scss">
main {
  /* min-height: 100vh; */
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
}

.contentVisibility {
  display: flex;
  -webkit-animation: flicker-in-1 1s ease-in-out both;
  animation: flicker-in-1 1s ease-in-out both;
}

.introParagraph {
  text-align: right;
  flex-flow: column;
}

.contact {
  flex-flow: column;
}

.contact > h2 {
  font-size: 3rem;
}

.contact > h3 {
  font-size: 2rem;
  margin: 0;
  text-indent: 4rem;
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

.textCenter {
  text-align: center;
}

a > .fab {
  vertical-align: middle;
  padding-left: 1rem;
  color: white;
  transition: transform 500ms ease-out;
}

a:hover > .fab {
  transform: translateY(-2px);
  transition: transform 300ms ease-in;
}

a:visited > .fab {
  color: white;
}
</style>
