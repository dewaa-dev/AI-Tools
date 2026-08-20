import { Link } from "@tanstack/react-router";
import { Sparkles, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";

const nav = [
  { to: "/", label: "Home" },
  { to: "/workspace", label: "Workspace" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/templates", label: "Templates" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/changelog", label: "Changelog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight">Dewa AI</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&.active]:text-foreground"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
          <Button size="sm" asChild className="rounded-full">
            <Link to="/workspace">Try AI Tools</Link>
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open site navigation">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="min-h-11 rounded-md px-3 py-3 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {n.label}
                </Link>
              ))}
              <Button asChild className="mt-3 rounded-full">
                <Link to="/workspace">Try AI Tools</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
