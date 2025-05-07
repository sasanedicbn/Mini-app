<template>
    <div class="input-group">
      <label v-if="label" :for="id" class="input-label">{{ label }}</label>
      <div class="input-wrapper">
        <input
          :id="id"
          :type="type"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          v-bind="$attrs"
          class="input-field"
          :placeholder="placeholder"
        >
      </div>
      <p v-if="error" class="input-error">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    id: String,
    label: String,
    type: {
      type: String,
      default: 'text',
    },
    modelValue: String,
    placeholder: String,
    error: {
        type:String,
        default: ''
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  </script>
  
  <style scoped>
  .input-group {
    margin-bottom: 20px;
  }
  
  .input-label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    color: #1a1a1a;
    font-size: 15px;
    letter-spacing: -0.01em;
  }
  
  .input-wrapper {
    position: relative;
  }
  
  .input-field {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-size: 15px;
    background: #fcfcfc;
    color: #333;
    height: 48px;
    box-sizing: border-box;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .input-field::placeholder {
    color: #999;
    opacity: 1;
  }
  
  .input-field:focus {
    outline: none;
    border-color: #3a7bc8;
    background: white;
    box-shadow: 0 0 0 3px rgba(58, 123, 200, 0.12);
  }
  .input-error{
    color: rgb(255, 45, 45);
    margin-top: 4px;
    margin-left: .15rem;
  }
  </style>
  