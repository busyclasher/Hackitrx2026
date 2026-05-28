import { useState, useEffect, useRef } from "react";
import { Mail } from "lucide-react";

const TELEGRAM_CHANNEL_URL = "https://t.me/+GLw0053W_PQxYzc9";

export function Contact() {
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
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 15%, #ffffff 100%)",
      }}
    >
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
          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.3,
            }}
          >
            Get in{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
              color: "#4a4a5e",
              lineHeight: 1.7,
            }}
          >
            Have questions? Want to participate? We'd love to hear from you.
          </p>
        </div>

        {/* Mobile: two compact buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-16 md:hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
          }}
        >
          <a
            href="mailto:sghackitrx@gmail.com"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold"
            style={{
              fontSize: "1rem",
              background: "#ffffff",
              color: "#a855f7",
              border: "2px solid #a855f7",
              textDecoration: "none",
            }}
          >
            <Mail size={18} />
            Email Us
          </a>
          <a
            href={TELEGRAM_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold"
            style={{
              fontSize: "1rem",
              background: "linear-gradient(135deg, #ec4899, #a855f7)",
              color: "#ffffff",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(236,72,153,0.3)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Join our Community
          </a>
        </div>

        {/* Desktop: email + Telegram community cards */}
        <div
          className="hidden md:grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
          }}
        >
          {/* Email */}
          <a
            href="mailto:sghackitrx@gmail.com"
            className="group flex flex-col items-center text-center h-full p-10 rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style={{
              background: "#ffffff",
              border: "2px solid rgba(236, 72, 153, 0.2)",
              boxShadow: "0 4px 20px rgba(236, 72, 153, 0.1)",
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                boxShadow: "0 10px 28px rgba(236, 72, 153, 0.3)",
              }}
            >
              <Mail size={28} style={{ color: "#ffffff" }} />
            </div>
            <h3
              className="mb-3"
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#1a1a2e",
              }}
            >
              Email Us
            </h3>
            <p
              className="mb-5"
              style={{
                fontSize: "1rem",
                color: "#5a5a6e",
                lineHeight: 1.6,
              }}
            >
              Questions, partnerships, or just to say hello — drop us a note.
            </p>
            <p
              className="font-semibold mt-auto"
              style={{
                fontSize: "1.15rem",
                color: "#ec4899",
              }}
            >
              sghackitrx@gmail.com
            </p>
          </a>

          {/* Telegram community */}
          <a
            href={TELEGRAM_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center h-full p-10 rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style={{
              background: "#ffffff",
              border: "2px solid rgba(168, 85, 247, 0.2)",
              boxShadow: "0 4px 20px rgba(168, 85, 247, 0.1)",
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{
                background: "linear-gradient(135deg, #a855f7, #6366f1)",
                boxShadow: "0 10px 28px rgba(168, 85, 247, 0.3)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </div>
            <h3
              className="mb-3"
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#1a1a2e",
              }}
            >
              Join our Community
            </h3>
            <p
              className="mb-5"
              style={{
                fontSize: "1rem",
                color: "#5a5a6e",
                lineHeight: 1.6,
              }}
            >
              Get updates, workshop announcements, and early sneak peeks on Telegram.
            </p>
            <span
              className="font-semibold mt-auto inline-flex items-center gap-1.5"
              style={{
                fontSize: "1.05rem",
                color: "#a855f7",
              }}
            >
              Join our Telegram channel →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
