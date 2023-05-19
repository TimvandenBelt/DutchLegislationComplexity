"use strict";
exports.__esModule = true;
require("./bootstrap");
require("../css/app.scss");
require("flag-icons");
var vue_1 = require("vue");
var vue3_1 = require("@inertiajs/vue3");
// tslint:disable-next-line:no-submodule-imports
var inertia_helpers_1 = require("laravel-vite-plugin/inertia-helpers");
var vue_m_1 = require("../../vendor/tightenco/ziggy/dist/vue.m");
var DefaultLayout_vue_1 = require("./Layouts/DefaultLayout.vue");
var config_1 = require("primevue/config");
/* import font awesome icon component */
var vue_fontawesome_1 = require("@fortawesome/vue-fontawesome");
var appName = vue_1.computed(function () { return vue3_1.usePage().props.appName || "Dutch Language Complexity"; });
vue3_1.createInertiaApp({
    title: function (title) { return title + " - " + appName.value; },
    includeCSS: true,
    delay: 250,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    resolve: function (name) {
        var page = inertia_helpers_1.resolvePageComponent("./Pages/" + name + ".vue", import.meta.glob("./Pages/**/*.vue"));
        page.then(function (module) {
            module["default"].layout = module["default"].layout || DefaultLayout_vue_1["default"];
        });
        return page;
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setup: function (_a) {
        var el = _a.el, App = _a.App, props = _a.props, plugin = _a.plugin;
        return (vue_1.createApp({ render: function () { return vue_1.h(App, props); } })
            .use(plugin)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore // Is provided through the blade template or through a request
            .use(vue_m_1.ZiggyVue, Ziggy)
            .use(config_1["default"], { ripple: true })
            .component("font-awesome-icon", vue_fontawesome_1.FontAwesomeIcon)
            .mount(el));
    }
});
