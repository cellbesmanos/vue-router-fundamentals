<template>
  <article class="destination">
    <h1>{{ destination.name }}</h1>

    <BackButton />

    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </article>

  <section class="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>

    <div class="cards">
      <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{
          name: 'experience.show',
          params: { experienceSlug: experience.slug },
        }"
      >
        <ExperiencesCard :experience="experience" />
      </router-link>
    </div>

    <router-view />
  </section>
</template>

<script setup>
import { computed } from "vue";
import sourceData from "@/data.json";
import ExperiencesCard from "../components/ExperiencesCard.vue";
import BackButton from "../components/BackButton.vue";

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
