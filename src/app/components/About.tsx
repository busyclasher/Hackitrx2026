import { Sprout, MapPin, Rocket, HeartHandshake } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import groundUpImg from "../../../images/Ground-up Innovation.jpg";
import needLivesImg from "../../../images/Where the Needs Lives.jpeg";
import beyondIdeasImg from "../../../images/Beyond Ideas.jpeg";

const features = [
  {
    icon: Sprout,
    color: "#ec4899",
    bg: "rgba(236, 72, 153, 0.08)",
    border: "rgba(236, 72, 153, 0.2)",
    title: "Ground-Up Innovation",
    body: "HackitRx is a ground-up, patient-centric innovation programme — bringing patients, caregivers, and patient organisations together with healthcare professionals, builders, and designers to co-create the digital tools the care system needs, grounded in lived experience, no assumptions.",
    image: groundUpImg,
    reverse: false,
  },
  {
    icon: MapPin,
    color: "#a855f7",
    bg: "rgba(168, 85, 247, 0.08)",
    border: "rgba(168, 85, 247, 0.2)",
    title: "Where the Need Lives",
    body: "We start where the need lives. From day one, patients, caregivers, and patient organisations sit at the table with us — sharing real stories and turning everyday struggles into the concrete problem statements our teams build against across a months-long programme.",
    image: needLivesImg,
    reverse: true,
  },
  {
    icon: Rocket,
    color: "#14b8a6",
    bg: "rgba(20, 184, 166, 0.08)",
    border: "rgba(20, 184, 166, 0.2)",
    title: "Beyond Ideas",
    body: "We don't stop at ideas. Patients, caregivers, and patient organisations get the know-how, the expertise, and the partner network they need to co-create solutions — and to keep those solutions running long after the programme ends.",
    image: beyondIdeasImg,
    reverse: false,
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
      { threshold: 0.05 }
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
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div
          className="mb-20 max-w-3xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Who{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We Are
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(1.25rem, 2.6vw, 1.7rem)",
              fontWeight: 600,
              color: "#1a1a2e",
              lineHeight: 1.45,
            }}
          >
            Build for better healthcare.{" "}
            <span style={{ color: "#5a5a6e", fontWeight: 500 }}>
              Shaped by those who live it.
            </span>
          </p>
        </div>

        {/* Alternating image / text feature rows */}
        <div className="flex flex-col gap-20 md:gap-24 mb-24">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`flex flex-col gap-8 lg:gap-14 items-center ${
                  f.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.8s ease-out ${0.15 + idx * 0.15}s, transform 0.8s ease-out ${
                    0.15 + idx * 0.15
                  }s`,
                }}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 flex-shrink-0">
                  <div
                    className="relative rounded-3xl overflow-hidden"
                    style={{
                      boxShadow: `0 20px 50px ${f.bg}, 0 8px 24px rgba(26, 26, 46, 0.08)`,
                      border: `1px solid ${f.border}`,
                    }}
                  >
                    <img
                      src={f.image}
                      alt={f.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                      style={{ aspectRatio: "4 / 3" }}
                    />
                    {/* soft tinted overlay to tie into brand palette */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${f.bg} 0%, transparent 55%)`,
                      }}
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: "#ffffff",
                      border: `1.5px solid ${f.border}`,
                      boxShadow: `0 8px 20px ${f.bg}`,
                    }}
                  >
                    <Icon size={26} style={{ color: f.color }} />
                  </div>
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                      fontWeight: 700,
                      color: "#1a1a2e",
                      lineHeight: 1.25,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(1.05rem, 2vw, 1.15rem)",
                      color: "#4a4a5e",
                      lineHeight: 1.85,
                    }}
                  >
                    {f.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* A Stronger Care Ecosystem — full-width concluding card */}
        <div
          className="rounded-3xl p-10 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(236, 72, 153, 0.07), rgba(168, 85, 247, 0.07))",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(236, 72, 153, 0.2)",
            boxShadow: "0 12px 40px rgba(236, 72, 153, 0.12)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out 0.7s, transform 0.8s ease-out 0.7s",
          }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-7"
            style={{
              background: "linear-gradient(135deg, #ec4899, #a855f7)",
              boxShadow: "0 10px 28px rgba(236, 72, 153, 0.35)",
            }}
          >
            <HeartHandshake size={30} style={{ color: "#ffffff" }} />
          </div>
          <h3
            className="mb-6"
            style={{
              fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.2,
            }}
          >
            A Stronger{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Care Ecosystem
            </span>
          </h3>
          <p
            className="max-w-3xl mx-auto"
            style={{
              fontSize: "clamp(1.05rem, 2.2vw, 1.2rem)",
              color: "#4a4a5e",
              lineHeight: 1.85,
            }}
          >
            As part of PSS and the Stewards for Good (SFG) Programme in collaboration with Alliance of Patients' Organizations Singapore (APOS), we want to build a stronger care ecosystem from the ground-up — public good that genuinely matters to patients, caregivers, and the
            organisations who serve them. 
            We get there by tapping the collective wisdom of
            healthcare professionals, passionate builders, designers, and everyday Singaporeans,
            one solution at a time.
          </p>
        </div>

      </div>
    </section>
  );
}
