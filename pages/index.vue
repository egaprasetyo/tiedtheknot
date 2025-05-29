<template>
  <div class="min-h-screen gradient-bg">
    <!-- Hero Section -->
    <section
      id="home"
      class="relative flex items-center justify-center min-h-[100dvh] pt-16 overflow-hidden"
    >
      <!-- Decorative Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute w-16 h-16 bg-pink-200 rounded-full floating top-20 left-10 opacity-30"
        ></div>
        <div
          class="absolute w-12 h-12 bg-purple-200 rounded-full floating-delayed top-32 right-20 opacity-40"
        ></div>
        <div
          class="absolute w-20 h-20 rounded-full opacity-25 floating bottom-32 left-1/4 bg-rose-200"
        ></div>
        <div
          class="absolute bg-pink-300 rounded-full floating-delayed bottom-20 right-1/3 w-14 h-14 opacity-35"
        ></div>

        <!-- Sparkles -->
        <div class="sparkle top-1/4 left-1/4" style="animation-delay: 0s"></div>
        <div class="sparkle top-1/3 right-1/4" style="animation-delay: 0.5s"></div>
        <div class="sparkle bottom-1/3 left-1/3" style="animation-delay: 1s"></div>
        <div class="sparkle bottom-1/4 right-1/3" style="animation-delay: 1.5s"></div>
      </div>

      <div class="container relative z-10 px-4 mx-auto text-center sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto fade-in">
          <!-- Save the Date -->
          <div
            class="mb-10 text-sm tracking-widest text-gray-600 uppercase font-inter sm:text-base"
          >
            Selamat Datang DI
          </div>

          <!-- Names -->
          <h1
            class="mb-10 text-5xl font-bold text-pink-500 font-dancing sm:text-6xl lg:text-8xl font-kaushan"
          >
            Tied The Knot
            <!-- <span class="text-pink-500 heart-pulse">♥</span> -->
          </h1>

          <!-- CTA Buttons -->
          <div class="flex items-center justify-center gap-4">
            <button
              class="px-8 py-2 text-sm font-medium text-white rounded-full shadow-lg cursor-pointer md:text-lg btn-hover bg-gradient-to-r from-pink-500 to-rose-500 font-inter hover:shadow-xl"
            >
              Contact Us
            </button>
            <button
              class="px-8 py-2 text-sm font-medium text-gray-800 border border-pink-200 rounded-full shadow-lg cursor-pointer md:text-lg btn-hover bg-white/80 backdrop-blur-sm font-inter hover:bg-white"
            >
              Contact Us
            </button>
          </div>

          <!-- Quote -->
          <div class="max-w-2xl mx-auto mt-12 md:mt-16">
            <blockquote
              class="text-lg italic leading-relaxed text-gray-700 font-playfair sm:text-xl"
            >
              "Two souls with but a single thought, two hearts that beat as one."
            </blockquote>
            <cite class="block mt-4 text-sm text-gray-500 font-inter">— John Keats</cite>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.gradient-bg {
  background: linear-gradient(
    135deg,
    #fdf2f8 0%,
    #fce7f3 25%,
    #fbcfe8 50%,
    #f3e8ff 75%,
    #e0e7ff 100%
  );
}

.floating {
  animation: floating 6s ease-in-out infinite;
}

.floating-delayed {
  animation: floating 6s ease-in-out infinite;
  animation-delay: -3s;
}

@keyframes floating {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.heart-pulse {
  animation: heartPulse 2s ease-in-out infinite;
}

@keyframes heartPulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.sparkle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #fbbf24;
  border-radius: 50%;
  animation: sparkle 2s linear infinite;
}

@keyframes sparkle {
  0%,
  100% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}

.btn-hover {
  transition: all 0.3s ease;
}

.btn-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
</style>
