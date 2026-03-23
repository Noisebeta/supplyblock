import { Bot, Globe2, RouteIcon } from "lucide-react";

const items = [
  {
    icon: Globe2,
    title: "Global Supply Chain Integration",
    desc: "Seamless integration with every major logistics provider, customs authority, and trade network worldwide — one unified platform.",
    tag: "2025",
    color: "oklch(0.85 0.18 195)",
    colorBg: "oklch(0.85 0.18 195 / 0.08)",
    colorBorder: "oklch(0.85 0.18 195 / 0.3)",
    colorTag: "oklch(0.85 0.18 195 / 0.08)",
    colorGlow: "oklch(0.85 0.18 195 / 0.12)",
    colorCorner: "oklch(0.85 0.18 195 / 0.04)",
  },
  {
    icon: RouteIcon,
    title: "AI Route Prediction",
    desc: "Predict fastest, cheapest, and most reliable delivery routes weeks in advance using geopolitical, weather, and demand data.",
    tag: "2026",
    color: "oklch(0.6 0.22 258)",
    colorBg: "oklch(0.6 0.22 258 / 0.08)",
    colorBorder: "oklch(0.6 0.22 258 / 0.3)",
    colorTag: "oklch(0.6 0.22 258 / 0.08)",
    colorGlow: "oklch(0.6 0.22 258 / 0.1)",
    colorCorner: "oklch(0.6 0.22 258 / 0.04)",
  },
  {
    icon: Bot,
    title: "Smart Logistics Automation",
    desc: "Fully autonomous logistics ecosystem — AI agents negotiate contracts, manage inventory, and trigger re-orders automatically.",
    tag: "2027",
    color: "oklch(0.65 0.25 290)",
    colorBg: "oklch(0.65 0.25 290 / 0.08)",
    colorBorder: "oklch(0.65 0.25 290 / 0.3)",
    colorTag: "oklch(0.65 0.25 290 / 0.08)",
    colorGlow: "oklch(0.65 0.25 290 / 0.12)",
    colorCorner: "oklch(0.65 0.25 290 / 0.04)",
  },
];

export default function FutureScopeSection() {
  return (
    <section id="future" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.65 0.25 290 / 0.04) 0%, transparent 70%)",
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
            Future Scope
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-foreground mb-4">
            The Road <span className="gradient-text">Ahead</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We are just getting started. Here&apos;s what SupplyBlock is
            building next.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              data-ocid={`future.card.${i + 1}`}
              className={`gradient-border p-7 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 reveal-on-scroll reveal-delay-${i + 1}`}
            >
              <div
                className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
                style={{
                  background: item.colorTag,
                  color: item.color,
                  border: `1px solid ${item.colorBorder}`,
                }}
              >
                {item.tag}
              </div>

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: item.colorBg,
                  boxShadow: `0 2px 12px ${item.colorGlow}`,
                }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <h3 className="text-base font-bold text-foreground mb-3 pr-12">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>

              <div
                className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at bottom right, ${item.colorCorner}, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA band */}
        <div
          className="mt-16 rounded-2xl p-10 text-center reveal-on-scroll"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.85 0.18 195 / 0.06), oklch(0.65 0.25 290 / 0.06))",
            border: "1px solid oklch(0.85 0.18 195 / 0.2)",
            boxShadow: "0 4px 30px oklch(0.85 0.18 195 / 0.06)",
          }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold uppercase text-foreground mb-4">
            Ready to Transform Your{" "}
            <span className="gradient-text">Supply Chain</span>?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join the future of transparent, AI-powered logistics. Start your
            free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              data-ocid="cta.primary_button"
              className="gradient-btn font-semibold px-8 py-3.5 rounded-full text-sm"
            >
              Start Free Trial
            </button>
            <button
              type="button"
              data-ocid="cta.secondary_button"
              className="outline-btn font-semibold px-8 py-3.5 rounded-full text-sm"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
