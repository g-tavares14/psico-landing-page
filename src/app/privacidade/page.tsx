import type { Metadata } from "next";
import Link from "next/link";
import { CookieSettingsLink } from "@/components/CookieSettingsLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cookies, privacy, site } from "@/content";

export const metadata: Metadata = {
  title: privacy.title,
  description: `Como ${site.name} trata dados pessoais neste site, no WhatsApp e nas medidas de uso.`,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="conteudo" className="flex-1 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <article className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-olive">
            {privacy.kicker}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            {privacy.title}
          </h1>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-ink-soft">
            {privacy.updatedLabel}: {privacy.updated}
          </p>
          <p className="mt-10 max-w-2xl text-[1.08rem] leading-[1.75] text-ink-soft">
            {privacy.intro}
          </p>

          <div className="mt-16 space-y-14">
            {privacy.sections.map((section) => (
              <section key={section.title} className="max-w-2xl">
                <h2 className="font-serif text-2xl font-light tracking-tight sm:text-[1.85rem]">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-[1.02rem] leading-[1.75] text-ink-soft">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-16 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Para mudar os cookies do Google agora, use{" "}
            <CookieSettingsLink className="text-ink underline decoration-line underline-offset-4 hover:text-olive">
              {cookies.settings}
            </CookieSettingsLink>
            . Para voltar ao site,{" "}
            <Link
              href="/"
              className="text-ink underline decoration-line underline-offset-4 hover:text-olive"
            >
              abra a página inicial
            </Link>
            .
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
