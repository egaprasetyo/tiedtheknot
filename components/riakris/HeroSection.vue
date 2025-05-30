<template>
  <section class="h-[100svh] w-full bg-[#6B7462]">
    <div class="relative h-full">
      <NuxtImg
        provider="imagekit"
        src="/hero-image.png"
        class="w-full h-auto object-cover md:w-full md:h-auto lg:object-cover mx-auto"
      />
      <div
        class="absolute h-full top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-[#6B7462]/50 md:from-[#6B7462]/60 from-0% via-[#343830] via-50% to-[#10140D] to-100%"
      ></div>
      <div
        class="w-full max-w-sm absolute top-[40%] md:top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 z-10"
      >
        <h1
          class="font-montserrat text-xs md:text-sm text-white font-bold tracking-[0.4em] text-center"
        >
          UNDANGAN PERNIKAHAN
        </h1>
        <div class="my-12 flex items-center justify-center gap-4 md:gap-8">
          <p class="font-dancing-script text-7xl md:text-8xl text-[#F7D05A] text-center font-bold">
            Ria
          </p>
          <p class="font-dancing-script text-5xl md:text-5xl text-[#F7D05A] text-center">&</p>
          <p class="font-dancing-script text-7xl md:text-8xl text-[#F7D05A] text-center font-bold">
            Kris
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p class="font-montserrat text-xs text-white text-center">Kepada</p>
          <span
            class="bg-[#D9D9D9]/13 mt-2 capitalize inline-block text-center font-montserrat text-lg text-white font-extrabold py-1 px-12 rounded-lg"
          >
            {{ name || '' }}
          </span>
          <button
            @click="handleOpen"
            class="bg-[#F7D05A] flex items-center gap-2 font-montserrat px-8 py-2 rounded-full font-extrabold mt-8 text-sm text-[#2d3129]"
          >
            <Icon name="simple-line-icons:envolope-letter" class="size-5 text-[#2d3129]" />
            Buka Undangan
          </button>
        </div>
      </div>

      <span
        class="absolute bottom-4 left-1/2 transform -translate-x-1/2 font-montserrat text-xs text-white"
      >
        TiedTheKnot
      </span>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()
const emit = defineEmits(['open'])

const name = route.query.name

const handleOpen = () => {
  emit('open')
}
</script>

<style></style>
