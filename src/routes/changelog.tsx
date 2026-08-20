import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/changelog")({
  component: Changelog,
  head: () => ({ meta: [{ title: "Changelog · Dewa ai" }] }),
});

const ENTRIES = [
  {
    v: "3.0",
    tag: "Major",
    date: "May 24, 2026",
    title: "Realtime workflows",
    items: [
      "Build AI automations with a drag-and-drop canvas",
      "Trigger workflows from webhooks, schedules, or data changes",
      "Native steps for OpenAI, Claude, Slack, Notion, and Linear",
    ],
  },
  {
    v: "2.8",
    tag: "Improved",
    date: "May 10, 2026",
    title: "Faster streaming and lower latency",
    items: [
      "Median first-token latency down to 12ms in EU and US",
      "20% faster file analysis for PDFs over 30 pages",
    ],
  },
  {
    v: "2.7",
    tag: "New",
    date: "Apr 28, 2026",
    title: "Team workspaces",
    items: [
      "Shared prompts and prompt libraries",
      "Role-based permissions (Owner, Admin, Member)",
      "Workspace-level usage analytics",
    ],
  },
  {
    v: "2.6",
    tag: "Fixed",
    date: "Apr 14, 2026",
    title: "Quality of life",
    items: [
      "Improved command palette search ranking",
      "Fixed rare crash when uploading 50MB+ documents",
    ],
  },
];

function Changelog() {
  return (
    <SiteLayout>
      <section className="border-b border-border/60 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <Badge variant="outline" className="rounded-full">
            Changelog
          </Badge>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            What's new in dewa.
          </h1>
          <p className="mt-4 text-muted-foreground">We ship every week. Here's the latest.</p>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
            <div className="space-y-12">
              {ENTRIES.map((e) => (
                <div key={e.v} className="relative pl-10">
                  <div className="absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full border-2 border-background bg-foreground text-[10px] font-semibold text-background ring-1 ring-border">
                    {e.v.split(".")[0]}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">v{e.v}</span>
                    <Badge variant="secondary" className="rounded-full text-[10px]">
                      {e.tag}
                    </Badge>
                    <span>·</span>
                    <span>{e.date}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{e.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {e.items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
