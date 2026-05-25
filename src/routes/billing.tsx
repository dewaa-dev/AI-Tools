import { createFileRoute } from "@tanstack/react-router";
import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AppShell } from "@/components/app/AppShell";

export const Route = createFileRoute("/billing")({
  component: Billing,
  head: () => ({ meta: [{ title: "Billing · Lumen AI" }] }),
});

const invoices = [
  { id: "INV-2026-005", date: "May 1, 2026", amount: "$24.00", status: "Paid" },
  { id: "INV-2026-004", date: "Apr 1, 2026", amount: "$24.00", status: "Paid" },
  { id: "INV-2026-003", date: "Mar 1, 2026", amount: "$24.00", status: "Paid" },
  { id: "INV-2026-002", date: "Feb 1, 2026", amount: "$24.00", status: "Paid" },
];

function Billing() {
  return (
    <AppShell>
      <div className="mx-auto max-w-5xl space-y-6 px-6 py-8">
        <div>
          <div className="text-xs font-medium text-muted-foreground">Billing</div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">Subscription & invoices</h1>
        </div>

        <div className="rounded-xl border border-foreground bg-foreground p-6 text-background">
          <div className="flex items-center justify-between">
            <div>
              <Badge className="rounded-full bg-background/15 text-background hover:bg-background/25">Current plan</Badge>
              <div className="mt-3 text-2xl font-semibold tracking-tight">Pro</div>
              <div className="mt-1 text-sm opacity-70">Billed monthly · Renews June 1, 2026</div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-semibold tracking-tight">$24<span className="text-sm font-normal opacity-70">/mo</span></div>
              <Button variant="secondary" className="mt-3 rounded-full">Manage plan</Button>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {["Unlimited credits", "Advanced models", "Priority support"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm opacity-90">
                <Check className="h-4 w-4" /> {f}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="text-xs text-muted-foreground">Tokens this cycle</div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">412,098</div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[62%] rounded-full bg-foreground" />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">62% of soft cap</div>
          </div>
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="text-xs text-muted-foreground">Active seats</div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">5 / 5</div>
            <div className="mt-3 text-xs text-muted-foreground">Add a seat for $9/mo</div>
          </div>
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="text-xs text-muted-foreground">Payment method</div>
            <div className="mt-2 text-sm font-medium">Visa •••• 4242</div>
            <div className="mt-3 text-xs text-muted-foreground">Expires 04/29</div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-background">
          <div className="border-b border-border p-5 text-sm font-medium">Invoice history</div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3 text-left font-medium">Invoice</th>
                <th className="px-5 py-3 text-left font-medium">Date</th>
                <th className="px-5 py-3 text-left font-medium">Amount</th>
                <th className="px-5 py-3 text-left font-medium">Status</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((i) => (
                <tr key={i.id} className="border-b border-border/60 last:border-0">
                  <td className="px-5 py-3.5 font-medium">{i.id}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{i.date}</td>
                  <td className="px-5 py-3.5">{i.amount}</td>
                  <td className="px-5 py-3.5"><Badge variant="secondary" className="rounded-full">{i.status}</Badge></td>
                  <td className="px-5 py-3.5 text-right">
                    <Button variant="ghost" size="sm" className="text-xs">
                      <Download className="h-3.5 w-3.5" /> PDF
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
