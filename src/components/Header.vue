 <template>
     <v-app-bar app color="primary" dark elevate-on-scroll>
      <v-toolbar-title  >
        <v-avatar class="mr-2">
          <img :src="require('../assets/avatar.jpg')" />
        </v-avatar>
        Kentaro Fukamizu's portfolio
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon v-for="sns in snss" :key="sns.title" :href="sns.path" target="_blank" rel="noopener noreferrer">
        <v-icon>{{ sns.icon }} </v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title glow="false" v-model="tab">
          <v-tabs-slider></v-tabs-slider>
          <v-tab v-for="view in views" :key="view.title" :to="view.path" >
            {{ view.title }}

          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
 </template>


 <script>
     export default {
         props: {
             views: Array,
             snss:Array
         }
     }
 </script>