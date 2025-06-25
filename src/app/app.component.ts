import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeatureCardsComponent } from './components/feature-cards/feature-cards.component';
import { NewsComponent } from './components/news/news.component';
import { SubjectCardComponent } from './components/subject-card/subject-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, FeatureCardsComponent, NewsComponent, SubjectCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meu-projeto';
}
