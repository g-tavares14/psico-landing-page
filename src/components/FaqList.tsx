"use client";

import { faq } from "@/content";

export function FaqList() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faq.items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer items-start justify-between gap-6 py-6">
            <span className="font-serif text-xl leading-snug text-ink sm:text-[1.35rem]">
              {item.q}
            </span>
            <span
              aria-hidden
              className="mt-2 inline-block h-3 w-3 shrink-0 rotate-45 border-r border-b border-olive transition-transform group-open:-rotate-[135deg]"
            />
          </summary>
          <p className="max-w-2xl pb-7 text-[1.02rem] leading-relaxed text-ink-soft">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
