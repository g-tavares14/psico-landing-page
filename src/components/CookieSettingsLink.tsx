"use client";

import { useConsent } from "@/components/ConsentProvider";

export function CookieSettingsLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { openBanner } = useConsent();

  return (
    <button
      type="button"
      className={className}
      onClick={openBanner}
      aria-label="Abrir preferências de cookies"
    >
      {children}
    </button>
  );
}
