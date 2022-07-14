<template>
  <article class="destination">
    <h1>{{ currentDestination.name }}</h1>

    <div class="destination-details">
      <img
        :src="`/images/${currentDestination.image}`"
        :alt="currentDestination.name"
      />
      <p>{{ currentDestination.description }}</p>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import sourceData from "@/data.json";

const route = useRoute();

const destinationId = computed(() => {
  return parseInt(route.params.id);
});

const currentDestination = computed(() => {
  return sourceData.destinations.find(
    (destination) => destination.id === destinationId.value
  );
});
</script>
