import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  TrendingUp,
  TrendingDown,
  MessagesSquare,
  Zap,
  Clock,
  ArrowUpRight,
  FolderKanban,
  Plus,
} from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({ meta: [{ title: "Dashboard · Dewa ai" }] }),
});

const tokenData = Array.from({ length: 14 }).map((_, i) => ({
  day: `D${i + 1}`,
  tokens: Math.round(20 + Math.sin(i / 2) * 12 + i * 4),
}));

const toolUsage = [
  { tool: "Chat", value: 412 },
  { tool: "Writing", value: 318 },
  { tool: "Code", value: 256 },
  { tool: "Files", value: 142 },
  { tool: "Image", value: 88 },
  { tool: "Auto", value: 64 },
];

const recent = [
  { who: "Dewa", what: "Generated launch email", when: "2m ago", tool: "Writing" },
  { who: "Daniel C.", what: "Refactored API client", when: "12m ago", tool: "Code" },
  { who: "Amelia R.", what: "Summarized Q3 review.pdf", when: "1h ago", tool: "Files" },
  { who: "Marcus T.", what: "Built auto-summary workflow", when: "3h ago", tool: "Automation" },
  { who: "Priya N.", what: "Chat: brand voice draft", when: "5h ago", tool: "Chat" },
];

type Project = { id: string; name: string; description: string };

const initialProjects: Project[] = [
  {
    id: "launch-campaign",
    name: "Product launch campaign",
    description: "Messaging, launch assets, and channel plan for the autumn release.",
  },
  {
    id: "support-automation",
    name: "Support automation",
    description: "Reusable prompts and workflows for the customer success team.",
  },
];

function Stat({
  label,
  value,
  delta,
  up = true,
  icon: Icon,
}: {
  label: string;
  value: string;
  delta: string;
  up?: boolean;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <div className="flex items-center justify-between">
        <div className="text-xs font-medium text-muted-foreground">{label}</div>
        <div className="grid h-7 w-7 place-items-center rounded-md bg-muted text-muted-foreground">
          <Icon className="h-3.5 w-3.5" />
        </div>
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
      <div
        className={`mt-1 inline-flex items-center gap-1 text-xs ${
          up ? "text-emerald-600" : "text-rose-600"
        }`}
      >
        {up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
        {delta}
      </div>
    </div>
  );
}

function Dashboard() {
  const [projects, setProjects] = useState(initialProjects);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectFeedback, setProjectFeedback] = useState("");

  function createProject(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = projectName.trim();
    if (!name) return;

    setProjects((current) => [
      { id: crypto.randomUUID(), name, description: projectDescription.trim() },
      ...current,
    ]);
    setProjectName("");
    setProjectDescription("");
    setDialogOpen(false);
    setProjectFeedback(`${name} was created for this demo session.`);
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-medium text-muted-foreground">Overview</div>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight">Welcome back, Dewa</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="rounded-full">
              Last 14 days
            </Badge>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="rounded-full">
                  <Plus aria-hidden="true" className="h-4 w-4" /> Create Project
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[calc(100%-2rem)] sm:max-w-lg">
                <form onSubmit={createProject}>
                  <DialogHeader>
                    <DialogTitle>Create project</DialogTitle>
                    <DialogDescription>
                      Add a project to this portfolio demo. It stays in memory for this session.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="my-5 space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="project-name">Project name</Label>
                      <Input
                        id="project-name"
                        value={projectName}
                        onChange={(event) => setProjectName(event.target.value)}
                        placeholder="e.g. Customer onboarding refresh"
                        autoFocus
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="project-description">Description (optional)</Label>
                      <Textarea
                        id="project-description"
                        value={projectDescription}
                        onChange={(event) => setProjectDescription(event.target.value)}
                        placeholder="What will your team work on?"
                        rows={3}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Create project</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {projectFeedback && (
          <p className="text-sm text-muted-foreground" role="status">
            {projectFeedback}
          </p>
        )}

        <section
          aria-labelledby="projects-heading"
          className="rounded-xl border border-border bg-background"
        >
          <div className="border-b border-border p-5">
            <h2 id="projects-heading" className="text-sm font-medium">
              Projects
            </h2>
            <p className="text-xs text-muted-foreground">Active work in this demo workspace</p>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
            {projects.map((project) => (
              <article key={project.id} className="flex gap-3 rounded-lg border border-border p-4">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-muted text-muted-foreground">
                  <FolderKanban aria-hidden="true" className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-medium">{project.name}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                    {project.description || "No description added."}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="grid gap-4 md:grid-cols-4">
          <Stat label="AI prompts" value="1,284" delta="+18.2%" icon={MessagesSquare} />
          <Stat label="Tokens used" value="412k" delta="+24.1%" icon={Zap} />
          <Stat label="Active teammates" value="14" delta="+2 this week" icon={Sparkles} />
          <Stat label="Avg. response" value="1.4s" delta="-0.3s" up={false} icon={Clock} />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-background p-5 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Token usage</div>
                <div className="text-xs text-muted-foreground">Tracked across all AI tools</div>
              </div>
              <Badge variant="secondary" className="rounded-full text-[10px]">
                +24.1%
              </Badge>
            </div>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={tokenData} margin={{ left: -20, right: 8, top: 8 }}>
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    stroke="hsl(var(--border))"
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="day"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="tokens"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="url(#g)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="text-sm font-medium">Tool usage</div>
            <div className="text-xs text-muted-foreground">By number of runs</div>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={toolUsage} margin={{ left: -20, right: 8 }}>
                  <CartesianGrid
                    stroke="hsl(var(--border))"
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="tool"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--background)",
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="value" fill="currentColor" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-background">
          <div className="flex items-center justify-between p-5">
            <div>
              <div className="text-sm font-medium">Recent activity</div>
              <div className="text-xs text-muted-foreground">What your team shipped today</div>
            </div>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              Latest activity <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
          <div className="divide-y divide-border border-t border-border">
            {recent.map((r) => (
              <div
                key={r.what}
                className="grid grid-cols-[2rem_1fr] items-center gap-3 px-4 py-3 sm:flex sm:gap-4 sm:px-5"
              >
                <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-foreground to-foreground/60 text-xs font-medium text-background">
                  {r.who[0]}
                </div>
                <div className="flex-1">
                  <div className="text-sm">
                    <span className="font-medium">{r.who}</span>{" "}
                    <span className="text-muted-foreground">{r.what}</span>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="col-start-2 w-fit rounded-full text-[10px] sm:col-auto"
                >
                  {r.tool}
                </Badge>
                <div className="col-start-2 text-xs text-muted-foreground sm:col-auto sm:w-16 sm:text-right">
                  {r.when}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
