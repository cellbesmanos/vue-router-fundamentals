import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const DestinationShow = () => import("@/views/DestinationShow.vue");
const ExperienceShow = () => import("@/views/ExperienceShow.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: DestinationShow,
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: ExperienceShow,
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
