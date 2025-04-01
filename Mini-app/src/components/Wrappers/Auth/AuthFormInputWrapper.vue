<template>
  <div class="authForm-wrapper">
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<style scoped>
.authForm-wrapper {
  width: 100%;
  padding: 2rem 3rem;
  box-sizing: border-box;
}

.form-container {
  height: auto;
  min-height: 580px;
}

.main-container {
  padding: 20px;
  box-sizing: border-box;
}
</style>
