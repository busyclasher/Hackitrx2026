import { Linkedin, Instagram } from "lucide-react";
import hackitRxLogo from "../../imports/HackitRx_logo_black.png";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hackitrx-sg-2026/",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hackitrxsg2026?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    Icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer
      className="relative py-14"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #fef3f7 100%)",
        borderTop: "1px solid rgba(236, 72, 153, 0.12)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <img
          src={hackitRxLogo}
          alt="HackitRx Singapore"
          className="h-12 mx-auto object-contain opacity-70 mb-8"
        />

        {/* Follow us on social */}
        <p
          className="mb-4"
          style={{
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#9ca3af",
          }}
        >
          Follow us on social
        </p>
        <div className="flex items-center justify-center gap-4 mb-10">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                color: "#a855f7",
                background: "#ffffff",
                border: "1.5px solid rgba(168, 85, 247, 0.25)",
                boxShadow: "0 4px 14px rgba(168, 85, 247, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #ec4899, #a855f7)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.color = "#a855f7";
                e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.25)";
              }}
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        {/* Tagline */}
        <p
          className="mb-2"
          style={{
            fontSize: "1.05rem",
            fontWeight: 600,
            color: "#1a1a2e",
          }}
        >
          Build for better healthcare. Shaped by those who live it.
        </p>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#8a8a9e",
          }}
        >
          © 2026 HackitRx Singapore. All rights reserved.
        </p>
        <p
          className="mt-4"
          style={{
            fontSize: "0.75rem",
            color: "#b8b8c4",
          }}
        >
          Illustration credits to BYOS.
        </p>
      </div>
    </footer>
  );
}
