<template>
  <article class="destination">
    <h1>{{ destination.name }}</h1>

    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </article>

  <section class="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>

    <div class="cards">
      <ExperiencesCard
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :experience="experience"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import sourceData from "@/data.json";
import ExperiencesCard from "../components/ExperiencesCard.vue";

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
