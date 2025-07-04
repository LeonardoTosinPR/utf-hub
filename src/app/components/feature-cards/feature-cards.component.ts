import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-cards.component.html',
  styleUrls: ['./feature-cards.component.css']
})
export class FeatureCardsComponent {
  features = [
    {
      icon: 'bi bi-journal-text',
      text: 'Tenha acesso rápido e descomplicado às matrizes curriculares de todos os cursos. Planeje seus semestres, consulte pré-requisitos e explore disciplinas para traçar sua jornada com clareza.'
    },
    {
      icon: 'bi bi-collection',
      text: 'Navegue pela vida universitária com mais facilidade. Centralizamos em um só lugar as informações essenciais para calouros: calendários, contatos, mapas do campus e guias para um ótimo começo.'
    },
    {
      icon: 'bi bi-people-fill',
      text: 'Sabemos que o início pode ser cheio de dúvidas. Por isso, criamos o Seja+UTFPR para te acolher e guiar. Junte-se a nós e transforme a confusão do começo em uma experiência totalmente incrível.'
    }
  ];
}
