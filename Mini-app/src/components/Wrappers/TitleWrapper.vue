<script>
 
</script>

<template>
<div class="wrapper">
   <slot></slot>
   <slot name="subtitle"></slot>
 </div>
</template>

<style scoped>
.wrapper {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}

</style>