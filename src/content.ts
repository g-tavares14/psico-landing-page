/**
 * Tudo o que é da Beatriz fica aqui.
 * Troque CRP, WhatsApp, Instagram e a foto sem mexer no restante do site.
 *
 * WhatsApp: só números, com DDI + DDD. Ex.: 5511999999999
 * Foto: coloque o arquivo em public/images/beatriz.jpg e aponte o caminho abaixo.
 */
export const site = {
  name: "Beatriz Meirelles",
  firstName: "Beatriz",
  role: "Psicóloga",
  formation: "Pós-graduanda em Terapia Cognitivo-Comportamental",
  crp: "CRP 06/237136",
  modality: "Atendimento online e presencial",
  city: "Mogi das Cruzes",
  whatsapp: "5511953206800",
  instagram: "beatrizmeirelles.psico",
  email: "",
  portrait: "",
  whatsappMessage:
    "Olá, Beatriz. Vi seu site e gostaria de agendar uma conversa inicial.",
};

export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#caminhos", label: "Caminhos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
  eyebrow: "Psicóloga · TCC",
  title: "Psicoterapia para se entender, não para se julgar.",
  lede: "Um espaço para entender o que você sente, reconhecer padrões e construir formas mais saudáveis de lidar com aquilo que tem pesado.",
  support:
    "Acompanhamento psicológico para adultos que lidam com ansiedade, autocobrança, insegurança, pensamentos que não desligam, relacionamentos e os desafios da vida adulta.",
  cta: "Quero saber sobre a terapia",
  secondary: "Conhecer o trabalho",
};

export const about = {
  kicker: "Sobre",
  title: "Talvez você não precise se cobrar mais. Talvez precise se compreender melhor.",
  paragraphs: [
    "Sou Beatriz Meirelles, psicóloga — CRP 06/237136 — e pós-graduanda em Terapia Cognitivo-Comportamental.",
    "Meu trabalho é voltado principalmente para adultos que sentem que estão sempre tentando dar conta de tudo, mas acabam presos em ansiedade, autocobrança, culpa, comparação, inseguranças ou padrões que se repetem.",
    "Acredito em uma terapia que une acolhimento e método.",
    "Um espaço em que você possa falar sobre o que é difícil sem precisar ter todas as respostas — e, ao mesmo tempo, compreender melhor seus pensamentos, emoções, comportamentos e relações.",
    "Não se trata de pensar positivo ou simplesmente “parar de pensar demais”.",
    "Trata-se de entender o que acontece com você e construir, aos poucos, novas possibilidades de responder ao que vive.",
  ],
  quote: "Psicoterapia para se entender, não para se julgar.",
};

export const approach = {
  kicker: "Abordagem",
  title: "TCC: entender o que acontece entre o que você pensa, sente e faz.",
  body: [
    "A Terapia Cognitivo-Comportamental parte da compreensão de que pensamentos, emoções e comportamentos estão conectados.",
    "Às vezes, um pensamento automático como “eu não vou dar conta”, “vou decepcionar alguém” ou “não sou suficiente” pode influenciar a forma como você se sente, se relaciona e toma decisões — mesmo sem perceber.",
  ],
  closer: [
    "Na terapia, investigamos esses ciclos juntos.",
    "Sem julgamentos e sem fórmulas prontas.",
    "Podemos utilizar perguntas, registros, reflexões e estratégias práticas quando fizer sentido para você.",
    "O objetivo não é transformar você em outra pessoa.",
    "É ajudá-la a se compreender melhor e ampliar suas possibilidades de escolha.",
  ],
  pillars: [
    {
      name: "Pensamentos",
      text: "Perceber pensamentos automáticos, preocupações e interpretações que aparecem no dia a dia.",
    },
    {
      name: "Emoções",
      text: "Aprender a reconhecer e lidar melhor com o que sente, sem precisar fugir ou se deixar levar completamente pela emoção.",
    },
    {
      name: "Comportamentos",
      text: "Entender padrões que se repetem e experimentar novas formas de agir, se posicionar e cuidar de si.",
    },
  ],
};

export const paths = {
  kicker: "Caminhos",
  title: "Talvez a terapia faça sentido para você se...",
  intro: "",
  items: [
    {
      title: "Ansiedade e uma mente que não desliga",
      text: "Preocupações constantes, antecipação do pior, dificuldade de descansar e aquela sensação de estar sempre pensando em alguma coisa.",
    },
    {
      title: "Autocobrança e sensação de nunca ser suficiente",
      text: "Exigência muito alta consigo, perfeccionismo, comparação e dificuldade de reconhecer o próprio esforço.",
    },
    {
      title: "Autoestima e insegurança",
      text: "Medo de errar, necessidade de aprovação, dúvidas constantes sobre si e dificuldade de reconhecer o próprio valor.",
    },
    {
      title: "Relacionamentos e limites",
      text: "Dificuldade de dizer não, medo de decepcionar, culpa ao se colocar em primeiro lugar ou padrões que acabam se repetindo nas relações.",
    },
    {
      title: "Pensar demais",
      text: "Repassar conversas, imaginar cenários, tentar encontrar uma resposta perfeita e perceber que pensar mais nem sempre traz mais clareza.",
    },
    {
      title: "Mudanças e vida adulta",
      text: "Trabalho, formação, relacionamentos, escolhas, responsabilidades e transições que fazem surgir a sensação de não saber exatamente como lidar com tudo.",
    },
  ],
  note: "A terapia não precisa começar apenas quando alguma coisa está insuportável. Ela também pode ser um espaço para compreender melhor como você tem vivido.",
};

export const process = {
  kicker: "Como funciona",
  title: "Um processo construído no seu ritmo.",
  intro: "Atendimento individual para adultos.",
  steps: [
    {
      num: "01",
      title: "Psicoterapia online",
      text: "Atendimento por videochamada, permitindo realizar as sessões de onde você estiver.",
    },
    {
      num: "02",
      title: "Atendimento presencial em Mogi das Cruzes – SP",
      text: "",
    },
    {
      num: "03",
      title: "Abordagem: Terapia Cognitivo-Comportamental",
      text: "",
    },
  ],
  note: [
    "Durante as primeiras sessões, conversamos sobre aquilo que trouxe você até a terapia, sua história e o que gostaria de compreender ou mudar.",
    "A partir daí, construímos juntas os objetivos do processo terapêutico.",
  ],
};

export const invite = {
  kicker: "Convite",
  title: "Se algo aqui fez sentido para você, podemos conversar.",
  body: [
    "Se quiser entender melhor como funciona o atendimento, valores, horários disponíveis ou tirar alguma dúvida antes de começar, pode falar comigo pelo WhatsApp.",
    "Sem formulário enorme e sem precisar chegar sabendo exatamente o que dizer.",
  ],
  cta: "Quero saber sobre a terapia",
  secondary: "Ver perguntas frequentes",
};

export const faq = {
  kicker: "Dúvidas",
  title: "Perguntas que costumam aparecer",
  items: [
    {
      q: "Como funciona o atendimento online?",
      a: "As sessões acontecem por videochamada, em um horário combinado. Você precisa de um lugar relativamente privativo e de uma conexão estável. Muita gente se surpreende com a profundidade possível mesmo à distância.",
    },
    {
      q: "Você atende em Mogi das Cruzes?",
      a: "Sim. Atendo presencialmente em Mogi das Cruzes e também online, por videochamada, de onde você estiver.",
    },
    {
      q: "Preciso ter um diagnóstico para começar?",
      a: "Não. Muita gente chega apenas com a sensação de que algo não vai bem — ansiedade, cansaço, um nó difícil de nomear. O trabalho começa aí, no que você traz.",
    },
    {
      q: "Qual a duração de cada sessão?",
      a: "Cinquenta minutos, em geral uma vez por semana. A frequência pode ser revista juntos, de acordo com o momento.",
    },
    {
      q: "Qual o valor da sessão?",
      a: "Converso sobre valores na primeira conversa, com transparência. Assim podemos pensar juntos no que é possível.",
    },
    {
      q: "Você atende convênio?",
      a: "O atendimento é particular. Se precisar, posso emitir recibo para reembolso, conforme as regras do seu plano.",
    },
    {
      q: "Você é recém-formada. Isso muda o acompanhamento?",
      a: "Estou no começo da prática e em formação continuada em TCC. Isso significa estudo atualizado, supervisão e um acompanhamento com tempo real de atenção. Se você preferir alguém com mais anos de consultório, podemos falar sobre isso com honestidade — sem constrangimento.",
    },
  ],
};

export const footer = {
  legal:
    "Este site apresenta o trabalho da psicóloga de forma informativa, em acordo com as orientações do Sistema Conselhos de Psicologia. Não substitui avaliação ou acompanhamento profissional. Não há promessa de resultado.",
  privacy:
    "Os dados de contato são usados só para retorno e agendamento.",
};

export const cookies = {
  title: "Cookies",
  body: "Uso cookies necessários para lembrar sua escolha e, só se você aceitar, cookies do Google (Analytics e anúncios) para entender o site e medir campanhas. A Vercel mede visitas sem cookie, com ou sem aceite. Recusar é tão simples quanto aceitar.",
  accept: "Aceitar cookies do Google",
  reject: "Recusar opcionais",
  policy: "Política de privacidade",
  settings: "Cookies",
};

export const contactNotice =
  "Ao abrir o WhatsApp, a conversa acontece na plataforma da Meta. Uso o que você escrever só para responder e agendar. Os detalhes estão na Política de privacidade.";

export const privacy = {
  title: "Política de privacidade",
  kicker: "Dados pessoais",
  updatedLabel: "Última atualização",
  updated: "14 de agosto de 2026",
  intro:
    "Este site apresenta o trabalho da psicóloga Beatriz Meirelles. Não há formulário nem cadastro aqui: o contato acontece no WhatsApp. Esta página explica quais dados entram em jogo, para quê e quais são os seus direitos — de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).",
  sections: [
    {
      title: "Quem é responsável pelo tratamento",
      paragraphs: [
        "A controladora é Beatriz Meirelles, psicóloga, CRP 06/237136, com atendimento online e presencial em Mogi das Cruzes (SP).",
        "Para exercer seus direitos ou tirar dúvida sobre esta política, escreva pelo WhatsApp informado no site. Esse é o canal oficial enquanto não houver um e-mail cadastrado.",
      ],
    },
    {
      title: "Que dados este site trata",
      paragraphs: [
        "O site em si não pede nome, e-mail ou telefone. Não há cadastro nem ficha de anamnese nesta página.",
        "Quando você clica em Agendar ou no botão do WhatsApp, o navegador abre o aplicativo ou o WhatsApp Web da Meta, com uma mensagem pronta. A partir daí, a conversa — e os dados que você enviar, como nome, número e o que escrever — acontece na plataforma da Meta. Eu uso o que você me conta só para responder, entender se o acompanhamento faz sentido e agendar.",
        "O Vercel Web Analytics registra, de forma agregada e sem cookies, páginas vistas, origem aproximada do acesso e tipo de dispositivo. Não identifica você pelo nome e não serve para te anunciar em outros sites.",
        "Se você aceitar os cookies do Google, o Google Analytics 4 e, quando houver campanha, o Google Ads registram páginas vistas, origem do acesso, tipo de dispositivo, identificadores de cookie e cliques no WhatsApp (para saber se o anúncio gerou contato). Sem o aceite, essas tags não são ativadas.",
        "A hospedagem (Vercel) pode registrar, por um período curto, dados de log como endereço IP, data e página acessada, para segurança e funcionamento do site.",
        "As fontes do site são carregadas pelo serviço de fontes do Google. Isso pode envolver o envio do seu endereço IP ao Google.",
      ],
    },
    {
      title: "Para que uso os dados e com que base legal",
      paragraphs: [
        "Contato e agendamento pelo WhatsApp: para responder e, se for o caso, marcar a conversa inicial. Base legal: procedimentos preliminares relacionados a um contrato (art. 7º, V, da LGPD) e o interesse legítimo de manter o canal de atendimento (art. 7º, IX).",
        "Medida de uso na Vercel (Web Analytics): para entender, de forma agregada, como o site é usado. Não usa cookies. Base legal: legítimo interesse (art. 7º, IX).",
        "Google Analytics e Google Ads: para estatística de uso, funil de campanha e público-alvo, somente com aceite. Base legal: consentimento (art. 7º, I).",
        "Logs de hospedagem e fontes: funcionamento e segurança do site. Base legal: legítimo interesse (art. 7º, IX).",
      ],
    },
    {
      title: "Com quem os dados são compartilhados",
      paragraphs: [
        "Meta Platforms (WhatsApp) opera o aplicativo em que a conversa acontece.",
        "Google: serviço de fontes; Analytics e Ads somente com consentimento.",
        "Vercel hospeda o site, processa logs técnicos e opera o Web Analytics (sem cookie).",
        "Não vendo dados e não envio lista de conversas do WhatsApp para anúncio. O Google Ads, se você aceitar os cookies, pode usar o fato de ter visitado o site ou clicado em Agendar para medir a campanha.",
      ],
    },
    {
      title: "Transferência internacional",
      paragraphs: [
        "WhatsApp, Google e Vercel podem processar dados fora do Brasil, inclusive nos Estados Unidos. Quando isso acontece, o tratamento se apoia nos mecanismos da LGPD para transferências internacionais (arts. 33 a 36) e nas salvaguardas contratuais desses fornecedores.",
      ],
    },
    {
      title: "Por quanto tempo os dados ficam guardados",
      paragraphs: [
        "Conversas de WhatsApp sobre agendamento: enquanto forem necessárias para o atendimento e pelos prazos legais ou éticos da Psicologia, quando o acompanhamento começar.",
        "Dados clínicos e prontuário, se o trabalho seguir, obedecem ao sigilo profissional e aos prazos do Conselho Federal de Psicologia — não ficam neste site.",
        "Vercel Web Analytics: estatísticas agregadas, pelo prazo usual da plataforma.",
        "Google Analytics e Ads: pelo prazo da propriedade (em geral 14 meses) e das regras da conta de anúncios.",
        "Sua escolha de cookies fica no navegador até você limpar os dados ou mudar a preferência no rodapé.",
        "Logs de hospedagem: pelo tempo usual da plataforma, em regra poucos dias ou semanas.",
      ],
    },
    {
      title: "Seus direitos",
      paragraphs: [
        "Você pode confirmar se trato seus dados, acessar, corrigir, anonimizar, bloquear ou eliminar o que for desnecessário, pedir informação sobre compartilhamentos, se opor ao tratamento feito com base em legítimo interesse e revogar o consentimento dos cookies do Google.",
        "Para exercer esses direitos, fale comigo pelo WhatsApp do site. Vou responder no prazo da LGPD. Se não ficar satisfeito, é possível apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).",
        "Recusar os cookies do Google não impede o uso do site nem o contato pelo WhatsApp. A medida da Vercel continua, sem cookie.",
      ],
    },
    {
      title: "Cookies neste site",
      paragraphs: [
        "Necessários: guardam só a sua escolha — aceitar ou recusar os cookies do Google.",
        "Vercel Web Analytics: sem cookies, sempre ativo, só estatística agregada.",
        "Google Analytics e Google Ads: somente depois do aceite. Servem para estatística, funil de campanha e público. Você muda a escolha pelo link Cookies no rodapé.",
      ],
    },
    {
      title: "Segurança e sigilo profissional",
      paragraphs: [
        "O site usa conexão criptografada (HTTPS). Não armazeno prontuário nem relatos clínicos nesta página.",
        "O que você contar em sessão, se o acompanhamento começar, está protegido pelo sigilo do Código de Ética Profissional do Psicólogo. Esta política fala do site e do primeiro contato — não substitui o contrato e as informações que combinamos no consultório.",
      ],
    },
    {
      title: "Atualizações",
      paragraphs: [
        "Se eu mudar a forma de tratar dados — por exemplo, ao incluir um e-mail de contato ou outro pixel — atualizo esta página e a data no topo. O que depender de consentimento só vale de novo com uma nova escolha no banner.",
      ],
    },
  ],
};

export function whatsappHref() {
  if (!site.whatsapp) return "#contato";
  const text = encodeURIComponent(site.whatsappMessage);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export function instagramHref() {
  if (!site.instagram) return "";
  const handle = site.instagram.replace(/^@/, "");
  return `https://instagram.com/${handle}`;
}

export function locationLine() {
  const parts = [site.modality, site.city].filter(Boolean);
  return parts.join(" · ");
}
