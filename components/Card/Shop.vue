<script lang="ts" setup>
// Définition des types pour les props
type Props = {
  artistName?: string
  category?: string
  image?: string
  link?: string
}

// Utilisez defineProps pour déclarer les props et leurs types
const props = defineProps<Props>()
</script>

<template>
  <NuxtLink
    to="#"
    class="flex items-center gap-3 rounded bg-white p-4 drop-shadow-xl transition-all duration-300 ease-in-out hover:drop-shadow-custom"
  >
    <NuxtImg
      :src="image"
      :alt="artistName"
      class="aspect-square h-28 w-28 object-cover"
    />
    <div class="relative flex h-28 w-full flex-col justify-between">
      <div>
        <p class="text-xs uppercase text-ygsliver">{{ artistName }}</p>
        <p class="staatliches font-semibold uppercase tracking-widest">{{ category }}</p>
      </div>
      <p class="w-full text-right font-semibold text-ygvibegray">More</p>
    </div>
  </NuxtLink>
</template>
