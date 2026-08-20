import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  MessagesSquare,
  FileText,
  Code2,
  FileSearch,
  Image as ImageIcon,
  Workflow,
  Check,
  Zap,
  Shield,
  Globe,
  Star,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Dewa ai — The modern AI workspace for productivity" },
      {
        name: "description",
        content:
          "Dewa ai brings chat, writing, code, document, and automation tools into one premium workspace — built for teams that ship.",
      },
    ],
  }),
});

const tools = [
  {
    icon: MessagesSquare,
    title: "AI Chat Workspace",
    desc: "Streaming responses, prompt history, and saved templates across every model.",
  },
  {
    icon: FileText,
    title: "Writing Tools",
    desc: "Blog drafts, emails, captions, summaries and rewrites with brand voice.",
  },
  {
    icon: Code2,
    title: "Code Assistant",
    desc: "Multi-language generation, explanations and a senior-engineer bug fixer.",
  },
  {
    icon: FileSearch,
    title: "Document AI",
    desc: "PDF summaries, OCR extraction and structured data from any document.",
  },
  {
    icon: ImageIcon,
    title: "Image Tools",
    desc: "Prompt builder, image analysis and creative direction in one place.",
  },
  {
    icon: Workflow,
    title: "Automation",
    desc: "Drag-and-drop workflows and scheduled AI actions that run for you.",
  },
];

const stats = [
  { value: "12M+", label: "Prompts generated" },
  { value: "180k", label: "Active teams" },
  { value: "99.99%", label: "Uptime" },
  { value: "62", label: "Countries" },
];

const testimonials = [
  {
    quote:
      "dewa replaced four tools for our content team. The workspace feels native — not like another wrapper.",
    name: "Sara Lindgren",
    role: "Head of Content, Northwind",
  },
  {
    quote:
      "Our engineering team ships 30% faster with the code assistant. The diff explanations alone are worth it.",
    name: "Daniel Cho",
    role: "Staff Engineer, Plane",
  },
  {
    quote:
      "Finally, an AI tool that feels designed. Quiet, fast, and out of the way until I need it.",
    name: "Amelia Rivers",
    role: "Founder, Orbit Studio",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/ month",
    desc: "Everything you need to try Dewa ai.",
    features: ["100 AI credits / month", "All core AI tools", "1 workspace", "Community support"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$24",
    period: "/ month",
    desc: "For professionals shipping every day.",
    features: [
      "Unlimited AI credits",
      "Advanced model workflows (demo)",
      "Prompt history & templates",
      "Priority support",
    ],
    cta: "Start Pro trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Security, governance and scale.",
    features: ["SSO & SAML", "Audit logs", "Custom data residency", "Dedicated CSM"],
    cta: "Talk to sales",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Which AI models does dewa support?",
    a: "This portfolio build simulates model responses locally. A production version can connect the same workspace UI to a configured provider without exposing credentials to the browser.",
  },
  {
    q: "Is my data used to train models?",
    a: "Never. Your prompts, files and outputs are encrypted at rest and never used for training by us or our providers.",
  },
  {
    q: "Can I invite my team?",
    a: "Yes. Every paid plan includes team workspaces, shared prompts, role-based permissions and a shared usage dashboard.",
  },
  {
    q: "Do you offer a refund?",
    a: "We offer a 14-day money-back guarantee on Pro plans, no questions asked.",
  },
];

function Landing() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="bg-radial-fade pointer-events-none absolute inset-0" />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="outline"
              className="mb-6 rounded-full border-border/80 bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur"
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              New · dewa 3.0 with realtime workflows
            </Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-7xl">
              The AI workspace built for{" "}
              <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent">
                serious work.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
              Chat, write, code, summarize, and automate — every AI tool your team needs, designed
              with the calm of Linear and the clarity of Notion.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild className="rounded-full px-6">
                <Link to="/workspace">
                  Try AI Tools <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-6">
                <Link to="/templates">Start Creating</Link>
              </Button>
            </div>
            <div className="mt-6 text-xs text-muted-foreground">
              Free forever plan · No credit card required
            </div>
          </div>

          {/* PRODUCT PREVIEW */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="relative rounded-2xl border border-border/80 bg-card/60 p-1.5 shadow-2xl shadow-foreground/5 backdrop-blur">
              <div className="overflow-hidden rounded-xl border border-border/60 bg-background">
                <div className="flex h-9 items-center gap-1.5 border-b border-border/60 px-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  <div className="ml-auto text-[11px] text-muted-foreground">dewa.ai/workspace</div>
                </div>
                <div className="grid grid-cols-[180px_1fr] gap-0">
                  <div className="border-r border-border/60 p-4">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Recent
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {[
                        "Launch email draft",
                        "Q3 product review",
                        "API refactor",
                        "Brand voice v2",
                      ].map((i) => (
                        <li
                          key={i}
                          className="truncate rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-muted"
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-foreground text-background">
                        <Sparkles className="h-3.5 w-3.5" />
                      </div>
                      <div className="text-sm leading-relaxed text-foreground">
                        Draft a launch email for our new realtime workflows feature. Friendly,
                        confident tone, 120 words.
                      </div>
                    </div>
                    <div className="mt-5 rounded-lg border border-border/70 bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground">
                      <div className="font-medium text-foreground">
                        Realtime workflows are here.
                      </div>
                      <div className="mt-2">
                        Today we're shipping the biggest update to dewa yet. Build and trigger AI
                        automations the moment your data changes — no glue code, no waiting.
                        <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-foreground" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <Badge variant="secondary" className="rounded-full text-[10px]">
                        Demo model
                      </Badge>
                      <Badge variant="secondary" className="rounded-full text-[10px]">
                        Marketing voice
                      </Badge>
                      <div className="ml-auto text-[11px] text-muted-foreground">
                        2.3s · 412 tokens
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* logos */}
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="text-center text-xs uppercase tracking-wider text-muted-foreground">
              Trusted by modern teams
            </div>
            <div className="mt-5 grid grid-cols-2 items-center gap-x-10 gap-y-4 opacity-70 sm:grid-cols-3 md:grid-cols-6">
              {["Northwind", "Plane", "Orbit", "Arcadia", "Helix", "Modulo"].map((b) => (
                <div
                  key={b}
                  className="text-center text-sm font-semibold tracking-tight text-muted-foreground"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="border-t border-border/60 bg-muted/20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="rounded-full">
              AI tools
            </Badge>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              One workspace. Every AI tool you need.
            </h2>
            <p className="mt-4 text-balance text-muted-foreground">
              Stop juggling tabs. dewa ships the AI capabilities of a dozen tools — connected,
              consistent, and surprisingly fast.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {tools.map((t) => (
              <div
                key={t.title}
                className="group relative bg-background p-7 transition-colors hover:bg-muted/40"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-muted/50">
                  <t.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-base font-semibold tracking-tight">{t.title}</div>
                <div className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.desc}</div>
                <div className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-foreground/70 transition-transform group-hover:translate-x-0.5">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTIVITY / STATS */}
      <section className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <Badge variant="outline" className="rounded-full">
                Productivity
              </Badge>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Built for the way modern teams ship.
              </h2>
              <p className="mt-4 text-balance leading-relaxed text-muted-foreground">
                dewa blends a real-time AI workspace, team collaboration, and granular usage
                analytics — so leaders see the impact and ICs feel the speed.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  { i: Zap, t: "Sub-second streaming on every model" },
                  { i: Shield, t: "SOC 2 Type II, GDPR ready out of the box" },
                  { i: Globe, t: "Global edge — 12ms median latency" },
                ].map((f) => (
                  <li key={f.t} className="flex items-center gap-3 text-sm">
                    <div className="grid h-7 w-7 place-items-center rounded-md bg-foreground text-background">
                      <f.i className="h-3.5 w-3.5" />
                    </div>
                    {f.t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-6">
                  <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
              <div className="col-span-2 rounded-2xl border border-border bg-gradient-to-br from-muted/40 to-background p-6">
                <div className="text-xs font-medium text-muted-foreground">This month</div>
                <div className="mt-2 flex items-end gap-1.5">
                  {[40, 55, 30, 65, 50, 78, 90, 72, 95, 85, 110, 102].map((h, i) => (
                    <div
                      key={i}
                      className="w-3 rounded-sm bg-foreground/80"
                      style={{ height: `${h * 0.6}px` }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>1.2M tokens generated</span>
                  <span className="text-emerald-600">+38%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border/60 bg-muted/20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="rounded-full">
              Loved by teams
            </Badge>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Teams that care about craft choose dewa.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-2xl border border-border bg-background p-7"
              >
                <div>
                  <div className="flex gap-0.5 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground">
                    "{t.quote}"
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-foreground to-foreground/40" />
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="rounded-full">
              Pricing
            </Badge>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Simple plans that scale with you.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
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
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                  <span className="text-sm opacity-70">{p.period}</span>
                </div>
                <div className="mt-2 text-sm opacity-70">{p.desc}</div>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 opacity-70" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={p.highlight ? "secondary" : "default"}
                  className="mt-7 rounded-full"
                >
                  <Link to="/billing">{p.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-muted/20 py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-[1fr_2fr]">
          <div>
            <Badge variant="outline" className="rounded-full">
              FAQ
            </Badge>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently asked.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Can't find what you're looking for?{" "}
              <Link to="/contact" className="text-foreground underline underline-offset-4">
                Get in touch
              </Link>
              .
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-12 text-background md:p-16">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
            <div className="relative max-w-2xl">
              <Badge className="rounded-full bg-background/10 text-background hover:bg-background/20">
                Start creating
              </Badge>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Bring the future of work into your workspace today.
              </h2>
              <p className="mt-4 max-w-xl text-balance text-background/70">
                14-day Pro trial. No credit card required. Cancel anytime.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary" className="rounded-full px-6">
                  <Link to="/workspace">
                    Try AI Tools <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="rounded-full px-6 text-background hover:bg-background/10 hover:text-background"
                >
                  <Link to="/contact">Talk to sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
