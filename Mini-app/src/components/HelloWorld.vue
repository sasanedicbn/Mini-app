<script setup>
import BaseLayout from './Wrappers/BaseLayout.vue';
import Header from '../components/Header/Header.vue'


</script>

<template>
  <BaseLayout>
    <template #header>
      <Header></Header>
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
