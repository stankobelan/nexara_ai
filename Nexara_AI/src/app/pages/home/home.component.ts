import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { FeaturedProjectsComponent } from './sections/featured-projects/featured-projects.component';
import { ServicesComponent } from './sections/services/services.component';
import { TechStackComponent } from './sections/tech-stack/tech-stack.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    FeaturedProjectsComponent,
    ServicesComponent,
    TechStackComponent,
    ContactSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}

