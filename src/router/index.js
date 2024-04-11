import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import("@/views/home/index.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import("@/views/products/index.vue"),
  },
  {
    path: "/wholesale",
    name: "wholesale",
    component: () =>
      import("@/views/wholesale/index.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import("@/views/contact/index.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("@/views/about/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
