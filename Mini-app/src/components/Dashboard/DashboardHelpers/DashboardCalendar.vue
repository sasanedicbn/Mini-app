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
import { reactive } from 'vue';

  const months = reactive([
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
   ]);

  const days = reactive(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])

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