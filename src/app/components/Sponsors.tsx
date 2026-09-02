import { useState, useEffect, useRef } from "react";
import pssLogo from "../../imports/PSS_logo_N_(1).png";
import aposLogo from "../../imports/APOS_main_(1).png";
import ogpLogo from "../../imports/OGP_black.png";

const organisers = [
  {
    name: "Pharmaceutical Society of Singapore",
    logo: pssLogo,
    abbr: "PSS",
  },
  {
    name: "Alliance of Patient's Organisations Singapore",
    logo: aposLogo,
    abbr: "APOS",
  },
  {
    name: "Open Government Products",
    logo: ogpLogo,
    abbr: "OGP",
  },
];

const partners = [
  {
    name: "OpenAI",
    logo: "/openai.png",
  },
  {
    name: "Gemini",
    logo: "/gemini.png",
  },
];

export function Sponsors() {
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
      id="sponsors"
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f8f4fe 0%, #f8f9fa 40%, #f8f9fa 100%)",
      }}
    >
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
          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.3,
            }}
          >
            Jointly Organised by
          </h2>
        </div>

        {/* Organiser Logos */}
        <div className="flex flex-nowrap justify-center items-center gap-3 sm:gap-10 md:gap-16">
          {organisers.map((org) => (
            <div
              key={org.abbr}
              className="flex-1 min-w-0 flex items-center justify-center p-2 sm:p-6 rounded-2xl transition-all duration-300"
              style={{
                maxWidth: "240px",
                background: "transparent",
                transform: "scale(1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(236, 72, 153, 0.04)";
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(236, 72, 153, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={org.logo}
                alt={org.name}
                className="max-h-12 sm:max-h-20 md:max-h-24 w-auto max-w-full object-contain transition-all duration-300"
                style={{ filter: "grayscale(20%)", opacity: 0.85 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(20%)";
                  e.currentTarget.style.opacity = "0.85";
                }}
              />
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div
          className="mt-20 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
          }}
        >
          <h2
            className="mb-10"
            style={{
              fontSize: "clamp(1.25rem, 2.4vw, 1.65rem)",
              fontWeight: 600,
              color: "rgba(74, 74, 94, 0.62)",
              lineHeight: 1.3,
            }}
          >
            Our Partners
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="w-full max-w-[280px] sm:max-w-[320px] flex items-center justify-center px-8 py-6 rounded-2xl transition-all duration-300"
                style={{
                  minHeight: "132px",
                  background: "rgba(255, 255, 255, 0.72)",
                  boxShadow: "0 10px 30px rgba(26, 26, 46, 0.06)",
                  border: "1px solid rgba(236, 72, 153, 0.08)",
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`${partner.name === "Gemini" ? "max-h-14 sm:max-h-16" : "max-h-20 sm:max-h-24"} w-auto max-w-full object-contain transition-all duration-300`}
                  style={{ filter: "grayscale(10%)", opacity: 0.9 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0%)";
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(10%)";
                    e.currentTarget.style.opacity = "0.9";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
