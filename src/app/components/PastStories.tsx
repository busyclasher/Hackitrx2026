import { useState, useEffect, useRef } from "react";
import { Award, Check, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const TELEGRAM_CHANNEL_URL = "https://t.me/+GLw0053W_PQxYzc9";

const innovations2025 = [
  {
    team: "Care+",
    image: "https://images.unsplash.com/photo-1676311522524-fa7c0bffd644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbW9iaWxlJTIwYXBwJTIwbWVkaWNhdGlvbnxlbnwxfHx8fDE3NzcwMzY2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    solutions: [
      "Optimised medication scheduling for cancer treatment",
      "Financial planning tool for insurance coverage",
      "Personalised patient education"
    ]
  },
  {
    team: "GoldLabel+",
    image: "https://images.unsplash.com/photo-1762328500413-1a4cb2023059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxsJTIwYm90dGxlJTIwcHJlc2NyaXB0aW9uJTIwbGFiZWx8ZW58MXx8fHwxNzc3MDM2NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    solutions: [
      "AI-powered simplified medication labels",
      "Visual pictograms for easy understanding",
      "Multi-language translation support"
    ]
  },
  {
    team: "PillSnap",
    image: "https://images.unsplash.com/photo-1666214275099-0ca566aefe26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG1lZGljYWwlMjB0ZWNobm9sb2d5JTIwc2Nhbm5lcnxlbnwxfHx8fDE3NzcwMzY2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    solutions: [
      "AI pill identification using image recognition",
      "Analyzes colour, size, and imprint details",
      "Provides ranked match suggestions"
    ]
  }
];

const winners2024 = [
  {
    prize: "Champion",
    team: "Missy Bot 1.0",
    group: "Group 13",
    description: "AI breast care nurse supporting elderly patients with cognitive, visual, and hearing impairments.",
    image: "https://images.unsplash.com/photo-1765896387377-e293914d1e69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwcGF0aWVudCUyMGNhcmUlMjBudXJzZXxlbnwxfHx8fDE3NzcwMzY2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    prize: "1st Runner-up",
    team: "SimplePLAN",
    group: "Group 4",
    description: "Digital platform enabling advanced care planning conversations.",
    image: "https://images.unsplash.com/photo-1666886573301-b5d526cfd518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaGVhbHRoJTIwcGxhbm5pbmclMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzc3MDM2NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    prize: "2nd Runner-up",
    team: "RALPH",
    group: "Group 19",
    description: "Personalised pocket pharmacist supporting counselling services.",
    image: "https://images.unsplash.com/photo-1576091358783-a212ec293ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjaXN0JTIwY291bnNlbGluZyUyMHBhdGllbnR8ZW58MXx8fHwxNzc3MDM2NjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function PastStories() {
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
      id="past-stories"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fef8fa 0%, #f8f4fe 100%)",
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
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16 max-w-3xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.2,
              marginBottom: "1rem"
            }}
          >
            Previous{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hackathon Winners
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#5a5a6e",
              fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
              lineHeight: 1.7,
            }}
          >
            Discover how past teams transformed healthcare challenges into impactful solutions.
          </p>
        </div>

        {/* 2025 Winning Solutions */}
        <div className="mb-16">
          <h3
            className="mb-8"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "#1a1a2e",
            }}
          >
            2025 Winning Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {innovations2025.map((item) => (
              <div
                key={item.team}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.72)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  boxShadow: "0 4px 16px rgba(168,85,247,0.07)",
                }}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.team}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4) 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Team name */}
                  <h4
                    className="mb-4"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#0ea5e9",
                    }}
                  >
                    {item.team}
                  </h4>

                  {/* Solution points */}
                  <ul className="space-y-2.5">
                    {item.solutions.map((solution, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          color: "#3a3a4e",
                          fontSize: "1.05rem",
                          lineHeight: 1.6,
                        }}
                      >
                        <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#0ea5e9" }} />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2024 Award Winners */}
        <div className="mb-16">
          <h3
            className="mb-8"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "#1a1a2e",
            }}
          >
            2024 Award Winners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {winners2024.map((item, idx) => (
              <div
                key={item.team}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.72)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  boxShadow: "0 4px 16px rgba(168,85,247,0.07)",
                }}
              >
                {/* Photo */}
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.team}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.55) 100%)",
                    }}
                  />
                  {/* Prize badge overlaid on image */}
                  <div className="absolute bottom-3 left-4">
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(245, 158, 11, 0.92)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <Award size={13} style={{ color: "#fff" }} />
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
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

                {/* Content */}
                <div className="p-6">
                  <h4
                    className="mb-1"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#0ea5e9",
                    }}
                  >
                    {item.team}
                  </h4>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.85rem",
                      color: "#94a3b8",
                    }}
                  >
                    {item.group}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#3a3a4e",
                      fontSize: "0.97rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <p
            className="mb-6"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.3rem",
              color: "#4a4a5e",
            }}
          >
            Be part of the next breakthrough
          </p>
          <a
            href={TELEGRAM_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.2rem",
              background: "linear-gradient(135deg, #ec4899, #a855f7)",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            <Lightbulb size={22} />
            Join Telegram
          </a>
        </div>
      </div>
    </section>
  );
}