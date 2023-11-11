<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center space-y-20 p-5 py-20 lg:p-0"
  >
    <div class="w-full space-y-5 lg:w-3/4">
      <YGTitleHomePage>YG Life</YGTitleHomePage>
      <div class="space-y-2">
        <CardLightNews v-for="i in 3" :key="i" />
      </div>
    </div>
    <div class="w-full space-y-5 lg:w-3/4">
      <YGTitleHomePage>YG Shop</YGTitleHomePage>
      <div class="flex w-full flex-col justify-between gap-5 lg:flex-row">
        <CardShop v-for="i in 4" :key="i" />
      </div>
    </div>
    <div class="flex w-full flex-col items-center gap-5 lg:w-3/4">
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
</template>
