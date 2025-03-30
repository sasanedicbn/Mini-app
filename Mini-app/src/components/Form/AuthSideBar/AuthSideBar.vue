<template>
    <div class="auth-sidebar">
     <h4 class="sidebar-title">TO-DO STATISTICS</h4>
      <SideBarAction 
        v-for="(item, index) in authSideBarData" 
        :key="index" 
        :icon="item.icon" 
        :title="item.title" 
        :description="item.description" 
      />
      <p class="copyright">All rights reserved @TO-DO STATISTICS</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SideBarAction from './SideBarAction.vue';
import { User, Building, Shield } from 'lucide-vue-next';  

const authSideBarData = ref([
    { icon: User, title: 'Your personal details', description: 'Personal details of user' },
    { icon: Building, title: 'Your company details', description: 'Company basic information' },
    { icon: Shield, title: 'Your role', description: 'User role in the platform' },
]);
</script>

<style scoped>
.auth-sidebar {
    background-color: #024F99;
    display: flex;
    flex-direction: column;
    padding: 0rem 1.5rem;
    /* height: 80%; */
    color: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.sidebar-title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.copyright {
    margin-top: auto;
    padding-top: 1rem;
    font-size: 0.8rem;
    opacity: 0.7;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>