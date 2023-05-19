<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Link } from "@inertiajs/vue3";
import { ref } from "vue";
import SplitButton from "primevue/splitbutton";
import Button from "primevue/button";
import Badge from "primevue/badge";
let hover_app_name = ref(false);
</script>

<template>
    <nav
        class="container mx-auto my-4 flex flex-row justify-between gap-4 px-4 py-2 text-white"
    >
        <ul class="flex flex-row items-center gap-4 align-middle">
            <li
                class="mr-4 align-middle text-3xl font-bold"
                @mouseover="hover_app_name = true"
                @mouseleave="hover_app_name = false"
            >
                DLC
            </li>
            <li><Button link label="Home" /></li>
            <li>
                <SplitButton
                    text
                    label="Research"
                    type="button"
                    :model="[{ label: 'Example 1' }]"
                >
                </SplitButton>
            </li>
            <li>
                <SplitButton
                    label="Legislation"
                    text
                    type="button"
                    :model="[{ label: 'Example 1' }]"
                ></SplitButton>
            </li>
        </ul>
        <ul
            class="navbar-end hidden flex-row items-center gap-4 align-middle lg:flex"
        >
            <li>
                <SplitButton
                    label="About"
                    text
                    type="button"
                    :model="[{ label: 'Example 1' }]"
                ></SplitButton>
            </li>
            <li><Button type="button" link label="Contact" /></li>
            <li>
                <Button type="button" link>
                    <i class="fi fi-nl mask mask-circle border-white"></i>
                </Button>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="sass"></style>
