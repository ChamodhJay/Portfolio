<template>
        <div class="container mx-auto px-4 py-8">
          <h1 class="text-3xl font-bold">{{ project.title }}</h1>
          <p class="mt-4 text-gray-600">{{ project.description }}</p>
        </div>
      </template>
      
      <script setup>
      const project = { title: 'Project Title', description: 'Detailed project description...' }
      </script>
      