import { Link, useLocation } from "@tanstack/react-router";
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
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export type WorkspaceTool = "writing" | "code" | "files" | "image" | "automation";
type AppDestination =
  | "/dashboard"
  | "/workspace"
  | "/templates"
  | "/team"
  | "/billing"
  | "/settings";
type NavigationItem = {
  to: AppDestination;
  icon: React.ElementType;
  label: string;
  tool?: WorkspaceTool;
};

const groups: Array<{ label: string; items: NavigationItem[] }> = [
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
      { to: "/workspace", tool: "writing", icon: FileText, label: "Writing" },
      { to: "/workspace", tool: "code", icon: Code2, label: "Code" },
      { to: "/workspace", tool: "files", icon: FileSearch, label: "Files" },
      { to: "/workspace", tool: "image", icon: ImageIcon, label: "Image" },
      { to: "/workspace", tool: "automation", icon: Workflow, label: "Automation" },
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

const pageNames: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/workspace": "Workspace",
  "/templates": "Templates",
  "/team": "Team",
  "/billing": "Billing",
  "/settings": "Settings",
};

function isNavigationItemActive(
  item: NavigationItem,
  pathname: string,
  search: Record<string, unknown>,
) {
  if (pathname !== item.to) return false;
  if (item.to !== "/workspace") return true;
  return item.tool ? search.tool === item.tool : search.tool == null;
}

function NavigationGroups({
  collapsed = false,
  onNavigate,
}: {
  collapsed?: boolean;
  onNavigate?: () => void;
}) {
  const location = useLocation();
  return (
    <nav aria-label="Application navigation" className="flex-1 overflow-y-auto p-3">
      {groups.map((group) => (
        <div key={group.label} className="mb-5 last:mb-0">
          <div
            className={cn(
              "px-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
              collapsed && "sr-only",
            )}
          >
            {group.label}
          </div>
          <ul className="space-y-0.5">
            {group.items.map((item) => {
              const active = isNavigationItemActive(
                item,
                location.pathname,
                location.search as Record<string, unknown>,
              );
              return (
                <li key={`${item.to}-${item.tool ?? "default"}`}>
                  <Link
                    to={item.to}
                    search={item.tool ? { tool: item.tool } : undefined}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    title={collapsed ? item.label : undefined}
                    className={cn(
                      "flex min-h-10 items-center gap-2.5 rounded-md px-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      collapsed && "justify-center px-0",
                      active && "bg-muted font-medium text-foreground",
                    )}
                  >
                    <item.icon aria-hidden="true" className="h-4 w-4 shrink-0" />
                    <span className={cn(collapsed && "sr-only")}>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const pageName = pageNames[location.pathname] ?? "Workspace";

  return (
    <div className="flex min-h-svh bg-muted/30">
      <aside
        className={cn(
          "sticky top-0 hidden h-svh shrink-0 flex-col border-r border-border/60 bg-background transition-[width] duration-200 motion-reduce:transition-none md:flex",
          collapsed ? "w-16" : "w-64",
        )}
      >
        <div
          className={cn(
            "flex h-16 items-center border-b border-border/60",
            collapsed ? "justify-center" : "px-3",
          )}
        >
          <Link
            to="/"
            aria-label="Dewa AI home"
            className={cn(
              "flex min-w-0 items-center gap-2 rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              !collapsed && "flex-1",
            )}
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-foreground text-background">
              <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
            {!collapsed && (
              <span className="truncate text-sm font-semibold tracking-tight">Dewa AI</span>
            )}
          </Link>
          {!collapsed && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-9 w-9 shrink-0"
              onClick={() => setCollapsed(true)}
              aria-label="Collapse sidebar"
              aria-expanded="true"
            >
              <PanelLeftClose aria-hidden="true" />
            </Button>
          )}
        </div>
        {collapsed && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="mx-auto mt-3 h-10 w-10"
            onClick={() => setCollapsed(false)}
            aria-label="Expand sidebar"
            aria-expanded="false"
          >
            <PanelLeftOpen aria-hidden="true" />
          </Button>
        )}
        <NavigationGroups collapsed={collapsed} />
        <div className="border-t border-border/60 p-3">
          {collapsed ? (
            <Link
              to="/pricing"
              aria-label="Upgrade plan"
              title="Upgrade plan"
              className="flex h-10 items-center justify-center rounded-md bg-foreground text-background hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <CreditCard aria-hidden="true" className="h-4 w-4" />
            </Link>
          ) : (
            <div className="rounded-lg border border-border bg-muted/40 p-3">
              <div className="text-xs font-medium">Portfolio demo</div>
              <div className="mt-1 text-[11px] text-muted-foreground">
                Realistic local data · no backend
              </div>
              <div
                className="mt-2 h-1.5 overflow-hidden rounded-full bg-border"
                role="progressbar"
                aria-label="Credits used"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={42}
              >
                <div className="h-full w-[42%] rounded-full bg-foreground/80" />
              </div>
              <Link
                to="/pricing"
                className="mt-3 block rounded-md bg-foreground py-2 text-center text-xs font-medium text-background hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Upgrade
              </Link>
            </div>
          )}
        </div>
      </aside>

      <div className="flex min-h-svh min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border/60 bg-background/95 px-4 backdrop-blur md:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 md:hidden"
                  aria-label="Open application navigation"
                >
                  <Menu aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex w-[min(20rem,88vw)] flex-col p-0">
                <SheetHeader className="border-b border-border/60 px-5 py-5 text-left">
                  <SheetTitle className="flex items-center gap-2 text-sm">
                    <span className="grid h-7 w-7 place-items-center rounded-md bg-foreground text-background">
                      <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                    Dewa AI
                  </SheetTitle>
                </SheetHeader>
                <NavigationGroups onNavigate={() => setMobileOpen(false)} />
                <div className="border-t border-border/60 p-3">
                  <Link
                    to="/pricing"
                    onClick={() => setMobileOpen(false)}
                    className="block min-h-10 rounded-md bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    View plans
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
            <div className="truncate text-sm font-medium text-foreground">{pageName}</div>
            <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Demo
            </span>
          </div>
          <Link
            to="/"
            className="rounded-md px-2 py-2 text-xs text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Back to site
          </Link>
        </header>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
