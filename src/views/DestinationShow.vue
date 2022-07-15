<template>
  <article class="destination">
    <template v-if="!destination.loading">
      <h1>{{ destination.data.name }}</h1>

      <div class="destination-details">
        <img
          :src="`/images/${destination.data.image}`"
          :alt="destination.data.name"
        />
        <p>{{ destination.data.description }}</p>
      </div>
    </template>
    <p v-else>Loading...</p>
  </article>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const destination = reactive({ data: null, loading: true });

onMounted(async () => {
  const response = await fetch(
    `https://travel-dummy-api.netlify.app/${route.params.slug}`
  );

  if (response.status !== 200) {
    throw new Error("Cannot connect to server.");
  }

  const json = await response.json();
  destination.data = json;
  destination.loading = false;
});
</script>
