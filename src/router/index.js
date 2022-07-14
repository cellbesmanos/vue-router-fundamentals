import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const Brazil = () => import("@/views/Brazil.vue");
const Panama = () => import("@/views/Panama.vue");
const Hawaii = () => import("@/views/Hawaii.vue");
const Jamaica = () => import("@/views/Jamaica.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: Brazil,
  },
  {
    path: "/panama",
    name: "Panama",
    component: Panama,
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: Hawaii,
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: Jamaica,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
