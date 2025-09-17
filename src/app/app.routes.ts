import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component'; // 1. IMPORTE O COMPONENTE
import { MindMapComponent } from './features/mind-map/mind-map.component';
import { NeuronsMapComponent } from './features/neurons-map/neurons-map.component';
import { QuizComponent } from './features/quiz/quiz.component'; // Importe o novo componente

export const routes: Routes = [
  // 2. ADICIONE AS ROTAS
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona a raiz para /home
  { path: 'home', component: HomeComponent }, // Carrega o HomeComponent em /home
  { path: 'mind-map', component: MindMapComponent },
  { path: 'mapa-neuronios', component: NeuronsMapComponent }, // 2. Adicione a nova rota
  { path: 'quiz', component: QuizComponent }, // Adicione a nova rota
];
