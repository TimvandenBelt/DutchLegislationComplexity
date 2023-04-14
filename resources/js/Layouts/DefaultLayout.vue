<script setup lang="ts">
import { Link } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

let hover_app_name = ref(false);
</script>

<template>
    <div class="flex h-screen flex-col bg-gray-50">
        <header class="z-50">
            <nav
                class="navbar-bg navbar fixed top-0 z-50 w-full drop-shadow-md"
            >
                <div
                    class="container mx-auto flex flex-row justify-between gap-4 py-2 align-middle text-xl text-white"
                >
                    <ul
                        class="navbar-start flex flex-row items-center gap-4 align-middle"
                    >
                        <li
                            class="mr-4 align-middle text-3xl font-bold"
                            @mouseover="hover_app_name = true"
                            @mouseleave="hover_app_name = false"
                        >
                            DLC
                        </li>
                        <Link>
                            <li class="navbar-item">Home</li>
                        </Link>
                        <Link>
                            <li class="navbar-item">
                                Research
                                <font-awesome-icon
                                    icon="fa-solid fa-chevron-down text-sm"
                                />
                            </li>
                        </Link>
                        <Link>
                            <li class="navbar-item">
                                Legislation
                                <font-awesome-icon
                                    icon="fa-solid fa-chevron-down text-sm"
                                />
                            </li>
                        </Link>
                    </ul>
                    <ul
                        class="navbar-end hidden flex-row items-center gap-4 align-middle lg:flex"
                    >
                        <Link>
                            <li class="navbar-item">
                                About
                                <font-awesome-icon
                                    icon="fa-solid fa-chevron-down text-sm"
                                />
                            </li>
                        </Link>
                        <Link>
                            <li class="navbar-item">Contact</li>
                        </Link>
                        <li
                            class="block rounded-md py-2 px-2 align-middle hover:underline"
                        >
                            <span class="indicator">
                                <button
                                    class="btn-outline btn-link btn-sm btn-circle btn"
                                >
                                    <span
                                        class="badge-secondary indicator-bottom indicator-item border-0 bg-transparent text-white"
                                        ><font-awesome-icon
                                            icon="fa-solid fa-arrow-right-arrow-left"
                                    /></span>
                                    <span
                                        class="fi fi-nl mask mask-circle border-white"
                                        style="
                                            background-size: cover;
                                            height: 100%;
                                            width: 100%;
                                        "
                                    ></span>
                                </button>
                            </span>
                        </li>
                    </ul>
                    <div class="dropdown-end dropdown">
                        <label tabindex="0" class="btn-ghost btn lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabindex="0"
                            class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                        >
                            <li><a>Item 1</a></li>
                            <li tabindex="0">
                                <a class="justify-between">
                                    Parent
                                    <svg
                                        class="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                                        />
                                    </svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main class="container mx-auto mt-16 flex-grow flex-col pt-6">
            <div class="breadcrumbs mb-6 text-sm">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Documents</a></li>
                    <li>Add Document</li>
                </ul>
            </div>
            <slot />
        </main>
        <footer
            class="mt-6 w-full bg-gradient-to-b from-gray-50 to-gray-100 py-4 text-sm text-gray-600"
        >
            <div
                class="border-1 container mx-auto rounded-lg border-gray-400 bg-white py-2 px-4 drop-shadow-lg"
            >
                <div class="footer py-2">
                    <ul class="col-span-2">
                        <li>
                            <h3 class="footer-title text-lg font-semibold">
                                Research
                            </h3>
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
                            <h3 class="footer-title text-lg font-semibold">
                                About
                            </h3>
                        </li>
                        <li>Mission</li>
                        <li>Changelog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div class="divider"></div>
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
        </footer>
    </div>
</template>

<style lang="scss" scoped>
.navbar-bg {
    //@apply bg-primary;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2160' height='200' preserveAspectRatio='none' viewBox='0 0 2160 200'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1082%26quot%3b)' fill='none'%3e%3crect width='2160' height='200' x='0' y='0' fill='rgba(0%2c 122%2c 246%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c521.317C124.758%2c519.339%2c246.805%2c609.259%2c363.967%2c566.344C487.442%2c521.117%2c597.844%2c415.873%2c633.458%2c289.291C668.298%2c165.458%2c570.486%2c47.753%2c545.369%2c-78.412C522.028%2c-195.658%2c557.124%2c-325.889%2c491.144%2c-425.579C422.298%2c-529.6%2c297.915%2c-575.303%2c183.545%2c-625.098C54.654%2c-681.216%2c-85.488%2c-787.171%2c-215.27%2c-733.144C-347.248%2c-678.203%2c-342.347%2c-485.288%2c-427.731%2c-370.631C-504.141%2c-268.023%2c-654.399%2c-222.41%2c-687.609%2c-98.863C-721.459%2c27.068%2c-656.335%2c156.388%2c-601.151%2c274.537C-546.354%2c391.858%2c-491.248%2c528.831%2c-371.461%2c578.005C-253.195%2c626.554%2c-127.827%2c523.344%2c0%2c521.317' fill='%23006edd'%3e%3c/path%3e%3cpath d='M2160 823.619C2274.807 819.947 2369.296 734.679 2453.205 656.235 2526.636 587.587 2567.755 496.711 2608.1440000000002 404.65999999999997 2647.944 313.952 2704.591 221.694 2686.608 124.285 2668.797 27.80600000000001 2573.383-28.62299999999999 2513.771-106.54399999999998 2449.371-190.723 2417.273-305.452 2322.124-352.145 2222.26-401.15200000000004 2097.934-403.842 1995.28-360.986 1896.01-319.543 1858.828-202.93400000000003 1782.689-126.94200000000001 1698.559-42.974999999999994 1554.397-6.437000000000012 1524.721 108.661 1495.095 223.565 1577.106 336.382 1636.786 438.94399999999996 1691.781 533.456 1766.3890000000001 610.6120000000001 1854.489 675.384 1947.57 743.819 2044.528 827.312 2160 823.619' fill='%231086ff'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1082'%3e%3crect width='2160' height='200' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-position: center;
    background-size: cover;
}
.fi:before {
    visibility: hidden;
}
</style>
