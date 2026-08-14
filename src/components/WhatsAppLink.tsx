"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { whatsappHref } from "@/content";

export function trackWhatsAppClick(place: string) {
  sendGAEvent("event", "generate_lead", {
    method: "whatsapp",
    place,
  });
}

export function WhatsAppLink({
  place,
  className,
  children,
  "aria-label": ariaLabel,
  onClick,
}: {
  place: string;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        trackWhatsAppClick(place);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
