import { useState, useEffect, useRef } from "react";
import { Calendar, MessageCircle, Users, Rocket, ChevronDown } from "lucide-react";

const events = [
  {
    date: "12 June",
    label: "Talk 1",
    title: "Reimagining Healthcare from the Ground Up",
    description:
      "Who builds for the gaps in our healthcare system? Join us for a fireside chat exploring how to identify and address unmet patient needs.",
    details: "This interactive session brings together healthcare innovators, patient advocates, and technology leaders to discuss how we can better identify and address critical gaps in healthcare delivery. Learn frameworks for patient-centered design and discover real-world case studies of successful healthcare innovations.",
    color: "#f59e0b",
    icon: MessageCircle,
  },
  {
    date: "13–17 July",
    label: "Talk 2",
    title: "From Pain Point to Prototype",
    description:
      "Building solutions that last. Learn how to transform patient challenges into sustainable digital health innovations.",
    details: "A hands-on workshop covering the full journey from problem discovery to prototype validation. Topics include rapid prototyping techniques, user testing with patients, regulatory considerations, and strategies for sustainable implementation in healthcare settings.",
    color: "#10b981",
    icon: MessageCircle,
  },
  {
    date: "29–30 August",
    label: "Kick-off Day",
    title: "Collaborate with Patients",
    description:
      "Work directly with patients and patient organisations to uncover unmet needs that truly matter, and start building digital solutions that tackle real challenges.",
    details: "The official launch of HackitRx 2026. Meet your team members, connect with patient organisations, select your challenge, and begin building. Mentors will be available throughout the day to help you refine your approach and get started on the right foot.",
    color: "#3b82f6",
    icon: Users,
  },
  {
    date: "10–11 October",
    label: "Demo Day",
    title: "Show Your Prototype",
    description:
      "Present your solution to the community, showcase what you've built, and connect with potential funders and supporters.",
    details: "The culmination of your hard work! Present your prototype to a panel of judges including healthcare professionals, patient advocates, and technology investors. Network with other teams, celebrate innovation, and learn about pathways to bring your solution to market.",
    color: "#a855f7",
    icon: Rocket,
  },
];

export function Workshops() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
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
      id="events"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fef3f7 0%, #fef8fa 50%, #f8f4fe 100%)",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
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
      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full"
            style={{
              background: "rgba(236, 72, 153, 0.08)",
              border: "1.5px solid rgba(236, 72, 153, 0.25)",
            }}
          >
            <Calendar size={20} style={{ color: "#ec4899" }} />
            <span
              className="font-semibold"
              style={{
                fontSize: "1rem",
                color: "#ec4899",
              }}
            >
              2026 Events
            </span>
          </div>

          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.2,
            }}
          >
            Mark Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Calendar
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "#5a5a6e",
            }}
          >
            From preparatory talks to the final demo — here's the full journey.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute left-[140px] top-8 bottom-8 w-px hidden md:block"
            style={{
              background: "linear-gradient(to bottom, rgba(236,72,153,0.3), rgba(168,85,247,0.3))",
              zIndex: 0,
            }}
          />

          <div className="flex flex-col gap-10">
            {events.map((event, idx) => {
              const Icon = event.icon;
              const isLast = idx === events.length - 1;
              return (
                <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start" style={{ position: "relative" as const, zIndex: 1 }}>

                  {/* Date column */}
                  <div className="flex md:flex-col items-center gap-4 md:gap-0 md:w-[140px] flex-shrink-0">
                    <div
                      className="px-3 py-1.5 rounded-lg text-center md:mb-3"
                      style={{
                        background: `${event.color}18`,
                        border: `1px solid ${event.color}40`,
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: event.color,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {event.date}
                      </p>
                    </div>

                    {/* Dot on the line */}
                    <div className="relative flex-shrink-0 hidden md:flex items-center justify-center">
                      <div
                        className="w-4 h-4 rounded-full z-10"
                        style={{
                          background: event.color,
                          boxShadow: `0 0 0 4px ${event.color}25`,
                          marginLeft: "auto",
                          marginRight: "-8px",
                        }}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"
                    style={{
                      background: "rgba(255, 255, 255, 0.72)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: `1.5px solid ${event.color}28`,
                      boxShadow: `0 4px 20px ${event.color}10`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `${event.color}15`,
                          border: `1.5px solid ${event.color}40`,
                        }}
                      >
                        <Icon size={20} style={{ color: event.color }} />
                      </div>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase" as const,
                          color: event.color,
                        }}
                      >
                        {event.label}
                      </span>
                    </div>

                    <h3
                      className="mb-3"
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#1a1a2e",
                        lineHeight: 1.35,
                      }}
                    >
                      {event.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#5a5a6e",
                        lineHeight: 1.75,
                      }}
                    >
                      {event.description}
                    </p>

                    {/* Expandable Details */}
                    {expandedEvent === idx && (
                      <div
                        className="mt-4 pt-4"
                        style={{
                          borderTop: `1px solid ${event.color}20`,
                          animation: "fadeIn 0.3s ease-in",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "0.95rem",
                            color: "#4a4a5e",
                            lineHeight: 1.7,
                          }}
                        >
                          {event.details}
                        </p>
                      </div>
                    )}

                    {/* Learn More Button */}
                    <button
                      onClick={() => setExpandedEvent(expandedEvent === idx ? null : idx)}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200"
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: event.color,
                        background: `${event.color}10`,
                        border: `1px solid ${event.color}30`,
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${event.color}18`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${event.color}10`;
                      }}
                    >
                      {expandedEvent === idx ? "Show Less" : "Learn More"}
                      <ChevronDown
                        size={16}
                        style={{
                          transform: expandedEvent === idx ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </button>

                    {isLast && (
                      <div
                        className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
                        style={{
                          background: "rgba(168, 85, 247, 0.1)",
                          border: "1px solid rgba(168, 85, 247, 0.3)",
                        }}
                      >
                        <span
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ background: "#a855f7" }}
                        />
                        <span
                          style={{
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            color: "#a855f7",
                          }}
                        >
                          Main Event
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}