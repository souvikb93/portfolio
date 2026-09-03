"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import styles from "./AskSouvik.module.css";

type Msg = { sender: "ai" | "user"; text: string };

const GREETING = "Hey, I'm Souvik 👋";
const SUB_GREETING =
  "Ask me anything about my work, experience, or projects.";
const PLACEHOLDER = "What are you looking for?";
const PILL_LABEL = "Ask Souvik";
const SUGGESTED = [
  "What have you been working on lately?",
  "How do you use AI in your design process?",
];

const IDLE_COLLAPSE_MS = 12_000;
const SCROLL_TRIGGER_PERCENT = 80;
const SESSION_KEY = "askSouvik:autoExpanded";
const ANIM = { duration: 0.5, ease: [0.32, 0.72, 0, 1] as const };

// Renders <a href="...">text</a> that the model may return, as real links.
// Everything else is plain text — we never inject raw HTML.
function MessageContent({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const linkRegex = /<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a
        key={match.index}
        href={match[1]}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {match[2]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

function TypingDots() {
  return (
    <div className={styles.typing}>
      {[0, 0.15, 0.3].map((delay) => (
        <motion.span
          key={delay}
          className={styles.dot}
          animate={{ opacity: [0.2, 1, 0.2], y: [0, -2, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function AskSouvik() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const atBottomRef = useRef(true);

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [showGreeting, setShowGreeting] = useState(true);
  const [greetingTyping, setGreetingTyping] = useState(false);
  const [usedPrompts, setUsedPrompts] = useState<Set<string>>(new Set());
  const [showChips, setShowChips] = useState(false);

  const remaining = SUGGESTED.filter((p) => !usedPrompts.has(p));

  // Auto-open once per session after scrolling past 80% of the page.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") return;
    } catch {
      /* sessionStorage unavailable — just skip the once-per-session guard */
    }
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      if ((window.scrollY / total) * 100 >= SCROLL_TRIGGER_PERCENT) {
        setOpen(true);
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          /* ignore */
        }
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Closing leaves the greeting in place: live keeps this copy rendered rather
  // than replaying a typing beat on each open.
  const close = useCallback(() => {
    setOpen(false);
    setGreetingTyping(false);
  }, []);

  // Greeting sequence: a beat of typing, then the two opening bubbles.
  useEffect(() => {
    if (!open || messages.length > 0 || showGreeting) return;
    const t1 = window.setTimeout(() => setGreetingTyping(true), 200);
    const t2 = window.setTimeout(() => {
      setGreetingTyping(false);
      setShowGreeting(true);
    }, 2000);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [open, messages.length, showGreeting]);

  // Collapse again if it opened on its own and nobody engaged.
  useEffect(() => {
    if (!open || hasInteracted) return;
    const t = window.setTimeout(close, IDLE_COLLAPSE_MS);
    return () => window.clearTimeout(t);
  }, [open, hasInteracted, close]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (open && wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open, close]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Only auto-scroll if the reader was already at the bottom.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      atBottomRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el && atBottomRef.current) el.scrollTop = el.scrollHeight;
  }, [messages, isThinking, showGreeting, greetingTyping, showChips]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 250);
    return () => window.clearTimeout(t);
  }, [open]);

  const send = useCallback(
    async (raw: string) => {
      const text = raw.trim();
      if (!text || isThinking) return;
      setHasInteracted(true);
      setShowChips(false);
      const next: Msg[] = [...messages, { sender: "user", text }];
      setMessages(next);
      setInput("");
      setIsThinking(true);
      try {
        const res = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: next.map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text,
            })),
          }),
        });
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: data.reply ?? "(I went quiet for a sec — try asking again?)" },
        ]);
      } catch (err) {
        const code = err instanceof Error ? err.message : "";
        let friendly = "Hmm, something glitched on my end. Mind trying again?";
        if (code === "429") {
          friendly = "Getting a lot of messages right now — give me a sec and try again 🙏";
        } else if (code === "401" || code === "403") {
          friendly = "Looks like my API key isn't quite right. Souvik needs to check the settings.";
        }
        setMessages((prev) => [...prev, { sender: "ai", text: friendly }]);
      } finally {
        setIsThinking(false);
        setShowChips(true);
      }
    },
    [messages, isThinking],
  );

  const chipRow = (delay: number) =>
    remaining.length > 0 && (
      <motion.div
        className={styles.chips}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay }}
      >
        {remaining.map((p) => (
          <button
            key={p}
            type="button"
            className={styles.chip}
            onClick={() => {
              setUsedPrompts((prev) => new Set([...prev, p]));
              send(p);
            }}
          >
            {p}
          </button>
        ))}
      </motion.div>
    );

  return (
    <div className={styles.root} onMouseDown={() => setHasInteracted(true)}>
      <motion.div
        ref={wrapperRef}
        className={styles.shell}
        data-open={open}
        initial={false}
        animate={{
          width: open ? 380 : 132,
          height: open ? 500 : 44,
          borderRadius: open ? 18 : 22,
        }}
        transition={ANIM}
      >
        {/* Collapsed pill */}
        <motion.button
          type="button"
          className={styles.pill}
          onClick={() => {
            setOpen(true);
            setHasInteracted(true);
          }}
          initial={false}
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.2, delay: open ? 0 : 0.25 }}
          aria-hidden={open}
          tabIndex={open ? -1 : 0}
        >
          <span className={styles.orb} data-size="sm" />
          <span>{PILL_LABEL}</span>
        </motion.button>

        {/* Expanded chat */}
        <motion.div
          className={styles.chat}
          initial={false}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.2, delay: open ? 0.25 : 0 }}
        >
          <div className={styles.header}>
            <span className={styles.orb} data-size="md" />
            <span className={styles.headerName}>Souvik</span>
            <button
              type="button"
              className={styles.close}
              onClick={close}
              aria-label="Close"
              tabIndex={open ? 0 : -1}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 3L11 11M11 3L3 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className={styles.messages} ref={scrollRef}>
            {greetingTyping && <TypingDots />}

            {showGreeting && (
              <>
                <motion.div
                  className={styles.bubble}
                  data-from="ai"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {GREETING}
                </motion.div>
                <motion.div
                  className={styles.bubble}
                  data-from="ai"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  {SUB_GREETING}
                </motion.div>
                {messages.length === 0 && chipRow(0.3)}
              </>
            )}

            {messages.map((m, i) => {
              const isLastAi = i === messages.length - 1 && m.sender === "ai";
              return (
                <div key={`${m.sender}-${i}`}>
                  <motion.div
                    className={styles.bubble}
                    data-from={m.sender}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                  >
                    {m.sender === "ai" ? <MessageContent text={m.text} /> : m.text}
                  </motion.div>
                  {isLastAi && showChips && !isThinking && chipRow(0.1)}
                </div>
              );
            })}

            {isThinking && <TypingDots />}
          </div>

          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              ref={inputRef}
              className={styles.input}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setHasInteracted(true);
              }}
              onFocus={() => setHasInteracted(true)}
              placeholder={PLACEHOLDER}
              disabled={isThinking}
              tabIndex={open ? 0 : -1}
            />
            <button
              type="submit"
              className={styles.send}
              disabled={!input.trim() || isThinking}
              aria-label="Send"
              tabIndex={open ? 0 : -1}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1.5 7L12.5 7M12.5 7L7.5 2M12.5 7L7.5 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
