<template>
    <section class="pricing-cards-section relative ">
        <div class="absolute top-0 left-0 w-full h-full bg-green-500 skew-container -z-10"></div>
        <default-padding>
            <div
                class="top-container w-full md:w-1/2 lg:w-2/3 p-4 lg:p-8 md:text-center flex flex-col justify-center items-center text-center text-white">
                <h1 class="text-3xl font-medium">Das Wissen deiner Teams an einem Platz</h1>
                <h2 class="text-xl font-normal">Beginne gleich kostenlos mit deinem smarten Wissensmanagement.</h2>
                <div class="flex mt-10 gap-4 justify-center items-center flex-col sm:flex-row flex-nowrap">
                    <the-primary-button link="https://writeaguide.com/de/signup" text="60 Tage kostenlos testen"
                        styling="bg-white text-green-500 py-4 px-12 whitespace-nowrap " />
                    <the-primary-button link="https://calendly.com/writeaguide/meeting-30" text="Persönliche Beratung"
                        styling="text-white md:border-white sm:border-2 py-4 px-12 whitespace-nowrap" />
                </div>


            </div>
        </default-padding>
    </section>
</template>
<script setup>
import DefaultPadding from '../layouts/DefaultPadding.vue';
import ThePrimaryButton from './Button/ThePrimaryButton.vue';
</script>
<style scoped>
.skew-container::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: inherit;
    transform: skewY(-6deg);
    transform-origin: top left;
}
</style>