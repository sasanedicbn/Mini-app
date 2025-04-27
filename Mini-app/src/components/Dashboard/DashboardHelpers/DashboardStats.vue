<template>
  <div class="stats-container" :style="{ gridColumn: 'span 3' }">
    <div class="stat-card" v-for="stat in stats" :key="stat.title">
      <div class="stat-icon" :style="{ backgroundColor: stat.bgColor }">
        <i :class="stat.icon"></i>
      </div>
      <div class="stat-content">
        <h3 class="stat-title">{{ stat.title }}</h3>
        <p class="stat-value">{{ stat.value }}</p>
        <p
          class="stat-change"
          :class="{ positive: stat.change > 0, negative: stat.change < 0 }"
        >
          <i
            :class="stat.change > 0 ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"
          ></i>
          {{ Math.abs(stat.change) }}% vs last period
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDashboardStore } from '@/store/DashboardStore'
import { computed } from 'vue'

const dashboardStore = useDashboardStore()

const stats = computed(() => {
  const overview = dashboardStore.overview
  return [
    {
      title: "Total Revenue",
      value: `$${overview.totalRevenue.toLocaleString()}`,
      change: overview.revenueChange,
      icon: "fas fa-dollar-sign",
      bgColor: "#ebf8ff",
    },
    {
      title: "New Projects",
      value: overview.newProjects.toString(),
      change: overview.projectsChange,
      icon: "fas fa-folder-plus",
      bgColor: "#fff5f5",
    },
    {
      title: "Active Users",
      value: overview.activeUsers.toLocaleString(),
      change: overview.usersChange,
      icon: "fas fa-users",
      bgColor: "#f0fff4",
    },
    {
      title: "Tasks Completed",
      value: overview.tasksCompleted.toString(),
      change: overview.tasksChange,
      icon: "fas fa-check-circle",
      bgColor: "#faf5ff",
    },
  ]
})
</script>

<style scoped>
.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.stat-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-content {
  flex: 1;
}

.stat-title {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0.25rem 0;
}

.stat-change {
  font-size: 0.75rem;
  margin: 0;
}

.positive {
  color: #10b981;
}

.negative {
  color: #ef4444;
}
</style>