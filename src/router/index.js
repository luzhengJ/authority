import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "layout",
    redirect: "/index",
    component: ()=>import("../layout"),
    children:[{
      path:"/index",
      name:"index",
      component: () => import("../layout/index.vue")
    }
  ]
  },
  
];

const router = new VueRouter({
  routes,
});

export default router;
