<script lang="ts" setup>
const openMenu = ref(false)
const { locale } = useI18n()
const languageSelected = computed(() => {
  return listLang.find((lang) => lang.value === locale.value)?.name
})

const toggleMenu = () => {
  openMenu.value = !openMenu.value
  if (openMenu.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const listLang = [
  {
    name: 'KOR',
    value: 'ko',
    link: '#',
  },
  {
    name: 'ENG',
    value: 'en',
    link: '#',
  },
  {
    name: 'JPN',
    value: 'ja',
    link: '#',
  },
  {
    name: 'CHN',
    value: 'zh-CN',
    link: '#',
  },
]

const listSite = [
  {
    name: 'YG Stage',
    link: '#',
  },
  {
    name: 'YG Select',
    link: '#',
  },
  {
    name: 'YG Audition',
    link: '#',
  },
  {
    name: 'YG Producer',
    link: '#',
  },
  {
    name: 'YG With',
    link: '#',
  },
]
</script>

<template>
  <div class="hide-scrollbar relative">
    <header
      class="fixed top-0 z-10 flex w-full items-center justify-between gap-10 overflow-y-scroll p-5 text-white transition-all duration-700 ease-in-out md:overflow-y-hidden lg:items-center"
      :class="
        openMenu
          ? 'inset-0 z-40 flex min-h-screen flex-col justify-between bg-black'
          : 'mix-blend-difference'
      "
    >
      <div class="flex w-full items-start justify-between">
        <IconYGSignature class="h-[2vw] max-h-[2rem] min-h-[1rem]" />
        <div class="flex items-start gap-5">
          <NuxtLink to="#">
            <IconInstagram
              class="h-4 w-4 hover:scale-105 hover:text-yggold lg:h-6 lg:w-6"
            />
          </NuxtLink>
          <NuxtLink to="#">
            <IconX class="h-3 w-3 hover:scale-105 hover:text-yggold lg:h-5 lg:w-5" />
          </NuxtLink>
          <NuxtLink to="#">
            <IconYoutube
              class="h-4 w-4 hover:scale-105 hover:text-yggold lg:h-6 lg:w-6"
            />
          </NuxtLink>
          <NuxtLink to="#">
            <IconFacebook
              class="h-4 w-4 hover:scale-105 hover:text-yggold lg:h-6 lg:w-6"
            />
          </NuxtLink>
          <NuxtLink to="#">
            <IconWeibo class="h-4 w-4 hover:scale-105 hover:text-yggold lg:h-6 lg:w-6" />
          </NuxtLink>
          <IconBurger
            id="burgerHeader"
            idStartAnim="startAnimationHeader"
            idReverseAnim="reverseAnimationHeader"
            :isActive="openMenu"
            @click="toggleMenu"
            class="hidden w-7 lg:block 2xl:w-8"
          />
          <LazyDropDown class="text-sm lg:hidden">
            <template #default>
              <NuxtLink
                v-for="dropObject in listLang"
                :key="dropObject.name"
                :to="dropObject.link"
                @click="locale = dropObject.value"
                class="text-sm uppercase hover:text-ygvibegray"
              >
                {{ dropObject.name }}
              </NuxtLink>
            </template>
            <template #title>
              <IconArrowDown class="h-3 w-3" />
              {{ languageSelected }}
            </template>
          </LazyDropDown>
        </div>
      </div>

      <div
        v-if="openMenu"
        class="container w-full space-y-14 px-10 uppercase text-ygvibegray md:space-y-20 lg:space-y-32 xl:space-y-40 2xl:space-y-60"
      >
        <div class="flex flex-col gap-2 md:flex-row md:justify-between">
          <div class="flex flex-col">
            <p class="text-lg font-semibold text-white xl:text-2xl">YG Ent.</p>
            <NuxtLink to="#" class="hover:text-white">Notice</NuxtLink>
            <NuxtLink to="#" class="hover:text-white">About</NuxtLink>
          </div>
          <div>
            <NuxtLink
              to="#"
              class="text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:text-yghypered xl:text-2xl"
            >
              NEWS
            </NuxtLink>
          </div>
          <div class="flex flex-col">
            <p class="text-lg font-semibold text-white xl:text-2xl">Artists</p>
            <NuxtLink to="#" class="hover:text-white">Singers</NuxtLink>
            <NuxtLink to="#" class="hover:text-white">Actors</NuxtLink>
          </div>
          <div class="flex flex-col">
            <p class="text-lg font-semibold text-white xl:text-2xl">Multimedia</p>
            <NuxtLink to="#" class="hover:text-white">Music Video</NuxtLink>
            <NuxtLink to="#" class="hover:text-white">Download</NuxtLink>
          </div>
          <div>
            <NuxtLink
              to="#"
              class="text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:text-yghypered xl:text-2xl"
            >
              With
            </NuxtLink>
          </div>
          <div class="flex flex-col">
            <p class="text-lg font-semibold text-white xl:text-2xl">IR</p>
            <NuxtLink to="#" class="hover:text-white">Shareholding</NuxtLink>
            <NuxtLink to="#" class="hover:text-white">Board</NuxtLink>
            <NuxtLink to="#" class="hover:text-white">Notice</NuxtLink>
            <NuxtLink to="#" class="hover:text-white">Disclosures</NuxtLink>
            <NuxtLink to="#" class="hover:text-white">Stocks</NuxtLink>
          </div>
        </div>
        <div class="flex flex-col gap-1 md:flex-row md:justify-between">
          <NuxtLink
            to="#"
            class="text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:text-yghypered xl:text-2xl"
          >
            YG Select
          </NuxtLink>
          <NuxtLink
            to="#"
            class="text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:text-yghypered xl:text-2xl"
          >
            YG Life
          </NuxtLink>
          <NuxtLink
            to="#"
            class="text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:text-yghypered xl:text-2xl"
          >
            YG Audition
          </NuxtLink>
          <NuxtLink
            to="#"
            class="text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:text-yghypered xl:text-2xl"
          >
            Recruiter
          </NuxtLink>
        </div>
      </div>

      <div v-if="openMenu" class="opacity-0">
        <p>Hello World</p>
      </div>
    </header>

    <slot />

    <footer
      class="fixed bottom-0 flex w-full items-end justify-between p-3 text-white"
      :class="openMenu ? 'z-50' : 'z-20 mix-blend-difference'"
    >
      <LazyDropUp class="hidden lg:block">
        <template #default>
          <NuxtLink
            v-for="dropObject in listLang"
            :key="dropObject.name"
            :to="dropObject.link"
            @click="locale = dropObject.value"
            class="text-sm uppercase hover:text-ygvibegray"
          >
            {{ dropObject.name }}
          </NuxtLink>
        </template>
        <template #title>
          <div class="flex items-center gap-1">
            {{ languageSelected }}
            <IconArrowUp class="h-3 w-3" />
          </div>
        </template>
      </LazyDropUp>

      <div class="flex items-end gap-3">
        <NuxtLink to="#" class="text-sm uppercase hover:text-ygvibegray lg:text-base">
          Privacy Policy
        </NuxtLink>
        <div class="mb-2 h-1 w-1 rounded-full bg-white" />
        <LazyDropUp>
          <template #default>
            <NuxtLink
              v-for="dropObject in listSite"
              :key="dropObject.name"
              :to="dropObject.link"
              class="text-sm uppercase hover:text-ygvibegray"
            >
              {{ dropObject.name }}
            </NuxtLink>
          </template>
          <template #title>
            <div class="flex items-center gap-1">
              <p class="text-sm uppercase lg:text-base">YG Family</p>
              <IconArrowUp class="h-3 w-3" />
            </div>
          </template>
        </LazyDropUp>
      </div>
      <IconBurger
        id="bugerFooter"
        idStartAnim="startAnimationFooter"
        idReverseAnim="reverseAnimationFooter"
        :isActive="openMenu"
        @click="toggleMenu"
        class="w-7 lg:hidden"
      />
    </footer>
  </div>
</template>
