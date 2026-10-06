"use client";

import { useState } from "react";

const answers = {
  a: "Shipping user-facing products end to end: scoping a feature, building it across web and mobile, and getting it released with solid CI/CD.",
  b: "Yes. I build web apps with React, Next.js, and TypeScript, and contribute to Python/Django backends and APIs.",
  c: "Yes. I was Team Lead for React Native at Tycho Technologies, running reviews and delivery across client projects.",
  d: "I build TV and OTT apps for Android TV, Fire TV, and Apple TV, alongside my mobile and web work.",
  e: "I work with Claude Code, Cursor, and the OpenAI and Anthropic APIs, and I am building more projects around prompts, retrieval, and evals.",
} as const;

const questions = [
  { key: "a", label: "What do you do best?" },
  { key: "b", label: "Do you do web too?" },
  { key: "c", label: "Have you led teams?" },
  { key: "d", label: "TV apps?" },
  { key: "e", label: "How do you use AI?" },
] as const;

type QuestionKey = (typeof questions)[number]["key"];

export function AskMe() {
  const [selected, setSelected] = useState<QuestionKey | null>(null);

  return (
    <section id="ask">
      <div className="w">
        <h2>Ask me anything</h2>
        <div className="qs" role="group" aria-label="Questions">
          {questions.map((question) => (
            <button
              key={question.key}
              type="button"
              data-k={question.key}
              aria-pressed={selected === question.key}
              onClick={() => setSelected(question.key)}
            >
              {question.label}
            </button>
          ))}
        </div>
        <div id="ans" aria-live="polite">
          {selected ? answers[selected] : "Pick a question to see my answer."}
        </div>
      </div>
    </section>
  );
}
