import { pastWinnerImages } from "./siteImages";

export const innovations2025 = [
  {
    team: "Care+",
    image: pastWinnerImages.carePlus2025,
    solutions: [
      "Optimised medication scheduling for cancer treatment",
      "Financial planning tool for insurance coverage",
      "Personalised patient education",
    ],
  },
  {
    team: "GoldLabel+",
    image: pastWinnerImages.goldLabel2025,
    solutions: [
      "AI-powered simplified medication labels",
      "Visual pictograms for easy understanding",
      "Multi-language translation support",
    ],
  },
  {
    team: "PillSnap",
    image: pastWinnerImages.pillSnap2025,
    imageFit: "contain" as const,
    solutions: [
      "AI pill identification using image recognition",
      "Analyzes colour, size, and imprint details",
      "Provides ranked match suggestions",
    ],
  },
] as const;

export const winners2024 = [
  {
    prize: "Champion",
    team: "Missy Bot 1.0",
    group: "Group 13",
    description:
      "AI breast care nurse supporting elderly patients with cognitive, visual, and hearing impairments.",
    image: pastWinnerImages.missyBot2024,
  },
  {
    prize: "1st Runner-up",
    team: "SimplePLAN",
    group: "Group 4",
    description: "Digital platform enabling advanced care planning conversations.",
    image: pastWinnerImages.acp2024,
  },
  {
    prize: "2nd Runner-up",
    team: "RALPH",
    group: "Group 19",
    description: "Personalised pocket pharmacist supporting counselling services.",
    image: pastWinnerImages.ralph2024,
  },
] as const;
