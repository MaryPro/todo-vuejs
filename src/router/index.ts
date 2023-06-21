import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import TaskListPage from "@/views/TaskListPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/tasks",
    name: "TaskListPage",
    component: TaskListPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
