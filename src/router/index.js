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
      path: "/news/:slug",
      name: "NewsPage",
      component: () => import("../components/NewsPage.vue"),
    },
    {
      path: "/data",
      name: "data",
      component: () => import("../views/DataView.vue"),
    },
    {
      path: "/learn",
      name: "learn",
      component: () => import("../views/LearnView.vue"),
    },
    {
      path: "/learn/:slug",
      name: "ArticlePage",
      component: () => import("../components/ArticlePage.vue"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("../views/JobsView.vue"),
    },
    {
      path: "/jobs/:slug",
      name: "JobPage",
      component: () => import("../components/jobs/JobPage.vue"),
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
    {
      path: "/account",
      name: "account",
      component: () => import("../components/account/AccountPage.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("../views/FAQView.vue"),
    },
  ],
});

export default router;
