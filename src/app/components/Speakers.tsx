const speakers = [
  {
    name: "Dr Kennedy Ng",
    title: "Founder & Director, TriGen",
    organization: "Clinical Director, SGH Population Health & Integrated Care",
    bio: "Consultant Medical Oncologist and healthcare innovator focused on health systems, cancer care, and community impact. Founder of TriGen and recipient of the Lee Kuan Yew Scholarship and Harvard Kennedy School honours.",
  },
  {
    name: "Candy Gan",
    title: "Type 1 Diabetes Advocate",
    organization: "typeOne.sg & Diabetes Singapore",
    bio: "Living with Type 1 Diabetes since age 2, Candy advocates for patient voices through public speaking, education, and healthcare partnerships, transforming lived experience into meaningful impact.",
  },
  {
    name: "Dr Serene Goh",
    title: "Consultant Breast & General Surgeon, NUH",
    organization: "National University Hospital",
    bio: "Breast surgeon and researcher specialising in oncoplastic surgery and AI-driven healthcare innovation, advancing digital health initiatives in breast cancer care.",
  },
  {
    name: "Ellil Mathiyan Lakshmanan",
    title: "President, Ostomy Association of Singapore",
    organization: "Ostomy Association of Singapore",
    bio: "Double cancer survivor and patient advocate working with healthcare institutions and policymakers to strengthen patient partnerships and improve healthcare experiences.",
  },
  {
    name: "Nicolas Spano",
    title: "Engineering Director",
    organization: "Open Government Products",
    bio: "Leads teams building healthtech and public service digital products focused on practical, user-centred solutions with real-world impact.",
  },
  {
    name: "Sam Khoo",
    title: "Deputy Director",
    organization: "Singapore Government Partnerships Office",
    bio: "Drives collaborations between citizens, communities, and government agencies to co-create impactful public initiatives and social innovation.",
  },
];

function getInitials(name: string) {
  return name
    .replace(/^Dr\s+/i, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Speakers() {
  return (
    <section className="relative py-16 overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl text-left h-full flex flex-col"
              style={{
                background: "#ffffff",
                border: "2px solid rgba(236, 72, 153, 0.15)",
                boxShadow: "0 4px 15px rgba(236, 72, 153, 0.08)",
              }}
            >
              <div className="mb-4 flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(168, 85, 247, 0.15))",
                    border: "3px solid rgba(236, 72, 153, 0.3)",
                    boxShadow: "0 4px 12px rgba(236, 72, 153, 0.2)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#ec4899",
                    }}
                  >
                    {getInitials(speaker.name)}
                  </span>
                </div>

                <div>
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
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#3a3a4e",
                      lineHeight: 1.4,
                    }}
                  >
                    {speaker.title}
                  </p>
                </div>
              </div>

              <p
                className="mb-3"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#6a6a7e",
                  lineHeight: 1.5,
                }}
              >
                {speaker.organization}
              </p>

              <p
                className="mt-auto"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.92rem",
                  color: "#4a4a5e",
                  lineHeight: 1.65,
                }}
              >
                {speaker.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
