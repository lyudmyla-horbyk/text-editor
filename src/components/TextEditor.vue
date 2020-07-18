<template>
  <div>
    <EditorToolbar
      @change-color="changeColorText"
      @change-size="changeSizeText"
      @change-background="changeBackgroundText"
      @copy-json="copyJson"
    />
    <p class="text-editor" ref="editable" contenteditable @input="changeContent"></p>
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
    // v-model or v-html causes contenteditable to loose focus
    this.$refs.editable.innerHTML = this.value;
    document.execCommand("styleWithCSS", false, true);
  },
  methods: {
    changeContent(e) {
      this.$emit("input", e.target.innerHTML);
    },
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
      const result = [...this.$refs.editable.childNodes].map(x => ({
        text: x.textContent,
        fontSize: x.style && x.style.fontSize,
        color: x.style && x.style.color,
        backgroundColor: x.style && x.style.backgroundColor
      }));
      console.log(result);
    }
  }
};
</script>
<style scoped lang="scss">
.text-editor {
  border: 2px solid grey;
  border-top: none;
  height: 300px;
  box-sizing: border-box;
  padding: 10px 20px;
  line-height: 1.3;
}
</style>
