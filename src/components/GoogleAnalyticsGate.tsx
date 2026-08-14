"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useConsent } from "@/components/ConsentProvider";

export function GoogleAnalyticsGate() {
  const { ready, decision } = useConsent();
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!ready || !decision?.analytics || !gaId) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
