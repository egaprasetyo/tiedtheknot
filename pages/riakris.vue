<template>
  <div class="overflow-hidden bg-[#FFFEF8]">
    <!-- Transition Hero Section (fade out) -->
    <Transition name="slide" mode="out-in">
      <HeroSection v-if="!isOpen" @open="handleOpen" key="hero" />
    </Transition>

    <!-- Transition Content (fade in) -->
    <Transition name="slide" mode="out-in">
      <div v-if="isOpen" key="invitation" class="min-h-screen">
        <BibleSection />
        <GroomsSection />
        <InformationWedding />
        <Gallery />
        <Rsvp />
        <WishesForm />
        <Footer />
      </div>
    </Transition>
  </div>
</template>

<script setup>
const device = useDevice()
const isOpen = ref(true)

const handleOpen = () => {
  isOpen.value = true
}
</script>

<style>
body {
  background-color: #151614;
}
</style>
