<template>
  <div class="relative">
    <div class="relative">
      <NuxtImg
        provider="imagekit"
        src="/hero-image-2.png"
        alt="Woman and Men"
        class="w-full h-auto object-cover"
      />
      <NuxtImg provider="imagekit" src="/Wave-green-1.png" class="w-full absolute bottom-0 z-20" />

      <div
        class="absolute top-0 -bottom-[100px] left-0 right-0 z-10 bg-gradient-to-t from-[#70A07C]/100 from-0% to-[#FFFFFF]/5 to-100%"
      ></div>
    </div>
    <div class="relative z-20 -mt-4 bg-[#70A07C] h-[350px] px-4 flex justify-center items-center">
      <div class="-mt-8">
        <p
          data-aos="zoom-in"
          data-aos-duration="800"
          class="text-center text-[#FFFEF8] text-lg font-playwrite-au-sa"
        >
          “Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan
          menyempurnakan”
        </p>
        <span
          data-aos="fade-up"
          data-aos-duration="800"
          class="text-sm text-[#FFFEF8] block text-center mt-6"
        >
          Kolese 3:14
        </span>
      </div>
    </div>
    <!-- right -->
    <NuxtImg
      provider="imagekit"
      src="/flower4.png"
      class="w-[85px] h-auto absolute -bottom-[50px] z-20 right-0 animate-sway rotate-90"
    />

    <NuxtImg
      provider="imagekit"
      src="/flower3.png"
      class="w-[145px] h-auto absolute -bottom-[100px] z-30 right-3 animate-sway rotate-35 scale-x-[-1]"
    />

    <NuxtImg
      provider="imagekit"
      src="/flower1.png"
      class="w-[165px] h-auto absolute -bottom-[90px] z-20 right-[0] animate-sway -rotate-50 scale-x-[-1]"
    />

    <!-- left -->
    <NuxtImg
      provider="imagekit"
      src="/flower4.png"
      class="w-[85px] h-auto absolute -bottom-[50px] z-20 left-0 animate-sway -rotate-90 scale-x-[-1]"
    />

    <NuxtImg
      provider="imagekit"
      src="/flower3.png"
      class="w-[145px] h-auto absolute -bottom-[100px] z-30 left-3 animate-sway -rotate-40"
    />

    <NuxtImg
      provider="imagekit"
      src="/flower2.png"
      class="w-[170px] h-auto absolute -bottom-[100px] z-20 left-[25%] animate-sway rotate-200 scale-x-[-1]"
    />

    <NuxtImg
      provider="imagekit"
      src="/flower1.png"
      class="w-[165px] h-auto absolute -bottom-[90px] z-30 left-[30%] animate-sway rotate-40"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
