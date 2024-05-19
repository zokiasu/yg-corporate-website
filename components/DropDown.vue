<template>
  <div class="relative text-right mix-blend-normal">
    <button
      @click="openMenu = !openMenu"
      class="flex items-center gap-1 uppercase hover:text-ygvibegray"
    >
      <slot name="title" />
    </button>
    <div v-if="openMenu" @click="openMenu = false" class="flex w-full flex-col bg-black uppercase">
      <slot />
    </div>
  </div>
</template>

<script setup>
const openMenu = ref(false)
watchEffect(() => {
  if (openMenu.value) {
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.mix-blend-normal')) {
        openMenu.value = false
      }
    })
  }
})
</script>
