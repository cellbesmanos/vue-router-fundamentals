<template>
  <TheNavigation />

  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script setup>
import TheNavigation from "./components/TheNavigation.vue";
</script>
