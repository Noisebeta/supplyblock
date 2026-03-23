const steps = [
  {
    num: "01",
    title: "Enter Order / Product",
    desc: "Input your order ID, product details, or connect your existing logistics platform via API.",
    color: "oklch(0.85 0.18 195)",
  },
  {
    num: "02",
    title: "Blockchain Collects Data",
    desc: "Our nodes automatically gather supply chain data from all touchpoints and write it to the immutable ledger.",
    color: "oklch(0.6 0.22 258)",
  },
  {
    num: "03",
    title: "AI Analyzes Options",
    desc: "Machine learning models analyze the data, compare carriers, and identify the optimal delivery pathway.",
    color: "oklch(0.65 0.25 290)",
  },
  {
    num: "04",
    title: "Get Transparent Insights",
    desc: "Receive a real-time dashboard with clear insights, recommendations, and full blockchain audit logs.",
    color: "oklch(0.85 0.18 195)",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 60%, oklch(0.65 0.25 290 / 0.04) 0%, transparent 70%)",
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
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-foreground mb-4">
            Four Simple <span className="gradient-text">Steps</span> to Clarity
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From onboarding to real-time insights — SupplyBlock gets you up and
            running in minutes.
          </p>
        </div>

        {/* Stepper */}
        <div className="relative reveal-on-scroll">
          {/* Desktop horizontal layout */}
          <div className="hidden lg:flex items-start gap-0">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-start flex-1">
                <div className="flex flex-col items-center flex-1">
                  {/* Node + connector row */}
                  <div className="flex items-center w-full mb-6">
                    {/* Numbered ring node */}
                    <div
                      className="relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        border: `2px solid ${step.color}`,
                        boxShadow: `0 2px 16px ${step.color.replace(")", " / 0.3)")}`,
                        background: step.color.replace(")", " / 0.08)"),
                      }}
                    >
                      <span
                        className="text-sm font-bold"
                        style={{ color: step.color }}
                      >
                        {step.num}
                      </span>
                    </div>
                    {/* Connector line (not after last) */}
                    {i < steps.length - 1 && (
                      <div className="step-connector mx-2" />
                    )}
                  </div>
                  {/* Text */}
                  <div className="w-full pr-4">
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile vertical layout */}
          <div className="lg:hidden flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      border: `2px solid ${step.color}`,
                      boxShadow: `0 2px 12px ${step.color.replace(")", " / 0.25)")}`,
                      background: step.color.replace(")", " / 0.08)"),
                    }}
                  >
                    <span
                      className="text-sm font-bold"
                      style={{ color: step.color }}
                    >
                      {step.num}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-0.5 flex-1 mt-2"
                      style={{
                        background: `linear-gradient(to bottom, ${step.color.replace(")", " / 0.4)")}, transparent)`,
                      }}
                    />
                  )}
                </div>
                <div className="pt-2 pb-4">
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
