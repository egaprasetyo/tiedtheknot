<template>
  <section data-aos="zoom-out-down" data-aos-duration="1200" class="relative py-14 mt-28 px-4">
    <!-- <div class="absolute top-[10px] left-1/2 -translate-1/2 z-10">
      <NuxtImg provider="imagekit" src="/flower8.png" class="min-w-[350px] h-auto" />
    </div> -->
    <div class="relative z-20 bg-[#6B7462] px-4 py-8 rounded-xl flex flex-col items-center">
      <h3 class="font-dancing-script text-2xl text-[#FFFEF8] text-center max-w-[300px]">
        Kirimkan doa & ucapan kepada kedua mempelai
      </h3>
      <div v-if="!isSubmited" class="w-full mt-8">
        <textarea
          rows="4"
          type="text"
          class="border border-[#FFFEF8] w-full py-2 px-4 mt-2 rounded-lg bg-[#FFFEF8] text-[#6B7462] focus:outline-none focus:ring-1 focus:ring-[#6B7462] appearance-none"
          id="wish"
          placeholder="Ucapan untuk kedua mempelai"
          v-model="wish"
        />
        <button
          @click="submitWish"
          class="bg-[#8B9182]/90 text-white py-2 px-4 rounded-lg mt-8 w-full font-stix-two-text mx-auto"
        >
          Kirim
        </button>
      </div>
      <div v-else class="mt-14">
        <p
          class="text-center mt-4 font-stix-two-text text-[#FFFEF8] py-3 px-4 border border-[#FFFEF8] rounded"
        >
          Terima kasih telah mengisi form ucapan kami
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()
const client = useSupabaseClient()

const wish = ref('')
const isSubmited = ref(false)
const name = route.query.name

const submitWish = async () => {
  if (!wish.value) return

  const { data, error } = await client.from('wishes').insert({
    name: name,
    wish: wish.value
  })

  isSubmited.value = true

  if (error) throw error
}
</script>

<style></style>
