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
      </div>
    </Transition>
  </div>
</template>

<script setup>
const isOpen = ref(false)

const handleOpen = () => {
  isOpen.value = true
}
</script>

<style>
body {
  background-color: #151614;
}
</style>
