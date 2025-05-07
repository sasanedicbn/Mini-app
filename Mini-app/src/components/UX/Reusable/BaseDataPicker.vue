<template>
    <div class="form-group">
      <label v-if="label" :for="id">{{ label }}</label>
      <div class="date-input-wrapper">
        <input
          :id="id"
          type="date"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          class="form-input"
        >
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    id: String,
    label: String,
    modelValue: String
  })
  
  defineEmits(['update:modelValue'])
  </script>