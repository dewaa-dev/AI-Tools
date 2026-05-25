import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { AppShell } from "@/components/app/AppShell";

export const Route = createFileRoute("/settings")({
  component: Settings,
  head: () => ({ meta: [{ title: "Settings · Dewa ai" }] }),
});

function Section({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-border py-8 md:grid-cols-[1fr_2fr]">
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-1 text-xs text-muted-foreground">{desc}</div>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Settings() {
  return (
    <AppShell>
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div>
          <div className="text-xs font-medium text-muted-foreground">Settings</div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">Workspace settings</h1>
        </div>

        <Section title="Profile" desc="How your name and avatar appear across dewa.">
          <div>
            <Label className="text-xs">Full name</Label>
            <Input defaultValue="Sara Lindgren" className="mt-1.5" />
          </div>
          <div>
            <Label className="text-xs">Email</Label>
            <Input defaultValue="sara@northwind.co" className="mt-1.5" />
          </div>
        </Section>

        <Section title="Workspace" desc="Branding and identity for your team.">
          <div>
            <Label className="text-xs">Workspace name</Label>
            <Input defaultValue="Northwind" className="mt-1.5" />
          </div>
          <div>
            <Label className="text-xs">About</Label>
            <Textarea
              className="mt-1.5"
              rows={3}
              defaultValue="Customer-obsessed content & growth team building the future of operating systems."
            />
          </div>
        </Section>

        <Section title="AI defaults" desc="Models and behavior across the workspace.">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm">Streaming responses</div>
              <div className="text-xs text-muted-foreground">Tokens appear as they're generated.</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm">Save prompt history</div>
              <div className="text-xs text-muted-foreground">Keep a searchable record of all prompts.</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm">Personalization</div>
              <div className="text-xs text-muted-foreground">Use your past prompts to improve replies.</div>
            </div>
            <Switch />
          </div>
        </Section>

        <Section title="Security" desc="Two-factor and active sessions.">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm">Two-factor authentication</div>
              <div className="text-xs text-muted-foreground">Require a code in addition to your password.</div>
            </div>
            <Switch defaultChecked />
          </div>
          <Button variant="outline" className="rounded-full">Sign out all sessions</Button>
        </Section>

        <Section title="Danger zone" desc="Irreversible actions.">
          <Button variant="destructive" className="rounded-full">Delete workspace</Button>
        </Section>
      </div>
    </AppShell>
  );
}
