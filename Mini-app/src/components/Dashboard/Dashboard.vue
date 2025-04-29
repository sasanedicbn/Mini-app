<template>
  <div class="dashboard-container">
    <DashboardHeader />
    <div class="dashboard-content">
      <DashboardSidebar />
      <main class="main-content">
        <DashboardBreadcrumbs />
        <div class="dashboard-grid">
          <!-- <DashboardStats />
          <DashboardChart />
          <DashboardRecentActivity />
          <DashboardQuickActions />
          <DashboardDataTable /> -->
          <DashboardBreadcrumbs />
        <router-view></router-view> 
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import DashboardHeader from "@/components/Dashboard/DashboardHelpers/DashboardHeader.vue";
import DashboardSidebar from "@/components/Dashboard/DashboardHelpers/DashboardSidebar.vue";
import DashboardBreadcrumbs from "@/components/Dashboard/DashboardHelpers/DashboardBreadcrumbs.vue";
import DashboardStats from "@/components/Dashboard/DashboardHelpers/DashboardStats.vue";
import DashboardChart from "@/components/Dashboard/DashboardHelpers/DashboardChart.vue";
import DashboardRecentActivity from "@/components/Dashboard/DashboardHelpers/DashboardRecentActivity.vue";
import DashboardQuickActions from "@/components/Dashboard/DashboardHelpers/DashboardQuickActions.vue";
import DashboardDataTable from "@/components/Dashboard/DashboardHelpers/DashboardDataTable.vue";
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
