import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Chatbot pre e-commerce',
    slug: 'ai-chatbot-ecommerce',
    shortDescription: 'Inteligentný AI asistent pre zvýšenie konverzií v online obchode',
    fullDescription: 'Implementácia pokročilého AI chatbota s podporou GPT-4, ktorý pomáha zákazníkom nájsť produkty, odpovedá na otázky a zvyšuje konverzie o 35%. Chatbot je integrovaný s CRM a objednávkovým systémom.',
    tags: ['AI', 'Web'],
    featured: true
  },
  {
    id: '2',
    title: 'Voice Agent pre callcentrum',
    slug: 'voice-agent-callcentrum',
    shortDescription: 'Automatizovaný hlasový agent pre zákaznícku podporu',
    fullDescription: 'Pilot projektu voice agenta využívajúceho najnovšie technológie rozpoznávania reči a syntézy hlasu. Agent zvládne základné dotazy zákazníkov, presmerovanie hovorov a zápis poznámok do CRM systému.',
    tags: ['Voice', 'AI'],
    featured: true
  },
  {
    id: '3',
    title: 'SaaS Dashboard s real-time analytkou',
    slug: 'saas-dashboard-analytics',
    shortDescription: 'Moderný real-time dashboard pre sledovanie biznis metrík',
    fullDescription: 'Komplexný dashboard postavený na Angular 20+ s real-time aktualizáciou dát pomocou WebSocket. Obsahuje pokročilé grafy, filtre a exporty do PDF/Excel. Optimalizovaný pre rýchlosť a škálovateľnosť.',
    tags: ['Web'],
    featured: false
  },
  {
    id: '4',
    title: 'AI Asistent pre dokumentáciu',
    slug: 'ai-asistent-dokumentacia',
    shortDescription: 'Automatické generovanie a udržiavanie technickej dokumentácie',
    fullDescription: 'AI nástroj, ktorý analyzuje kód, vytvára dokumentáciu a udržiava ju aktuálnu. Integrovaný s GitLab/GitHub, podporuje viacero programovacích jazykov a generuje interaktívnu dokumentáciu.',
    tags: ['AI'],
    featured: false
  },
  {
    id: '5',
    title: 'Rezervačný systém s AI optimalizáciou',
    slug: 'rezervacny-system-ai',
    shortDescription: 'Inteligentný rezervačný systém pre reštaurácie a služby',
    fullDescription: 'Webová aplikácia pre správu rezervácií s AI predikciou vyťaženia, automatickým potvrdením emailom/SMS a integráciou s platobnou bránou. Zahŕňa administračné rozhranie a mobilnú responzívnu verziu.',
    tags: ['Web', 'AI'],
    featured: true
  },
  {
    id: '6',
    title: 'Voice Training Platform',
    slug: 'voice-training-platform',
    shortDescription: 'Platforma pre tréning a testovanie voice agentov',
    fullDescription: 'Interná platforma pre trénovanie, testovanie a monitorovanie výkonnosti voice agentov. Obsahuje nahrávanie konverzácií, analýzu sentimentu, reporting a A/B testovanie rôznych konfigurácií.',
    tags: ['Voice', 'Web'],
    featured: false
  }
];
