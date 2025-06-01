<template>
  <section class="relative py-32">
    <NuxtImg
      provider="imagekit"
      src="/flower10.png"
      class="min-w-[485px] h-auto absolute top-0 left-1/2 -translate-x-1/2 z-10"
    />

    <NuxtImg
      provider="imagekit"
      src="/flower10.png"
      class="min-w-[485px] h-auto absolute bottom-0 left-1/2 -translate-x-1/2 z-10 rotate-180"
    />

    <NuxtImg
      provider="imagekit"
      src="/flower10.png"
      class="min-w-[485px] h-auto absolute -bottom-[120px] left-1/2 -translate-x-1/2 z-10"
    />
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-offset="10"
      class="px-4 text-center py-20"
    >
      <h3 class="font-dancing-script text-3xl text-[#6B7462] text-center">WEDDING GIFT</h3>
      <p class="font-stix-two-text text-[#343830] mt-4">
        Kehadiran dan doa restu Anda merupakan karunia bagi kami. Namun jika memberi adalah ungkapan
        bentuk kasih, Anda dapat memberikannya secara cashless.
      </p>

      <button
        @click="handleOpen"
        class="py-2 px-6 bg-[#8B9182]/90 text-white rounded-full mt-8 font-stix-two-text mx-auto hover:bg-[#6B7462]"
      >
        Kirim Hadiah
      </button>
    </div>
    <Transition name="slide">
      <div v-if="openGift" class="px-8 space-y-12">
        <div class="bg-[#70A07C]/20 px-4 py-6 rounded-lg flex flex-col items-center">
          <NuxtImg provider="imagekit" src="/mandiri-logo.png" class="w-[150px] h-auto mx-auto" />
          <button
            @click="handleCopyMandiri"
            class="flex items-center justify-center px-6 py-2 text-sm font-stix-two-text mt-4 bg-[#70A07C] text-white rounded cursor-pointer"
            :disabled="copiedMandiri"
          >
            {{ copiedMandiri ? 'Disalin!' : '1240001006262' }}
            <Icon name="fa-solid:copy" class="size-5 text-white ml-2" />
          </button>
          <p class="text-[#394231] font-semibold mt-6">A/n Kristian Mangunsong</p>
        </div>

        <div class="bg-[#70A07C]/20 px-4 py-6 rounded-lg flex flex-col items-center">
          <NuxtImg provider="imagekit" src="/BCA-logo.png" class="w-[150px] h-auto mx-auto" />
          <button
            @click="handleCopyBca"
            class="flex items-center justify-center px-6 py-2 text-sm font-stix-two-text mt-4 bg-[#70A07C] text-white rounded cursor-pointer"
            :disabled="copiedBca"
          >
            {{ copiedBca ? 'Disalin!' : '4581346527' }}
            <Icon name="fa-solid:copy" class="size-5 text-white ml-2" />
          </button>
          <p class="text-[#394231] font-semibold mt-6">A/n Basaria Nurhayati Pakpahan</p>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
const openGift = ref(false)

const handleOpen = () => {
  openGift.value = !openGift.value
}

const copiedMandiri = ref(false)
const handleCopyMandiri = () => {
  const accountNumber = '1240001006262'
  navigator.clipboard
    .writeText(accountNumber)
    .then(() => {
      copiedMandiri.value = true
      setTimeout(() => {
        copiedMandiri.value = false
      }, 2000)
    })
    .catch(err => {
      console.error('Gagal menyalin teks:', err)
    })
}

const copiedBca = ref(false)
const handleCopyBca = () => {
  const accountNumber = '4581346527'
  navigator.clipboard
    .writeText(accountNumber)
    .then(() => {
      copiedBca.value = true
      setTimeout(() => {
        copiedBca.value = false
      }, 2000)
    })
    .catch(err => {
      console.error('Gagal menyalin teks:', err)
    })
}
</script>

<style></style>
