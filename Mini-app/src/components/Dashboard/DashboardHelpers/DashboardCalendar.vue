<template>
    <div class="calendar-container">
      <div class="month-label">{{ months[currentMonth] }} {{ currentYear }}</div>
      <div class="calendar-grid">
        <div class="day-name" v-for="day in days" :key="day">{{ day }}</div>
        <div class="empty" v-for="n in startDay" :key="'empty-' + n"></div>
        <div class="day" v-for="day in daysInMonth" :key="'day-' + day">
          {{ day }}
        </div>
      </div>
    </div>
  </template>
  

  <script setup>
  import { ref, computed } from 'vue'
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  
  const daysInMonth = computed(() => {
    return new Date(currentYear, currentMonth + 1, 0).getDate()
  })
  
  const startDay = computed(() => {
    let day = new Date(currentYear, currentMonth, 1).getDay()
    return day === 0 ? 6 : day - 1 
  })
  </script>
  
  
<style scoped>
.calendar-container {
  width: 100%;
  margin: 0 auto;
  font-family: sans-serif;
  color: #333;
}

.month-label {
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
  color: #2c3e50;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #f1f5f9;
  gap: 5px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}


.empty {
  height: 40px;
}

.day {
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #cbd5e1; 
  border-radius: 4px;
  transition: background-color 0.3s;
}

.day:hover {
  background-color: #94a3b8; 
  cursor: pointer;
}
</style>
