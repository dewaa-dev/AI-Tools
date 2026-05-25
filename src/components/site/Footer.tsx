import { Link } from "@tanstack/react-router";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: [
      { to: "/workspace", label: "AI Workspace" },
      { to: "/templates", label: "Templates" },
      { to: "/dashboard", label: "Dashboard" },
      { to: "/changelog", label: "Changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/blog", label: "Blog" },
      { to: "/pricing", label: "Pricing" },
      { to: "/contact", label: "Contact" },
      { to: "/team", label: "Teams" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/settings", label: "Settings" },
      { to: "/billing", label: "Billing" },
      { to: "/contact", label: "Support" },
      { to: "/blog", label: "Guides" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_3fr]">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight">Lumen AI</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The modern AI workspace for content, code, automation, and team productivity — built
              for the next decade of work.
            </p>
            <div className="mt-6 flex gap-2 text-muted-foreground">
              <a className="rounded-md p-2 hover:bg-muted hover:text-foreground" href="#">
                <Twitter className="h-4 w-4" />
              </a>
              <a className="rounded-md p-2 hover:bg-muted hover:text-foreground" href="#">
                <Github className="h-4 w-4" />
              </a>
              <a className="rounded-md p-2 hover:bg-muted hover:text-foreground" href="#">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  {c.title}
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-muted-foreground hover:text-foreground">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Lumen AI, Inc. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
