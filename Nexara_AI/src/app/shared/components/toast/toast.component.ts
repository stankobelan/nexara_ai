import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast-container',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastContainerComponent {
  private toastService = inject(ToastService);
  
  toasts = this.toastService.toasts;

  remove(id: number) {
    this.toastService.remove(id);
  }
}
