import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/templates")({
  component: Templates,
  head: () => ({ meta: [{ title: "Templates · Lumen AI" }] }),
});

const CATS = ["All", "Writing", "Code", "Marketing", "Research", "Automation", "Image"];

const TEMPLATES = [
  { cat: "Writing", title: "Launch email", desc: "Friendly, confident product launch email under 120 words." },
  { cat: "Writing", title: "Blog outline", desc: "SEO-friendly outline with H2s and key questions." },
  { cat: "Code", title: "Bug fix assistant", desc: "Diagnose stack trace and propose minimal-diff fix." },
  { cat: "Code", title: "Refactor for readability", desc: "Rewrite a function for clarity without changing behavior." },
  { cat: "Marketing", title: "Twitter thread", desc: "8-tweet thread from a long-form article." },
  { cat: "Marketing", title: "Cold outreach", desc: "Personalized 3-line cold email with a CTA." },
  { cat: "Research", title: "PDF summarizer", desc: "Extract key claims, methods, and findings." },
  { cat: "Research", title: "Competitive analysis", desc: "Side-by-side comparison of 3 competitors." },
  { cat: "Automation", title: "Slack daily digest", desc: "Summarize busy channels into a 5-bullet digest." },
  { cat: "Automation", title: "Lead enrichment", desc: "Pull company info and score inbound leads." },
  { cat: "Image", title: "Cinematic prompt", desc: "Detailed prompt for moody, cinematic product shots." },
  { cat: "Image", title: "Brand mood board", desc: "Generate 6 mood-board prompts from a brand brief." },
];

function Templates() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const filtered = TEMPLATES.filter(
    (t) =>
      (cat === "All" || t.cat === cat) &&
      (q === "" || (t.title + t.desc).toLowerCase().includes(q.toLowerCase())),
  );
  return (
    <SiteLayout>
      <section className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Badge variant="outline" className="rounded-full">Templates</Badge>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight">
            Start from a great prompt.
          </h1>
          <p className="mt-4 text-balance text-muted-foreground">
            Hundreds of curated prompts for writing, code, marketing, research and automation.
          </p>
          <div className="relative mx-auto mt-8 max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search templates…"
              className="h-11 rounded-full pl-9"
            />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  cat === c
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => (
              <div
                key={t.title}
                className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:bg-muted/40"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-muted">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <Badge variant="secondary" className="rounded-full text-[10px]">{t.cat}</Badge>
                </div>
                <div className="mt-5 text-base font-semibold tracking-tight">{t.title}</div>
                <div className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">{t.desc}</div>
                <Button asChild size="sm" variant="outline" className="mt-5 self-start rounded-full">
                  <Link to="/workspace">Use template</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
