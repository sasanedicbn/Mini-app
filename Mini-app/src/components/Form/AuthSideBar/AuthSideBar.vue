<template>
    <h4>TO-DO STATISTICS</h4>
    <div> 
      <SideBarAction 
        v-for="(item, index) in authSideBarData" 
        :key="index" 
        :icon="item.icon" 
        :title="item.title" 
        :description="item.description" 
      />
    </div>
    <p>All rights reserved @TO-DO STATISTICS</p>
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
  

