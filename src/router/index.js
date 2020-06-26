import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Help from "../views/Help.vue";
import Download from "../views/Download.vue";
import Search from "../views/Search.vue";
import Browse from "../views/Browse.vue";
import Convert from "../views/Convert.vue";
import Visualization from "../views/Visualization.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*", //没有配置的路径
    redirect: "/home" //默认跳转首页
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/help",
    name: "Help",
    component: Help
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    //import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/download",
    name: "Download",
    component: Download
  },
  {
    path: "/browse",
    name: "Browse",
    component: Browse
  },
  {
    path: "/convert",
    name: "Convert",
    component: Convert
  },
  // {
  //   path: "/manual.pdf",
  //   name: "Manual",
  //   component: () => import("../views/Manual.vue")
  // },
  {
    path: "/visualization",
    name: "Visualization",
    component: Visualization
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
