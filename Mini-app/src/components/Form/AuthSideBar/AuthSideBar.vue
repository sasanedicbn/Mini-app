<template>
  <div class="auth-sidebar">
    <h4 class="sidebar-title">Register</h4>
    <SideBarAction
      v-for="(item, index) in authSideBarData"
      :key="index"
      :icon="item.icon"
      :title="item.title"
      :active="item.active"
      :description="item.description"
      @click="setActive(index)"
    />
    <p class="copyright">All rights reserved @TO-DO STATISTICS</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SideBarAction from "./SideBarAction.vue";
import { User, Building, Shield } from "lucide-vue-next";
import { authSideBarData } from "@/data/login/LogInData";

// const authSideBarData = ref([
//   {
//     icon: User,
//     title: "Your personal details",
//     description: "Personal details of user",
//     active: true,
//   },
//   {
//     icon: Building,
//     title: "Your company details",
//     description: "Company basic information",
//     active: false,
//   },

// ]);

const setActive = (index) => {
  authSideBarData.value.forEach((item,i) => {
    item.active = i === index
  });
}
</script>

<style scoped>
.auth-sidebar {
  background-color: #024f99;
  display: flex;
  flex-direction: column;
  padding: 1.4rem 1.5rem;
  color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.sidebar-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  letter-spacing: 2px;
}

.copyright {
  margin-top: auto;
  padding: 1rem 0;
  font-size: 0.8rem;
  opacity: 0.7;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
