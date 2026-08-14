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
        "A controladora é Beatriz Meirelles, psicóloga, CRP 06/237136, com atendimento online a partir de Mogi das Cruzes (SP).",
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
