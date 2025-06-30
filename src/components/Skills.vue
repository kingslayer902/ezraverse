<template>
  <section
    id="skills"
    class="min-h-screen bg-gray-900 text-white px-6 py-16 text-center"
  >
    <h2
      class="text-3xl md:text-4xl font-bold mb-12"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      🛠 My Skillset
    </h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="group flex flex-col items-center relative"
        data-aos="zoom-in"
        :data-aos-delay="index * 100"
        data-aos-duration="600"
      >
        <img
          :src="skill.icon"
          :alt="skill.name"
          class="w-16 h-16 mb-2 object-contain aspect-square"
        />
        <p class="text-sm text-gray-300">{{ skill.name }}</p>

        <!-- Tooltip Hover -->
        <div
          class="absolute bottom-14 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition"
        >
          Level: {{ skill.level }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'HTML', icon: '/skills/html.png', level: 'Expert' },
  { name: 'CSS', icon: '/skills/css.png', level: 'Advanced' },
  { name: 'JavaScript', icon: '/skills/javascript.png', level: 'Advanced' },
  { name: 'Vue', icon: '/skills/vue.png', level: 'Intermediate' },
  { name: 'Tailwind', icon: '/skills/tailwind.png', level: 'Advanced' },
  { name: 'Git', icon: '/skills/git.png', level: 'Intermediate' },
  { name: 'GitHub', icon: '/skills/github.png', level: 'Intermediate' },
  { name: 'Netlify', icon: '/skills/netlify.png', level: 'Beginner' },
]
</script>
