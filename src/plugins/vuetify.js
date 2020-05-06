import Vue from 'vue';
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faGithub);
library.add(faFacebook);
library.add(faLinkedin);

Vue.use(Vuetify);
export default new Vuetify({
    theme: {
        primary: colors.indigo.base,
        secondary: colors.purple.base,
        accent: colors.cyan.base,
        error: colors.red.base,
        warning: colors.orange.base,
        info: colors.lightBlue.base,
        success: colors.green.base,
    },
    icons:{
        iconfont:'mdi'
    }
});

