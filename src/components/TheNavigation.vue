<template>
  <nav id="nav">
    <router-link id="logo" to="/">Vue School Travel App</router-link>
    <router-link
      v-for="destination of destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id } }"
    >
      {{ destination.name }}
    </router-link>
  </nav>
</template>

<script setup>
import sourceData from "@/data.json";
const destinations = sourceData.destinations;
</script>
