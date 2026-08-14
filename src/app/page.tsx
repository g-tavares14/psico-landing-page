import Image from "next/image";
import { FaqList } from "@/components/FaqList";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  about,
  approach,
  faq,
  hero,
  instagramHref,
  invite,
  locationLine,
  paths,
  process,
  site,
  whatsappHref,
} from "@/content";

export default function Home() {
  const wa = whatsappHref();
  const instagram = instagramHref();
  const heroImage = site.portrait || "/images/hero.jpg";
  const hasWhatsapp = Boolean(site.whatsapp);

  return (
    <>
      <JsonLd />
      <Header />

      <main id="conteudo" className="flex-1">
        <section
          id="topo"
          className="relative overflow-hidden pb-20 pt-28 lg:pb-28 lg:pt-36"
        >
          <div className="mx-auto grid max-w-6xl items-end gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-olive">
                {hero.eyebrow}
              </p>
              <h1 className="mt-5 max-w-[11ch] font-serif text-[3.15rem] font-light leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-[5.15rem]">
                {hero.title}
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
                {hero.lede}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={wa}
                  className="inline-flex items-center rounded-full bg-olive-deep px-6 py-3.5 text-sm uppercase tracking-[0.16em] text-cream transition-colors hover:bg-olive"
                >
                  {invite.cta}
                </a>
                <a
                  href="#sobre"
                  className="inline-flex items-center px-2 py-3 text-sm uppercase tracking-[0.16em] text-ink-soft underline decoration-line underline-offset-8 transition-colors hover:text-ink"
                >
                  Conhecer o trabalho
                </a>
              </div>
              <p className="mt-10 text-xs uppercase tracking-[0.2em] text-ink-soft">
                {locationLine()}
                {site.crp ? ` · ${site.crp}` : ""}
              </p>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden bg-paper-deep">
                <Image
                  src={heroImage}
                  alt={
                    site.portrait
                      ? `${site.name}, psicóloga`
                      : "Natureza-morta com ramo de oliveira e cerâmica sobre linho"
                  }
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 max-w-[16rem] text-[0.7rem] uppercase leading-relaxed tracking-[0.18em] text-ink-soft">
                Um consultório quieto — feito de escuta, e não de pressa.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="rule" />
        </div>

        <section id="sobre" className="section-anchor py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-olive">
                {about.kicker}
              </p>
              <h2 className="mt-4 font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                {about.title}
              </h2>
              <div className="relative mt-10 aspect-[4/5] overflow-hidden bg-paper-deep lg:mt-14">
                <Image
                  src="/images/about.jpg"
                  alt="Mesa iluminada pela manhã, com caderno, xícara e um ramo de oliveira"
                  fill
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
              <div className="space-y-6 text-[1.08rem] leading-[1.75] text-ink-soft">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <blockquote className="mt-12 border-l border-clay pl-6 font-serif text-2xl font-light italic leading-snug text-ink sm:text-[1.85rem]">
                {about.quote}
              </blockquote>
            </div>
          </div>
        </section>

        <section
          id="abordagem"
          className="section-anchor bg-olive-deep py-20 text-cream lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-cream/60">
              {approach.kicker}
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              {approach.title}
            </h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-12">
              <p className="text-[1.08rem] leading-[1.75] text-cream/80 lg:col-span-6">
                {approach.body}
              </p>
              <p className="text-[1.08rem] leading-[1.75] text-cream/80 lg:col-span-5 lg:col-start-8">
                {approach.closer}
              </p>
            </div>

            <ol className="mt-16 grid gap-px bg-white/10 sm:grid-cols-3">
              {approach.pillars.map((pillar, index) => (
                <li key={pillar.name} className="bg-olive-deep px-0 py-8 sm:px-8 sm:py-10">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-cream/50">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl font-light">{pillar.name}</h3>
                  <p className="mt-4 max-w-xs text-[0.98rem] leading-relaxed text-cream/75">
                    {pillar.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="caminhos" className="section-anchor py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-olive">
                  {paths.kicker}
                </p>
                <h2 className="mt-4 font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                  {paths.title}
                </h2>
              </div>
              <p className="text-[1.08rem] leading-[1.75] text-ink-soft lg:col-span-6 lg:col-start-7 lg:pt-10">
                {paths.intro}
              </p>
            </div>

            <ol className="mt-14 divide-y divide-line border-y border-line">
              {paths.items.map((item, index) => (
                <li
                  key={item.title}
                  className="grid gap-3 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <span className="font-serif text-xl text-clay sm:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl font-light tracking-tight sm:col-span-5">
                    {item.title}
                  </h3>
                  <p className="text-[1.02rem] leading-relaxed text-ink-soft sm:col-span-6">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-soft">
              {paths.note}
            </p>
          </div>
        </section>

        <section
          id="como-funciona"
          className="section-anchor bg-paper-deep/60 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-olive">
              {process.kicker}
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              {process.title}
            </h2>

            <div className="mt-14 grid gap-12 lg:grid-cols-12">
              <ol className="space-y-12 lg:col-span-7">
                {process.steps.map((step) => (
                  <li key={step.num} className="grid grid-cols-[auto_1fr] gap-6">
                    <span className="font-serif text-4xl font-light text-olive/80">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl font-light">{step.title}</h3>
                      <p className="mt-3 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="relative aspect-[3/4] overflow-hidden bg-paper lg:col-span-4 lg:col-start-9">
                <Image
                  src="/images/botanical.jpg"
                  alt="Folhas de oliveira sobre papel artesanal"
                  fill
                  sizes="(min-width: 1024px) 28vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="border border-line bg-cream px-6 py-14 sm:px-12 lg:px-16">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-olive">
              {invite.kicker}
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              {invite.title}
            </h2>
            <p className="mt-6 max-w-xl text-[1.08rem] leading-relaxed text-ink-soft">
              {invite.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={wa}
                className="inline-flex items-center rounded-full bg-clay px-6 py-3.5 text-sm uppercase tracking-[0.16em] text-cream transition-colors hover:bg-[#9e5538]"
              >
                {invite.cta}
              </a>
              <a
                href="#duvidas"
                className="text-sm uppercase tracking-[0.16em] text-ink-soft underline decoration-line underline-offset-8 hover:text-ink"
              >
                {invite.secondary}
              </a>
            </div>
          </div>
          </div>
        </section>

        <section id="duvidas" className="section-anchor pb-20 lg:pb-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-olive">
              {faq.kicker}
            </p>
            <h2 className="mt-4 mb-10 font-serif text-4xl font-light tracking-tight sm:text-5xl">
              {faq.title}
            </h2>
            <FaqList />
          </div>
        </section>

        <section
          id="contato"
          className="section-anchor border-t border-line bg-paper-deep/50 py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-olive">
                Contato
              </p>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-tight sm:text-5xl">
                Vamos conversar.
              </h2>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">
                {hasWhatsapp
                  ? "O caminho mais direto é o WhatsApp. O retorno é feito com calma, em horário comercial."
                  : "Escreva quando quiser. O retorno é feito com calma, em horário comercial."}
              </p>
            </div>

            <div className="space-y-6 lg:col-span-6 lg:col-start-7">
              {hasWhatsapp ? (
                <ContactRow
                  label="WhatsApp"
                  value="(11) 95320-6800"
                  href={wa}
                />
              ) : null}
              {instagram ? (
                <ContactRow
                  label="Instagram"
                  value={`@${site.instagram.replace(/^@/, "")}`}
                  href={instagram}
                />
              ) : null}
              {site.email ? (
                <ContactRow
                  label="E-mail"
                  value={site.email}
                  href={`mailto:${site.email}`}
                />
              ) : null}
              <ContactRow label="CRP" value={site.crp} />
              <ContactRow label="Modalidade" value={locationLine()} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-baseline justify-between gap-6 border-b border-line py-4">
      <span className="shrink-0 text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">
        {label}
      </span>
      <span className="text-right font-serif text-xl font-light">{value}</span>
    </div>
  );

  if (!href) return inner;

  return (
    <a href={href} className="block transition-colors hover:text-olive" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {inner}
    </a>
  );
}
