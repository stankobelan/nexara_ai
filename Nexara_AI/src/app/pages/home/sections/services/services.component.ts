import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';

interface Service {
  title: string;
  duration: string;
  output: string;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [CardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'AI Konzultácia',
      duration: '90 minút',
      output: 'Roadmapa + priority',
      description: 'Analýza vašich procesov a návrh implementácie AI riešení s konkrétnymi krokmi a prioritami.'
    },
    {
      title: 'Web Sprint',
      duration: '2 týždne',
      output: 'MVP landing / modul',
      description: 'Rýchle dodanie funkčného MVP landing page alebo webového modulu s moderným designom.'
    },
    {
      title: 'Voice Agent Pilot',
      duration: '3–4 týždne',
      output: 'Pilot + integrácia',
      description: 'Komplexný pilot voice agenta pre zákaznícku podporu vrátane integrácie do vášho systému.'
    }
  ];
}
