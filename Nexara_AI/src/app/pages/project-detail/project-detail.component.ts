import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { ChipComponent } from '../../shared/components/chip/chip.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { PROJECTS } from '../../shared/data/projects.data';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, CardComponent, ChipComponent, ButtonComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  slug = signal<string>('');
  
  project = computed<Project | undefined>(() => {
    const slugValue = this.slug();
    return PROJECTS.find(p => p.slug === slugValue);
  });

  relatedProjects = computed(() => {
    const currentProject = this.project();
    if (!currentProject) return [];
    
    return PROJECTS
      .filter(p => p.id !== currentProject.id && 
                   p.tags.some(tag => currentProject.tags.includes(tag)))
      .slice(0, 3);
  });

  ngOnInit() {
    const slugParam = this.route.snapshot.paramMap.get('slug');
    if (slugParam) {
      this.slug.set(slugParam);
      
      if (!this.project()) {
        this.router.navigate(['/projects']);
      }
    }
  }
}

