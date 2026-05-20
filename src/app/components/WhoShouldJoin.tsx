import { Users, Stethoscope, Cpu } from "lucide-react";

const personas = [
  {
    icon: Users,
    title: "Patients & Caregivers",
    subtitle: "Share Your Experience",
    description:
      "Your healthcare story matters. Share your struggles, frustrations, and unmet needs so that innovators can build solutions that truly address what patients face every day.",
    cta: "Submit Your Story",
    href: "#registration",
    color: "#ec4899",
    tags: ["Patient Advocates", "Caregivers", "Patient Organisations"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare Professionals",
    subtitle: "Champion Better Care",
    description:
      "Pharmacists, nurses, doctors — bring your clinical insight to the table. Work alongside technologists to design solutions you wish existed for your patients.",
    cta: "Join as Professional",
    href: "#registration",
    color: "#a855f7",
    tags: ["Pharmacists", "Nurses", "Clinicians"],
  },
  {
    icon: Cpu,
    title: "Technology Builders",
    subtitle: "Build What Matters",
    description:
      "Developers, UX designers, data scientists — apply your skills to a domain where it truly makes a difference. Build prototypes that could reshape healthcare.",
    cta: "Join as Builder",
    href: "#registration",
    color: "#ec4899",
    tags: ["Developers", "UX Designers", "Innovators"],
  },
];

export function WhoShouldJoin() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0520 0%, #0d0620 50%, #0a0520 100%)",
      }}
    >
      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(236,72,153,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236,72,153,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#a855f7",
              background: "rgba(168, 85, 247, 0.1)",
              border: "1px solid rgba(168, 85, 247, 0.25)",
            }}
          >
            Who Should Join
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
            Everyone Has a
            <span
              style={{
                background: "linear-gradient(90deg, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}Role to Play
            </span>
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            HackitRx is built on collaboration. Whether you're a patient, a healthcare
            professional, or a technologist — your perspective is essential.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(135deg, ${p.color}25, ${p.color}10)`,
                  border: `1px solid ${p.color}35`,
                  boxShadow: `0 0 20px ${p.color}20`,
                }}
              >
                <p.icon size={24} color={p.color} />
              </div>

              {/* Subtitle */}
              <span
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: p.color,
                  opacity: 0.8,
                }}
              >
                {p.subtitle}
              </span>

              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                {p.title}
              </h3>

              <p
                className="flex-1 mb-6"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      background: `${p.color}12`,
                      border: `1px solid ${p.color}25`,
                      color: p.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={p.href}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: p.color,
                }}
              >
                {p.cta}
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
