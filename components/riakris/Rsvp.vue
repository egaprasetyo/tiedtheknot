<template>
  <section class="px-4 pt-30 pb-20">
    <div>
      <h3
        data-aos="zoom-in"
        data-aos-offset="10"
        data-aos-duration="1500"
        class="font-dancing-script text-3xl text-[#6B7462] text-center font-bold"
      >
        RSVP
      </h3>
      <p
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-duration="2000"
        class="text-center mt-4 font-stix-two-text text-[#343830]"
      >
        Kami sangat menantikan kehadiran Bapak/ Ibu/ Saudara/i di pernikahan kami. Mohon konfirmasi
        kehadiran Bapak/ Ibu/ Saudara/i. Terima kasih.
      </p>
    </div>

    <div
      v-if="!isSubmited"
      data-aos="zoom-in"
      data-aos-offset="10"
      data-aos-duration="1800"
      class="mt-14 flex flex-col items-center h-[300px]"
    >
      <div class="mb-8 flex gap-4 w-full">
        <!-- Hadir -->
        <label class="border border-[#6B7462] rounded cursor-pointer flex items-center gap-2 w-1/2">
          <input
            type="radio"
            name="attendance"
            v-model="attendance"
            value="hadir"
            class="hidden peer"
          />
          <span
            class="py-2 font-stix-two-text text-center w-full text-[#6B7462] font-semibold peer-checked:text-white peer-checked:bg-[#6B7462] rounded"
          >
            Hadir
          </span>
        </label>

        <!-- Tidak Hadir -->
        <label class="border border-[#6B7462] rounded cursor-pointer flex items-center gap-2 w-1/2">
          <input
            type="radio"
            name="attendance"
            v-model="attendance"
            value="tidak_hadir"
            class="hidden peer"
          />
          <input type="radio" name="attendance" value="tidak_hadir" class="hidden peer" />
          <span
            class="py-2 font-stix-two-text text-center w-full text-[#6B7462] font-semibold peer-checked:text-white peer-checked:bg-[#6B7462] rounded"
          >
            Tidak Hadir
          </span>
        </label>
      </div>

      <Transition name="slide">
        <div v-if="attendance === 'hadir'" class="w-full">
          <label for="name" class="font-stix-two-text text-[#6B7462] font-semibold">
            Jumlah Tamu
          </label>
          <select
            id="guestCount"
            v-model="guestCount"
            class="border border-[#6B7462] w-full py-2 px-4 mt-2 rounded-lg text-[#6B7462] bg-white focus:outline-none focus:ring-1 focus:ring-[#6B7462] appearance-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </Transition>

      <button
        @click="submitRsvp"
        class="bg-[#8B9182]/90 text-white py-2 px-4 rounded-lg mt-8 w-1/2 font-stix-two-text mx-auto"
      >
        Kirim
      </button>
    </div>
    <div v-else class="mt-14">
      <p
        class="text-center mt-4 font-stix-two-text text-[#343830] py-3 px-4 border border-[#6B7462] rounded"
      >
        Terima kasih telah mengisi form RSVP kami
      </p>
    </div>
  </section>
</template>

<script setup>
const route = useRoute()
const client = useSupabaseClient()

const name = route.query.name
const attendance = ref('hadir')
const guestCount = ref('1')
const isSubmited = ref(false)

const submitRsvp = async () => {
  const payload = {
    name,
    attendance: attendance.value,
    guestCount: guestCount.value
  }

  const { data, error } = await client.from('guest').insert({
    name: payload.name,
    attendance: payload.attendance,
    guest_count: payload.guestCount
  })

  isSubmited.value = true

  if (error) throw error
}
</script>

<style></style>
