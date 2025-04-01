<template>
  <div class="authForm-wrapper">
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<style scoped>
.authForm-wrapper {
  margin: 0 auto;
  padding: 4rem 5rem;
}
</style>
