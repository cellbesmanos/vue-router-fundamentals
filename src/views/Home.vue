<template>
  <div class="home">
    <h1>All Destinations</h1>

    <div class="destinations">
      <router-link
        v-for="destination of destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
        ><h2>
          {{ destination.name }}
          <img :src="`/images/${destination.image}`" :alt="destination.name" />
        </h2>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import sourceData from "@/data.json";
const destinations = sourceData.destinations;
</script>
