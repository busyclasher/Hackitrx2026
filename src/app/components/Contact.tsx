import { useState, useEffect, useRef } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import hackitRxLogo from "../../imports/HackitRx_logo_black.png";

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
              fontFamily: "'Space Grotesk', sans-serif",
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
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
              color: "#4a4a5e",
              lineHeight: 1.7,
            }}
          >
            Have questions? Want to participate? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a
            href="mailto:hello@hackitrx.sg"
            className="group p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            style={{
              background: "#ffffff",
              border: "2px solid rgba(236, 72, 153, 0.2)",
              boxShadow: "0 4px 20px rgba(236, 72, 153, 0.1)",
            }}
          >
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center mb-5"
              style={{
                background: "rgba(236, 72, 153, 0.1)",
                border: "1.5px solid rgba(236, 72, 153, 0.3)",
              }}
            >
              <Mail size={28} style={{ color: "#ec4899" }} />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#1a1a2e",
              }}
            >
              Email Us
            </h3>
            <p
              className="mb-3"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                color: "#5a5a6e",
                lineHeight: 1.6,
              }}
            >
              General enquiries and questions
            </p>
            <p
              className="font-semibold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.05rem",
                color: "#ec4899",
              }}
            >
              hello@hackitrx.sg
            </p>
          </a>

          <div
            className="p-8 rounded-2xl"
            style={{
              background: "#ffffff",
              border: "2px solid rgba(168, 85, 247, 0.2)",
              boxShadow: "0 4px 20px rgba(168, 85, 247, 0.1)",
            }}
          >
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center mb-5"
              style={{
                background: "rgba(168, 85, 247, 0.1)",
                border: "1.5px solid rgba(168, 85, 247, 0.3)",
              }}
            >
              <MessageCircle size={28} style={{ color: "#a855f7" }} />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#1a1a2e",
              }}
            >
              Submit a Story
            </h3>
            <p
              className="mb-3"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                color: "#5a5a6e",
                lineHeight: 1.6,
              }}
            >
              Share patient challenges to help guide our hackathon
            </p>
            <p
              className="font-semibold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.05rem",
                color: "#a855f7",
              }}
            >
              Coming soon
            </p>
          </div>

          <div
            className="p-8 rounded-2xl"
            style={{
              background: "#ffffff",
              border: "2px solid rgba(16, 185, 129, 0.2)",
              boxShadow: "0 4px 20px rgba(16, 185, 129, 0.1)",
            }}
          >
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center mb-5"
              style={{
                background: "rgba(16, 185, 129, 0.1)",
                border: "1.5px solid rgba(16, 185, 129, 0.3)",
              }}
            >
              <Phone size={28} style={{ color: "#10b981" }} />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#1a1a2e",
              }}
            >
              Partnership
            </h3>
            <p
              className="mb-3"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                color: "#5a5a6e",
                lineHeight: 1.6,
              }}
            >
              Interested in collaborating or sponsoring?
            </p>
            <p
              className="font-semibold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.05rem",
                color: "#10b981",
              }}
            >
              partners@hackitrx.sg
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t-2 border-gray-100">
          <div className="mb-6">
            <img
              src={hackitRxLogo}
              alt="HackitRx Singapore"
              className="h-12 mx-auto object-contain opacity-60"
            />
          </div>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1rem",
              color: "#8a8a9e",
            }}
          >
            © 2026 HackitRx Singapore. Built with{" "}
            <span style={{ color: "#ec4899" }}>♥</span> for patients everywhere.
          </p>
        </div>
      </div>
    </section>
  );
}
