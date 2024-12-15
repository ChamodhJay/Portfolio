<template>
         <!-- On going Projects Section -->
         <section id="projects" class="py-16 bg-gray-100">
            <div class="container mx-auto">
                <h2 class="mb-12 text-4xl font-bold text-center">Current Projects</h2>
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div v-for="project in currentProjects" :key="project.id"
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
 const currentProjects = ref([{
            id: 1,
            title: 'VBA MACRO SHEET GENERATOR',
            description: 'This is a custom-built VBA macro designed to automate the processing of large hotel reports within Excel. The macro streamlines data manipulation by automating tasks such as data cleansing, aggregation, and formatting, significantly reducing manual workload. It also performs advanced calculations and generates detailed summary reports, enabling hotel management to derive actionable insights with greater accuracy and speed. The solution enhances operational efficiency and improves decision-making through streamlined reporting workflows.',
            image: '/images/vba.jpg',
            link: '',
            isExpanded: false
        },
        {
            id: 2,
            title: 'RESERVATION UPLOADER CLI PROGRAMME',
            description: 'This is a Node.js-based application developed to automate the uploading of guest reservation data into Opera Cloud via the Oracle Hospitality API. The tool imports reservation details from CSV files and includes robust validation mechanisms to ensure data integrity. Guest profile IDs are cross-checked for validity, and any missing or invalid entries trigger detailed error notifications, allowing for quick resolution. The tool significantly reduces manual data entry errors and optimizes the reservation management process, improving operational efficiency for hotels.',
            image: '/images/cli.png',
            link: '',
            isExpanded: false
        },
        {
            id: 3,
            title: 'AFFERO SELF CHECK-IN WEB SYSTEM',
            description: 'This is a comprehensive self-check-in system, incorporating both a backend notification service and a frontend pre-arrival web portal AscNotifier: A Windows service developed using C# .NET, designed to automate pre-arrival email notifications for hotel guests. The service runs daily, checking upcoming reservations and sending personalized reminder emails three days prior to guests arrival This feature ensures timely communication  enhancing the guest experience and improving hotel operations.Affero Pre-arrival Web Portal: A web-based application built with Nuxt.js, providing guests with a seamless pre-arrival check-in process. The portal allows users to manage their reservations and complete check-in tasks online, improving convenience and reducing on-site check-in times. Integrated with AscNotifier this system provides a unified efficient guest interaction platform. ',
            image: '/images/asc.jpg',
            link: '',
            isExpanded: false
        }
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
