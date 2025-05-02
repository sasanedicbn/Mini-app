<template>
  <div class="breadcrumbs">
    <router-link to="/dashboard" class="breadcrumb-item">Dashboard</router-link>
    <span class="breadcrumb-separator">/</span>
    <span class="breadcrumb-item active">Overview</span>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
computed(() => {
  console.log(route.path, 'route')

})
</script>
<style scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #718096;
  padding: 0.5rem 0;
}

.breadcrumb-item {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
}

.breadcrumb-item:hover:not(.active) {
  color: #4299e1;
}

.breadcrumb-item.active {
  color: #2d3748;
  font-weight: 500;
}

.breadcrumb-separator {
  color: #cbd5e0;
}
</style>
