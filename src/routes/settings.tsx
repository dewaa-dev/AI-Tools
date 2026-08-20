import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { AppShell } from "@/components/app/AppShell";

export const Route = createFileRoute("/settings")({
  component: Settings,
  head: () => ({ meta: [{ title: "Settings · Dewa AI" }] }),
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
    <section className="grid gap-6 border-t border-border py-8 md:grid-cols-[1fr_2fr]">
      <div>
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

const initialSettings = {
  name: "Dewa",
  email: "dewa@northwind.example",
  workspace: "Northwind",
  about: "Customer-obsessed content & growth team building the future of operating systems.",
  streaming: true,
  history: true,
  personalization: false,
  twoFactor: true,
};

function Settings() {
  const [settings, setSettings] = useState(initialSettings);
  const [feedback, setFeedback] = useState("");
  const update = <K extends keyof typeof settings>(key: K, value: (typeof settings)[K]) =>
    setSettings((current) => ({ ...current, [key]: value }));

  return (
    <AppShell>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setFeedback("Demo settings saved for this session.");
        }}
        className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8"
      >
        <div>
          <div className="text-xs font-medium text-muted-foreground">Settings · Demo mode</div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">Workspace settings</h1>
        </div>
        <p className="mt-5 rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
          Changes are interactive and stay in memory for this demo session. Nothing is sent to a
          server.
        </p>

        <Section title="Profile" desc="How your name and avatar appear across Dewa AI.">
          <div>
            <Label htmlFor="settings-full-name" className="text-xs">
              Full name
            </Label>
            <Input
              id="settings-full-name"
              value={settings.name}
              onChange={(event) => update("name", event.target.value)}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="settings-email" className="text-xs">
              Email
            </Label>
            <Input
              id="settings-email"
              type="email"
              value={settings.email}
              onChange={(event) => update("email", event.target.value)}
              className="mt-1.5"
            />
          </div>
        </Section>
        <Section title="Workspace" desc="Branding and identity for your team.">
          <div>
            <Label htmlFor="settings-workspace" className="text-xs">
              Workspace name
            </Label>
            <Input
              id="settings-workspace"
              value={settings.workspace}
              onChange={(event) => update("workspace", event.target.value)}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="settings-about" className="text-xs">
              About
            </Label>
            <Textarea
              id="settings-about"
              value={settings.about}
              onChange={(event) => update("about", event.target.value)}
              className="mt-1.5"
              rows={3}
            />
          </div>
        </Section>
        <Section title="AI defaults" desc="Models and behavior across the workspace.">
          {(
            [
              ["streaming", "Streaming responses", "Tokens appear as they're generated."],
              ["history", "Save prompt history", "Keep a searchable record of prompts."],
              ["personalization", "Personalization", "Use past prompts to improve replies."],
            ] as const
          ).map(([key, label, description]) => (
            <div key={key} className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm">{label}</div>
                <div className="text-xs text-muted-foreground">{description}</div>
              </div>
              <Switch
                checked={settings[key]}
                onCheckedChange={(value) => update(key, value)}
                aria-label={label}
              />
            </div>
          ))}
        </Section>
        <Section title="Security" desc="Two-factor and active sessions.">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm">Two-factor authentication</div>
              <div className="text-xs text-muted-foreground">
                Simulate the preferred account security state.
              </div>
            </div>
            <Switch
              checked={settings.twoFactor}
              onCheckedChange={(value) => update("twoFactor", value)}
              aria-label="Two-factor authentication"
            />
          </div>
          <Button
            type="button"
            variant="outline"
            className="rounded-full"
            onClick={() =>
              setFeedback("Demo session list cleared. No real sessions were affected.")
            }
          >
            Sign out demo sessions
          </Button>
        </Section>
        <Section title="Demo controls" desc="Restore the original portfolio scenario.">
          <Button
            type="button"
            variant="outline"
            className="rounded-full"
            onClick={() => {
              setSettings(initialSettings);
              setFeedback("Demo workspace reset to its original values.");
            }}
          >
            Reset demo workspace
          </Button>
        </Section>
        <div className="sticky bottom-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-background/95 p-3 shadow-sm backdrop-blur">
          <p className="text-sm text-muted-foreground" role="status">
            {feedback || "Unsaved demo changes remain local."}
          </p>
          <Button type="submit" className="rounded-full">
            Save demo settings
          </Button>
        </div>
      </form>
    </AppShell>
  );
}
