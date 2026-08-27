import { useEffect, useRef, useState } from "react";
import { MapPin, Clock, ChevronDown } from "lucide-react";
import lumaImage from "../../../images/fireside-1-luma.jpg";
import { Seo } from "./Seo";

const talk2Image = "/Talk2_website_square.png";
const kickoffImage = "/kickoff-day-square.png";

interface ScheduleRow {
  time: string;
  activity: string;
  remarks?: string[];
}

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
  ended?: boolean;
  milestone?: boolean;
  defaultOpen?: boolean;
  sprintRole?: string;
  audience?: string;
  schedule?: ScheduleRow[];
}

interface PhaseInfo {
  number: number;
  title: string;
  rangeLabel: string;
  synopsis: string;
}

const phases: PhaseInfo[] = [
  {
    number: 1,
    title: "Problem Discovery & Deep Dive",
    rangeLabel: "31 Aug – 11 Sep",
    synopsis:
      "Before you build, get closer to the problem. In this phase, every team should hold at least one focused group discussion (online or physical) with their partner patient organisation — and an onsite visit is a strong good-to-have. Timings will be provided by each organisation, and it's up to your team to liaise closely with the partners you're working with. The sessions below support your discovery alongside the ones you arrange directly.",
  },
  {
    number: 2,
    title: "Solutioning & Validation",
    rangeLabel: "14 – 27 Sep",
    synopsis:
      "Time to converge. Turn what you've learned into an early prototype and proof of concept, validating each iteration with your patient organisation. Workshops and mentors will be available throughout this phase to guide your team towards a working POC/MVP by Demo Day.",
  },
];

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
    cta: { label: "Event Ended" },
    ended: true,
  },
  {
    id: 2,
    label: "Fireside Chat 2",
    title: "Turning Patient Challenges into Lasting Solutions",
    dateLabel: "30 July 2026",
    time: "7:00 PM – 9:00 PM",
    venue: "Open Government Products · 51 Bras Basah Rd, #04-08 Lazada One, Singapore 189554",
    synopsis:
      "Good solutions begin with knowing which problems truly matter. Across two moderated sessions, this fireside chat explores how patient and community care problems are uncovered, validated, and shaped into prototypes and pilots built to last.",
    image: talk2Image,
    cta: { label: "Event Ended" },
    ended: true,
  },
  {
    id: 3,
    label: "Kick-off Day",
    title: "Collaborate With Our Patients & Community Partners",
    dateLabel: "30 August 2026",
    time: "10:00 AM – 5:00 PM",
    venue: "Outram Community Hospital (OCH)",
    venueHref: "https://maps.app.goo.gl/WMC1NarwdMCsjXVu7",
    defaultOpen: true,
    sprintRole:
      "Day 1 of your 4-week build sprint — leave with a team, a problem statement, and a patient organisation partner.",
    synopsis:
      "The starting line for HackitRx 2026. Hear directly from the patient organisations behind this year's problem statements, understand the real needs driving each one, and find the challenge you want to spend the next four weeks solving. It is also where teams come together — come as a solo builder, a pair, or a full team, and leave with people whose skills complement yours.\n\nExpect talks from leaders in the healthcare space, small-group sharing sessions with our partner patient organisations, and a full afternoon dedicated to team matching and problem statement selection. Registration is required and open to participants who have received an acceptance email. Representatives from patient organisations and advocacy groups are also warmly welcome to observe — please indicate your organisation when registering.",
    image: kickoffImage,
    cta: { label: "RSVP Now!", href: "https://luma.com/md536irp" },
    schedule: [
      {
        time: "10:00 – 10:30",
        activity: "Registration & Networking",
        remarks: ["Light refreshments sponsored by SUSS."],
      },
      {
        time: "10:30 – 11:00",
        activity: "Opening Remarks & Welcome Speech",
        remarks: [
          "Opening remarks by Qihuang & Alfred.",
          "Welcome speeches from APOS (Nidhi), OGP (Vivian), and SUSS (Dr Kelvin).",
        ],
      },
      {
        time: "11:00 – 11:30",
        activity:
          "Keynote Lecture — Dr Quek Lit Sin: Build With, Not For: Partnering Patients & Caregivers to Co-create an AI-enabled Health System",
        remarks: [
          "Dr Quek Lit Sin, Assistant Chief Executive at NUHS, makes the case for building with patients rather than for them — showing why patient- and caregiver-centred innovation matters in a care journey no single organisation owns — and shares how NUHS is becoming an AI-enabled, learning health system, including “Kin”, its always-available health companion that journeys with patients and their caregivers.",
        ],
      },
      {
        time: "11:30 – 11:45",
        activity: "Icebreaker",
        remarks: ["Bingo!"],
      },
      {
        time: "11:45 – 1:00",
        activity: "Roundtable Sharing by Patient Organisations",
        remarks: [
          "Small groups of ~10 pax in 20-minute sessions — you'll get to listen in on up to 3 sessions.",
        ],
      },
      {
        time: "1:00 – 2:00",
        activity: "Lunch & Patient Organisation Engagement",
      },
      {
        time: "2:00 – 3:00",
        activity: "Team Formation",
        remarks: [
          "Gather at the organisation you're most interested in and form teams of 5–6 pax.",
        ],
      },
      {
        time: "3:00 – 3:30",
        activity:
          "Sharing — Peggy Yee: Building What Patients & Caregivers Actually Need: Start Small, Think System",
        remarks: [
          "A lawyer, mediator, cancer survivor, caregiver, and Co-Chair of the Inclusive Justice Taskforce, Peggy Yee has navigated the healthcare system from every side. She shares the gaps she has lived through, how cross-sector collaboration made REACT Caretag real, and why the best solutions start small but think system-wide.",
        ],
      },
      {
        time: "3:30 – 4:30",
        activity: "Problem Discovery Workshop",
        remarks: ["Conducted by Vivian (OGP)."],
      },
      {
        time: "4:30 – 5:00",
        activity: "Closing & Admin Brief",
        remarks: [
          "Upcoming schedule and the resources available to support your build sprint.",
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Workshop",
    title:
      "HackitRx × SGBiodesign — From Real Needs to Real Solutions: Concept Generation Workshop",
    dateLabel: "31 August 2026",
    time: "1-hour session · time on Luma",
    venue: "Virtual",
    sprintRole:
      "Turn what you heard at Kick-off into concepts worth building — before you write a single line of code.",
    synopsis:
      "You've heard the problems, straight from the patients and patient organisations living them. Now what?\n\nThe jump from “we understand the need” to “we have a solution worth building” is where most healthtech ideas quietly fall apart — teams either fixate on their first idea or drown in fifty directions at once.\n\nIn this 1-hour session, HackitRx 2026 partners with Singapore Biodesign to walk you through the next stage of the biodesign process, the framework behind hundreds of successful medtech and healthtech innovations worldwide:\n\nConcept generation — how to brainstorm widely and prototype early, so your team explores the full solution space instead of anchoring on the obvious answer.\n\nConcept selection — how to converge on the best concept through a structured, objective process, so the idea you commit to is chosen on evidence, not enthusiasm.\n\nYou'll leave with a practical method your team can apply directly to the needs you've identified with our patient organisation partners — before you write a single line of code.",
    cta: { label: "Register Now", href: "https://luma.com/mcmvneds" },
  },
  {
    id: 5,
    label: "Co-working Day",
    title: "Open Problem Discovery Day 1",
    dateLabel: "6 September 2026",
    time: "9:00 AM – 3:00 PM",
    venue: "Open Government Products · 51 Bras Basah Rd, #04-08 Lazada One, Singapore 189554",
    audience: "Open to all POs, SSAs & hackers · PO learning journey",
    sprintRole:
      "Phase 1 — dig deeper into your problem with patient organisations and SSAs before you commit your build direction.",
    synopsis:
      "A physical space at the OGP office at Lazada One, open to all patient organisations, social service agencies, and hackers. Come and run your own problem discovery — interview partners, pressure-test assumptions, and work alongside other teams doing the same.",
    cta: { label: "Sign Up Opening Soon" },
  },
  {
    id: 6,
    label: "Mid-Point",
    title: "Midpoint Feedback & Grilling",
    dateLabel: "13 September 2026",
    time: "10:00 AM – 1:00 PM",
    venue: "To be confirmed",
    milestone: true,
    sprintRole:
      "The checkpoint between the two phases — close out discovery, pressure-test your direction, and enter Phase 2 with a clear build plan.",
    synopsis:
      "You will showcase what you've found with your patient organisation since Kick-off Day, and — at minimum — the approach you plan to take to tackle the problem: slides, Figma, or a prototype, whichever tells the story best.\n\nPatient organisations and mentors will be there to give feedback and honest criticism, drawing on their experience of what works and what doesn't. Come ready to be grilled — it's the fastest way to a stronger solution.",
    cta: { label: "Sign Up Opening Soon" },
  },
  {
    id: 7,
    label: "Co-working Day",
    title: "Open Problem Discovery Day 2",
    dateLabel: "19 September 2026",
    time: "9:00 AM – 3:00 PM",
    venue: "Open Government Products · 51 Bras Basah Rd, #04-08 Lazada One, Singapore 189554",
    audience: "Open to all POs, SSAs & hackers",
    sprintRole:
      "Phase 2 — validate your prototype with patient organisations in person and iterate on the spot.",
    synopsis:
      "A second open co-working day at the OGP office at Lazada One, open to all patient organisations, social service agencies, and hackers. Bring your work-in-progress, put it in front of the people you're building for, and keep the discovery going as your solution takes shape.",
    cta: { label: "Sign Up Opening Soon" },
  },
  {
    id: 8,
    label: "Engagement",
    title: "Southwest CDC Engagement with Mayor Low Yen Ling",
    dateLabel: "23 September 2026",
    time: "To be confirmed",
    venue: "To be confirmed",
    sprintRole:
      "Phase 2 — explore pathways to pilot and scale your project across the Southwest district.",
    synopsis:
      "For teams partnering with Lakeside, NUHS, and MINDS: get feedback and support on potentially scaling your project across the Southwest district, in an engagement with Southwest CDC and Mayor Low Yen Ling.\n\nAll other teams are welcome to come onboard too if you'd like an additional round of feedback before Demo Day.",
    cta: { label: "Sign Up Opening Soon" },
  },
  {
    id: 9,
    label: "Demo Day",
    title: "Show Your Solution",
    dateLabel: "27 September 2026",
    time: "To be confirmed",
    venue: "To be confirmed",
    sprintRole:
      "The finish line — present the POC/MVP you've built with patients over the past four weeks.",
    synopsis:
      "The culmination of HackitRx 2026. After four weeks of building with patients, teams present their solutions to a panel of judges from healthcare, technology, and policy — celebrating the work and exploring pathways to pilot and scale what they have built.",
    cta: { label: "Sign Up Opening Soon" },
  },
];

type TimelineNode =
  | { kind: "event"; event: EventItem }
  | { kind: "phase"; phase: PhaseInfo };

function eventById(id: number): EventItem {
  return events.find((e) => e.id === id)!;
}

const timeline: TimelineNode[] = [
  { kind: "event", event: eventById(1) },
  { kind: "event", event: eventById(2) },
  { kind: "event", event: eventById(3) },
  { kind: "phase", phase: phases[0] },
  { kind: "event", event: eventById(4) },
  { kind: "event", event: eventById(5) },
  { kind: "event", event: eventById(6) },
  { kind: "phase", phase: phases[1] },
  { kind: "event", event: eventById(7) },
  { kind: "event", event: eventById(8) },
  { kind: "event", event: eventById(9) },
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

function EndedBadge() {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1"
      style={{
        fontSize: "0.72rem",
        fontWeight: 700,
        color: "#6b7280",
        background: "#f1f1f4",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      Event Ended
    </span>
  );
}

/** Phase divider banner rendered inside the timeline. */
function PhaseBanner({ phase }: { phase: PhaseInfo }) {
  return (
    <div
      className="rounded-2xl p-6 md:p-7"
      style={{
        background: "linear-gradient(135deg, #fef6fb 0%, #f6f4fd 100%)",
        border: "1px solid rgba(168,85,247,0.2)",
      }}
    >
      <div className="flex flex-wrap items-center gap-2.5 mb-2">
        <span
          className="px-2.5 py-1 rounded-full"
          style={{
            fontSize: "0.72rem",
            fontWeight: 800,
            color: "#ffffff",
            background: "linear-gradient(135deg, #ec4899, #a855f7)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Phase {phase.number}
        </span>
        <span
          className="px-2.5 py-1 rounded-full"
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "#a855f7",
            background: "rgba(168,85,247,0.1)",
            letterSpacing: "0.03em",
          }}
        >
          {phase.rangeLabel}
        </span>
      </div>
      <h2
        className="mb-2"
        style={{
          fontSize: "clamp(1.35rem, 3.2vw, 1.75rem)",
          fontWeight: 700,
          color: "#1a1a2e",
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
        }}
      >
        {phase.title}
      </h2>
      <p
        style={{
          fontSize: "0.95rem",
          color: "#4a4a5e",
          lineHeight: 1.7,
          maxWidth: "640px",
        }}
      >
        {phase.synopsis}
      </p>
    </div>
  );
}

/** Collapsed row for past events — click to expand full details. */
function PastEventCard({ event }: { event: EventItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl bg-white overflow-hidden transition-shadow duration-300 hover:shadow-md"
      style={{
        border: "1px solid #ececf1",
        boxShadow: "0 2px 10px rgba(26,26,46,0.04)",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-3 px-5 py-4 text-left"
        style={{ background: "transparent", cursor: "pointer" }}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className="px-2 py-0.5 rounded"
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "#9ca3af",
                background: "#f5f5f8",
              }}
            >
              {event.label}
            </span>
            <EndedBadge />
          </div>
          <span
            style={{
              fontSize: "1.02rem",
              fontWeight: 700,
              color: "#6b7280",
              lineHeight: 1.3,
            }}
          >
            {event.title}
          </span>
        </div>
        <ChevronDown
          size={18}
          style={{
            color: "#9ca3af",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
          }}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 flex flex-col md:flex-row gap-5">
          <div className="flex-1 min-w-0">
            <div
              className="flex items-center gap-1.5 mb-1.5"
              style={{ color: "#9ca3af" }}
            >
              <Clock size={13} />
              <span style={{ fontSize: "0.82rem", fontWeight: 600 }}>
                {event.time}
              </span>
            </div>
            <div
              className="flex items-center gap-1.5 mb-3"
              style={{ color: "#9ca3af" }}
            >
              <MapPin size={14} />
              <span style={{ fontSize: "0.85rem" }}>{event.venue}</span>
            </div>
            {event.synopsis.split("\n\n").map((para, pi) => (
              <p
                key={pi}
                style={{
                  fontSize: "0.93rem",
                  color: "#6b7280",
                  lineHeight: 1.7,
                  marginBottom: "0.8rem",
                }}
              >
                {para}
              </p>
            ))}
          </div>
          {event.image && (
            <div className="md:w-[200px] flex-shrink-0">
              <img
                src={event.image}
                alt={event.title}
                loading="lazy"
                className="w-full max-w-[240px] mx-auto rounded-xl"
                style={{
                  border: "1px solid rgba(0,0,0,0.06)",
                  filter: "grayscale(35%)",
                  opacity: 0.85,
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/** Full-day run-of-show for Kick-off Day. */
function KickoffSchedule({ schedule }: { schedule: ScheduleRow[] }) {
  return (
    <div
      className="rounded-xl overflow-hidden mb-6"
      style={{ border: "1px solid #ececf1" }}
    >
      <div
        className="px-4 py-3"
        style={{
          background: "linear-gradient(135deg, #fef6fb 0%, #f6f4fd 100%)",
        }}
      >
        <span
          style={{
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "#a855f7",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          Full-Day Programme
        </span>
      </div>
      {schedule.map((row, ri) => (
        <div
          key={ri}
          className="flex flex-col sm:flex-row gap-1 sm:gap-4 px-4 py-3.5"
          style={{
            borderTop: "1px solid #f1f1f4",
            background: ri % 2 === 0 ? "#ffffff" : "#fcfbfe",
          }}
        >
          <div
            className="sm:w-[110px] flex-shrink-0"
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "#a855f7",
              whiteSpace: "nowrap",
            }}
          >
            {row.time}
          </div>
          <div className="flex-1 min-w-0">
            <div
              style={{
                fontSize: "0.93rem",
                fontWeight: 600,
                color: "#1a1a2e",
                lineHeight: 1.45,
              }}
            >
              {row.activity}
            </div>
            {row.remarks?.map((r, i2) => (
              <p
                key={i2}
                style={{
                  fontSize: "0.85rem",
                  color: "#6b7280",
                  lineHeight: 1.6,
                  marginTop: "0.3rem",
                }}
              >
                {r}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Upcoming event card — collapsed by default, click to expand full details. */
function UpcomingEventCard({ event }: { event: EventItem }) {
  const [open, setOpen] = useState(Boolean(event.defaultOpen));
  const [scheduleOpen, setScheduleOpen] = useState(false);

  const active = Boolean(event.cta.href);
  const isKickoff = Boolean(event.schedule);
  const highlighted = isKickoff || event.milestone;

  return (
    <div
      className="rounded-2xl bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg"
      style={{
        border: highlighted
          ? "1px solid rgba(236,72,153,0.35)"
          : "1px solid #ececf1",
        boxShadow: highlighted
          ? "0 6px 28px rgba(236,72,153,0.12)"
          : "0 4px 20px rgba(26,26,46,0.05)",
      }}
    >
      {/* Collapsed header — always visible */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-start gap-3 p-6 md:p-7 text-left"
        style={{ background: "transparent", cursor: "pointer" }}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-1.5 mb-2">
            <span
              className="px-2 py-0.5 rounded"
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "#a855f7",
                background: "rgba(168,85,247,0.08)",
              }}
            >
              {event.label}
            </span>
            {event.audience && (
              <span
                className="px-2 py-0.5 rounded"
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#ec4899",
                  background: "rgba(236,72,153,0.08)",
                }}
              >
                {event.audience}
              </span>
            )}
          </div>

          <h3
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.6rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.25,
            }}
          >
            {event.title}
          </h3>

          {event.sprintRole && (
            <div
              className="rounded-lg px-4 py-3 mt-3"
              style={{
                background:
                  "linear-gradient(135deg, rgba(236,72,153,0.06), rgba(168,85,247,0.06))",
                border: "1px solid rgba(168,85,247,0.15)",
              }}
            >
              <span
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#7c3aed",
                  lineHeight: 1.5,
                }}
              >
                {event.sprintRole}
              </span>
            </div>
          )}

          {!open && (
            <span
              className="inline-flex items-center gap-1 mt-3"
              style={{
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#a855f7",
              }}
            >
              Show details
              <ChevronDown size={14} />
            </span>
          )}
        </div>
        <ChevronDown
          size={20}
          className="mt-1"
          style={{
            color: "#a855f7",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
          }}
        />
      </button>

      {/* Expanded details */}
      {open && (
        <div className="px-6 md:px-7 pb-6 md:pb-7">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 min-w-0">
              <div
                className="flex flex-wrap items-center gap-1.5 mb-2"
                style={{ color: "#6b7280" }}
              >
                <Clock size={14} />
                <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  {event.time}
                </span>
              </div>

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
                    onClick={(e) => e.stopPropagation()}
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

              <div className="flex flex-wrap items-center gap-3">
                {active ? (
                  <a
                    href={event.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 font-semibold transition-transform duration-200 hover:scale-[1.03]"
                    style={{
                      fontSize: "0.95rem",
                      background: "linear-gradient(135deg, #ec4899, #a855f7)",
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

                {isKickoff && (
                  <button
                    type="button"
                    aria-expanded={scheduleOpen}
                    onClick={() => setScheduleOpen((v) => !v)}
                    className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 font-semibold"
                    style={{
                      fontSize: "0.95rem",
                      background: "rgba(168,85,247,0.08)",
                      color: "#a855f7",
                      border: "1px solid rgba(168,85,247,0.25)",
                      cursor: "pointer",
                    }}
                  >
                    {scheduleOpen
                      ? "Hide Full Programme"
                      : "View Full Programme"}
                    <ChevronDown
                      size={16}
                      style={{
                        transform: scheduleOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                      }}
                    />
                  </button>
                )}
              </div>
            </div>

            {event.image && (
              <div className="md:w-[260px] lg:w-[290px] flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-full max-w-[300px] mx-auto rounded-xl"
                  style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                />
              </div>
            )}
          </div>

          {isKickoff && scheduleOpen && event.schedule && (
            <div className="mt-6">
              <KickoffSchedule schedule={event.schedule} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function ProgrammesPage() {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>
      <Seo
        title="HackitRx 2026 Programme — Singapore Healthcare Hackathon, Fireside Chats & Demo Day"
        description="The Singapore healthcare innovation challenge in full: Kick-off Day, a two-phase build sprint from problem discovery to solutioning and validation, and Demo Day."
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
              maxWidth: "680px",
            }}
          >
            From Kick-off Day to Demo Day, the 4-week build sprint runs in two
            phases — Problem Discovery &amp; Deep Dive, then Solutioning &amp;
            Validation — taking your team from real patient needs to a working
            POC/MVP. Block your calendars now — this is the road ahead.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {timeline.map((node, i) => {
            const isLast = i === timeline.length - 1;

            if (node.kind === "phase") {
              return (
                <FadeIn
                  key={`phase-${node.phase.number}`}
                  delay={i * 80}
                  className="flex gap-4 sm:gap-6"
                >
                  {/* Rail */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="mt-1 flex-shrink-0"
                      style={{
                        width: "18px",
                        height: "18px",
                        transform: "rotate(45deg)",
                        borderRadius: "4px",
                        background: "linear-gradient(135deg, #ec4899, #a855f7)",
                        boxShadow: "0 0 0 5px rgba(168,85,247,0.15)",
                      }}
                    />
                    {!isLast && (
                      <div
                        className="flex-1 w-0.5 my-1"
                        style={{ background: "#e9e7f0", minHeight: "40px" }}
                      />
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0 pb-10">
                    <PhaseBanner phase={node.phase} />
                  </div>
                </FadeIn>
              );
            }

            const event = node.event;
            const active = Boolean(event.cta.href);
            return (
              <FadeIn key={event.id} delay={i * 80} className="flex gap-4 sm:gap-6">
                {/* Rail */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="mt-1 rounded-full flex-shrink-0"
                    style={
                      active || event.milestone
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
                <div
                  className="flex-1 min-w-0"
                  style={{ paddingBottom: event.ended ? "1.5rem" : "3rem" }}
                >
                  {/* Date label */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: event.ended ? "#9ca3af" : "#1a1a2e",
                      }}
                    >
                      {event.dateLabel}
                    </h2>
                    {event.milestone && (
                      <span
                        className="px-2.5 py-0.5 rounded-full"
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "#ffffff",
                          background:
                            "linear-gradient(135deg, #ec4899, #a855f7)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Mid-Point
                      </span>
                    )}
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

                  {event.ended ? (
                    <PastEventCard event={event} />
                  ) : (
                    <UpcomingEventCard event={event} />
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </div>
  );
}
