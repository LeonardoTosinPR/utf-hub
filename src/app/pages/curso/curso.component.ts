import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  courseUrl = 'https://www.utfpr.edu.br/cursos/coordenacoes/graduacao/guarapuava/gp-tecnologia-em-sistemas-para-internet';

  courseInfo = {
    campus: 'Guarapuava/PR',
    name: 'Curso Superior De Tecnologia Em Sistemas Para Internet',
    lastUpdate: '14/03/2025 23:00'
  };

  periods = [
    {
      name: '1º Período',
      subjects: [
        { code: 'LSI31E', name: 'Comunicação Linguística', workload: 30, teachers: 'Luan Jose Vaz Chagas' },
        { code: 'TSI31A', name: 'Desenvolvimento De Páginas Web Com Html E Css', workload: 60, teachers: 'Denis Lucas Silva' },
        { code: 'TSI31B', name: 'Fundamentos De Sistemas Computacionais', workload: 60, teachers: 'William Alberto Cruz Castaneda' },
        { code: 'TSI31C', name: 'Pensamento Computacional E Linguagem De Programação Visual', workload: 90, teachers: 'Diego Marczal' },
        { code: 'TSI31D', name: 'Introdução À Computação', workload: 30, teachers: 'Kelly Lais Wiggers' },
        { code: 'TSI31F', name: 'Estágio Curricular Obrigatório', workload: 360, teachers: 'Kelly Lais Wiggers' }
      ]
    },
    {
      name: '2º Período',
      subjects: [
        { code: 'HUM1A', name: 'Ética, Profissão E Cidadania', workload: 30, teachers: 'Priscila Meier De Andrade Tribeck' },
        { code: 'HUM1GL', name: 'Libras 1', workload: 30, teachers: 'Vilmar Fernando Carvalho Ferreira De Almeida' },
        { code: 'HUM1H', name: 'Libras 2', workload: 30, teachers: 'Vilmar Fernando Carvalho Ferreira De Almeida' },
        { code: 'HUM1I', name: 'História E Cultura Afro-Brasileira', workload: 30, teachers: 'Priscila Meier De Andrade Tribeck' },
        { code: 'HUM1K', name: 'Ciência, Tecnologia E Sociedade', workload: 30, teachers: 'Priscila Meier De Andrade Tribeck' },
        { code: 'OPT1A', name: 'Indústria 4.0', workload: 120, teachers: 'Andre Luiz Soares' },
        { code: 'TSI32A', name: 'Projeto De Software', workload: 60, teachers: 'Denis Lucas Silva' },
        { code: 'TSI32B', name: 'Desenvolvimento De Páginas Web Com Framework E Css', workload: 60, teachers: 'Roni Fabio Banaszewski' },
        { code: 'TSI32C', name: 'Fundamentos Em Servidores Web', workload: 60, teachers: 'Sediane Carmem Lunardi Hernandes' },
        { code: 'TSI32D', name: 'Fundamentos De Programação', workload: 90, teachers: 'Eleandro Maschio Krynski' }
      ]
    },
    {
      name: '3º Período',
      subjects: [
        { code: 'LSI33E', name: 'Língua Inglesa', workload: 30, teachers: 'Ana Beatriz Matte Braun' },
        { code: 'TSI33A', name: 'Desenvolvimento De Aplicações Frontend Web Com Frameworks E Componentes', workload: 60, teachers: 'Roni Fabio Banaszewski' },
        { code: 'TSI33B', name: 'Desenvolvimento E Operações Na Web', workload: 60, teachers: 'Hermano Pereira' },
        { code: 'TSI33C', name: 'Programação Orientada A Objetos', workload: 60, teachers: 'Emerson Andre Fedechen' },
        { code: 'TSI33D', name: 'Banco De Dados Relacional', workload: 90, teachers: 'Kelly Lais Wiggers' }
      ]
    },
    {
      name: '4º Período',
      subjects: [
        { code: 'LSI34F', name: 'Língua Inglesa No Contexto De Tecnologia Da Informação', workload: 30, teachers: 'Ana Beatriz Matte Braun' },
        { code: 'TSI34A', name: 'Programação Para Dispositivos Móveis', workload: 60, teachers: 'Andres Jesse Porfirio' },
        { code: 'TSI34B', name: 'Resolução De Problemas', workload: 90, teachers: 'Eleandro Maschio Krynski' },
        { code: 'TSI34D', name: 'Desenvolvimento De Aplicações Backend', workload: 90, teachers: 'Diego Marczal' },
        { code: 'TSI34E', name: 'Banco De Dados Nosql', workload: 60, teachers: 'Kelly Lais Wiggers' },
        { code: 'XSI34C', name: 'Projetos De Extensão', workload: 90, teachers: 'Emerson Andre Fedechen' }
      ]
    },
    {
      name: '5º Período',
      subjects: [
        { code: 'GSI35B', name: 'Empreendedorismo', workload: 60, teachers: 'Franciele Bonatto' },
        { code: 'TSI35A', name: 'Desenvolvimento De Projetos Para Dispositivos Móveis', workload: 60, teachers: 'Andres Jesse Porfirio' },
        { code: 'TSI35C', name: 'Desenvolvimento E Operações Na Nuvem', workload: 60, teachers: 'Hermano Pereira' },
        { code: 'TSI35D', name: 'Desenvolvimento De Aplicações Backend Com Framework', workload: 60, teachers: 'Andres Jesse Porfirio' },
        { code: 'TSI35F', name: 'Trabalho De Conclusão De Curso 1', workload: 60, teachers: 'Denis Lucas Silva' },
        { code: 'XSI35E', name: 'Projetos De Extensão Colaborativos', workload: 150, teachers: 'Luciano Ogiboski' }
      ]
    },
    {
      name: '6º Período',
      subjects: [
        { code: 'GSI36B', name: 'Gestão De Startups', workload: 60, teachers: 'Franciele Bonatto' },
        { code: 'HSI36E', name: 'Informática Na Sociedade', workload: 30, teachers: 'Luciano Ogiboski' },
        { code: 'TSI36AT', name: 'ópicos Especiais', workload: 30, teachers: 'Roni Fabio Banaszewski' },
        { code: 'TSI36C', name: 'Computação Em Nuvem', workload: 60, teachers: 'Hermano Pereira' },
        { code: 'TSI36D', name: 'Arquitetura De Sistemas Web', workload: 60, teachers: 'Renata Luiza Stange Carneiro Gomes' },
        { code: 'TSI36F', name: 'Trabalho De Conclusão De Curso 2', workload: 60, teachers: 'Diego Marczal' }
      ]
    }
  ];
}
