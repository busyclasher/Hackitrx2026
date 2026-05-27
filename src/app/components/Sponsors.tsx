import { useState, useEffect, useRef } from "react";
import pssLogo from "../../imports/PSS_logo_N_(1).png";
import aposLogo from "../../imports/APOS_main_(1).png";
import ogpLogo from "../../imports/OGP_black.png";

const organizers = [
  {
    name: "Pharmaceutical Society of Singapore",
    logo: pssLogo,
    abbr: "PSS",
  },
  {
    name: "Alliance of Patient's Organizations Singapore",
    logo: aposLogo,
    abbr: "APOS",
  },
  {
    name: "Open Government Products",
    logo: ogpLogo,
    abbr: "OGP",
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
            In Collaboration with
          </h2>
        </div>

        {/* Organizer Logos */}
        <div className="flex flex-nowrap justify-center items-center gap-3 sm:gap-10 md:gap-16">
          {organizers.map((org) => (
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
      </div>
    </section>
  );
}
