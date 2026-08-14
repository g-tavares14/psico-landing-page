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

## Publicar

O projeto é Next.js e sobe direto na Vercel. Também funciona em qualquer host Node com `npm run build` e `npm start`.
