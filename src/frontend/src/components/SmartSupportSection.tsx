import { HeadphonesIcon, RefreshCw, ScanSearch, Truck } from "lucide-react";

const items = [
  {
    icon: RefreshCw,
    title: "Order Recovery System",
    desc: "AI-powered recovery for lost, damaged, or delayed orders — automatic dispute filing and resolution tracking.",
  },
  {
    icon: Truck,
    title: "Re-delivery Options",
    desc: "Instantly request re-delivery, re-routing, or pickup alternatives with one click using smart logistics partners.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 AI-Powered Support",
    desc: "Always-on intelligent support agent trained on your supply chain data — answers queries in milliseconds.",
  },
  {
    icon: ScanSearch,
    title: "Smart Issue Detection",
    desc: "Predictive anomaly detection identifies supply chain issues before they become crises, saving time and money.",
  },
];

const iconColors = [
  "oklch(0.85 0.18 195)",
  "oklch(0.6 0.22 258)",
  "oklch(0.65 0.25 290)",
  "oklch(0.85 0.18 195)",
];
const iconBgs = [
  "oklch(0.85 0.18 195 / 0.08)",
  "oklch(0.6 0.22 258 / 0.08)",
  "oklch(0.65 0.25 290 / 0.08)",
  "oklch(0.85 0.18 195 / 0.08)",
];
const iconGlows = [
  "oklch(0.85 0.18 195 / 0.15)",
  "oklch(0.6 0.22 258 / 0.15)",
  "oklch(0.65 0.25 290 / 0.15)",
  "oklch(0.85 0.18 195 / 0.15)",
];

export default function SmartSupportSection() {
  return (
    <section id="support" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.85 0.18 195 / 0.03) 0%, transparent 70%)",
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
            Smart Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-foreground mb-4">
            Intelligent <span className="gradient-text">Support</span> That
            Never Sleeps
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our AI support layer proactively monitors, detects, and resolves
            issues before they impact your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              data-ocid={`support.card.${i + 1}`}
              className={`gradient-border p-6 text-center group hover:scale-[1.03] transition-transform duration-300 reveal-on-scroll reveal-delay-${i + 1}`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{
                  background: iconBgs[i],
                  boxShadow: `0 2px 12px ${iconGlows[i]}`,
                }}
              >
                <item.icon
                  className="w-7 h-7"
                  style={{ color: iconColors[i] }}
                />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
