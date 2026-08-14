"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import {
  applyConsent,
  clearGoogleCookies,
  getServerConsent,
  readConsent,
  subscribeConsent,
  writeConsent,
  type ConsentDecision,
} from "@/lib/consent";

type ConsentContextValue = {
  ready: boolean;
  decision: ConsentDecision | null;
  bannerOpen: boolean;
  acceptAnalytics: () => void;
  rejectOptional: () => void;
  openBanner: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

function subscribeMounted() {
  return () => {};
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const ready = useSyncExternalStore(subscribeMounted, () => true, () => false);
  const decision = useSyncExternalStore(subscribeConsent, readConsent, getServerConsent);
  const [bannerForced, setBannerForced] = useState(false);

  useEffect(() => {
    if (decision) applyConsent(decision.analytics);
  }, [decision]);

  const acceptAnalytics = useCallback(() => {
    writeConsent(true);
    applyConsent(true);
    setBannerForced(false);
  }, []);

  const rejectOptional = useCallback(() => {
    writeConsent(false);
    applyConsent(false);
    clearGoogleCookies();
    setBannerForced(false);
  }, []);

  const openBanner = useCallback(() => {
    setBannerForced(true);
  }, []);

  const value = useMemo(
    () => ({
      ready,
      decision,
      bannerOpen: ready && (bannerForced || decision === null),
      acceptAnalytics,
      rejectOptional,
      openBanner,
    }),
    [ready, decision, bannerForced, acceptAnalytics, rejectOptional, openBanner],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent precisa estar dentro de ConsentProvider");
  }
  return ctx;
}
