<template>
<v-container>
    <v-layout align-center column justify-center>
        <h1 class="Display-3 font-weight-medium my-3 text-center">AR Multiplayer City Building Game</h1>
        <h4 class="font-weight-light mb-3">Collaborative experience in augmented reality</h4>
      
        <iframe :width="width" :height="height" src="https://www.youtube-nocookie.com/embed/e367xmTiOOE" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        

        <h1 class="Display-3 font-weight-medium mt-3">Description</h1>
        <h4 class="font-weight-light md-mx-12">We exhibited a multiplayer AR city building game at the May Festival@UTokyo.
            Although the demo video is a solo play, we connected at most five iPads via TCP/IP to share the condition of
            city building between devices in the day of exhibition.
            At that time, there was no API to synchronize coordinates between devices, so I implemented an original
            method to synchronize coordinates.
        </h4>

        <h1 class="Display-3 font-weight-medium mt-3">What I Did</h1>
        <h4 class="font-weight-light">AR Network Programming (Unity, C#, Shader, ARKit, UNet)<br>
            Game Design
        </h4>
    </v-layout>
</v-container>
</template>

<script>
    export default {

        components: {

        },
        computed:{
            width: function(){
                if(this.$vuetify.breakpoint.smAndDown){
                    return 350
                }else{
                    return 560
                }
            },
            height: function(){
                if(this.$vuetify.breakpoint.smAndDown){
                    return 197
                }else{
                    return 315
                }
            }
        }
    }
</script>