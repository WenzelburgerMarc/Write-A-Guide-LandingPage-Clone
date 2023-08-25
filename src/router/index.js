import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import PageOne from "@/views/PageOne.vue";
import PageTwo from "@/views/PageTwo.vue";
const routes = [
  {
    path: "/",
    redirect: "/page1",
    name: "Page1",
    component: DefaultLayout,
    //meta: { requiresAuth: true },
    children: [
      {
        path: "/page1",
        name: "Page1",
        component: PageOne,
      },
      {
        path: "/page2",
        name: "page2",
        component: PageTwo,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/*
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    
  } else {
    
  }
    
    next();
});
*/
export default router;
