<script setup>
import BaseLayout from './Wrappers/BaseLayout.vue';


</script>

<template>
  <BaseLayout>
    <template #header>
      Ovo je header
    </template>
    <section >
      Ovo je main
    </section>
    <template #footer>
      Ovo je footer
    </template>
  </BaseLayout>
  <p>SASA</p>
</template>

<style scoped>

</style>
