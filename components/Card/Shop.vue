<template>
  <NuxtLink
    to="#"
    class="flex items-center gap-3 rounded bg-white p-4 drop-shadow-xl transition-all duration-300 ease-in-out hover:drop-shadow-custom"
  >
    <NuxtImg
      src="https://picsum.photos/200"
      alt="Lorem Picsum"
      class="aspect-square h-28 w-28 object-cover"
    />
    <div class="relative flex h-28 w-40 flex-col justify-between">
      <div>
        <p class="text-xs uppercase text-ygsliver">Artist Name</p>
        <p class="staatliches font-semibold uppercase tracking-widest">[World tour] MD</p>
      </div>
      <div class="text-right font-semibold text-ygvibegray">More</div>
    </div>
  </NuxtLink>
</template>
