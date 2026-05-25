import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
  head: () => ({ meta: [{ title: "Pricing · Lumen AI" }] }),
});

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Try Lumen with no commitment.",
    features: ["100 AI credits / mo", "All core tools", "1 workspace", "Community support"],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "$24",
    desc: "For professionals shipping daily.",
    features: [
      "Unlimited AI credits",
      "Advanced models (GPT-4o, Claude 3.5)",
      "Prompt templates & history",
      "Priority support",
      "Team workspace (up to 5)",
    ],
    cta: "Start Pro trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Built for security and scale.",
    features: ["SSO & SAML", "Audit logs", "Custom data residency", "Dedicated CSM", "SLA 99.99%"],
    cta: "Contact sales",
  },
];

const compare = [
  ["AI Chat Workspace", true, true, true],
  ["Writing tools", true, true, true],
  ["Code assistant", true, true, true],
  ["File & PDF AI", "Limited", true, true],
  ["Automation workflows", false, true, true],
  ["Team workspace", false, "5 seats", "Unlimited"],
  ["SSO / SAML", false, false, true],
  ["Audit logs & DLP", false, false, true],
] as const;

function Pricing() {
  return (
    <SiteLayout>
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Badge variant="outline" className="rounded-full">Pricing</Badge>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight md:text-6xl">
            Simple, transparent pricing.
          </h1>
          <p className="mt-4 text-balance text-muted-foreground">
            Start free. Upgrade when you're ready. Cancel anytime.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                p.highlight
                  ? "border-foreground bg-foreground text-background shadow-xl"
                  : "border-border bg-background"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-2.5 left-7 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                  Most popular
                </div>
              )}
              <div className="text-sm font-medium opacity-80">{p.name}</div>
              <div className="mt-3 text-4xl font-semibold tracking-tight">{p.price}<span className="text-sm font-normal opacity-70">{p.price !== "Custom" && " / mo"}</span></div>
              <div className="mt-2 text-sm opacity-70">{p.desc}</div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 opacity-70" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={p.highlight ? "secondary" : "default"} className="mt-7 rounded-full">
                <Link to="/billing">{p.cta} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-border/60 bg-muted/20 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-semibold tracking-tight">Compare plans</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-3 text-left font-medium">Feature</th>
                  <th className="px-5 py-3 text-left font-medium">Free</th>
                  <th className="px-5 py-3 text-left font-medium">Pro</th>
                  <th className="px-5 py-3 text-left font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row[0] as string} className="border-b border-border/60 last:border-0">
                    {row.map((cell, i) => (
                      <td key={i} className="px-5 py-3.5">
                        {typeof cell === "boolean" ? (
                          cell ? <Check className="h-4 w-4 text-foreground" /> : <span className="text-muted-foreground">—</span>
                        ) : (
                          <span className={i === 0 ? "font-medium" : "text-muted-foreground"}>{cell}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
