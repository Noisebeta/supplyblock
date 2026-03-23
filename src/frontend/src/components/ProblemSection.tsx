import { AlertTriangle, Clock, Database } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "No Transparency",
    desc: "Lack of visibility in global supply chains leads to blind spots, mistrust between partners, and untraceable product journeys.",
    color: "oklch(0.65 0.25 290)",
    colorBg: "oklch(0.65 0.25 290 / 0.1)",
    glow: "oklch(0.65 0.25 290 / 0.12)",
    glowSm: "oklch(0.65 0.25 290 / 0.2)",
  },
  {
    icon: Clock,
    title: "Delays & Fraud",
    desc: "Real-time tracking gaps enable fraud, undisclosed delays, and financial losses worth billions annually across industries.",
    color: "oklch(0.85 0.18 195)",
    colorBg: "oklch(0.85 0.18 195 / 0.08)",
    glow: "oklch(0.85 0.18 195 / 0.12)",
    glowSm: "oklch(0.85 0.18 195 / 0.2)",
  },
  {
    icon: Database,
    title: "Outdated Systems",
    desc: "Manual, legacy systems fail modern logistics demands — no automation, no intelligence, no cross-platform integration.",
    color: "oklch(0.6 0.22 258)",
    colorBg: "oklch(0.6 0.22 258 / 0.08)",
    glow: "oklch(0.6 0.22 258 / 0.1)",
    glowSm: "oklch(0.6 0.22 258 / 0.2)",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, oklch(0.65 0.25 290 / 0.04) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded mb-4"
            style={{
              color: "oklch(0.65 0.25 290)",
              background: "oklch(0.65 0.25 290 / 0.1)",
            }}
          >
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-foreground mb-4">
            Why Supply Chains Are <span className="gradient-text">Broken</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The global supply chain industry is plagued by systemic failures
            that cost businesses trillions every year.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={p.title}
              data-ocid={`problem.card.${i + 1}`}
              className={`gradient-border p-7 reveal-on-scroll reveal-delay-${i + 1}`}
              style={{ boxShadow: `0 4px 20px ${p.glow}` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: p.colorBg,
                  boxShadow: `0 2px 10px ${p.glowSm}`,
                }}
              >
                <p.icon className="w-6 h-6" style={{ color: p.color }} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
