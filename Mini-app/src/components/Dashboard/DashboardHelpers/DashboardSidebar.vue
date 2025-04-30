<template>
  <aside class="dashboard-sidebar">
    <div class="sidebar-logo">
      <!-- <img src="@/assets/images/logo.svg" alt="Company Logo" /> -->
    </div>
    <nav class="sidebar-nav">
      <ul>
        <li
          v-for="item in navItems"
          :key="item.name"
          :class="{ active: isActive(item.path) }"
        >
          <router-link :to="item.path">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="sidebar-footer">
      <button class="help-btn">
        <i class="fas fa-question-circle"></i>
        <span>Help Center</span>
      </button>
    </div>
  </aside>
</template>

<script setup>
import {  useRoute } from 'vue-router';

const route = useRoute()

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: "fas fa-home", },
  { name: "Projects", path: "/projects", icon: "fas fa-folder",},
  { name: "Tasks", path: "/tasks", icon: "fas fa-tasks" },
  { name: "Calendar", path: "/calendar", icon: "fas fa-calendar" },
  { name: "Messages", path: "/messages", icon: "fas fa-envelope" },
  { name: "Reports", path: "/reports", icon: "fas fa-chart-bar" },
  { name: "Settings", path: "/settings", icon: "fas fa-cog" },
];
const isActive = (path) => {
  return route.path === path;
};
</script>

<style scoped>
.dashboard-sidebar {
  width: 250px;
  background-color: #ffffff;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: sticky;
  top: 0;
}

.sidebar-logo {
  padding: 1.5rem;
  border-bottom: 1px solid #edf2f7;
}

.sidebar-logo img {
  max-width: 100%;
  height: auto;
}

.sidebar-nav {
  flex: 1;
  padding: 1rem 0;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li a {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: #4a5568;
  text-decoration: none;
  transition: all 0.2s;
}

.sidebar-nav li a:hover {
  background-color: #ebf8ff;
  color: #3182ce;
}

.sidebar-nav li a i {
  margin-right: 0.75rem;
  width: 20px;
  text-align: center;
}

.sidebar-nav li.active a {
  background-color: #ebf8ff;
  color: #3182ce;
  border-left: 3px solid #3182ce;
}

.sidebar-footer {
  padding: 1rem;
  border-top: 1px solid #edf2f7;
}

.help-btn {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #4a5568;
  padding: 0.5rem;
  width: 100%;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
}

.help-btn:hover {
  background-color: #ebf8ff;
  color: #3182ce;
}

.help-btn i {
  margin-right: 0.5rem;
}
</style>
