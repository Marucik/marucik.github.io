<template>
  <div class="content contact">
    <h2>You can catch me up on:</h2>
    <h3>
      Email:
      <a href="mailto:rakoczy.mk@gmail.com" target="_blank"
        >rakoczy.mk@gmail.com</a
      >
    </h3>
    <h3 class="email"></h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contact {
  flex-flow: column;
}

.contact > h2 {
  @media screen and (max-width: 1080px) {
    text-align: center;
  }
}

.contact > h3 {
  font-size: 2rem;
  margin: 0;
  text-indent: 4rem;
  @media screen and (max-width: 1080px) {
    text-indent: 0;
    font-size: 1.5rem;
    text-align: center;
  }

  a {
    color: white;

    &:visited {
      color: white;
    }
  }
}
</style>
