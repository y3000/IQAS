<template>
  <div class="p-4">
    <a-row class="header" :gutter="40">
      <a-col :span="8" class="aa">col-8</a-col>
      <a-col :span="8" class="aa">col-8</a-col>
      <a-col :span="8" class="aa">col-8</a-col>
    </a-row>
    <!-- <BasicForm @register="register" /> -->
  </div>
  <div class="bb">11132</div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: '',
  })
</script>
<style scoped lang="less">
.header{
  .aa{
    height: 100px;
    background-color: pink;
  }


}


</style>
