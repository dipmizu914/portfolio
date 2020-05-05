<template>
<v-container>
    <v-layout align-center column justify-center>
        <h1 class="Display-3 font-weight-medium my-3 text-center">AR Modeling Kit</h1>
        <h4 class="font-weight-light mb-3">New modeling method</h4>
     
        <iframe :width="width" :height="height" src="https://www.youtube-nocookie.com/embed/PE6Khf847tA" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      

        <h1 class="Display-3 font-weight-medium mt-3">What I Did</h1>
        <h4 class="font-weight-light">AR Programming (Unity, C#, Shader, ARKit)
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
                    return 400
                }else{
                    return 560
                }
            },
            height: function(){
                if(this.$vuetify.breakpoint.smAndDown){
                    return 225
                }else{
                    return 315
                }
            }
        }
    }
</script>