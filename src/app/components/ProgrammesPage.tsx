import { useEffect, useRef, useState } from "react";
import { MapPin, Clock } from "lucide-react";
import lumaImage from "../../../images/fireside-1-luma.jpg";
import { Seo } from "./Seo";

const talk2Image = "/Talk2_website_square.png";
const kickoffImage = "/kickoff-day-square.png";

interface EventItem {
  id: number;
  label: string;
  title: string;
  dateLabel: string;
  tentative?: boolean;
  time: string;
  venue: string;
  venueHref?: string;
  synopsis: string;
  image?: string;
  cta: { label: string; href?: string };
}

const events: EventItem[] = [
  {
    id: 1,
    label: "Fireside Chat 1",
    title: "Reimagining Healthcare from the Ground Up",
    dateLabel: "12 June 2026",
    time: "7:00 PM – 9:00 PM",
    venue: "Open Government Products · 51 Bras Basah Rd, #04-08 Lazada One, Singapore 189554",
    synopsis:
      "Who builds for the gaps in our healthcare system? Join us for a fireside chat exploring how to identify and address unmet patient needs — bringing together healthcare innovators, patient advocates, and technology leaders to talk patient-centred design and real-world healthcare innovation in Singapore.",
    image: lumaImage,
    cta: { label: "Register Now", href: "https://luma.com/amd4vto1" },
  },
  {
    id: 2,
    label: "Fireside Chat 2",
    title: "Turning Patient Challenges into Lasting Solutions",
    dateLabel: "30 July 2026",
    time: "7:00 - 9:00pm",
    venue: "Open Government Products · 51 Bras Basah Rd, #04-08 Lazada One, Singapore 189554",
    synopsis:
      "Good solutions begin with knowing which problems truly matter. Across two moderated sessions, this fireside chat explores how patient and community care problems are uncovered, validated, and shaped into prototypes and pilots built to last. Registration and refreshments start from 6:30 PM.",
    image: talk2Image,
    cta: { label: "Register Now", href: "https://luma.com/ogp-8d2t" },
  },
  {
    id: 3,
    label: "Kick-off Day",
    title: "Collaborate with Patients",
    dateLabel: "30 August 2026",
    time: "9:30 AM – 4:30 PM",
    venue: "Outram Community Hospital (OCH)",
    venueHref: "https://maps.app.goo.gl/WMC1NarwdMCsjXVu7",
    synopsis:
      "The starting line for HackitRx 2026. Hear directly from the patient organisations behind this year's problem statements, understand the real needs driving each one, and find the challenge you want to spend the next four weeks solving. It is also where teams come together — come as a solo builder, a pair, or a full team, and leave with people whose skills complement yours.\n\nExpect talks from leaders in the healthcare space, small-group sharing sessions with our partner patient organisations, and a full afternoon dedicated to team matching and problem statement selection. Registration is required and open to participants who have received an acceptance email. Representatives from patient organisations and advocacy groups are also warmly welcome to observe — please indicate your organisation when registering.",
    image: kickoffImage,
    cta: { label: "RSVP Now!", href: "https://luma.com/md536irp" },
  },
  {
    id: 4,
    label: "Demo Day",
    title: "Show Your Solution",
    dateLabel: "27 September 2026",
    time: "To be confirmed",
    venue: "To be confirmed",
    synopsis:
      "The culmination of HackitRx 2026. After four weeks of building with patients, teams present their solutions to a panel of judges from healthcare, technology, and policy — celebrating the work and exploring pathways to pilot and scale what they have built.",
    cta: { label: "Coming Soon" },
  },
];

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
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

export function ProgrammesPage() {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>
      <Seo
        title="HackitRx 2026 Programme — Singapore Healthcare Hackathon, Fireside Chats & Demo Day"
        description="The Singapore healthcare innovation challenge in full: fireside chats, the month-long healthcare hackathon, and Demo Day."
      />
      {/* Header */}
      <section
        className="relative pt-36 pb-12"
        style={{
          background: "linear-gradient(135deg, #fef6fb 0%, #f6f4fd 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="mb-4"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Programme{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Timeline
            </span>
          </h1>
          <p
            style={{
              fontSize: "clamp(1.02rem, 2.2vw, 1.15rem)",
              color: "#5a5a6e",
              lineHeight: 1.7,
              maxWidth: "640px",
            }}
          >
            Join us for a series of fireside chats, a month-long hackathon, and
            networking sessions designed to co-create the future of care.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {events.map((event, i) => {
            const active = Boolean(event.cta.href);
            const isLast = i === events.length - 1;
            return (
              <FadeIn key={event.id} delay={i * 80} className="flex gap-4 sm:gap-6">
                {/* Rail */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="mt-1 rounded-full flex-shrink-0"
                    style={
                      active
                        ? {
                            width: "20px",
                            height: "20px",
                            background:
                              "linear-gradient(135deg, #ec4899, #a855f7)",
                            boxShadow: "0 0 0 5px rgba(236,72,153,0.15)",
                          }
                        : {
                            width: "20px",
                            height: "20px",
                            background: "#ffffff",
                            border: "2px solid #d1d5db",
                          }
                    }
                  />
                  {!isLast && (
                    <div
                      className="flex-1 w-0.5 my-1"
                      style={{ background: "#e9e7f0", minHeight: "40px" }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pb-12">
                  {/* Date label */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: active ? "#1a1a2e" : "#6b7280",
                      }}
                    >
                      {event.dateLabel}
                    </h2>
                    {event.tentative && (
                      <span
                        className="px-2.5 py-0.5 rounded-full"
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "#a855f7",
                          background: "rgba(168,85,247,0.1)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Tentative
                      </span>
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-2xl bg-white p-6 md:p-7 flex flex-col md:flex-row gap-6 transition-shadow duration-300 hover:shadow-lg"
                    style={{
                      border: "1px solid #ececf1",
                      boxShadow: "0 4px 20px rgba(26,26,46,0.05)",
                    }}
                  >
                    <div className="flex-1 min-w-0">
                      <div
                        className="flex items-center gap-1.5 mb-2"
                        style={{ color: "#6b7280" }}
                      >
                        <Clock size={14} />
                        <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                          {event.time}
                        </span>
                        <span
                          className="px-2 py-0.5 rounded ml-1"
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: "#a855f7",
                            background: "rgba(168,85,247,0.08)",
                          }}
                        >
                          {event.label}
                        </span>
                      </div>

                      <h3
                        className="mb-3"
                        style={{
                          fontSize: "clamp(1.25rem, 3vw, 1.6rem)",
                          fontWeight: 700,
                          color: "#1a1a2e",
                          lineHeight: 1.25,
                        }}
                      >
                        {event.title}
                      </h3>

                      <div
                        className="flex items-center gap-1.5 mb-4"
                        style={{ color: "#6b7280" }}
                      >
                        <MapPin size={15} />
                        {event.venueHref ? (
                          <a
                            href={event.venueHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontSize: "0.9rem",
                              color: "#a855f7",
                              textDecoration: "underline",
                              textUnderlineOffset: "2px",
                            }}
                          >
                            {event.venue}
                          </a>
                        ) : (
                          <span style={{ fontSize: "0.9rem" }}>{event.venue}</span>
                        )}
                      </div>

                      <div className="mb-6">
                        {event.synopsis.split("\n\n").map((para, pi) => (
                          <p
                            key={pi}
                            style={{
                              fontSize: "0.97rem",
                              color: "#4a4a5e",
                              lineHeight: 1.75,
                              marginBottom: "0.9rem",
                            }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>

                      {active ? (
                        <a
                          href={event.cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 font-semibold transition-transform duration-200 hover:scale-[1.03]"
                          style={{
                            fontSize: "0.95rem",
                            background:
                              "linear-gradient(135deg, #ec4899, #a855f7)",
                            color: "#ffffff",
                            textDecoration: "none",
                            boxShadow: "0 4px 16px rgba(236,72,153,0.3)",
                          }}
                        >
                          {event.cta.label} →
                        </a>
                      ) : (
                        <span
                          className="inline-flex items-center rounded-lg px-6 py-2.5"
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            background: "#f1f1f4",
                            color: "#9ca3af",
                            cursor: "default",
                          }}
                        >
                          {event.cta.label}
                        </span>
                      )}
                    </div>

                    {event.image && (
                      <div className="md:w-[260px] lg:w-[290px] flex-shrink-0">
                        <img
                          src={event.image}
                          alt={event.title}
                          loading="lazy"
                          className="w-full max-w-[300px] mx-auto rounded-xl"
                          style={{
                            border: "1px solid rgba(0,0,0,0.06)",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </div>
  );
}
