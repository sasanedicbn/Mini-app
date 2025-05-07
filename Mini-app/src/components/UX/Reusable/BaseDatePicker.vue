<template>
  <div class="datepicker-group">
    <label v-if="label" :for="id" class="datepicker-label">{{ label }}</label>
    <div class="datepicker-wrapper">
      <input
        :id="id"
        type="date"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="datepicker-field"
      >
      <div class="datepicker-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
            stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <p v-if="error" class="input-error">{{ error }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  label: String,
  modelValue: String,
  error: {
    type:String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<style scoped>
.datepicker-group {
  margin-bottom: 20px;
}

.datepicker-label {
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  color: #1a1a1a;
  font-size: 15px;
  letter-spacing: -0.01em;
}

.datepicker-wrapper {
  position: relative;
}

.datepicker-field {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-size: 15px;
  background: #fcfcfc;
  color: #333;
  height: 48px;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.datepicker-field:focus {
  outline: none;
  border-color: #3a7bc8;
  background: white;
  box-shadow: 0 0 0 3px rgba(58, 123, 200, 0.12);
}

.datepicker-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.input-error{
    color: rgb(255, 45, 45);
    margin-top: 4px;
    margin-left: .15rem;
  }
</style>
