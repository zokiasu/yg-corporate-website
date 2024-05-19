<template>
  <div v-if="displayLoading">
    <video
      ref="videoPlayer"
      muted
      playsinline
      src="/anim_enter_yg.mp4"
      @ended="endedVideo"
      :class="videoClasses"
      class="absolute inset-0 z-50 h-screen w-full bg-black object-cover"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'

const videoPlayer = ref<HTMLVideoElement | null>(null)
const displayLoading = ref(true)
const fadeOut = ref(false)

const videoClasses = computed(() => {
  return {
    'opacity-0': fadeOut.value,
    'transition-all': fadeOut.value,
    'ease-in-out': fadeOut.value,
    'duration-100': fadeOut.value,
  }
})

onMounted(() => {
  document.body.style.overflow = 'hidden' // Désactiver le défilement
  setTimeout(() => {
    if (videoPlayer.value) {
      videoPlayer.value.play()
      console.log('startVideo')
    }
  }, 150)
})

const endedVideo = () => {
  console.log('endedVideo')
  fadeOut.value = true
  setTimeout(() => {
    displayLoading.value = false
    document.body.style.overflow = '' // Réactiver le défilement
  }, 150)
}
</script>
