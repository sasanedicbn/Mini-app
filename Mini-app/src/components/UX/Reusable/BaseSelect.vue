<template>
    <div class="select-group">
      <label v-if="label" :for="id" class="select-label">{{ label }}</label>
      <div class="select-wrapper">
        <select
          :id="id"
          :value="modelValue"
          @change="$emit('update:modelValue', $event.target.value)"
          class="select-field"
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
        <div class="select-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    id: String,
    label: String,
    modelValue: String,
    placeholder: String,
    options: {
      type: Array,
      required: true,
      default: () => []
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  </script>
  
  <style scoped>
  .select-group {
    margin-bottom: 20px;
  }
  
  .select-label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    color: #1a1a1a;
    font-size: 15px;
    letter-spacing: -0.01em;
  }
  
  .select-wrapper {
    position: relative;
  }
  
  .select-field {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-size: 15px;
    background: #fcfcfc;
    color: #333;
    height: 48px;
    appearance: none;
    box-sizing: border-box;
  }
  
  .select-field:focus {
    outline: none;
    border-color: #3a7bc8;
    background: white;
    box-shadow: 0 0 0 3px rgba(58, 123, 200, 0.12);
  }
  
  .select-icon {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    pointer-events: none;
  }
  </style>
  