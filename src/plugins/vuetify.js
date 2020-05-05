import Vue from 'vue';
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    iconfont: 'md',
    theme: {
        primary: colors.indigo.base,
        secondary: colors.purple.base,
        accent: colors.cyan.base,
        error: colors.red.base,
        warning: colors.orange.base,
        info: colors.lightBlue.base,
        success: colors.green.base,
    },
});

