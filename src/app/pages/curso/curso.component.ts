import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  courseUrl: string = '';
  courseInfo: any = {};
  periods: any[] = [];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.courseUrl = this.cursoService.getCourseUrl();
    this.courseInfo = this.cursoService.getCourseInfo();
    this.periods = this.cursoService.getPeriods();
  }
}
