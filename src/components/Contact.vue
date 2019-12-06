<template>
  <div class="content contact">
    <h2>Email:</h2>
    <h3 class="email">rakoczymarcin@outlook.com</h3>
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
  font-size: 3rem;
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
}
</style>
