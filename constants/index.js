export const navLinks = [
  {
    id: "",
    title: "INÍCIO",
  },
  {
    id: "Servicos",
    title: "SERVIÇOS",
    dropdown: [
      { id: "Dermatologia", title: "DERMATOLOGIA" },
      { id: "Estetica-avancada", title: "ESTÉTICA AVANÇADA" },
      { id: "Depilacao-feminina", title: "DEPILAÇÃO A LASER - FEMININO" },
      { id: "Depilacao-masculina", title: "DEPILAÇÃO A LASER - MASCULINO" },
      { id: "Odontologia", title: "ODONTOLOGIA" },
      { id: "The-spa", title: "THE SPA" },
      { id: "Terapia-capilar", title: "TERAPIA CAPILAR" },
      { id: "Nutricao", title: "NUTRIÇÃO" },
      { id: "Nutrologia", title: "NUTROLOGIA" },
    ],
  },
  {
    id: "sobre-nos",
    title: "SOBRE NÓS",
  },
];

// Slider das máquinas
export const slider = [
  {
    id: 1,
    src: "/slide/SLIDE1.png",
  },
  {
    id: 2,
    src: "/slide/SLIDE2.png",
  },
  {
    id: 3,
    src: "/slide/SLIDE3.png",
  },
  {
    id: 4,
    src: "/slide/SLIDE4.png",
  },
  {
    id: 5,
    src: "/slide/SLIDE5.png",
  },
  {
    id: 6,
    src: "/slide/SLIDE6.png",
  },
  {
    id: 7,
    src: "/slide/SLIDE7.png",
  },
];

// Slider das máquinas para celular
export const slidemobile = [
  {
    id: 1,
    src: "/slide/cel1.png",
  },
  {
    id: 2,
    src: "/slide/cel2.png",
  },
  {
    id: 3,
    src: "/slide/cel3.png",
  },
  {
    id: 4,
    src: "/slide/cel4.png",
  },
  {
    id: 5,
    src: "/slide/cel5.png",
  },
  {
    id: 6,
    src: "/slide/cel6.png",
  },
  {
    id: 7,
    src: "/slide/cel7.png",
  },
];

// Slider dos especialistas
export const especialistas = [
  {
    id: 11,
    src: "/especialistas/vinicius.png",
    name: "Dr. Vinicius Ferreira",
    cargo: "Biomédico",
    code: "CRBM - 7264",
  },
  {
    id: 10,
    src: "/especialistas/rogerio.png",
    name: "Dr. Rogério Rodrigues",
    cargo: "Cirurgião - Dentista",
    code: "CRO 7861 - CE",
  },
  {
    id: 9,
    src: "/especialistas/nise.png",
    name: "Dra. Nise Arruda",
    cargo: "Nutricionista",
    code: "CRN - 8540",
  },
  {
    id: 3,
    src: "/especialistas/italo.png",
    name: "Dr. Ítalo Cavalcante",
    cargo: "Médico Nutrólogo",
    code: "CRM - 19389",
  },
  {
    id: 6,
    src: "/especialistas/larissa.png",
    name: "Dra. Larissa Almeida",
    cargo: "Biomédica",
    code: "CRM - 19389",
  },
  {
    id: 7,
    src: "/especialistas/mayra.png",
    name: "Dra. Mayra Saboia",
    cargo: "Médica Dermatologista",
    code: "CRM - 16956",
  },
  {
    id: 2,
    src: "/especialistas/erico.png",
    name: "Dr. Érico Brasil",
    cargo: "Médico - Cirurgião Plástico",
    code: "",
  },
  {
    id: 8,
    src: "/especialistas/naira.png",
    name: "Dra. Naira Thaís",
    cargo: "Fisioterapeuta",
    code: "CREFITO 6: 335.704-F",
  },
  {
    id: 1,
    src: "/especialistas/bianca.png",
    name: "Bianca Januário",
    cargo: "Esteticista Cosmetóloga",
    code: "",
  },
  {
    id: 4,
    src: "/especialistas/jardian.png",
    name: "Jardyan Dantas",
    cargo: "Massoterapeuta",
    code: "",
  },
  {
    id: 5,
    src: "/especialistas/kelliane.png",
    name: "Kelliane Silva",
    cargo: "Esteticista Cosmetóloga",
    code: "",
  },
  {
    id: 11,
    src: "/especialistas/vanessa.png",
    name: "Vanessa Santos",
    cargo: "Esteticista Cosmetóloga",
    code: "",
  },
];

// Todos os servicos
export const servicos = [
  {
    id: 1,
    titulo: "DAY SPA FAMÍLIA RENNOVI",
    desc: "Um momento especial, criado para aproveitar o que há de mais relaxante ao lado das pessoas que você mais ama. (Day spa para até 4 pessoas).",
    serv: "Boas Vindas + SPA dos Pés e das Mãos + Aromático + Banho Aromático com Hidromassagem e Cromoterapia + Facial Personalizado + Massagem Relaxante + Lanche leve acompanhado de suco saboroso.",
    duracao: "3H",
    valor: 430,
    img: "/servicos/day-spa-familia.png",
    filterId: "The-spa",
  },
  {
    id: 2,
    titulo: "DAY SPA ROMÂNTICO",
    desc: "Para casais que querem aproveitar um momento especial juntos, relaxando em clima de romance.",
    serv: "Banho Romântico com Espuma, Hidromassagem e Cromoterapia + Massagem Casal Aromática Envolvente + Chocolate Afrodisíaco e Espumante.",
    duracao: "2H30",
    valor: 285,
    img: "/servicos/day-spa-romantico.png",
    filterId: "The-spa",
  },
  {
    id: 3,
    titulo: "DAY SPA NOIVO",
    desc: null,
    serv: "Boas Vindas + Banho quente com Esfoliação Corporal + Hidromassagem com sais de banho e espuma deliciosa e pétalas de rosas + Almoço/Janta/Lanche saudável e saboroso + Massagem com pedras quentes + Limpeza de pele + Revitalização Facial com Máscara de Rubi + Revitalização dos Pés e Mãos + Lavagem capilar terapêutica + Finalização com Espumante e morangos.",
    duracao: "6H",
    valor: 718,
    img: "/servicos/day-spa-noivo.png",
    filterId: "The-spa",
  },
  {
    id: 4,
    titulo: "DAY SPA NOIVA",
    desc: null,
    serv: "Boas Vindas + Banho quente com Esfoliação Corporal Dama da Noite + Day spa luxuoso corpo dourado + Hidromassagem com sais de banho e espuma deliciosa e pétalas de rosas + Almoço/Janta/Lanche saudável e saboroso + Massagem com pedras quentes + Limpeza de pele + Revitalização Facial com Máscara de Rubi + Revitalização dos Pés e Mãos + Lavagem capilar relaxante + Finalização com Espumante e morangos.",
    duracao: "6H",
    valor: 997,
    img: "/servicos/day-spa-noiva.png",
    filterId: "The-spa",
  },
  {
    id: 5,
    titulo: "DAY SPA NOIVA + ACOMPANHANTE",
    desc: null,
    serv: "A noiva + acompanhante: Boas Vindas + Banho quente com Esfoliação Corporal Dama da Noite + Day spa luxuoso corpo dourado + Hidromassagem com sais de banho e espuma deliciosa e pétalas de rosas + Almoço/Janta/Lanche saudável e saboroso + Massagem com pedras quentes + Limpeza de pele + Revitalização Facial com Máscara de Diamante + Revitalização dos Pés e Mãos + Lavagem capilar relaxante Grandha + Finalização com Espumante e morangos.",
    duracao: "6H",
    valor: 1397,
    img: "/servicos/day-spa-noiva-acompanhante.png",
    filterId: "The-spa",
  },
  {
    id: 6,
    titulo: "KIDS MASSAGEM",
    desc: "As crianças adoram. Relaxam e se divertem enquanto recebem uma massagem especial.",
    serv: null,
    duracao: "40M",
    valor: 80,
    img: "/servicos/kids-massagem.png",
    filterId: "The-spa",
  },
  {
    id: 7,
    titulo: "MASSAGEM SLIM BAMBU",
    desc: "Associação de massagem modeladora e bambuterapia com princípios ativos que ajudam na ativação da circulação e potencializam os resultados. Excelente massagem para modelagem corporal.",
    serv: null,
    duracao: "1H",
    valor: 100,
    img: "/servicos/slim-bambu.png",
    filterId: "The-spa",
  },
  {
    id: 9,
    titulo: "MASSAGEM TERAPÊUTICA",
    desc: "Tem efeitos surpreendentes nas regiões do corpo de maior tensão e dores musculares. Utiliza-se de manobras para ativar a circulação, liberar a fáscia e relaxar a musculatura.",
    serv: null,
    duracao: "1H",
    valor: 100,
    img: "/servicos/massagem-terapeutica.png",
    filterId: "The-spa",
  },
  {
    id: 8,
    titulo: "TERAPIA DE PEDRAS QUENTES",
    desc: "A terapia de Pedras Quentes combina técnicas terapêuticas de manipulação, óleos quentes e aromaterapia. Essas técnicas proporcionam alívio da tensão muscular, permitindo alcançar uma profunda sensação de prazer, relaxamento e bem-estar.",
    serv: null,
    duracao: "1H30",
    valor: 120,
    img: "/servicos/pedras-quentes.png",
    filterId: "The-spa",
  },

  {
    id: 10,
    titulo: "DRENAGEM LINFÁTICA",
    desc: "A Drenagem Linfática Manual é um tipo de massagem que utiliza manobras leves, suaves, rítmicas, lentas e precisas, visando otimizar as funções do sistema linfático.",
    serv: null,
    duracao: "1H30",
    valor: 120,
    img: "/servicos/drenagem-linfatica.png",
    filterId: "The-spa",
  },
  {
    id: 11,
    titulo: "LIMPEZA DE PELE",
    desc: "Com uma ação imediata e duradoura, este tratamento retarda o envelhecimento da cútis, higieniza profundamente, promove a renovação celular, a nutrição e o controle da produção seborreica e acneica.",
    serv: null,
    duracao: "1H30",
    valor: 120,
    img: "/servicos/limpeza-pele.png",
    filterId: "The-spa",
  },
  {
    id: 12,
    titulo: "MASSAGEM RELAXANTE COM VENTOSAS",
    desc: "A terapia com ventosas combina técnicas terapêuticas de manipulação, óleos quentes e aromaterapia. Essas técnicas proporcionam alívio da tensão muscular, permitindo alcançar uma profunda sensação de prazer, relaxamento e bem estar.",
    serv: null,
    duracao: "1H",
    valor: 120,
    img: "/servicos/ventosas.png",
    filterId: "The-spa",
  },
  {
    id: 13,
    titulo: "BANHO OCEANIA",
    desc: "É um banho tonificante, refrescante e rejuvenescedor, que fortalece o sistema imunológico e melhora a circulação. Rico em algas marinhas na composição dos óleos essenciais, é um banho perfeito para quem busca uma pele mais firme e elástica.",
    serv: null,
    duracao: "30M",
    valor: 110,
    img: "/servicos/banho-oceania.png",
    filterId: "The-spa",
  },
  // Dermatologia
  {
    id: 18,
    titulo: "CONSULTA DERMATOLÓGICA",
    desc: "O dermatologista é o médico responsável pelo tratamento e prevenção de doenças da pele, pelos, cabelos e unhas. Além disso, este médico orienta seus pacientes sobre cuidados gerais com a pele e realiza procedimentos estéticos.",
    serv: null,
    duracao: "-",
    valor: "-",
    img: "/servicos/dermatologia2.png",
    filterId: "Dermatologia",
  },
  {
    id: 19,
    titulo: "CIRURGIA DERMATOLÓGICA",
    desc: "A Cirurgia Dermatológica é a área da Dermatologia especializada em procedimentos diagnósticos, cirúrgicos, estéticos e oncológicos realizados na pele ou no tecido celular subcutâneo, que têm por objetivo prevenir, restaurar e manter a saúde de sua pele, cabelo ou unhas.",

    serv: null,
    duracao: "-",
    valor: "-",
    img: "/servicos/dermatologia.png",
    filterId: "Dermatologia",
  },
  //ESTÉTICA AVANÇADA
  {
    id: 20,
    titulo: "HARMONIZAÇÃO FACIAL",
    desc: "Área da estética que cuida do embelezamento facial com foco na jovialidade. Botox, Preenchimento, Bioestimuladores de Colágeno, Fios de sustentação, Lipoquimica de Papada, Skinbooster, Mesoterapia.",

    serv: null,
    duracao: "-",
    valor: "-",
    img: "/servicos/harmonizacao3.png",
    filterId: "Estetica-avancada",
  },
  {
    id: 21,
    titulo: "HARMONIZAÇÃO CORPORAL E ÍNTIMA",
    desc: "Área da Estética que visa tratar disfunções estéticas corporais e proporcionar o rejuvenescimento. Tratamento de celulite, Flacidez e Gordura Localizada, Preenchimento Corporal",

    serv: null,
    duracao: "-",
    valor: "-",
    img: "/servicos/harmonizacao2.png",
    filterId: "Estetica-avancada",
  },
  {
    id: 22,
    titulo: "TECNOLOGIAS AVANÇADAS",
    desc: "A Rennovi® é pioneira em tecnologias estéticas que proporcionam resultados de alta performance no embelezamento da face e corpo. ATRIA, LASER SOLON VISIONARY, ÔNIX DUET, CRIODERMIS, LIGHT PULSE.",

    serv: null,
    duracao: "-",
    valor: "-",
    img: "/servicos/harmonizacao.png",
    filterId: "Estetica-avancada",
  },
  // DEPILAÇÃO FEMININO
  {
    id: 23,
    titulo: "BUÇO FEMININO",
    desc: "Processo de depilação do buço feminino por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",
    serv: null,
    duracao: "-",
    valor: 50,
    img: "/servicos/buco.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 24,
    titulo: "QUEIXO FEMININO",
    desc: "Processo de depilação do queixo feminino por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 50,
    img: "/servicos/queixo.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 25,
    titulo: "FACE FEMININA",
    desc: "Processo de depilação da face feminina por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 120,
    img: "/servicos/face.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 26,
    titulo: "AXILA FEMININA",
    desc: "Processo de depilação das axilas femininas por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 90,
    img: "/servicos/axila.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 27,
    titulo: "ANTEBRAÇO FEMININO",
    desc: "Processo de depilação do antebraço feminino por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 150,
    img: "/servicos/antebraco.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 28,
    titulo: "LINHA ALBA FEMININA",
    desc: "Processo de depilação da linha alba feminina por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 50,
    img: "/servicos/alba.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 29,
    titulo: "VIRILHA SIMPLES FEMININA",
    desc: "Processo de depilação simples de virilha feminina por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 100,
    img: "/servicos/virilhasimples.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 30,
    titulo: "VIRILHA COMPLETA FEMININA",
    desc: "Processo de depilação completa da virilha feminina por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 150,
    img: "/servicos/virilhacompleta.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 31,
    titulo: "COXAS FEMININA",
    desc: "Processo de depilação de coxas femininas por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 300,
    img: "/servicos/coxas.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 32,
    titulo: "PERNA FEMININA",
    desc: "Processo de depilação de pernas femininas por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 250,
    img: "/servicos/perna.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 33,
    titulo: "COXA + PERNA FEMININA",
    desc: "Processo de depilação de coxa e perna feminina por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 500,
    img: "/servicos/coxaeperna.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 34,
    titulo: "PÉ + DEDO FEMININO",
    desc: "Processo de depilação de pés e dedos femininos por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 50,
    img: "/servicos/pé.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 35,
    titulo: "GLÚTEOS FEMININOS",
    desc: "Processo de depilação dos glúteos femininos por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 150,
    img: "/servicos/gluteos.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 36,
    titulo: "ARÉOLAS FEMININAS",
    desc: "Processo de depilação das aréolas femininas por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 50,
    img: "/servicos/areola.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 37,
    titulo: "MÃOS + DEDOS FEMININOS",
    desc: "Processo de depilação de mãos e dedos femininos por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 50,
    img: "/servicos/mao.png",
    filterId: "Depilacao-feminina",
  },
  {
    id: 38,
    titulo: "ENTRE SOBRANCELHAS FEMININAS",
    desc: "Processo de depilação entre sobrancelhas feminino por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 50,
    img: "/servicos/sobrancelha.png",
    filterId: "Depilacao-feminina",
  },
  // DEPILAÇÃO MASCULINO
  {
    id: 39,
    titulo: "BARBA COMPLETA MASCULINA",
    desc: "Processo de depilação de barba completa masculina por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 250,
    img: "/servicos/1barba.png",
    filterId: "Depilacao-masculina",
  },
  {
    id: 40,
    titulo: "COSTELETAS MASCULINAS",
    desc: "Processo de depilação de costeletas masculinas por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 90,
    img: "/servicos/1costeleta.png",
    filterId: "Depilacao-masculina",
  },
  {
    id: 41,
    titulo: "PESCOÇO MASCULINO",
    desc: "Processo de depilação de pescoço masculino por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 130,
    img: "/servicos/1pescoco.png",
    filterId: "Depilacao-masculina",
  },
  {
    id: 42,
    titulo: "ORELHAS MASCULINAS",
    desc: "Processo de depilação de orelhas masculinas por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 50,
    img: "/servicos/1orelha.png",
    filterId: "Depilacao-masculina",
  },
  {
    id: 43,
    titulo: "ENTRE SOBRANCELHAS MASCULINAS",
    desc: "Processo de depilação entre sobrancelhas masculinas por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 40,
    img: "/servicos/1entresobrancelhas.png",
    filterId: "Depilacao-masculina",
  },
  {
    id: 44,
    titulo: "AXILA MASCULINA",
    desc: "Processo de depilação de axilas masculinas por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 100,
    img: "/servicos/1axila.png",
    filterId: "Depilacao-masculina",
  },
  {
    id: 45,
    titulo: "BRAÇO MASCULINO",
    desc: "Processo de depilação de braços masculinos por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 150,
    img: "/servicos/1braco.png",
    filterId: "Depilacao-masculina",
  },
  {
    id: 46,
    titulo: "OMBRO MASCULINO",
    desc: "Processo de depilação de ombros masculinos por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 200,
    img: "/servicos/1ombro.png",
    filterId: "Depilacao-masculina",
  },
  {
    id: 47,
    titulo: "PEITO MASCULINO",
    desc: "Processo de depilação de peito masculino por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 250,
    img: "/servicos/1peito.png",
    filterId: "Depilacao-masculina",
  },
  {
    id: 48,
    titulo: "COSTAS INTEIRA MASCULINA",
    desc: "Processo de depilação de costas inteira masculina por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 500,
    img: "/servicos/1costas.png",
    filterId: "Depilacao-masculina",
  },
  {
    id: 49,
    titulo: "COSTAS SUPERIOR MASCULINA",
    desc: "Processo de depilação de costas superior masculina por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 300,
    img: "/servicos/1superior.png",
    filterId: "Depilacao-masculina",
  },
  {
    id: 50,
    titulo: "COXA MASCULINA",
    desc: "Processo de depilação de coxas masculinas por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 300,
    img: "/servicos/1coxa.png",
    filterId: "Depilacao-masculina",
  },
  {
    id: 51,
    titulo: "PERNA MASCULINA",
    desc: "Processo de depilação de pernas masculinas por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 300,
    img: "/servicos/1perna.png",
    filterId: "Depilacao-masculina",
  },
  {
    id: 52,
    titulo: "COXA + PERNA MASCULINA",
    desc: "Processo de depilação de pernas inteiras masculinas por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 550,
    img: "/servicos/1pernatoda.png",
    filterId: "Depilacao-masculina",
  },
  {
    id: 53,
    titulo: "GLÚTEOS MASCULINO",
    desc: "Processo de depilação de glúteos masculinos por meio de laser que destroem o folículo piloso que proporciona resultados duradouros com manutenções anuais. Nossa tecnologia pioneira remove até 80% dos pelos na primeira sessão.",

    serv: null,
    duracao: "-",
    valor: 190,
    img: "/servicos/1gluteo.png",
    filterId: "Depilacao-masculina",
  },
  // ODONTOLOGIA
  {
    id: 54,
    titulo: "CLÍNICA GERAL",
    desc: "Tratamento de dentes, boca e ossos da face. \n Limpeza,restauração, remoção de tártaro e cáries, aplicação de flúor, orientação de práticas educativas para garantir a saúde bucal.",

    serv: null,
    duracao: "-",
    valor: "--",
    img: "/servicos/clinicageral.png",
    filterId: "Odontologia",
  },
  {
    id: 55,
    titulo: "IMPLANTES DENTÁRIOS",
    desc: "Implantes são parafusos metálicos fixados nos ossos maxilares ou da mandíbula com a função de substituir as raízes dos dentes ausentes e que servirão de suporte aos dentes artificiais.",

    serv: null,
    duracao: "-",
    valor: "--",
    img: "/servicos/implante.png",
    filterId: "Odontologia",
  },
  {
    id: 56,
    titulo: "PRÓTESES DENTÁRIAS",
    desc: "A prótese dentária é um dispositivo utilizado para substituir o(s) dente(s) perdido(s). Elas podem ser removíveis (encaixadas à boca), ou fixas (implantadas). A escolha depende do tipo de tratamento mais indicado para o caso.",

    serv: null,
    duracao: "-",
    valor: "--",
    img: "/servicos/protese.png",
    filterId: "Odontologia",
  },
  {
    id: 57,
    titulo: "ORTODONTIA",
    desc: "Especialidade odontológica que corrige o alinhamento de dentes e ossos maxilares mal posicionados. Para isso, o profissional aplica aparelhos dentários, que podem ser fixos ou móveis, nos pacientes.",

    serv: null,
    duracao: "-",
    valor: "--",
    img: "/servicos/ortodontia.png",
    filterId: "Odontologia",
  },
  {
    id: 58,
    titulo: "PACIENTES ESPECIAIS",
    desc: "Down, Altista, Hipertensos, Diabéticos, Hipercolesterolemia.",

    serv: null,
    duracao: "-",
    valor: "--",
    img: "/servicos/especial.png",
    filterId: "Odontologia",
  },
  {
    id: 59,
    titulo: "ESTÉTICA DO SORRISO",
    desc: "Clareamento Dental, Facetas de Resina e Porcelana, Bichectomia, Gengivoplastia, Restaurações Estéticas.",

    serv: null,
    duracao: "-",
    valor: "--",
    img: "/servicos/estetica.png",
    filterId: "Odontologia",
  },
  // ADICIONAR DO SPA POR QUE FALTOU
  {
    id: 60,
    titulo: "PEELING FACIAL",
    desc: "Estimula a renovação das células da pele por meio de uma descamação controlada com o uso de substâncias químicas ou de métodos físicos, como a dermoabrasão.\n O procedimento pode ser utilizado para clarear manchas e cicatrizes de acne, além de atuar no tratamento de rugas e linhas de expressão.",

    serv: null,
    duracao: "-",
    valor: "--",
    img: "/servicos/peeling.png",
    filterId: "The-spa",
  },
  {
    id: 61,
    titulo: "RADIOFREQUÊNCIA FACIAL",
    desc: "Tratamento estético não invasivo que produz um aquecimento profundo da região a temperaturas de até 42 graus, que propicia uma melhoria da flacidez tissular (flacidez de pele).",

    serv: null,
    duracao: "-",
    valor: "--",
    img: "/servicos/radio.png",
    filterId: "The-spa",
  },
  // TERAPIA CAPILAR
  {
    id: 14,
    titulo: "AVALIAÇÃO DO CABELO",
    desc: "Procedimento de avaliação completa do fio, possibilitando a descoberta de toda e qualquer disfunção do dele ou do couro cabeludo, seja oleosidade, ressecamento, falta de volume, volume em excesso, caspa e uma série de outras questões.",

    serv: null,
    duracao: "-",
    valor: "GRATUITO",
    img: "/servicos/avaliacao.png",
    filterId: "Terapia-capilar",
  },
  {
    id: 63,
    titulo: "DETOX CAPILAR",
    desc: "Tratamento que desintoxica o couro cabeludo, eliminado as inúmeras impurezas e substâncias que tiveram contato com os fios durante o dia, como poluição e resíduos de outros produtos.",

    serv: null,
    duracao: "-",
    valor: 120,
    img: "/servicos/detox.png",
    filterId: "Terapia-capilar",
  },
  {
    id: 64,
    titulo: "MICROAGULHAMENTO CAPILAR",
    desc: "Microagulhamento Capilar é uma nova técnica para tratamento de queda de cabelo, inclusive a calvície. Utiliza caneta elétrica, na qual é encaixada uma ponteira estéril. Sua função é melhorar a circulação sanguínea e criar um estímulo inflamatório no local, como também facilitar a penetração de ingredientes ativos na derme e no subcutâneo com o propósito de chegar ao folículo piloso.",

    serv: null,
    duracao: "-",
    valor: 250,
    img: "/servicos/microagulhamento.png",
    filterId: "Terapia-capilar",
  },
  {
    id: 65,
    titulo: "REPOSIÇÃO HÍDRICA E LIPÍDICA",
    desc: "A reposição de água e nutrientes é essencial para restaurar a umidade dos fios, fazendo com que o cabelo se torne mais resistente, maleável e saudável. Essa reposição é feita com o uso de máscaras hidratantes aplicadas diretamente nos fios.",

    serv: null,
    duracao: "-",
    valor: 100,
    img: "/servicos/hidrica.png",
    filterId: "Terapia-capilar",
  },
  {
    id: 66,
    titulo: "MESOTERAPIA CAPILAR (INFUSÃO DE MEDICAMENTOS)",
    desc: "Técnica utilizada para tratar a queda de cabelo crônica, que pode acontecer devido a estresse, deficiências nutricionais ou genética, sendo importante que seja investigada a causa da queda e realizada uma avaliação do couro cabeludo pelo dermatologista.",

    serv: null,
    duracao: "-",
    valor: 300,
    img: "/servicos/mesoterapia.png",
    filterId: "Terapia-capilar",
  },
  // NUTRIÇÃO
  {
    id: 67,
    titulo: "PLANO ALIMENTAR PERSONALIZADO",
    desc: " Especialidade da nutrição que visa uma melhor estética do paciente com a conduta nutricional aplicada. Emagrecimento, Nutrição Esportiva e Nutrição Clínica Funcional.",

    serv: null,
    duracao: "--",
    valor: "--",
    img: "/servicos/alimentar.png",
    filterId: "Nutricao",
  },
  // NUTROLOGIA
  {
    id: 68,
    titulo: "NUTROLOGIA",
    desc: "Nutrologia é a especialidade médica clínica que se dedica ao diagnóstico, prevenção e tratamento de doenças do comportamento alimentar. Emagrecimento, Hipertrofia, Implantes Hormonais.",

    serv: null,
    duracao: "--",
    valor: "--",
    img: "/servicos/nutrologa.png",
    filterId: "Nutrologia",
  },
  {
    id: 69,
    titulo: "LAVAGEM TERAPÊUTICA",
    desc: "Indicado para higienizar profundamente o couro cabeludo e cabelos e preparar para tratamentos injetáveis.",
    serv: "Sauna capilar, e cromoterapia, higienização e esfoliaçao do couro cabeludo com a linha Grandha spa, altafrequência e ledterapia.",
    duracao: "1H30",
    valor: 100,
    img: "/servicos/lavagem-terapeutica.png",
    filterId: "Terapia-capilar",
  },
  {
    id: 62,
    titulo: "PEELING CAPILAR",
    desc: "Ritual capilar indicado para higienização profunda do couro cabeludo com seborreia e caspas que melhora a circulação sanguínea trazendo nutrientes para a região, hidratação e fortalecimento dos fios com geoterapia, alta frequência e óleo de melaleuca.",
    serv: null,
    duracao: "2H",
    valor: 150,
    img: "/servicos/peeling-capilar.png",
    filterId: "Terapia-capilar",
  },
  {
    id: 16,
    titulo: "CRONOGRAMA CAPILAR",
    desc: "Sequência de tratamentos terapêuticos para recuperar a hidratação, nutrição e saude dos cabelos. Indicado para cabelos danificados por química. (5 sessões/ semanais)",
    serv: null,
    duracao: "1H30",
    valor: 549,
    img: "/servicos/cronograma-capilar.png",
    filterId: "Terapia-capilar",
  },
  {
    id: 17,
    titulo:
      "TRATAMENTOS CAPILARES REALIZADOS MEDIANTE CONSULTA COM ESPECIALISTA.",
    desc: "• Dermatite e focos inflamatorios no couro cabeludo;\n• Alopecia androgenética;\n• Focos inflamatórios e crostas em Mega Hair;\n• Queda de cabelo por estresse e/ou ansiedade;\n• Cabelos danificados por química.",

    serv: null,
    duracao: "-",
    valor: "-",
    img: "/servicos/tratamentos-capilares.png",
    filterId: "Terapia-capilar",
  },
];
