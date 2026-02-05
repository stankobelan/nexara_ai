import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chip',
  imports: [CommonModule],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipComponent {
  label = input.required<string>();
  selected = input<boolean>(false);
  chipClick = output<void>();

  onClick() {
    this.chipClick.emit();
  }
}
