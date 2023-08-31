<template>
    <div class="w-screen overflow-hidden">
        <div class="hero-section w-screen flex sm:justify-center items-center sm:text-center overflow-hidden">
            <default-padding>
                <the-hero class=" no-bottom-margin" />
            </default-padding>
        </div>

        <default-padding>
            <div class="flex justify-center items-center">
                <img :src="coverImage" class="mb-16  w-full h-auto bg-cover bg-center rounded-md" />
            </div>
        </default-padding>

        <default-padding>
            <div class="info-card-container mb-16 relative flex flex-col xl:flex-row justify-center items-start">
                <the-info-card class="mt-5 xl:mt-0 "
                    :class="(item !== infoCardItems[0] && item !== infoCardItems[infoCardItems.length - 1]) ? 'xl:mx-5' : ''"
                    v-for="item in  infoCardItems " :key="item.title" :title="item.title" :description="item.description"
                    :improvementForUser="item.improvementForUser" :improvementText="item.improvementText"
                    :icon="item.icon" />
            </div>
        </default-padding>

        <default-padding>
            <the-horizontal-section class="mt-0 flex justify-center items-center" :items="FirstRadiobuttonSectionRB"
                sectionTitle="Wissen
                            Dokumentieren" titleMarked="Dokumentiere" title=" dein Wissen" description="Du bist der Experte. Nutze unseren Editor um Guides zu
                    erstellen und
                    mit
                    Fachwissen für
                    deine Teams zu
                    füllen." readMoreLink="https://writeaguide.com/de/features/document" :reverse="false" />
        </default-padding>
        <default-padding>
            <the-horizontal-section class="flex justify-center items-center" :items="SecondRadiobuttonSectionRB"
                sectionTitle="Wissen
                            Vernetzen" titleMarked="Teile" title=" dein Wissen"
                description="Führe deine Guides zusammen und nutze die unterschiedlichen Möglichkeiten, um Wissen zielgerichtet auszutauschen."
                readMoreLink="https://writeaguide.com/de/features/connect" :reverse="true" />
        </default-padding>
        <default-padding>
            <the-horizontal-section class="flex justify-center items-center" :items="ThirdRadiobuttonSectionRB"
                sectionTitle="Wissen
                            Optimieren" titleMarked="Optimiere" title=" dein Wissen"
                description="Nutze viele hilfreiche Funktionen, um das Wissen deiner Teams zielgerichtet optimieren zu können."
                readMoreLink="https://writeaguide.com/de/features/optimize" :reverse="false" />

        </default-padding>

        <default-padding>
            <the-horizontal-section class="flex justify-center items-center" :items="FourthRadiobuttonSectionRB"
                sectionTitle="Wissen
                            Auswerten" titleMarked="Analysiere" title=" dein Wissen"
                description="Alles wird mittels Kennzahlen greifbar gemacht. Wieso nicht auch das Wissensmanagement? Nutze unsere datengetriebenen Analysen."
                readMoreLink="https://writeaguide.com/de/features/analyze" :reverse="true" />

        </default-padding>


        <default-padding>
            <the-vertical-section class="flex justify-center items-center" :items="FifthtRadioButtonSectionRB"
                sectionTitle="Lösungen" titleMarked="Das Wissen" title=" an einem Ort"
                description="Verbinde Wissensdatenbank, Kurse und Hilfecenter an einem Ort. Dein zentrales Wissensmanagement." />
        </default-padding>

        <default-padding>
            <the-vertical-image-section class="flex justify-center items-center" sectionTitle="Gamification"
                titleMarked="Motiviere" title=" dein Team"
                description="Unser Gamification-System regt zum Erstellen und Konsumieren von Wissen an. Das steigert den Wissensaustausch im Team."
                :imageSRC="gamificationImage" />
        </default-padding>

        <default-padding>
            <the-vertical-cards-section class="flex justify-center items-center" sectionTitle="SICHERHEIT UND DATENSCHUTZ"
                titleMarked="Schütze" title=" dein Wissen"
                description="Wir sorgen dafür, dass dein Wissen sicher auf deutschen Servern gespeichert ist. Verschlüsselt, datenschutzkonform und cloudbasiert."
                :cardItems="verticalCardItems" />
        </default-padding>

        <default-padding>
            <the-vertical-image-section class="flex justify-center items-center" sectionTitle="Integrationen"
                titleMarked="Kompatibel" title=" mit deinen Tools"
                description="Mit Schnittstellen zu beliebten Anwendungen kannst du writeaguide ganz unkompliziert in deine Arbeitswelt integrieren."
                :imageSRC="integrationImage" />
        </default-padding>

        <the-pricing-cards-section class="flex justify-center items-start" sectionTitle="Preise" titleMarked="Digitalisiere"
            title=" dein Wissen"
            description="Teste writeaguide 60 Tage kostenlos. Im Anschluss kannst du dich für einen passenden Plan entscheiden und jederzeit kündigen." />

        <the-start-now-section />


        <the-footer class="py-14 px-4 md:px-8 lg:px-12" />


        <the-fixed-button class="fixed bottom-8 right-4" icon="bx-chat" />
    </div>
</template>

<script setup>
import DefaultPadding from '@/layouts/DefaultPadding.vue';
import TheHero from '@/components/TheHero.vue';
import TheInfoCard from '@/components/Cards/TheInfoCard.vue';
import TheHorizontalSection from '@/components/RadioButton/RadioButtonHorizontalSection/TheHorizontalSection.vue';
import TheVerticalSection from '@/components/RadioButton/RadioButtonVerticalSection/TheVerticalSection.vue';
import TheVerticalImageSection from '@/components/TheVerticalImageSection.vue';
import TheVerticalCardsSection from '@/components/TheVerticalCardsSection.vue';
import ThePricingCardsSection from '@/components/ThePricingCardsSection.vue';
import TheStartNowSection from '@/components/TheStartNowSection.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheFixedButton from '@/components/TheFixedButton.vue';

import coverImage from '@/assets/writeaguide-cover.jpg';
import integrationImage from '@/assets/integrations.svg';
import gamificationImage from '@/assets/gamification.svg';

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
