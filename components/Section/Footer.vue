<script lang="ts" setup>
import {
  YGAudition,
  YGRecruit,
  YGInstagram,
  YGX,
  YGFacebook,
  YGYoutube,
  YGWeibo,
  shopArticles,
} from '~/constant/data'
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center space-y-20 p-5 py-20 md:p-10"
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
        <CardLightNews
          v-for="ygNews in $tm('listYGLifeNews')"
          :title="$rt(ygNews.title)"
          :date="$rt(ygNews.date)"
          :key="$rt(ygNews.title)"
        />
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
        <CardShop
          v-for="article in shopArticles"
          :key="article.artist"
          :artistName="article.artist"
          :category="article.category"
          :image="article.image"
          :link="article.link"
        />
      </div>
    </div>
    <div class="w-full space-y-16 lg:w-3/4">
      <div class="flex w-full items-center justify-between text-ygsliver">
        <NuxtLink
          to="#"
          class="whitespace-nowrap px-3 text-xs font-bold hover:text-ygdistinctblack sm:text-sm md:px-5 md:text-xl"
        >
          About YG
        </NuxtLink>
        <div class="h-0.5 w-full bg-ygsliver" />
        <NuxtLink
          :to="YGRecruit"
          class="whitespace-nowrap px-3 text-xs font-bold hover:text-ygdistinctblack sm:text-sm md:px-5 md:text-xl"
        >
          Recruit
        </NuxtLink>
        <div class="h-0.5 w-full bg-ygsliver" />
        <NuxtLink
          :to="YGAudition"
          class="whitespace-nowrap px-3 text-xs font-bold hover:text-ygdistinctblack sm:text-sm md:px-5 md:text-xl"
        >
          Audition
        </NuxtLink>
        <div class="h-0.5 w-full bg-ygsliver" />
        <NuxtLink
          to="#"
          class="whitespace-nowrap px-3 text-xs font-bold hover:text-ygdistinctblack sm:text-sm md:px-5 md:text-xl"
        >
          Customer Center
        </NuxtLink>
      </div>
      <div class="flex w-full flex-col items-center gap-5 text-ygsliver lg:hidden">
        <p class="text-xl font-bold">YG Entertainment Socials Media</p>
        <div class="flex items-center gap-5">
          <NuxtLink :to="YGInstagram">
            <IconInstagram class="h-6 w-6 hover:text-ygdistinctblack" />
          </NuxtLink>
          <NuxtLink :to="YGFacebook">
            <IconFacebook class="h-6 w-6 hover:text-ygdistinctblack" />
          </NuxtLink>
          <NuxtLink :to="YGX">
            <IconX class="h-5 w-5 hover:text-ygdistinctblack" />
          </NuxtLink>
          <NuxtLink :to="YGYoutube">
            <IconYoutube class="h-6 w-6 hover:text-ygdistinctblack" />
          </NuxtLink>
          <NuxtLink :to="YGWeibo">
            <IconWeibo class="h-6 w-6 hover:text-ygdistinctblack" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
