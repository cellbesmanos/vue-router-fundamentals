<template>
  <article class="destination">
    <h1>{{ destination.name }}</h1>

    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";
import sourceData from "@/data.json";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const destination = computed(() => {
  return sourceData.destinations.find(
    (destination) => destination.id === props.id
  );
});
</script>
