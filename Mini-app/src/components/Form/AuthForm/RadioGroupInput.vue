<template>
    <div class="radio-group">
      <label v-for="option in options" :key="option.value" class="radio-option">
        <input
          type="radio"
          v-model="selectedValue"
          :value="option.value"
          :name="name"
        />
        {{ option.label }}
      </label>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    options: Array,
    name: String,
    modelValue: String
  });
  
  const emit = defineEmits(['update:modelValue']);
  </script>