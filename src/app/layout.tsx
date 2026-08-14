import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Outfit } from "next/font/google";
import Script from "next/script";
import { ConsentProvider } from "@/components/ConsentProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalyticsGate } from "@/components/GoogleAnalyticsGate";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/content";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const title = `${site.name} | ${site.role}`;
const description = `${site.role} ${site.formation.toLowerCase()}. ${site.modality}. Acompanhamento em Terapia Cognitivo-Comportamental.`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "psicóloga",
    "psicologia",
    "TCC",
    "terapia cognitivo-comportamental",
    "Beatriz Meirelles",
    "atendimento online",
    "ansiedade",
  ],
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Script id="consent-default" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});`}
        </Script>
        <ConsentProvider>
          {children}
          <WhatsAppButton />
          <CookieConsent />
          <GoogleAnalyticsGate />
          <Analytics />
        </ConsentProvider>
      </body>
    </html>
  );
}
