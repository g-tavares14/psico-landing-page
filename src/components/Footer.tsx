import { footer, instagramHref, site } from "@/content";

export function Footer() {
  const instagram = instagramHref();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-olive-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-3xl tracking-tight">{site.name}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-cream/70">
            {site.role} · {site.formation}
          </p>
          <p className="mt-4 text-sm text-cream/75">{site.crp}</p>
        </div>

        <div className="space-y-3 text-sm text-cream/80">
          {site.email ? (
            <p>
              <a className="hover:text-cream" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          ) : null}
          {instagram ? (
            <p>
              <a
                className="hover:text-cream"
                href={instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram {site.instagram}
              </a>
            </p>
          ) : null}
          <p>
            <a className="hover:text-cream" href="#contato">
              Contato
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-3 border-t border-white/10 px-5 py-8 text-xs leading-relaxed text-cream/55 sm:px-8">
        <p>{footer.legal}</p>
        <p>{footer.privacy}</p>
        <p className="pt-2">© {year} {site.name}</p>
      </div>
    </footer>
  );
}
