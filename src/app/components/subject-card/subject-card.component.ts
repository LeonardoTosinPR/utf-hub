import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css'],
})

export class SubjectCardComponent implements OnInit {
  // Nome da classe original
  @Input() subjectTitle: string = 'Programação Orientada a Objetos'; // De volta ao nome original para o título padrão
  @Input() approvedPercentage: number = 60; // Valor entre 0 e 100
  @Input() evaluationMethod: {
    type: 'prova' | 'projeto';
    highlighted: 'prova' | 'projeto' | 'both';
  }[] = [
    { type: 'prova', highlighted: 'prova' },
    { type: 'projeto', highlighted: 'projeto' },
  ];
  @Input() importanceStars: number = 4;

  @Input() mainImageUrl: string = 'assets/default-robot-image.png'; // Imagem principal (do robô, ou qualquer outra)
  // O input 'techIcons' foi removido
  @Input() actionButtonIcons: string[] = [
    'assets/default-document-icon.png',
    'assets/default-m-icon.png',
    'assets/default-discord-icon.png',
  ];

  constructor() {}

  ngOnInit(): void {}

  get starsArray(): boolean[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= this.importanceStars);
    }
    return stars;
  }
}
