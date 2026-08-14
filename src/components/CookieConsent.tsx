"use client";

import Link from "next/link";
import { cookies } from "@/content";
import { useConsent } from "@/components/ConsentProvider";

export function CookieConsent() {
  const { ready, bannerOpen, acceptAnalytics, rejectOptional } = useConsent();

  if (!ready || !bannerOpen) return null;

  return (
    <aside
      role="region"
      aria-label="Preferências de cookies"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-line bg-cream/95 px-5 py-5 shadow-[0_-12px_40px_rgba(42,36,30,0.1)] backdrop-blur-md sm:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-olive">
            {cookies.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            {cookies.body}{" "}
            <Link
              href="/privacidade"
              className="text-ink underline decoration-line underline-offset-4 hover:text-olive"
            >
              {cookies.policy}
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={rejectOptional}
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-[0.78rem] uppercase tracking-[0.16em] text-cream transition-colors hover:bg-olive-deep"
          >
            {cookies.reject}
          </button>
          <button
            type="button"
            onClick={acceptAnalytics}
            className="inline-flex items-center justify-center rounded-full bg-olive-deep px-5 py-3 text-[0.78rem] uppercase tracking-[0.16em] text-cream transition-colors hover:bg-olive"
          >
            {cookies.accept}
          </button>
        </div>
      </div>
    </aside>
  );
}
