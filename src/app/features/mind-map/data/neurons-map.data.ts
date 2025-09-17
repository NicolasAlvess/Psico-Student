// Arquivo: src/app/features/mind-map/data/neurons-map.data.ts

import { MindMapNode } from "./mind-map.data";

export const neuronsMapData: MindMapNode = {
  id: 'neuronio',
  label: 'Neurônio',
  details: 'Os neurônios são as células fundamentais do sistema nervoso, responsáveis por receber, processar e transmitir informações através de sinais elétricos e químicos.',
  imageUrl: 'assets/images/neuronio.png',
  children: [
    {
      id: 'corpo_celular',
      label: 'Corpo Celular (Soma)',
      details: 'O centro metabólico do neurônio, onde o núcleo e a maior parte do citoplasma estão localizados. Integra os sinais recebidos.',
      imageUrl: 'assets/images/soma.png',
      children: [
        { id: 'nucleo', label: 'Núcleo', details: 'Contém o material genético (DNA) da célula e controla as atividades do neurônio.', imageUrl: 'assets/images/nucleo.png' },
      ]
    },
    {
      id: 'dendritos',
      label: 'Dendritos',
      details: 'Prolongamentos ramificados que recebem os sinais de outros neurônios e os conduzem em direção ao corpo celular. Atuam como as "antenas" do neurônio.',
      imageUrl: 'assets/images/dendritos.png',
    },
    {
      id: 'axonio',
      label: 'Axônio',
      details: 'Um prolongamento longo e fino que transmite os impulsos nervosos do corpo celular para outros neurônios, músculos ou glândulas.',
      imageUrl: 'assets/images/axonio.png',
      children: [
        { id: 'bainha_mielina', label: 'Bainha de Mielina', details: 'Uma camada isolante de gordura que envolve o axônio, permitindo que o impulso elétrico viaje muito mais rápido.', imageUrl: 'assets/images/mielina.png' },
        { id: 'nodulos_ranvier', label: 'Nódulos de Ranvier', details: 'Pequenos espaços na bainha de mielina onde o impulso elétrico é "recarregado", permitindo a condução saltatória.', imageUrl: 'assets/images/nodulos-ranvier.png' },
        { id: 'terminal_axonio', label: 'Terminal do Axônio', details: 'A extremidade do axônio que libera neurotransmissores para comunicar-se com o próximo neurônio.', imageUrl: 'assets/images/terminal-axonio.png' },
      ]
    },
    {
      id: 'sinapse',
      label: 'Sinapse',
      details: 'A junção especializada onde um neurônio se comunica com outro. É o local onde ocorre a transmissão de sinais através de neurotransmissores.',
      imageUrl: 'assets/images/sinapse.png',
    }
  ]
};