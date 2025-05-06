import { createRouter, createWebHistory } from "vue-router";

import MainVue from "@/components/Main/Main.vue";
import AuthForm from "@/components/Form/AuthForm/AuthForm.vue";
import Dashboard from "@/components/Dashboard/DashboardHelpers/Dashboard.vue";
import DashboardRecentActivity from "@/components/Dashboard/DashboardHelpers/DashboardRecentActivity.vue";
import DashboardDataTable from "@/components/Dashboard/DashboardHelpers/DashboardDataTable.vue";
import DashboardLayout from "@/components/Dashboard/DashboardLayout.vue";
import ActionModal from "@/components/UX/Modals/ActionModal.vue";

const routes = [
  { path: "/", component: MainVue },
  { path: "/login", component: AuthForm },
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      { path: "", component: Dashboard },
      { path: "projects", component: DashboardDataTable },
      { path: "message", component: DashboardRecentActivity },
      // { path: "tasks", component: DashboardRecentActivity },
      { path: "tasks", component: ActionModal },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
