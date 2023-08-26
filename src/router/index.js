import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import HomePage from "../views/HomePage/HomePage.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "HomePage",
        component: HomePage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
