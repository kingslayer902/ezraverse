<template>
  <section
    id="timeline"
    class="bg-gray-950 text-white px-6 py-16 text-center"
  >
    <h2
      class="text-3xl md:text-4xl font-bold mb-12"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      🕒 My Journey
    </h2>

    <div class="max-w-2xl mx-auto space-y-6 text-left border-l-2 border-blue-500 pl-6">
      <div
        v-for="(item, index) in timeline"
        :key="index"
        class="relative"
        data-aos="fade-up"
        :data-aos-delay="index * 150"
        data-aos-duration="700"
      >
        <div
          class="absolute -left-[1.1rem] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"
        ></div>
        <h3 class="text-xl font-semibold">{{ item.year }}</h3>
        <p class="text-gray-400">{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const timeline = [
  { year: '2019–2022', desc: 'Studied Social Science at MAN 3 Jakarta' },
  { year: '2023', desc: 'Started self-learning frontend development (HTML, CSS, JS)' },
  { year: '2023–Now', desc: 'Studying Information Technology at Bina Sarana Informatika (BSI)' },
  { year: '2023–2024', desc: 'Worked as office administrator at Moedtjitaba, handling daily administrative operations' },
  { year: '2024–Now', desc: 'Joined IFCA, collaborated with team on Vue-based projects' },
  { year: '2025', desc: 'Built NexAC (AC catalog site) & Dainsleif (dark-themed frontend demo)' }
]
</script>

<!-- animate.css udah ga dipake -->
