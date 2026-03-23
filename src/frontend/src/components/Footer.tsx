import { Github, Linkedin, Mail, Twitter, Zap } from "lucide-react";

const links = {
  Platform: [
    "Tracking",
    "AI Analytics",
    "Blockchain Ledger",
    "Integrations",
    "API Docs",
  ],
  Company: ["About", "Careers", "Press", "Contact"],
  Resources: ["Documentation", "Blog", "Case Studies", "Status"],
};

const socials = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Github, label: "GitHub" },
  { icon: Mail, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const utmUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="relative pt-16 pb-8"
      style={{
        background: "oklch(0.06 0.025 260)",
        borderTop: "1px solid oklch(0.85 0.18 195 / 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="neon-line mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.75 0.2 195), oklch(0.55 0.22 258))",
                  boxShadow: "0 2px 12px oklch(0.85 0.18 195 / 0.35)",
                }}
              >
                <Zap
                  className="w-5 h-5"
                  style={{ color: "oklch(0.08 0.02 258)" }}
                  fill="oklch(0.08 0.02 258)"
                />
              </div>
              <span className="text-xl font-bold gradient-text">
                SupplyBlock
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs mb-6"
              style={{ color: "oklch(0.6 0.04 258)" }}
            >
              Revolutionizing global supply chains through AI intelligence and
              blockchain-verified transparency.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <button
                  type="button"
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "oklch(0.12 0.025 258)",
                    border: "1px solid oklch(0.85 0.18 195 / 0.2)",
                    color: "oklch(0.6 0.04 258)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.85 0.18 195)";
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(0.85 0.18 195)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 10px oklch(0.85 0.18 195 / 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.85 0.18 195 / 0.2)";
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(0.6 0.04 258)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "oklch(0.85 0.18 195)" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "oklch(0.55 0.04 258)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "oklch(0.85 0.18 195)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "oklch(0.55 0.04 258)";
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid oklch(0.85 0.18 195 / 0.1)",
            color: "oklch(0.55 0.04 258)",
          }}
        >
          <div className="text-center">
            <span style={{ color: "oklch(0.85 0.18 195)" }}>
              Presented by Piyush and Subham
            </span>
          </div>
          <div className="text-center">
            &copy; {year}. Built with &hearts; using{" "}
            <a
              href={utmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "oklch(0.65 0.25 290)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "oklch(0.85 0.18 195)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "oklch(0.65 0.25 290)";
              }}
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
