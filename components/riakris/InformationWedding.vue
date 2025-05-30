<template>
  <section>
    <NuxtImg provider="imagekit" src="/wave-2.png" class="w-full opacity-20" />
    <div class="bg-linear-to-b from-[#6B7462]/20 to-[FFFEF8]/0 pb-20 pt-10 space-y-24">
      <div>
        <h3
          data-aos="fade-down"
          data-aos-duration="1500"
          class="font-beau-rivage text-4xl text-[#394231] text-center"
        >
          Pemberkatan Pernikahan
        </h3>
        <div
          data-aos="zoom-out-down"
          data-aos-duration="1800"
          class="flex flex-col items-center mt-6"
        >
          <p class="font-stix-two-text text-base max-w-xs text-[#6B7462] text-center">
            6 Juni 2025 <br />
            GKPA Depok <br />
            Jl. Kenanga No. 12, Kec. Pancoran Mas, Kota <br />
            Depok, Jawa Barat <br />
            Pukul 09.00 - 10.00 WIB
          </p>
          <NuxtLink
            to="https://maps.app.goo.gl/koy5TGGaW3cp1TEU8?g_st=com.google.maps.preview.copy"
            class="flex items-center justify-center gap-1 font-montserrat text-sm text-[#FFFEF8] mt-5 py-2 px-8 font-bold rounded-full bg-[#6B7462]"
          >
            <Icon name="mdi:location" class="size-6 text-[#FFFEF8]" />
            Buka Peta
          </NuxtLink>
        </div>
      </div>
      <div>
        <h3
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          class="font-beau-rivage text-4xl text-[#394231] text-center"
        >
          Resepsi
        </h3>
        <div
          data-aos="zoom-out-up"
          data-aos-duration="1800"
          class="flex flex-col items-center mt-6"
        >
          <p class="font-stix-two-text text-base max-w-xs text-[#6B7462] text-center">
            6 Juni 2025 <br />
            Gedung RONATAMA Conventio Hall <br />
            Jl. Dahlia No. 16A, Kec. Pancoran Mas,Kota <br />
            Depok, Jawa Barat <br />
            Pukul 11.00 - 14.00 WIB
          </p>
          <NuxtLink
            to="https://maps.app.goo.gl/xUXbboZvkKd4tDBq6?g_st=com.google.maps.preview.copy"
            class="flex items-center justify-center gap-1 font-montserrat text-sm text-[#FFFEF8] mt-5 py-2 px-8 font-bold rounded-full bg-[#6B7462]"
          >
            <Icon name="mdi:location" class="size-6 text-[#FFFEF8]" />
            Buka Peta
          </NuxtLink>
        </div>
      </div>
      <div class="flex justify-center px-8">
        <div
          data-aos="flip-up"
          data-aos-duration="2000"
          class="bg-[#8B9182] py-2.5 px-6 w-full rounded-lg flex items-center justify-around"
        >
          <div class="flex flex-col items-center justify-center">
            <span class="font-stix-two-text text-3xl text-[#FFFEF8]">{{ timeLeft.days }}</span>
            <span class="font-beau-rivage text-2xl text-[#FFFEF8]">Hari</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <span class="font-stix-two-text text-3xl text-[#FFFEF8]">{{ timeLeft.hours }}</span>
            <span class="font-beau-rivage text-2xl text-[#FFFEF8]">Jam</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <span class="font-stix-two-text text-3xl text-[#FFFEF8]">{{ timeLeft.minutes }}</span>
            <span class="font-beau-rivage text-2xl text-[#FFFEF8]">Menit</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <span class="font-stix-two-text text-3xl text-[#FFFEF8]">{{ timeLeft.seconds }}</span>
            <span class="font-beau-rivage text-2xl text-[#FFFEF8]">Detik</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const dayjs = useDayjs()

const timeLeft = ref({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00'
})

const startDate = new Date()
const endDate = dayjs('2025-06-06 09:00:00')

let intervalId

const updateCountdown = () => {
  const now = new Date()

  if (now < startDate) {
    // Countdown belum mulai
    timeLeft.value = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    }
    return
  }

  const total = endDate - now

  if (total <= 0) {
    timeLeft.value = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    }
    clearInterval(intervalId)
    return
  }

  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))

  timeLeft.value = {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0')
  }
}

onMounted(() => {
  updateCountdown()
  intervalId = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style></style>
