"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./AskSouvik.module.css";

type Msg = { role: "user" | "assistant"; content: string };

export function AskSouvik() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [msgs, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next: Msg[] = [...msgs, { role: "user", content: text }];
    setMsgs(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMsgs([
        ...next,
        {
          role: "assistant",
          content: data.reply ?? "Something went wrong on my end.",
        },
      ]);
    } catch {
      setMsgs([...next, { role: "assistant", content: "Something went wrong on my end." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.root}>
      {open && (
        <div className={styles.panel}>
          <div className={styles.head}>
            <span>Hey, I&apos;m Souvik 👋</span>
            <button onClick={() => setOpen(false)} aria-label="Close">
              ✕
            </button>
          </div>
          <div className={styles.body} ref={bodyRef}>
            {msgs.length === 0 && (
              <p className={styles.hint}>
                Ask me anything about my work, experience, or projects.
              </p>
            )}
            {msgs.map((m, i) => (
              <div
                key={i}
                className={styles.msg}
                data-role={m.role}
                dangerouslySetInnerHTML={{ __html: m.content }}
              />
            ))}
            {loading && <div className={styles.msg} data-role="assistant">…</div>}
          </div>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question"
            />
            <button type="submit" disabled={loading}>
              →
            </button>
          </form>
        </div>
      )}
      {!open && (
        <button className={styles.pill} onClick={() => setOpen(true)}>
          Ask Souvik
        </button>
      )}
    </div>
  );
}
