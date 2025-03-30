<template>
    <form @submit.prevent="handleSubmit" class="user-form">
      <div 
        v-for="field in fields" 
        :key="field.name" 
        class="form-group"
        :class="{ 'half-width': field.halfWidth }"
      >
        <label :for="field.name">{{ field.label }}</label>
        <input
          v-model="field.value"
          :type="field.type"
          :id="field.name"
          class="form-input"
          :placeholder="field.placeholder"
          :required="field.required"
        />
      </div>
      <button type="submit" class="submit-btn">
        {{ submitText }}
      </button>
    </form>
  </template>
  
  <script setup>
  const props = defineProps({
    fields: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(field => 
          field.name && field.label && field.type
        )
      }
    },
    submitText: {
      type: String,
      default: "Pošalji"
    },
    onSubmit: {
      type: Function,
      required: true
    }
  })
  
  const handleSubmit = () => {
    const formData = {}
    props.fields.forEach(field => {
      formData[field.name] = field.value
    })
    props.onSubmit(formData)
  }
  </script>
  
  <style scoped>
  .user-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .form-group.half-width {
    width: 48%;
  }
  
  .form-input {
    padding: 0.75rem 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.2s ease;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #4a6bff;
    box-shadow: 0 0 0 3px rgba(74, 107, 255, 0.1);
  }
  
  .submit-btn {
    margin-top: 1rem;
    padding: 0.85rem 1.5rem;
    background-color: #4a6bff;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .submit-btn:hover {
    background-color: #3a5bef;
    transform: translateY(-1px);
  }
  </style>