import { Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  MessagesSquare,
  FileText,
  Code2,
  FileSearch,
  Image as ImageIcon,
  Workflow,
  Users,
  CreditCard,
  Settings as SettingsIcon,
  Sparkles,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const groups = [
  {
    label: "Workspace",
    items: [
      { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
      { to: "/workspace", icon: MessagesSquare, label: "AI Chat" },
      { to: "/templates", icon: FileText, label: "Templates" },
    ],
  },
  {
    label: "AI Tools",
    items: [
      { to: "/workspace?tool=writing", icon: FileText, label: "Writing" },
      { to: "/workspace?tool=code", icon: Code2, label: "Code" },
      { to: "/workspace?tool=files", icon: FileSearch, label: "Files" },
      { to: "/workspace?tool=image", icon: ImageIcon, label: "Image" },
      { to: "/workspace?tool=automation", icon: Workflow, label: "Automation" },
    ],
  },
  {
    label: "Account",
    items: [
      { to: "/team", icon: Users, label: "Team" },
      { to: "/billing", icon: CreditCard, label: "Billing" },
      { to: "/settings", icon: SettingsIcon, label: "Settings" },
    ],
  },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border/60 bg-background md:flex">
        <Link to="/" className="flex h-16 items-center gap-2 border-b border-border/60 px-5">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-foreground text-background">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <span className="text-sm font-semibold tracking-tight">Lumen AI</span>
        </Link>
        <div className="px-3 pt-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search…" className="h-8 pl-8 text-xs" />
            <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
              ⌘K
            </kbd>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto p-3">
          {groups.map((g) => (
            <div key={g.label} className="mb-5">
              <div className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {g.label}
              </div>
              <ul className="space-y-0.5">
                {g.items.map((i) => (
                  <li key={i.label}>
                    <Link
                      to={i.to.split("?")[0]}
                      className="flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&.active]:bg-muted [&.active]:text-foreground"
                    >
                      <i.icon className="h-4 w-4" />
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="border-t border-border/60 p-3">
          <div className="rounded-lg border border-border bg-muted/40 p-3">
            <div className="text-xs font-medium">Free plan</div>
            <div className="mt-1 text-[11px] text-muted-foreground">
              42 of 100 credits used
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
              <div className="h-full w-[42%] rounded-full bg-foreground/80" />
            </div>
            <Link
              to="/pricing"
              className="mt-3 block rounded-md bg-foreground py-1.5 text-center text-xs font-medium text-background hover:bg-foreground/90"
            >
              Upgrade
            </Link>
          </div>
        </div>
      </aside>
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border/60 bg-background/80 px-6 backdrop-blur-xl">
          <div className="text-sm font-medium text-muted-foreground">Workspace</div>
          <div className="flex items-center gap-2">
            <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">
              ← Back to site
            </Link>
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-foreground to-foreground/60" />
          </div>
        </header>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
