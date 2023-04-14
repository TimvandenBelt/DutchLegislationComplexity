<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    components: { FontAwesomeIcon },
};
</script>

<template>
    <h1>Legislation title</h1>
    <div class="stats glass my-2 w-full px-4">
        <div class="stat">
            <div class="stat-figure text-primary">
                <font-awesome-icon icon="fa-solid fa-sitemap" class="text-xl" />
            </div>
            <div class="stat-title indicator">
                Structure
                <span class="indicator-item text-black"
                    ><font-awesome-icon icon="fa-solid fa-circle-info"
                /></span>
            </div>
            <div class="stat-value">100%</div>
            <div class="stat-desc">It appears to be complex</div>
        </div>
        <div class="stat">
            <div class="stat-figure text-primary">
                <font-awesome-icon
                    icon="fa-solid fa-circle-nodes"
                    class="text-xl"
                />
            </div>
            <div class="indicator stat-title">
                Interdependence
                <span class="indicator-item text-black"
                    ><font-awesome-icon icon="fa-solid fa-circle-info"
                /></span>
            </div>
            <div class="stat-value">100%</div>
            <div class="stat-desc">It appears to be complex</div>
        </div>
        <div class="stat">
            <div class="stat-figure text-primary">
                <font-awesome-icon
                    icon="fa-solid fa-language"
                    class="text-xl"
                />
            </div>
            <div class="indicator stat-title">
                Language
                <span class="indicator-item text-black"
                    ><font-awesome-icon icon="fa-solid fa-circle-info"
                /></span>
            </div>
            <div class="stat-value">100%</div>
            <div class="stat-desc">It appears to be complex</div>
        </div>
        <div class="stat">
            <div class="stat-figure text-primary">
                <font-awesome-icon icon="fa-solid fa-equals" class="text-xl" />
            </div>
            <div class="indicator stat-title">
                Normalised score
                <span class="indicator-item text-black"
                    ><font-awesome-icon icon="fa-solid fa-circle-info"
                /></span>
            </div>
            <div class="stat-value">9th</div>
            <div class="stat-desc">It appears to be complex</div>
        </div>
        <div class="stat">
            <div class="stat-figure text-primary">
                <font-awesome-icon icon="fa-solid fa-equals" class="text-xl" />
            </div>
            <div class="indicator stat-title">
                Unormalised score
                <span class="indicator-item text-black"
                    ><font-awesome-icon icon="fa-solid fa-circle-info"
                /></span>
            </div>
            <div class="stat-value">9th</div>
            <div class="stat-desc">It appears to be complex</div>
        </div>
    </div>
    <div class="mt-4 grid grid-cols-4 content-start gap-6">
        <div class="border border-gray-200 bg-white py-4 px-2">
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
        <div class="col-span-3 flex flex-col gap-6">
            <div class="border border-gray-200 bg-white py-4 px-4">
                <div class="grid grid-cols-3 justify-around align-middle">
                    <h3 class="col-span-1">
                        <font-awesome-icon
                            icon="fa-solid fa-chevron-right mr-1"
                        />
                        Chapter 1
                    </h3>
                    <div
                        class="col-span-2 flex flex-row justify-around align-middle"
                    >
                        <div
                            class="indicator glass btn flex content-center items-center gap-1.5 text-lg font-light text-black"
                        >
                            <font-awesome-icon
                                icon="fa-solid fa-sitemap"
                                class="text-xl"
                            />
                            100%
                            <span class="indicator-item"
                                ><font-awesome-icon
                                    icon="fa-solid fa-circle-info"
                            /></span>
                        </div>
                        <div
                            class="indicator glass btn flex content-center items-center gap-1.5 text-lg font-light text-black"
                        >
                            <font-awesome-icon
                                icon="fa-solid fa-circle-nodes"
                                class="text-xl"
                            />
                            100%
                            <span class="indicator-item"
                                ><font-awesome-icon
                                    icon="fa-solid fa-circle-info"
                            /></span>
                        </div>
                        <div
                            class="indicator glass btn flex content-center items-center gap-1.5 text-lg font-light text-black"
                        >
                            <font-awesome-icon
                                icon="fa-solid fa-language"
                                class="text-xl"
                            />
                            100%
                            <span class="indicator-item"
                                ><font-awesome-icon
                                    icon="fa-solid fa-circle-info"
                            /></span>
                        </div>
                        <div
                            class="indicator glass btn flex content-center items-center gap-1.5 text-lg font-light text-black"
                        >
                            <font-awesome-icon
                                icon="fa-solid fa-equals"
                                class="text-xl"
                            />
                            100%
                            <span class="indicator-item"
                                ><font-awesome-icon
                                    icon="fa-solid fa-circle-info"
                            /></span>
                        </div>
                    </div>
                </div>
                <div class="mt-4 border border-gray-200 bg-white py-4">
                    <div
                        class="mb-2 grid grid-cols-3 justify-around border-b border-gray-200 px-4 pb-4 align-middle"
                    >
                        <h3 class="col-span-1">
                            <font-awesome-icon
                                icon="fa-solid fa-chevron-right mr-1"
                            />
                            Article 1
                        </h3>
                        <div
                            class="col-span-2 flex flex-row justify-around align-middle"
                        >
                            <div
                                class="indicator glass btn flex content-center items-center gap-1.5 text-lg font-light text-black"
                            >
                                <font-awesome-icon
                                    icon="fa-solid fa-sitemap"
                                    class="text-xl"
                                />
                                100%
                                <span class="indicator-item"
                                    ><font-awesome-icon
                                        icon="fa-solid fa-circle-info"
                                /></span>
                            </div>
                            <div
                                class="indicator glass btn flex content-center items-center gap-1.5 text-lg font-light text-black"
                            >
                                <font-awesome-icon
                                    icon="fa-solid fa-circle-nodes"
                                    class="text-xl"
                                />
                                100%
                                <span class="indicator-item"
                                    ><font-awesome-icon
                                        icon="fa-solid fa-circle-info"
                                /></span>
                            </div>
                            <div
                                class="indicator glass btn flex content-center items-center gap-1.5 text-lg font-light text-black"
                            >
                                <font-awesome-icon
                                    icon="fa-solid fa-language"
                                    class="text-xl"
                                />
                                100%
                                <span class="indicator-item"
                                    ><font-awesome-icon
                                        icon="fa-solid fa-circle-info"
                                /></span>
                            </div>
                            <div
                                class="indicator glass btn flex content-center items-center gap-1.5 text-lg font-light text-black"
                            >
                                <font-awesome-icon
                                    icon="fa-solid fa-equals"
                                    class="text-xl"
                                />
                                100%
                                <span class="indicator-item"
                                    ><font-awesome-icon
                                        icon="fa-solid fa-circle-info"
                                /></span>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div class="mx-4 mt-4 border border-gray-200 bg-white py-4">
                        <div
                            class="mx-4 mb-2 grid grid-cols-3 justify-around border-b border-gray-200 pb-4 align-middle"
                        >
                            <h3 class="col-span-1">
                                <font-awesome-icon
                                    icon="fa-solid fa-chevron-right mr-1"
                                />
                                Subsection 1
                            </h3>
                            <div
                                class="col-span-2 flex flex-row justify-around align-middle"
                            >
                                <div
                                    class="indicator glass btn flex content-center items-center gap-1.5 text-lg font-light text-black"
                                >
                                    <font-awesome-icon
                                        icon="fa-solid fa-sitemap"
                                        class="text-xl"
                                    />
                                    100%
                                    <span class="indicator-item"
                                        ><font-awesome-icon
                                            icon="fa-solid fa-circle-info"
                                    /></span>
                                </div>
                                <div
                                    class="indicator glass btn flex content-center items-center gap-1.5 text-lg font-light text-black"
                                >
                                    <font-awesome-icon
                                        icon="fa-solid fa-circle-nodes"
                                        class="text-xl"
                                    />
                                    100%
                                    <span class="indicator-item"
                                        ><font-awesome-icon
                                            icon="fa-solid fa-circle-info"
                                    /></span>
                                </div>
                                <div
                                    class="indicator glass btn flex content-center items-center gap-1.5 text-lg font-light text-black"
                                >
                                    <font-awesome-icon
                                        icon="fa-solid fa-language"
                                        class="text-xl"
                                    />
                                    100%
                                    <span class="indicator-item"
                                        ><font-awesome-icon
                                            icon="fa-solid fa-circle-info"
                                    /></span>
                                </div>
                                <div
                                    class="indicator glass btn flex content-center items-center gap-1.5 text-lg font-light text-black"
                                >
                                    <font-awesome-icon
                                        icon="fa-solid fa-equals"
                                        class="text-xl"
                                    />
                                    100%
                                    <span class="indicator-item"
                                        ><font-awesome-icon
                                            icon="fa-solid fa-circle-info"
                                    /></span>
                                </div>
                            </div>
                        </div>
                        <div class="px-4 py-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div class="px-4 py-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
            <div class="border border-gray-200 bg-white py-4 px-2">
                <h3>
                    <font-awesome-icon icon="fa-solid fa-chevron-right mr-1" />
                    Chapter 2
                </h3>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
