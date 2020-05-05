<template>
<v-container>
    <v-layout align-center column justify-center>
        
        <h1 class="Display-3 font-weight-medium my-3 text-center">Realtime Path Tracing engine</h1>
        <h4 class="font-weight-light mb-3">Production of hyper-realistic virtual world in real time</h4>
        
        <iframe :width="width" :height="height" src="https://www.youtube-nocookie.com/embed/NEiQNRGF-9Q" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
        
        <h1 class="Display-3 font-weight-medium mt-3">Description</h1>
        <h4 class="font-weight-light md-mx-12">Path tracing is a technique that can produce global illumination,
            refraction and reflection more faithfully in CG than conventional methods, and widely used in CG movies and
            games.
            I implement a real-time past tracing engine using <code>VK_KHR_ray_tracing</code> extension of Vulkan. I
            also write shaders for ray tracing and adopt DisneyBRDF to reflect the physical properties. I include the
            AI denoise API of NVIDIA OptiX into my engine to solve the de-noise problem in path tracing.
        </h4>
        
        <h1 class="Display-3 font-weight-medium mt-3">What I Did</h1>
        <h4 class="font-weight-light">CG Programming (C++, Vulkan, GLSL)
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