// data.js
import { ref, reactive } from "vue";
import editorImage from "@/assets/editor.jpg";
import versioningImage from "@/assets/versioning.jpg";
import responsiveImage from "@/assets/responsive.jpg";
import teamsImage from "@/assets/teams.jpg";
import permissionsImage from "@/assets/permissions.jpg";
import searchImage from "@/assets/search.jpg";
import knowledgeGapsImage from "@/assets/knowledge-gaps.jpg";
import outdatedImage from "@/assets/outdated.jpg";
import knowledgeCultureImage from "@/assets/knowledge-culture.jpg";
import progressImage from "@/assets/progress.jpg";
import knowledgeTransferImage from "@/assets/knowledge-transfer.jpg";
import specializationsImage from "@/assets/specializations.jpg";
import knowledgeBaseImage from "@/assets/knowledge-base.jpg";
import coursesImage from "@/assets/courses.jpg";
import helpCentersImage from "@/assets/help-centers.jpg";

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
    image: editorImage,
    groupName: "first",
  },
  {
    id: 2,
    name: "Versionierung",
    checked: false,
    image: versioningImage,
    groupName: "first",
  },
  {
    id: 3,
    name: "Responsive",
    checked: false,
    image: responsiveImage,
    groupName: "first",
  },
]);

export const SecondRadiobuttonSectionRB = ref([
  {
    id: 4,
    name: "Teams",
    checked: true,
    image: teamsImage,
    groupName: "second",
  },
  {
    id: 5,
    name: "Berechtigungen",
    checked: false,
    image: permissionsImage,
    groupName: "second",
  },
  {
    id: 6,
    name: "Suche",
    checked: false,
    image: searchImage,
    groupName: "second",
  },
]);

export const ThirdRadiobuttonSectionRB = ref([
  {
    id: 7,
    name: "Wissenslücken",
    checked: true,
    image: knowledgeGapsImage,
    groupName: "third",
  },
  {
    id: 8,
    name: "Veraltetes Wissen",
    checked: false,
    image: outdatedImage,
    groupName: "third",
  },
  {
    id: 9,
    name: "Wissenskultur",
    checked: false,
    image: knowledgeCultureImage,
    groupName: "third",
  },
]);

export const FourthRadiobuttonSectionRB = ref([
  {
    id: 10,
    name: "Fortschritt",
    checked: true,
    image: progressImage,
    groupName: "fourth",
  },
  {
    id: 11,
    name: "Wissenstransfer",
    checked: false,
    image: knowledgeTransferImage,
    groupName: "fourth",
  },
  {
    id: 12,
    name: "Spezialisierungen",
    checked: false,
    image: specializationsImage,
    groupName: "fourth",
  },
]);

export const FifthtRadioButtonSectionRB = ref([
  {
    id: 13,
    name: "Wissensdatenbank",
    checked: true,
    image: knowledgeBaseImage,
    groupName: "fifth",
  },
  {
    id: 14,
    name: "Kurse",
    checked: false,
    image: coursesImage,
    groupName: "fifth",
  },
  {
    id: 15,
    name: "Hilfecenter",
    checked: false,
    image: helpCentersImage,
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
