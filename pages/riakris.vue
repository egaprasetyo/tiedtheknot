<template>
  <div class="overflow-hidden">
    <div
      class="hidden md:block absolute inset-0 -z-10 h-full w-full bg-[fffef8] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
    ></div>
    <div class="max-w-[500px] mx-auto">
      <Transition name="slide" mode="out-in">
        <HeroSection v-show="!isOpen" @open="handleOpen" key="hero" ref="invitationRef" />
      </Transition>

      <Transition name="slide" mode="out-in">
        <div v-if="isOpen" key="invitation" class="min-h-screen">
          <BibleSection />
          <GroomsSection />
          <InformationWedding />
          <Gallery />
          <Rsvp />
          <Gift v-if="isGift === 'true'" />
          <WishesForm />
          <Footer />
          <CreatedBy />
          <button
            @click="toggleMute"
            class="fixed bottom-4 right-4 z-50 bg-[#4b7555] flex items-center justify-center rounded-full size-10"
            :class="{ 'bg-[#4b7555]/50': isMuted }"
          >
            <Icon name="lets-icons:sound-max" class="size-12 text-[#ffffff]" />
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'The Wedding Invitation of Ria & Kris'
})

const { $refreshAos, $refreshHardAos } = useNuxtApp()
const device = useDevice()
const route = useRoute()
const isOpen = ref(false)

const isGift = route.query.ftvm

onMounted(() => {
  $refreshAos()
  $refreshHardAos()
})

const handleOpen = () => {
  isOpen.value = true
  $refreshAos()
  $refreshHardAos()
}

const invitationRef = ref(null)
const isMuted = ref(false)

function toggleMute() {
  isMuted.value = !isMuted.value

  if (isMuted.value) {
    invitationRef.value?.muteAudio()
  } else {
    invitationRef.value?.unmuteAudio()
  }
}
</script>

<style>
body {
  background-color: #fffef8;
}

.scrollbar-hide {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
