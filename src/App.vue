<template>
  <div>
    <Header />
    <EditorToolbar />
    <TextEditor v-model="content" />
  </div>
</template>

<script>
import Header from "./components/Header";
import EditorToolbar from "./components/EditorToolbar";
import TextEditor from "./components/TextEditor";

export default {
  name: "app",
  components: {
    Header,
    EditorToolbar,
    TextEditor
  },
  data() {
    return {
      content: "Text Editor"
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
