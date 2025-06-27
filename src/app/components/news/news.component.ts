import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  @Input() title: string = 'Últimas Notícias';

  newsData = [
    {
      title: 'UTFPR Toledo sedia Pré-Conferência Municipal de Promoção da Igualdade Racial',
      imageUrl: 'https://gazetadetoledo.com.br/wp-content/uploads/2025/06/image-1200-6364f6b0d1769bf2c6b6ed44c23a497f.png.webp'
    },
    {
      title: 'Sexta e sábado, orquestra e coral da UTFPR de Beltrão promovem o concerto Rock in Concert',
      imageUrl: 'https://cdn.jornaldebeltrao.com.br/wp-content/uploads/2025/06/beltrao-utfpr-1024x682.webp'
    },
    {
      title: 'Pesquisadores da UTFPR desenvolvem o maior banco de biometria neonatal do mundo',
      imageUrl: 'https://www.plural.jor.br/content/images/size/w1200/2025/06/biometria-neonatal.png'
    }
  ];
}
