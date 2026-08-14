import { locationLine, site } from "@/content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: `${site.role}. ${site.formation}. ${locationLine()}.`,
    areaServed: "BR",
    availableLanguage: "pt-BR",
    founder: {
      "@type": "Person",
      name: site.name,
      jobTitle: site.role,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
