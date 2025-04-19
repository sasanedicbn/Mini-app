<template>
  <div class="activity-container" :style="{ gridColumn: 'span 3' }">
    <div class="activity-header">
      <h3>Recent Activity</h3>
      <button class="view-all">View All</button>
    </div>
    <ul class="activity-list">
      <li
        v-for="activity in activities"
        :key="activity.id"
        class="activity-item"
      >
        <div
          class="activity-icon"
          :style="{ backgroundColor: activity.bgColor }"
        >
          <i :class="activity.icon"></i>
        </div>
        <div class="activity-content">
          <p class="activity-text">{{ activity.text }}</p>
          <p class="activity-time">{{ activity.time }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const activities = [
  {
    id: 1,
    text: 'New project "Website Redesign" created',
    time: "10 minutes ago",
    icon: "fas fa-folder-plus",
    bgColor: "#ebf8ff",
  },
  {
    id: 2,
    text: 'Sarah Johnson completed task "Homepage Layout"',
    time: "1 hour ago",
    icon: "fas fa-check-circle",
    bgColor: "#f0fff4",
  },
  {
    id: 3,
    text: "New message from client",
    time: "2 hours ago",
    icon: "fas fa-envelope",
    bgColor: "#fff5f5",
  },
  {
    id: 4,
    text: "Payment received for invoice #1254",
    time: "5 hours ago",
    icon: "fas fa-dollar-sign",
    bgColor: "#faf5ff",
  },
  {
    id: 5,
    text: "New team member added",
    time: "1 day ago",
    icon: "fas fa-user-plus",
    bgColor: "#ebf8ff",
  },
];
</script>

<style scoped>
.activity-container {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.activity-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.activity-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.view-all {
  background: none;
  border: none;
  color: #4299e1;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s;
}

.view-all:hover {
  background-color: #ebf8ff;
}

.activity-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.activity-item {
  display: flex;
  gap: 1rem;
}

.activity-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: #2d3748;
  flex-shrink: 0;
}

.activity-content {
  flex: 1;
}

.activity-text {
  font-size: 0.875rem;
  ize: 0.75rem;
  color: #a0aec0;
  margin: 0;
}


</style>
