<template>
  <div class="editor-tollbar">
    <select v-model="checkedColor">
      <option class="heading" value selected>- Color -</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="black">Black</option>
    </select>
    <select v-model="checkedSize">
      <option class="heading" value selected>- Size -</option>
      <option value="8px">Small</option>
      <option value="14px">Normal</option>
      <option value="24px">Big</option>
      <option value="36px">Very Big</option>
    </select>
    <select v-model="checkedBackground">
      <option class="heading" value selected>- Background -</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="black">Black</option>
    </select>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      checkedColor: "",
      checkedSize: "",
      checkedBackground: ""
    };
  },
  components: {},
  methods: {}
};
</script>
<style scoped lang="scss">
.editor-tollbar {
  border: 1px solid grey;
  background-color: #e6e6e6;
  width: 100%;
  height: 60px;
  margin-top: 30px;
}
</style>
