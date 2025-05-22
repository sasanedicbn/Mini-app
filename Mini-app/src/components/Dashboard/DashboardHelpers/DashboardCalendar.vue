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