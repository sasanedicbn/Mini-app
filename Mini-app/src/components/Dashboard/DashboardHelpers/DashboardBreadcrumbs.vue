<template>
  <div class="breadcrumbs">
    <router-link to="/dashboard" class="breadcrumb-item">Dashboard</router-link>
    <span class="breadcrumb-separator">/</span>
    <span class="breadcrumb-item active">Overview</span>
  </div>
</template>

<style scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #718096;
  padding: 0.5rem 0;
}


.breadcrumb-separator {
  color: #cbd5e0;
}
</style>
