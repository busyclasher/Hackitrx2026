import { Stethoscope, Cpu, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    icon: Stethoscope,
    color: "#ec4899",
    bg: "rgba(236, 72, 153, 0.08)",
    border: "rgba(236, 72, 153, 0.2)",
    title: "Clinical Expertise",
    body: "Pharmacists and healthcare professionals who understand the system from the inside — and know exactly where it breaks down.",
  },
  {
    icon: Cpu,
    color: "#a855f7",
    bg: "rgba(168, 85, 247, 0.08)",
    border: "rgba(168, 85, 247, 0.2)",
    title: "Technical Ingenuity",
    body: "Developers, designers, and data scientists who turn real-world problems into working prototypes over a single weekend.",
  },
  {
    icon: Heart,
    color: "#14b8a6",
    bg: "rgba(20, 184, 166, 0.08)",
    border: "rgba(20, 184, 166, 0.2)",
    title: "Lived Experience",
    body: "Patient organisations who bring the human truth behind every diagnosis — the voice no dataset can replace.",
  },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="about"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #ffffff 70%, #fef3f7 100%)" }}
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
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h2
            className="mb-5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.2,
            }}
          >
            About Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mission
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
              color: "#5a5a6e",
              lineHeight: 1.8,
            }}
          >
            The best healthcare solutions are built at the intersection of three forces. At HackitRx 2026, all three are in the room.
          </p>
        </div>

        {/* Three Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl p-8 flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                style={{
                  background: p.bg,
                  border: `1.5px solid ${p.border}`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.8s ease-out ${idx * 0.2}s, transform 0.8s ease-out ${idx * 0.2}s`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "#ffffff",
                    border: `1.5px solid ${p.border}`,
                    boxShadow: `0 4px 12px ${p.bg}`,
                  }}
                >
                  <Icon size={26} style={{ color: p.color }} />
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#1a1a2e",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1rem",
                    color: "#4a4a5e",
                    lineHeight: 1.75,
                  }}
                >
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Vision text */}
        <div
          className="mb-12 rounded-3xl p-10"
          style={{
            background: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(236, 72, 153, 0.12)",
            boxShadow: "0 8px 32px rgba(236, 72, 153, 0.1)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
          }}
        >
          <h3
            className="mb-5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              fontWeight: 700,
              color: "#1a1a2e",
            }}
          >
            Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Vision
            </span>
          </h3>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.05rem, 2.2vw, 1.2rem)",
              color: "#4a4a5e",
              lineHeight: 1.85,
            }}
          >
            <p className="mb-5">
              Our mission is to pioneer a new framework for{" "}
              <strong style={{ color: "#1a1a2e" }}>ground-up healthcare innovation</strong> where patients,
              technologists, and clinicians like pharmacists stand as equal architects of a better future.
            </p>
          </div>
        </div>

        {/* Differentiator box */}
        <div
          className="rounded-3xl p-10"
          style={{
            background: "linear-gradient(135deg, rgba(236, 72, 153, 0.07), rgba(168, 85, 247, 0.07))",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(236, 72, 153, 0.2)",
            boxShadow: "0 12px 40px rgba(236, 72, 153, 0.12)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out 0.8s, transform 0.8s ease-out 0.8s",
          }}
        >
          <h3
            className="mb-5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)",
              fontWeight: 700,
              color: "#1a1a2e",
            }}
          >
            How is HackitRx 2026{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              different?
            </span>
          </h3>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.05rem, 2.2vw, 1.2rem)",
              color: "#4a4a5e",
              lineHeight: 1.85,
            }}
          >
            <p className="mb-5">
              For two years, we successfully hacked the pharmacy experience. But we realised a critical truth:
              innovation without the patient voice is just an assumption. This year, we are closing that gap.
            </p>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.1rem, 2.2vw, 1.25rem)",
                fontWeight: 600,
                color: "#ec4899",
              }}
            >
              We are pivoting from "building for" to "building with."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
