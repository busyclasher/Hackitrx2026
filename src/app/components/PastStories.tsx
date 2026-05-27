import { useState, useEffect, useRef } from "react";
import { Award, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { innovations2025, winners2024 } from "../../data/pastWinners";

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
      className="relative overflow-hidden bg-white pb-20 pt-4"
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
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* 2025 Winning Solutions */}
        <div className="mb-20">
          <h3
            className="mb-8"
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "#1a1a2e",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
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
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      "imageFit" in item && item.imageFit === "contain"
                        ? "object-contain bg-white p-4"
                        : "object-cover"
                    }`}
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
        <div>
          <h3
            className="mb-8"
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "#1a1a2e",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
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
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      "imageFit" in item && item.imageFit === "contain"
                        ? "object-contain bg-white p-4"
                        : "object-cover"
                    }`}
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
                      fontSize: "0.85rem",
                      color: "#94a3b8",
                    }}
                  >
                    {item.group}
                  </p>
                  <p
                    style={{
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
      </div>
    </section>
  );
}