import { useEffect, useRef, useState } from "react";
import { Calendar, MessageCircle, Users, Rocket, Clock, MapPin, User } from "lucide-react";

interface Speaker {
  name: string;
  role: string;
  org: string;
}

interface EventCard {
  id: number;
  label: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  synopsis: string;
  color: string;
  icon: typeof MessageCircle;
  speakers: Speaker[];
  tags: string[];
}

const events: EventCard[] = [
  {
    id: 1,
    label: "Talk 1",
    title: "Reimagining Healthcare from the Ground Up",
    date: "12 June 2026",
    time: "7:00 PM – 9:00 PM",
    venue: "To be confirmed",
    synopsis:
      "Who builds for the gaps in our healthcare system? Join us for a fireside chat exploring how to identify and address unmet patient needs. This session brings together healthcare innovators, patient advocates, and technology leaders to discuss frameworks for patient-centred design and real-world case studies of successful healthcare innovations in Singapore.",
    color: "#f59e0b",
    icon: MessageCircle,
    speakers: [
      { name: "Speaker TBA", role: "Healthcare Innovator", org: "To be announced" },
      { name: "Speaker TBA", role: "Patient Advocate", org: "To be announced" },
    ],
    tags: ["Fireside Chat", "Patient-Centred Design", "Healthcare Gaps"],
  },
  {
    id: 2,
    label: "Talk 2",
    title: "From Pain Point to Prototype",
    date: "13–17 July 2026",
    time: "7:00 PM – 9:00 PM (Evenings)",
    venue: "To be confirmed",
    synopsis:
      "A hands-on workshop covering the full journey from problem discovery to prototype validation. Topics include rapid prototyping techniques, user testing with patients, regulatory considerations for digital health, and strategies for sustainable implementation in Singapore's healthcare settings. Perfect for builders who want to hit the ground running at the hackathon.",
    color: "#10b981",
    icon: MessageCircle,
    speakers: [
      { name: "Speaker TBA", role: "Product Designer", org: "To be announced" },
      { name: "Speaker TBA", role: "Digital Health Lead", org: "To be announced" },
    ],
    tags: ["Workshop", "Prototyping", "User Testing", "Digital Health"],
  },
  {
    id: 3,
    label: "Kick-off Day",
    title: "Collaborate with Patients",
    date: "29–30 August 2026",
    time: "9:00 AM – 6:00 PM",
    venue: "To be confirmed",
    synopsis:
      "The official launch of HackitRx 2026. Meet your team members, connect with patient organisations, select your challenge, and begin building. Mentors from healthcare, design, and engineering will be available throughout the two days to help you refine your approach. This is your first opportunity to sit down with real patients and hear their stories firsthand.",
    color: "#3b82f6",
    icon: Users,
    speakers: [
      { name: "Speaker TBA", role: "Clinical Mentor", org: "To be announced" },
      { name: "Speaker TBA", role: "Patient Organisation Lead", org: "To be announced" },
      { name: "Speaker TBA", role: "Tech Mentor", org: "To be announced" },
    ],
    tags: ["Kick-off", "Team Formation", "Mentorship", "Patient Matching"],
  },
  {
    id: 4,
    label: "Demo Day",
    title: "Show Your Prototype",
    date: "10–11 October 2026",
    time: "9:00 AM – 6:00 PM",
    venue: "To be confirmed",
    synopsis:
      "The culmination of HackitRx 2026. After two days of building, teams present their prototypes to a panel of judges including healthcare professionals, patient advocates, technologists, and policy makers. Network with other teams, celebrate innovation, and explore pathways to bring your solution to market. Winners receive support to pilot their solutions with partnering organisations.",
    color: "#a855f7",
    icon: Rocket,
    speakers: [
      { name: "Judge TBA", role: "Healthcare Professional", org: "To be announced" },
      { name: "Judge TBA", role: "Technology Investor", org: "To be announced" },
      { name: "Judge TBA", role: "Patient Advocate", org: "To be announced" },
    ],
    tags: ["Demo Day", "Judging", "Awards", "Main Event"],
  },
];

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SpeakerAvatar({ speaker }: { speaker: Speaker }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
        style={{
          background: "rgba(168,85,247,0.1)",
          border: "1.5px solid rgba(168,85,247,0.2)",
        }}
      >
        <User size={18} style={{ color: "#a855f7" }} />
      </div>
      <div>
        <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a1a2e" }}>
          {speaker.name}
        </p>
        <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
          {speaker.role} · {speaker.org}
        </p>
      </div>
    </div>
  );
}

export function ProgrammesPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#ffffff", fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fef3f7 0%, #fef8fa 50%, #f5f3ff 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(236, 72, 153, 0.08)",
              border: "1.5px solid rgba(236, 72, 153, 0.25)",
            }}
          >
            <Calendar size={16} style={{ color: "#ec4899" }} />
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#ec4899",
                letterSpacing: "0.06em",
              }}
            >
              2026 Programmes
            </span>
          </div>

          <h1
            className="mb-5"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Mark your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              calendar.
            </span>
          </h1>
          <p
            className="mx-auto"
            style={{
              fontSize: "clamp(1.05rem, 2.5vw, 1.2rem)",
              color: "#5a5a6e",
              lineHeight: 1.75,
              maxWidth: "600px",
            }}
          >
            From introductory talks to the final demo day — every event in the HackitRx
            2026 journey, laid out clearly so you can plan ahead.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-10">
            {events.map((event, i) => {
              const Icon = event.icon;
              return (
                <FadeIn key={event.id} delay={i * 80}>
                  <div
                    className="rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
                    style={{
                      background: "#ffffff",
                      border: `2px solid ${event.color}20`,
                      boxShadow: `0 4px 24px ${event.color}0d`,
                    }}
                  >
                    {/* Card top accent */}
                    <div
                      className="h-1.5 w-full"
                      style={{
                        background: `linear-gradient(90deg, ${event.color}, ${event.color}80)`,
                      }}
                    />

                    <div className="p-8">
                      {/* Header row */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{
                              background: `${event.color}14`,
                              border: `1.5px solid ${event.color}35`,
                            }}
                          >
                            <Icon size={20} style={{ color: event.color }} />
                          </div>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              color: event.color,
                              textTransform: "uppercase",
                              letterSpacing: "0.09em",
                            }}
                          >
                            {event.label}
                          </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {event.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full"
                              style={{
                                background: `${event.color}0e`,
                                border: `1px solid ${event.color}28`,
                                fontSize: "0.72rem",
                                fontWeight: 600,
                                color: event.color,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Title */}
                      <h2
                        className="mb-5"
                        style={{
                          fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                          fontWeight: 700,
                          color: "#1a1a2e",
                          lineHeight: 1.25,
                        }}
                      >
                        {event.title}
                      </h2>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-5 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} style={{ color: event.color }} />
                          <span style={{ fontSize: "0.9rem", color: "#374151", fontWeight: 600 }}>
                            {event.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} style={{ color: event.color }} />
                          <span style={{ fontSize: "0.9rem", color: "#374151" }}>
                            {event.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} style={{ color: event.color }} />
                          <span style={{ fontSize: "0.9rem", color: "#374151" }}>
                            {event.venue}
                          </span>
                        </div>
                      </div>

                      {/* Synopsis */}
                      <p
                        className="mb-8"
                        style={{
                          fontSize: "1rem",
                          color: "#4a4a5e",
                          lineHeight: 1.8,
                        }}
                      >
                        {event.synopsis}
                      </p>

                      {/* Divider */}
                      <div
                        className="mb-6"
                        style={{ borderTop: `1px solid ${event.color}18` }}
                      />

                      {/* Speakers */}
                      <div>
                        <p
                          className="mb-4"
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: "#9ca3af",
                            textTransform: "uppercase",
                            letterSpacing: "0.09em",
                          }}
                        >
                          {event.id === 4 ? "Judges & Panellists" : "Speakers & Mentors"}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {event.speakers.map((speaker, si) => (
                            <div
                              key={si}
                              className="flex items-center gap-3 p-3 rounded-xl"
                              style={{
                                background: `${event.color}06`,
                                border: `1px solid ${event.color}14`,
                              }}
                            >
                              <div
                                className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
                                style={{
                                  background: `${event.color}14`,
                                  border: `1.5px solid ${event.color}30`,
                                }}
                              >
                                <User size={16} style={{ color: event.color }} />
                              </div>
                              <div>
                                <p
                                  style={{
                                    fontSize: "0.85rem",
                                    fontWeight: 700,
                                    color: "#1a1a2e",
                                  }}
                                >
                                  {speaker.name}
                                </p>
                                <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
                                  {speaker.role}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Main event badge */}
                      {event.id === 4 && (
                        <div
                          className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
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
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stay updated CTA */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #fef3f7 0%, #f5f3ff 100%)",
        }}
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <FadeIn>
            <h2
              className="mb-3"
              style={{ fontSize: "1.9rem", fontWeight: 700, color: "#1a1a2e" }}
            >
              Speaker announcements coming soon
            </h2>
            <p
              className="mb-8"
              style={{ fontSize: "1rem", color: "#6a6a7e", lineHeight: 1.75 }}
            >
              Full speaker line-ups will be confirmed over the coming months. Join our
              Telegram channel to be the first to know when speakers are announced.
            </p>
            <a
              href="https://t.me/+GLw0053W_PQxYzc9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105"
              style={{
                fontSize: "1rem",
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                color: "#ffffff",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(168,85,247,0.3)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Join Telegram for updates
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
