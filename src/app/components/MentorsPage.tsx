import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Heart,
  Code2,
  Landmark,
  X,
  ArrowRight,
  CalendarDays,
  Clock,
  Utensils,
  MessageCircle,
} from "lucide-react";
import { Seo } from "./Seo";
import anneNeoPhoto from "../../../images/Mentors/optimized/anne-neo.jpg";
import shyamPhoto from "../../../images/Mentors/optimized/shyam.jpg";
import imranPhoto from "../../../images/Mentors/optimized/imran-shah.jpg";
import zhengKangPhoto from "../../../images/Mentors/optimized/lum-zheng-kang.jpg";
import desmondPhoto from "../../../images/Mentors/optimized/desmond-teo.jpg";
import ycPhoto from "../../../images/Mentors/optimized/yong-cheng-low.jpg";
import alistairPhoto from "../../../images/Mentors/optimized/alistair-norris.jpg";
import andrewPhoto from "../../../images/Mentors/optimized/andrew-ho.jpg";
import petrinaPhoto from "../../../images/Mentors/optimized/petrina-yeow.jpg";
import maryAnnePhoto from "../../../images/Mentors/optimized/mary-anne-phang.jpg";
import julianPhoto from "../../../images/Mentors/optimized/julian-koo.jpg";
import tatMingPhoto from "../../../images/Mentors/optimized/ng-tat-ming.jpg";
import malcolmPhoto from "../../../images/Mentors/optimized/malcolm-tan.jpg";
import danielPhoto from "../../../images/Mentors/optimized/daniel-lim.jpg";
import hueiXinPhoto from "../../../images/Mentors/optimized/lou-huei-xin.jpg";

const MENTOR_BOOKING_URL = "https://forms.gle/3yGmUzzih2nvzvPp6";

type Domain = "healthcare" | "tech" | "publicgood";

const domains: Record<
  Domain,
  { label: string; short: string; color: string; bg: string; Icon: typeof Heart; blurb: string }
> = {
  healthcare: {
    label: "Healthcare & Social Care",
    short: "Healthcare",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.1)",
    Icon: Heart,
    blurb:
      "Pharmacists, physicians, therapists and clinicians who know how care actually works — on the ward, in the clinic, and in the community.",
  },
  tech: {
    label: "Tech & Product",
    short: "Tech",
    color: "#a855f7",
    bg: "rgba(168,85,247,0.1)",
    Icon: Code2,
    blurb:
      "Engineers, product managers and founders who have shipped healthtech products, AI systems and startups from idea to real users.",
  },
  publicgood: {
    label: "Tech for Public Good",
    short: "Public Good",
    color: "#14b8a6",
    bg: "rgba(20,184,166,0.1)",
    Icon: Landmark,
    blurb:
      "Builders, designers and impact practitioners from Open Government Products and beyond, building ground-up for the public.",
  },
};

interface Mentor {
  name: string;
  title: string;
  domain: Domain;
  photo?: string;
  /** CSS object-position for the square crop, e.g. "center top". */
  photoPosition?: string;
  initials?: string;
  whatIDo: string[];
  interests?: string;
  contribute?: string[];
}

const mentors: Mentor[] = [
  {
    name: "Ng Tat Ming",
    title:
      "Principal Pharmacist (Specialist) & Research and Innovation Lead, Tan Tock Seng Hospital · Faculty, Centre for Health Innovation, NHG Health",
    domain: "healthcare",
    photo: tatMingPhoto,
    whatIDo: [
      "I'm an experienced pharmacist and clinical leader at Tan Tock Seng Hospital with an interest in advancing clinical care through research and innovation. I also serve as faculty at the Centre for Health Innovation, NHG Health.",
      "Working as a council member of the Pharmaceutical Society of Singapore, I started HackitRx Singapore with a small team of like-minded pharmacists to build a platform for innovators of diverse backgrounds to come together to address local challenges in health and healthcare.",
    ],
    interests: "Value-based care · Artificial Intelligence · Clinical service development",
    contribute: [
      "I can help teams with problem statement development, design research, and questions on the public healthcare system and pharmacy practice in Singapore.",
    ],
  },
  {
    name: "Anne Neo Hui Ting",
    title:
      "Licensed Pharmacist · Centre Manager (Active Ageing Centre), Lions Befrienders Service Association · Founder & CEO, The Giving Collective",
    domain: "healthcare",
    photo: anneNeoPhoto,
    whatIDo: [
      "Worked as a pharmacist in public healthcare institutions for 6 years before moving on to the social care sector as a centre manager in an active ageing centre, curating programmes and stakeholder communications across various sectors — healthcare, politicians, town council and corporate partners. Served on the EXCO for the Society of Behavioural Health Singapore, organising conferences and workshops and advocating for person-centred care and lifestyle medicine, in addition to medication awareness, in improving health outcomes locally and internationally.",
      "Somewhere along the way, I started my own ground-up initiative to give back to the community through food distribution to low-income families and the elderly, pro bono health talks at homeless shelters and other Active Ageing Centres, and brightening public spaces through mural painting and creative art expression.",
      "Currently pursuing a Master of Public Health at NUS to broaden perspectives on health and social care, with a special interest in social determinants of health, health behaviour and communication, and comparative health policies across national borders.",
    ],
    interests:
      "Health literacy · Health and wellbeing · Underserved and less privileged populations (youths, seniors, families)",
    contribute: [
      "Value proposition, real-world experience, and perspectives at the meeting point between health and social care.",
    ],
  },
  {
    name: "Shyamsundar Venkataraman (Shyam)",
    title: "Engineering Manager, Open Government Products",
    domain: "publicgood",
    photo: shyamPhoto,
    whatIDo: [
      "I've been a software engineer most of my life and love building and automating tedious work. I've worked at startups and big tech, and decided to build for public good for the last few years.",
      "Worked on Bright, a referral management system used by AIC for referring patients in the ILTC (Intermediate to Long Term Care) sector. Also recently worked with the RefX team to launch Referral Exchange, helping digitise patient referrals from GPs to specialist clinics across Singapore.",
    ],
    contribute: ["Happy to help teams with anything engineering or product related."],
  },
  {
    name: "Levonne Goh",
    title:
      "Manager, Centre for Impact Investing and Practices, Temasek Trust · MPH Class of 2025, NUS · Volunteer, TriGen",
    domain: "publicgood",
    initials: "LG",
    whatIDo: [
      "Levonne has years of experience across the public and philanthropy sectors. She started her career at Enterprise Singapore, the local government agency championing enterprise development, where she helped engage and support healthcare and biomedical companies to grow and internationalise.",
      "Levonne holds a Bachelor of Arts (Honours) in Southeast Asian Studies from the National University of Singapore, as well as a Master in Public Health from the Saw Swee Hock School of Public Health. She will be embarking on a PhD with the University of Queensland in January 2027, where her research focuses on youth development. She is also an avid language learner, with intermediate to advanced proficiency in Japanese, Korean and Thai.",
      "Currently, Levonne is with the Centre for Impact Investing and Practices (CIIP), an entity within Temasek Trust. Her work entails research into impact investing opportunities and programme translation, focusing on areas such as sustainable agriculture and climate adaptation. Outside of CIIP, Levonne is an active youth leader and volunteer. She was the President of AIESEC Singapore, the local chapter of the world's largest youth-run organisation. Since 2021, she has also been with the Global Shapers Community, an initiative of the World Economic Forum to engage active changemakers across the world. She is also part of the research team at TriGen, supporting the evaluation of the inaugural Health Youth Leaders Programme (HYLP).",
    ],
  },
  {
    name: "Imran Shah",
    title: "Pharmacist & Healthcare Operator · Managing Director, Alami Clinic",
    domain: "healthcare",
    photo: imranPhoto,
    whatIDo: [
      "I am a pharmacist and Managing Director of Alami Clinic, a community-based geriatric practice. My work spans clinical pharmacy, healthcare operations, service development and business strategy. I continue to practise in oncology pharmacy while building and running community healthcare services. I am particularly interested in translating good clinical ideas into practical services that work for patients, caregivers and healthcare teams.",
    ],
    interests:
      "Clinical pharmacy · Medication safety · Geriatric and community care · Oncology · Caregiver support · Healthcare operations · Service design · Healthcare entrepreneurship · Patient access · Sustainable models of care",
    contribute: [
      "I would be most useful to teams that need a healthcare reality check: understanding the actual problem, testing whether a proposed solution fits clinical workflows, identifying implementation or safety issues, and thinking through how an idea could move from prototype to something patients and healthcare teams would genuinely use.",
      "I can also contribute on medication-related problems, community care, geriatric care, patient access and healthcare business models.",
    ],
  },
  {
    name: "Vivian Kee Jie Yi",
    title:
      "Senior Acupuncturist, Singapore General Hospital · TriGen HealthStart Committee · HomeCare Mentor",
    domain: "healthcare",
    initials: "VK",
    whatIDo: [
      "I am a clinician with interests in community health, healthy ageing, integrative medicine and healthcare innovation. Beyond clinical practice, I lead community outreach initiatives through TriGen HealthStart and mentor volunteers in HomeCare programmes, working to bridge healthcare, social care and the community.",
      "I am also actively involved in healthcare innovation and research, supporting Epic workflow optimisation, digital health initiatives, and technology-enabled solutions that improve care delivery and patient outcomes.",
    ],
    interests:
      "Community health · Healthy ageing · Preventive care · Healthcare innovation · Digital health · Integrative medicine · Service design · Volunteerism · Population health",
    contribute: [
      "I enjoy helping teams validate healthcare problems, understand patient and stakeholder needs, and translate ideas into practical, implementable solutions. I can contribute perspectives on community care, volunteer-led programmes, healthcare operations, patient engagement and real-world implementation.",
    ],
  },
  {
    name: "Lum Zheng Kang",
    title:
      "CEO & Founder, Collabring · Chairperson, Training Academy, Pharmaceutical Society of Singapore · Advisor (Medical), Renal Health Services",
    domain: "healthcare",
    photo: zhengKangPhoto,
    whatIDo: [
      "I am a pharmacist and health services researcher whose work focuses on translating clinical evidence into practical healthcare programmes that improve outcomes. I am the Founder and CEO of Collabring, a healthcare implementation company that works with healthcare organisations, professional associations, industry partners and academic institutions to design, implement and evaluate healthcare services across Asia and Europe.",
      "My work spans implementation research, person-centred care, health literacy and service innovation. I also serve as Chairperson of the Training Academy at the Pharmaceutical Society of Singapore and Medical Advisor to Renal Health Services Ltd., supporting professional education, community-based care and renal health projects.",
    ],
    interests:
      "Implementation · Health services research · Person-centred care · Health literacy · Heart-brain connection · Renal health · Interprofessional care · Service design · Programme evaluation",
    contribute: [
      "I would like to contribute to teams working on healthcare problems where understanding the patient, clinical context and real-world implementation is critical. I can help with problem definition, identifying unmet needs, challenging assumptions, clinical and operational workflow analysis, stakeholder perspectives, solution feasibility, implementation strategy and evaluation.",
      "I am particularly interested in helping teams bridge the gap between an innovative idea or prototype and a solution that can realistically be adopted and sustained in healthcare practice.",
    ],
  },
  {
    name: "Desmond Teo",
    title: "Product Manager & Pharmacist, Pharmacy Automation, Swisslog Healthcare",
    domain: "tech",
    photo: desmondPhoto,
    whatIDo: [
      "Started my career as a pharmacist at the National University Hospital, and always had a deep interest in technology. I eventually made the leap into healthcare data and analytics, where I built AI and automation solutions to support public health and medication safety.",
      "Through building these solutions, I realised that great technology alone is not enough — it also needs strong product thinking to ensure we are solving the right problems in a way that creates real impact. Today, I work as a Product Manager at Swisslog Healthcare, leading product strategy and development for pharmacy automation solutions across global markets.",
    ],
    interests: "The intersection of healthcare and clinical workflows, technology, and AI",
    contribute: [
      "Happy to help teams with anything related to technical development and product management — from framing and validating problem statements through market research and user interviews, to defining, scoping and prioritising features, product prototyping, and software development, testing and evaluation.",
    ],
  },
  {
    name: "Yong Cheng Low (YC)",
    title: "Software Engineer, National University Health System Artificial Intelligence Office",
    domain: "tech",
    photo: ycPhoto,
    whatIDo: [
      "I build AI systems at NUHS, working on LLMs and voice applications. I joined through NUH's Department of Medicine Innovation Office, so my work includes requirements gathering, market research, setting up the development platform, and shipping and running the system. Recent products include an AI-assisted medical coding tool, a speech-to-speech agent, setting up and usage of Metabase, and an authentication service.",
      "Before healthcare, I was at Glints, a recruitment startup, leading the technical team behind its recruiter products.",
    ],
    interests:
      "The parts of clinical AI where the engineering is genuinely hard: orchestrating multi-step agentic systems and knowing where they can safely assist · voice agents that take information from patients directly · getting models to reason over records far longer than their context window · evaluating output well enough to satisfy a regulated environment · building and running products that scale on cloud at minimal cost while adhering to strict regulations",
    contribute: [
      "I am happy to help teams with technical product management, understanding requirements and their clinical background, running market research, identifying the north star metric, and drawing out the technical architecture underneath. Scoping and architecture done together rather than handed between people.",
    ],
  },
  {
    name: "Alistair Norris",
    title: "HealthTech Design Lead, Open Government Products",
    domain: "publicgood",
    photo: alistairPhoto,
    whatIDo: [
      "I'm a designer and researcher with experience across healthcare, eldercare and social services. At Agency and my own studio, brief., I worked on projects exploring care, ageing and how people live together. Now I lead HealthTech Design at OGP, supporting the team across our healthcare products and helping shape their direction.",
      "My work brings together research, idea generation and rapid prototyping to help teams explore possibilities and learn what works.",
    ],
    interests:
      "Ageing, end-of-life care, and the experiences of patients, families, carers and frontline staff",
    contribute: [
      "Understanding care journeys, planning research, generating ideas and building quick prototypes to test them. I can help your team find a manageable starting point, work through different approaches, and consider how an idea would fit into people's lives and existing services.",
    ],
  },
  {
    name: "Andrew Ho",
    title: "Emergency Physician & Clinician Researcher, Singapore General Hospital",
    domain: "healthcare",
    photo: andrewPhoto,
    whatIDo: [
      "I am an Emergency Physician by training and work as a specialist in the Emergency Department of Singapore General Hospital. I also spend half my working time on research, where I currently focus on how to use artificial intelligence to solve healthcare problems in ways that are fair, trustworthy and clinically meaningful. I am particularly interested in the space where algorithms meet real patients, real clinicians and real-world complexity.",
    ],
    interests:
      "Artificial intelligence · Emergency medicine · Cardiovascular emergencies · Resuscitation · Population health",
    contribute: [
      "I could perhaps lend a lens into the messy real-world healthcare setting. The Emergency Department acts as a safety net for all kinds of healthcare misadventures, miscoordination and inequities. Working at the interface between different silos — hospital and community, primary and tertiary care, specialist and generalist care, ambulance and hospital, social services and medical care — I can give some insight into how things currently work, how a proposed thing might pan out, and how to mitigate pitfalls.",
    ],
  },
  {
    name: "Malcolm Tan",
    title: "Gastroenterologist",
    domain: "healthcare",
    photo: malcolmPhoto,
    whatIDo: [
      "I'm a practising Gastroenterologist with an interest in inflammatory bowel disease.",
    ],
    interests: "Inflammatory bowel disease · Endoscopy · Public health",
  },
  {
    name: "Petrina Yeow",
    title: "Product Manager, Open Government Products",
    domain: "publicgood",
    photo: petrinaPhoto,
    whatIDo: [
      "I studied Psychology and broke into tech the long way round: six internships, multiple hackathons and a lot of self-learning. That path took me through various jobs in digital marketing, branding and customer success before landing on Product. I started as a Product Designer at DBS, then moved into Product Management, and now build public products at OGP, working on products like ActiveSG, AskGov and Maps.",
      "Outside of work, I co-founded Work Live Digital, teaching seniors computer skills that the rest of us take for granted.",
    ],
    contribute: [
      "Happy to help teams with problem definition, solution ideation, product strategy and UX.",
    ],
  },
  {
    name: "Mary-Anne Phang",
    title:
      "Registered & Practising Occupational Therapist, Rocky Bay Community Disability · Neurodiversity-affirming, strengths-based practice & Disability-Inclusion advocate · Autism and disability researcher",
    domain: "healthcare",
    photo: maryAnnePhoto,
    whatIDo: [
      "Mary-Anne Phang is an Australian Health Practitioner Regulation Agency registered and practising Occupational Therapist, working across paediatric, youth and adult neurodiverse-affirming practice, parent and family-centred coaching, and clinical-therapy mentoring. Besides her professional qualification, she has lived experience in neurodiversity and extensive experience supporting neurodivergent individuals across the lifespan, from early childhood through adulthood, extending to parent coaching.",
      "With a strong interest in community disability and advocacy, Mary-Anne is passionate about self-discovery, meaningful participation, mental health and positive self-identity. She has supported individuals, families, educators and key stakeholders through clinical practice and educational programmes, while also contributing to autism research in Australia. Mary-Anne is currently contributing to a body of ongoing research targeting accessibility to justice in Singapore, from an occupational and holistic perspective.",
      "With strong experience supporting people with invisible, intellectual, cognitive and neuro-developmental disabilities in Singapore and Australia, Mary-Anne integrates strengths-based, family and person-centred, trauma-informed approaches of neurodiversity-affirming occupational therapy to promote inclusion, participation and meaningful engagement on all tiers of healthcare, community and everyday participation. She is a member of the Western Australian Occupational Therapy Association.",
    ],
    interests:
      "Neurodiverse-affirming practices, language and integration · Mental health and neurodiverse crossovers · Therapeutic interventions · Inclusive justice for people with complex support needs · Eating disorders · Early intervention · Neuro-developmental disorders and delays · Autism and disability research · Health literacy and societal inclusion within neurodiverse groups",
    contribute: [
      "Neuro-inclusion advocacy, lived experience, therapeutic and allied health mentorship, cognitive, environmental and occupational integration, intervention and community programme development, caregiver and support staff training and education, and upstream work mentorship.",
    ],
  },
  {
    name: "Julian Koo",
    title: "Digital Health Entrepreneur · Co-founder, Jaga-Me",
    domain: "tech",
    photo: julianPhoto,
    whatIDo: [
      "Julian is a digital health entrepreneur who enjoys working on impactful problems in health and medtech. He co-founded Jaga-Me, a digital home health platform that grew from an idea to serving over 50,000 patients. Julian also advises clinician and corporate leaders on venture creation, commercialisation and acquisitions.",
    ],
    interests: "Product and business model innovation",
    contribute: [
      "Problem definition. Product building. Startup venture creation. Commercialisation.",
    ],
  },
  {
    name: "Daniel Lim",
    title: "Gastroenterologist · Liver disease & data science for healthcare",
    domain: "healthcare",
    photo: danielPhoto,
    whatIDo: [
      "I am a gastroenterologist with an interest in liver disease and data science for healthcare. My teams have won prior local hackathons, including first place at the Singapore Healthcare AI Datathon and Expo 2022.",
    ],
    interests: "Liver disease · Fatty liver · AI and data science for healthcare",
    contribute: [
      "I can help teams understand healthcare problems on the ground and what technology solutions currently exist. I can also help teams work through design choices in their product development to increase validity and usability for healthcare.",
    ],
  },
  {
    name: "Lou Huei Xin",
    title:
      "Pharmacist, Singapore General Hospital · Joint appointment, MOH Chief Pharmacist's Office · Caregiver",
    domain: "healthcare",
    photo: hueiXinPhoto,
    photoPosition: "center 35%",
    whatIDo: [
      "Experienced pharmacist with Singapore General Hospital overseeing Pharmacy Practice and providing direct patient care to solid organ transplant patients and renal failure patients. Joint appointment at the MOH Chief Pharmacist's Office advising on supply chain, new pharmacy practice, and any other pharmacy-related matters. Also a caregiver.",
    ],
    interests:
      "Patient and public empowerment · Helping patients navigate the complex healthcare system · Use of technologies and AI",
    contribute: [
      "I can provide insight and help teams navigate the healthcare landscape, fine-tune the problem statement and test out the solution. I also bring the caregiver perspective.",
    ],
  },
];

function FadeIn({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function DomainTag({ domain, small }: { domain: Domain; small?: boolean }) {
  const d = domains[domain];
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full"
      style={{
        padding: small ? "3px 9px" : "4px 12px",
        fontSize: small ? "0.68rem" : "0.78rem",
        fontWeight: 700,
        color: d.color,
        background: d.bg,
        letterSpacing: "0.03em",
        whiteSpace: "nowrap",
      }}
    >
      <d.Icon size={small ? 11 : 13} />
      {d.label}
    </span>
  );
}

function MentorPhoto({
  m,
  className,
}: {
  m: Mentor;
  className?: string;
}) {
  if (m.photo) {
    return (
      <img
        src={m.photo}
        alt={m.name}
        loading="lazy"
        className={className}
        style={m.photoPosition ? { objectPosition: m.photoPosition } : undefined}
      />
    );
  }
  const d = domains[m.domain];
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${d.color}, #a855f7)`,
      }}
    >
      <span style={{ color: "#ffffff", fontWeight: 800, fontSize: "2.2rem" }}>
        {m.initials}
      </span>
    </div>
  );
}

function MentorCard({ m, onOpen }: { m: Mentor; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block text-left w-full"
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
      aria-label={`Read ${m.name}'s bio`}
    >
      <div
        className="relative rounded-2xl overflow-hidden mb-4"
        style={{
          aspectRatio: "1 / 1",
          boxShadow: "0 8px 24px rgba(26,26,46,0.1)",
        }}
      >
        <MentorPhoto
          m={m}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <DomainTag domain={m.domain} small />
        </div>
        <div
          className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg px-2.5 h-9 transition-all duration-200 group-hover:scale-105"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "#1a1a2e",
          }}
        >
          <MessageCircle size={15} style={{ color: "#ec4899" }} />
          Read bio
        </div>
      </div>
      <h3
        className="transition-colors duration-200 group-hover:text-[#ec4899]"
        style={{
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "#1a1a2e",
          lineHeight: 1.3,
        }}
      >
        {m.name}
      </h3>
      <p
        className="mt-1"
        style={{
          fontSize: "0.85rem",
          color: "#6a6a7e",
          lineHeight: 1.5,
        }}
      >
        {m.title}
      </p>
    </button>
  );
}

function BioSection({
  heading,
  color,
  children,
}: {
  heading: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h4
        className="mb-2"
        style={{
          fontSize: "0.75rem",
          fontWeight: 800,
          color,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {heading}
      </h4>
      {children}
    </div>
  );
}

function MentorModal({ m, onClose }: { m: Mentor; onClose: () => void }) {
  const d = domains[m.domain];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{
        background: "rgba(10, 6, 18, 0.7)",
        backdropFilter: "blur(6px)",
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${m.name} — mentor bio`}
    >
      <div
        className="relative w-full sm:max-w-3xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl"
        style={{
          background: "#ffffff",
          boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="sticky top-4 float-right mr-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid #ececf1",
            boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
            cursor: "pointer",
          }}
        >
          <X size={20} style={{ color: "#1a1a2e" }} />
        </button>

        <div className="p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-8">
            <div
              className="rounded-2xl overflow-hidden flex-shrink-0 w-32 h-32 sm:w-44 sm:h-44"
              style={{ boxShadow: "0 8px 24px rgba(26,26,46,0.12)" }}
            >
              <MentorPhoto m={m} className="w-full h-full object-cover object-center" />
            </div>
            <div className="min-w-0 pr-8">
              <DomainTag domain={m.domain} />
              <h3
                className="mt-3 mb-2"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                {m.name}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#6a6a7e", lineHeight: 1.55 }}>
                {m.title}
              </p>
            </div>
          </div>

          <BioSection heading="What I do" color={d.color}>
            {m.whatIDo.map((p, i) => (
              <p
                key={i}
                className="mb-3"
                style={{ fontSize: "0.97rem", color: "#4a4a5e", lineHeight: 1.75 }}
              >
                {p}
              </p>
            ))}
          </BioSection>

          {m.interests && (
            <BioSection heading="Interest areas" color={d.color}>
              <p style={{ fontSize: "0.97rem", color: "#4a4a5e", lineHeight: 1.75 }}>
                {m.interests}
              </p>
            </BioSection>
          )}

          {m.contribute && m.contribute.length > 0 && (
            <BioSection heading="Where I'd like to contribute as a mentor" color={d.color}>
              <div
                className="rounded-2xl p-5"
                style={{ background: d.bg, border: `1px solid ${d.color}33` }}
              >
                {m.contribute.map((p, i) => (
                  <p
                    key={i}
                    className={i < m.contribute!.length - 1 ? "mb-3" : ""}
                    style={{ fontSize: "0.97rem", color: "#1a1a2e", lineHeight: 1.75 }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </BioSection>
          )}

          <a
            href={MENTOR_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-transform duration-200 hover:scale-[1.03]"
            style={{
              fontSize: "0.95rem",
              background: "linear-gradient(135deg, #ec4899, #a855f7)",
              color: "#ffffff",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(236,72,153,0.35)",
            }}
          >
            Book a 15-min slot on 13 Sep <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function MentorsPage() {
  const [active, setActive] = useState<Mentor | null>(null);
  const [filter, setFilter] = useState<Domain | "all">("all");

  const shown =
    filter === "all" ? mentors : mentors.filter((m) => m.domain === filter);

  const counts = (Object.keys(domains) as Domain[]).map((k) => ({
    key: k,
    n: mentors.filter((m) => m.domain === k).length,
  }));

  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>
      <Seo
        title="Mentors — HackitRx 2026 | Healthcare, Tech and Public Good Experts Guiding Our Teams"
        description="Meet the HackitRx 2026 mentors: pharmacists, physicians, therapists, engineers, product managers and public-good builders volunteering their time to help hacker teams build ground-up tech for public good in healthcare."
      />

      {/* Hero */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #fef3f7 0%, #fef8fa 50%, #f5f3ff 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(236, 72, 153, 0.08)",
              border: "1.5px solid rgba(236, 72, 153, 0.25)",
            }}
          >
            <Sparkles size={16} style={{ color: "#ec4899" }} />
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#ec4899",
                letterSpacing: "0.06em",
              }}
            >
              Our Mentors
            </span>
          </div>

          <h1
            className="mb-6"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Guided by People Who are {" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Passionate About Tech for Public Good in Healthcare and Built the Fix.
            </span>
          </h1>
          <p
            className="mx-auto mb-4"
            style={{
              fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
              color: "#5a5a6e",
              lineHeight: 1.75,
              maxWidth: "760px",
            }}
          >
            Our mentors come from across healthcare, technology and the tech for
            public good space — pharmacists and physicians, engineers and product
            leads, designers and impact practitioners. What they share is a
            conviction that technology for public good in healthcare has to be
            built from the ground up, with the people who live the problem.
          </p>
          <p
            className="mx-auto"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              color: "#7a7a8e",
              lineHeight: 1.75,
              maxWidth: "700px",
            }}
          >
            Every one of them is volunteering their time to sit with our hacker
            teams, share their experience, and lend the unique insights that
            help scope a problem properly.
          </p>

          {/* Domain summary */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {counts.map(({ key, n }) => {
              const d = domains[key];
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setFilter(key);
                    document
                      .getElementById("mentor-grid")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="rounded-2xl p-5 text-left transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: `1px solid ${d.color}33`,
                    boxShadow: "0 4px 16px rgba(26,26,46,0.05)",
                    cursor: "pointer",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: d.bg }}
                    >
                      <d.Icon size={18} style={{ color: d.color }} />
                    </span>
                    <span
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: d.color,
                        lineHeight: 1,
                      }}
                    >
                      {n}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#1a1a2e",
                      marginBottom: "4px",
                    }}
                  >
                    {d.label}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#6a6a7e", lineHeight: 1.5 }}>
                    {d.blurb}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking CTA banner */}
      <section className="py-14" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div
              className="rounded-3xl p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center gap-8"
              style={{
                background: "#1a1a2e",
                boxShadow: "0 20px 50px rgba(26,26,46,0.25)",
              }}
            >
              <div className="flex-1">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                  style={{
                    background: "rgba(236,72,153,0.18)",
                    border: "1px solid rgba(236,72,153,0.4)",
                  }}
                >
                  <CalendarDays size={14} style={{ color: "#f9a8d4" }} />
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "#f9a8d4",
                      letterSpacing: "0.06em",
                    }}
                  >
                    13 SEPTEMBER · MID-TERM CHECK-IN
                  </span>
                </div>
                <h2
                  className="mb-3"
                  style={{
                    fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Hacker's Round Table:{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #f472b6, #c084fc)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    book your mentor slots
                  </span>
                </h2>
                <p
                  className="mb-5"
                  style={{
                    fontSize: "0.97rem",
                    color: "#c7c5d4",
                    lineHeight: 1.75,
                    maxWidth: "600px",
                  }}
                >
                  Book mentor slots via the link to address any burning
                  questions, get more diverse perspectives and sharpen your
                  problem statement before you commit to a build direction.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {[
                    { Icon: Clock, text: "12:15 PM – 1:00 PM" },
                    { Icon: Utensils, text: "Networking lunch" },
                    { Icon: MessageCircle, text: "3 × 15-min open consultation slots with specialised mentors" },
                  ].map(({ Icon, text }) => (
                    <span
                      key={text}
                      className="inline-flex items-center gap-2"
                      style={{ fontSize: "0.88rem", color: "#e5e3f0", fontWeight: 500 }}
                    >
                      <Icon size={15} style={{ color: "#f472b6", flexShrink: 0 }} />
                      {text}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <a
                  href={MENTOR_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 font-semibold transition-transform duration-200 hover:scale-[1.03]"
                  style={{
                    fontSize: "1rem",
                    background: "linear-gradient(135deg, #ec4899, #a855f7)",
                    color: "#ffffff",
                    textDecoration: "none",
                    boxShadow: "0 4px 16px rgba(236,72,153,0.35)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Book mentor slots 👉 <ArrowRight size={16} />
                </a>
                <span style={{ fontSize: "0.78rem", color: "#9a98ac" }}>
                  15 minutes per slot · first come, first served
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mentor grid */}
      <section id="mentor-grid" className="pt-6 pb-24" style={{ scrollMarginTop: "90px" }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2
              className="mb-2"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 700,
                color: "#1a1a2e",
              }}
            >
              Meet the Mentors
            </h2>
            <p
              className="mb-8"
              style={{
                fontSize: "1.05rem",
                color: "#6a6a7e",
                lineHeight: 1.7,
                maxWidth: "620px",
              }}
            >
              Click on a mentor to read their full bio — what they do, their
              interest areas, and where they'd most like to help your team.
            </p>
          </FadeIn>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {(
              [
                { key: "all", label: `All mentors (${mentors.length})`, color: "#1a1a2e" },
                ...(Object.keys(domains) as Domain[]).map((k) => ({
                  key: k,
                  label: `${domains[k].label} (${mentors.filter((m) => m.domain === k).length})`,
                  color: domains[k].color,
                })),
              ] as { key: Domain | "all"; label: string; color: string }[]
            ).map((f) => {
              const on = filter === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className="px-4 py-2 rounded-full transition-all duration-150"
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: on ? "#ffffff" : f.color,
                    background: on ? f.color : `${f.color}14`,
                    border: `1px solid ${on ? f.color : `${f.color}33`}`,
                    cursor: "pointer",
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {shown.map((m, i) => (
              <FadeIn key={m.name} delay={(i % 4) * 80}>
                <MentorCard m={m} onOpen={() => setActive(m)} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gratitude */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, #fef3f7 0%, #fef8fa 50%, #f5f3ff 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div
              className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                boxShadow: "0 8px 24px rgba(236,72,153,0.3)",
              }}
            >
              <Heart size={26} style={{ color: "#ffffff" }} />
            </div>
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: 700,
                color: "#1a1a2e",
                lineHeight: 1.2,
              }}
            >
              Thank you for showing up for our teams.
            </h2>
            <p
              className="mx-auto mb-8"
              style={{
                fontSize: "1.05rem",
                color: "#5a5a6e",
                lineHeight: 1.75,
                maxWidth: "680px",
              }}
            >
              Our mentors give their time freely — between shifts, clinics,
              sprints and product launches — to help hackers scope real
              problems and build ground-up tech for public good in healthcare.
              Their experience is what turns a good idea into something patients
              and care teams will actually use. To every mentor here: your effort
              will not go to waste.
            </p>
            <a
              href={MENTOR_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-transform duration-200 hover:scale-[1.03]"
              style={{
                fontSize: "0.95rem",
                background: "#1a1a2e",
                color: "#ffffff",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(26,26,46,0.25)",
              }}
            >
              Book a mentor slot for 13 Sep <ArrowRight size={16} />
            </a>
          </FadeIn>
        </div>
      </section>

      {active && <MentorModal m={active} onClose={() => setActive(null)} />}
    </div>
  );
}
