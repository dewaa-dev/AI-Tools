import { createFileRoute } from "@tanstack/react-router";
import { Plus, Mail, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AppShell } from "@/components/app/AppShell";

export const Route = createFileRoute("/team")({
  component: Team,
  head: () => ({ meta: [{ title: "Team workspace · Dewa ai" }] }),
});

const members = [
  { name: "Sara Lindgren", email: "sara@northwind.co", role: "Owner" },
  { name: "Daniel Cho", email: "daniel@northwind.co", role: "Admin" },
  { name: "Amelia Rivers", email: "amelia@northwind.co", role: "Member" },
  { name: "Marcus Tan", email: "marcus@northwind.co", role: "Member" },
  { name: "Priya Naidu", email: "priya@northwind.co", role: "Member" },
];

function Team() {
  return (
    <AppShell>
      <div className="mx-auto max-w-5xl space-y-6 px-6 py-8">
        <div>
          <div className="text-xs font-medium text-muted-foreground">Team workspace</div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">Northwind</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Shared prompts, permissions and usage across your team.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-background p-5">
          <div className="text-sm font-medium">Invite by email</div>
          <div className="mt-3 flex gap-2">
            <Input placeholder="teammate@company.com" className="flex-1" />
            <Button className="rounded-full"><Plus className="h-4 w-4" /> Invite</Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Invitees will get an email and join with Member access.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-background">
          <div className="flex items-center justify-between border-b border-border p-5">
            <div className="text-sm font-medium">Members ({members.length})</div>
            <Badge variant="secondary" className="rounded-full">Pro plan · 5 seats</Badge>
          </div>
          <ul className="divide-y divide-border">
            {members.map((m) => (
              <li key={m.email} className="flex items-center gap-4 px-5 py-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-foreground to-foreground/60 text-xs font-medium text-background">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{m.name}</div>
                  <div className="text-xs text-muted-foreground inline-flex items-center gap-1">
                    <Mail className="h-3 w-3" /> {m.email}
                  </div>
                </div>
                <Badge variant={m.role === "Owner" ? "default" : "outline"} className="rounded-full">
                  {m.role}
                </Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-muted"><Sparkles className="h-4 w-4" /></div>
            <div className="mt-4 text-sm font-medium">Shared prompts</div>
            <div className="mt-1 text-xs text-muted-foreground">42 prompts shared with the team</div>
          </div>
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-muted"><Shield className="h-4 w-4" /></div>
            <div className="mt-4 text-sm font-medium">Permissions</div>
            <div className="mt-1 text-xs text-muted-foreground">Roles, SSO and approval policies</div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
