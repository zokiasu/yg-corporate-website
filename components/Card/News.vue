<template>
  <NuxtLink
    to="#"
    class="min-w-[20rem] max-w-[20rem] overflow-hidden bg-white drop-shadow-xl transition-all duration-300 ease-in-out hover:drop-shadow-custom"
  >
    <NuxtImg
      src="https://picsum.photos/200"
      :alt="title"
      class="aspect-video w-full object-cover"
    />
    <div class="space-y-2 bg-white p-5">
      <p class="font-semibold text-ygdistinctblack">
        {{ title }}
      </p>
      <p class="line-clamp text-xs text-ygvibegray">
        {{ description }}
      </p>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
// Définition des types pour les props
type Props = {
  title?: string
  description?: string
}

// Utilisez defineProps pour déclarer les props et leurs types
const props = defineProps<Props>()
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5; /* Change this to the number of lines you want */
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
