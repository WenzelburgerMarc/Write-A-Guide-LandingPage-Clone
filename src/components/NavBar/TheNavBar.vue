<template>
    <nav class="w-full h-full flex items-center justify-between">
        <a class="logo h-6 w-auto flex items-center flex-shrink-0" href="#">
            <img src="@/assets/logo-white-bg.svg" alt="Logo"
                class="bg-contain h-full max-h-full w-auto ml-4 flex-shrink-0" />

        </a>
        <div class="nav-item-container hidden lg:flex w-full h-full justify-end items-center gap-8 mr-5">
            <nav-drop-down-item :title="functionsDropdownItemData.title"
                :items="functionsDropdownItemData.itemsFunktionen" />
            <nav-drop-down-item :title="solutionsDropdownItemData.title"
                :items="solutionsDropdownItemData.itemsLoesungen" />
            <nav-item :link="priceNavItemData.link" :text="priceNavItemData.title" />
            <nav-drop-down-item :title="resourcesDropdownItemData.title"
                :items="resourcesDropdownItemData.itemsRessourcen" />
            <nav-item :link="signInNavItemData.link" :text="signInNavItemData.title" />
            <nav-button-item :text="tryForFreeButtonNavItemData.title" :link="tryForFreeButtonNavItemData.link" />
        </div>
        <div class="flex lg:hidden w-full h-full justify-end items-center gap-5 mr-5 pointer-events-none">
            <i class="icon bx bx-log-in text-2xl text-gray-700 hover:text-black cursor-pointer pointer-events-auto"></i>
            <i @click="isMobileActive = true"
                class="icon bx bx-menu text-2xl text-gray-700 hover:text-black cursor-pointer pointer-events-auto"></i>

        </div>


        <the-mobile-nav-bar v-on:closeMobileNav="closeMobileNav"
            :class="isMobileActive ? 'mobile-active' : 'mobile-not-active'"
            class="mobile-navbar-container fixed lg:hidden w-screen h-screen top-0 left-0 p-4 overflow-hidden" />


    </nav>
</template>
<script setup>
import { ref } from 'vue';
import NavItem from './Items/NavItem.vue';
import NavButtonItem from './Items/NavButtonItem.vue';
import NavDropDownItem from './Items/NavDropDownItem.vue';
import TheMobileNavBar from './TheMobileNavBar.vue';

import { functionsDropdownItemData, solutionsDropdownItemData, resourcesDropdownItemData, priceNavItemData, signInNavItemData, tryForFreeButtonNavItemData } from './data.js';

let isMobileActive = ref(false);

function closeMobileNav() {
    isMobileActive.value = false;

}
</script>
<style setup>
.mobile-navbar-container {
    transition: all 0.3s ease-in-out;

    z-index: 1000;
}

.mobile-not-active {

    transform: translateY(-100%);
}

.mobile-active {

    transform: translateY(0%);
}
</style>