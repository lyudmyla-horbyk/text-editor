<template>
  <div class="editor-tollbar">
    <div class="selects-container">
      <select class="change-parameter-select" @change="onColorChange">
        <option value selected disabled>- Color -</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
      </select>
      <select class="change-parameter-select" @change="onSizeChange">
        <option value selected disabled>- Size -</option>
        <option value="1">Small</option>
        <option value="5">Normal</option>
        <option value="6">Big</option>
        <option value="7">Very Big</option>
      </select>
      <select class="change-parameter-select" @change="onBackgroundChange">
        <option value selected disabled>- Background -</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
      </select>
    </div>
    <div class="button-container">
      <button class="print-button" @click="onButtonJsonClick" type="button">Print JSON to console</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onColorChange(e) {
      this.$emit("change-color", e.target.value);
    },
    onSizeChange(e) {
      this.$emit("change-size", e.target.value);
    },
    onBackgroundChange(e) {
      this.$emit("change-background", e.target.value);
    },
    onButtonJsonClick(e) {
      this.$emit("copy-json", e.target.value);
    }
  }
};
</script>
<style scoped lang="scss">
.editor-tollbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
  background-color: #e6e6e6;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
}
.selects-container {
  .change-parameter-select {
    padding: 3px;
    margin-right: 10px;
    cursor: pointer;
  }
}
.button-container {
  .print-button {
    padding: 3px;
    cursor: pointer;
  }
}
</style>
