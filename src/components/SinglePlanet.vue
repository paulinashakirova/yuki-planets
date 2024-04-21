<script setup lang="ts">
  defineProps<{ planet: any }>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1 class="font-bold text-xl text-center">{{ planet.name }}</h1>
    <p>Current population is around {{ planet.population }} residents.</p>
    <p>The planet rotation time is: {{ planet.rotation_period }} hours.</p>
    <p>
      Most famous residents are:
      <li v-for="resident in planet.residents" :key="resident">
        {{ resident }}
      </li>
    </p>
    <p>
      Movies where {{ planet.name }} is mentioned:
      <li v-for="film in planet.films" :key="film">
        {{ film }}
      </li>
    </p>
    <p>
      You can learn more about {{ planet.name }}
      <a class="text-blue-500" :href="planet.url">here.</a>
    </p>
  </div>
</template>
