import { useEffect, useRef, useState } from "react";
import {
  Award,
  Check,
  Users,
  Heart,
  Code2,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import pssLogo from "../../imports/PSS_logo_N_(1).png";
import aposLogo from "../../imports/APOS_main_(1).png";
import ogpLogo from "../../imports/OGP_black.png";

const milestones = [
  {
    year: "2024",
    edition: "1st Edition",
    tagline: "Where it all began",
    description:
      "HackitRx was born from a simple but urgent question: what happens when patient voices shape the tech that's meant to serve them? The inaugural edition brought together pharmacists, patient advocates, and developers for Singapore's first patient-centred health hackathon.",
    stat: "Teams",
    statValue: "20+",
    color: "#f59e0b",
  },
  {
    year: "2025",
    edition: "2nd Edition",
    tagline: "Scaling impact",
    description:
      "The second edition doubled down on the formula that worked — pairing patient organisations directly with builder teams. New challenge themes emerged around active ageing and medication management, and the quality of prototypes raised the bar for what a two-day sprint can produce.",
    stat: "Challenges tackled",
    statValue: "9",
    color: "#ec4899",
  },
  {
    year: "2026",
    edition: "3rd Edition",
    tagline: "Building with, not for",
    description:
      "This year, HackitRx deepens the model with earlier co-design workshops, structured problem-statement sessions with patient organisations, and a stronger pipeline from prototype to pilot. The 3rd edition marks a shift from building solutions for patients — to building them with patients.",
    stat: "Date",
    statValue: "Oct 10–11",
    color: "#a855f7",
  },
];

const innovations2025 = [
  {
    team: "Care+",
    image:
      "https://images.unsplash.com/photo-1676311522524-fa7c0bffd644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbW9iaWxlJTIwYXBwJTIwbWVkaWNhdGlvbnxlbnwxfHx8fDE3NzcwMzY2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    solutions: [
      "Optimised medication scheduling for cancer treatment",
      "Financial planning tool for insurance coverage",
      "Personalised patient education",
    ],
  },
  {
    team: "GoldLabel+",
    image:
      "https://images.unsplash.com/photo-1762328500413-1a4cb2023059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxsJTIwYm90dGxlJTIwcHJlc2NyaXB0aW9uJTIwbGFiZWx8ZW58MXx8fHwxNzc3MDM2NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    solutions: [
      "AI-powered simplified medication labels",
      "Visual pictograms for easy understanding",
      "Multi-language translation support",
    ],
  },
  {
    team: "PillSnap",
    image:
      "https://images.unsplash.com/photo-1666214275099-0ca566aefe26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG1lZGljYWwlMjB0ZWNobm9sb2d5JTIwc2Nhbm5lcnxlbnwxfHx8fDE3NzcwMzY2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    solutions: [
      "AI pill identification using image recognition",
      "Analyses colour, size, and imprint details",
      "Provides ranked match suggestions",
    ],
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
    name: "Alliance for Patient-Oriented Solutions",
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
}: {
  children: React.ReactNode;
  delay?: number;
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
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function AboutPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "#ffffff",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
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
            Healthcare innovation,{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              built with patients.
            </span>
          </h1>
          <p
            className="mx-auto"
            style={{
              fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
              color: "#5a5a6e",
              lineHeight: 1.75,
              maxWidth: "640px",
            }}
          >
            HackitRx is Singapore's patient-centred health
            hackathon. Since 2024, we have been bridging the gap
            between those who experience healthcare challenges
            and those who have the skills to solve them.
          </p>
        </div>
      </section>

      {/* History / Editions */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 700,
                color: "#1a1a2e",
              }}
            >
              Three editions. One mission.
            </h2>
            <p
              className="mb-14"
              style={{
                fontSize: "1.05rem",
                color: "#6a6a7e",
                lineHeight: 1.75,
                maxWidth: "620px",
              }}
            >
              Each edition has refined how we bring patients and
              builders together — and raised the bar for what
              collaborative healthcare innovation looks like in
              Singapore.
            </p>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[20px] top-6 bottom-6 w-0.5 hidden sm:block"
              style={{
                background:
                  "linear-gradient(180deg, #f59e0b, #ec4899, #a855f7)",
              }}
            />

            <div className="flex flex-col gap-12">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 120}>
                  <div className="flex gap-8 sm:gap-12">
                    {/* Dot */}
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center relative z-10"
                      style={{
                        background: `${m.color}18`,
                        border: `2px solid ${m.color}`,
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          color: m.color,
                        }}
                      >
                        {m.year.slice(2)}
                      </span>
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 rounded-2xl p-7"
                      style={{
                        background: "rgba(255,255,255,0.8)",
                        border: `1.5px solid ${m.color}22`,
                        boxShadow: `0 4px 20px ${m.color}0d`,
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: m.color,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                          }}
                        >
                          {m.year} — {m.edition}
                        </span>
                        <span
                          className="px-3 py-0.5 rounded-full"
                          style={{
                            background: `${m.color}12`,
                            fontSize: "0.78rem",
                            color: m.color,
                            fontWeight: 600,
                          }}
                        >
                          {m.tagline}
                        </span>
                      </div>
                      <p
                        className="mb-5"
                        style={{
                          fontSize: "0.98rem",
                          color: "#4a4a5e",
                          lineHeight: 1.8,
                        }}
                      >
                        {m.description}
                      </p>
                      <div
                        className="inline-flex flex-col items-start px-4 py-3 rounded-xl"
                        style={{
                          background: `${m.color}0e`,
                          border: `1px solid ${m.color}22`,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: "#9ca3af",
                            textTransform: "uppercase",
                            letterSpacing: "0.07em",
                          }}
                        >
                          {m.stat}
                        </span>
                        <span
                          style={{
                            fontSize: "1.5rem",
                            fontWeight: 800,
                            color: m.color,
                          }}
                        >
                          {m.statValue}
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Winners */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, #fef8fa 0%, #f8f4fe 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-10">
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#ec4899",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Past Winners
              </span>
              <h2
                className="mt-2"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  fontWeight: 700,
                  color: "#1a1a2e",
                }}
              >
                2025 Winning Solutions
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {innovations2025.map((item, i) => (
              <FadeIn key={item.team} delay={i * 100}>
                <div
                  className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    border: "1px solid rgba(236,72,153,0.12)",
                    boxShadow:
                      "0 4px 16px rgba(168,85,247,0.07)",
                  }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.team}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h4
                      className="mb-4"
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        color: "#ec4899",
                      }}
                    >
                      {item.team}
                    </h4>
                    <ul className="space-y-2.5">
                      {item.solutions.map((sol, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5"
                        >
                          <Check
                            size={16}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: "#a855f7" }}
                          />
                          <span
                            style={{
                              fontSize: "0.95rem",
                              color: "#3a3a4e",
                              lineHeight: 1.6,
                            }}
                          >
                            {sol}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 2024 Winners */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-10">
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#f59e0b",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Past Winners
              </span>
              <h2
                className="mt-2"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  fontWeight: 700,
                  color: "#1a1a2e",
                }}
              >
                2024 Award Winners
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {winners2024.map((item, i) => (
              <FadeIn key={item.team} delay={i * 100}>
                <div
                  className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    border: "1px solid rgba(245,158,11,0.15)",
                    boxShadow:
                      "0 4px 16px rgba(245,158,11,0.07)",
                  }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.team}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.55) 100%)",
                      }}
                    />
                    <div className="absolute bottom-3 left-4">
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                        style={{
                          background:
                            "rgba(245, 158, 11, 0.92)",
                        }}
                      >
                        <Award
                          size={13}
                          style={{ color: "#fff" }}
                        />
                        <span
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            color: "#fff",
                          }}
                        >
                          {item.prize}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4
                      className="mb-1"
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#f59e0b",
                      }}
                    >
                      {item.team}
                    </h4>
                    <p
                      className="mb-3"
                      style={{
                        fontSize: "0.82rem",
                        color: "#94a3b8",
                      }}
                    >
                      {item.group}
                    </p>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "#3a3a4e",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, #fef3f7 0%, #f5f3ff 100%)",
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
                HackitRx brings together three organisations
                that each represent a critical perspective:
                clinical expertise, patient voice, and
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
                    {/* Logo */}
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

                    {/* Text */}
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
                        <Icon
                          size={14}
                          style={{ color: p.color }}
                        />
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
    </div>
  );
}