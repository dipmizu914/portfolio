<template>
  <v-row fluid no-gutters>
    <v-flex v-for="item in items_int" :key="item.title" xs12 sm6 md3>
      <v-hover>
        <v-card tile slot-scope="{ hover }" :to="item.link">
          <v-img
            :src="require('@/assets/works/' + item.image)"
            aspect-ratio="1.0"
            eager
          >
            <div
              class="fill-height"
              :class="
                hover || $vuetify.breakpoint.xs ? 'bottom-gradient' : 'none'
              "
            >
              <v-card-title
                v-if="hover || $vuetify.breakpoint.xs"
                class="white--text headline font-weight-light"
                >{{ item.title }}</v-card-title
              >
              <v-card-text
                v-if="hover || $vuetify.breakpoint.xs"
                class="white--text caption font-weight-light"
                >{{ item.desc }}</v-card-text
              >
            </div>
          </v-img>
        </v-card>
      </v-hover>
    </v-flex>
    <v-flex v-for="item in items_ext" :key="item.title" xs12 sm6 md3>
      <v-hover>
        <v-card
          tile
          slot-scope="{ hover }"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-img
            :src="require('@/assets/works/' + item.image)"
            aspect-ratio="1.0"
            eager
          >
            <div
              class="fill-height"
              :class="
                hover || $vuetify.breakpoint.xs ? 'bottom-gradient' : 'none'
              "
            >
              <v-card-title
                v-if="hover || $vuetify.breakpoint.xs"
                class="white--text headline font-weight-light"
                >{{ item.title }}</v-card-title
              >
              <v-card-text
                v-if="hover || $vuetify.breakpoint.xs"
                class="white--text caption font-weight-light"
                >{{ item.desc }}</v-card-text
              >
            </div>
          </v-img>
        </v-card>
      </v-hover>
    </v-flex>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items_int: [
        {
          title: "Realtime Realistic VTuber engine",
          image: "vtuber.jpg",
          desc: "Vulkan",
          link: "Vtuber",
        },
        {
          title: "Realtime Path Tracing engine",
          image: "path.jpg",
          desc: "Vulkan",
          link: "PathEngine",
        },
        {
          title: "AR multiplayer city building game",
          image: "ARcity.jpg",
          desc: "May festival @UTokyo",
          link: "ARcity",
        },
        {
          title: "Cherry Blossom Viewing AR",
          image: "sakura.jpg",
          link: "ARsakura",
        },
      ],
      items_ext: [
        {
          title: "ReSTIR on Vulkan",
          image: "sponza.jpg",
          desc: "Vulkan",
          link: "https://github.com/dipmizu914/ReSTIR_on_Vulkan",
        },
        {
          title: "Deformation of 3D Shape by Projection Mapping",
          image: "elamorph.png",
          link: "http://ishikawa-vision.org/vision/ElaMorph/",
        },
        {
          title: "Viewpoint-dependent Image Projection",
          image: "lenticular.jpg",
          link: "http://ishikawa-vision.org/vision/LentiDPM/index-e.html",
        },
        {
          title: "Polarimetric Renderer on Vulkan",
          image: "pBRDF.png",
          desc: "Vulkan",
          link: "https://zenn.dev/dipukamin/articles/3ae9980782a186",
        },
        {
          title: "Website of the club",
          image: "prism.png",
          link: "http://gprism.webcrow.jp/",
        },
      ],
    };
  },

  methods: {
    isExternal(link) {
      return link.includes("http") || link.includes("https");
    },
    isInternal(link) {
      return !link.includes("http") && !link.includes("https");
    },
  },
};
</script>


<style scoped>
.bottom-gradient {
  background-image: radial-gradient(
    circle at center,
    rgba(1, 1, 1, 0),
    rgba(1, 1, 1, 0.5) 100%
  );
}
</style>
