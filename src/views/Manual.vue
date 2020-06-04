<template>
  <div class="frame">
    <iframe
      :src="src"
      frameborder="0"
      style="width: 100%; height: 100%"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "KNIndex_manual.pdf" //pdf地址,这里我用的是我本地的文件,你也可以使用后台的文件
    };
  }
};
</script>

<style scoped>
.frame {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 999;
}
</style>
