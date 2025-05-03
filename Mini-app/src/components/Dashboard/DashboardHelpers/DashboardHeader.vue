<template>
  <header class="dashboard-header">
    <div class="header-left">
      <button class="menu-toggle" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </button>
      <h1 class="dashboard-title">Dashboard</h1>
    </div>
    <div class="header-right">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search..." />
      </div>
      <div class="header-actions">
        <button class="notification-btn">
          <i class="fas fa-bell"></i>
          <span class="notification-badge">3</span>
        </button>
        <div class="user-profile">
          <!-- <img
            src="@/assets/images/avatar.jpg"
            alt="User Avatar"
            class="avatar"
          /> -->
          <span class="user-name">John Doe</span>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(['toggle-sidebar']);

const toggleMenu = () => {
  emit('toggle-sidebar');
};

</script>

<style scoped>
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.menu-toggle {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #4a5568;
  cursor: pointer;
}

.dashboard-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-box i {
  position: absolute;
  left: 12px;
  color: #a0aec0;
}

.search-box input {
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background-color: #f8fafc;
  width: 200px;
  transition: all 0.2s;
}

.search-box input:focus {
  width: 250px;
  outline: none;
  border-color: #4299e1;
  background-color: #ffffff;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notification-btn {
  position: relative;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #4a5568;
  cursor: pointer;
}

.notification-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #f56565;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  font-weight: 500;
  color: #2d3748;
}
</style>
