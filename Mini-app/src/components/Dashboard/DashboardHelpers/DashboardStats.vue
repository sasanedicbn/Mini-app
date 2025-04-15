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
const stats = [
  {
    title: "Total Revenue",
    value: "$24,780",
    change: 12.5,
    icon: "fas fa-dollar-sign",
    bgColor: "#ebf8ff",
  },
  {
    title: "New Projects",
    value: "18",
    change: 8.2,
    icon: "fas fa-folder-plus",
    bgColor: "#fff5f5",
  },
  {
    title: "Active Users",
    value: "1,243",
    change: -3.4,
    icon: "fas fa-users",
    bgColor: "#f0fff4",
  },
  {
    title: "Tasks Completed",
    value: "327",
    change: 24.1,
    icon: "fas fa-check-circle",
    bgColor: "#faf5ff",
  },
];
</script>

<style scoped>
.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #2d3748;
}

.stat-content {
  flex: 1;
}

.stat-title {
  font-size: 0.875rem;
  color: #718096;
  margin: 0 0 0.25rem 0;
  font-weight: 500;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 0.25rem 0;
}

.stat-change {
  font-size: 0.75rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.stat-change.positive {
  color: #38a169;
}

.stat-change.negative {
  color: #e53e3e;
}

@media (max-width: 1200px) {
  .stats-container {
    grid-column: span 12 !important;
  }
}
</style>
