<template>
  <TheNavigation />

  <main class="container">
    <router-view :key="route.path"></router-view>
  </main>
</template>

<script setup>
import TheNavigation from "./components/TheNavigation.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
