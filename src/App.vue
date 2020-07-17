<template>
  <div>
    <Header />
    <TextEditor v-model="content" />
  </div>
</template>

<script>
import Header from "./components/Header";
import TextEditor from "./components/TextEditor";

export default {
  name: "app",
  components: {
    Header,
    TextEditor
  },
  data() {
    return {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
  },
  methods: {}
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
</style>
