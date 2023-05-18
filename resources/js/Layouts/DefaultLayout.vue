<script setup lang="ts">
import LauoutNavigation from "../Components/Legislation/Layout/LayoutNavigation.vue";
import LayoutFooter from "../Components/Legislation/Layout/LayoutFooter.vue";
import { ref, h } from "vue";
import Breadcrumb from "primevue/breadcrumb";

const home = ref({
    label: "Home",
});
const items = ref([
    { label: "Computer" },
    { label: "Notebook" },
    { label: "Accessories" },
    { label: "Backpacks" },
    { label: "Item" },
]);
</script>

<template>
    <div class="flex h-screen flex-col justify-between">
        <header
            class="fixed top-0 z-50 w-full bg-white/40 shadow-md backdrop-blur-md"
        >
            <LauoutNavigation />
        </header>
        <main class="mx-12 mt-32 flex-grow flex-col">
            <Breadcrumb
                :home="home"
                :model="items"
                class="mb-8 border-white/50 bg-white/30 text-black backdrop-blur-md"
            />
            <slot />
        </main>
        <footer class="mt-6 mb-4 w-full text-sm text-gray-600">
            <LayoutFooter />
        </footer>
    </div>
</template>

<style lang="scss" scoped></style>
