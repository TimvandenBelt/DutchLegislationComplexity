import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import checker from "vite-plugin-checker";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.ts",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        VitePWA({ registerType: "autoUpdate" }),
        checker({
            typescript: true,
            vueTsc: true,
            eslint: {
                lintCommand: 'eslint "./resources/**/*.{ts,tsx,vue,js}"',
            },
            stylelint: {
                lintCommand: "stylelint ./resources/**/*.{ts,vue,scss}",
            },
        }),
    ],
    server: {
        port: 5173,
        hmr: {
            host: "localhost",
        },
        // watch: {
        //     usePolling: true,
        //     interval: 1000,
        //     binaryInterval: 1000,
        //     paths: ["resources/**/*"],
        // },
    },
});
