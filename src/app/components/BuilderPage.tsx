import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft,
  Code,
  CheckCircle,
  Calendar,
  Sparkles,
  Users,
  Lightbulb,
  Trophy,
  Send,
} from "lucide-react";
// @ts-ignore
import singaporean1SvgRaw from "../../imports/singaporean__1_.svg?raw";
import { SvgScene } from "./SvgScene";

const themes = [
  "Mental Wellbeing",
  "Telehealth",
  "Global Data",
  "Active Ageing",
  "Patient Care",
  "Medication Management",
  "Carer Support",
  "Accessibility",
];

const timeline = [
  {
    icon: Send,
    date: "Now — June 2026",
    title: "Register your interest",
    description:
      "Join the waitlist to be among the first notified when applications open. No commitment yet — just signal your interest.",
    color: "#ec4899",
  },
  {
    icon: Lightbulb,
    date: "July 2026",
    title: "Applications open & team formation",
    description:
      "Official applications open. Solo participants are matched into teams. Optional networking sessions help you find your crew before the event.",
    color: "#a855f7",
  },
  {
    icon: Sparkles,
    date: "August – September 2026",
    title: "Pre-hackathon workshops",
    description:
      "Optional skill-building workshops covering design thinking, healthcare data, and rapid prototyping — to help you hit the ground running.",
    color: "#ec4899",
  },
  {
    icon: Users,
    date: "10 – 11 October 2026",
    title: "Hackathon weekend",
    description:
      "The main event. Two days to go from problem to prototype. You'll be paired with a patient organisation, supported by mentors, clinicians, and datasets.",
    color: "#a855f7",
  },
  {
    icon: Trophy,
    date: "11 October 2026",
    title: "Demo Day & awards",
    description:
      "Present your solution to a panel of judges from healthcare, technology, and policy. Winners receive support to pilot their solutions.",
    color: "#ec4899",
  },
];

export function BuilderPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "#ffffff", fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Hero */}
      <section
        className="relative pt-36 pb-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fef3f7 0%, #fef8fa 50%, #f5f3ff 100%)",
        }}
      >
        {/* Blobs */}
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
              {/* Back button */}
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 mb-10 transition-all duration-200 hover:-translate-x-1"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#6b7280",
                  fontSize: "0.95rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  padding: 0,
                }}
              >
                <ArrowLeft size={18} />
                Back
              </button>

              {/* Badge */}
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
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#a855f7",
                    letterSpacing: "0.05em",
                  }}
                >
                  For Builders
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
                Build solutions that{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  actually matter.
                </span>
              </h1>

              <p
                style={{
                  fontSize: "1.15rem",
                  color: "#4a4a5e",
                  lineHeight: 1.75,
                  maxWidth: "560px",
                }}
              >
                HackitRx is a two-day hackathon where builders — developers, designers, and
                researchers — work alongside patient organisations to prototype real solutions to
                real healthcare challenges.
              </p>
            </div>

            {/* Right: illustration */}
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

      {/* Commitment section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="rounded-3xl p-10"
            style={{
              background: "linear-gradient(135deg, rgba(168,85,247,0.05), rgba(236,72,153,0.05))",
              border: "2px solid rgba(168,85,247,0.12)",
            }}
          >
            <h2
              className="mb-4"
              style={{ fontSize: "1.7rem", fontWeight: 700, color: "#1a1a2e" }}
            >
              What you're signing up for
            </h2>
            <p
              className="mb-8"
              style={{ fontSize: "1.05rem", color: "#4a4a5e", lineHeight: 1.8 }}
            >
              Joining the waitlist is <strong>zero commitment</strong> — we'll simply notify you
              when registration opens. The hackathon itself is a{" "}
              <strong>one weekend event</strong> (10–11 October 2026). There are optional
              pre-event workshops if you'd like to prepare, but they're not mandatory. We keep
              communication light, relevant, and respectful of your time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { label: "Time commitment", value: "1 weekend", sub: "10–11 Oct 2026" },
                { label: "Team size", value: "2–5 people", sub: "Solo sign-ups welcome" },
                { label: "Experience needed", value: "Any level", sub: "Beginners welcome" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid rgba(168,85,247,0.15)",
                    boxShadow: "0 4px 15px rgba(168,85,247,0.06)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#9ca3af",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "6px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{ fontSize: "1.4rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "2px" }}
                  >
                    {item.value}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="mb-2"
            style={{ fontSize: "1.7rem", fontWeight: 700, color: "#1a1a2e" }}
          >
            Challenge themes
          </h2>
          <p className="mb-6" style={{ fontSize: "1rem", color: "#6a6a7e", lineHeight: 1.7 }}>
            Builder teams will be matched to challenges submitted by patient organisations.
            These are the domains you'll be working across:
          </p>
          <div className="flex flex-wrap gap-3">
            {themes.map((theme) => (
              <span
                key={theme}
                className="px-4 py-2 rounded-full"
                style={{
                  fontSize: "0.9rem",
                  background: "rgba(168, 85, 247, 0.08)",
                  color: "#a855f7",
                  border: "1.5px solid rgba(168, 85, 247, 0.2)",
                  fontWeight: 500,
                }}
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <Calendar size={22} style={{ color: "#a855f7" }} />
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: "#1a1a2e" }}>
              Your journey
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[26px] top-8 bottom-8 w-0.5 hidden sm:block"
              style={{ background: "linear-gradient(180deg, #a855f7, #ec4899)" }}
            />

            <div className="flex flex-col gap-8">
              {timeline.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex gap-6">
                    {/* Icon dot */}
                    <div
                      className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center relative z-10"
                      style={{
                        background: `${step.color}15`,
                        border: `2px solid ${step.color}40`,
                      }}
                    >
                      <Icon size={20} style={{ color: step.color }} />
                    </div>

                    {/* Content */}
                    <div className="pt-1 pb-2 flex-1">
                      <p
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: step.color,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "4px",
                        }}
                      >
                        {step.date}
                      </p>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "#1a1a2e",
                          marginBottom: "6px",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ fontSize: "0.95rem", color: "#6a6a7e", lineHeight: 1.7 }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Waitlist */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #fef3f7 0%, #f5f3ff 100%)",
        }}
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          {!submitted ? (
            <>
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(236,72,153,0.12))",
                  border: "1.5px solid rgba(168,85,247,0.25)",
                }}
              >
                <Code size={28} style={{ color: "#a855f7" }} />
              </div>

              <h2
                className="mb-3"
                style={{ fontSize: "2rem", fontWeight: 700, color: "#1a1a2e" }}
              >
                Join us in making a difference
              </h2>
              <p
                className="mb-8"
                style={{ fontSize: "1rem", color: "#6a6a7e", lineHeight: 1.7 }}
              >
                Leave your email and we'll notify you the moment applications open for
                HackitRx 2026. No spam — just one email when it matters.
              </p>

              <form onSubmit={handleSubmit} className="text-left">
                <label
                  htmlFor="builder-email"
                  className="block mb-2"
                  style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1a1a2e" }}
                >
                  Your email address
                </label>
                <input
                  type="email"
                  id="builder-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl mb-4 transition-all duration-200 focus:outline-none"
                  style={{
                    fontSize: "1rem",
                    color: "#1a1a2e",
                    background: "#ffffff",
                    border: "2px solid #e9ecef",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#a855f7")}
                  onBlur={(e) => (e.target.style.borderColor = "#e9ecef")}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] disabled:opacity-50"
                  style={{
                    fontSize: "1.05rem",
                    background: isLoading
                      ? "#9ca3af"
                      : "linear-gradient(135deg, #a855f7, #ec4899)",
                    color: "#ffffff",
                    border: "none",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    boxShadow: isLoading ? "none" : "0 4px 20px rgba(168,85,247,0.3)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {isLoading ? "Submitting…" : "Join now in making a difference →"}
                </button>
              </form>

              <p
                className="mt-4"
                style={{ fontSize: "0.8rem", color: "#9ca3af" }}
              >
                No spam, ever. We respect your privacy.
              </p>
            </>
          ) : (
            /* Success state */
            <div>
              <div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "2px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                <CheckCircle size={38} style={{ color: "#10b981" }} />
              </div>

              <h2
                className="mb-3"
                style={{ fontSize: "2rem", fontWeight: 700, color: "#1a1a2e" }}
              >
                You're on the list!
              </h2>
              <p
                className="mb-8"
                style={{ fontSize: "1rem", color: "#4a4a5e", lineHeight: 1.7 }}
              >
                We'll send you one email when applications open for HackitRx 2026.
                <br />
                In the meantime, join our Telegram channel for updates, workshop
                announcements, and early sneak peeks.
              </p>

              <a
                href="https://t.me/+GLw0053W_PQxYzc9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  fontSize: "1rem",
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  color: "#ffffff",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(168,85,247,0.3)",
                }}
              >
                {/* Telegram icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Join our Telegram channel
              </a>

              <p className="mt-5" style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                Updates, workshops &amp; community — all in one place.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}