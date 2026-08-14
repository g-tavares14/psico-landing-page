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
  modality: "Atendimento online",
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
  title: "Um espaço para organizar o que pesa.",
  lede: "Acompanhamento psicológico com escuta próxima e a clareza da Terapia Cognitivo-Comportamental. Para ansiedade, autocrítica e as transições que pedem mais presença.",
};

export const about = {
  kicker: "Sobre",
  title: "Cuidado com método. Presença de verdade.",
  paragraphs: [
    "Sou Beatriz Meirelles, psicóloga recém-formada e em pós-graduação em Terapia Cognitivo-Comportamental. Chego à prática com o rigor de quem continua estudando — e com o tempo, a atenção e a disponibilidade que cada pessoa merece.",
    "Acredito que a terapia funciona quando junta duas coisas: um espaço seguro para falar do que é difícil e ferramentas concretas para lidar com isso no dia a dia. Não se trata de pensar positivo. Trata-se de entender os ciclos que se repetem e ensaiar, com calma, outros jeitos de responder a eles.",
  ],
  quote:
    "Não ofereço respostas prontas. Ofereço presença, método e um trabalho feito a dois.",
};

export const approach = {
  kicker: "Abordagem",
  title: "TCC: olhar para o que se pensa, sente e faz.",
  body: "A Terapia Cognitivo-Comportamental parte de uma ideia simples e potente: pensamentos, emoções e comportamentos se alimentam. Um pensamento automático — “não vou dar conta”, “vão me rejeitar” — muda o corpo, as escolhas, o modo de se relacionar.",
  closer:
    "Na sessão, observamos esses ciclos juntos. Sem julgamento. Com perguntas, registros e exercícios pequenos, quando fizer sentido. O objetivo não é se tornar outra pessoa. É se reconhecer com mais honestidade — e ter mais escolha.",
  pillars: [
    {
      name: "Pensamentos",
      text: "Nomear o que aparece no automático e testar se essa leitura ainda serve.",
    },
    {
      name: "Emoções",
      text: "Dar lugar ao que se sente, sem se deixar levar só pela urgência do momento.",
    },
    {
      name: "Comportamentos",
      text: "Ensaiar ações possíveis, pequenas e concretas, no ritmo da sua vida.",
    },
  ],
};

export const paths = {
  kicker: "Caminhos",
  title: "Com o que costumo acompanhar",
  intro:
    "A escuta é ampla. Estes são alguns dos temas que mais aparecem no consultório — e com os quais o trabalho em TCC conversa especialmente bem.",
  items: [
    {
      title: "Ansiedade e preocupação que não desliga",
      text: "Quando a mente antecipa, ensaiar o pior e dificulta o descanso.",
    },
    {
      title: "Autocrítica e a sensação de nunca ser suficiente",
      text: "Exigência alta, comparação constante e pouco espaço para o próprio cuidado.",
    },
    {
      title: "Transições de vida",
      text: "Formação, trabalho, relacionamentos e mudanças que pedem reorganização.",
    },
    {
      title: "Dificuldade de se colocar",
      text: "Pedir, recusar, delimitar — e o custo de sempre caber no outro.",
    },
    {
      title: "Estresse e sobrecarga emocional",
      text: "Cansaço que não passa só com folga, e a necessidade de um outro ritmo.",
    },
  ],
  note: "Acolher não é atender a qualquer demanda. Se o que você busca pede outro tipo de cuidado, conversamos sobre isso com transparência.",
};

export const process = {
  kicker: "Como funciona",
  title: "Um começo simples, sem pressa.",
  steps: [
    {
      num: "01",
      title: "Conversa inicial",
      text: "Quinze a vinte minutos, sem compromisso, para nos conhecermos e ver se o acompanhamento faz sentido para você.",
    },
    {
      num: "02",
      title: "Sessões",
      text: "Encontros semanais de cinquenta minutos, online, em um horário reservado. Um espaço contínuo, não um atendimento avulso.",
    },
    {
      num: "03",
      title: "Entre as sessões",
      text: "Quando couber, pequenos exercícios para observar pensamentos e ensaiar mudanças no cotidiano — sempre no seu ritmo.",
    },
  ],
};

export const invite = {
  kicker: "Convite",
  title: "Se algo aqui fez sentido, podemos conversar.",
  body: "A primeira conversa é só isso: uma conversa. Sem ficha longa, sem compromisso de começar. Um tempo para você contar o que busca e eu dizer como posso acompanhar.",
  cta: "Agendar uma conversa",
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
      a: "Estou em Mogi das Cruzes e o acompanhamento é online. Assim dá para conversar com calma de onde você estiver — na cidade ou em outro lugar.",
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
    "Ao entrar em contato, seus dados são usados apenas para retorno e agendamento.",
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
