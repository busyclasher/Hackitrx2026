import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Mail, CheckCircle } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsLoading(false);

    // Reset after 4 seconds
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setEmail("");
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 flex items-center justify-center p-4"
        style={{
          background: "rgba(0, 0, 0, 0.45)",
          backdropFilter: "blur(6px)",
          zIndex: 9999,
        }}
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="relative w-full rounded-3xl p-10"
          style={{
            background: "#ffffff",
            boxShadow: "0 24px 80px rgba(0, 0, 0, 0.18)",
            maxWidth: "480px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(236, 72, 153, 0.08)",
              border: "1px solid rgba(236, 72, 153, 0.2)",
            }}
          >
            <X size={18} style={{ color: "#ec4899" }} />
          </button>

          {!submitted ? (
            <>
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(236,72,153,0.12), rgba(168,85,247,0.12))",
                  border: "1.5px solid rgba(236, 72, 153, 0.25)",
                }}
              >
                <Mail size={28} style={{ color: "#ec4899" }} />
              </div>

              {/* Title */}
              <h3
                className="text-center mb-2"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.9rem",
                  fontWeight: 700,
                  color: "#1a1a2e",
                }}
              >
                Join the{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #ec4899, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Waitlist
                </span>
              </h3>

              <p
                className="text-center mb-8"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  color: "#6a6a7e",
                  lineHeight: 1.6,
                }}
              >
                Be the first to know when registration opens for HackitRx Singapore 2026.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label
                    htmlFor="modal-email"
                    className="block mb-2"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#1a1a2e",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl transition-all duration-200 focus:outline-none"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1rem",
                      color: "#1a1a2e",
                      background: "#f8f9fa",
                      border: "2px solid #e9ecef",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#ec4899";
                      e.target.style.background = "#ffffff";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e9ecef";
                      e.target.style.background = "#f8f9fa";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.05rem",
                    background: isLoading
                      ? "#9ca3af"
                      : "linear-gradient(135deg, #ec4899, #a855f7)",
                    color: "#ffffff",
                    border: "none",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    boxShadow: isLoading ? "none" : "0 4px 20px rgba(236, 72, 153, 0.3)",
                  }}
                >
                  {isLoading ? "Submitting…" : "Join Waitlist"}
                </button>
              </form>

              <p
                className="mt-5 text-center"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.82rem",
                  color: "#9ca3af",
                }}
              >
                No spam, ever. We respect your privacy.
              </p>
            </>
          ) : (
            // Success State
            <div className="text-center py-6">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "2px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                <CheckCircle size={38} style={{ color: "#10b981" }} />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "#1a1a2e",
                }}
              >
                You're on the list!
              </h3>
              <p
                className="mb-8"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  color: "#4a4a5e",
                  lineHeight: 1.7,
                }}
              >
                We'll notify you when registration opens.
                <br />
                Check your inbox for a confirmation email.
              </p>

              {/* Telegram Channel Link */}
              <a
                href="https://t.me/+GLw0053W_PQxYzc9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.95rem",
                  background: "linear-gradient(135deg, #ec4899, #a855f7)",
                  color: "#ffffff",
                  textDecoration: "none",
                  boxShadow: "0 4px 15px rgba(236, 72, 153, 0.3)",
                }}
              >
                Join our Telegram for updates →
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
}
