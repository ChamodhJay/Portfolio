<!-- Navbar.vue -->
<template>
  <nav class="py-4 text-white bg-gray-800">
    <div class="container flex items-center justify-between mx-auto">
      <div class="flex items-center">
        <img src="/images/logo.png" alt="Site Logo" class="mr-2 logo" />
        <NuxtLink to="/" class="text-2xl font-bold">CJAY</NuxtLink>
      </div>
      <!-- Navigation Links -->
      <ul class="hidden space-x-6 md:flex">
        <li>
          <a href="#home" class="flex items-center space-x-2 hover:text-gray-400">
            <i class="fas fa-home"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#projects" class="flex items-center space-x-2 hover:text-gray-400">
            <i class="fas fa-folder-open"></i>
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="#contact" class="flex items-center space-x-2 hover:text-gray-400">
            <i class="fas fa-envelope"></i>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>



<script>
export default {
  mounted() {
    // Load Font Awesome if not already loaded
    if (!document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
      document.head.appendChild(link);
    }
  },
};
</script>

<style>
.logo {
  width: 70px; /* Adjust width as needed */
  height: auto; /* Keep aspect ratio */
}
</style>
