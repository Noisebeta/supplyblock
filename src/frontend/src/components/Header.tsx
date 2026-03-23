import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Support", href: "#support" },
  { label: "Future", href: "#future" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const headerClass = scrolled
    ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.75 0.2 195), oklch(0.55 0.22 258))",
              boxShadow: "0 2px 12px oklch(0.85 0.18 195 / 0.4)",
            }}
          >
            <Zap
              className="w-5 h-5"
              style={{ color: "oklch(0.08 0.02 258)" }}
              fill="oklch(0.08 0.02 258)"
            />
          </div>
          <span className="text-xl font-bold tracking-tight gradient-text">
            SupplyBlock
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              data-ocid="nav.link"
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            data-ocid="header.login.button"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
          >
            Login
          </button>
          <button
            type="button"
            data-ocid="header.demo.button"
            className="gradient-btn text-sm font-semibold px-5 py-2 rounded-full"
          >
            Get a Demo
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          data-ocid="nav.toggle"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              data-ocid="nav.link"
              onClick={() => handleNav(link.href)}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            data-ocid="header.demo.button"
            className="gradient-btn text-sm font-semibold px-5 py-2 rounded-full mt-2 w-full"
          >
            Get a Demo
          </button>
        </div>
      )}
    </header>
  );
}
