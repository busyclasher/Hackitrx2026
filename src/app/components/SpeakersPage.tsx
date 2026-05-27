import { Users } from "lucide-react";
import { Speakers } from "./Speakers";

const TELEGRAM_CHANNEL_URL = "https://t.me/+GLw0053W_PQxYzc9";

export function SpeakersPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#ffffff" }}
    >
      <section
        className="relative overflow-hidden pt-36 pb-14"
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
            <Users size={16} style={{ color: "#ec4899" }} />
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#ec4899",
                letterSpacing: "0.06em",
              }}
            >
              Guest Speakers
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
            Meet Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Speakers
            </span>
          </h1>

          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
              color: "#4a4a5e",
              lineHeight: 1.75,
            }}
          >
            Learn from experienced healthcare professionals, technologists, and patient advocates
            who will guide you through your innovation journey.
          </p>
        </div>
      </section>

      <Speakers />

      <section
        className="border-t py-20"
        style={{
          borderColor: "rgba(236, 72, 153, 0.1)",
          background: "linear-gradient(135deg, #fef3f7 0%, #f5f3ff 100%)",
        }}
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            className="mb-3"
            style={{ fontSize: "1.9rem", fontWeight: 700, color: "#1a1a2e" }}
          >
            Stay in the loop
          </h2>
          <p
            className="mb-8"
            style={{ fontSize: "1rem", color: "#6a6a7e", lineHeight: 1.75 }}
          >
            Join our Telegram channel for updates on workshops, new speaker announcements, and
            HackitRx 2026 news.
          </p>
          <a
            href={TELEGRAM_CHANNEL_URL}
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
            Join Our Community for updates
          </a>
        </div>
      </section>
    </div>
  );
}
