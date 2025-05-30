<template>
  <div>
    <div class="relative">
      <NuxtImg
        provider="imagekit"
        src="/hero-image-2.png"
        alt="Woman and Men"
        class="w-full h-auto object-cover"
      />
      <div
        class="absolute top-0 bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-[#6B7462]/100 from-5% to-[#C9DAB8]/5"
      ></div>
    </div>
    <div class="bg-[#6B7462] h-[350px] px-4 flex justify-center items-center">
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
    <NuxtImg
      src="https://ik.imagekit.io/2rrf00fq0/Tied%20The%20Knot/iPhone%2013%20&%2014%20-%203.png"
      class="w-full -mt-1"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
