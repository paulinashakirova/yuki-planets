<script setup lang="ts">
  interface Props {
    planet: any
  }
  const props = defineProps<Props>()
</script>

<template>
  <h1>single planet</h1>
  {{ props.planet }}
</template>
