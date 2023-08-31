<template>
    <section class="pricing-cards-section relative bg-transparent">
        <div class="absolute  top-0 left-0 w-full h-full bg-gray-500 -skew-y-6 z-10"></div>
        <default-padding>
            <div class="top-container z-20 w-full md:w-1/2 lg:w-2/3 p-4 lg:p-8 mt-12 md:text-center flex flex-col">
                <span class="uppercase text-green-500 text-sm sm:text-sm mb-3 inline-block">{{ sectionTitle }}</span>
                <h2 class="w-auto tracking-wider text-3xl"><span class="relative"><span
                            class="highlighter absolute left-[-0.25rem] top-4 w-[calc(100%+0.5rem)] h-3/4 rounded-full bg-green-500 opacity-10 -z-10"></span>{{
                                titleMarked }}</span>{{ title }}</h2>
                <p class="text-xl font-light text-gray-700 mt-5 mx-auto lg:w-2/3">{{ description }}</p>

                <the-toggle-button v-on:toggleEvent="changePrice" class="mt-10 mx-auto" firstTitle="Monatlich"
                    secondTitle="Jährlich" :toggleValue="true" />

                <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
                    <the-price-card class="w-full h-full" :price="firstPriceCard.price" :title="firstPriceCard.title"
                        :description="firstPriceCard.description" :features="firstPriceCard.features"
                        :link="firstPriceCard.link" />

                    <the-price-card class="w-full h-full" :price="secondPriceCard.price" :title="secondPriceCard.title"
                        :description="secondPriceCard.description" :features="secondPriceCard.features"
                        :link="secondPriceCard.link" />
                </div>

                <div class="bottom pt-10 pb-10 flex flex-col justify-center items-center text-center">
                    <nav-button-item text="60 Tage kostenlos testen" link="https://writeaguide.com/de/signup"
                        class="py-5 text-sm max-w-fit" />
                    <p class="mt-14 text-gray-500 text-xs">19 % MwSt exklusive. 60 Tage Testzeitraum mit allen Funktionen.
                        Du
                        benötigst noch kein Zahlungsmittel.</p>
                    <a class="mt-1 text-green-500 text-xs hover:underline" href="mailto:hello@writeaguide.com">Mehr als 250
                        Benutzer?
                        Dann
                        kontaktiere uns für ein individuelles
                        Angebot.</a>
                </div>
            </div>
        </default-padding>
    </section>
</template>
<script setup>
import DefaultPadding from '../layouts/DefaultPadding.vue';
import TheToggleButton from '@/components/TheToggleButton.vue';
import ThePriceCard from './Cards/ThePriceCard.vue';
import { firstPriceCard, secondPriceCard, priceSmallCompanys, priceHugeCompanys } from '@/views/HomePage/data.js';
import NavButtonItem from './NavBar/Items/NavButtonItem.vue';
const props = defineProps({
    sectionTitle: {
        type: String,
        required: true,
    },
    titleMarked: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

});


function changePrice(index) {
    firstPriceCard.price = `${priceSmallCompanys[index]} €`;
    secondPriceCard.price = `${priceHugeCompanys[index]} €`;

}

</script>
<style scoped></style>