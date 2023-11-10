<template>
  <div class="flex flex-col">
    <Swiper
      :slides-per-view="1"
      :centeredSlides="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="aspect-video max-h-[20vh] min-h-[20vh] rounded sm:max-h-[30vh] sm:min-h-[30vh] md:max-h-[40vh] md:min-h-[40vh] lg:max-h-[50vh] lg:min-h-[50vh] 2xl:max-h-[60vh] 2xl:min-h-[60vh]"
    >
      <SwiperSlide v-for="i in idVideos" :key="i">
        <div class="flex items-center justify-center">
          <iframe
            :src="`https://www.youtube.com/embed/${i}?disablekb=1&controls=0&rel=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&showinfo=0&modestbranding=1&fs=0&loop=1&playlist=${i}&vq=hd1080`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
            class="aspect-video max-h-[20vh] min-h-[20vh] sm:max-h-[30vh] sm:min-h-[30vh] md:max-h-[40vh] md:min-h-[40vh] lg:max-h-[50vh] lg:min-h-[50vh] 2xl:max-h-[60vh] 2xl:min-h-[60vh]"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="flex items-center justify-center gap-2 py-5">
      <button
        v-for="(j, index) in idVideos"
        :key="j"
        class="h-1.5 w-10"
        :class="activeSlider == index ? 'bg-white' : 'bg-ygvibegray'"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

const swiperObject = ref(null)
const activeSlider = ref(0)
const idVideos = ref([
  'uxmzwbGpH30',
  'ehOVBOAtxU4',
  'eQNHDV7lKgE',
  'cVUZy1MhGDw',
  '4XZz3WXRw0A',
])

const onSlideChange = (event) => {
  activeSlider.value = event.realIndex
}

const onSwiper = (swiper) => {
  swiperObject.value = swiper
}

// go to id slide
const goToSlide = (id) => {
  swiperObject.value.slideTo(id)
}
</script>

<style scoped>
.swiper {
  width: fit-content;
  height: fit-content;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
