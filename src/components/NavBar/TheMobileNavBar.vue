<template>
    <nav class="w-full h-full bg-white">
        <div class="top-nav w-full flex justify-between">
            <a class="logo h-6 w-auto flex items-center flex-shrink-0" href="#">
                <img src="../../assets/logo-white-bg.svg" alt="Logo"
                    class="bg-contain h-full max-h-full w-auto ml-0 flex-shrink-0" />

            </a>
            <div class="flex w-auto h-full justify-end items-start cursor-pointer group" @click="emit('closeMobileNav')">
                <i class="icon bx bx-x text-2xl text-gray-700 group-hover:text-black "></i>
            </div>
        </div>
        <div class="w-full h-full flex flex-col justify-start pt-[10%] gap-3 pb-5 overflow-auto">
            <mobile-nav-drop-down-item :title="functionsDropdownItemData.title"
                :items="functionsDropdownItemData.itemsFunktionen" />

            <mobile-nav-drop-down-item :title="solutionsDropdownItemData.title"
                :items="solutionsDropdownItemData.itemsLoesungen" />
            <mobile-nav-item :link="priceNavItemData.link" :text="priceNavItemData.title" />
            <mobile-nav-drop-down-item :title="resourcesDropdownItemData.title"
                :items="resourcesDropdownItemData.itemsRessourcen" />

            <mobile-nav-item :link="signInNavItemData.link" :text="signInNavItemData.title" />

            <mobile-nav-button-item :text="tryForFreeButtonNavItemData.title" :link="tryForFreeButtonNavItemData.link"
                class="mt-5" />
            <mobile-nav-secondary-button-item :text="adviseSecBtnNavItemData.title" :link="adviseSecBtnNavItemData.link" />
        </div>


    </nav>
</template>
<script setup>

import MobileNavItem from './Items/mobile/MobileNavItem.vue';
import MobileNavButtonItem from './Items/mobile/MobileNavButtonItem.vue';
import MobileNavDropDownItem from './Items/mobile/MobileNavDropDownItem.vue';
import MobileNavSecondaryButtonItem from './Items/mobile/MobileNavSecondaryButtonItem.vue';

import { functionsDropdownItemData, solutionsDropdownItemData, resourcesDropdownItemData, priceNavItemData, signInNavItemData, tryForFreeButtonNavItemData, adviseSecBtnNavItemData } from './data.js';

const emit = defineEmits(['closeMobileNav']);

</script>
<style setup></style>