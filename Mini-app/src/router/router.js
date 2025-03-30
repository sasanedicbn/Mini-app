import { createRouter, createWebHistory } from "vue-router";

import MainVue from "@/components/Main/Main.vue";
import AuthForm from "@/components/Form/AuthForm.vue";

const routes = [
  { path: "/", component: MainVue },
  { path: "/login", component: AuthForm },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
