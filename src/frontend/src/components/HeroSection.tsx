import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden grid-bg"
    >
      <div className="absolute inset-0 hero-glow" />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.25 290 / 0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fadeInLeft">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
              style={{
                border: "1px solid oklch(0.85 0.18 195 / 0.4)",
                background: "oklch(0.85 0.18 195 / 0.06)",
                color: "oklch(0.85 0.18 195)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-glow-pulse"
                style={{ background: "oklch(0.85 0.18 195)" }}
              />
              AI + Blockchain Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 uppercase">
              <span className="text-foreground">Revolutionizing</span>
              <br />
              <span className="gradient-text">Supply Chains</span>
              <br />
              <span className="text-foreground">with AI &amp;</span>
              <br />
              <span
                style={{
                  color: "oklch(0.85 0.18 195)",
                  textShadow: "0 0 20px oklch(0.85 0.18 195 / 0.4)",
                }}
              >
                Blockchain
              </span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Track, compare, and optimize your orders in real-time. Powered by
              AI intelligence and secured by immutable blockchain technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                data-ocid="hero.primary_button"
                onClick={() => handleScroll("#dashboard")}
                className="gradient-btn flex items-center gap-2 font-semibold px-7 py-3 rounded-full text-sm"
              >
                Track Your Order
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                data-ocid="hero.secondary_button"
                onClick={() => handleScroll("#features")}
                className="outline-btn flex items-center gap-2 font-semibold px-7 py-3 rounded-full text-sm"
              >
                <Play className="w-4 h-4" />
                Get Started
              </button>
            </div>

            <div className="flex gap-8 mt-10">
              {[
                { value: "99.9%", label: "Uptime" },
                { value: "50ms", label: "Avg Response" },
                { value: "2M+", label: "Orders Tracked" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold"
                    style={{
                      color: "oklch(0.85 0.18 195)",
                      textShadow: "0 0 12px oklch(0.85 0.18 195 / 0.4)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center animate-fadeInRight">
            <HeroViz />
          </div>
        </div>
      </div>
    </section>
  );
}

const latitudeOffsets = [-40, -20, 0, 20, 40];
const longitudeAngles = [0, 45, 90, 135];
const circuitLines = [
  { x1: 200, y1: 120, x2: 200, y2: 60, nx: 200, ny: 50 },
  { x1: 268, y1: 148, x2: 330, y2: 110, nx: 342, ny: 104 },
  { x1: 280, y1: 220, x2: 350, y2: 240, nx: 362, ny: 244 },
  { x1: 200, y1: 280, x2: 200, y2: 350, nx: 200, ny: 360 },
  { x1: 132, y1: 268, x2: 60, y2: 320, nx: 48, ny: 328 },
  { x1: 120, y1: 180, x2: 50, y2: 150, nx: 38, ny: 144 },
];
const particles = [
  { cx: 140, cy: 100, r: 2.5, color: "oklch(0.85 0.18 195 / 0.8)" },
  { cx: 310, cy: 130, r: 2, color: "oklch(0.65 0.25 290 / 0.7)" },
  { cx: 330, cy: 280, r: 2, color: "oklch(0.85 0.18 195 / 0.6)" },
  { cx: 80, cy: 260, r: 2.5, color: "oklch(0.6 0.22 258 / 0.8)" },
  { cx: 170, cy: 350, r: 2, color: "oklch(0.65 0.25 290 / 0.6)" },
];

function HeroViz() {
  return (
    <div className="relative w-full max-w-lg aspect-square">
      <div
        className="absolute inset-0 rounded-full animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, oklch(0.85 0.18 195 / 0.06) 0%, transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        style={{ overflow: "visible" }}
        role="img"
        aria-label="SupplyBlock visualization"
      >
        <title>SupplyBlock AI Blockchain Visualization</title>
        <defs>
          <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              stopColor="oklch(0.85 0.18 195)"
              stopOpacity="0.2"
            />
            <stop
              offset="100%"
              stopColor="oklch(0.07 0.025 260)"
              stopOpacity="0"
            />
          </radialGradient>
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              stopColor="oklch(0.85 0.18 195)"
              stopOpacity="0.9"
            />
            <stop
              offset="60%"
              stopColor="oklch(0.6 0.22 258)"
              stopOpacity="0.6"
            />
            <stop
              offset="100%"
              stopColor="oklch(0.65 0.25 290)"
              stopOpacity="0.2"
            />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-strong">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse
          cx="200"
          cy="200"
          rx="160"
          ry="160"
          fill="none"
          stroke="oklch(0.85 0.18 195 / 0.15)"
          strokeWidth="1"
          strokeDasharray="8 4"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="120"
          ry="120"
          fill="none"
          stroke="oklch(0.85 0.18 195 / 0.2)"
          strokeWidth="1"
          strokeDasharray="6 6"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="80"
          ry="80"
          fill="none"
          stroke="oklch(0.65 0.25 290 / 0.25)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle cx="200" cy="200" r="80" fill="url(#globeGrad)" />

        {latitudeOffsets.map((offset) => (
          <ellipse
            key={offset}
            cx="200"
            cy={200 + offset}
            rx={Math.sqrt(80 * 80 - offset * offset)}
            ry={Math.sqrt(80 * 80 - offset * offset) * 0.35}
            fill="none"
            stroke="oklch(0.85 0.18 195 / 0.25)"
            strokeWidth="0.8"
          />
        ))}
        {longitudeAngles.map((angle) => (
          <ellipse
            key={angle}
            cx="200"
            cy="200"
            rx="80"
            ry="80"
            fill="none"
            stroke="oklch(0.6 0.22 258 / 0.22)"
            strokeWidth="0.8"
            transform={`rotate(${angle} 200 200)`}
          />
        ))}

        <circle
          cx="200"
          cy="200"
          r="25"
          fill="url(#coreGrad)"
          filter="url(#glow-strong)"
        />
        <circle
          cx="200"
          cy="200"
          r="12"
          fill="oklch(0.85 0.18 195)"
          filter="url(#glow-strong)"
        />

        {circuitLines.map((l) => (
          <g key={`${l.nx}-${l.ny}`}>
            <line
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke="oklch(0.85 0.18 195 / 0.35)"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
            <circle
              cx={l.nx}
              cy={l.ny}
              r="7"
              fill="oklch(0.1 0.025 258)"
              stroke="oklch(0.85 0.18 195 / 0.7)"
              strokeWidth="1.5"
              filter="url(#glow)"
            />
            <circle cx={l.nx} cy={l.ny} r="2.5" fill="oklch(0.85 0.18 195)" />
          </g>
        ))}

        <g
          style={{
            transformOrigin: "200px 200px",
            animation: "rotateSlow 12s linear infinite",
          }}
        >
          <rect
            x="187"
            y="40"
            width="26"
            height="26"
            rx="4"
            fill="oklch(0.1 0.025 258)"
            stroke="oklch(0.85 0.18 195 / 0.8)"
            strokeWidth="1.5"
            filter="url(#glow)"
          />
          <text
            x="200"
            y="57"
            textAnchor="middle"
            fontSize="8"
            fill="oklch(0.85 0.18 195)"
            fontFamily="Space Grotesk"
          >
            AI
          </text>
        </g>
        <g
          style={{
            transformOrigin: "200px 200px",
            animation: "rotateSlowReverse 10s linear infinite",
          }}
        >
          <rect
            x="341"
            y="187"
            width="26"
            height="26"
            rx="4"
            fill="oklch(0.1 0.025 258)"
            stroke="oklch(0.65 0.25 290 / 0.8)"
            strokeWidth="1.5"
            filter="url(#glow)"
          />
          <text
            x="354"
            y="204"
            textAnchor="middle"
            fontSize="7"
            fill="oklch(0.65 0.25 290)"
            fontFamily="Space Grotesk"
          >
            BC
          </text>
        </g>
        <g
          style={{
            transformOrigin: "200px 200px",
            animation: "rotateSlow 16s linear infinite",
          }}
        >
          <rect
            x="33"
            y="187"
            width="26"
            height="26"
            rx="4"
            fill="oklch(0.1 0.025 258)"
            stroke="oklch(0.6 0.22 258 / 0.8)"
            strokeWidth="1.5"
            filter="url(#glow)"
          />
          <text
            x="46"
            y="204"
            textAnchor="middle"
            fontSize="7"
            fill="oklch(0.6 0.22 258)"
            fontFamily="Space Grotesk"
          >
            API
          </text>
        </g>

        {particles.map((p) => (
          <circle
            key={`${p.cx}-${p.cy}`}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill={p.color}
            filter="url(#glow)"
          />
        ))}
      </svg>
    </div>
  );
}
