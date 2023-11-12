<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    stroke="currentColor"
    stroke-width=".6"
    fill="rgba(0,0,0,0)"
    stroke-linecap="round"
    style="cursor: pointer"
  >
    <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
      <animate
        :id="idStartAnim"
        dur="0.2s"
        attributeName="d"
        values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
        fill="freeze"
      />
      <animate
        :id="idReverseAnim"
        dur="0.2s"
        attributeName="d"
        values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
        fill="freeze"
      />
    </path>
  </svg>
</template>

<script setup lang="ts">
// Définition des types pour les props
type Props = {
  idStartAnim: string
  idReverseAnim: string
  isActive?: boolean
}

// Utilisez defineProps pour déclarer les props et leurs types
const props = defineProps<Props>()

watch(
  () => props.isActive,
  () => {
    console.log('isActive', props.isActive)
    if (props.isActive) {
      // @ts-ignore
      document.getElementById(props.idStartAnim).beginElement()
    } else {
      // @ts-ignore
      document.getElementById(props.idReverseAnim).beginElement()
    }
  },
)
</script>
