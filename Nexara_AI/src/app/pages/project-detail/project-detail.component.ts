import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  slug = signal<string>('');

  ngOnInit() {
    const slugParam = this.route.snapshot.paramMap.get('slug');
    if (slugParam) {
      this.slug.set(slugParam);
    }
  }
}
