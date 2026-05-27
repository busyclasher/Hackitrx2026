import type { ComponentType } from "react";
import { Linkedin, Instagram } from "lucide-react";
import hackitRxLogo from "../../imports/HackitRx_logo_black.png";

function TelegramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const socials: { label: string; href: string; Icon: ComponentType<{ size?: number }> }[] = [
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
  {
    label: "Telegram",
    href: "https://t.me/+GLw0053W_PQxYzc9",
    Icon: TelegramIcon,
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
