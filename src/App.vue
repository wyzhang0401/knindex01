<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    <!-- 滑动页面，可以有返回最顶端按钮 -->
    <!-- 返回顶部按钮 -->
    <el-backtop>
      <div
        style="{
                        height: 100%;
                        width: 100%;
                        background-color: #f2f5f6;
                        box-shadow: 0 0 6px rgba(0,0,0, .12);
                        text-align: center;
                        line-height: 40px;
                        color: rgb(115, 200, 200);
                    }"
      >
        TOP
      </div>
    </el-backtop>
  </div>
</template>

<script>
import header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    appHeader: header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202122;
  margin: 0;
}

ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.app-main {
  /* position: absolute;
  margin-top: 0; */
  width: 100%;
  -webkit-box-shadow: 0px 0px 10px #ccc;
  -moz-box-shadow: 0px 0px 10px #ccc;
  -ms-box-shadow: 0px 0px 10px #ccc;
  box-shadow: 0px 0px 10px #ccc;
  background: #e6f0ef;
  padding: 20px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  padding-bottom: 40px;
}
</style>
