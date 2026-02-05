import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  variant = input<'primary' | 'secondary'>('primary');
  disabled = input<boolean>(false);
  type = input<'button' | 'submit'>('button');
  ariaLabel = input<string>();
}
