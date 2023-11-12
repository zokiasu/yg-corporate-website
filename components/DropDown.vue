<template>
  <div class="relative text-right mix-blend-normal">
    <button
      @click="openMenu = !openMenu"
      class="flex items-center gap-1 uppercase hover:text-ygvibegray"
    >
      <slot name="title" />
    </button>
    <div v-if="openMenu" class="flex w-full flex-col bg-black uppercase">
      <slot />
    </div>
  </div>
</template>

<script setup>
const openMenu = ref(false)
</script>
