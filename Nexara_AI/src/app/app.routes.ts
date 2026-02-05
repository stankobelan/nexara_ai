import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Nexara AI - Web Development & AI Solutions'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Projekty - Nexara AI'
  },
  {
    path: 'projects/:slug',
    loadComponent: () => import('./pages/project-detail/project-detail.component').then(m => m.ProjectDetailComponent),
    title: 'Detail projektu - Nexara AI'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Kontakt - Nexara AI'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

