import { useState } from "react";
import hackitRxLogo from "../../imports/HackitRx_logo_black.png";
// @ts-ignore
import singaporeanSvgRaw from "../../imports/singaporean.svg?raw";
import { WaitlistModal } from "./WaitlistModal";
import { SvgScene } from "./SvgScene";

export function Hero() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  return (
    <section
      className="relative min-h-screen flex flex-col items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fef3f7 0%, #fef8fa 50%, #f8f4fe 100%)",
      }}
    >
      {/* Floating gradient shapes with animation */}
      <div
        className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[15%] left-[5%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "float 25s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute top-[40%] left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float 18s ease-in-out infinite",
        }}
      />

      {/* Keyframes for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-8 w-full flex-1">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left: text content */}
          <div
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
            style={{
              animation: "fadeInUp 1s ease-out",
            }}
          >
            {/* Logo */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <img
                src={hackitRxLogo}
                alt="HackitRx Singapore 2026"
                className="h-20 md:h-28 object-contain"
              />
            </div>

            {/* Event badge */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-7"
              style={{
                background: "rgba(236, 72, 153, 0.08)",
                border: "1.5px solid rgba(236, 72, 153, 0.25)",
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ background: "#ec4899" }}
              />
              <span
                className="font-semibold"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.05rem",
                  color: "#ec4899"
                }}
              >
                Singapore · 2026
              </span>
            </div>

            {/* Headline */}
            <h1
              className="mb-7"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#1a1a2e",
                letterSpacing: "-0.02em",
              }}
            >
              Empowering{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ec4899, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                healthcare innovation
              </span>
              <br />
              through collaboration.
            </h1>

            {/* Sub-headline */}
            <p
              className="mb-8 max-w-xl"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                color: "#4a4a5e",
                lineHeight: 1.75,
              }}
            >
              Bringing together patients, healthcare leaders, and innovators to solve real-world healthcare challenges.
            </p>

            {/* Demo Day highlight */}
            <div
              className="inline-block mb-9 px-5 py-2.5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1))",
                border: "2px solid rgba(236, 72, 153, 0.3)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: "#ec4899",
                }}
              >
                Demo Day: <span style={{ color: "#a855f7" }}>10-11 October 2026</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setShowWaitlist(true)}
                className="px-9 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: "linear-gradient(135deg, #ec4899, #a855f7)",
                  boxShadow: "0 4px 20px rgba(236, 72, 153, 0.3)",
                  fontSize: "1.1rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Get Involved
              </button>
              <a
                href="#events"
                className="px-9 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: "#ffffff",
                  border: "2px solid #ec4899",
                  color: "#ec4899",
                  fontSize: "1.1rem",
                  textDecoration: "none",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Events
              </a>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="flex-shrink-0 w-full lg:w-[480px] xl:w-[540px] flex items-end justify-center">
            <SvgScene
              raw={singaporeanSvgRaw}
              aspectRatio="492/386"
              className="max-w-sm lg:max-w-full drop-shadow-lg"
            />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 animate-bounce"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.85rem",
                color: "#6a6a7e",
                fontWeight: 500,
              }}
            >
              Scroll to explore
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{ color: "#ec4899" }}
            >
              <path
                d="M7 13l5 5 5-5M7 6l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 w-full border-t" style={{ borderColor: "rgba(236, 72, 153, 0.15)", background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)" }}>
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 gap-6">
          {[
            { value: "3rd", label: "Edition" },
            { value: "Oct 10–11", label: "Demo Day 2026" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #ec4899, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.88rem",
                  color: "#6a6a7e",
                  marginTop: "2px",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </section>
  );
}