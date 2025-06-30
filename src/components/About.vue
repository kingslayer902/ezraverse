<template>
  <section
    id="about"
    class="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-950 text-white text-center"
  >
    <div class="max-w-2xl">
      <img
        src="/ezra-photo.png"
        alt="Ezra Photo"
        class="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 object-cover"
        data-aos="zoom-in"
        data-aos-duration="800"
      />

      <h2
        class="text-3xl font-bold mb-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Hi, I'm Ezra 👋
      </h2>

      <p
        class="text-gray-300 text-lg leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        I’m a frontend web developer from Jakarta with a strong focus on building clean, responsive, and interactive interfaces using modern tools like 
        <span class="text-white font-medium">Vue</span> and <span class="text-white font-medium">Tailwind CSS</span>.
        <br><br>
        I’ve worked on several real-world projects, including company profiles and digital product showcases, and I love bringing ideas to life through code.
        <br><br>
        Always striving to grow — both technically and personally — I’m currently exploring ways to level up my skills and contribute to impactful digital experiences.
      </p>

      <a
        href="/cv-ezra.pdf"
        target="_blank"
        class="inline-block mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        📄 Download CV
      </a>
    </div>
  </section>
</template>
