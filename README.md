# Beatriz Meirelles — landing page

Site da psicóloga Beatriz Meirelles, em pós-graduação em Terapia Cognitivo-Comportamental.

## Como personalizar

Tudo o que é da Beatriz fica em [`src/content.ts`](src/content.ts):

- CRP
- WhatsApp (somente números, com DDI + DDD — ex.: `5511999999999`)
- Instagram
- E-mail
- Cidade
- Foto (`public/images/beatriz.jpg` e o caminho no campo `portrait`)

A foto gerada no hero é um still botânico. Quando tiver o retrato dela, basta apontar `portrait` para o arquivo.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Analytics

Dois caminhos, lado a lado:

- **Vercel Web Analytics** — sem cookies. Depois do deploy: painel do projeto → **Analytics → Enable**.
- **Google Analytics 4** (e, depois, o Google Ads) — só carrega se a visitante aceitar o banner.

Para o Google, copie [`.env.example`](.env.example) para `.env.local` e cole o ID `G-XXXXXXXX` em `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Na Vercel, a mesma variável no painel, depois um redeploy.

Sem o ID `G-`, o site e o banner funcionam; a tag do Google simplesmente não entra. Clique em Agendar / WhatsApp vira o evento `generate_lead` no GA4 — é esse evento que se importa como conversão no Google Ads.

## Publicar

O projeto é Next.js e sobe direto na Vercel. Também funciona em qualquer host Node com `npm run build` e `npm start`.
