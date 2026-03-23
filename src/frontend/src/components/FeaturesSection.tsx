import { Bell, BrainCircuit, Cpu, Globe2, Satellite } from "lucide-react";

const features = [
  {
    icon: Satellite,
    title: "Real-time Blockchain Tracking",
    desc: "Every shipment is recorded on an immutable blockchain ledger, providing live location and status updates with full audit trails.",
    color: "oklch(0.85 0.18 195)",
    colorBg: "oklch(0.85 0.18 195 / 0.08)",
    glow: "oklch(0.85 0.18 195 / 0.12)",
  },
  {
    icon: BrainCircuit,
    title: "AI Delivery Comparison",
    desc: "Compare carriers by delivery speed, cost, and reliability using AI-powered analytics trained on millions of data points.",
    color: "oklch(0.6 0.22 258)",
    colorBg: "oklch(0.6 0.22 258 / 0.08)",
    glow: "oklch(0.6 0.22 258 / 0.1)",
  },
  {
    icon: Bell,
    title: "Smart Alerts & Notifications",
    desc: "Proactive alerts for delays, exceptions, and anomalies — delivered in real-time so you can act before issues escalate.",
    color: "oklch(0.65 0.25 290)",
    colorBg: "oklch(0.65 0.25 290 / 0.08)",
    glow: "oklch(0.65 0.25 290 / 0.12)",
  },
  {
    icon: Globe2,
    title: "Transparent Supply Chain Journey",
    desc: "Visualize the complete product journey from raw materials to final delivery with every checkpoint verified on-chain.",
    color: "oklch(0.85 0.18 195)",
    colorBg: "oklch(0.85 0.18 195 / 0.08)",
    glow: "oklch(0.85 0.18 195 / 0.12)",
  },
  {
    icon: Cpu,
    title: "Intelligent AI Decision-Making",
    desc: "Let AI recommend optimal sourcing, routing, and vendor choices based on historical performance and real-time data.",
    color: "oklch(0.6 0.22 258)",
    colorBg: "oklch(0.6 0.22 258 / 0.08)",
    glow: "oklch(0.6 0.22 258 / 0.1)",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.85 0.18 195 / 0.03) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded mb-4"
            style={{
              color: "oklch(0.85 0.18 195)",
              background: "oklch(0.85 0.18 195 / 0.08)",
            }}
          >
            Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-foreground mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Take Control</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A full-stack platform combining AI intelligence with blockchain
            security for unmatched supply chain visibility.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-ocid={`features.card.${i + 1}`}
              className={`gradient-border p-7 group hover:scale-[1.02] transition-transform duration-300 reveal-on-scroll reveal-delay-${Math.min(i + 1, 5)}${i === 4 ? " sm:col-span-2 lg:col-span-1" : ""}`}
              style={{ boxShadow: `0 4px 20px ${f.glow}` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: f.colorBg,
                  boxShadow: `0 2px 10px ${f.glow}`,
                }}
              >
                <f.icon className="w-6 h-6" style={{ color: f.color }} />
              </div>
              <h3 className="text-base font-bold text-foreground mb-3">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
