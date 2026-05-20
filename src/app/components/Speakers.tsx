import { Users, Award, Briefcase } from "lucide-react";

const speakers = [
  {
    name: "Sarah Martinez",
    role: "Guest Speaker",
    title: "Chief Pharmacist",
    organization: "Singapore General Hospital",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. James Chen",
    role: "Guest Speaker",
    title: "Director of Innovation",
    organization: "National Healthcare Group",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Rachel Tan",
    role: "Guest Speaker",
    title: "Patient Advocate",
    organization: "Singapore Cancer Society",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Aisha Kumar",
    role: "Guest Speaker",
    title: "Healthcare Tech Lead",
    organization: "MOH Office for Healthcare Transformation",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
  },
];

const mentors = [
  {
    name: "Dr. David Lim",
    role: "Mentor",
    title: "Senior Clinical Pharmacist",
    organization: "Tan Tock Seng Hospital",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Michelle Wong",
    role: "Mentor",
    title: "UX Designer",
    organization: "Government Digital Services",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Jonathan Lee",
    role: "Mentor",
    title: "Software Engineer",
    organization: "Open Government Products",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Mentor",
    title: "Clinical Director",
    organization: "Khoo Teck Puat Hospital",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
  },
  {
    name: "Marcus Tan",
    role: "Mentor",
    title: "Product Manager",
    organization: "HealthTech Startup",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Ng",
    role: "Mentor",
    title: "Pharmacist & Entrepreneur",
    organization: "Community Pharmacy Network",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Kevin Ong",
    role: "Mentor",
    title: "Data Scientist",
    organization: "National University Hospital",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    name: "Sophia Liu",
    role: "Mentor",
    title: "Healthcare Innovation Lead",
    organization: "Agency for Integrated Care",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
];

export function Speakers() {
  return (
    <section
      id="speakers"
      className="relative py-24 overflow-hidden"
      style={{
        background: "#ffffff",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full"
            style={{
              background: "rgba(236, 72, 153, 0.08)",
              border: "1.5px solid rgba(236, 72, 153, 0.25)",
            }}
          >
            <Users size={24} style={{ color: "#ec4899" }} />
            <span
              className="font-semibold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.1rem",
                color: "#ec4899",
              }}
            >
              Speakers & Mentors
            </span>
          </div>

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
            Guest Speakers &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mentors
            </span>
          </h2>

          <p
            className="max-w-3xl mx-auto"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
              color: "#4a4a5e",
              lineHeight: 1.7,
            }}
          >
            Learn from experienced healthcare professionals, technologists, and patient advocates
            who will guide you through your innovation journey.
          </p>
        </div>

        {/* Guest Speakers */}
        <div className="mb-16">
          <h3
            className="mb-8 text-center"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "#1a1a2e",
            }}
          >
            Guest Speakers
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, idx) => (
              <div
                key={idx}
                className="group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl text-center"
                style={{
                  background: "#ffffff",
                  border: "2px solid rgba(236, 72, 153, 0.15)",
                  boxShadow: "0 4px 15px rgba(236, 72, 153, 0.08)",
                }}
              >
                {/* Profile Image */}
                <div className="mb-4 flex justify-center">
                  <div
                    className="w-24 h-24 rounded-full overflow-hidden"
                    style={{
                      border: "3px solid rgba(236, 72, 153, 0.3)",
                      boxShadow: "0 4px 12px rgba(236, 72, 153, 0.2)",
                    }}
                  >
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <h4
                  className="mb-1"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#1a1a2e",
                  }}
                >
                  {speaker.name}
                </h4>

                {/* Role Badge */}
                <div
                  className="inline-block px-3 py-1 rounded-full mb-3"
                  style={{
                    background: "rgba(236, 72, 153, 0.1)",
                    border: "1px solid rgba(236, 72, 153, 0.25)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#ec4899",
                    }}
                  >
                    {speaker.role}
                  </p>
                </div>

                {/* Title & Organization */}
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#3a3a4e",
                  }}
                >
                  {speaker.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.9rem",
                    color: "#6a6a7e",
                    lineHeight: 1.5,
                  }}
                >
                  {speaker.organization}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mentors */}
        <div>
          <h3
            className="mb-8 text-center"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "#1a1a2e",
            }}
          >
            Mentors
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, idx) => (
              <div
                key={idx}
                className="group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl text-center"
                style={{
                  background: "#ffffff",
                  border: "2px solid rgba(168, 85, 247, 0.15)",
                  boxShadow: "0 4px 15px rgba(168, 85, 247, 0.08)",
                }}
              >
                {/* Profile Image */}
                <div className="mb-4 flex justify-center">
                  <div
                    className="w-24 h-24 rounded-full overflow-hidden"
                    style={{
                      border: "3px solid rgba(168, 85, 247, 0.3)",
                      boxShadow: "0 4px 12px rgba(168, 85, 247, 0.2)",
                    }}
                  >
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <h4
                  className="mb-1"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#1a1a2e",
                  }}
                >
                  {mentor.name}
                </h4>

                {/* Role Badge */}
                <div
                  className="inline-block px-3 py-1 rounded-full mb-3"
                  style={{
                    background: "rgba(168, 85, 247, 0.1)",
                    border: "1px solid rgba(168, 85, 247, 0.25)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#a855f7",
                    }}
                  >
                    {mentor.role}
                  </p>
                </div>

                {/* Title & Organization */}
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#3a3a4e",
                  }}
                >
                  {mentor.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.9rem",
                    color: "#6a6a7e",
                    lineHeight: 1.5,
                  }}
                >
                  {mentor.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
