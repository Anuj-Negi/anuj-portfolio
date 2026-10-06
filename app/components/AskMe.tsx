"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/constants";

export function AskMe() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const selectedItem = FAQ_ITEMS.find((item) => item.key === selectedKey);

  return (
    <section id="ask" className="py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <h2 className="mb-5 text-[clamp(34px,5vw,52px)] font-bold leading-tight">
          Ask me anything
        </h2>
        <div className="my-4 flex flex-wrap gap-2.5" role="group" aria-label="Questions">
          {FAQ_ITEMS.map((item) => {
            const isSelected = selectedKey === item.key;
            return (
              <button
                key={item.key}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedKey(item.key)}
                className={`cursor-pointer rounded-full border px-4.5 py-2.5 text-[15px] font-medium transition-all ${
                  isSelected
                    ? "border-teal bg-teal text-white shadow-xs"
                    : "border-line bg-card text-ink hover:border-mute/50 hover:bg-card/80"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <div
          id="ans"
          aria-live="polite"
          className="mt-5 min-h-[72px] rounded-[18px] border border-line bg-card p-5 text-[15px] sm:text-base leading-relaxed text-mute shadow-xs transition-colors"
        >
          {selectedItem ? selectedItem.answer : "Pick a question to see my answer."}
        </div>
      </div>
    </section>
  );
}
