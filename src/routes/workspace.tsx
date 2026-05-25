import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  Send,
  Sparkles,
  Paperclip,
  Image as ImageIcon,
  Code2,
  FileText,
  Workflow,
  Plus,
  MessageSquare,
  Bookmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { AppShell } from "@/components/app/AppShell";

export const Route = createFileRoute("/workspace")({
  component: Workspace,
  head: () => ({ meta: [{ title: "AI Workspace · Lumen AI" }] }),
});

type Msg = { id: string; role: "user" | "assistant"; content: string };

const STARTER_PROMPTS = [
  { icon: FileText, label: "Write a launch email for a SaaS update" },
  { icon: Code2, label: "Refactor this Python function for readability" },
  { icon: ImageIcon, label: "Describe an image prompt for a quiet coastal scene" },
  { icon: Workflow, label: "Build an automation that summarizes Slack threads" },
];

const HISTORY = [
  "Launch email — realtime workflows",
  "Refactor API client",
  "Q3 product review summary",
  "Brand voice — minimal & calm",
  "Onboarding checklist v3",
];

function Workspace() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send(text: string) {
    if (!text.trim() || streaming) return;
    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", content: text };
    const aiId = crypto.randomUUID();
    setMessages((m) => [...m, userMsg, { id: aiId, role: "assistant", content: "" }]);
    setInput("");
    setStreaming(true);

    const reply = `Here's a draft based on your request:\n\n"${text}"\n\nLumen breaks this into clear steps, keeps a calm tone, and stays under 120 words. You can refine, save it as a template, or push it into an automation — all without leaving the workspace.`;
    let i = 0;
    const tick = () => {
      i += 3;
      setMessages((m) =>
        m.map((msg) => (msg.id === aiId ? { ...msg, content: reply.slice(0, i) } : msg)),
      );
      if (i < reply.length) setTimeout(tick, 18);
      else setStreaming(false);
    };
    setTimeout(tick, 250);
  }

  return (
    <AppShell>
      <div className="grid h-[calc(100vh-3.5rem)] grid-cols-1 lg:grid-cols-[280px_1fr]">
        {/* History panel */}
        <aside className="hidden border-r border-border/60 bg-background lg:flex lg:flex-col">
          <div className="flex items-center justify-between p-4">
            <div className="text-sm font-semibold">Conversations</div>
            <Button size="icon" variant="ghost" className="h-7 w-7">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="px-2">
            <Badge variant="secondary" className="ml-2 rounded-full text-[10px]">Today</Badge>
          </div>
          <ul className="mt-2 flex-1 space-y-0.5 overflow-y-auto px-2 pb-4">
            {HISTORY.map((h, i) => (
              <li
                key={h}
                className={`group flex cursor-pointer items-start gap-2 rounded-md p-2 text-sm hover:bg-muted ${
                  i === 0 ? "bg-muted" : ""
                }`}
              >
                <MessageSquare className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <span className="line-clamp-2 leading-snug">{h}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-border/60 p-3">
            <button className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-xs text-muted-foreground hover:bg-muted">
              <Bookmark className="h-3.5 w-3.5" /> Saved prompts
            </button>
          </div>
        </aside>

        {/* Chat */}
        <section className="flex flex-col bg-background">
          <div className="flex-1 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-foreground text-background">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h1 className="mt-6 text-3xl font-semibold tracking-tight">
                  How can I help you today?
                </h1>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Start a conversation, draft content, generate code, or summarize a file. Lumen
                  remembers your context across the workspace.
                </p>
                <div className="mt-8 grid w-full max-w-xl gap-2 sm:grid-cols-2">
                  {STARTER_PROMPTS.map((p) => (
                    <button
                      key={p.label}
                      onClick={() => send(p.label)}
                      className="group flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-left transition-colors hover:bg-muted/50"
                    >
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-muted">
                        <p.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm leading-snug">{p.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mx-auto max-w-3xl space-y-6 px-6 py-8">
                {messages.map((m) => (
                  <div key={m.id} className="flex gap-3">
                    <div
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-md ${
                        m.role === "user"
                          ? "bg-muted text-foreground"
                          : "bg-foreground text-background"
                      }`}
                    >
                      {m.role === "user" ? "U" : <Sparkles className="h-3.5 w-3.5" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-medium text-muted-foreground">
                        {m.role === "user" ? "You" : "Lumen"}
                      </div>
                      <div className="mt-1 whitespace-pre-wrap text-[15px] leading-relaxed text-foreground">
                        {m.content}
                        {m.role === "assistant" && streaming && m.id === messages.at(-1)?.id && (
                          <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-foreground" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={endRef} />
              </div>
            )}
          </div>

          {/* Composer */}
          <div className="border-t border-border/60 bg-background/80 p-4 backdrop-blur">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="mx-auto max-w-3xl"
            >
              <div className="relative rounded-2xl border border-border bg-background shadow-sm transition-shadow focus-within:shadow-md">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  placeholder="Message Lumen…"
                  className="min-h-[60px] resize-none border-0 bg-transparent p-4 pr-14 text-[15px] shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center justify-between border-t border-border/60 px-3 py-2">
                  <div className="flex items-center gap-1">
                    <Button type="button" size="icon" variant="ghost" className="h-7 w-7 text-muted-foreground">
                      <Paperclip className="h-3.5 w-3.5" />
                    </Button>
                    <Button type="button" size="icon" variant="ghost" className="h-7 w-7 text-muted-foreground">
                      <ImageIcon className="h-3.5 w-3.5" />
                    </Button>
                    <Badge variant="secondary" className="ml-2 rounded-full text-[10px]">GPT-4o</Badge>
                  </div>
                  <Button
                    type="submit"
                    size="sm"
                    disabled={!input.trim() || streaming}
                    className="rounded-full"
                  >
                    Send <Send className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
              <div className="mt-2 text-center text-[11px] text-muted-foreground">
                Lumen can make mistakes. Verify important info.
              </div>
            </form>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
