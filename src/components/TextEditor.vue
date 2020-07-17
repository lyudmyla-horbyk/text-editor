<template>
  <div>
    <EditorToolbar
      @change-color="changeColorText"
      @change-size="changeSizeText"
      @change-background="changeBackgroundText"
      @copy-json="copyJson"
    />
    <p class="text-editor" ref="editable" contenteditable v-html="this.value"></p>
  </div>
</template>

<script>
import EditorToolbar from "./EditorToolbar";

export default {
  components: {
    EditorToolbar
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$refs.editable.innerText = this.value;
    document.execCommand("styleWithCSS", false, true);
  },
  methods: {
    changeColorText(colorText) {
      document.execCommand("foreColor", false, colorText);
    },
    changeSizeText(sizeText) {
      document.execCommand("fontSize", false, sizeText);
    },
    changeBackgroundText(backgroundText) {
      document.execCommand("backColor", false, backgroundText);
    },
    copyJson() {
      console.log(this.$refs.editable.childNodes);
      const myArray = [...this.$refs.editable.childNodes].map(x => ({
        text: x.textContent,
        fontSize: x.style && x.style.fontSize,
        color: x.style && x.style.color,
        backgroundColor: x.style && x.style.backgroundColor
      }));
      console.log(myArray);
    }
  }
};
</script>
<style lang="scss">
.text-editor {
  border: 2px solid grey;
  border-top: none;
  height: 300px;
}
</style>
