<template>
  <div class="quick-actions-container" :style="{ gridColumn: 'span 3' }">
    <h3>Quick Actions</h3>
    <div class="actions-grid">
      <button v-for="action in actions" :key="action.label" class="action-btn">
        <div class="action-icon" :style="{ backgroundColor: action.bgColor }">
          <i :class="action.icon"></i>
        </div>
        <span class="action-label">{{ action.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const actions = [
  {
    label: "New Project",
    icon: "fas fa-plus",
    bgColor: "#ebf8ff",
  },
  {
    label: "Create Task",
    icon: "fas fa-tasks",
    bgColor: "#fff5f5",
  },
  {
    label: "Send Message",
    icon: "fas fa-envelope",
    bgColor: "#f0fff4",
  },
  {
    label: "Generate Report",
    icon: "fas fa-chart-pie",
    bgColor: "#faf5ff",
  },
  {
    label: "Schedule Event",
    icon: "fas fa-calendar-plus",
    bgColor: "#fff5f5",
  },
  {
    label: "Add User",
    icon: "fas fa-user-plus",
    bgColor: "#ebf8ff",
  },
];
</script>

<style scoped>
.quick-actions-container {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.quick-actions-container h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1.5rem 0;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #f8fafc;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:hover {
  background-color: #edf2f7;
  transform: translateY(-2px);
}

.action-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.action-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: #4a5568;
  text-align: center;
}

@media (max-width: 1200px) {
  .quick-actions-container {
    grid-column: span 12 !important;
  }
}
</style>
