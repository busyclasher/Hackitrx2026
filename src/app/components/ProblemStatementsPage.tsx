import { useState } from "react";
import { ArrowDown, ArrowRight, X } from "lucide-react";
import { Seo } from "./Seo";

import ccssLogo from "../../../images/Organisations Photos/Crohn_s and Colitis Society of Singapore/CCSS_logo_2x.png";
import colonoscopyLogo from "../../../images/Organisations Photos/Colonoscopy Workgroup/Logo Colonscopy Workgroup.jpg";
import nkfLogo from "../../../images/Organisations Photos/The National Kidney Foundation/NKF Logo/NKF_Red_Logo.png";
import hcaLogo from "../../../images/Organisations Photos/HCA Hospice/HCA Logo.png";
import mindsLogo from "../../../images/Organisations Photos/MINDS/MINDS Logo.png";
import lakesideLogo from "../../../images/Organisations Photos/Lakeside Family Services/Lakeside Family Services_Logo.png";
import hssLogo from "../../../images/Organisations Photos/Haemophilia Society of Singapore/Logo/HSS-LOGO-no-bg.png";
import nuhsLogo from "../../../images/Organisations Photos/NUHS/nuhs.png";

const TELEGRAM_CHANNEL_URL = "https://t.me/+GLw0053W_PQxYzc9";

interface Problem {
  number: number;
  headline: string;
  problem: string;
  tags: string[];
}

interface Partner {
  name: string;
  shortName: string;
  logo: string;
  whoTheyAre: string;
  note?: string;
  problems: Problem[];
}

interface Category {
  id: string;
  number: string;
  navLabel: string;
  title: string;
  summaryTitle: string;
  cardSummary: string;
  problemRange: string;
  description: string;
  partners: Partner[];
}

const categories: Category[] = [
  {
    id: "category-1",
    number: "01",
    navLabel: "Between Clinic Visits",
    title: "Between Clinic Visits",
    summaryTitle: "Living well with a condition at home",
    cardSummary:
      "Most of a chronic condition is lived at home, not in the clinic. Tools for the long stretches when no clinician is in the room.",
    problemRange: "See problems 1–5",
    description:
      "Most of a chronic condition is lived at home, not in the clinic. These problems are about the moments when no clinician is in the room: keeping to a lifelong injection routine without burning out, knowing what to do when a bleed happens at 2am on a Sunday, preparing safely for a colonoscopy in your own kitchen, or capturing weeks of shifting symptoms so you arrive at a short consultation ready to be heard. The common thread is turning fragmented, hard-to-recall guidance — PDFs, WhatsApp threads, memory of what a nurse once said — into something structured, trusted and patient-owned.",
    partners: [
      {
        name: "Haemophilia Society of Singapore (HSS)",
        shortName: "HSS",
        logo: hssLogo,
        whoTheyAre:
          "Haemophilia Society of Singapore (HSS) is a patient-led organisation supporting individuals with haemophilia, many of whom suffer from unexpected bleeds and chronic joint issues. HSS supports haemophilia members and their families through peer support, education, advocacy, and medical subsidies, striving towards a holistic approach to improve their long-term health and enable them to lead active, fulfilling lives.",
        note: "HSS has submitted three problems. Teams may pick any one.",
        problems: [
          {
            number: 1,
            headline: "Prophylaxis that fits around life, not the other way round",
            problem:
              "Haemophilia patients self-inject factor one to three times a week, for life. Miss a dose, shift a dose, or have a bleed, and every reminder they've set up falls apart. Generic medication apps can't track factor half-life, stock left at home, or when it's safe to exercise or travel. The result: mental burnout, abandoned regimes, and breakthrough bleeds that cause lasting joint damage.",
            tags: [
              "Medication adherence",
              "Chronic condition self-management",
              "Reminders & tracking",
            ],
          },
          {
            number: 2,
            headline: "Bleed guidance at 2am on a Sunday",
            problem:
              "Bleeds don't keep within clinic hours.. When one happens at night, on a weekend, or on a public holiday, families rely on memory of what a nurse said months ago, WhatsApp peer advice, or Google. Site-specific first aid (a joint bleed is not a muscle bleed is not a gum bleed) is hard to recall under stress, so families defer reporting until Monday — and delay raises the risk of long-term joint damage.",
            tags: ["Patient education", "Triage & first aid", "Off-hours support"],
          },
          {
            number: 3,
            headline: "Travelling with haemophilia, without the dread",
            problem:
              "Going overseas means carrying factor across borders, keeping it cold in transit, and knowing what to do if supplies run out or a bleed happens in a foreign emergency department with a language barrier. Today's guidance is scattered across static PDFs, old webinar recordings and buried WhatsApp threads — useless in a high-stress moment abroad, often without Wi-Fi.",
            tags: ["Travel & mobility", "Offline-first", "Emergency reference"],
          },
        ],
      },
      {
        name: "Crohn's & Colitis Society Singapore (CCSS)",
        shortName: "CCSS",
        logo: ccssLogo,
        whoTheyAre:
          "Crohn's disease and ulcerative colitis are lifelong illnesses of the gut. Many patients are diagnosed young, facing years of uncertainty, difficult symptoms and the financial strain of ongoing care. CCSS brings them together, helps them navigate life despite challenges, makes sure patients have a voice in decisions about their care, and helps shape research into conditions still poorly understood in Singapore.",
        problems: [
          {
            number: 4,
            headline: "Ten minutes with the doctor. Months of symptoms to explain.",
            problem:
              "IBD symptoms, food reactions, energy and mood change every day. By the time a patient sits in a short consultation — often while physically unwell and overwhelmed — they struggle to remember, organise and explain what happened, and are unsure what the clinician actually needs to know. Without clear patient input, consultations miss the lived-experience context needed for meaningful treatment and recovery decisions.",
            tags: ["Symptom tracking", "Consultation prep", "Shared decision-making"],
          },
        ],
      },
      {
        name: "Colonoscopy Workgroup — Lynch Syndrome Support Singapore & Ostomy Association of Singapore",
        shortName: "Colonoscopy Workgroup",
        logo: colonoscopyLogo,
        whoTheyAre:
          "Lynch Syndrome Support Singapore is a ground-up initiative raising awareness and supporting people with a Lynch gene variant causing elevated lifetime risk of colon and other cancers. The Ostomy Association of Singapore supports people living with a stoma after colorectal cancer surgery. Together, they seek to close the gaps in the colonoscopy patient journey.",
        problems: [
          {
            number: 5,
            headline: "“So what can I actually eat?”",
            problem:
              "Patients preparing for a colonoscopy — whether for a medical concern or routine screening — often have to find guidance themselves, from unverified sources online or from people they know, on what they can eat and drink according to their cultural dietary preferences in the 3–5 days before the scope. Too strict means needless fatigue, hunger and discomfort; too loose means poor bowel prep and a rescheduled or repeated scope. Either way, patients are put off future screening — and the price is missed polyps and tumours.",
            tags: ["Cancer screening", "Dietary guidance", "Patient education"],
          },
        ],
      },
    ],
  },
  {
    id: "category-2",
    number: "02",
    navLabel: "At the Point of Care",
    title: "At the Point of Care",
    summaryTitle: "Better information when it matters most",
    cardSummary:
      "High-stakes moments with very little time — a treatment decision for life, a prescription that can't be filled. Get the right information into patients' hands before the moment arrives.",
    problemRange: "See problems 6–7",
    description:
      "Some moments in care carry enormous weight and very little time: choosing a dialysis pathway for life in a 15-minute consult, or arriving at a pharmacy with a hospice prescription only to be turned away because the drug isn't stocked. These problems sit at the meeting point between patient and system, where anxiety, information overload and out-of-date knowledge get in the way of good choices and timely access. Build tools that put the right information — about treatment options, personal values, and what's actually available — in patients' and caregivers' hands before the moment arrives, not after.",
    partners: [
      {
        name: "The National Kidney Foundation (NKF)",
        shortName: "NKF",
        logo: nkfLogo,
        whoTheyAre:
          "NKF strives to be an advocate and integrator for kidney health and holistic care for the community, by the community. While supporting kidney failure patients with quality dialysis treatment and integrated care, its greater mission lies in preventing or delaying kidney failure through kidney health education, with deeper integration into the community and strategic collaborative partnerships.",
        problems: [
          {
            number: 6,
            headline: "Choosing a treatment for life, in a 15-minute consult",
            problem:
              "Persons with chronic kidney disease and their caregivers must decide with their doctor on a treatment option at the end stage of the disease — often without the time or understanding to weigh the options, their pros and cons, and whether each fits their lifestyle, goals, preferences and needs. Anxiety, misconceptions, information overload and reliance on recommendations can lead to a treatment that isn't optimal for them.",
            tags: ["Shared decision-making", "Kidney disease", "Values-based care"],
          },
        ],
      },
      {
        name: "HCA Hospice Care (HCA)",
        shortName: "HCA",
        logo: hcaLogo,
        whoTheyAre:
          "Each year, HCA makes over 46,000 home visits, journeying alongside patients with life-limiting illnesses regardless of age, religion, ethnicity, nationality and financial status. HCA's patient-centred care includes medical support, prescriptions and medications provided according to individual needs, helping patients receive symptom management and comfort at home when needed.",
        problems: [
          {
            number: 7,
            headline: "Turned away at the pharmacy counter",
            problem:
              "Patients and caregivers take an HCA prescription to a polyclinic or government restructured hospital to buy subsidised medication — and are sometimes turned away because the pharmacy has no stock or restricts supply of that particular medicine. The result: wasted time for patients, caregivers and pharmacy staff, wasted travel cost, delayed access to medication, and real emotional distress for families who have little time to spare.",
            tags: ["Medication access", "Palliative care", "Information currency"],
          },
        ],
      },
    ],
  },
  {
    id: "category-3",
    number: "03",
    navLabel: "Beyond the Hospital",
    title: "Beyond the Hospital",
    summaryTitle: "Coordination, inclusion and ageing in place",
    cardSummary:
      "Care doesn't stop at the hospital door. Build the connective tissue between services, volunteers, neighbours and frontline staff so community care works as a system.",
    problemRange: "See problems 8–10",
    description:
      "Care doesn't stop at the hospital door, and neither do the problems. These challenges are about the ecosystem around a person: a high-risk senior discharged with no one to join the dots between rehab, meals and volunteers; a person with intellectual disability who lives in the neighbourhood but can't access what's happening in it; counsellors juggling five platforms and twenty spreadsheets before a single client can be seen. Some of these problems belong to the people receiving care, and some to the people delivering it. Either way, the task is to build the connective tissue — coordinating services, activating volunteers and neighbours, and lifting the manual burden off frontline staff — so that community care works as a system.",
    partners: [
      {
        name: "National University Health System (NUHS)",
        shortName: "NUHS",
        logo: nuhsLogo,
        whoTheyAre:
          "NUHS is one of three public healthcare clusters in Singapore, and an integrated Academic Health System and Regional Health System that delivers value-driven, innovative and sustainable healthcare. As a Regional Health System, NUHS works closely with community hospitals, general practitioners, family medicine clinics, nursing homes and other community partners to provide integrated care to the community.",
        problems: [
          {
            number: 8,
            headline: "Discharged on Monday, readmitted by Friday",
            problem:
              "High-risk, ageing seniors and their caregivers need to navigate and coordinate health and social care while ageing in their own neighbourhoods. Existing community resources are fragmented, and stitching them together takes resource-taxing manual coordination — with no unified platform to activate local volunteer networks or sustain continuous care follow-through. The result is frequent, unplanned hospital visits.",
            tags: ["Ageing in place", "Care coordination", "Community health"],
          },
        ],
      },
      {
        name: "MINDS",
        shortName: "MINDS",
        logo: mindsLogo,
        whoTheyAre:
          "MINDS has been caring for Persons with Intellectual Disability (PWIDs) and their families since 1962. Grounded in the belief that all PWIDs have innate abilities and talents, MINDS is committed to empowering them and enhancing their quality of life, while advocating for greater inclusivity for PWIDs as a nation. Today, MINDS is one of the largest charities in Singapore, serving more than 13,500 PWIDs and caregivers.",
        problems: [
          {
            number: 9,
            headline: "Living in the neighbourhood, but not part of it",
            problem:
              "High-functioning PWIDs living in public rental estates want to join what's happening around them — but event information is cognitively inaccessible, designed for neurotypical readers, so they can't find or plan for activities on their own. Their neighbours, meanwhile, lack the practical skills and confidence to engage them. The outcome is social isolation and reduced self-reliance, on both sides of the door.",
            tags: ["Accessibility & inclusion", "Community building", "Disability"],
          },
        ],
      },
      {
        name: "Lakeside Family Services",
        shortName: "Lakeside",
        logo: lakesideLogo,
        whoTheyAre:
          "Lakeside Family Services has served the community since 1993, regardless of race, language or religion. Lakeside strengthens marriages and families, develops resilience in disadvantaged children, supports troubled youths, empowers active seniors to help lonely seniors, assists ex-offenders in reintegrating into society, and helps women with unsupported pregnancies — so individuals and families can find hope and healing.",
        problems: [
          {
            number: 10,
            headline: "Five platforms, twenty spreadsheets, one counsellor's memory",
            problem:
              "Before counselling can start, counsellors, administrative staff and supervisors must work across multiple platforms that don't communicate with one another. Managing information, tracking task status and allocating cases all rely on manual coordination, raising the risk of missing, inconsistent or outdated information. This affects the timeliness and safety of service delivery, places staff under heavy cognitive and administrative burden, and makes fair, sustainable case distribution hard to guarantee.",
            tags: ["Workflow & operations", "Case management", "Mental health services"],
          },
        ],
      },
    ],
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function TagChip({
  tag,
  active,
  onClick,
}: {
  tag: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-2.5 py-1 rounded-full transition-colors duration-150"
      style={{
        fontSize: "0.72rem",
        fontWeight: 700,
        color: active ? "#ffffff" : "#a855f7",
        background: active
          ? "linear-gradient(135deg, #ec4899, #a855f7)"
          : "rgba(168,85,247,0.08)",
        border: "1px solid rgba(168,85,247,0.2)",
        cursor: "pointer",
      }}
      title={active ? "Clear filter" : `Show problems tagged “${tag}”`}
    >
      {tag}
    </button>
  );
}

function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <div
      className="inline-flex items-center justify-center rounded-xl bg-white"
      style={{
        height: "96px",
        maxWidth: "280px",
        border: "1px solid #ececf1",
        padding: "12px 20px",
      }}
    >
      <img
        src={partner.logo}
        alt={partner.name}
        title={partner.name}
        loading="lazy"
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
      />
    </div>
  );
}

function ProblemCard({
  problem,
  activeTag,
  onTagClick,
}: {
  problem: Problem;
  activeTag: string | null;
  onTagClick: (tag: string) => void;
}) {
  const dimmed = activeTag !== null && !problem.tags.includes(activeTag);
  return (
    <div
      className="rounded-2xl bg-white p-6 transition-all duration-300"
      style={{
        border: "1px solid #ececf1",
        boxShadow: "0 4px 20px rgba(26,26,46,0.05)",
        opacity: dimmed ? 0.3 : 1,
      }}
    >
      <div className="flex items-start gap-3 mb-3">
        <span
          className="flex items-center justify-center rounded-lg flex-shrink-0"
          style={{
            width: "34px",
            height: "34px",
            fontSize: "0.95rem",
            fontWeight: 800,
            color: "#ffffff",
            background: "linear-gradient(135deg, #ec4899, #a855f7)",
          }}
        >
          {problem.number}
        </span>
        <h4
          style={{
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "#1a1a2e",
            lineHeight: 1.35,
            paddingTop: "3px",
          }}
        >
          {problem.headline}
        </h4>
      </div>

      <p
        className="mb-3"
        style={{ fontSize: "0.95rem", color: "#4a4a5e", lineHeight: 1.75 }}
      >
        <strong style={{ color: "#1a1a2e" }}>The problem.</strong>{" "}
        {problem.problem}
      </p>

      <div className="flex flex-wrap gap-2">
        {problem.tags.map((tag) => (
          <TagChip
            key={tag}
            tag={tag}
            active={activeTag === tag}
            onClick={() => onTagClick(tag)}
          />
        ))}
      </div>
    </div>
  );
}

export function ProblemStatementsPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const toggleTag = (tag: string) =>
    setActiveTag((cur) => (cur === tag ? null : tag));

  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>
      <Seo
        title="HackitRx 2026 Problem Statements — 8 Partners, 10 Problems, One Patient Journey"
        description="Ten healthcare problems written by the people living them — patients, caregivers, counsellors, nurses — across one patient journey: between clinic visits, at the point of care, and beyond the hospital."
      />

      {/* Hero */}
      <section
        className="relative pt-36 pb-16"
        style={{
          background: "linear-gradient(135deg, #fef6fb 0%, #f6f4fd 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <p
            className="mb-3"
            style={{
              fontSize: "0.9rem",
              fontWeight: 800,
              color: "#a855f7",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            8 partners · 10 problems · One patient journey
          </p>
          <h1
            className="mb-4"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 3.4rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Build for better healthcare.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Shaped by those who lived it.
            </span>
          </h1>
          <p
            className="mb-8"
            style={{
              fontSize: "clamp(1.02rem, 2.2vw, 1.15rem)",
              color: "#5a5a6e",
              lineHeight: 1.7,
              maxWidth: "640px",
            }}
          >
            Every problem on this page was written by the people living it —
            patients, caregivers, counsellors, nurses. Read them, find the one
            that pulls at you, and build it with them.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToId("categories")}
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-transform duration-200 hover:scale-[1.03]"
              style={{
                fontSize: "0.95rem",
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(236,72,153,0.3)",
              }}
            >
              Browse the problems <ArrowDown size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollToId("category-1")}
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold"
              style={{
                fontSize: "0.95rem",
                background: "rgba(168,85,247,0.08)",
                color: "#a855f7",
                border: "1px solid rgba(168,85,247,0.25)",
                cursor: "pointer",
              }}
            >
              Meet the partners
            </button>
          </div>
        </div>
      </section>

      {/* Sticky in-page nav */}
      <div
        className="sticky z-30"
        style={{
          top: "72px",
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #ececf1",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-2.5 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => scrollToId(cat.id)}
              className="px-3 py-1.5 rounded-full transition-colors duration-150"
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#4a4a5e",
                background: "#f6f4fd",
                border: "1px solid #ececf1",
                cursor: "pointer",
              }}
            >
              {cat.number} · {cat.navLabel}
            </button>
          ))}
          {activeTag && (
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ml-auto"
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#ffffff",
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                border: "none",
                cursor: "pointer",
              }}
            >
              Filtering: {activeTag} <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Preamble */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="mb-5"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.1rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              letterSpacing: "-0.01em",
            }}
          >
            Why these problems
          </h2>
          {[
            "Most healthcare solutions are built for patients, not with them. HackitRx26 sets out to change that. Over the past months, eight patient organisations and healthcare providers have worked with us to surface the problems they face every day — not the ones that look good on a slide, but the ones that cost their communities sleep, money, time and health.",
            "None of them are commercially glamorous. All of them matter. That is the point: HackitRx exists to build public goods in healthcare — rooted in real patient need, owned by the organisations that use them, and supported on a path to scale by Open Government Products (OGP) and the Pharmaceutical Society of Singapore (PSS), together with the Alliance of Patient Organisations Singapore (APOS).",
            "The ten problems below follow a single patient journey: what happens between clinic visits, what happens at the point of care, and what happens beyond the hospital, out in the community. Pick the moment that matters to you."
          ].map((para, i) => (
            <p
              key={i}
              className="mb-4"
              style={{ fontSize: "1rem", color: "#4a4a5e", lineHeight: 1.8 }}
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Category cards */}
      <section id="categories" className="pb-16" style={{ scrollMarginTop: "130px" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollToId(cat.id)}
                className="rounded-2xl bg-white p-6 text-left flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  border: "1px solid #ececf1",
                  boxShadow: "0 4px 20px rgba(26,26,46,0.05)",
                  cursor: "pointer",
                }}
              >
                <span
                  className="mb-3"
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #ec4899, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {cat.number}
                </span>
                <h3
                  className="mb-1"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#1a1a2e",
                    lineHeight: 1.3,
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  className="mb-3"
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "#a855f7",
                  }}
                >
                  {cat.summaryTitle}
                </p>
                <p
                  className="mb-4 flex-1"
                  style={{
                    fontSize: "0.9rem",
                    color: "#5a5a6e",
                    lineHeight: 1.65,
                  }}
                >
                  {cat.cardSummary}
                </p>
                <div className="mb-4">
                  <p
                    className="mb-2"
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Partners
                  </p>
                  <div className="flex flex-nowrap items-center gap-1.5">
                    {cat.partners.map((partner) => (
                      <span
                        key={partner.name}
                        className="inline-flex items-center justify-center rounded-lg bg-white"
                        style={{
                          height: "40px",
                          padding: "4px 8px",
                          border: "1px solid #ececf1",
                        }}
                        title={partner.name}
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          loading="lazy"
                          style={{
                            maxHeight: "100%",
                            maxWidth: "64px",
                            objectFit: "contain",
                          }}
                        />
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  className="inline-flex items-center gap-1.5"
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "#ec4899",
                  }}
                >
                  {cat.problemRange} <ArrowRight size={15} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category sections */}
      {categories.map((cat) => (
        <section
          key={cat.id}
          id={cat.id}
          className="py-16"
          style={{
            scrollMarginTop: "130px",
            borderTop: "1px solid #f1f1f4",
          }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <p
              className="mb-2"
              style={{
                fontSize: "0.8rem",
                fontWeight: 800,
                color: "#a855f7",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Category {cat.number} · {cat.title}
            </p>
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                fontWeight: 700,
                color: "#1a1a2e",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              {cat.summaryTitle}
            </h2>
            <p
              className="mb-10"
              style={{
                fontSize: "0.98rem",
                color: "#4a4a5e",
                lineHeight: 1.8,
                maxWidth: "740px",
              }}
            >
              {cat.description}
            </p>
            {/* Partner blocks */}
            <div className="flex flex-col gap-12">
              {cat.partners.map((partner) => (
                <div key={partner.name}>
                  <div className="mb-4">
                    <PartnerLogo partner={partner} />
                  </div>
                  <p
                    className="mb-2"
                    style={{
                      fontSize: "0.95rem",
                      color: "#4a4a5e",
                      lineHeight: 1.75,
                    }}
                  >
                    <strong style={{ color: "#1a1a2e" }}>Who they are.</strong>{" "}
                    {partner.whoTheyAre}
                  </p>
                  {partner.note && (
                    <p
                      className="mb-4"
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "#a855f7",
                      }}
                    >
                      {partner.note}
                    </p>
                  )}
                  <div className="flex flex-col gap-5 mt-4">
                    {partner.problems.map((problem) => (
                      <ProblemCard
                        key={problem.number}
                        problem={problem}
                        activeTag={activeTag}
                        onTagClick={toggleTag}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Closing panel */}
      <section className="py-20" style={{ background: "#1a1a2e" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.01em",
            }}
          >
            Which moment is{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              yours?
            </span>
          </h2>
          <p
            className="mb-2"
            style={{
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "#c7c5d4",
            }}
          >
            Between visits. At the point of care. Beyond the hospital.
          </p>
          <p
            className="mb-8 mx-auto"
            style={{
              fontSize: "0.97rem",
              color: "#9a98ac",
              lineHeight: 1.75,
              maxWidth: "620px",
            }}
          >
            Pick the problem you can't stop thinking about. You'll work directly
            with the partner who wrote it, from Kick-off Day (30 Aug) to Demo
            Day (27 Sep), with mentors from healthcare, design and technology
            alongside — and with OGP and PSS behind you to take the strongest
            solutions further.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={TELEGRAM_CHANNEL_URL}
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
              Join the Telegram channel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
