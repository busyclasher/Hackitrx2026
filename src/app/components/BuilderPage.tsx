import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft,
  Code,
  Stethoscope,
  Landmark,
  Brain,
  UserPlus,
  HeartHandshake,
  Sparkles,
  Users,
} from "lucide-react";
// @ts-ignore
import singaporean1SvgRaw from "../../imports/singaporean__1_.svg?raw";
import { SvgScene } from "./SvgScene";
import collabImg from "../../../images/Ground-up Innovation.jpg";

const TELEGRAM_CHANNEL_URL = "https://t.me/+GLw0053W_PQxYzc9";
// TODO: replace with the live hacker registration form URL when ready
const REGISTRATION_URL = "https://form.gov.sg/placeholder";

const whyJoin = [
  {
    icon: Code,
    color: "#a855f7",
    title: "For engineers, designers & PMs",
    body: "Tired of shipping the next feature on someone's roadmap? Want to put your AI skills behind something that actually lands in someone's hands? HackitRx hands you real, patient-sourced problems — and the people on the other side who can tell you whether you're solving the right one.",
    highlight: false,
  },
  {
    icon: Stethoscope,
    color: "#ec4899",
    title: "For healthcare professionals",
    body: "You see it every day — patients struggling with the things you wish you had time to fix. Want to scale your impact beyond the consult room? HackitRx gives you the team, the tools, and the time to turn the gaps you see into solutions patients can actually use.",
    highlight: false,
  },
  {
    icon: Landmark,
    color: "#14b8a6",
    title: "For government, agencies & the ecosystem",
    body: "You set policy, fund initiatives, and shape the system from the top down. Come see what the gaps look like from the ground up — and back the solutions that prove they can scale.",
    highlight: false,
  },
  {
    icon: Brain,
    color: "#ffffff",
    title: "For everyone else",
    body: "Anyone who's watched a parent, a sibling, or a friend struggle with the care system and thought it shouldn't have to be this hard — you belong here. No credentials required. Curiosity and conviction are enough.",
    highlight: true,
  },
];

const beforeApply = [
  {
    icon: UserPlus,
    color: "#a855f7",
    title: "Apply as an individual or with friends",
    body: "You're welcome to apply with people you already know — but each application is reviewed individually. Applying as a group doesn't guarantee that every member is selected.",
    highlight: false,
  },
  {
    icon: Stethoscope,
    color: "#ec4899",
    title: "Have a healthcare professional on the team",
    body: "Every team is recommended to have at least one healthcare professional or pharmacist, to bring the provider's lens to the problem.",
    highlight: false,
  },
  {
    icon: HeartHandshake,
    color: "#14b8a6",
    title: "You'll be paired with a patient organisation",
    body: "They aren't just the source of your problem statement — they're your co-creators. You'll meet, listen, test, and iterate with them throughout the programme.",
    highlight: false,
  },
  {
    icon: Sparkles,
    color: "#a855f7",
    title: "No code? No problem",
    body: "No coding experience required. AI tooling, product-management support, and a network of public-good builders are part of the package.",
    highlight: true,
  },
];

const commitment = [
  {
    date: "12 Jun",
    title: "Applications open",
    body: "Submit through the registration form.",
  },
  {
    date: "29–30 Aug",
    title: "Kick-Off Day",
    body: "Meet your problem statement, meet your team, meet the patient organisation you are passionate to work with. The build begins here.",
  },
  {
    date: "Sep – Oct",
    title: "Build sprint",
    body: "Six weeks of focused co-creation. Expect regular check-ins with our team, at least one learning journey into a real care setting, and at least one in-depth meet-up with your patient organisation to test and refine your work.",
  },
  {
    date: "10–11 Oct",
    title: "Demo Day",
    body: "Present your solution to judges, partners, and the patient community — the people who can take it further.",
  },
  {
    date: "Beyond Oct",
    title: "A pathway to scale",
    body: "For solutions that prove themselves, a real pathway to scale — with OGP, government partners, and funders ready to support what's next.",
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

function SignUpButton({
  children,
  variant = "solid",
}: {
  children: React.ReactNode;
  variant?: "solid" | "white";
}) {
  const base =
    "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-transform duration-200 hover:scale-105";
  const style: React.CSSProperties =
    variant === "white"
      ? {
          fontSize: "1.05rem",
          background: "#ffffff",
          color: "#a855f7",
          textDecoration: "none",
          boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
        }
      : {
          fontSize: "1.05rem",
          background: "linear-gradient(135deg, #a855f7, #ec4899)",
          color: "#ffffff",
          textDecoration: "none",
          boxShadow: "0 4px 20px rgba(168,85,247,0.3)",
        };
  return (
    <a
      href={REGISTRATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={base}
      style={style}
    >
      {children}
    </a>
  );
}

export function BuilderPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>
      {/* Hero */}
      <section
        className="relative pt-36 pb-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fef3f7 0%, #fef8fa 50%, #f5f3ff 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)",
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
                  background: "rgba(168, 85, 247, 0.1)",
                  border: "1.5px solid rgba(168, 85, 247, 0.25)",
                }}
              >
                <Code size={16} style={{ color: "#a855f7" }} />
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#a855f7",
                    letterSpacing: "0.05em",
                  }}
                >
                  For Hackers
                </span>
              </div>

              <h1
                className="mb-6"
                style={{
                  fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
                  fontWeight: 700,
                  color: "#1a1a2e",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                Find the Need.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Hack the Fix.
                </span>
              </h1>

              <p
                className="mb-8"
                style={{
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  color: "#4a4a5e",
                  lineHeight: 1.7,
                  maxWidth: "540px",
                }}
              >
                Of everything you could build this year, build the one a patient is
                actually waiting for.
              </p>

              <SignUpButton>Sign up now →</SignUpButton>
            </div>

            {/* Right: illustration (preserved) */}
            <div className="flex-shrink-0 w-full lg:w-[340px] xl:w-[400px] flex items-end justify-center">
              <SvgScene
                raw={singaporean1SvgRaw}
                aspectRatio="728/852"
                className="max-w-[300px] lg:max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why join as Hackers */}
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
                Why join as{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #ec4899, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Hackers
                </span>
                ?
              </h2>
              <p
                className="mx-auto"
                style={{
                  fontSize: "1.1rem",
                  color: "#6a6a7e",
                  lineHeight: 1.7,
                  maxWidth: "600px",
                }}
              >
                We need diverse minds to build solutions that actually scale. Here's
                what's in it for you.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyJoin.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeIn key={c.title} delay={i * 90} className="h-full">
                  <div
                    className="rounded-3xl p-8 text-center flex flex-col items-center h-full"
                    style={
                      c.highlight
                        ? {
                            background:
                              "linear-gradient(135deg, #ec4899, #a855f7)",
                            boxShadow: "0 16px 40px rgba(168,85,247,0.28)",
                          }
                        : {
                            background: "#ffffff",
                            border: `1.5px solid ${c.color}22`,
                            boxShadow: `0 8px 28px ${c.color}10`,
                          }
                    }
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                      style={{
                        background: c.highlight
                          ? "rgba(255,255,255,0.18)"
                          : `${c.color}14`,
                        border: c.highlight
                          ? "1.5px solid rgba(255,255,255,0.35)"
                          : `1.5px solid ${c.color}33`,
                      }}
                    >
                      <Icon
                        size={24}
                        style={{ color: c.highlight ? "#ffffff" : c.color }}
                      />
                    </div>
                    <h3
                      className="mb-3"
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: c.highlight ? "#ffffff" : "#1a1a2e",
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.97rem",
                        color: c.highlight
                          ? "rgba(255,255,255,0.92)"
                          : "#4a4a5e",
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
        </div>
      </section>

      {/* Who we're looking for */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #fef6fb 0%, #f6f4fd 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2
              className="mb-6"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 700,
                color: "#1a1a2e",
              }}
            >
              Who we're looking for
            </h2>
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.4vw, 1.3rem)",
                color: "#4a4a5e",
                lineHeight: 1.85,
              }}
            >
              Hackers who care more about whether the solution works than whether it's
              their idea. People who can listen before they design. People willing to be
              wrong about their first solution and curious enough to find the second.
              Teams with mixed backgrounds — engineers, healthcare professionals,
              students, and citizens, side by side.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Before you apply */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2
              className="mb-12"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 700,
                color: "#1a1a2e",
              }}
            >
              Before you apply
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left: items */}
            <div className="flex flex-col gap-4">
              {beforeApply.map((item, i) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={item.title} delay={i * 80}>
                    <div
                      className="rounded-2xl p-5 flex gap-4 items-start"
                      style={
                        item.highlight
                          ? {
                              background:
                                "linear-gradient(135deg, rgba(236,72,153,0.1), rgba(168,85,247,0.1))",
                              border: "1.5px solid rgba(168,85,247,0.3)",
                            }
                          : {
                              background: "#ffffff",
                              border: "1px solid #ececf1",
                              boxShadow: "0 2px 12px rgba(26,26,46,0.04)",
                            }
                      }
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `${item.color}14`,
                          border: `1.5px solid ${item.color}33`,
                        }}
                      >
                        <Icon size={20} style={{ color: item.color }} />
                      </div>
                      <div>
                        <h3
                          className="mb-1"
                          style={{
                            fontSize: "1.05rem",
                            fontWeight: 700,
                            color: "#1a1a2e",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.93rem",
                            color: "#5a5a6e",
                            lineHeight: 1.65,
                          }}
                        >
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* Right: image + overlay */}
            <FadeIn delay={120} className="relative">
              <div
                className="rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 20px 50px rgba(26,26,46,0.12)" }}
              >
                <img
                  src={collabImg}
                  alt="Hackers co-creating with patients and clinicians"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "4 / 3" }}
                />
              </div>
              <div
                className="absolute -bottom-5 left-5 right-5 sm:right-auto sm:max-w-[300px] rounded-2xl p-5"
                style={{
                  background: "rgba(255,255,255,0.96)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(168,85,247,0.18)",
                  boxShadow: "0 12px 30px rgba(26,26,46,0.12)",
                }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Users size={16} style={{ color: "#a855f7" }} />
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#1a1a2e",
                    }}
                  >
                    Collaborative Spirit
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#5a5a6e",
                    lineHeight: 1.6,
                  }}
                >
                  People who can listen before they design — willing to be wrong, and
                  bringing a mix of backgrounds to the table.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Your commitment */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #fdfaff 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
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
                  fontSize: "1.1rem",
                  color: "#6a6a7e",
                  lineHeight: 1.7,
                  maxWidth: "640px",
                }}
              >
                About 2–3 hours of focused time per week — spread across evenings,
                weekends, and a handful of in-person moments from the kick-off day onward.
              </p>
            </div>
          </FadeIn>

          {/* Desktop: horizontal timeline */}
          <FadeIn className="hidden lg:block">
            <div className="relative grid grid-cols-5 mb-8">
              <div
                className="absolute h-0.5"
                style={{
                  left: "10%",
                  right: "10%",
                  top: "9px",
                  background: "linear-gradient(90deg, #ec4899, #a855f7)",
                }}
              />
              {commitment.map((c) => (
                <div key={c.title} className="flex flex-col items-center px-3">
                  <div
                    className="w-5 h-5 rounded-full relative z-10"
                    style={{
                      background: "linear-gradient(135deg, #ec4899, #a855f7)",
                      boxShadow: "0 0 0 4px #ffffff, 0 2px 8px rgba(168,85,247,0.4)",
                    }}
                  />
                  <p
                    className="mt-4"
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#a855f7",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {c.date}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-4 items-stretch">
              {commitment.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl p-5 h-full"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #ececf1",
                    boxShadow: "0 4px 18px rgba(26,26,46,0.05)",
                  }}
                >
                  <h3
                    className="mb-2"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#1a1a2e",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#5a5a6e",
                      lineHeight: 1.65,
                    }}
                  >
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden">
            {commitment.map((c, i) => {
              const isLast = i === commitment.length - 1;
              return (
                <FadeIn key={c.title} delay={i * 70} className="flex gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="mt-1 w-5 h-5 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #ec4899, #a855f7)",
                        boxShadow: "0 0 0 4px rgba(168,85,247,0.12)",
                      }}
                    />
                    {!isLast && (
                      <div
                        className="flex-1 w-0.5 my-1"
                        style={{ background: "#e9e7f0", minHeight: "30px" }}
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <p
                      className="mb-1"
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "#a855f7",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {c.date}
                    </p>
                    <h3
                      className="mb-1.5"
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#1a1a2e",
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.92rem",
                        color: "#5a5a6e",
                        lineHeight: 1.65,
                      }}
                    >
                      {c.body}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready to build? */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)" }}
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
              Ready to build?
            </h2>
            <p
              className="mb-10 mx-auto"
              style={{
                fontSize: "1.15rem",
                color: "rgba(255,255,255,0.92)",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              The problem statements are real. The patients are waiting. The tools are in
              your hands.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <SignUpButton variant="white">Sign up now →</SignUpButton>
              <a
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-transform duration-200 hover:scale-105"
                style={{
                  fontSize: "1.05rem",
                  background: "rgba(255,255,255,0.12)",
                  border: "1.5px solid rgba(255,255,255,0.5)",
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Join the Telegram channel →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
