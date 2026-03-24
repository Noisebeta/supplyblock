import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$3",
    period: "/ mo",
    features: ["Feature 1", "Feature 2"],
    color: "oklch(0.85 0.18 195)",
    colorBg: "oklch(0.85 0.18 195 / 0.08)",
    colorBorder: "oklch(0.85 0.18 195 / 0.3)",
    colorGlow: "oklch(0.85 0.18 195 / 0.12)",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$5",
    period: "/ mo",
    features: ["Feature 1", "Feature 2"],
    color: "oklch(0.6 0.22 258)",
    colorBg: "oklch(0.6 0.22 258 / 0.1)",
    colorBorder: "oklch(0.6 0.22 258 / 0.45)",
    colorGlow: "oklch(0.6 0.22 258 / 0.18)",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$10",
    period: "/ mo",
    features: ["Feature 1", "Feature 2"],
    color: "oklch(0.65 0.25 290)",
    colorBg: "oklch(0.65 0.25 290 / 0.08)",
    colorBorder: "oklch(0.65 0.25 290 / 0.3)",
    colorGlow: "oklch(0.65 0.25 290 / 0.12)",
    highlighted: false,
  },
];

export default function PremiumPlansSection() {
  return (
    <section id="premium" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.6 0.22 258 / 0.04) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded mb-4"
            style={{
              color: "oklch(0.85 0.18 195)",
              background: "oklch(0.85 0.18 195 / 0.1)",
            }}
          >
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-foreground mb-4">
            Premium <span className="gradient-text">Plans</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose the plan that fits your supply chain needs. Upgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-2xl transition-transform duration-300 hover:scale-[1.02] reveal-on-scroll reveal-delay-${i + 1}`}
              style={{
                background: plan.highlighted
                  ? "linear-gradient(160deg, oklch(0.6 0.22 258 / 0.14), oklch(0.65 0.25 290 / 0.10))"
                  : "oklch(0.1 0.02 258 / 0.6)",
                border: `1px solid ${plan.colorBorder}`,
                boxShadow: plan.highlighted
                  ? `0 8px 40px ${plan.colorGlow}`
                  : `0 4px 20px ${plan.colorGlow}`,
              }}
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.75 0.2 195), oklch(0.55 0.22 258))",
                    color: "oklch(0.08 0.02 258)",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <div
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: plan.color }}
              >
                {plan.name}
              </div>

              {/* Price */}
              <div className="flex items-end gap-1 mb-6">
                <span
                  className="text-5xl font-extrabold"
                  style={{ color: plan.color }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-sm mb-2"
                  style={{ color: "oklch(0.55 0.04 258)" }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Divider */}
              <div
                className="h-px mb-6"
                style={{ background: plan.colorBorder }}
              />

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: plan.colorBg,
                        border: `1px solid ${plan.colorBorder}`,
                      }}
                    >
                      <Check
                        className="w-3 h-3"
                        style={{ color: plan.color }}
                      />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                type="button"
                className={
                  plan.highlighted
                    ? "gradient-btn font-semibold px-6 py-3 rounded-full text-sm w-full"
                    : "outline-btn font-semibold px-6 py-3 rounded-full text-sm w-full"
                }
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
