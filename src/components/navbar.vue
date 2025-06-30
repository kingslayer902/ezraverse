<template>
  <nav class="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur border-b border-gray-800 text-white z-50 shadow">
    <div class="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
      <h1
        class="text-xl font-bold text-blue-400 cursor-pointer select-none"
        @click="clickCount++"
      >
        EzraVerse 🌌
      </h1>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6 text-sm font-medium">
        <li><a href="#hero" class="hover:text-blue-400 transition">Home</a></li>
        <li><a href="#about" class="hover:text-blue-400 transition">About</a></li>
        <li><a href="#skills" class="hover:text-blue-400 transition">Skills</a></li>
        <li><a href="#projects" class="hover:text-blue-400 transition">Projects</a></li>
        <li><a href="#timeline" class="hover:text-blue-400 transition">Timeline</a></li>
        <li><a href="#contact" class="hover:text-blue-400 transition">Contact</a></li>
      </ul>

      <!-- Mobile Menu Toggle -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <ul
        v-if="isOpen"
        class="md:hidden px-6 pb-4 space-y-2 text-center text-sm font-medium bg-gray-950/90"
      >
        <li><a href="#hero" class="block hover:text-blue-400">Home</a></li>
        <li><a href="#about" class="block hover:text-blue-400">About</a></li>
        <li><a href="#skills" class="block hover:text-blue-400">Skills</a></li>
        <li><a href="#projects" class="block hover:text-blue-400">Projects</a></li>
        <li><a href="#timeline" class="block hover:text-blue-400">Timeline</a></li>
        <li><a href="#contact" class="block hover:text-blue-400">Contact</a></li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const clickCount = ref(0)
watch(clickCount, (val) => {
  if (val === 5) {
    alert('🌌 You found the EzraVerse secret! Keep coding, future legend!')
    clickCount.value = 0
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
