import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [{ title: "Contact · Dewa AI" }] }),
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SiteLayout>
      <section className="border-b border-border/60 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <Badge variant="outline" className="rounded-full">
            Contact
          </Badge>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            We'd love to hear from you.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Questions, partnerships, or a hello — we read every message.
          </p>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 md:grid-cols-[1fr_1.5fr] md:gap-10 md:px-6">
          <div className="space-y-4">
            {[
              { icon: Mail, title: "Demo contact", desc: "hello@dewa.example" },
              { icon: MessageCircle, title: "Support", desc: "Reach the team within 4h" },
              { icon: Building2, title: "HQ", desc: "Lisbon · Stockholm · Remote" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-background p-5">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-muted">
                  <item.icon aria-hidden="true" className="h-4 w-4" />
                </div>
                <div className="mt-4 text-sm font-semibold">{item.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              event.currentTarget.reset();
              setSubmitted(true);
            }}
            className="rounded-2xl border border-border bg-background p-5 sm:p-7"
            aria-describedby="contact-form-status"
          >
            <p
              id="contact-form-status"
              className="mb-5 rounded-lg bg-muted px-4 py-3 text-sm text-muted-foreground"
            >
              Portfolio demo: submit a realistic message flow locally. No message or personal data
              is sent.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="contact-first-name" className="text-xs">
                  First name
                </Label>
                <Input
                  id="contact-first-name"
                  name="firstName"
                  autoComplete="given-name"
                  className="mt-1.5"
                  placeholder="Sara"
                  required
                />
              </div>
              <div>
                <Label htmlFor="contact-last-name" className="text-xs">
                  Last name
                </Label>
                <Input
                  id="contact-last-name"
                  name="lastName"
                  autoComplete="family-name"
                  className="mt-1.5"
                  placeholder="Lindgren"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="contact-email" className="text-xs">
                Work email
              </Label>
              <Input
                id="contact-email"
                name="email"
                autoComplete="email"
                className="mt-1.5"
                type="email"
                placeholder="you@company.example"
                required
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="contact-company" className="text-xs">
                Company
              </Label>
              <Input
                id="contact-company"
                name="company"
                autoComplete="organization"
                className="mt-1.5"
                placeholder="Northwind"
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="contact-message" className="text-xs">
                Message
              </Label>
              <Textarea
                id="contact-message"
                name="message"
                rows={5}
                className="mt-1.5"
                placeholder="Tell us a little about what you need…"
                required
              />
            </div>
            {submitted && (
              <p className="mt-4 text-sm font-medium text-success" role="status">
                Demo message received. The form was cleared successfully.
              </p>
            )}
            <Button type="submit" className="mt-6 w-full rounded-full">
              Send demo message
            </Button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
