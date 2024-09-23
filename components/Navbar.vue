<!-- Navbar.vue -->
<template>
  <nav class="py-4 text-white bg-gray-800">
    <div class="container flex items-center justify-between mx-auto">
      <div class="flex items-center">
      <img src="/images/logo.png" alt="Site Logo" class="mr-2 logo" />
    <NuxtLink to="/" class="text-2xl font-bold">CJAY</NuxtLink>
  </div>
      <ul class="flex space-x-6">
        <li><a href="#home" class="hover:text-gray-400">Home</a></li>
        <li><a href="#projects" class="hover:text-gray-400">Projects</a></li>
        <li><a href="#contact" class="hover:text-gray-400">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>


<script setup>

</script>

<style>
.logo {
  width: 70px; /* Adjust width as needed */
  height: auto; /* Keep aspect ratio */
}
</style>
