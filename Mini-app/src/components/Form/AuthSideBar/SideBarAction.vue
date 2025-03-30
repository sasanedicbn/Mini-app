<template>
    <div>
      <h2>{{ props.title }}</h2>
      <p>Cena: ${{ props.description }}</p>
      <p>VIDIS LI SE IZ AKCIJE</p>
    </div>
  </template>
  
  <script setup>
 const props = defineProps({
    icon: Function,
    title: String,
    description: String
  });
  </script>
  