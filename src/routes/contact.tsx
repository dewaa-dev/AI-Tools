import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [{ title: "Contact · Dewa ai" }] }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <Toaster />
      <section className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Badge variant="outline" className="rounded-full">Contact</Badge>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight">
            We'd love to hear from you.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Questions, partnerships, or a hello — we read every message.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1fr_1.5fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, title: "Email", desc: "hello@dewa.ai" },
              { icon: MessageCircle, title: "Support", desc: "Reach the team within 4h" },
              { icon: Building2, title: "HQ", desc: "Lisbon · Stockholm · Remote" },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-background p-5">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-muted">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="mt-4 text-sm font-semibold">{c.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Message sent — we'll reply within 24 hours.");
            }}
            className="rounded-2xl border border-border bg-background p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label className="text-xs">First name</Label>
                <Input className="mt-1.5" placeholder="Sara" />
              </div>
              <div>
                <Label className="text-xs">Last name</Label>
                <Input className="mt-1.5" placeholder="Lindgren" />
              </div>
            </div>
            <div className="mt-4">
              <Label className="text-xs">Work email</Label>
              <Input className="mt-1.5" type="email" placeholder="you@company.com" />
            </div>
            <div className="mt-4">
              <Label className="text-xs">Company</Label>
              <Input className="mt-1.5" placeholder="Northwind" />
            </div>
            <div className="mt-4">
              <Label className="text-xs">Message</Label>
              <Textarea rows={5} className="mt-1.5" placeholder="Tell us a little about what you need…" />
            </div>
            <Button type="submit" className="mt-6 w-full rounded-full" disabled={sent}>
              {sent ? "Sent ✓" : "Send message"}
            </Button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
