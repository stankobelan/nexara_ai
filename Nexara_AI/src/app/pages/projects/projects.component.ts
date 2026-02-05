import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { ChipComponent } from '../../shared/components/chip/chip.component';
import { PROJECTS } from '../../shared/data/projects.data';
import { ProjectTag } from '../../shared/models/project.model';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, CardComponent, ChipComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  allProjects = PROJECTS;
  selectedFilter = signal<ProjectTag | 'All'>('All');
  
  filters: Array<{ label: string; value: ProjectTag | 'All' }> = [
    { label: 'Všetky', value: 'All' },
    { label: 'AI', value: 'AI' },
    { label: 'Web', value: 'Web' },
    { label: 'Voice', value: 'Voice' }
  ];

  filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'All') {
      return this.allProjects;
    }
    return this.allProjects.filter(p => p.tags.includes(filter));
  });

  selectFilter(filter: ProjectTag | 'All') {
    this.selectedFilter.set(filter);
  }
}

