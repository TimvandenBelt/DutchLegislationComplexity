import "./bootstrap";
import "../css/app.scss";
import "flag-icons";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
// tslint:disable-next-line:no-submodule-imports
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import DefaultLayout from "./Layouts/DefaultLayout.vue";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText ||
    "Dutch Language Complexity";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
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
    setup({ el, app, props, plugin }) {
        return (
            createApp({ render: () => h(app, props) })
                .use(plugin)
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore // Is provided through the blade template or through a request
                .use(ZiggyVue, Ziggy)
                .component("font-awesome-icon", FontAwesomeIcon)
                .mount(el)
        );
    },
});

InertiaProgress.init({ color: "#4B5563" });
