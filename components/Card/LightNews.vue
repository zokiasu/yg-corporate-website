<template>
  <NuxtLink
    to="#"
    class="flex w-full justify-between bg-white p-3 font-semibold drop-shadow-xl transition-all duration-300 ease-in-out hover:drop-shadow-custom"
  >
    <p>{{title}}</p>
    <p class="text-ygvibegray">{{date}}</p>
  </NuxtLink>
</template>

<script lang="ts" setup>
// Définition des types pour les props
type Props = {
  title?: string
  date?: string
}

// Utilisez defineProps pour déclarer les props et leurs types
const props = defineProps<Props>()
</script>
