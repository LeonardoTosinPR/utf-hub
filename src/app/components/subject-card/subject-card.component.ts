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
  @Input() subjectTitle: string = 'Programação Orientada a Objetos';
  @Input() approvedPercentage: number = 60;
  @Input() evaluationMethod: {
    type: 'prova' | 'projeto';
    highlighted: 'prova' | 'projeto' | 'both';
  }[] = [
    { type: 'prova', highlighted: 'prova' },
    { type: 'projeto', highlighted: 'projeto' },
  ];
  @Input() importanceStars: number = 4;

  @Input() mainImageUrl: string = 'assets/default-robot-image.png';
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
