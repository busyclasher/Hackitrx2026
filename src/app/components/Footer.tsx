import { Heart } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{
        background: "#060412",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{
                  background: "linear-gradient(135deg, #e91e8c, #9c27b0)",
                  boxShadow: "0 0 16px rgba(233, 30, 140, 0.5)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Rx
              </div>
              <span
                className="text-white font-semibold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                HackitRx Singapore 2026
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.88rem",
                lineHeight: 1.7,
                maxWidth: "320px",
              }}
            >
              A healthcare innovation hackathon bringing together pharmacists,
              technologists, and patients to build solutions grounded in empathy
              and real-world need.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white mb-4"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About", id: "about" },
                { label: "How It Works", id: "how-it-works" },
                { label: "Workshops", id: "workshops" },
                { label: "Past Stories", id: "past-stories" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm transition-colors duration-200 hover:text-pink-400"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div>
            <h4
              className="text-white mb-4"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Participate
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Register Now", id: "registration" },
                { label: "Submit Story", id: "registration" },
                { label: "Sponsors", id: "sponsors" },
                { label: "Contact Us", id: "contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm transition-colors duration-200 hover:text-pink-400"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "rgba(255,255,255,0.3)",
              fontSize: "0.82rem",
            }}
          >
            © 2026 HackitRx Singapore. All rights reserved.
          </p>
          <p
            className="flex items-center gap-1.5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "rgba(255,255,255,0.3)",
              fontSize: "0.82rem",
            }}
          >
            Made with{" "}
            <Heart
              size={12}
              style={{ color: "#e91e8c", fill: "#e91e8c" }}
            />{" "}
            for patients everywhere
          </p>
        </div>

        {/* Illustration credit */}
        <p
          className="text-center mt-5"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "rgba(255,255,255,0.2)",
            fontSize: "0.75rem",
          }}
        >
          Illustration credits to BYOS.
        </p>
      </div>
    </footer>
  );
}