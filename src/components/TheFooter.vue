<template>
    <section class="footer">
        <div class="flex flex-col justify-between items-center">
            <div class="footer-header-container w-full flex justify-between items-center">
                <img src="src/assets/logo-white-bg.svg" class="w-40 h-auto cursor-pointer" @click="goToHome" />
                <div class="flex gap-5 justify-end items-center">
                    <span class="text-gray-500 text-xs hidden md:inline-block">Teste 60 Tage alle Funktionen. Keine
                        Zahlungsdaten
                        erforderlich.</span>
                    <the-primary-button text="Kostenlos testen" link="https://writeaguide.com/de/signup"
                        styling="text-white text-sm bg-green-500 hover:bg-green-600 py-3 px-5 hidden sm:inline-block" />
                </div>
            </div>
            <div class="footer-links-container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-8">
                <ul class="footer-products-links">
                    <li class="uppercase">
                        <h1 class="font-semibold text-sm text-gray-700 mb-3">Produkt</h1>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm" href="https://writeaguide.com/de#security">Sicherheit</a>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm" href="https://writeaguide.com/de/pricing">Preise</a>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm" href="https://writeaguide.com/de/about/version">Updates</a>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm" href="https://writeaguide.com/de/getting-started">Erste
                            Schritte</a>
                    </li>
                </ul>
                <ul class="footer-resources-links">
                    <li class="uppercase">
                        <h1 class="font-semibold text-sm text-gray-700 mb-3">Ressourcen</h1>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm" href="https://writeaguide.com/de/help">Hilfebereich</a>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm"
                            href="https://www.bugfeedr.com/writeaguide/5312912958/79-a56745fb-53af-4d86-9e0d-913d16798131">Fehler
                            melden</a>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm" href="https://writeaguide.com/de/blog">Blog</a>
                    </li>

                </ul>
                <ul class="footer-company-links">
                    <li class="uppercase">
                        <h1 class="font-semibold text-sm text-gray-700 mb-3">Unternehmen</h1>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm" href="https://www.instagram.com/writeaguide">Das Team</a>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm" href="https://writeaguide.com/de/careers">Karriere
                            melden</a>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm" href="https://writeaguide.com/de/blog">Blog</a>
                    </li>

                </ul>

                <ul class="footer-contact-links">
                    <li class="uppercase">
                        <h1 class="font-semibold text-sm text-gray-700 mb-3">Kontakt</h1>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm" href="https://writeaguide.com/de#">Live Chat</a>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm" href="mailto:hello@writeaguide.com">E-Mail senden
                            melden</a>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm" href="https://calendly.com/writeaguide/meeting-30">Persönliche
                            Beratung</a>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm" href="https://calendly.com/writeaguide/meeting-30">+49
                            17640466377</a>
                    </li>

                </ul>

                <ul class="footer-connect-links col-span-2 md:col-span-4 lg:col-span-1">
                    <li class="uppercase">
                        <h1 class="font-semibold text-sm text-gray-700 mb-3">Verbinde dich mit uns</h1>
                    </li>
                    <li>
                        <a class="text-gray-500 text-sm" href="https://writeaguide.com/de#">Mehr Einblicke in die
                            Plattform, das Team und unseren Alltag findest du in den sozialen Netzwerken. @writeaguide</a>
                    </li>
                    <li class="flex gap-1 mt-3">
                        <a class="text-gray-500 text-sm" href="https://www.instagram.com/writeaguide"><i
                                class='text-2xl bx bxl-instagram'></i></a>
                        <a class="text-gray-500 text-sm" href="https://twitter.com/writeaguide"><i
                                class='text-2xl bx bxl-twitter'></i></a>
                        <a class="text-gray-500 text-sm" href="https://www.facebook.com/writeaguide/"><i
                                class='text-2xl bx bxl-facebook'></i></a>
                        <a class="text-gray-500 text-sm" href="https://www.linkedin.com/company/writeaguide"><i
                                class='text-2xl bx bxl-linkedin'></i></a>
                    </li>

                </ul>


            </div>
            <div class="footer-ending-container mt-5 w-full flex flex-wrap justify-between items-center">
                <span class="text-gray-500 text-xs">© 2021 writeaguide.com</span>

                <a class="text-gray-500 text-xs" href="https://writeaguide.com/de/about/privacy">Datenschutzerklärung</a>
                <a class="text-gray-500 text-xs"
                    href="https://writeaguide.com/de/about/terms-and-conditions">Nutzungsbedingungen</a>
                <a class="text-gray-500 text-xs" href="https://writeaguide.com/de/about/legal-notice">Impressum</a>
            </div>
        </div>

    </section>
</template>
<script setup>
import ThePrimaryButton from './Button/ThePrimaryButton.vue';

function goToHome() {
    window.location.href = "https://writeaguide.com/de";
}
</script>
<style scoped></style>