import "./bootstrap";
import "../css/app.scss";
import "flag-icons";

import { createApp, h, computed } from "vue";
import { createInertiaApp, usePage } from "@inertiajs/vue3";
// tslint:disable-next-line:no-submodule-imports
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import DefaultLayout from "./Layouts/DefaultLayout.vue";
import PrimeVue from "primevue/config";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const appName = computed(
    () => usePage().props.appName || "Dutch Language Complexity"
);

createInertiaApp({
    title: (title) => `${title} - ${appName.value}`,
    includeCSS: true,
    delay: 250,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        );
        page.then((module: any) => {
            module.default.layout = module.default.layout || DefaultLayout;
        });
        return page;
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setup({ el, App, props, plugin }) {
        return (
            createApp({ render: () => h(App, props) })
                .use(plugin)
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore // Is provided through the blade template or through a request
                .use(ZiggyVue, Ziggy)
                .use(PrimeVue, { ripple: true })
                .component("font-awesome-icon", FontAwesomeIcon)
                .mount(el)
        );
    },
});
