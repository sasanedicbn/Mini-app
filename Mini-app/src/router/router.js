import { createRouter, createWebHistory } from "vue-router";

import MainVue from "@/components/Main/Main.vue";
import AuthForm from "@/components/Form/AuthForm/AuthForm.vue";
import Dashboard from "@/components/Dashboard/Dashboard.vue";
import DashboardRecentActivity from "@/components/Dashboard/DashboardHelpers/DashboardRecentActivity.vue";
import DashboardDataTable from "@/components/Dashboard/DashboardHelpers/DashboardDataTable.vue";

const routes = [
  { path: "/", component: MainVue },
  { path: "/login", component: AuthForm },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [{ path: "/projects", component: DashboardDataTable }],
    children: [{ path: "/tasks", component: DashboardRecentActivity }],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
