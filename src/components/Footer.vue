<template>
  <footer>
    <div class="footer-text">
      <p class="made-by">
        Made by
        <a class="link-to-profile" href="https://github.com/lyudmyla-horbyk">Liudmyla Liashuk</a> in2020
      </p>
    </div>
  </footer>
</template>
<style scoped lang="scss">
footer {
  background-color: #870e4f;
  padding: 30px 0;
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font: 15px "Maven Pro", sans-serif;
  .footer-text {
    padding-right: 20px;
    .made-by {
      color: white;
      padding-bottom: 10px;
      .link-to-profile {
        color: white;
      }
    }
  }
}
</style>
