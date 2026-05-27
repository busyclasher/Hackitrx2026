import { useEffect, useRef, useState } from "react";
import {
  Users,
  Heart,
  Code2,
  Sparkles,
  Pill,
  Repeat,
  Linkedin,
  Workflow,
  Maximize2,
  X,
} from "lucide-react";
import pssLogo from "../../imports/PSS_logo_N_(1).png";
import aposLogo from "../../imports/APOS_main_(1).png";
import ogpLogo from "../../imports/OGP_black.png";
import journey2024 from "../../../images/our_journey/2024.jpg";
import journey2025 from "../../../images/our_journey/2025.JPG";
import journey2026 from "../../../images/our_journey/2026.jpeg";
import hackitrxWayImg from "../../../images/The HackitRx Way.jpg";
import qihuangPhoto from "../../../images/team/qihuang.jpg";
import alfredPhoto from "../../../images/team/alfred.jpg";
import zhiQianPhoto from "../../../images/team/zhi-qian.jpg";
import codyPhoto from "../../../images/team/cody.jpg";
import winHonPhoto from "../../../images/team/win-hon.jpg";
import hazelPhoto from "../../../images/team/hazel.jpg";
import eunicePhoto from "../../../images/team/eunice.jpg";
import stellaPhoto from "../../../images/team/stella.jpg";
import tatMingPhoto from "../../../images/Advisors/Tat Ming.jpeg";
import jasmineAdvPhoto from "../../../images/Advisors/Jasmine.jpeg";
import vivianPhoto from "../../../images/Advisors/VIvian Lim OGP.jpeg";
import nidhiPhoto from "../../../images/Advisors/Nidhi.jpeg";
import kelvinPhoto from "../../../images/Advisors/Kelvin Tan.jpeg";
import jianWeiPhoto from "../../../images/Advisors/Jian Wei.jpeg";
import zhengKangPhoto from "../../../images/Advisors/Zheng Kang.jpeg";
import sharonPhoto from "../../../images/Advisors/Sharon Yeo.jpeg";
import nigelPhoto from "../../../images/Advisors/Nigel Lim.jpeg";
import elstonPhoto from "../../../images/Advisors/Elston.jpeg";

const journey = [
  {
    year: "2024",
    title: "2024 — A start in pharmacy",
    body: "HackitRx began with the support of the Pharmaceutical Society of Singapore (PSS), bringing pharmacists into the conversation around healthcare innovation. That first run proved a simple idea: when the people closest to the workflow are given the room and the tools to build, the solutions are sharper, more grounded, and more usable.",
    image: journey2024,
    icon: Pill,
    color: "#f59e0b",
  },
  {
    year: "2025",
    title: "2025 — A proof that travelled",
    body: "A HackitRx team built a financial and medication-refill tool with patients at the National Cancer Centre Singapore. It worked — and is now being funded to scale across NCCS in 2026. One team. One problem worth solving. One solution that made it from the room into people's lives.",
    image: journey2025,
    icon: Repeat,
    color: "#ec4899",
  },
  {
    year: "2026",
    title: "2026 — A bigger room. The same connection.",
    body: "The breakthrough wasn't the technology — it was the patient voice at the centre of the build. So we're opening the room. We're joined by Open Government Products (OGP), and by the Alliance of Patient's Organizations Singapore (APOS) to bring patient organisations into the programme as co-creators. Pharmacists remain our ecosystem anchors; patients, caregivers, and the organisations who serve them are now in the room from day one.",
    image: journey2026,
    icon: Users,
    color: "#a855f7",
  },
];

const team = [
  {
    name: "Xie Qihuang",
    role: "Co-Chair",
    linkedin: "https://www.linkedin.com/in/qihuang-xie/",
    photo: qihuangPhoto,
  },
  {
    name: "Alfred Ho",
    role: "Co-Chair",
    linkedin: "https://www.linkedin.com/in/alfred-hozt/",
    photo: alfredPhoto,
  },
  {
    name: "Teng Zhi Qian",
    role: "Programmes & Partnership",
    linkedin: "https://www.linkedin.com/in/zhi-qian-teng-99985b216/",
    photo: zhiQianPhoto,
  },
  {
    name: "Cody Tan",
    role: "Programmes & Partnership",
    linkedin: "https://www.linkedin.com/in/cody-t-733a38252/",
    photo: codyPhoto,
  },
  {
    name: "Win Hon See Tho",
    role: "Programmes & Partnership",
    linkedin: "https://www.linkedin.com/in/seethowinhon/",
    photo: winHonPhoto,
  },
  {
    name: "Hazel Kim",
    role: "Marketing & Publicity",
    linkedin: "https://www.linkedin.com/in/jung-eun-kim-01113a208/",
    photo: hazelPhoto,
  },
  {
    name: "Eunice Toh",
    role: "Marketing & Publicity",
    linkedin: "https://www.linkedin.com/in/eunice-toh-si-ying/",
    photo: eunicePhoto,
  },
  {
    name: "Tee Siew Chien",
    role: "Marketing & Publicity",
    linkedin: "https://www.linkedin.com/in/tee-siew-chien-230709176/",
    photo: stellaPhoto,
  },
];

const advisors: {
  name: string;
  role: string;
  linkedin?: string;
  photo?: string;
  initials?: string;
}[] = [
  {
    name: "Ng Tat Ming",
    role: "Principal Pharmacist (Specialist), Research and Innovation Lead at TTSH",
    linkedin: "https://www.linkedin.com/in/tat-ming-ng-sg/",
    photo: tatMingPhoto,
  },
  {
    name: "Jasmine Ong",
    role: "Clinician Innovation, NMRC Clinician Innovator Award; Principal Clinical Pharmacist, SGH",
    linkedin: "https://www.linkedin.com/in/jasmine-ong-8b9043243/",
    photo: jasmineAdvPhoto,
  },
  {
    name: "Vivian Lim",
    role: "Community Development at OGP, Co-founder of GEN",
    linkedin: "https://www.linkedin.com/in/vivian-lim/",
    photo: vivianPhoto,
  },
  {
    name: "Nidhi Swarup",
    role: "Founding Chair, Alliance of Patient's Organizations Singapore (APOS)",
    linkedin: "https://www.linkedin.com/in/nidhi-swarup-09100128/",
    photo: nidhiPhoto,
  },
  {
    name: "Dr Kelvin Tan",
    role: "Head of Programme (Minor in Applied Ageing Studies) at SUSS",
    linkedin: "https://www.linkedin.com/in/dr-kelvin-tan-phd-51235a8a/",
    photo: kelvinPhoto,
  },
  {
    name: "Goh Jian Wei",
    role: "Manager, Technology, Strategic Planning & Integration (TSPI), TTSH",
    linkedin: "https://www.linkedin.com/in/jianweigoh/",
    photo: jianWeiPhoto,
  },
  {
    name: "Elston Foo",
    role: "Senior Business Partner, Transformation Office, Enterprise Singapore",
    linkedin: "https://www.linkedin.com/in/elston-foo/",
    photo: elstonPhoto,
  },
  {
    name: "Lum Zheng Kang",
    role: "Founder & CEO of Collabring",
    linkedin: "https://www.linkedin.com/in/zklum/",
    photo: zhengKangPhoto,
  },
  {
    name: "Sharon Yeo",
    role: "Senior Pharmacist (Informatics) at TTSH",
    linkedin: "https://www.linkedin.com/in/sharon-yeo-mei-ching/",
    photo: sharonPhoto,
  },
  {
    name: "Nigel Lim",
    role: "Pharmacist-innovator, Biodesign Innovation Fellow & Senior Pharmacist, NTFGH",
    linkedin: "https://www.linkedin.com/in/nigel-lim-sg/",
    photo: nigelPhoto,
  },
];

const partners = [
  {
    name: "Pharmaceutical Society of Singapore",
    abbr: "PSS",
    logo: pssLogo,
    color: "#ec4899",
    icon: Heart,
    description:
      "The PSS represents over 3,000 pharmacists in Singapore, advancing pharmaceutical practice and patient safety. As a co-organiser of HackitRx, PSS brings deep clinical knowledge, professional networks, and a commitment to medication-related challenges that affect millions of patients daily.",
    role: "Clinical Expertise & Pharmacy Insights",
  },
  {
    name: "Alliance of Patient's Organizations Singapore",
    abbr: "APOS",
    logo: aposLogo,
    color: "#a855f7",
    icon: Users,
    description:
      "APOS is a coalition of patient organisations advocating for patient-centred healthcare in Singapore. APOS connects HackitRx with real patient communities, ensuring that the challenges tackled at the hackathon reflect lived experiences rather than assumed pain points.",
    role: "Patient Voice & Community Access",
  },
  {
    name: "Open Government Products",
    abbr: "OGP",
    logo: ogpLogo,
    color: "#0ea5e9",
    icon: Code2,
    description:
      "OGP is Singapore's in-house tech team that builds products for the public good. Bringing engineering rigour, design thinking, and product strategy to HackitRx, OGP helps builder teams move from idea to viable prototype — and thinks through what it takes to deploy solutions responsibly at scale.",
    role: "Technology & Product Strategy",
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

function AdvisorCard({
  a,
}: {
  a: { name: string; role: string; linkedin?: string; photo?: string; initials?: string };
}) {
  const inner = (
    <>
      <div
        className="relative rounded-2xl overflow-hidden mb-4"
        style={{
          aspectRatio: "1 / 1",
          boxShadow: "0 8px 24px rgba(26,26,46,0.1)",
        }}
      >
        {a.photo ? (
          <img
            src={a.photo}
            alt={a.name}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #14b8a6, #a855f7)" }}
          >
            <span style={{ color: "#ffffff", fontWeight: 800, fontSize: "2rem" }}>
              {a.initials}
            </span>
          </div>
        )}
        {a.linkedin && (
          <div
            className="absolute bottom-3 right-3 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(6px)",
              boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            }}
          >
            <Linkedin size={18} style={{ color: "#0a66c2" }} />
          </div>
        )}
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
        {a.name}
      </h3>
      <p
        className="mt-1"
        style={{ fontSize: "0.85rem", color: "#6a6a7e", lineHeight: 1.5 }}
      >
        {a.role}
      </p>
    </>
  );

  return a.linkedin ? (
    <a href={a.linkedin} target="_blank" rel="noopener noreferrer" className="group block">
      {inner}
    </a>
  ) : (
    <div className="group block">{inner}</div>
  );
}

export function AboutPage() {
  const [wayExpanded, setWayExpanded] = useState(false);

  useEffect(() => {
    if (!wayExpanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setWayExpanded(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [wayExpanded]);

  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>
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
              Our Story
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
            Co-creating the Future of Care,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Grounded in Lived Experience.
            </span>
          </h1>
          <p
            className="mx-auto"
            style={{
              fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
              color: "#5a5a6e",
              lineHeight: 1.75,
              maxWidth: "720px",
            }}
          >
            Every solution that lasts begins with someone who lived the problem
            first. That's the conviction HackitRx was built on — and it's the one
            that has carried us from a single pharmacist-led hackathon in 2024 to
            the patient-centric innovation programme we're running today.
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #fdfaff 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center">
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  fontWeight: 700,
                  color: "#1a1a2e",
                }}
              >
                Our Journey
              </h2>
              <div
                className="mx-auto mt-4 mb-14 h-1 w-16 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #ec4899, #a855f7)",
                }}
              />
            </div>
          </FadeIn>

          {/* Mobile: horizontal scroll · Desktop: equal-height row, aligned */}
          <div className="flex items-stretch gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-6">
            {journey.map((j, i) => {
              const Icon = j.icon;
              return (
                <FadeIn
                  key={j.year}
                  delay={i * 120}
                  className="flex-shrink-0 w-[85%] sm:w-[360px] md:w-auto md:flex-1 snap-start flex flex-col rounded-3xl overflow-hidden bg-white"
                  style={{
                    border: `1.5px solid ${j.color}22`,
                    boxShadow: `0 10px 36px ${j.color}14`,
                  }}
                >
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <img
                      src={j.image}
                      alt={j.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span
                      className="absolute top-4 left-4 px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(6px)",
                        fontSize: "0.8rem",
                        fontWeight: 800,
                        color: j.color,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {j.year}
                    </span>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: `${j.color}14`,
                        border: `1.5px solid ${j.color}33`,
                      }}
                    >
                      <Icon size={20} style={{ color: j.color }} />
                    </div>
                    <h3
                      className="mb-3"
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#1a1a2e",
                        lineHeight: 1.3,
                      }}
                    >
                      {j.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.96rem",
                        color: "#4a4a5e",
                        lineHeight: 1.8,
                      }}
                    >
                      {j.body}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* The HackitRx Way */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                style={{
                  background: "rgba(168, 85, 247, 0.08)",
                  border: "1.5px solid rgba(168, 85, 247, 0.22)",
                }}
              >
                <Workflow size={16} style={{ color: "#a855f7" }} />
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#a855f7",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Our Approach
                </span>
              </div>
              <h2
                className="mb-4"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  fontWeight: 700,
                  color: "#1a1a2e",
                }}
              >
                The HackitRx Way
              </h2>
              <p
                className="mx-auto"
                style={{
                  fontSize: "1.1rem",
                  color: "#6a6a7e",
                  lineHeight: 1.7,
                  maxWidth: "640px",
                }}
              >
                From the first patient conversation to a solution in production —
                here's how we build.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <button
              type="button"
              onClick={() => setWayExpanded(true)}
              aria-label="Expand The HackitRx Way diagram"
              className="group block w-full rounded-3xl overflow-hidden cursor-zoom-in"
              style={{
                border: "1px solid rgba(168, 85, 247, 0.15)",
                boxShadow: "0 16px 48px rgba(168, 85, 247, 0.1)",
                background: "#ffffff",
                padding: 0,
              }}
            >
              <div className="relative">
                <img
                  src={hackitrxWayImg}
                  alt="The HackitRx Way — from patient conversation to a solution in production"
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    background: "rgba(26,26,46,0.7)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <Maximize2 size={14} style={{ color: "#ffffff" }} />
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "#ffffff",
                    }}
                  >
                    Click to expand
                  </span>
                </div>
              </div>
            </button>
          </FadeIn>
        </div>
      </section>

      {/* In Collaboration With (Partners) */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #fef3f7 0%, #f5f3ff 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#a855f7",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Our Organisers
              </span>
              <h2
                className="mt-2"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  fontWeight: 700,
                  color: "#1a1a2e",
                }}
              >
                In Collaboration With
              </h2>
              <p
                className="mt-3 mx-auto"
                style={{
                  fontSize: "1.05rem",
                  color: "#6a6a7e",
                  lineHeight: 1.7,
                  maxWidth: "560px",
                }}
              >
                HackitRx brings together three organisations that each represent a
                critical perspective: clinical expertise, patient voice, and
                technology.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-8">
            {partners.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeIn key={p.abbr} delay={i * 120}>
                  <div
                    className="rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start"
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      border: `2px solid ${p.color}18`,
                      boxShadow: `0 4px 20px ${p.color}0a`,
                    }}
                  >
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-2xl p-5"
                      style={{
                        background: `${p.color}08`,
                        border: `1.5px solid ${p.color}18`,
                        minWidth: "120px",
                        minHeight: "80px",
                      }}
                    >
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="max-h-14 w-auto object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            color: "#1a1a2e",
                          }}
                        >
                          {p.name}
                        </h3>
                        <span
                          className="px-2.5 py-0.5 rounded-full"
                          style={{
                            background: `${p.color}12`,
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: p.color,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                          }}
                        >
                          {p.abbr}
                        </span>
                      </div>
                      <div
                        className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-lg"
                        style={{ background: `${p.color}0e` }}
                      >
                        <Icon size={14} style={{ color: p.color }} />
                        <span
                          style={{
                            fontSize: "0.78rem",
                            fontWeight: 600,
                            color: p.color,
                          }}
                        >
                          {p.role}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "0.97rem",
                          color: "#4a4a5e",
                          lineHeight: 1.8,
                        }}
                      >
                        {p.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organising Team */}
      <section className="py-24">
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
              Organising Team
            </h2>
            <p
              className="mb-12"
              style={{
                fontSize: "1.05rem",
                color: "#6a6a7e",
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
            >
              The core group driving the vision and execution of the hackathon.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {team.map((m, i) => (
              <FadeIn key={m.name} delay={(i % 4) * 80}>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden mb-4"
                    style={{
                      aspectRatio: "1 / 1",
                      boxShadow: "0 8px 24px rgba(26,26,46,0.1)",
                    }}
                  >
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* LinkedIn badge */}
                    <div
                      className="absolute bottom-3 right-3 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(6px)",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                      }}
                    >
                      <Linkedin size={18} style={{ color: "#0a66c2" }} />
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
                    {m.role}
                  </p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="pb-24">
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
              Advisors
            </h2>
            <p
              className="mb-12"
              style={{
                fontSize: "1.05rem",
                color: "#6a6a7e",
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
            >
              The experts and practitioners guiding HackitRx and the teams we support.
            </p>
          </FadeIn>

          {/* 4 x 2 grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {advisors.slice(0, 8).map((a, i) => (
              <FadeIn key={a.name} delay={(i % 4) * 80}>
                <AdvisorCard a={a} />
              </FadeIn>
            ))}
          </div>

          {/* Sliding container for any extra advisors */}
          {advisors.length > 8 && (
            <div className="mt-10 -mx-6 px-6">
              <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
                {advisors.slice(8).map((a) => (
                  <div
                    key={a.name}
                    className="flex-shrink-0 w-[45%] sm:w-[220px] snap-start"
                  >
                    <AdvisorCard a={a} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* The HackitRx Way — fullscreen lightbox */}
      {wayExpanded && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{
            background: "rgba(10, 6, 18, 0.92)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setWayExpanded(false)}
          role="dialog"
          aria-modal="true"
          aria-label="The HackitRx Way"
        >
          <button
            type="button"
            onClick={() => setWayExpanded(false)}
            aria-label="Close"
            className="fixed top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            <X size={24} style={{ color: "#ffffff" }} />
          </button>
          <img
            src={hackitrxWayImg}
            alt="The HackitRx Way — from patient conversation to a solution in production"
            className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain rounded-xl"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
