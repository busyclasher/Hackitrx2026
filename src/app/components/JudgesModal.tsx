import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import adamCheePhoto from "../../../images/Judges/optimized/adam-chee.jpg";
import doreenTanPhoto from "../../../images/Judges/optimized/doreen-tan.jpg";
import carlosEisenbergPhoto from "../../../images/Judges/optimized/carlos-eisenberg.jpg";
import cheongWeiYangPhoto from "../../../images/Judges/optimized/cheong-wei-yang.jpg";
import jasmineOngPhoto from "../../../images/Judges/optimized/jasmine-ong.jpg";
import jonathanLeyPhoto from "../../../images/Judges/optimized/jonathan-ley.jpg";
import kabilanPhoto from "../../../images/Judges/optimized/kabilan-elangovan.jpg";
import kelvinTanPhoto from "../../../images/Judges/optimized/kelvin-tan.jpg";
import limHongYeePhoto from "../../../images/Judges/optimized/lim-hong-yee.jpg";
import lokeWaiChiongPhoto from "../../../images/Judges/optimized/loke-wai-chiong.jpg";
import nicolasSpanoPhoto from "../../../images/Judges/optimized/nicolas-spano.jpg";

interface Judge {
  name: string;
  title: string;
  photo: string;
}

const judges: Judge[] = [
  {
    name: "A/Prof Adam Chee",
    title: "Director, AI Development Office, SGH",
    photo: adamCheePhoto,
  },
  {
    name: "A/Prof Doreen Tan",
    title:
      "Pharmacy Practice (NUS Dept of Pharmacy & Pharmaceutical Sciences) & Cardiology Specialist Pharmacist",
    photo: doreenTanPhoto,
  },
  {
    name: "Dr Carlos Eisenberg",
    title: "Patient Advocate, OPENVoices",
    photo: carlosEisenbergPhoto,
  },
  {
    name: "Cheong Wei Yang",
    title: "Vice Provost (Strategic Research Partnerships), SMU",
    photo: cheongWeiYangPhoto,
  },
  {
    name: "Jasmine Ong",
    title: "Clinician Innovator & Principal Clinical Pharmacist, SGH",
    photo: jasmineOngPhoto,
  },
  {
    name: "Jonathan Ley",
    title: "Director, Temasek Foundation",
    photo: jonathanLeyPhoto,
  },
  {
    name: "Kabilan Elangovan",
    title: "Senior AI Scientist, SingHealth",
    photo: kabilanPhoto,
  },
  {
    name: "Kelvin Tan",
    title: "Associate Professor, SUSS",
    photo: kelvinTanPhoto,
  },
  {
    name: "Lim Hong Yee",
    title: "President, PSS · Group Chief Pharmacist, NHG Health",
    photo: limHongYeePhoto,
  },
  {
    name: "Nicolas Spano",
    title: "Engineering Director, OGP",
    photo: nicolasSpanoPhoto,
  },
  {
    name: "Dr Loke Wai Chiong",
    title: "Adjunct Professor, NUS & SIT",
    photo: lokeWaiChiongPhoto,
  },
];

interface JudgesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JudgesModal({ isOpen, onClose }: JudgesModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{
        background: "rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(6px)",
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="judges-modal-title"
        className="relative w-full rounded-3xl flex flex-col"
        style={{
          background: "#ffffff",
          boxShadow: "0 24px 80px rgba(0, 0, 0, 0.18)",
          maxWidth: "960px",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="px-6 md:px-8 pt-7 pb-5 rounded-t-3xl"
          style={{
            background: "linear-gradient(135deg, #fef6fb 0%, #f6f4fd 100%)",
            borderBottom: "1px solid #f1f1f4",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#a855f7",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Demo Day · 27 September 2026
          </span>
          <h2
            id="judges-modal-title"
            className="mt-1"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Meet the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Judges
            </span>
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(236, 72, 153, 0.08)",
              border: "1px solid rgba(236, 72, 153, 0.2)",
              cursor: "pointer",
            }}
          >
            <X size={18} style={{ color: "#ec4899" }} />
          </button>
        </div>

        {/* Judges grid */}
        <div className="overflow-y-auto px-6 md:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {judges.map((judge) => (
              <div
                key={judge.name}
                className="rounded-2xl overflow-hidden bg-white flex flex-col"
                style={{
                  border: "1px solid #ececf1",
                  boxShadow: "0 2px 10px rgba(26,26,46,0.04)",
                }}
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ paddingTop: "100%", background: "#f6f4fd" }}
                >
                  <img
                    src={judge.photo}
                    alt={judge.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: "center 15%" }}
                  />
                </div>
                <div className="p-3.5 sm:p-4">
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#1a1a2e",
                      lineHeight: 1.3,
                    }}
                  >
                    {judge.name}
                  </div>
                  <p
                    className="mt-1"
                    style={{
                      fontSize: "0.8rem",
                      color: "#6b7280",
                      lineHeight: 1.5,
                    }}
                  >
                    {judge.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
