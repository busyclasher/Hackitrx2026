import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft,
  Building2,
  Sprout,
  Network,
  Rocket,
  Search,
  Flag,
  Code,
  Trophy,
  TrendingUp,
} from "lucide-react";
// @ts-ignore
import advocatesHumanSvgRaw from "../../assets/images/advocates-human.svg?raw";
import { SvgScene } from "./SvgScene";
import involvementImg from "../../../images/Where the Needs Lives.jpeg";
import { Seo } from "./Seo";

const FORMSG_URL = "https://form.gov.sg/69994a14dd306e1eb1ecf87f";

const commitments = [
  {
    icon: Sprout,
    color: "#14b8a6",
    title: "Empowerment that outlasts the programme",
    body: "We work with you to sharpen how you surface, frame, and prioritise problems — a discipline you'll keep using in every future workshop, funding application, and internal conversation, long after the programme ends.",
  },
  {
    icon: Network,
    color: "#a855f7",
    title: "A network that opens doors",
    body: "You'll be connected with builders, designers, healthcare professionals, government partners, and funders who care about the same things you do. The relationships you build at HackitRx don't disappear when Demo Day does.",
  },
  {
    icon: Rocket,
    color: "#ec4899",
    title: "A working solution your community can use",
    body: "A working prototype, built with your input, with a real pathway from prototype into deployment — through OGP and government partners ready to take what proves itself further.",
  },
];

const involvement = [
  {
    title: "Surface what your community is facing",
    body: "With our guidance, you consolidate the problems you hear every day — from the patients you serve, the caregivers walking alongside them, and the gaps your own team sees from the inside.",
  },
  {
    title: "Sharpen the problems worth solving",
    body: "Through structured workshops and iteration sessions, we work with you to refine and frame your problems clearly enough for a team of builders to take them on.",
  },
  {
    title: "Co-create with the hackers",
    body: "Once teams form, you share context, test their ideas, and shape their work as solutions take shape.",
  },
  {
    title: "Take the prototype further",
    body: "When something works, we walk with you on the road to scale — with OGP, government partners, and funders ready to back the solutions that prove themselves.",
  },
];

const commitment = [
  {
    icon: Search,
    date: "Jun – Aug 2026",
    title: "Problem Discovery",
    note: "~half-day workshop + 1 short iteration session",
    body: "You join a Problem Discovery Workshop run by Open Government Products at our partner venue (Batch 1: late June; Batch 2: end July). Over the following six to seven weeks, you refine your problem statements with our support — at your own pace, through online catch-ups with us before Kick-Off.",
    wide: false,
  },
  {
    icon: Flag,
    date: "29–30 Aug 2026",
    title: "Kick-Off Day",
    note: "~half-day",
    body: "You present your refined problem statements at the Problem Statement Marketplace, meet the hacking teams, and pair with the team that takes your problem on.",
    wide: false,
  },
  {
    icon: Code,
    date: "Sep – Early Oct 2026",
    title: "Hacking Phase",
    note: "~1–2 touchpoints of 1–2 hours",
    body: "You stay close to your team as they build. Expect a learning-journey session with them in the first two weeks, a feedback session on their first working prototype around week four, and informal check-ins in between (optional).",
    wide: false,
  },
  {
    icon: Trophy,
    date: "Late Oct 2026",
    title: "Demo Day",
    note: "~half-day",
    body: "You celebrate alongside your team, witness the final solution, and meet the partners and funders who can help take it forward.",
    wide: false,
  },
  {
    icon: TrendingUp,
    date: "Beyond Demo Day",
    title: "Beyond Demo Day",
    note: "",
    body: "For solutions that prove themselves, we keep walking with you — through OGP scale-up pathways and funding routes, connecting participants to the right agencies ready to back what comes next.",
    wide: true,
  },
];

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
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
      }}
    >
      {children}
    </div>
  );
}

function SignUpButton({ variant = "solid" }: { variant?: "solid" | "white" }) {
  const style: React.CSSProperties =
    variant === "white"
      ? {
          fontSize: "1.05rem",
          background: "#ffffff",
          color: "#0d9488",
          textDecoration: "none",
          boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
        }
      : {
          fontSize: "1.05rem",
          background: "linear-gradient(135deg, #14b8a6, #a855f7)",
          color: "#ffffff",
          textDecoration: "none",
          boxShadow: "0 4px 20px rgba(20,184,166,0.3)",
        };
  return (
    <a
      href={FORMSG_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-transform duration-200 hover:scale-105"
      style={style}
    >
      Sign up now →
    </a>
  );
}

export function PatientOrgPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>
      <Seo
        title="Join HackitRx as a Patient & Social Service Organisation — Patient-Centric Innovation in Singapore"
        description="Co-create lasting solutions for your community at Singapore's patient-centric healthcare innovation programme."
      />
      {/* Hero */}
      <section
        className="relative pt-36 pb-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f0fdfa 0%, #fef8fa 50%, #f5f3ff 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            {/* Left: text */}
            <div className="flex-1">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 mb-10 transition-transform duration-200 hover:-translate-x-1"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#6b7280",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  padding: 0,
                }}
              >
                <ArrowLeft size={18} />
                Back
              </button>

              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: "rgba(20, 184, 166, 0.1)",
                  border: "1.5px solid rgba(20, 184, 166, 0.3)",
                }}
              >
                <Building2 size={16} style={{ color: "#14b8a6" }} />
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#0d9488",
                    letterSpacing: "0.05em",
                  }}
                >
                  For Patient & Social Service Organisations
                </span>
              </div>

              <h1
                className="mb-6"
                style={{
                  fontSize: "clamp(2.1rem, 5.5vw, 3.5rem)",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  lineHeight: 1.18,
                  letterSpacing: "-0.02em",
                }}
              >
                Your community knows what needs fixing.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #14b8a6, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Together, we'll build it.
                </span>
              </h1>

              <p
                className="mb-8"
                style={{
                  fontSize: "1.18rem",
                  fontStyle: "italic",
                  color: "#4a4a5e",
                  lineHeight: 1.7,
                  maxWidth: "560px",
                }}
              >
                HackitRx brings builders, designers, and healthcare professionals to your
                problems — with the runway, the network, and the tools to turn what you
                carry every day into something that lasts beyond our programme.
              </p>

              <SignUpButton />
            </div>

            {/* Right: illustration (preserved) */}
            <div className="flex-shrink-0 w-full lg:w-[300px] xl:w-[360px] flex items-end justify-center">
              <SvgScene
                raw={advocatesHumanSvgRaw}
                aspectRatio="565/782"
                className="max-w-[240px] lg:max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lasting Commitments (Why join) */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2
              className="mb-5"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 700,
                color: "#1a1a2e",
              }}
            >
              Lasting Commitments
            </h2>
            <p
              className="mb-12"
              style={{
                fontSize: "1.05rem",
                color: "#4a4a5e",
                lineHeight: 1.8,
                maxWidth: "720px",
              }}
            >
              You've been carrying it for years — what your community really needs, what the
              system keeps missing, the small fixes that would change everything. We hear the
              question many of you are quietly holding:{" "}
              <em>what happens after the programme ends? Will the effort have been worth it?</em>{" "}
              The answer is yes — because HackitRx is built around three lasting commitments
              to your organisation.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeIn key={c.title} delay={i * 100} className="h-full">
                  <div
                    className="rounded-3xl p-8 h-full"
                    style={{
                      background: "#ffffff",
                      border: `1.5px solid ${c.color}22`,
                      boxShadow: `0 8px 28px ${c.color}10`,
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                      style={{
                        background: `${c.color}14`,
                        border: `1.5px solid ${c.color}33`,
                      }}
                    >
                      <Icon size={24} style={{ color: c.color }} />
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
                      {c.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "#4a4a5e",
                        lineHeight: 1.75,
                      }}
                    >
                      {c.body}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn>
            <div
              className="rounded-3xl p-8 md:p-12 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(20,184,166,0.08), rgba(168,85,247,0.08))",
                border: "1px solid rgba(20,184,166,0.2)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1.1rem, 2.4vw, 1.45rem)",
                  fontStyle: "italic",
                  fontWeight: 600,
                  color: "#1a1a2e",
                  lineHeight: 1.6,
                  maxWidth: "760px",
                  margin: "0 auto",
                }}
              >
                "You don't have to wait for the perfect conditions. You don't have to wait for
                resources to come from above. You take the first step. We will walk the
                journey with you."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What your involvement looks like */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #f0fdfa 0%, #f6f4fd 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16">
            <FadeIn>
              <h2
                className="mb-4"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  lineHeight: 1.2,
                }}
              >
                What your involvement looks like
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#4a4a5e",
                  lineHeight: 1.75,
                }}
              >
                A 4-stage journey, designed to turn community insights into actionable
                prototypes — minimising your time while maximising your impact.
              </p>
            </FadeIn>
            <FadeIn delay={120}>
              <div
                className="rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 20px 50px rgba(26,26,46,0.12)" }}
              >
                <img
                  src={involvementImg}
                  alt="A patient organisation co-creating with the HackitRx team"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "16 / 10" }}
                />
              </div>
            </FadeIn>
          </div>

          {/* Desktop: horizontal 4-step process */}
          <FadeIn className="hidden lg:block">
            <div className="relative grid grid-cols-4 gap-6">
              <div
                className="absolute h-0.5"
                style={{
                  left: "12.5%",
                  right: "12.5%",
                  top: "23px",
                  background: "linear-gradient(90deg, #14b8a6, #a855f7)",
                }}
              />
              {involvement.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center relative z-10 mb-5"
                    style={{
                      background: "linear-gradient(135deg, #14b8a6, #a855f7)",
                      color: "#ffffff",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      boxShadow: "0 0 0 5px #f4f6fb",
                    }}
                  >
                    {i + 1}
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#1a1a2e",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#5a5a6e", lineHeight: 1.6 }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Mobile: vertical steps */}
          <div className="lg:hidden">
            {involvement.map((step, i) => {
              const isLast = i === involvement.length - 1;
              return (
                <FadeIn key={step.title} delay={i * 70} className="flex gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #14b8a6, #a855f7)",
                        color: "#ffffff",
                        fontWeight: 800,
                        fontSize: "1rem",
                      }}
                    >
                      {i + 1}
                    </div>
                    {!isLast && (
                      <div
                        className="flex-1 w-0.5 my-1"
                        style={{ background: "#d7ece9", minHeight: "24px" }}
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3
                      className="mb-1.5"
                      style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a1a2e" }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "0.92rem", color: "#5a5a6e", lineHeight: 1.65 }}>
                      {step.body}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your commitment */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <h2
                className="mb-4"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  fontWeight: 700,
                  color: "#1a1a2e",
                }}
              >
                Your commitment
              </h2>
              <p
                className="mx-auto"
                style={{
                  fontSize: "1.05rem",
                  color: "#6a6a7e",
                  lineHeight: 1.7,
                  maxWidth: "620px",
                }}
              >
                A four-to-five-month journey, designed to fit around the work you're already
                doing. Total: roughly{" "}
                <strong style={{ color: "#0d9488" }}>
                  8–12 hours of your time across five months
                </strong>
                , plus the moments you choose to add.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {commitment.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeIn
                  key={c.title}
                  delay={i * 80}
                  className={c.wide ? "md:col-span-2" : ""}
                >
                  <div
                    className="rounded-2xl p-6 h-full"
                    style={{
                      background: c.wide
                        ? "linear-gradient(135deg, rgba(20,184,166,0.08), rgba(168,85,247,0.08))"
                        : "#ffffff",
                      border: c.wide
                        ? "1.5px solid rgba(20,184,166,0.25)"
                        : "1px solid #ececf1",
                      boxShadow: c.wide ? "none" : "0 4px 18px rgba(26,26,46,0.05)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(20,184,166,0.12)",
                          border: "1.5px solid rgba(20,184,166,0.3)",
                        }}
                      >
                        <Icon size={18} style={{ color: "#0d9488" }} />
                      </div>
                      <span
                        className="px-2.5 py-1 rounded-full"
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "#0d9488",
                          background: "rgba(20,184,166,0.1)",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {c.date}
                      </span>
                    </div>
                    <h3
                      className="mb-1"
                      style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1a1a2e" }}
                    >
                      {c.title}
                    </h3>
                    {c.note && (
                      <p
                        className="mb-2"
                        style={{
                          fontSize: "0.8rem",
                          fontStyle: "italic",
                          color: "#9ca3af",
                        }}
                      >
                        {c.note}
                      </p>
                    )}
                    <p style={{ fontSize: "0.92rem", color: "#5a5a6e", lineHeight: 1.65 }}>
                      {c.body}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready to begin? */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(135deg, #14b8a6 0%, #a855f7 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.2,
              }}
            >
              Ready to begin?
            </h2>
            <p
              className="mb-10 mx-auto"
              style={{
                fontSize: "1.15rem",
                color: "rgba(255,255,255,0.92)",
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
            >
              Express your interest below, and our team will reach out within a week to start
              the conversation. No preparation needed — bring what you know, and we'll guide
              you from there.
            </p>
            <SignUpButton variant="white" />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
