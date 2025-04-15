import { createRouter, createWebHistory } from "vue-router";

import MainVue from "@/components/Main/Main.vue";
import AuthForm from "@/components/Form/AuthForm/AuthForm.vue";
import Dashboard from "@/components/Dashboard/Dashboard.vue";

const routes = [
  { path: "/", component: MainVue },
  { path: "/login", component: AuthForm },
  { path: "/dashboard", component: Dashboard },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
