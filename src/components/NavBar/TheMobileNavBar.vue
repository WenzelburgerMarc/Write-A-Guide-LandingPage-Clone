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
            <mobile-nav-drop-down-item title="Funktionen" :items="itemsFunktionen" />

            <mobile-nav-drop-down-item title="Lösungen" :items="itemsLoesungen" />
            <mobile-nav-item link="#" text="Preise" />
            <mobile-nav-drop-down-item title="Ressourcen" :items="itemsRessourcen" />

            <mobile-nav-item link="#" text="Anmelden" />

            <mobile-nav-button-item text="Kostenlos Testen" link="#" class="mt-5" />
            <mobile-nav-secondary-button-item text="Persönliche Beratung" link="#" />
        </div>


    </nav>
</template>
<script setup>

import MobileNavItem from './Items/mobile/MobileNavItem.vue';
import MobileNavButtonItem from './Items/mobile/MobileNavButtonItem.vue';
import MobileNavDropDownItem from './Items/mobile/MobileNavDropDownItem.vue';
import MobileNavSecondaryButtonItem from './Items/mobile/MobileNavSecondaryButtonItem.vue';

import { itemsFunktionen, itemsLoesungen, itemsRessourcen } from './data.js';

const emit = defineEmits(['closeMobileNav']);

</script>
<style setup></style>