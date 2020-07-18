<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <TextEditor :value="content" @input="changeContent" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import TextEditor from "./components/TextEditor";
import Footer from "./components/Footer";
import { mapState, mapMutations } from "vuex";

export default {
  name: "app",
  components: {
    Header,
    TextEditor,
    Footer
  },
  computed: mapState(["content"]),
  methods: mapMutations(["changeContent"])
};
</script>

<style lang="scss">
body {
  margin: auto;
}
header,
main,
footer,
h1,
h2,
h3,
h4,
h5,
p,
nav {
  margin: 0;
  padding: 0;
  width: 100%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}
.container {
  max-width: 960px;
  margin: 40px auto;
}
</style>
