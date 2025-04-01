<template>
  <form @submit.prevent="handleSubmit" class="user-form">
    <TextBlock
      title="Basic info"
      subTitle=" Tell us a bit about yourself to get started with your new CRM account"
    />
    <div v-for="field in fields" :key="field.name" class="form-group">
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
import TextBlock from "@/components/UX/TextBlock.vue";
const props = defineProps({
  fields: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((field) => field.name && field.label && field.type);
    },
  },
  submitText: {
    type: String,
    default: "Pošalji",
  },
  onSubmit: {
    type: Function,
    required: true,
  },
});

const handleSubmit = () => {
  const formData = {};
  props.fields.forEach((field) => {
    formData[field.name] = field.value;
  });
  props.onSubmit(formData);
};
</script>

<style scoped>
.user-form {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 700px;
  margin: 0 auto;
  padding: 1.4rem 2.5rem;
  /* background-color: red; */
  width: 80%;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
.form-group label {
  color: rgba(209, 209, 209, 0.95);
}
.submit-btn {
  margin-top: 1.25rem;
  padding: 0.85rem 1.5rem;
  background-color: #4a6bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 50%;
  margin: 0 right;
}

.submit-btn:hover {
  background-color: #3a5bef;
  transform: translateY(-1px);
}
</style>
