<template>
         <!-- Projects Section -->
         <section id="projects" class="py-16 bg-gray-100">
            <div class="container mx-auto">
                <h2 class="mb-12 text-4xl font-bold text-center">My Projects</h2>
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div v-for="project in projects" :key="project.id"
                        class="overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105">
                        <NuxtLink :to="project.link" :target="'_blank'" class="block">
                            <img :src="project.image" :alt="project.title" class="object-cover w-full h-48 mb-4" />
                        </NuxtLink>
                        <div class="p-6">
                            <h3 class="mb-4 text-2xl font-bold">{{ project . title }}</h3>
                            <div v-if="project.description.length > 200">
                                <p v-if="!project.isExpanded" class="text-gray-600">
                                    {{ project . description . substring(0, 200) + '...' }}</p>
                                <p v-else class="text-gray-600">{{ project . description }}</p>
                                <button @click="toggleDescription(project)" class="text-blue-500 hover:underline">
                                    {{ project . isExpanded ? 'See Less' : 'See More' }}
                                </button>
                            </div>
                            <div v-else>
                                <p class="text-gray-600">{{ project . description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>


<script setup>
import {ref} from 'vue'
const projects = ref([{
            id: 1,
            title: 'EMPLOYEE LEAVE MANAGEMENT SYSTEM',
            description: 'Pulathisi Leave Management System is a web-based application designed to streamline the process of managing employee leaves within an organization. Developed using PHP, HTML, CSS, JavaScript, and Bootstrap, this system offers an intuitive interface for employees and administrators to handle leave requests, approvals, and records efficiently.',
            image: '/images/pulathisi.png',
            link: 'https://github.com/ChamodhJay/Employee-Leave-Management-System-PHP',
            isExpanded: false
        },
        {
            id: 2,
            title: 'YOUTUBE VIDEO DOWNLOADER',
            description: 'This project is a simple YouTube Video Downloader built with Python, using Tkinter for the graphical interface. It allows users to download videos from YouTube by pasting the video URL, selecting the preferred video quality and format, and clicking "Download." The app supports multiple formats and resolutions, providing a smooth user experience with a real-time download progress bar. It also handles errors effectively, ensuring ease of use.',
            image: '/images/youtube.jpg',
            link: 'https://github.com/ChamodhJay/Youtube_Video_Downloader_Python-Project',
            isExpanded: false
        },
        {
            id: 3,
            title: 'INVENTORY MANAGEMENT SYSTEM',
            description: 'This project is an Inventory Management System developed in Java to help manage and track inventory efficiently. It allows users to add, update, delete, and search for products in the inventory. The system keeps detailed records of stock levels, product details, and inventory history. It includes features such as real-time stock updates, automated alerts for low stock, and comprehensive reporting capabilities. The system is designed for scalability and ease of use, making it suitable for small to medium-sized businesses.',
            image: '/images/inventory.jpg',
            link: 'https://github.com/ChamodhJay/Inventory-Management-System-IMS--JAVA',
            isExpanded: false
        },
        {
            id: 4,
            title: 'FACEBOOK CLONE REACT',
            description: 'This FB Clone Web Application, built using the React framework, delivers a streamlined and dynamic user experience, mimicking the core functionalities of the original Facebook platform. This demo version is designed to showcase the seamless integration of modern front-end technologies, offering users a responsive, efficient, and interactive interface.',
            image: '/images/FACEBOOK.png',
            link: 'https://github.com/ChamodhJay/React-Facebook-Clone-Demo',
            isExpanded: false
        },


    ]);

    function toggleDescription(project) {
        project.isExpanded = !project.isExpanded
    }
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
