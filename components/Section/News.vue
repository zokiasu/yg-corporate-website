<template>
  <div class="flex h-screen items-center justify-center">
    <div class="flex flex-col overflow-hidden">
      <YGTitleHomePage class="ml-5">Latest News</YGTitleHomePage>
      <div
        class="remove-scrollbar flex gap-5 overflow-hidden overflow-x-scroll scroll-smooth px-5 py-10 lg:gap-10"
      >
        <CardNews
          v-for="news in $tm('listNews')"
          :title="$rt(news.title)"
          :description="$rt(news.desc)"
          :key="news"
        />
      </div>
      <CustomButton class="ml-5 flex items-center gap-2">
        <IconPlus class="h-5 w-5" />
        <p>More articles from YG</p>
      </CustomButton>
    </div>
  </div>
</template>
