import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeatureCardsComponent } from '../../components/feature-cards/feature-cards.component';
import { NewsComponent } from '../../components/news/news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, FeatureCardsComponent, NewsComponent],
  templateUrl: './home.component.html',
})

export class HomeComponent {
  onNewsArticleClicked(title: string): void {
    alert(`Demonstração de @Output:\n\nVocê clicou na notícia: "${title}"`);
  }
}