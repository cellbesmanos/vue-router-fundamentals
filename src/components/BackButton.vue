<template>
  <span>
    <button @click="router.back()">Back</button>
  </span>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
