<template>
    <div class="w-screen min-h-screen overflow-y-auto overflow-x-hidden">

        <the-horizontal-section :items="FirstRadiobuttonSection" sectionTitle="Wissen
                            Dokumentieren" titleMarked="Dokumentiere " title="dein Wissen" description="Du bist der Experte. Nutze unseren Editor um Guides zu
                    erstellen und
                    mit
                    Fachwissen für
                    deine Teams zu
                    füllen." readMoreLink="" :reverse="false" />

        <the-horizontal-section :items="SecondRadiobuttonSection" sectionTitle="Wissen
                            Vernetzen" titleMarked="Teile " title="dein Wissen"
            description="Führe deine Guides zusammen und nutze die unterschiedlichen Möglichkeiten, um Wissen zielgerichtet auszutauschen."
            readMoreLink="" :reverse="true" />

        <the-horizontal-section :items="ThirdRadiobuttonSection" sectionTitle="Wissen
                            Optimieren" titleMarked="Optimiere " title="dein Wissen"
            description="Nutze viele hilfreiche Funktionen, um das Wissen deiner Teams zielgerichtet optimieren zu können."
            readMoreLink="" :reverse="false" />


    </div>
</template>

<script setup>

import { ref } from 'vue';
import TheHorizontalSection from '@/components/RadioButton/RadioButtonHorizontalSection/TheHorizontalSection.vue';

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



</script>

<style scoped></style>
