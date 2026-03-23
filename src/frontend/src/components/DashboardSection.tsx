import {
  BarChart3,
  Bell,
  Home,
  Package,
  Search,
  Settings,
  Truck,
  Warehouse,
} from "lucide-react";

export default function DashboardSection() {
  return (
    <section id="dashboard" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, oklch(0.85 0.18 195 / 0.04) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal-on-scroll">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded mb-4"
            style={{
              color: "oklch(0.6 0.22 258)",
              background: "oklch(0.6 0.22 258 / 0.08)",
            }}
          >
            Dashboard Preview
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-foreground mb-4">
            Your <span className="gradient-text">Command Center</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A unified dashboard giving you complete visibility of every order,
            every shipment, in real-time.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div
          className="reveal-on-scroll rounded-2xl overflow-hidden"
          style={{
            border: "1px solid oklch(0.85 0.18 195 / 0.2)",
            boxShadow:
              "0 8px 40px oklch(0.85 0.18 195 / 0.08), 0 2px 8px oklch(0.08 0.02 258 / 0.5)",
          }}
        >
          {/* Window chrome */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{
              background: "oklch(0.1 0.025 258)",
              borderBottom: "1px solid oklch(0.22 0.04 258)",
            }}
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "oklch(0.65 0.22 27)" }}
            />
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "oklch(0.80 0.19 85)" }}
            />
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "oklch(0.70 0.20 145)" }}
            />
            <div
              className="ml-4 text-xs font-mono px-4 py-0.5 rounded"
              style={{
                background: "oklch(0.15 0.03 258)",
                color: "oklch(0.6 0.04 258)",
              }}
            >
              app.supplyblock.io/dashboard
            </div>
          </div>

          {/* Dashboard body */}
          <div
            className="flex"
            style={{ background: "oklch(0.09 0.02 258)", minHeight: "460px" }}
          >
            {/* Sidebar */}
            <div
              className="hidden sm:flex flex-col gap-1 p-4 w-52 flex-shrink-0"
              style={{
                background: "oklch(0.11 0.025 258)",
                borderRight: "1px solid oklch(0.22 0.04 258)",
              }}
            >
              {/* Logo */}
              <div className="flex items-center gap-2 px-2 py-3 mb-3">
                <div
                  className="w-6 h-6 rounded flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.75 0.2 195), oklch(0.55 0.22 258))",
                  }}
                >
                  <span
                    style={{ color: "oklch(0.08 0.02 258)" }}
                    className="text-xs font-bold"
                  >
                    S
                  </span>
                </div>
                <span
                  className="text-sm font-bold"
                  style={{ color: "oklch(0.9 0.01 258)" }}
                >
                  SupplyBlock
                </span>
              </div>
              {[
                { icon: BarChart3, label: "Overview", active: true },
                { icon: Package, label: "Orders" },
                { icon: Truck, label: "Shipments" },
                { icon: Warehouse, label: "Inventory" },
                { icon: Bell, label: "Alerts", badge: "3" },
                { icon: Settings, label: "Settings" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`dashboard-sidebar-item ${item.active ? "active" : ""}`}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span
                      className="text-xs px-1.5 py-0.5 rounded-full"
                      style={{
                        background: "oklch(0.65 0.25 290 / 0.15)",
                        color: "oklch(0.65 0.25 290)",
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-5 overflow-auto">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3
                    className="text-base font-bold"
                    style={{ color: "oklch(0.95 0.01 258)" }}
                  >
                    Order Tracker
                  </h3>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.6 0.04 258)" }}
                  >
                    Live shipment monitoring
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
                    style={{
                      background: "oklch(0.15 0.03 258)",
                      color: "oklch(0.6 0.04 258)",
                      border: "1px solid oklch(0.22 0.04 258)",
                    }}
                  >
                    <Search className="w-3 h-3" />
                    <span>Search orders...</span>
                  </div>
                </div>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                {[
                  {
                    label: "Active Orders",
                    value: "1,247",
                    change: "+12%",
                    color: "oklch(0.85 0.18 195)",
                  },
                  {
                    label: "In Transit",
                    value: "384",
                    change: "+5%",
                    color: "oklch(0.6 0.22 258)",
                  },
                  {
                    label: "Delivered Today",
                    value: "92",
                    change: "+18%",
                    color: "oklch(0.55 0.12 140)",
                  },
                  {
                    label: "Alerts",
                    value: "3",
                    change: "-2",
                    color: "oklch(0.65 0.25 290)",
                  },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="rounded-xl p-3"
                    style={{
                      background: "oklch(0.13 0.025 258)",
                      border: `1px solid ${card.color.replace(")", " / 0.2)")}`,
                    }}
                  >
                    <div
                      className="text-xs mb-1"
                      style={{ color: "oklch(0.6 0.04 258)" }}
                    >
                      {card.label}
                    </div>
                    <div
                      className="text-xl font-bold"
                      style={{ color: card.color }}
                    >
                      {card.value}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "oklch(0.55 0.12 140)" }}
                    >
                      {card.change} this week
                    </div>
                  </div>
                ))}
              </div>

              {/* Order timeline */}
              <div
                className="rounded-xl p-4"
                style={{
                  background: "oklch(0.13 0.025 258)",
                  border: "1px solid oklch(0.22 0.04 258)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.95 0.01 258)" }}
                  >
                    Order #SB-20841 — Journey
                  </div>
                  <div
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: "oklch(0.85 0.18 195 / 0.1)",
                      color: "oklch(0.85 0.18 195)",
                    }}
                  >
                    In Transit
                  </div>
                </div>

                {/* Horizontal timeline */}
                <div className="flex items-center gap-0">
                  {[
                    {
                      icon: Package,
                      label: "Factory",
                      sub: "Mar 18",
                      done: true,
                    },
                    {
                      icon: Warehouse,
                      label: "Warehouse",
                      sub: "Mar 20",
                      done: true,
                    },
                    {
                      icon: Truck,
                      label: "Transit",
                      sub: "Mar 22",
                      done: true,
                      active: true,
                    },
                    {
                      icon: Home,
                      label: "Delivery",
                      sub: "Mar 24",
                      done: false,
                    },
                  ].map((stage, idx) => (
                    <div key={stage.label} className="flex items-center flex-1">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mb-1.5"
                          style={{
                            background: stage.done
                              ? "oklch(0.85 0.18 195 / 0.1)"
                              : "oklch(0.15 0.03 258)",
                            border: stage.active
                              ? "2px solid oklch(0.85 0.18 195)"
                              : stage.done
                                ? "1px solid oklch(0.85 0.18 195 / 0.4)"
                                : "1px solid oklch(0.6 0.04 258 / 0.3)",
                            boxShadow: stage.active
                              ? "0 0 10px oklch(0.85 0.18 195 / 0.3)"
                              : "none",
                          }}
                        >
                          <stage.icon
                            className="w-4 h-4"
                            style={{
                              color: stage.done
                                ? "oklch(0.85 0.18 195)"
                                : "oklch(0.6 0.04 258 / 0.5)",
                            }}
                          />
                        </div>
                        <span
                          className="text-xs font-medium"
                          style={{
                            color: stage.done
                              ? "oklch(0.9 0.01 258)"
                              : "oklch(0.6 0.04 258 / 0.5)",
                          }}
                        >
                          {stage.label}
                        </span>
                        <span
                          className="text-xs mt-0.5"
                          style={{ color: "oklch(0.5 0.04 258 / 0.6)" }}
                        >
                          {stage.sub}
                        </span>
                      </div>
                      {idx < 3 && (
                        <div
                          className="flex-1 h-0.5 mx-2"
                          style={{
                            background:
                              idx < 2
                                ? "linear-gradient(90deg, oklch(0.85 0.18 195), oklch(0.6 0.22 258))"
                                : "linear-gradient(90deg, oklch(0.85 0.18 195 / 0.25), transparent)",
                            boxShadow:
                              idx < 2
                                ? "0 0 4px oklch(0.85 0.18 195 / 0.3)"
                                : "none",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div
                    className="flex justify-between text-xs mb-1.5"
                    style={{ color: "oklch(0.6 0.04 258)" }}
                  >
                    <span>Progress</span>
                    <span style={{ color: "oklch(0.85 0.18 195)" }}>72%</span>
                  </div>
                  <div
                    className="h-1.5 rounded-full w-full"
                    style={{ background: "oklch(0.18 0.03 258)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "72%",
                        background:
                          "linear-gradient(90deg, oklch(0.85 0.18 195), oklch(0.6 0.22 258))",
                        boxShadow: "0 0 6px oklch(0.85 0.18 195 / 0.4)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
