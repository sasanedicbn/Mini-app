<script setup>
import BaseLayout from './Wrappers/BaseLayout.vue';
import Header from '../components/Header/Header.vue'
import Main from "../components/Main/Main.vue"


</script>

<template>
  <BaseLayout>
    <template #header>
      <Header/>
    </template>
    <section >
      <Main/>
    </section>
    <template #footer>
    </template>
  </BaseLayout>
</template>
<style scoped>

</style>
