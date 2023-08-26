<template>
    <div class="w-screen overflow-y-auto overflow-x-hidden">
        <div class="hero-section w-screen flex sm:justify-center items-center sm:text-center ">
            <the-hero class="m-4 md:m-8" />
        </div>


        <div class="m-4 md:m-8">
            <img src="src/assets/writeaguide-cover.jpg" class="mb-16  w-full h-auto bg-cover bg-center rounded-md" />
        </div>

        <div class="info-card-container p-0 sm:p-4 md:p-8 mb-16 relative flex flex-col xl:flex-row ">
            <the-info-card class="mt-5 xl:mt-0 "
                :class="(item !== infoCardItems[0] && item !== infoCardItems[infoCardItems.length - 1]) ? 'xl:mx-5' : ''"
                v-for="item in  infoCardItems " :key="item.title" :title="item.title" :description="item.description"
                :improvementForUser="item.improvementForUser" :improvementText="item.improvementText" :icon="item.icon" />
        </div>


        <the-horizontal-section class="mt-0 p-4 sm:p-8" :items="FirstRadiobuttonSection" sectionTitle="Wissen
                            Dokumentieren" titleMarked="Dokumentiere" title=" dein Wissen" description="Du bist der Experte. Nutze unseren Editor um Guides zu
                    erstellen und
                    mit
                    Fachwissen für
                    deine Teams zu
                    füllen." readMoreLink="https://writeaguide.com/de/features/document" :reverse="false" />

        <the-horizontal-section class="p-8" :items="SecondRadiobuttonSection" sectionTitle="Wissen
                            Vernetzen" titleMarked="Teile" title=" dein Wissen"
            description="Führe deine Guides zusammen und nutze die unterschiedlichen Möglichkeiten, um Wissen zielgerichtet auszutauschen."
            readMoreLink="https://writeaguide.com/de/features/connect" :reverse="true" />

        <the-horizontal-section class="p-8" :items="ThirdRadiobuttonSection" sectionTitle="Wissen
                            Optimieren" titleMarked="Optimiere" title=" dein Wissen"
            description="Nutze viele hilfreiche Funktionen, um das Wissen deiner Teams zielgerichtet optimieren zu können."
            readMoreLink="https://writeaguide.com/de/features/optimize" :reverse="false" />

        <the-horizontal-section class="p-8" :items="FourthRadiobuttonSection" sectionTitle="Wissen
                            Auswerten" titleMarked="Analysiere" title=" dein Wissen"
            description="Alles wird mittels Kennzahlen greifbar gemacht. Wieso nicht auch das Wissensmanagement? Nutze unsere datengetriebenen Analysen."
            readMoreLink="https://writeaguide.com/de/features/analyze" :reverse="true" />


        <the-vertical-section class="p-8" :items="FifthtRadioButtonSection" sectionTitle="Lösungen" titleMarked="Das Wissen"
            title=" an einem Ort"
            description="Verbinde Wissensdatenbank, Kurse und Hilfecenter an einem Ort. Dein zentrales Wissensmanagement." />

        <the-vertical-section-no-r-b class="p-8" sectionTitle="Gamification" titleMarked="Motiviere" title=" dein Team"
            description="Unser Gamification-System regt zum Erstellen und Konsumieren von Wissen an. Das steigert den Wissensaustausch im Team."
            imageSRC="/src/assets/gamification.svg" />

        <the-vertical-cards-section class="p-8" sectionTitle="SICHERHEIT UND DATENSCHUTZ" titleMarked="Schütze"
            title=" dein Wissen"
            description="Wir sorgen dafür, dass dein Wissen sicher auf deutschen Servern gespeichert ist. Verschlüsselt, datenschutzkonform und cloudbasiert."
            :cardItems="cardItems" />


        <the-fixed-button class="fixed bottom-8 right-4" icon="bx-chat" />
    </div>
</template>

<script setup>

import { ref } from 'vue';
import TheHero from '@/components/TheHero.vue';
import TheInfoCard from '@/components/Cards/TheInfoCard.vue';
import TheHorizontalSection from '@/components/RadioButton/RadioButtonHorizontalSection/TheHorizontalSection.vue';
import TheVerticalSection from '@/components/RadioButton/RadioButtonVerticalSection/TheVerticalSection.vue';
import TheVerticalSectionNoRB from '@/components/TheVerticalSectionNoRB.vue';
import TheVerticalCardsSection from '@/components/TheVerticalCardsSection.vue';
import TheFixedButton from '@/components/TheFixedButton.vue';
const infoCardItems = ref([
    {
        title: "Wissenstransfer fördern",
        description: "Sichere Mitarbeiterwissen und mach es zu wertvollem Unternehmenswissen.",
        improvementForUser: ['4', 'x', 'Verhindert Wissensverlust'],
        improvementText: 'mehr dokumentiertes Wissen',
        icon: 'bx bx-transfer',
    },
    {
        title: "Zeitersparnis nutzen",
        description: "Verkürze das Onboarding und erhöhe die Effizienz deiner täglichen Prozesse.",
        improvementForUser: ['45', '%', '18% effizientere Prozesse'],
        improvementText: 'kürzere Einarbeitungszeiten',
        icon: 'bx bx-time',
    },
    {
        title: "Wissenskultur etablieren",
        description: "Verbessere das Wissensmanagement, reduziere Fehler und motiviere Mitarbeiter.",
        improvementForUser: ['19', '%', '35% weniger Fehler'],
        improvementText: 'motiviertere Mitarbeiter',
        icon: 'bx bxs-graduation',
    }


])


const FirstRadiobuttonSection = ref([
    { id: 1, name: 'Editor', checked: true, image: 'src/assets/editor.jpg', groupName: 'first' },
    { id: 2, name: 'Versionierung', checked: false, image: 'src/assets/versioning.jpg', groupName: 'first' },
    { id: 3, name: 'Responsive', checked: false, image: 'src/assets/responsive.jpg', groupName: 'first' },
]);

const SecondRadiobuttonSection = ref([
    { id: 4, name: 'Teams', checked: true, image: 'src/assets/teams.jpg', groupName: 'second' },
    { id: 5, name: 'Berechtigungen', checked: false, image: 'src/assets/permissions.jpg', groupName: 'second' },
    { id: 6, name: 'Suche', checked: false, image: 'src/assets/search.jpg', groupName: 'second' },
]);

const ThirdRadiobuttonSection = ref([
    { id: 7, name: 'Wissenslücken', checked: true, image: 'src/assets/knowledge-gaps.jpg', groupName: 'third' },
    { id: 8, name: 'Veraltetes Wissen', checked: false, image: 'src/assets/outdated.jpg', groupName: 'third' },
    { id: 9, name: 'Wissenskultur', checked: false, image: 'src/assets/knowledge-culture.jpg', groupName: 'third' },
]);

const FourthRadiobuttonSection = ref([
    { id: 10, name: 'Fortschritt', checked: true, image: 'src/assets/progress.jpg', groupName: 'fourth' },
    { id: 11, name: 'Wissenstransfer', checked: false, image: 'src/assets/knowledge-transfer.jpg', groupName: 'fourth' },
    { id: 12, name: 'Spezialisierungen', checked: false, image: 'src/assets/specializations.jpg', groupName: 'fourth' },
]);

const FifthtRadioButtonSection = ref([
    { id: 13, name: 'Wissensdatenbank', checked: true, image: 'src/assets/knowledge-base.jpg', groupName: 'fifth' },
    { id: 14, name: 'Kurse', checked: false, image: 'src/assets/courses.jpg', groupName: 'fifth' },
    { id: 15, name: 'Hilfecenter', checked: false, image: 'src/assets/help-centers.jpg', groupName: 'fifth' },
]);

const cardItems = ref([
    {
        icon: 'bx-shield',
        title: 'Verschlüsselt',
        description: 'Wir setzen auf höchste Sicherheitsstandards und modernste Verschlüsselungsmethoden.',
    },
    {
        icon: 'bx-lock-alt',
        title: 'Datenschutzkonform',
        description: 'Unsere Datenhandhabung entspricht der DSGVO und deutschen Datenschutzstandards.',
    },
    {
        icon: 'bx-cloud',
        title: 'Cloudbasiert',
        description: 'Greife von überall auf dein Wissen zu. Sicher gespeichert auf deutschen Servern.',
    },
]);


</script>

<style scoped></style>
