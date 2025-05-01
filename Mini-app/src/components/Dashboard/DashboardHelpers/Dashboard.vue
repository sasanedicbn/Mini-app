<template>
    <div class="dashboard-grid">
    <DashboardStats />
    <DashboardChart />
    <DashboardRecentActivity />
    <DashboardQuickActions />
    <DashboardDataTable/> 
  </div>
</template>

<script setup>
import DashboardDataTable from "@/components/Dashboard/DashboardHelpers/DashboardDataTable.vue";
import DashboardStats from "../DashboardHelpers/DashboardStats.vue";
import DashboardChart from "./DashboardChart.vue";
import DashboardQuickActions from "./DashboardQuickActions.vue";
import DashboardRecentActivity from "./DashboardRecentActivity.vue";

</script>
