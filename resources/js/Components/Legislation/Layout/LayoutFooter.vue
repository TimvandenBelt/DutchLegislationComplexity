<script setup lang="ts">
import { Link } from "@inertiajs/inertia-vue3";
import Divider from "primevue/divider";
</script>

<template>
    <div
        class="border-1 mx-12 rounded-lg border-gray-400 bg-gradient-to-b from-white/80 to-gray-100/80 py-2 px-4"
    >
        <div class="flex flex-row justify-around py-2">
            <ul class="col-span-2">
                <li>
                    <h3 class="footer-title text-lg font-semibold">Research</h3>
                </li>
                <li>Summary</li>
                <li>White Paper</li>
                <li>Related Research</li>
                <li>Publications</li>
            </ul>
            <div class="divider divider-horizontal"></div>
            <ul class="col-span-2">
                <li>
                    <h3 class="footer-title text-lg font-semibold">
                        Legislation
                    </h3>
                </li>
                <li>Index</li>
                <li>Search</li>
                <li>Statistics</li>
                <li>API</li>
            </ul>
            <div class="divider divider-horizontal"></div>
            <ul class="col-span-2">
                <li>
                    <h3 class="footer-title text-lg font-semibold">About</h3>
                </li>
                <li>Mission</li>
                <li>Changelog</li>
                <li>Contact</li>
            </ul>
        </div>
        <Divider />
        <div class="flex flex-row justify-between align-middle">
            <div>
                Dutch Legislation Complexity (DLC) &copy; Copyright
                {{ new Date().getFullYear() === 2022 ? `` : `2022 - ` }}
                {{ new Date().getFullYear() }}
                <a
                    href="https://timvandenbelt.com"
                    class="underline hover:text-black"
                    >Tim van den Belt</a
                >
            </div>
            <div>
                <font-awesome-icon icon="fa-brands fa-github" />
                -
                <a href="https://linkedin.com/in/timvandenbelt/">
                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                </a>
                - License - Privacy Policy - API
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
