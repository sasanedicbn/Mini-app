<template>
    <div class="dashboard-grid">
    <DashboardStats />
    <DashboardChart />
    <DashboardRecentActivity />
    <DashboardQuickActions />
    <DashboardDataTable />
    <!-- <DashboardBreadcrumbs /> -->
  </div>
</template>

<script>
import DashboardStats from "@/components/Dashboard/DashboardHelpers/DashboardStats.vue";
import DashboardChart from "@/components/Dashboard/DashboardHelpers/DashboardChart.vue";
import DashboardRecentActivity from "@/components/Dashboard/DashboardHelpers/DashboardRecentActivity.vue";
import DashboardQuickActions from "@/components/Dashboard/DashboardHelpers/DashboardQuickActions.vue";
import DashboardDataTable from "@/components/Dashboard/DashboardHelpers/DashboardDataTable.vue";
</script>
