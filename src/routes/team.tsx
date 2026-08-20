import { createFileRoute } from "@tanstack/react-router";
import { Plus, Mail, Shield, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AppShell } from "@/components/app/AppShell";

export const Route = createFileRoute("/team")({
  component: Team,
  head: () => ({ meta: [{ title: "Team workspace · Dewa AI" }] }),
});

type Member = { name: string; email: string; role: "Owner" | "Admin" | "Member" | "Invited" };
const initialMembers: Member[] = [
  { name: "Dewa", email: "dewa@northwind.example", role: "Owner" },
  { name: "Daniel Cho", email: "daniel@northwind.example", role: "Admin" },
  { name: "Amelia Rivers", email: "amelia@northwind.example", role: "Member" },
  { name: "Marcus Tan", email: "marcus@northwind.example", role: "Member" },
  { name: "Priya Naidu", email: "priya@northwind.example", role: "Member" },
];

function Team() {
  const [members, setMembers] = useState(initialMembers);
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  function invite(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    if (members.some((member) => member.email.toLowerCase() === normalizedEmail)) {
      setFeedback("That person is already in this demo workspace.");
      return;
    }
    const displayName = normalizedEmail.split("@")[0].replace(/[._-]+/g, " ");
    setMembers((current) => [
      ...current,
      {
        name: displayName.replace(/\b\w/g, (letter) => letter.toUpperCase()),
        email: normalizedEmail,
        role: "Invited",
      },
    ]);
    setEmail("");
    setFeedback(`Demo invitation created for ${normalizedEmail}. No email was sent.`);
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
        <div>
          <div className="text-xs font-medium text-muted-foreground">
            Team workspace · Demo data
          </div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">Northwind</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Shared prompts, permissions and usage across your team.
          </p>
        </div>

        <form onSubmit={invite} className="rounded-xl border border-border bg-background p-5">
          <label htmlFor="team-invite" className="text-sm font-medium">
            Invite by email
          </label>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <Input
              id="team-invite"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="teammate@company.example"
              className="flex-1"
              required
            />
            <Button type="submit" className="rounded-full">
              <Plus aria-hidden="true" className="h-4 w-4" /> Add demo invite
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Portfolio demo: the invitation appears locally and no email is sent.
          </p>
          {feedback && (
            <p className="mt-2 text-sm" role="status">
              {feedback}
            </p>
          )}
        </form>

        <div className="rounded-xl border border-border bg-background">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border p-5">
            <div className="text-sm font-medium">Members ({members.length})</div>
            <Badge variant="secondary" className="rounded-full">
              Pro demo · {members.length} seats
            </Badge>
          </div>
          <ul className="divide-y divide-border">
            {members.map((member) => (
              <li
                key={member.email}
                className="flex flex-wrap items-center gap-3 px-4 py-3 sm:flex-nowrap sm:gap-4 sm:px-5"
              >
                <div className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-xs font-medium text-background">
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="min-w-[10rem] flex-1">
                  <div className="text-sm font-medium capitalize">{member.name}</div>
                  <div className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Mail aria-hidden="true" className="h-3 w-3" /> {member.email}
                  </div>
                </div>
                <Badge
                  variant={member.role === "Owner" ? "default" : "outline"}
                  className="rounded-full"
                >
                  {member.role}
                </Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-muted">
              <Sparkles aria-hidden="true" className="h-4 w-4" />
            </div>
            <div className="mt-4 text-sm font-medium">Shared prompts</div>
            <div className="mt-1 text-xs text-muted-foreground">
              42 prompts shared with the team
            </div>
          </div>
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-muted">
              <Shield aria-hidden="true" className="h-4 w-4" />
            </div>
            <div className="mt-4 text-sm font-medium">Permissions</div>
            <div className="mt-1 text-xs text-muted-foreground">
              Roles, SSO and approval policies
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
