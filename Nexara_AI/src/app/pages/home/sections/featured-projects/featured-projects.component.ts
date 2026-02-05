import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ChipComponent } from '../../../../shared/components/chip/chip.component';
import { PROJECTS } from '../../../../shared/data/projects.data';

@Component({
  selector: 'app-featured-projects',
  imports: [RouterLink, CardComponent, ChipComponent],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {
  featuredProjects = computed(() => PROJECTS.filter(p => p.featured));
}
