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
  .calendar-grid{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: blue;
    height: 500px;
  }
  .day{
    height: 40px;
    width: 40px;
    border: 1px solid orange;
    background-color: grey;
  }
  </style>