<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center space-y-16 p-5 py-20 lg:p-10"
  >
    <div class="w-full space-y-5 lg:w-3/4">
      <div class="flex w-full items-end justify-between">
        <YGTitleHomePage>YG Life</YGTitleHomePage>
        <CustomButton class="ml-5 flex items-center gap-2">
          <IconPlus class="h-5 w-5" />
          More YG Life
        </CustomButton>
      </div>
      <div class="space-y-2">
        <CardLightNews v-for="i in 3" :key="i" />
      </div>
    </div>
    <div class="w-full space-y-5 lg:w-3/4">
      <div class="flex w-full items-end justify-between">
        <YGTitleHomePage>YG Shop</YGTitleHomePage>
        <CustomButton class="ml-5 flex items-center gap-2">
          <IconPlus class="h-5 w-5" />
          More YG Select
        </CustomButton>
      </div>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-4">
        <CardShop v-for="i in 4" :key="i" />
      </div>
    </div>
    <div class="w-full space-y-5 lg:w-3/4">
      <div class="flex w-full items-center justify-between">
        <NuxtLink
          to="#"
          class="whitespace-nowrap px-3 text-xs font-bold hover:text-yggold sm:text-sm md:px-5 md:text-xl"
        >
          About YG
        </NuxtLink>
        <div class="h-0.5 w-full bg-ygdistinctblack" />
        <NuxtLink
          to="#"
          class="whitespace-nowrap px-3 text-xs font-bold hover:text-yggold sm:text-sm md:px-5 md:text-xl"
        >
          Recruit
        </NuxtLink>
        <div class="h-0.5 w-full bg-ygdistinctblack" />
        <NuxtLink
          to="#"
          class="whitespace-nowrap px-3 text-xs font-bold hover:text-yggold sm:text-sm md:px-5 md:text-xl"
        >
          Audition
        </NuxtLink>
        <div class="h-0.5 w-full bg-ygdistinctblack" />
        <NuxtLink
          to="#"
          class="whitespace-nowrap px-3 text-xs font-bold hover:text-yggold sm:text-sm md:px-5 md:text-xl"
        >
          Customer Center
        </NuxtLink>
      </div>
      <div class="flex w-full flex-col items-center gap-5">
        <p class="text-xl font-bold">YG Entertainment Socials Media</p>
        <div class="flex items-center gap-5">
          <NuxtLink to="#">
            <IconInstagram class="h-6 w-6 hover:scale-105 hover:text-yggold" />
          </NuxtLink>
          <NuxtLink to="#">
            <IconFacebook class="h-6 w-6 hover:scale-105 hover:text-yggold" />
          </NuxtLink>
          <NuxtLink to="#">
            <IconX class="h-5 w-5 hover:scale-105 hover:text-yggold" />
          </NuxtLink>
          <NuxtLink to="#">
            <IconYoutube class="h-6 w-6 hover:scale-105 hover:text-yggold" />
          </NuxtLink>
          <NuxtLink to="#">
            <IconWeibo class="h-6 w-6 hover:scale-105 hover:text-yggold" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
