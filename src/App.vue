<script setup>
import Home from './components/Home.vue';



</script>

<template>
  <header class="p-5 bg-black w-full border-b-2 border-white z-10 md:fixed md:pl-3">
      <h2 class="text-white text-2xl"> Blog Project</h2>
  </header>
  <section>
           <div class="p-5 md:ml-40 pt-4 md:pt-20 md:flex">
          <router-view></router-view>
          <router-view name="Home"></router-view>
      </div>
  </section>
  </template>
  
  <style scoped>
  
  </style>
  
