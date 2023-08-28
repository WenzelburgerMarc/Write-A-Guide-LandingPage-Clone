// data.js
import { ref, reactive } from "vue";

export const infoCardItems = ref([
  {
    title: "Wissenstransfer fördern",
    description:
      "Sichere Mitarbeiterwissen und mach es zu wertvollem Unternehmenswissen.",
    improvementForUser: ["4", "x", "Verhindert Wissensverlust"],
    improvementText: "mehr dokumentiertes Wissen",
    icon: "bx bx-transfer",
  },
  {
    title: "Zeitersparnis nutzen",
    description:
      "Verkürze das Onboarding und erhöhe die Effizienz deiner täglichen Prozesse.",
    improvementForUser: ["45", "%", "18% effizientere Prozesse"],
    improvementText: "kürzere Einarbeitungszeiten",
    icon: "bx bx-time",
  },
  {
    title: "Wissenskultur etablieren",
    description:
      "Verbessere das Wissensmanagement, reduziere Fehler und motiviere Mitarbeiter.",
    improvementForUser: ["19", "%", "35% weniger Fehler"],
    improvementText: "motiviertere Mitarbeiter",
    icon: "bx bxs-graduation",
  },
]);

export const FirstRadiobuttonSectionRB = ref([
  {
    id: 1,
    name: "Editor",
    checked: true,
    image: "src/assets/editor.jpg",
    groupName: "first",
  },
  {
    id: 2,
    name: "Versionierung",
    checked: false,
    image: "src/assets/versioning.jpg",
    groupName: "first",
  },
  {
    id: 3,
    name: "Responsive",
    checked: false,
    image: "src/assets/responsive.jpg",
    groupName: "first",
  },
]);

export const SecondRadiobuttonSectionRB = ref([
  {
    id: 4,
    name: "Teams",
    checked: true,
    image: "src/assets/teams.jpg",
    groupName: "second",
  },
  {
    id: 5,
    name: "Berechtigungen",
    checked: false,
    image: "src/assets/permissions.jpg",
    groupName: "second",
  },
  {
    id: 6,
    name: "Suche",
    checked: false,
    image: "src/assets/search.jpg",
    groupName: "second",
  },
]);

export const ThirdRadiobuttonSectionRB = ref([
  {
    id: 7,
    name: "Wissenslücken",
    checked: true,
    image: "src/assets/knowledge-gaps.jpg",
    groupName: "third",
  },
  {
    id: 8,
    name: "Veraltetes Wissen",
    checked: false,
    image: "src/assets/outdated.jpg",
    groupName: "third",
  },
  {
    id: 9,
    name: "Wissenskultur",
    checked: false,
    image: "src/assets/knowledge-culture.jpg",
    groupName: "third",
  },
]);

export const FourthRadiobuttonSectionRB = ref([
  {
    id: 10,
    name: "Fortschritt",
    checked: true,
    image: "src/assets/progress.jpg",
    groupName: "fourth",
  },
  {
    id: 11,
    name: "Wissenstransfer",
    checked: false,
    image: "src/assets/knowledge-transfer.jpg",
    groupName: "fourth",
  },
  {
    id: 12,
    name: "Spezialisierungen",
    checked: false,
    image: "src/assets/specializations.jpg",
    groupName: "fourth",
  },
]);

export const FifthtRadioButtonSectionRB = ref([
  {
    id: 13,
    name: "Wissensdatenbank",
    checked: true,
    image: "src/assets/knowledge-base.jpg",
    groupName: "fifth",
  },
  {
    id: 14,
    name: "Kurse",
    checked: false,
    image: "src/assets/courses.jpg",
    groupName: "fifth",
  },
  {
    id: 15,
    name: "Hilfecenter",
    checked: false,
    image: "src/assets/help-centers.jpg",
    groupName: "fifth",
  },
]);

export const verticalCardItems = ref([
  {
    icon: "bx-shield",
    title: "Verschlüsselt",
    description:
      "Wir setzen auf höchste Sicherheitsstandards und modernste Verschlüsselungsmethoden.",
  },
  {
    icon: "bx-lock-alt",
    title: "Datenschutzkonform",
    description:
      "Unsere Datenhandhabung entspricht der DSGVO und deutschen Datenschutzstandards.",
  },
  {
    icon: "bx-cloud",
    title: "Cloudbasiert",
    description:
      "Greife von überall auf dein Wissen zu. Sicher gespeichert auf deutschen Servern.",
  },
]);

export const firstPriceCard = reactive({
  price: "6 €",
  title: "Premium",
  description: "Für kleine Unternehmen",
  features: [
    "Unbegrenzte Guides",
    "Individuelle Teamberechtigungen",
    "Detaillierte Wissensanalyse",
    "Gamification für Mehr Motivation",
    "Teambasierte Integrationen",
  ],
  link: "https://writeaguide.com/de/pricing",
});

export const secondPriceCard = reactive({
  price: "8 €",
  title: "Enterprise",
  description: "Für große Unternehmen",
  features: [
    "Alle Funktionen aus Premium",
    "Optimiere das Wissen mit Workflows",
    "Finde Experten mit den Spezialisierungen",
    "Zertifikate für Mitglieder",
    "Exportiere Guides",
  ],
  link: "https://writeaguide.com/de/pricing",
});

// Do Not Change Count of Elements in Array
export const priceSmallCompanys = [6, 7]; // Monthly / Yearly
export const priceHugeCompanys = [8, 9];
