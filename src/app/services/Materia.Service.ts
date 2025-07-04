import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  getMaterias() {
    return [
      {
        nome: 'Desenvolvimento de Aplicações Front-End com Frameworks e Componentes',
        mediaAprovados: 80,
        importancia: 3,
        avaliacao: 'prova / projeto',
        moodle: true,
        discord: true,
        imagem: 'assets/images/materia_angular.png'
      },
      {
        nome: 'Pensamento Computacional e Linguagem de Programação Visual',
        mediaAprovados: 33,
        importancia: 4,
        avaliacao: 'prova / projeto',
        moodle: true,
        discord: true,
        imagem: 'assets/images/pclpv.png'
      },
      {
        nome: 'Programação Orientada a Objetos',
        mediaAprovados: 60,
        importancia: 4,
        avaliacao: 'prova / projeto',
        moodle: true,
        discord: true,
        imagem: 'assets/images/POO.png'
      }
    ];
  }
}