<script setup>
import Header from './components/Header/Header.vue';
import HelloWorld from './components/HelloWorld.vue';
import Main from './components/Main/Main.vue';
</script>

<template>
    <Header/>
    <router-view></router-view>
</template>

<style >
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

</style>
