<template>
    <v-card class="ma-4">
      <v-img :src="require('@/assets/cards/' + image)" v-if="image" max-height=200 class="mb-1"/>

      <v-card-title>
        <h3 class="title font-weight-light">{{title}}</h3>
      </v-card-title>
      <v-card-text>
        <p class="font-weight-light">{{desc}}</p>
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
    image: String
  }
}
</script>
