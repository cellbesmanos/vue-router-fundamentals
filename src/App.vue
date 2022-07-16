<template>
  <TheNavigation />

  <main class="container">
    <router-view v-slot="{ Component }">
      <transition name="slideUp" mode="out-in">
        <component :is="Component" :key="route.path"></component>
      </transition>
    </router-view>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import TheNavigation from "./components/TheNavigation.vue";

const route = useRoute();
</script>

<style>
.slideUp-enter-from,
.slideUp-leave-to {
  opacity: 0;
  transform: translateY(8%);
}

.slideUp-enter-to,
.slideUp-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slideUp-enter-active,
.slideUp-leave-active {
  transition: all 0.4s ease-out;
}
</style>
