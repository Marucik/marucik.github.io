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
          <Intro />
          <Technologies />
          <Projects :item-number="1" />
          <Contact />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import Technologies from "@/components/Technologies.vue";
import Contact from "@/components/Contact.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "HomeMobile",
  components: {
    Intro,
    Technologies,
    Contact,
    Projects
  }
};
</script>

<style lang="scss" scoped>
.container {
  flex-flow: column;
  align-items: center;
}

footer {
  display: none;
}

.logo {
  padding: 2rem 0 0 0;
}

.buttonsContainer {
  width: 100%;
  flex-flow: column;
}

.contentContainer {
  max-width: 100%;
  padding-top: 0;
}

.introParagraph {
  text-align: center;
}

.techBlock {
  margin: 1rem;
  width: calc(100% / 3);
  height: calc(100% / 3);
  border: 2px white solid;
}

.technologiesContainer {
  justify-content: center;
}

.content {
  margin: 2rem 0;
}

.contact > h3 {
  font-size: 1.2rem;
  text-indent: 0;
}
</style>
