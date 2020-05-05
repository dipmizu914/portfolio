<template>
    <v-container>
        <v-layout align-center column justify-center>
            <h1 class="Display-3 font-weight-medium mb-3">Realtime Realistic VTuber engine</h1>
            <h4 class="font-weight-light">Fusion of virtual and real world in real time</h4>
            <v-container></v-container>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QZuNY5wm7w8" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <v-container></v-container>
            <h1 class="Display-3 font-weight-medium mb-3">Description</h1>
            <h4 class="font-weight-light mx-12">I create a VTuber engine that reflects the three-axis rotation of the
                face in real time to a 3DCG scene by combining my path tracing engine and some image processing methods.
                As a future work, I intend to implement skinning so as to reflect information on facial expressions.<br>
                In the future, I will expect to realize comfortable telework in virtual offices, schools, etc., by mapping
                humans in a hyper-realistic CG space and making them feel as if they are in a real space.
            </h4>
            <v-container></v-container>
            <h1 class="Display-3 font-weight-medium mb-3">What I Did</h1>
            <h4 class="font-weight-light">CG Programming (C++, Vulkan, GLSL)<br>
                Face Detection (OpenCV, Dlib)<br>
                This engine is based on my previous work.
            </h4>
        </v-layout>
    </v-container>
</template>

<script>
    export default {

        components: {

        }
    }
</script>