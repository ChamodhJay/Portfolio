<template>
        <div>
            <!-- Navbar -->
            <Navbar />
    
            <!-- Hero Section -->
            <section id="home"
                class="flex items-center justify-center min-h-screen px-6 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 sm:px-8 lg:px-12">
                <div class="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
    
                    <!-- Profile Picture -->
                    <div class="w-48 h-48 overflow-hidden rounded-full shadow-lg sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                        <img src="./assets/img/img1.jpg" alt="Chamodh Jayasinghe" class="object-cover w-full h-full">
                    </div>
    
                    <!-- Message -->
                    <div class="text-center lg:text-left">
                        <h1 class="relative text-4xl font-bold sm:text-5xl lg:text-6xl animate-fade-in">
                            <span class="text-yellow-400 text-7xl lg:text-8xl drop-shadow-lg">H</span>ello, I'm
                            <span class="text-yellow-400 text-7xl lg:text-8xl drop-shadow-lg">C</span>hamodh
                            <span class="text-yellow-400 text-7xl lg:text-8xl drop-shadow-lg">J</span>ayasinghe
                        </h1>
                        <p style="margin-top: 1rem; font-size: 1.5rem; animation: slideInLeft 1.5s ease-in-out;">
                            <span
                                style="font-size: 2rem; font-weight: bold; color: #ffe100; 
                    display: inline-block; overflow: hidden; white-space: nowrap;
                    border-right: 2px solid #fff; 
                    animation: typewriter 4s steps(40, end) 1s 1 normal both, 
                               blinkCursor 0.75s step-end infinite;">
                                Full Stack Developer
                            </span>
                        </p>
    
                        <NuxtLink to="#aboutme" 
                            class="inline-block px-8 py-3 mt-6 text-purple-700 transition-all duration-300 ease-in-out bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-105">
                            About Me
                        </NuxtLink>
    
                     
                    </div>
                </div>
            </section>
    
           <Aboutme/>
           
           <projects/>
    
           <Currentprojects/>
           
    
    
            <!-- Contact Section -->
            <section id="contact" class="py-16 text-white bg-gray-800">
                <div class="container mx-auto text-center">
                    <h2 class="mb-8 text-4xl font-bold">Get in Touch</h2>
                    <p class="mb-8 text-xl">Feel free to reach out to me via email or on social media!</p>
                    <div class="space-x-4">
                        <a href="mailto:nimeshacchamodh123@gmail.com"
                        target="_blank"     class="px-6 py-3 transition-all bg-blue-500 rounded-full hover:bg-blue-600">Email Me</a>
                        <a href="https://www.linkedin.com/in/chamodh-jayasinghe-b27679278/"
                        target="_blank"     class="px-6 py-3 transition-all bg-green-500 rounded-full hover:bg-green-600">LinkedIn</a>
                        <a href="https://github.com/ChamodhJay"
                        target="_blank"    class="px-6 py-3 transition-all bg-gray-500 rounded-full hover:bg-gray-600">GitHub</a>
                    </div>
                
                </div>
            </section>
    
            <!-- Footer -->
            <footer class="py-6 text-center text-white bg-gray-900">
        <div class="flex items-center justify-center space-x-2">
            <img src="/images/logo.png" alt="Site Logo" class="logo">
            <p>© 2024 CjaySolutions. All rights reserved.</p>
        </div>
    </footer>
    
        </div>
    </template>
    
    <script setup>
    import Navbar from '@/components/Navbar.vue'
    import Projects from '@/components/Projects.vue'
    import Currentprojects from '@/components/Ongoingprojects.vue'
    import Aboutme from '@/components/Aboutme.vue'
    
       
     
    </script>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Protest+Guerrilla&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Protest+Guerrilla&family=SUSE:wght@100..800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Protest+Guerrilla&family=SUSE:wght@100..800&family=Space+Grotesk:wght@300..700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Protest+Guerrilla&family=Righteous&family=SUSE:wght@100..800&family=Space+Grotesk:wght@300..700&display=swap');
    
        /* font-family: "Righteous", sans-serif;
      font-weight: 400;
      font-style: normal; */
        html {
            scroll-behavior: smooth;
        }
    
        h1 {
            font-family: "Protest Guerrilla", sans-serif;
        }
    
        h2,
        span,
        a {
            /* font-family: "Space Grotesk", sans-serif; */
            font-family: "Righteous", sans-serif;
    
        }
    
        h3,
        p {
            font-family: "Space Grotesk", sans-serif;
        }
    
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
    
            to {
                opacity: 1;
            }
        }
    
        @keyframes slideInLeft {
            from {
                transform: translateX(-100%);
                opacity: 0;
            }
    
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    
        @keyframes typewriter {
            from {
                width: 0;
            }
    
            to {
                width: 100%;
            }
        }
    
        @keyframes blinkCursor {
            from {
                border-color: transparent;
            }
    
            to {
                border-color: white;
            }
        }
    
    
        
    </style>
    