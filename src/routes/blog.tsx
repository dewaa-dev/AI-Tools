import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/blog")({
  component: Blog,
  head: () => ({ meta: [{ title: "Blog · Dewa ai" }] }),
});

const POSTS = [
  {
    cat: "Product",
    title: "Introducing realtime workflows in dewa 3.0",
    desc: "Build, trigger and observe AI automations the moment your data changes.",
    date: "May 24, 2026",
    author: "Sara Lindgren",
  },
  {
    cat: "Engineering",
    title: "How we cut median latency to 12ms across 12 regions",
    desc: "An honest tour through our edge architecture and what didn't work.",
    date: "May 10, 2026",
    author: "Daniel Cho",
  },
  {
    cat: "Design",
    title: "Designing for calm: lessons from our 3.0 rebuild",
    desc: "Why we removed 40% of our UI to ship a more powerful product.",
    date: "Apr 28, 2026",
    author: "Amelia Rivers",
  },
  {
    cat: "Customers",
    title: "Northwind ships 30% more content with dewa",
    desc: "A look inside one of the fastest-moving content teams in Europe.",
    date: "Apr 14, 2026",
    author: "Marcus Tan",
  },
  {
    cat: "Security",
    title: "Achieving SOC 2 Type II in 9 months",
    desc: "The framework, the trade-offs, and the templates we used.",
    date: "Apr 02, 2026",
    author: "Priya Naidu",
  },
];

function Blog() {
  const [first, ...rest] = POSTS;
  return (
    <SiteLayout>
      <section className="border-b border-border/60 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <Badge variant="outline" className="rounded-full">
            Blog
          </Badge>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Notes from the dewa team.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Product, engineering, design, and customer stories.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            to="/blog"
            className="group grid items-center gap-8 rounded-2xl border border-border bg-background p-7 md:grid-cols-[2fr_3fr] md:p-10"
          >
            <div className="aspect-[5/3] rounded-xl bg-gradient-to-br from-muted to-muted/50" />
            <div>
              <Badge variant="secondary" className="rounded-full">
                {first.cat}
              </Badge>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight">
                {first.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{first.desc}</p>
              <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-foreground to-foreground/60" />
                {first.author} · <Calendar className="h-3 w-3" /> {first.date}
              </div>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-0.5">
                Read post <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            {rest.map((p) => (
              <Link
                to="/blog"
                key={p.title}
                className="group rounded-2xl border border-border bg-background p-7 transition-colors hover:bg-muted/40"
              >
                <Badge variant="secondary" className="rounded-full">
                  {p.cat}
                </Badge>
                <h3 className="mt-3 text-balance text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-foreground to-foreground/60" />
                  {p.author} · {p.date}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
