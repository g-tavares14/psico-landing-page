export const CONSENT_STORAGE_KEY = "bm-cookie-consent";
export const CONSENT_CHANGE_EVENT = "bm-consent-change";
export const CONSENT_VERSION = 2;

export type ConsentDecision = {
  version: number;
  analytics: boolean;
  updatedAt: string;
};

const DENIED = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
} as const;

const GRANTED = {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "granted",
} as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }
}

export function applyConsent(analytics: boolean) {
  ensureGtag();
  window.gtag?.("consent", "update", analytics ? GRANTED : DENIED);
}

let cachedRaw: string | null | undefined;
let cachedDecision: ConsentDecision | null = null;

export function getServerConsent(): ConsentDecision | null {
  return null;
}

export function readConsent(): ConsentDecision | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (raw === cachedRaw) return cachedDecision;
    cachedRaw = raw;
    if (!raw) {
      cachedDecision = null;
      return null;
    }
    const parsed = JSON.parse(raw) as ConsentDecision;
    if (parsed.version !== CONSENT_VERSION || typeof parsed.analytics !== "boolean") {
      cachedDecision = null;
      return null;
    }
    cachedDecision = parsed;
    return parsed;
  } catch {
    cachedRaw = undefined;
    cachedDecision = null;
    return null;
  }
}

export function writeConsent(analytics: boolean): ConsentDecision {
  const decision: ConsentDecision = {
    version: CONSENT_VERSION,
    analytics,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(decision));
  cachedRaw = JSON.stringify(decision);
  cachedDecision = decision;
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
  return decision;
}

export function subscribeConsent(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
  };
}

export function clearGoogleCookies() {
  const names = document.cookie.split(";").map((part) => part.split("=")[0]?.trim());
  for (const name of names) {
    if (!name) continue;
    if (
      name === "_ga" ||
      name === "_gid" ||
      name === "_gat" ||
      name === "_gcl_au" ||
      name.startsWith("_ga_") ||
      name.startsWith("_gcl_")
    ) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    }
  }
}
