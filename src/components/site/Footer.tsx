import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

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
      { to: "/templates", label: "Prompt library" },
      { to: "/changelog", label: "What's new" },
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
              <span className="text-[15px] font-semibold tracking-tight">Dewa AI</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The modern AI workspace for content, code, automation, and team productivity — built
              for the next decade of work.
            </p>
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
          <div>© {new Date().getFullYear()} Dewa AI, Inc. All rights reserved.</div>
          <Link
            to="/contact"
            className="rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
