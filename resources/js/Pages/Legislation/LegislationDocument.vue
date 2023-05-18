<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Fieldset from "primevue/fieldset";
</script>

<template>
    <div class="w-full">
        <h1 class="w-full rounded-t-lg bg-white py-4 pl-4">
            Legislation title
        </h1>
    </div>
    <div class="grid grid-cols-5 content-start">
        <div class="rounded-b-lg border border-gray-200 bg-white py-4 px-2">
            <div class="text-lg">Tools</div>
            <div class="align-middle">
                <input
                    type="radio"
                    checked="checked"
                    class="radio-primary radio radio-sm"
                />
                Use global average
            </div>
            <div class="align-middle">
                <input type="radio" class="radio-primary radio radio-sm" />
                Use local average
            </div>
            <div class="mt-4 text-xl">Index</div>
            <div
                class="flex flex-row content-center items-center justify-between"
            >
                <div>
                    <font-awesome-icon
                        icon="fa-solid fa-chevron-right"
                        class="peer"
                    />
                    Chapter 1
                </div>
                <div
                    class="h-full w-2 bg-gradient-to-b from-green-500 via-green-400 to-green-100 py-6"
                ></div>
            </div>
            <div
                class="flex flex-row content-center items-center justify-between"
            >
                <div>
                    <font-awesome-icon
                        icon="fa-solid fa-chevron-right"
                        class="peer"
                    />
                    Chapter 2
                </div>
                <div
                    class="h-full w-2 bg-gradient-to-b from-red-100 via-red-400 to-red-500 py-6"
                ></div>
            </div>
        </div>
        <div class="col-span-4 flex flex-col">
            <Fieldset legend="Section 1" :toggleable="true" class="my-8 ml-4">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <Fieldset legend="Sub 1" :toggleable="true" class="my-8 mx-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </Fieldset>
            </Fieldset>
            <Fieldset legend="Section 2" :toggleable="true" class="mt-4 ml-4">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </Fieldset>
        </div>
    </div>
</template>

<style scoped></style>
