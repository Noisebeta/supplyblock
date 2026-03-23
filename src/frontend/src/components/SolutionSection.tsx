import { CheckCircle2, Link2, Shield } from "lucide-react";

const points = [
  "Real-time tracking of any product across any platform",
  "Blockchain-verified data ensures tamper-proof records",
  "AI intelligence detects anomalies and optimizes routes",
  "End-to-end transparency from factory to doorstep",
];

const chainNodes = [
  { top: "5%", left: "50%", label: "Block #1" },
  { top: "50%", left: "90%", label: "Block #2" },
  { top: "85%", left: "60%", label: "Block #3" },
  { top: "60%", left: "5%", label: "Block #4" },
];

const ringIndices = [0, 1, 2];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 50%, oklch(0.85 0.18 195 / 0.04) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="reveal-on-scroll">
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded mb-4"
              style={{
                color: "oklch(0.85 0.18 195)",
                background: "oklch(0.85 0.18 195 / 0.08)",
              }}
            >
              The Solution
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-foreground mb-5">
              Powered by <span className="gradient-text">AI + Blockchain</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              SupplyBlock is the world&apos;s first AI-powered blockchain supply
              chain platform that gives every stakeholder complete, real-time
              transparency — from manufacturer to consumer.
            </p>
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.85 0.18 195)" }}
                  />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              data-ocid="solution.primary_button"
              className="gradient-btn font-semibold px-7 py-3 rounded-full text-sm mt-8"
            >
              Learn How It Works
            </button>
          </div>

          {/* Right */}
          <div className="flex justify-center items-center reveal-on-scroll reveal-delay-2">
            <ShieldViz />
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldViz() {
  return (
    <div className="relative w-80 h-80">
      {ringIndices.map((i) => (
        <div
          key={i}
          className="absolute rounded-full border animate-glow-pulse"
          style={{
            inset: `${i * 28}px`,
            borderColor: `oklch(0.85 0.18 195 / ${0.2 - i * 0.05})`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ animation: "floatY 4s ease-in-out infinite" }}
      >
        <div
          className="w-40 h-40 flex items-center justify-center rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.85 0.18 195 / 0.08), oklch(0.65 0.25 290 / 0.1))",
            border: "1px solid oklch(0.85 0.18 195 / 0.3)",
            boxShadow:
              "0 4px 30px oklch(0.85 0.18 195 / 0.15), inset 0 0 20px oklch(0.85 0.18 195 / 0.05)",
          }}
        >
          <Shield
            className="w-20 h-20"
            style={{
              color: "oklch(0.85 0.18 195)",
              filter: "drop-shadow(0 2px 12px oklch(0.85 0.18 195 / 0.5))",
            }}
          />
        </div>
      </div>

      {chainNodes.map((node, i) => (
        <div
          key={node.label}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            top: node.top,
            left: node.left,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono"
            style={{
              background: "oklch(0.12 0.025 258)",
              border: "1px solid oklch(0.85 0.18 195 / 0.35)",
              color: "oklch(0.85 0.18 195)",
              boxShadow: "0 2px 10px oklch(0.85 0.18 195 / 0.15)",
            }}
          >
            <Link2 className="w-3 h-3" />
            {node.label}
          </div>
        </div>
      ))}
    </div>
  );
}
