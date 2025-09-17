// Arquivo: src/app/features/quiz/data/quiz.data.ts

export interface Option {
  text: string;
  correct?: boolean;
}

export interface Question {
  questionText: string;
  options: Option[];
}

export const quizQuestions: Question[] = [
  {
    questionText:
      'Qual parte do sistema nervoso é composta pelo encéfalo e pela medula espinhal?',
    options: [
      { text: 'Sistema Nervoso Periférico (SNP)' },
      { text: 'Sistema Nervoso Autônomo (SNA)' },
      { text: 'Sistema Nervoso Central (SNC)', correct: true },
      { text: 'Sistema Nervoso Somático' },
      { text: 'Gânglios Nervosos' },
    ],
  },
  {
    questionText:
      'Qual parte do neurônio é responsável por receber os sinais de outras células?',
    options: [
      { text: 'Axônio' },
      { text: 'Bainha de Mielina' },
      { text: 'Corpo Celular' },
      { text: 'Dendritos', correct: true },
      { text: 'Terminal do Axônio' },
    ],
  },
  {
    questionText:
      'A resposta de "luta ou fuga" é primariamente controlada por qual divisão do sistema nervoso?',
    options: [
      { text: 'Divisão Parassimpática' },
      { text: 'Divisão Simpática', correct: true },
      { text: 'Divisão Sensorial' },
      { text: 'Sistema Nervoso Central' },
      { text: 'Divisão Somática' },
    ],
  },
  {
    questionText: 'O cerebelo está principalmente associado com qual função?',
    options: [
      { text: 'Memória e emoção' },
      { text: 'Controle da respiração' },
      { text: 'Processamento da visão' },
      { text: 'Coordenação motora e equilíbrio', correct: true },
      { text: 'Controle da temperatura' },
    ],
  },
  {
    questionText:
      'Como se chama a junção especializada onde um neurônio se comunica com outro?',
    options: [
      { text: 'Núcleo' },
      { text: 'Gânglio' },
      { text: 'Sinapse', correct: true },
      { text: 'Nódulo de Ranvier' },
      { text: 'Axônio' },
    ],
  },
  {
    questionText:
      'Qual divisão do SNP controla os movimentos voluntários dos músculos esqueléticos?',
    options: [
      { text: 'Divisão Autônoma' },
      { text: 'Divisão Simpática' },
      { text: 'Divisão Parassimpática' },
      { text: 'Divisão Sensorial (Aferente)' },
      { text: 'Divisão Somática (Motora)', correct: true },
    ],
  },
  {
    questionText: 'A Bainha de Mielina serve para:',
    options: [
      { text: 'Receber neurotransmissores' },
      { text: 'Aumentar a velocidade do impulso nervoso', correct: true },
      { text: 'Produzir energia para o neurônio' },
      { text: 'Conectar o neurônio a um músculo' },
      { text: 'Armazenar material genético' },
    ],
  },
  {
    questionText:
      'Qual parte do encéfalo conecta o cérebro à medula espinhal e controla funções vitais?',
    options: [
      { text: 'Cerebelo' },
      { text: 'Corpo Caloso' },
      { text: 'Tronco Encefálico', correct: true },
      { text: 'Hipotálamo' },
      { text: 'Lobo Frontal' },
    ],
  },
  {
    questionText:
      'As funções de "descansar e digerir" são associadas a qual sistema?',
    options: [
      { text: 'Sistema Nervoso Parassimpático', correct: true },
      { text: 'Sistema Nervoso Simpático' },
      { text: 'Medula Espinhal' },
      { text: 'Sistema Límbico' },
      { text: 'Sistema Nervoso Somático' },
    ],
  },
  {
    questionText: 'A via Aferente do SNP é responsável por:',
    options: [
      { text: 'Enviar comandos para os músculos' },
      { text: 'Levar informações dos sentidos para o SNC', correct: true },
      { text: 'Controlar a digestão' },
      { text: 'Acelerar o coração' },
      { text: 'Controlar os reflexos' },
    ],
  },
];
