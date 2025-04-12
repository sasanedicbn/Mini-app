<template>
    <div class="sidebar-action">
      <div class="icon-wrapper">
        <component :is="icon" size="20" class="icon" />
      </div>
      <div class="sidebar-details">
       <h3>{{ title }}</h3>
       <p>{{ description }}</p>
      </div>
    </div>
</template>

<script setup>
const props 
</script>

<style scoped>
.sidebar-action {
    display: flex;
    align-items: center;
    padding: 1.2rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
}

.sidebar-action:last-child {
    border-bottom: none;
}

.sidebar-action:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
    padding-left: 6px;
}

.icon-wrapper {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    transition: all 0.3s ease;
}

.sidebar-action:hover .icon-wrapper {
    background-color: white;
    border-color: white;
}

.sidebar-action:hover .icon {
    color: #4a6bff;
}

.icon {
    color: white;
    transition: all 0.3s ease;
}

.sidebar-details h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
}

.sidebar-details p {
    font-size: 0.85rem;
    opacity: 0.8;
    margin: 0;
}
</style>