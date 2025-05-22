<template>
    <div class="calendar-grid">
     <div class="day"></div>
     <div class="day"></div>
     <div class="day"></div>
     <div class="day"></div>
     <div class="day"></div>
     <div class="day"></div>
     <div class="day"></div>
     <div class="day"></div>
     <div class="day"></div>
     <div class="day"></div>
     <div class="day"></div>
     <div class="day"></div>
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