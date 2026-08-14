"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { nav, site } from "@/content";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function sectionHref(hash: string) {
    return onHome ? hash : `/${hash}`;
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function go(href: string) {
    setOpen(false);
    if (!onHome) {
      router.push(`/${href}`);
      return;
    }
    window.setTimeout(() => {
      document.body.style.overflow = "";
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 30);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-olive-deep focus:px-3 focus:py-2 focus:text-cream"
        >
          Ir para o conteúdo
        </a>

        <div
          className={`transition-colors duration-300 ${
            scrolled || open
              ? "border-b border-line bg-paper/90 backdrop-blur-md"
              : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8">
            <a href={onHome ? "#topo" : "/"} className="min-w-0">
              <p className="font-serif text-[1.15rem] leading-none tracking-tight text-ink">
                {site.name}
              </p>
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-ink-soft">
                {site.role}
              </p>
            </a>

            <nav
              className="hidden items-center gap-8 lg:flex"
              aria-label="Principal"
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={sectionHref(item.href)}
                  className="text-[0.82rem] uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <WhatsAppLink
                place="header"
                className="inline-flex items-center rounded-full bg-olive-deep px-4 py-2 text-[0.78rem] uppercase tracking-[0.16em] text-cream transition-colors hover:bg-olive"
              >
                Agendar
              </WhatsAppLink>
            </nav>

            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">
                {open ? "Fechar menu" : "Abrir menu"}
              </span>
              <span
                className={`absolute h-px w-5 bg-ink transition-transform ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-ink transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-ink transition-transform ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id="menu-mobile"
          className="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 overflow-y-auto bg-paper lg:hidden"
        >
          <nav
            className="mx-auto flex min-h-full max-w-6xl flex-col gap-1 px-5 py-8"
            aria-label="Mobile"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={sectionHref(item.href)}
                onClick={(event) => {
                  event.preventDefault();
                  go(item.href);
                }}
                className="py-3 font-serif text-3xl text-ink"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppLink
              place="header-mobile"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-olive-deep px-5 py-3 text-sm uppercase tracking-[0.16em] text-cream"
            >
              Agendar uma conversa
            </WhatsAppLink>
          </nav>
        </div>
      ) : null}
    </>
  );
}
