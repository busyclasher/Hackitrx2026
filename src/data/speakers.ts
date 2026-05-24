import { speakerImages } from "./siteImages";

export type Speaker = {
  name: string;
  role: string;
  affiliation?: string;
  bio: string;
  image: string;
};

export type SpeakerSection = {
  id: string;
  title: string;
  description: string;
  speakers: Speaker[];
};

export const speakerSections: SpeakerSection[] = [
  {
    id: "healthcare",
    title: "Healthcare Leaders",
    description:
      "Clinicians and innovators bringing deep expertise in cancer care, surgery, and health systems.",
    speakers: [
      {
        name: "Dr Kennedy Ng",
        role: "Founder & Director, TriGen",
        affiliation: "Clinical Director, SGH Population Health & Integrated Care",
        bio: "Consultant Medical Oncologist and healthcare innovator focused on health systems, cancer care, and community impact. Founder of TriGen and recipient of the Lee Kuan Yew Scholarship and Harvard Kennedy School honours.",
        image: speakerImages["Dr Kennedy Ng"],
      },
      {
        name: "Dr Serene Goh",
        role: "Consultant Breast & General Surgeon, NUH",
        affiliation: "National University Hospital",
        bio: "Breast surgeon and researcher specialising in oncoplastic surgery and AI-driven healthcare innovation, advancing digital health initiatives in breast cancer care.",
        image: speakerImages["Dr Serene Goh"],
      },
    ],
  },
  {
    id: "advocates",
    title: "Patient Advocates",
    description:
      "Voices grounded in lived experience, shaping solutions that reflect real patient needs.",
    speakers: [
      {
        name: "Candy Gan",
        role: "Type 1 Diabetes Advocate",
        affiliation: "typeOne.sg & Diabetes Singapore",
        bio: "Living with Type 1 Diabetes since age 2, Candy advocates for patient voices through public speaking, education, and healthcare partnerships, transforming lived experience into meaningful impact.",
        image: speakerImages["Candy Gan"],
      },
      {
        name: "Ellil Mathiyan Lakshmanan",
        role: "President, Ostomy Association of Singapore",
        bio: "Double cancer survivor and patient advocate working with healthcare institutions and policymakers to strengthen patient partnerships and improve healthcare experiences.",
        image: speakerImages["Ellil Mathiyan Lakshmanan"],
      },
    ],
  },
  {
    id: "public-sector",
    title: "Public Sector & Technology",
    description:
      "Leaders building digital public services and partnerships that connect communities with government.",
    speakers: [
      {
        name: "Nicolas Spano",
        role: "Engineering Director, OGP",
        bio: "Leads teams building healthtech and public service digital products focused on practical, user-centred solutions with real-world impact.",
        image: speakerImages["Nicolas Spano"],
      },
      {
        name: "Sam Khoo",
        role: "Deputy Director, SGPO",
        bio: "Drives collaborations between citizens, communities, and government agencies to co-create impactful public initiatives and social innovation.",
        image: speakerImages["Sam Khoo"],
      },
    ],
  },
];
