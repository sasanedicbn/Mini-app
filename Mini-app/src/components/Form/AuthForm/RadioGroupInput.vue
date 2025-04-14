<template>
    <div class="radio-group">
      <label
        v-for="option in options"
        :key="option.value"
        class="radio-option"
        :class="{ selected: selectedValue === option.value }"
      >
        <input
          type="radio"
          v-model="selectedValue"
          :value="option.value"
          :name="name"
        />
        <!-- <span class="custom-radio"></span> -->
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
  
  import { computed, watch } from 'vue';
  
  const selectedValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
  });
  </script>
  
  <style scoped>
  .radio-group {
    display: flex;
    justify-content: space-between;
  }
  
  .radio-option {
    position: relative;
    cursor: pointer;
    font-size: 16px;
    color: #333;
    user-select: none;
    display: flex;
    align-items: center;
  }
  
  .radio-option input {
    width: 18px;
    height: 18px;
    margin-right: 4px;
    cursor: pointer;
  }
  
  .custom-radio {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 16px;
    width: 16px;
    border: 2px solid #aaa;
    border-radius: 50%;
    transition: all 0.2s ease;
  }
  
  .radio-option.selected .custom-radio {
    border-color: #007bff;
    background-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.3);
  }
  
  </style>
  