import { Component, signal } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

interface Service {
  title: string;
  duration: string;
  output: string;
  description: string;
  price?: string;
}

type ServiceCategory = 'ai' | 'web' | 'voice';

@Component({
  selector: 'app-services',
  imports: [CardComponent, CommonModule, ButtonComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  activeTab = signal<ServiceCategory>('ai');

  tabs: { id: ServiceCategory; label: string }[] = [
    { id: 'ai', label: 'AI Konzultácia' },
    { id: 'web', label: 'Web Development' },
    { id: 'voice', label: 'Voice Assistant' }
  ];

  servicesMap: Record<ServiceCategory, Service[]> = {
    ai: [
      {
        title: 'AI Konzultácia',
        duration: '90 minút',
        output: 'Roadmapa + priority',
        description: 'Analýza vašich procesov a návrh implementácie AI riešení s konkrétnymi krokmi a prioritami.',
        price: '150 €'
      },
      {
        title: 'AI Implementácia',
        duration: '2-3 týždne',
        output: 'Funkčné AI riešenie',
        description: 'Komplexná implementácia AI riešenia do vášho systému s testovaním a dokumentáciou.',
        price: 'Od 2500 €'
      }
    ],
    web: [
      {
        title: 'Web Sprint',
        duration: '2 týždne',
        output: 'MVP landing / modul',
        description: 'Rýchle dodanie funkčného MVP landing page alebo webového modulu s moderným designom.',
        price: 'Od 1500 €'
      },
      {
        title: 'Full-Stack Aplikácia',
        duration: '4-6 týždňov',
        output: 'Kompletná webová aplikácia',
        description: 'Vývoj kompletnej webovej aplikácie s backendom, frontendom a databázou.',
        price: 'Od 5000 €'
      }
    ],
    voice: [
      {
        title: 'Voice Agent Pilot',
        duration: '3–4 týždne',
        output: 'Pilot + integrácia',
        description: 'Komplexný pilot voice agenta pre zákaznícku podporu vrátane integrácie do vášho systému.',
        price: 'Od 3000 €'
      },
      {
        title: 'Voice Assistant Custom',
        duration: '6-8 týždňov',
        output: 'Vlastný voice assistant',
        description: 'Vývoj vlastného voice assistenta s pokročilými funkciami a integráciami na mieru.',
        price: 'Od 7000 €'
      }
    ]
  };

  get currentServices(): Service[] {
    return this.servicesMap[this.activeTab()];
  }

  setActiveTab(tab: ServiceCategory): void {
    this.activeTab.set(tab);
  }
}
