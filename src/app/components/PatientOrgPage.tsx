import { useNavigate } from "react-router";
import {
  ArrowLeft,
  Building2,
  Calendar,
  FileText,
  Users,
  MessageSquare,
  Handshake,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
// @ts-ignore
import advocatesHumanSvgRaw from "../../assets/images/advocates-human.svg?raw";
import { SvgScene } from "./SvgScene";

// Replace this with the actual FormSG URL when available
const FORMSG_URL = "https://form.gov.sg/placeholder";

const timeline = [
  {
    icon: FileText,
    date: "Now — June 2026",
    title: "Express interest as a partner",
    description:
      "Submit your organisation's details via our short form. This is a no-commitment expression of interest — our team will follow up to discuss fit and next steps.",
    color: "#14b8a6",
  },
  {
    icon: MessageSquare,
    date: "July 2026",
    title: "Problem statement workshop",
    description:
      "We'll work with you to shape your challenge into a clear, actionable brief that builder teams can understand and tackle. Our team supports you through this — no tech background needed.",
    color: "#a855f7",
  },
  {
    icon: Lightbulb,
    date: "August – September 2026",
    title: "Brief finalised & teams matched",
    description:
      "Your challenge brief is published. Builder teams review all available challenges and select the ones they want to work on. You'll see who's tackling your problem before the event.",
    color: "#14b8a6",
  },
  {
    icon: Users,
    date: "10 – 11 October 2026",
    title: "Hackathon weekend",
    description:
      "Be available (in-person or remotely) to answer questions and give feedback to the teams working on your challenge. This is typically just a few hours across the weekend.",
    color: "#a855f7",
  },
  {
    icon: Handshake,
    date: "Post-event",
    title: "Pilot & follow-up",
    description:
      "Winning teams are supported to pilot their solutions. If a team has built something promising for your organisation, we'll facilitate conversations about next steps together.",
    color: "#14b8a6",
  },
];

const whatYouBring = [
  {
    title: "A real challenge",
    description:
      "You know what your community struggles with. That lived knowledge is the foundation that builders need to create something genuinely useful.",
  },
  {
    title: "Feedback & direction",
    description:
      "During the hackathon, your input keeps teams on track. A few hours of your time can mean the difference between a generic prototype and something truly meaningful.",
  },
  {
    title: "A potential pilot",
    description:
      "If a team builds something promising, you're in the best position to help test it in the real world — and turn a prototype into lasting impact.",
  },
];

export function PatientOrgPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen"
      style={{ background: "#ffffff", fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Hero */}
      <section
        className="relative pt-36 pb-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f0fdfa 0%, #fef8fa 50%, #f5f3ff 100%)",
        }}
      >
        {/* Blobs */}
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
                  background: "rgba(20, 184, 166, 0.1)",
                  border: "1.5px solid rgba(20, 184, 166, 0.3)",
                }}
              >
                <Building2 size={16} style={{ color: "#14b8a6" }} />
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#14b8a6",
                    letterSpacing: "0.05em",
                  }}
                >
                  For Patient Organisations
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
                Your challenge.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #14b8a6, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Their skills.
                </span>
                <br />
                Together.
              </h1>

              <p
                style={{
                  fontSize: "1.15rem",
                  color: "#4a4a5e",
                  lineHeight: 1.75,
                  maxWidth: "560px",
                }}
              >
                HackitRx partners patient organisations with builder teams who spend a full
                weekend prototyping solutions to your challenge. You bring the problem —
                we bring the people who want to solve it.
              </p>
            </div>

            {/* Right: illustration */}
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

      {/* Commitment section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="rounded-3xl p-10"
            style={{
              background: "linear-gradient(135deg, rgba(20,184,166,0.05), rgba(168,85,247,0.05))",
              border: "2px solid rgba(20,184,166,0.15)",
            }}
          >
            <h2
              className="mb-4"
              style={{ fontSize: "1.7rem", fontWeight: 700, color: "#1a1a2e" }}
            >
              What this commitment looks like
            </h2>
            <p
              className="mb-8"
              style={{ fontSize: "1.05rem", color: "#4a4a5e", lineHeight: 1.8 }}
            >
              We know you're a small organisation with real constraints. Partnering with
              HackitRx doesn't mean being on-site for the full two days. We ask for a{" "}
              <strong>challenge brief</strong> (we help you write it) and{" "}
              <strong>a few hours of availability</strong> during the hackathon weekend to
              give feedback to the teams working on your problem. That's it. In return, you
              get a dedicated team of builders focused entirely on your challenge.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { label: "Prep required", value: "1 brief", sub: "We help you write it" },
                {
                  label: "Weekend time",
                  value: "~3–5 hours",
                  sub: "Feedback & direction only",
                },
                {
                  label: "Teams on your challenge",
                  value: "1–3 teams",
                  sub: "Focused on your problem",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: "#ffffff",
                    border: "1.5px solid rgba(20,184,166,0.15)",
                    boxShadow: "0 4px 15px rgba(20,184,166,0.06)",
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
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#1a1a2e",
                      marginBottom: "2px",
                    }}
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

      {/* What you bring */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="mb-8"
            style={{ fontSize: "1.7rem", fontWeight: 700, color: "#1a1a2e" }}
          >
            What you bring
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {whatYouBring.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{
                  background: "#fafafa",
                  border: "1.5px solid rgba(20,184,166,0.12)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(20,184,166,0.12)" }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      color: "#14b8a6",
                      fontSize: "0.9rem",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3
                  className="mb-2"
                  style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a2e" }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#6a6a7e", lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <Calendar size={22} style={{ color: "#14b8a6" }} />
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, color: "#1a1a2e" }}>
              Partnership journey
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[26px] top-8 bottom-8 w-0.5 hidden sm:block"
              style={{ background: "linear-gradient(180deg, #14b8a6, #a855f7)" }}
            />

            <div className="flex flex-col gap-8">
              {timeline.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex gap-6">
                    <div
                      className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center relative z-10"
                      style={{
                        background: `${step.color}15`,
                        border: `2px solid ${step.color}40`,
                      }}
                    >
                      <Icon size={20} style={{ color: step.color }} />
                    </div>

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

      {/* CTA — FormSG */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #f0fdfa 0%, #f5f3ff 100%)",
        }}
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <div
            className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(20,184,166,0.15), rgba(168,85,247,0.12))",
              border: "1.5px solid rgba(20,184,166,0.3)",
            }}
          >
            <Handshake size={28} style={{ color: "#14b8a6" }} />
          </div>

          <h2
            className="mb-3"
            style={{ fontSize: "2rem", fontWeight: 700, color: "#1a1a2e" }}
          >
            Join us now as a partner
          </h2>
          <p
            className="mb-8"
            style={{ fontSize: "1rem", color: "#6a6a7e", lineHeight: 1.7 }}
          >
            Fill in a short form with your organisation's details and the challenge you'd
            like builders to tackle. Our team will review every submission and reach out
            within 5 working days.
          </p>

          {/* What happens after */}
          <div
            className="rounded-2xl p-6 mb-8 text-left"
            style={{
              background: "#ffffff",
              border: "1.5px solid rgba(20,184,166,0.2)",
            }}
          >
            <p
              className="mb-3"
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#9ca3af",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              After you submit
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Our team reviews your submission and reaches out within 5 working days",
                "We schedule a short call to understand your challenge in more detail",
                "We help you shape your challenge brief — no tech knowledge needed",
                "You're confirmed as a partner for HackitRx Singapore 2026",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(20,184,166,0.15)" }}
                  >
                    <span
                      style={{ fontSize: "0.65rem", fontWeight: 700, color: "#14b8a6" }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.6 }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <a
            href={FORMSG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105"
            style={{
              fontSize: "1.05rem",
              background: "linear-gradient(135deg, #14b8a6, #a855f7)",
              color: "#ffffff",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(20,184,166,0.3)",
            }}
          >
            Join us now as a partner
            <ExternalLink size={18} />
          </a>

          <p className="mt-4" style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
            Submissions close 30 June 2026. A confirmation email will be sent to you after
            you submit the form.
          </p>
        </div>
      </section>
    </div>
  );
}