<template>
  <div class="authForm-wrapper">
    <slot name="form"></slot>
  </div>
</template>

<style scoped>
.authForm-wrapper {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}
</style>
