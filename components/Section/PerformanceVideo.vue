<template>
  <div class="flex h-screen items-center justify-center bg-ygdistinctblack">
    <div class="flex flex-col space-y-10 overflow-hidden">
      <YGTitleHomePage
        class=" ml-5text-white lg:ml-0"
      >
        VIBE THE FLOW.
      </YGTitleHomePage>
      <LazyPerformanceSlider class="xl:mx-40" />
      <CustomButton
        class="mr-5 flex items-center gap-2 self-end text-ygdistinctblack lg:mr-0"
      >
        <IconPlus class="h-5 w-5" />
        <p>More YG Artists's MV</p>
      </CustomButton>
    </div>
  </div>
</template>
