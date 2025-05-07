<template>
    <div class="form-group">
      <label v-if="label" :for="id">{{ label }}</label>
      <div class="select-wrapper">
        <select
          :id="id"
          :value="modelValue"
          @change="$emit('update:modelValue', $event.target.value)"
          class="form-input"
        >
          <option value="" disabled v-if="placeholder">{{ placeholder }}</option>
          <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    id: String,
    label: String,
    placeholder: String,
    modelValue: [String, Number],
    options: {
      type: Array,
      default: () => [] 
    }
  })
  
  defineEmits(['update:modelValue'])
  </script>