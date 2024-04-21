<script setup lang="ts">
  defineProps<{ planet: any }>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1 class="font-bold text-xl text-center">{{ planet.name }}</h1>
  </div>
</template>
