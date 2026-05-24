import { ImageWithFallback } from "./figma/ImageWithFallback";
import { speakerSections } from "../../data/speakers";

function SpeakerCard({
  name,
  role,
  affiliation,
  bio,
  image,
}: {
  name: string;
  role: string;
  affiliation?: string;
  bio: string;
  image: string;
}) {
  return (
    <article
      className="group flex h-full flex-col rounded-2xl p-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
      style={{
        background: "#ffffff",
        border: "2px solid rgba(236, 72, 153, 0.12)",
        boxShadow: "0 4px 15px rgba(236, 72, 153, 0.06)",
      }}
    >
      <div className="mb-6 flex flex-col items-center text-center">
        <div
          className="mb-5 h-28 w-28 overflow-hidden rounded-full"
          style={{
            border: "3px solid rgba(236, 72, 153, 0.25)",
            boxShadow: "0 4px 16px rgba(236, 72, 153, 0.15)",
          }}
        >
          <ImageWithFallback
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>

        <h3
          className="mb-2"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "#1a1a2e",
            lineHeight: 1.3,
          }}
        >
          {name}
        </h3>

        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "#ec4899",
            lineHeight: 1.45,
          }}
        >
          {role}
        </p>

        {affiliation ? (
          <p
            className="mt-2"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.88rem",
              fontWeight: 500,
              color: "#6a6a7e",
              lineHeight: 1.5,
            }}
          >
            {affiliation}
          </p>
        ) : null}
      </div>

      <p
        className="mt-auto text-center"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.92rem",
          color: "#4a4a5e",
          lineHeight: 1.7,
        }}
      >
        {bio}
      </p>
    </article>
  );
}

export function Speakers() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-4">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-20">
          {speakerSections.map((section) => (
            <div key={section.id}>
              <div className="mb-10 text-center md:mb-12">
                <h2
                  className="mb-3"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(1.6rem, 3.5vw, 2.1rem)",
                    fontWeight: 700,
                    color: "#1a1a2e",
                  }}
                >
                  {section.title}
                </h2>
                <p
                  className="mx-auto max-w-2xl"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.05rem",
                    color: "#6a6a7e",
                    lineHeight: 1.7,
                  }}
                >
                  {section.description}
                </p>
              </div>

              <div
                className={`grid gap-8 ${
                  section.speakers.length === 2
                    ? "mx-auto max-w-4xl grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {section.speakers.map((speaker) => (
                  <SpeakerCard key={speaker.name} {...speaker} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
