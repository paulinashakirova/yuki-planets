<script setup lang="ts">
import type { Planet } from '@/types/planet'
interface Props {
planet?: Planet
}
const props = withDefaults(defineProps<Props>(), {
  planet: () => ({})
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1 class="font-bold text-2xl text-center" v-if="props.planet.name">
      <slot class="border-4" name="heading"></slot>
    </h1>
    <p v-if="props.planet.population">Current population is around {{ props.planet.population }} residents.</p>
    <p v-if="props.planet.rotation_period">The planet rotation time is: {{ props.planet.rotation_period }} hours.</p>
    <p v-if="props.planet.residents">
      Most famous residents are:
      <ul class="indent-4 list-disc list-inside">
        <li  v-for="resident in props.planet.residents" :key="resident">
        {{ resident }}
      </li>
      </ul>
    </p>
    <p v-if="props.planet.name && props.planet.films">
      Movies where {{ props.planet.name }} is mentioned:
      <ul class="indent-4 list-disc list-inside">
        <li class="indent-4" v-for="film in props.planet.films" :key="film">
        {{ film }}
        </li>
      </ul>
    </p>
    <p v-if="props.planet.name && props.planet.url">
      You can learn more about {{ props.planet.name }}
      <a class="text-blue-500 underline" :href="props.planet.url">here.</a>
    </p>
  </div>
</template>
