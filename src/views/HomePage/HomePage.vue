<template>
    <div class="w-screen overflow-y-auto overflow-x-hidden ">
        <div class="hero-section w-screen flex sm:justify-center items-center sm:text-center ">
            <the-hero class="m-4 md:m-8 lg:m-12 no-bottom-margin" />
        </div>


        <div class="m-4 md:m-8 lg:m-12 flex justify-center items-center">
            <img src="src/assets/writeaguide-cover.jpg" class="mb-16  w-full h-auto bg-cover bg-center rounded-md" />
        </div>

        <div
            class="info-card-container p-0 sm:p-4 md:p-8 lg:p-12 mb-16 relative flex flex-col xl:flex-row justify-center items-start">
            <the-info-card class="mt-5 xl:mt-0 "
                :class="(item !== infoCardItems[0] && item !== infoCardItems[infoCardItems.length - 1]) ? 'xl:mx-5' : ''"
                v-for="item in  infoCardItems " :key="item.title" :title="item.title" :description="item.description"
                :improvementForUser="item.improvementForUser" :improvementText="item.improvementText" :icon="item.icon" />
        </div>


        <the-horizontal-section class="mt-0 p-4 sm:p-8 lg:p-12 flex justify-center items-center"
            :items="FirstRadiobuttonSectionRB" sectionTitle="Wissen
                            Dokumentieren" titleMarked="Dokumentiere" title=" dein Wissen" description="Du bist der Experte. Nutze unseren Editor um Guides zu
                    erstellen und
                    mit
                    Fachwissen für
                    deine Teams zu
                    füllen." readMoreLink="https://writeaguide.com/de/features/document" :reverse="false" />

        <the-horizontal-section class="p-8 lg:p-12 flex justify-center items-center" :items="SecondRadiobuttonSectionRB"
            sectionTitle="Wissen
                            Vernetzen" titleMarked="Teile" title=" dein Wissen"
            description="Führe deine Guides zusammen und nutze die unterschiedlichen Möglichkeiten, um Wissen zielgerichtet auszutauschen."
            readMoreLink="https://writeaguide.com/de/features/connect" :reverse="true" />

        <the-horizontal-section class="p-8 lg:p-12 flex justify-center items-center" :items="ThirdRadiobuttonSectionRB"
            sectionTitle="Wissen
                            Optimieren" titleMarked="Optimiere" title=" dein Wissen"
            description="Nutze viele hilfreiche Funktionen, um das Wissen deiner Teams zielgerichtet optimieren zu können."
            readMoreLink="https://writeaguide.com/de/features/optimize" :reverse="false" />

        <the-horizontal-section class="p-8 lg:p-12 flex justify-center items-center" :items="FourthRadiobuttonSectionRB"
            sectionTitle="Wissen
                            Auswerten" titleMarked="Analysiere" title=" dein Wissen"
            description="Alles wird mittels Kennzahlen greifbar gemacht. Wieso nicht auch das Wissensmanagement? Nutze unsere datengetriebenen Analysen."
            readMoreLink="https://writeaguide.com/de/features/analyze" :reverse="true" />


        <the-vertical-section class="p-8 lg:p-12 flex justify-center items-center" :items="FifthtRadioButtonSectionRB"
            sectionTitle="Lösungen" titleMarked="Das Wissen" title=" an einem Ort"
            description="Verbinde Wissensdatenbank, Kurse und Hilfecenter an einem Ort. Dein zentrales Wissensmanagement." />

        <the-vertical-image-section class="p-8 lg:p-12 flex justify-center items-center" sectionTitle="Gamification"
            titleMarked="Motiviere" title=" dein Team"
            description="Unser Gamification-System regt zum Erstellen und Konsumieren von Wissen an. Das steigert den Wissensaustausch im Team."
            imageSRC="/src/assets/gamification.svg" />

        <the-vertical-cards-section class="p-8 lg:p-12 flex justify-center items-center"
            sectionTitle="SICHERHEIT UND DATENSCHUTZ" titleMarked="Schütze" title=" dein Wissen"
            description="Wir sorgen dafür, dass dein Wissen sicher auf deutschen Servern gespeichert ist. Verschlüsselt, datenschutzkonform und cloudbasiert."
            :cardItems="verticalCardItems" />


        <the-vertical-image-section class="p-8 lg:p-12 flex justify-center items-center" sectionTitle="Integrationen"
            titleMarked="Kompatibel" title=" mit deinen Tools"
            description="Mit Schnittstellen zu beliebten Anwendungen kannst du writeaguide ganz unkompliziert in deine Arbeitswelt integrieren."
            imageSRC="/src/assets/integrations.svg" />

        <the-fixed-button class="fixed bottom-8 right-4" icon="bx-chat" />
    </div>
</template>

<script setup>
import TheHero from '@/components/TheHero.vue';
import TheInfoCard from '@/components/Cards/TheInfoCard.vue';
import TheHorizontalSection from '@/components/RadioButton/RadioButtonHorizontalSection/TheHorizontalSection.vue';
import TheVerticalSection from '@/components/RadioButton/RadioButtonVerticalSection/TheVerticalSection.vue';
import TheVerticalImageSection from '@/components/TheVerticalImageSection.vue';
import TheVerticalCardsSection from '@/components/TheVerticalCardsSection.vue';
import TheFixedButton from '@/components/TheFixedButton.vue';

import {
    infoCardItems,
    FirstRadiobuttonSectionRB,
    SecondRadiobuttonSectionRB,
    ThirdRadiobuttonSectionRB,
    FourthRadiobuttonSectionRB,
    FifthtRadioButtonSectionRB,
    verticalCardItems
} from './data.js';

</script>

<style scoped>
.no-bottom-margin {
    margin-bottom: 0 !important;
}
</style>
