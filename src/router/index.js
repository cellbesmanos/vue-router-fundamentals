import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import sourceData from "@/data.json";

const DestinationShow = () => import("@/views/DestinationShow.vue");
const ExperienceShow = () => import("@/views/ExperienceShow.vue");
const NotFound = () => import("@/views/NotFound.vue");

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
    beforeEnter(to) {
      const id = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );

      if (!id) {
        return {
          name: "NotFound",
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
      }
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: ExperienceShow,
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
        beforeEnter(to) {
          const experience = sourceData.destinations
            .find((destination) => destination.id === parseInt(to.params.id))
            .experiences.find(
              (experience) => experience.slug === to.params.experienceSlug
            );

          if (!experience) {
            return {
              name: "NotFound",
              params: { pathMatch: to.path.split("/").slice(1) },
              query: to.query,
              hash: to.hash,
            };
          }
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    return (
      savedPosition ||
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ top: 0 });
        }, 400);
      })
    );
  },
});

export default router;
