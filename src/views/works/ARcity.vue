<template>
    <v-layout align-center column justify-center>
        <h1 class="Display-3 font-weight-medium mb-3">AR Multiplayer City Building Game</h1>
        <h4 class="font-weight-light">Collaborative experience in augmented reality</h4>
        <v-container></v-container>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/e367xmTiOOE" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <v-container></v-container>

        <h1 class="Display-3 font-weight-medium mb-3">Description</h1>
        <h4 class="font-weight-light mx-12">We exhibited a multiplayer AR city building game at the May Festival@UTokyo.
            Although the demo video is a solo play, we connected at most five iPads via TCP/IP to share the condition of
            city building between devices in the day of exhibition.
            At that time, there was no API to synchronize coordinates between devices, so I implemented an original
            method to synchronize coordinates.
        </h4>
        <v-container></v-container>
        <h1 class="Display-3 font-weight-medium mb-3">What I Did</h1>
        <h4 class="font-weight-light">AR Network Programming (Unity, C#, Shader, ARKit, UNet)<br>
            Game Design
        </h4>
    </v-layout>
</template>

<script>
    export default {

        components: {

        }
    }
</script>