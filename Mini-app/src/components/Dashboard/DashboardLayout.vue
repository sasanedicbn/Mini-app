<template>
  <div class="dashboard-container">
    <DashboardHeader @toggle-sidebar="toggleSideBar" />
    <div class="dashboard-content">
      <DashboardSidebar />
      <main class="main-content">
        <DashboardBreadcrumbs />
        <router-view></router-view> 
      </main>
    </div>
  </div>
</template>

<script setup>
import DashboardHeader from "@/components/Dashboard/DashboardHelpers/DashboardHeader.vue";
import DashboardSidebar from "@/components/Dashboard/DashboardHelpers/DashboardSidebar.vue";
import DashboardBreadcrumbs from "@/components/Dashboard/DashboardHelpers/DashboardBreadcrumbs.vue";
import DashboardStats from "./DashboardHelpers/DashboardStats.vue";
import { ref } from "vue";

const sidebar = ref(false)

const toggleSideBar = () => {
  sidebar.value = !sidebar.value
  console.log(sidebar.value, 'vaaal')

}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f7fa;
}

.dashboard-content {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
}

@media (max-width: 1200px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
</style>
