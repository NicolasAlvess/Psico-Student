// Arquivo: src/app/features/mind-map/data/mind-map.data.ts

export interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
  details?: string;
  imageUrl?: string;
  contentTitle?: string; // <-- ADICIONE ESTA LINHA
}

export const mindMapData: MindMapNode = {
  id: 'sn',
  label: 'Sistema Nervoso',
  details:
    'O sistema nervoso é a complexa rede de nervos e células que transmitem sinais entre diferentes partes do corpo. É essencialmente o sistema de comando elétrico do corpo.',
  imageUrl: 'assets/images/sn.png',
  children: [
    {
      id: 'snc',
      label: 'Sistema Nervoso Central (SNC)',
      details:
        'Composto pelo encéfalo e pela medula espinhal, o SNC é o principal centro de processamento do corpo, responsável por integrar informações e coordenar a atividade.',
      imageUrl: 'assets/images/snc.png',
      children: [
        {
          id: 'encefalo',
          label: 'Encéfalo',
          // NOVO CAMPO PARA O TÍTULO
          contentTitle: 'Encéfalo',
          // O TEXTO EM PARÁGRAFOS
          details: `
Definição:

O encéfalo é a parte mais volumosa e complexa do sistema nervoso central, localizado dentro da caixa craniana. Ele é formado por:

• Cérebro
• Tronco encefálico (mesencéfalo, ponte e bulbo)
• Cerebelo

Funções principais:

• Processar e integrar informações sensoriais.
• Controlar movimentos voluntários e involuntários.
• Regular funções vitais (respiração, batimentos cardíacos, pressão arterial).
• Atuar em processos mentais complexos como memória, raciocínio, linguagem e emoções.
`,
          imageUrl: 'assets/images/encefalo.png',
          children: [
            {
              id: 'cerebro',
              label: 'Cérebro',
              // NOVO CAMPO PARA O TÍTULO
              contentTitle: 'Cérebro',
              // O TEXTO EM PARÁGRAFOS
              details: `cérebro é a maior e mais importante parte do encéfalo, localizado dentro da caixa craniana.
Definição

É a estrutura central do sistema nervoso responsável pelas funções sensitivas, motoras, cognitivas e emocionais, formada por bilhões de neurônios interligados.
Funções principais

• Integração sensorial:  (visão, audição, tato, olfato e paladar).
• Controle motor: planeja e executa movimentos voluntários.
• Cognição e consciência: responsável pelo pensamento, memória, linguagem, raciocínio e aprendizado.
• Emoções e comportamento: regula sentimentos e influencia as reações emocionais.
• Regulação de funções vitais: atua na
manutenção da homeostase em conjunto com outras estruturas do sistema nervoso.
`,
              imageUrl: 'assets/images/cerebro.png',
            },
            {
              id: 'cerebelo',
              label: 'Cerebelo',
              contentTitle: 'Cérebro',
              // O TEXTO EM PARÁGRAFOS
              details: `cérebro é a maior e mais importante parte do encéfalo, localizado dentro da caixa craniana.
Definição

É a estrutura central do sistema nervoso responsável pelas funções sensitivas, motoras, cognitivas e emocionais, formada por bilhões de neurônios interligados.
Funções principais

• Integração sensorial:  (visão, audição, tato, olfato e paladar).
• Controle motor: planeja e executa movimentos voluntários.
• Cognição e consciência: responsável pelo pensamento, memória, linguagem, raciocínio e aprendizado.
• Emoções e comportamento: regula sentimentos e influencia as reações emocionais.
• Regulação de funções vitais: atua na
manutenção da homeostase em conjunto com outras estruturas do sistema nervoso.
`,

              imageUrl: 'assets/images/cerebelo.png',
            },
            {
              id: 'tronco',
              label: 'Tronco Encefálico',
              details:
                'Controla funções vitais automáticas como respiração e frequência cardíaca.',
              imageUrl: 'assets/images/tronco.png',
            },
          ],
        },
        {
          id: 'medula',
          label: 'Medula Espinhal',
          details:
            'Atua como um canal para os sinais nervosos e controla os arcos reflexos.',
          imageUrl: 'assets/images/medula.png',
        },
      ],
    },
    {
      id: 'snp',
      label: 'Sistema Nervoso Periférico (SNP)',
      details:
        'Sua principal função é conectar o SNC aos membros e órgãos do corpo.',
      imageUrl: 'assets/images/snp.png',
      children: [
        {
          id: 'divisao_sensorial',
          label: 'Divisão Sensorial (Aferente)',
          // NOVO CAMPO PARA O TÍTULO
          contentTitle: 'Nervos Sensoriais (Aferentes)',
          // O TEXTO EM PARÁGRAFOS
          details: `São responsáveis por levar informações do corpo até o sistema nervoso central.
Captam estímulos externos (como dor, calor, tato) e internos (como posição corporal e pressão arterial), transmitindo essas informações ao cérebro e à medula espinhal.

Exemplo: Quando você toca uma superfície quente, os nervos sensoriais enviam essa informação ao cérebro, que interpreta como “quente”.

Diferença Básica

Tipo de Nervos | Direção do Impulso | Função Principal

Sensoriais:   Corpo → SNC   = Percepção de estímulos

Motores:      SNC → Corpo   = Execução de movimentos ou ações
`,
          imageUrl: 'assets/images/aferente.png',
        },

        {
          id: 'somatico',
          label: 'Divisão Somática (Motora)',
          contentTitle: 'Nervos Motores (Eferentes)',
          // O TEXTO EM PARÁGRAFOS
          details: `São responsaveis por levar comandos do sistema nervoso central até os músculos e glândulas, produzindo uma resposta motora (movimento ou secreção).

Exemplo: Após sentir o calor, seu cérebro envia um comando através dos nervos motores para que você retire a mão da superfície quente.

Diferença Básica

Tipo de Nervos | Direção do Impulso | Função Principal

Sensoriais:   Corpo → SNC   = Percepção de estímulos

Motores:      SNC → Corpo   = Execução de movimentos ou ações
`,
          imageUrl: 'assets/images/motor.png',
        },
        {
          id: 'autonomo',
          label: 'Divisão Autônoma',
          details:
            'Controla funções involuntárias, como batimentos cardíacos, digestão e respiração.',
          imageUrl: 'assets/images/autonoma.png',
          children: [
            {
              id: 'simpatica',
              label: 'Divisão Simpática',
              details:
                'Prepara o corpo para situações de estresse, a resposta de "luta ou fuga".',
              imageUrl: 'assets/images/simpatica.png',
            },
            {
              id: 'parassimpatica',
              label: 'Divisão Parassimpático',
              details: `O sistema nervoso parassimpático (SNPS) é uma divisão do sistema
nervoso autônomo que controla a atividade da musculatura lisa e
cardíaca das glândulas. Juntamente com o sistema simpático
A divisão parassimpática consiste em nervos que se originam do
cérebro e dos segmentos sacrais da medula espinal, e por esta razão,
também é chamada de divisão craniossacral do SNA.

Em termos gerais, os sistemas parassimpático e simpático
consistem em fibras pré-ganglionares e pós-ganglionares. As fibras
pré-ganglionares são os axônios dos neurônios cujos corpos
celulares estão localizados no cérebro e na região sacral da medula
espinal. Essas fibras fazem sinapse com gânglios parassimpáticos
em todo o corpo, que emitem fibras parassimpáticas pós
ganglionares. As fibras parassimpáticas atingem seus órgãos-alvo
seguindo o trajeto de alguns nervos do corpo. As fibras da medula
espinal sacral viajam com os ramos do plexo sacral, enquanto as do
cérebro unem-se aos nervos cranianos
(oculomotor, facial, glossofaríngeo e vago).

As funções do sistema nervoso parassimpático são comumente
descritas como responsáveis pelos processos de "descanso ou
digestão", porque esse sistema está envolvido na diminuição da
frequência cardíaca, no relaxamento dos esfíncteres dos tratos
gastrointestinal e urinário, e no aumento da atividade glandular e
intestinal. O resultado final é o armazenamento de energia e a
regulação das funções do corpo, como a digestão e a micção.

As ações do SNPS:
• No trato reprodutor masculino, a estimulação parassimpática
dos receptores M3 causa relaxamento da musculatura lisa nas
artérias helicínicas do pênis, permitindo que o sangue preencha
os corpos cavernosos e esponjosos, causando uma ereção. O
SNPS também envia sinais excitatórios aos vasos deferentes, às
vesículas seminais e à próstata.
• No olho, a estimulação parassimpática dos receptores M3
causa a contração do músculo esfíncter da íris, levando à
constrição da pupila (miose). Além disso, causa a contração do
músculo ciliar, melhorando a visão de perto.
• No coração, a estimulação parassimpática dos receptores M2
causa diminuição da frequência cardíaca e da velocidade de
condução através do nó AV.
• Na vasculatura, a estimulação parassimpática dos receptores
M3 leva à vasodilatação.
• Nos pulmões, a estimulação parassimpática dos receptores M3
leva à broncoconstrição. Também aumenta as secreções
brônquicas.
• Nas glândulas salivares, a estimulação parassimpática dos
receptores M1 e M3 leva à secreção de alto volume de íons
potássio, água e amilase.
• No estômago e nos intestinos, a estimulação parassimpática
dos receptores M leva ao aumento da motilidade e ao
relaxamento dos esfíncteres. A estimulação dos receptores M
também aumenta as secreções gástricas para auxiliar na
digestão.
• Na vesícula biliar, a estimulação parassimpática dos receptores
M3 estimula a contração para liberar a bile.
• No pâncreas, a estimulação parassimpática dos receptores M3
leva à liberação de enzimas digestivas e insulina.
• Nos rins e na bexiga, a estimulação parassimpática dos
receptores M3 estimula o peristaltismo do ureter, a contração do
músculo detrusor e o relaxamento do esfíncter uretral interno,
auxiliando no fluxo e na excreção da urina`,
              imageUrl: 'assets/images/parassimpatico.png',
            },
          ],
        },
      ],
    },
  ],
};
