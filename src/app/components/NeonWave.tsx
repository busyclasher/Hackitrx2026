export function NeonWave() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background radial glows */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(156, 39, 176, 0.6) 0%, transparent 70%)",
          transform: "translate(20%, -20%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 30, 140, 0.5) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* SVG neon wave lines */}
      <svg
        className="absolute right-0 top-0 h-full w-1/2 opacity-70"
        viewBox="0 0 600 800"
        preserveAspectRatio="xMaxYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow1">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e91e8c" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#9c27b0" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3f0d6b" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6bb5" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9c27b0" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Main flowing curves */}
        <path
          d="M600 0 C500 100, 350 150, 450 300 C550 450, 400 500, 480 650 C560 800, 600 800, 600 800"
          stroke="url(#waveGrad1)"
          strokeWidth="2.5"
          filter="url(#glow2)"
        />
        <path
          d="M600 0 C520 80, 380 130, 460 280 C540 430, 390 490, 460 640 C530 790, 600 800, 600 800"
          stroke="url(#waveGrad1)"
          strokeWidth="1.5"
          filter="url(#glow1)"
          opacity="0.6"
        />
        <path
          d="M600 50 C480 160, 300 200, 420 360 C540 520, 360 560, 450 720 C510 810, 600 800, 600 800"
          stroke="url(#waveGrad2)"
          strokeWidth="1"
          filter="url(#glow1)"
          opacity="0.5"
        />

        {/* Secondary wave */}
        <path
          d="M600 100 C560 200, 480 260, 530 380 C580 500, 500 580, 550 700 C580 760, 600 800, 600 800"
          stroke="#e91e8c"
          strokeWidth="1"
          opacity="0.3"
          filter="url(#glow1)"
        />

        {/* Scattered glowing dots */}
        <circle cx="480" cy="120" r="2.5" fill="#e91e8c" filter="url(#glow2)" opacity="0.8" />
        <circle cx="520" cy="220" r="1.5" fill="#ff6bb5" filter="url(#glow1)" opacity="0.6" />
        <circle cx="400" cy="340" r="2" fill="#e91e8c" filter="url(#glow2)" opacity="0.7" />
        <circle cx="460" cy="460" r="1.5" fill="#9c27b0" filter="url(#glow1)" opacity="0.5" />
        <circle cx="510" cy="580" r="2" fill="#e91e8c" filter="url(#glow2)" opacity="0.6" />
        <circle cx="430" cy="680" r="1.5" fill="#ff6bb5" filter="url(#glow1)" opacity="0.4" />
        <circle cx="560" cy="320" r="1" fill="#e91e8c" filter="url(#glow1)" opacity="0.5" />
        <circle cx="350" cy="200" r="1.5" fill="#9c27b0" filter="url(#glow1)" opacity="0.4" />
      </svg>

      {/* Top subtle gradient overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-32 opacity-30"
        style={{
          background: "linear-gradient(180deg, rgba(156,39,176,0.3) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}

export function SectionGlow({ color = "#e91e8c", position = "left" }: { color?: string; position?: "left" | "right" }) {
  return (
    <div
      className={`absolute ${position === "left" ? "-left-32" : "-right-32"} top-1/2 w-64 h-64 rounded-full pointer-events-none`}
      style={{
        background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`,
        transform: "translateY(-50%)",
        filter: "blur(20px)",
      }}
    />
  );
}
