import { UserPlus, MessageSquareHeart, Handshake } from "lucide-react";

const options = [
  {
    icon: UserPlus,
    title: "Register as Participant",
    description:
      "Join as a pharmacist, developer, designer, or innovator. Form a team and build solutions to real patient challenges.",
    cta: "Register Now",
    primary: true,
    color: "#ec4899",
  },
  {
    icon: MessageSquareHeart,
    title: "Submit a Patient Story",
    description:
      "Share your personal healthcare experience. Your story could become the foundation for a life-changing solution.",
    cta: "Share Your Story",
    primary: false,
    color: "#a855f7",
  },
  {
    icon: Handshake,
    title: "Become a Sponsor",
    description:
      "Support healthcare innovation in Singapore. Partner with us to shape the future of patient-centred care.",
    cta: "Get in Touch",
    primary: false,
    color: "#ec4899",
  },
];

export function Registration() {
  return (
    <section
      id="registration"
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #08041c 0%, #150838 50%, #08041c 100%)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(236,72,153,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: "#ec4899",
              background: "rgba(236, 72, 153, 0.1)",
              border: "1px solid rgba(236, 72, 153, 0.25)",
            }}
          >
            Get Involved
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
            }}
          >
            Ready to Make a
            <span
              style={{
                background: "linear-gradient(90deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}Difference?
            </span>
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            HackitRx Singapore 2026 is your opportunity to be part of something meaningful.
            Choose how you want to contribute to healthcare innovation.
          </p>
        </div>

        {/* Event Date Banner */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 mb-12 p-6 rounded-2xl"
          style={{
            background: "linear-gradient(90deg, rgba(236,72,153,0.08) 0%, rgba(168,85,247,0.08) 100%)",
            border: "1px solid rgba(236,72,153,0.2)",
          }}
        >
          {[
            { label: "Date", value: "October 2026" },
            { label: "Location", value: "Singapore" },
            { label: "Format", value: "In-Person + Hybrid" },
            { label: "Duration", value: "48 Hours" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-1"
                style={{
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {item.label}
              </div>
              <div
                className="font-bold"
                style={{
                  color: "#ffffff",
                  fontSize: "1.05rem",
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Registration Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt) => (
            <div
              key={opt.title}
              className="flex flex-col p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: opt.primary
                  ? "linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.1) 100%)"
                  : "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                border: opt.primary
                  ? "1px solid rgba(236,72,153,0.4)"
                  : "1px solid rgba(255,255,255,0.07)",
                boxShadow: opt.primary ? "0 0 40px rgba(236,72,153,0.15)" : "none",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${opt.color}18`,
                  border: `1px solid ${opt.color}30`,
                }}
              >
                <opt.icon size={22} color={opt.color} />
              </div>

              <h3
                className="mb-3"
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                {opt.title}
              </h3>

              <p
                className="flex-1 mb-6"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                {opt.description}
              </p>

              <button
                className="w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: opt.primary
                    ? "linear-gradient(135deg, #ec4899, #a855f7)"
                    : "transparent",
                  border: opt.primary ? "none" : `1.5px solid ${opt.color}60`,
                  color: opt.primary ? "#ffffff" : opt.color,
                  boxShadow: opt.primary
                    ? "0 0 25px rgba(236, 72, 153, 0.4)"
                    : "none",
                }}
              >
                {opt.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
