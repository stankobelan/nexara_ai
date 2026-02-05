import { Component } from '@angular/core';
import { ChipComponent } from '../../../../shared/components/chip/chip.component';

@Component({
  selector: 'app-tech-stack',
  imports: [ChipComponent],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  technologies = [
    'Angular', 'TypeScript', 'Node.js', 'Python',
    'Firebase', 'PostgreSQL', 'OpenAI', 'GPT-4',
    'Voice AI', 'WebSockets', 'Docker', 'CI/CD'
  ];
}
