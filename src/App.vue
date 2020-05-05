<template>
  <v-app>
    <Header :views="views" :snss="snss"/>

    <v-content>
      <v-fade-transition mode="out-in">
        
        <router-view>
          <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="item in views"
            :key="item"
          >
        </v-tab-item>
          </v-tabs-items>
        </router-view>
      </v-fade-transition>
    </v-content>
    <v-footer app dark color="primary">
      <v-flex text-center>
        <h4 class="font-weight-light">&copy; 2020 - Kentaro Fukamizu</h4>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
  export default {
    name: 'App',
    components: {
      Header
    },
    
    data() {
      return {
        views: [{
            title: 'About',
            icon: 'dashboard',
            path: '/',
            external: false
          },
          {
            title: 'Works',
            icon: 'account_circle',
            path: '/works',
            external: false
          },
          
          
        ],

        snss:[
          {
          title:'facebook',
          icon: 'fab fa-facebook',
          path: 'https://www.facebook.com/kentaro.fukamizu.96'
          },
          {
          title:'linkedin',
          icon: 'fab fa-linkedin-in',
          path: 'https://www.linkedin.com/in/健太郎-深水-221a5a186'
          },
          {
          title:'github',
          icon: 'fab fa-github',
          path: 'https://github.com/dipmizu914'
          }
        ]
      }
    }
  }
</script>