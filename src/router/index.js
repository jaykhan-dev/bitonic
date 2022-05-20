import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/charts",
      name: "charts",
      component: () => import("../views/ChartsView.vue"),
    },
    {
      path: "/learn",
      name: "learn",
      component: () => import("../views/LearnView.vue"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("../views/JobsView.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../components/SearchFunction.vue"),
    },
    {
      path: "/wallet",
      name: "wallet",
      component: () => import("../components/LnUrl.vue"),
    },
  ],
});

export default router;
