import { MessageCircleHeart, Lightbulb, Users, BookOpen, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircleHeart,
    number: "01",
    title: "Patient Stories Collected",
    description:
      "Real patients and caregivers share their healthcare journeys, challenges, and unmet needs through our story collection process.",
    color: "#ec4899",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Problem Statements Created",
    description:
      "Clinical experts and facilitators transform patient narratives into precise, actionable problem statements for participants to solve.",
    color: "#c026d3",
  },
  {
    icon: Users,
    number: "03",
    title: "Participants Form Teams",
    description:
      "Interdisciplinary teams of pharmacists, developers, designers, and innovators form to tackle the most pressing challenges.",
    color: "#a855f7",
  },
  {
    icon: BookOpen,
    number: "04",
    title: "Workshops & Mentorship",
    description:
      "Teams attend hands-on workshops on empathy, design thinking, and prototyping, guided by experienced mentors.",
    color: "#c026d3",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Build & Pitch Solutions",
    description:
      "Teams build working prototypes and pitch their solutions to a panel of judges from healthcare, tech, and patient communities.",
    color: "#ec4899",
  },
];

export function HowItWorks() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0520 0%, #08041c 100%)",
      }}
    >
      {/* Right side glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(236,72,153,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#ec4899",
              background: "rgba(236, 72, 153, 0.1)",
              border: "1px solid rgba(236, 72, 153, 0.25)",
            }}
          >
            The Journey
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
            }}
          >
            How the Hackathon
            <span
              style={{
                background: "linear-gradient(90deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}Works
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(236,72,153,0.3) 10%, rgba(168,85,247,0.3) 50%, rgba(236,72,153,0.3) 90%, transparent)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Circle */}
                <div
                  className="relative w-14 h-14 rounded-full flex items-center justify-center mb-5 z-10"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                    border: `2px solid ${step.color}60`,
                    boxShadow: `0 0 20px ${step.color}30`,
                  }}
                >
                  <step.icon size={20} color={step.color} />
                </div>

                {/* Number */}
                <span
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: step.color,
                    opacity: 0.7,
                  }}
                >
                  {step.number}
                </span>

                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
