<template>
  <p class="text-editor" ref="editable" contenteditable v-on="listeners"></p>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    listeners() {
      return { ...this.$listeners, input: this.onInput };
    }
  },
  mounted() {
    this.$refs.editable.innerText = this.value;
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.innerText);
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
