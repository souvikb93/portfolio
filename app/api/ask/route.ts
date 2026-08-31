import { NextRequest, NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/data/persona";

// Proxies the "Ask Souvik" chat to Groq. Key stays server-side (env var).
export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "GROQ_API_KEY is not set" },
      { status: 500 },
    );
  }

  let messages: { role: string; content: string }[];
  try {
    ({ messages } = await req.json());
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  if (!Array.isArray(messages)) {
    return NextResponse.json({ error: "messages must be an array" }, { status: 400 });
  }

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      // The Framer component defaulted to llama-3.3-70b-versatile, which this
      // Groq account cannot access. Override with GROQ_MODEL if that changes.
      model: process.env.GROQ_MODEL ?? "openai/gpt-oss-120b",
      temperature: 0.7,
      max_tokens: 500,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.slice(-10),
      ],
    }),
  });

  if (!res.ok) {
    // Pass the upstream status through so the client can tell rate limiting
    // (429) apart from an auth problem (401/403) and word the reply properly.
    const detail = await res.text();
    return NextResponse.json(
      { error: "Upstream error", detail: detail.slice(0, 200) },
      { status: res.status === 429 ? 429 : res.status === 401 || res.status === 403 ? res.status : 502 },
    );
  }

  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content ?? "Honestly not sure on that one.";
  return NextResponse.json({ reply });
}
