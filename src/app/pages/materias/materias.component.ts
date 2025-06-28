import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriaService } from '../../services/Materia.Service';
import { MateriaCardComponent } from '../../components/materia-card/materia-card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [CommonModule, MateriaCardComponent, NavbarComponent, FooterComponent],
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  materias: any[] = [];

  constructor(private materiaService: MateriaService) {}

  ngOnInit(): void {
    this.materias = this.materiaService.getMaterias();
  }
}