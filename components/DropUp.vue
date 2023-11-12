<template>
  <div class="relative mix-blend-normal">
    <div v-if="openMenu" class="flex w-full flex-col bg-black uppercase">
      <slot />
    </div>
    <button
      @click="openMenu = !openMenu"
      class="uppercase hover:text-ygvibegray"
    >
      <slot name="title" />
    </button>
  </div>
</template>

<script setup>
const openMenu = ref(false)
</script>
