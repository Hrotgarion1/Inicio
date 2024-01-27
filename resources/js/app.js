import './bootstrap';
import '../css/app.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { i18nVue } from 'laravel-vue-i18n';

const vuetify = createVuetify({
    components,
    directives,
  })

const appName = import.meta.env.VITE_APP_NAME || 'TcxStocks';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),

    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(vuetify)
            .use(plugin)
            .use(ZiggyVue)
            .use(i18nVue, {
                resolve: async lang => {
                    const langs = import.meta.glob('../../lang/*.json');
                    return await langs[`../../lang/${lang}.json`]();
                }
            })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
