<template>
  <div class="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
    <!-- Header -->
    <div class="bg-white shadow-lg border-b-4 border-rose-200">
      <div class="max-w-4xl mx-auto px-6 py-8">
        <div class="text-center">
          <div class="flex justify-center items-center gap-3">
            <svg class="text-rose-500 w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
            <h1 class="text-2xl font-serif text-gray-800">Wedding Wishes</h1>
            <svg class="text-rose-500 w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-6 py-8">
      <!-- Wishes Counter -->
      <div class="text-center mb-8">
        <div
          class="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-rose-100"
        >
          <svg class="text-rose-500 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
          <span class="text-gray-700 font-semibold">{{ wishes.length }} Beautiful Wishes</span>
        </div>
      </div>

      <!-- Wishes List -->
      <div class="space-y-6">
        <div
          v-for="wish in wishes"
          :key="wish.id"
          class="bg-white rounded-2xl shadow-lg p-8 border border-rose-100 hover:shadow-xl transition-shadow duration-300"
        >
          <h4 class="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
            <svg class="text-rose-400 w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
            {{ wish.name }}
          </h4>

          <p class="text-gray-700 leading-relaxed italic border-l-4 border-rose-200 pl-4">
            "{{ wish.wish }}"
          </p>

          <div class="flex items-center justify-end text-gray-500 text-sm mt-4 gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {{ dayjs(wish.created_at).format('DD MMMM YYYY') }}
          </div>
        </div>
      </div>

      <!-- Decorative Footer -->
      <div class="text-center mt-16 py-8">
        <div class="flex justify-center items-center gap-2 text-rose-400">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <p class="text-gray-600 font-serif text-lg">With Love & Best Wishes</p>

          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </div>
        <p class="text-gray-600 font-serif text-lg my-2">For</p>
        <p class="text-gray-600 font-serif text-lg">Ria & Kris</p>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Wedding Wishes Ria & Kris'
})

const dayjs = useDayjs()

const client = useSupabaseClient()
const wishes = ref([])

const { data, error } = await client.from('wishes').select()
wishes.value = data
</script>

<style></style>
