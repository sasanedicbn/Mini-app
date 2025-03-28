<template>
    <div class="layout">
      <header v-if="$slots.header" class="layout-header">
        <slot name="header"></slot>
      </header>
  
      <main class="layout-main">
        <slot></slot>  
      </main>
  
      <footer v-if="$slots.footer" class="layout-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
  };
  </script>
  
  <style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;  
  }
  
  .layout-main {
    flex: 1; 
  }
  
  .layout-footer {
    background: #f8f8f8;
    padding: 1rem;
    border-top: 1px solid #ddd;
  }
  </style>