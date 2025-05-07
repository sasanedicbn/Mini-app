<template>
    <div class="form-group">
      <label v-if="label" :for="id">{{ label }}</label>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        class="form-input"
      >
    </div>
  </template>
  
  <script setup>
  defineProps({
    id: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    modelValue: [String, Number]
  })
  
  defineEmits(['update:modelValue'])
  </script>