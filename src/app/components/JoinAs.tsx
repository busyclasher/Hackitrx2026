import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Code, Building2 } from "lucide-react";

type PersonaType = "builder" | "patient-org";

const builderData = {
  icon: Code,
  iconColor: "#a855f7",
  iconBg: "rgba(168, 85, 247, 0.12)",
  iconBorder: "rgba(168, 85, 247, 0.25)",
  title: "Builder",
  subtitle: "Developers, designers & researchers",
  description:
    "Builders are the makers — individuals or small teams who come to the hackathon to create. Whether you write code, design experiences, or crunch data, your job is to turn a real patient problem into a working solution over the course of the event.",
  tagsLabel: "Themes you can work on",
  tags: [
    "Mental health",
    "Rare diseases",
    "Clinical trials",
    "Remote monitoring",
    "Patient data",
    "Medication mgmt",
    "Carer support",
    "Accessibility",
  ],
  expectLabel: "What to expect",
  expect:
    "You'll be matched with a patient organisation who brings the problem. You bring the skills. Mentors, datasets, and clinical advisors are available throughout the event.",
  accentColor: "#a855f7",
  gradientFrom: "#a855f7",
  gradientTo: "#ec4899",
};

const patientOrgData = {
  icon: Building2,
  iconColor: "#14b8a6",
  iconBg: "rgba(20, 184, 166, 0.12)",
  iconBorder: "rgba(20, 184, 166, 0.25)",
  title: "Patient Organisation",
  subtitle: "Charities, advocacy groups & foundations",
  description:
    "Patient organisations bring the mission. You represent the people most affected by a condition — and you hold knowledge that no dataset can capture. At this hackathon, your role is to share that lived experience so builders can create something that genuinely helps.",
  tagsLabel: "What you bring",
  tags: [
    "Lived experience",
    "Clinical advisors",
    "Patient insight",
    "Real-world data",
    "Pilot opportunity",
  ],
  expectLabel: "What to expect",
  expect:
    "You'll submit a challenge brief before the event. Builder teams then select your challenge and spend the hackathon building toward it — with you available to give feedback and steer direction.",
  accentColor: "#14b8a6",
  gradientFrom: "#14b8a6",
  gradientTo: "#a855f7",
};

interface CardProps {
  data: typeof builderData;
  active: boolean;
  onClick: () => void;
  onCTA: () => void;
}

function PersonaCard({ data, active, onClick, onCTA }: CardProps) {
  const Icon = data.icon;

  return (
    <div
      className="rounded-3xl p-8 flex flex-col cursor-pointer transition-all duration-500"
      style={{
        background: active ? "#ffffff" : "#f9fafb",
        border: active
          ? `2px solid ${data.accentColor}30`
          : "2px solid #e5e7eb",
        boxShadow: active
          ? `0 12px 40px ${data.accentColor}18`
          : "none",
        opacity: active ? 1 : 0.55,
        flex: 1,
        transform: "translateY(0)",
      }}
      onClick={!active ? onClick : undefined}
      onMouseEnter={(e) => {
        if (active) {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = `0 20px 60px ${data.accentColor}25`;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        if (active) {
          e.currentTarget.style.boxShadow = `0 12px 40px ${data.accentColor}18`;
        }
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
        style={{
          background: active ? data.iconBg : "rgba(0,0,0,0.05)",
          border: `1.5px solid ${active ? data.iconBorder : "transparent"}`,
        }}
      >
        <Icon
          size={26}
          style={{ color: active ? data.iconColor : "#9ca3af" }}
        />
      </div>

      {/* Title */}
      <h3
        className="mb-1"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "1.5rem",
          fontWeight: 700,
          color: active ? "#1a1a2e" : "#6b7280",
        }}
      >
        {data.title}
      </h3>
      <p
        className="mb-5"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.9rem",
          color: active ? "#6a6a7e" : "#9ca3af",
        }}
      >
        {data.subtitle}
      </p>

      {/* Divider */}
      <div
        className="mb-5"
        style={{
          height: "1px",
          background: active ? `${data.accentColor}20` : "#e5e7eb",
        }}
      />

      {/* Description */}
      <p
        className="mb-6"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.97rem",
          color: active ? "#374151" : "#9ca3af",
          lineHeight: 1.75,
          flex: 1,
        }}
      >
        {data.description}
      </p>

      {/* Tags */}
      <div className="mb-5">
        <p
          className="mb-3"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 700,
            color: active ? "#9ca3af" : "#d1d5db",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {data.tagsLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.82rem",
                background: active ? `${data.accentColor}12` : "rgba(0,0,0,0.04)",
                color: active ? data.accentColor : "#9ca3af",
                border: `1px solid ${active ? data.accentColor + "28" : "#e5e7eb"}`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        className="mb-5"
        style={{
          height: "1px",
          background: active ? `${data.accentColor}20` : "#e5e7eb",
        }}
      />

      {/* What to expect */}
      <div className="mb-7">
        <p
          className="mb-2"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 700,
            color: active ? "#9ca3af" : "#d1d5db",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {data.expectLabel}
        </p>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.95rem",
            color: active ? "#374151" : "#9ca3af",
            lineHeight: 1.7,
          }}
        >
          {data.expect}
        </p>
      </div>

      {/* CTA */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (active) onCTA();
        }}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.95rem",
          background: active
            ? `linear-gradient(135deg, ${data.gradientFrom}, ${data.gradientTo})`
            : "rgba(0,0,0,0.06)",
          color: active ? "#ffffff" : "#9ca3af",
          border: "none",
          cursor: active ? "pointer" : "default",
          width: "fit-content",
          boxShadow: active ? `0 4px 15px ${data.accentColor}35` : "none",
          transform: "scale(1)",
        }}
        onMouseEnter={(e) => {
          if (active) (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.03)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        }}
      >
        Learn more ↗
      </button>
    </div>
  );
}

export function JoinAs() {
  const [active, setActive] = useState<PersonaType>("builder");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="join"
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #fafafa 0%, #f5f3ff 100%)",
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {/* Background blobs */}
      <div
        className="absolute top-0 right-[8%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#a855f7",
              background: "rgba(168, 85, 247, 0.08)",
              border: "1.5px solid rgba(168, 85, 247, 0.2)",
            }}
          >
            Get Involved
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.2,
            }}
          >
            Who are you coming as?
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#6a6a7e",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            HackitRx brings together two essential groups. Select your role to learn more.
          </p>
        </div>

        {/* Toggle tabs */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setActive("builder")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              background: active === "builder" ? "#1a1a2e" : "#ffffff",
              color: active === "builder" ? "#ffffff" : "#6b7280",
              border: active === "builder" ? "2px solid #1a1a2e" : "2px solid #e5e7eb",
              cursor: "pointer",
            }}
          >
            <Code size={16} />
            Builder
          </button>
          <button
            onClick={() => setActive("patient-org")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              background: active === "patient-org" ? "#1a1a2e" : "#ffffff",
              color: active === "patient-org" ? "#ffffff" : "#6b7280",
              border: active === "patient-org" ? "2px solid #1a1a2e" : "2px solid #e5e7eb",
              cursor: "pointer",
            }}
          >
            <Building2 size={16} />
            Patient Organisation
          </button>
        </div>

        {/* Cards side by side */}
        <div className="flex flex-col md:flex-row gap-6">
          <PersonaCard
            data={builderData}
            active={active === "builder"}
            onClick={() => setActive("builder")}
            onCTA={() => navigate("/join/builder")}
          />
          <PersonaCard
            data={patientOrgData}
            active={active === "patient-org"}
            onClick={() => setActive("patient-org")}
            onCTA={() => navigate("/join/patient-organisation")}
          />
        </div>
      </div>
    </section>
  );
}