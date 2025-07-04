import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materia-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materia-card.component.html',
  styleUrls: ['./materia-card.component.css']
})
export class MateriaCardComponent {
  @Input() materia: any;
}