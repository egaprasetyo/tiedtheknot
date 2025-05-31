<template>
  <section class="h-[100svh] w-full bg-[#6B7462] overflow-hidden">
    <div class="relative h-full">
      <NuxtImg
        provider="imagekit"
        src="/front-hero-2.png"
        class="w-full h-auto object-cover md:w-full md:h-auto lg:object-cover mx-auto"
        alt="Wedding"
      />
      <div
        class="absolute h-full top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-[#FFFFFF]/30 from-28% to-[#70A07C]/100 to-90%"
      ></div>
      <div class="w-full max-w-sm absolute top-[50%] left-1/2 transform -translate-x-1/2 z-50">
        <h1 class="font-montserrat text-xs md:text-sm text-[#070707] font-extrabold text-center">
          THE WEDDING INVITATION OF
        </h1>
        <div class="my-4 flex items-center justify-center gap-4 md:gap-10">
          <p class="font-dancing-script text-7xl text-[#F7D05A] text-center font-bold">Ria</p>
          <p class="font-dancing-script text-5xl text-[#F7D05A] text-center">&</p>
          <p class="font-dancing-script text-7xl text-[#F7D05A] text-center font-bold">Kris</p>
        </div>
        <div class="flex flex-col items-center">
          <p class="font-roboto font-bold text-[#070707] text-center">Dear,</p>
          <span
            class="capitalize inline-block text-center font-roboto text-2xl text-[#070707] font-extrabold py-1.5 px-14 rounded-lg"
          >
            {{ name || '' }}
          </span>
          <button
            @click="handleOpen"
            class="bg-[#4b7555] flex items-center gap-2 font-montserrat px-8 py-2.5 rounded-md font-extrabold mt-6 text-sm cursor-pointer text-white"
          >
            <Icon name="simple-line-icons:envolope-letter" class="size-6 md:size-6 text-white" />
            OPEN INVITATION
          </button>
        </div>
      </div>

      <!-- <NuxtLink
        to="/"
        class="absolute bottom-4 left-1/2 transform -translate-x-1/2 font-montserrat text-xs text-white"
      >
        TiedTheKnot
      </NuxtLink> -->
      <NuxtImg
        provider="imagekit"
        src="/flower3.png"
        alt="Flower"
        class="w-[190px] h-auto absolute -bottom-[140px] -left-[10px] z-10 opacity-85 animate-sway rotate-[10deg]"
      />

      <NuxtImg
        provider="imagekit"
        src="/flower1.png"
        alt="Flower"
        class="w-[180px] h-auto absolute -bottom-[130px] left-[20%] z-10 opacity-85 animate-sway rotate-[50deg]"
      />

      <NuxtImg
        provider="imagekit"
        src="/flower3.png"
        alt="Flower"
        class="w-[140px] h-auto absolute -bottom-[120px] right-[8%] z-10 opacity-85 animate-sway rotate-[180deg]"
      />

      <NuxtImg
        provider="imagekit"
        src="/flower1.png"
        alt="Flower"
        class="w-[170px] h-auto absolute -bottom-[70px] -right-[20px] z-10 opacity-85 animate-sway rotate-[180deg]"
      />

      <NuxtImg
        provider="imagekit"
        src="/flower2.png"
        alt="Flower"
        class="w-[180px] h-auto absolute -bottom-[130px] right-[30%] z-10 opacity-85 animate-sway -rotate-[40deg]"
      />

      <audio
        ref="bgm"
        src="https://ik.imagekit.io/2rrf00fq0/tiedtheknot/music-batak-version.mp3"
        loop
      ></audio>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()
const emit = defineEmits(['open'])

const name = route.query.name
const bgm = ref(null)

const handleOpen = () => {
  handlePlay()
  emit('open')
}

const handlePlay = () => {
  if (bgm.value) {
    bgm.value.play()
  }
}

// Add mute/unmute functions
function muteAudio() {
  if (bgm.value) bgm.value.muted = true
}

function unmuteAudio() {
  if (bgm.value) bgm.value.muted = false
}

// Expose methods to the parent
defineExpose({
  handlePlay,
  muteAudio,
  unmuteAudio
})
</script>

<style></style>
