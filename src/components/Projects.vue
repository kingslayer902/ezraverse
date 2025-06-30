<template>
  <section
    id="projects"
    class="min-h-screen bg-gray-950 text-white px-6 py-16 text-center"
  >
    <h2
      class="text-3xl md:text-4xl font-bold mb-12"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      💼 Projects
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
    >
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-blue-500/40 transition transform hover:-translate-y-1"
        :data-aos="'fade-up'"
        :data-aos-delay="index * 150"
        data-aos-duration="700"
      >
        <img
          :src="project.image"
          :alt="project.name"
          class="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
        <p class="text-gray-400 text-sm">{{ project.description }}</p>
        <a
          :href="project.link"
          target="_blank"
          class="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition"
        >
          🔗 Visit
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: 'NexAC',
    description:
      'Explore a modern AC product catalog with WhatsApp ordering. Built with Vue & Tailwind, fully responsive.',
    link: 'https://boisterous-babka-2d5f21.netlify.app/',
    image: '/projects/nexac.png',
  },
  {
    name: 'Dainsleif',
    description:
      'A futuristic dark-themed landing page built with Vue. Experimental design with smooth animations.',
    link: 'https://lucky-wisp-9fd0ae.netlify.app/',
    image: '/projects/dainsleif.png',
  },
]
</script>

<style scoped>
/* animate.css udah gak dipakai */
</style>
