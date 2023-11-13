<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
</script>

<template>
  <NuxtLayout>
    <div>
      <yg-loading />
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
