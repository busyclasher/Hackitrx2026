import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import hackitRxLogo from "../../imports/HackitRx_logo_black.png";
import { Menu, X, ChevronDown } from "lucide-react";
import { WaitlistModal } from "./WaitlistModal";

const anchorLinks = [
  { label: "Past Winners", href: "#past-stories" },
];

const pageLinks = [
  { label: "About", path: "/about" },
  { label: "Programmes", path: "/programmes" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (isMainPage) {
      // Smooth scroll on main page
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to main page then scroll
      navigate("/");
      setTimeout(() => {
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleLogoClick = () => {
    if (isMainPage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.98)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "2px solid rgba(236, 72, 153, 0.15)" : "none",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-3"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <img src={hackitRxLogo} alt="HackitRx Logo" className="h-10 md:h-12 w-auto" />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {pageLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => { navigate(link.path); }}
              className="transition-colors duration-200"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.05rem",
                fontWeight: 500,
                color: location.pathname === link.path ? "#ec4899" : "#4a4a5e",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ec4899")}
              onMouseLeave={(e) => (e.currentTarget.style.color = location.pathname === link.path ? "#ec4899" : "#4a4a5e")}
            >
              {link.label}
            </button>
          ))}
          {anchorLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="transition-colors duration-200"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.05rem",
                fontWeight: 500,
                color: "#4a4a5e",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ec4899")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4a4a5e")}
            >
              {link.label}
            </button>
          ))}

          {/* Get Involved Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button
              className="flex items-center gap-1 transition-colors duration-200"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.05rem",
                fontWeight: 500,
                color: "#4a4a5e",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 0",
              }}
            >
              Get Involved
              <ChevronDown size={16} />
            </button>

            {showDropdown && (
              <div
                className="absolute top-full pt-2 left-0"
                style={{
                  minWidth: "200px",
                }}
              >
                <div
                  className="py-2 rounded-xl shadow-lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.98)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(236, 72, 153, 0.15)",
                  }}
                >
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    navigate("/join/builder");
                  }}
                  className="w-full px-4 py-2.5 text-left transition-colors duration-200"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "#4a4a5e",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(236, 72, 153, 0.08)";
                    e.currentTarget.style.color = "#ec4899";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "none";
                    e.currentTarget.style.color = "#4a4a5e";
                  }}
                >
                  Participants
                </button>
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    navigate("/join/patient-organisation");
                  }}
                  className="w-full px-4 py-2.5 text-left transition-colors duration-200"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "#4a4a5e",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(236, 72, 153, 0.08)";
                    e.currentTarget.style.color = "#ec4899";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "none";
                    e.currentTarget.style.color = "#4a4a5e";
                  }}
                >
                  Patient Organisations
                </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => setShowWaitlist(true)}
            className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1rem",
              background: "linear-gradient(135deg, #ec4899, #a855f7)",
              boxShadow: "0 4px 15px rgba(236, 72, 153, 0.3)",
              border: "none",
              cursor: "pointer",
            }}
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: "#1a1a2e" }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{
            background: "rgba(255, 255, 255, 0.98)",
            borderTop: "1px solid rgba(236, 72, 153, 0.1)",
          }}
        >
          {pageLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => { setMenuOpen(false); navigate(link.path); }}
              className="py-2 text-left"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 500,
                color: location.pathname === link.path ? "#ec4899" : "#4a4a5e",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {link.label}
            </button>
          ))}
          {anchorLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="py-2 text-left"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 500,
                color: "#4a4a5e",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              setShowWaitlist(true);
            }}
            className="mt-2 px-6 py-3 rounded-full font-semibold text-white text-center"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1rem",
              background: "linear-gradient(135deg, #ec4899, #a855f7)",
              border: "none",
              cursor: "pointer",
            }}
          >
            Join Waitlist
          </button>
        </div>
      )}

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </nav>
  );
}
