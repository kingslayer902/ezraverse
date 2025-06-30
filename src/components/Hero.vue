<template>
  <section
    id="hero"
    class="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-4"
  >
    <h1
      class="text-4xl md:text-6xl font-bold"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      Welcome to <span class="text-blue-400">EzraVerse</span>
    </h1>

    <p
      class="mt-4 text-lg md:text-xl text-gray-300"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      My interactive portfolio universe 🌌
    </p>

    <button
      @click="scrollToNext"
      class="mt-12 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-full"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      🚀 Explore
    </button>
  </section>
</template>

<script setup>
function scrollToNext() {
  const next = document.getElementById('about')
  if (next) next.scrollIntoView({ behavior: 'smooth' })
}
</script>
