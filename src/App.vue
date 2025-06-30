<script setup>
import Navbar from './components/navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Timeline from './components/Timeline.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-900 text-white">
    <Navbar />

    <!-- MAIN KONTEN DORONG FOOTER -->
    <main class="flex-grow">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </main>

    <!-- FOOTER SELALU DI BAWAH -->
    <Footer />
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  scroll-behavior: smooth;
}
</style>
