<template>
  <div class="overflow-hidden">
    <!-- Transition Hero Section (fade out) -->

    <Transition name="slide" mode="out-in">
      <HeroSection v-show="!isOpen" @open="handleOpen" key="hero" ref="invitationRef" />
    </Transition>

    <!-- Transition Content (fade in) -->
    <Transition name="slide" mode="out-in">
      <div v-show="isOpen" key="invitation" class="min-h-screen">
        <BibleSection />
        <GroomsSection />
        <InformationWedding />
        <Gallery />
        <Rsvp />
        <Gift />
        <WishesForm />
        <Footer />
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
</template>

<script setup>
const { $refreshAos, $refreshHardAos } = useNuxtApp()
const device = useDevice()
const isOpen = ref(false)

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
</style>
