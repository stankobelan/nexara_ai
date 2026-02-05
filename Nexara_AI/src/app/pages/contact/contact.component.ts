import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ToastService } from '../../shared/components/toast/toast.service';
import { FirebaseService } from '../../core/services/firebase.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, CardComponent, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private toastService = inject(ToastService);
  private firebaseService = inject(FirebaseService);

  isSubmitting = signal(false);
  submitSuccess = signal(false);

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    topic: ['', Validators.required],
    company: ['', [Validators.maxLength(120)]],
    message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(2000)]],
    consent: [false, Validators.requiredTrue],
    website: [''] // honeypot field
  });

  topics = [
    { value: '', label: 'Vyberte tému' },
    { value: 'AI', label: 'AI riešenia' },
    { value: 'Web', label: 'Web development' },
    { value: 'Voice', label: 'Voice agenti' },
    { value: 'Other', label: 'Iné' }
  ];

  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field || !field.errors || !field.touched) return '';

    if (field.errors['required']) return 'Toto pole je povinné';
    if (field.errors['email']) return 'Neplatná emailová adresa';
    if (field.errors['minlength']) {
      const min = field.errors['minlength'].requiredLength;
      return `Minimálne ${min} znakov`;
    }
    if (field.errors['maxlength']) {
      const max = field.errors['maxlength'].requiredLength;
      return `Maximálne ${max} znakov`;
    }

    return '';
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.toastService.error('Prosím vyplňte všetky povinné polia správne');
      return;
    }

    // Check honeypot - if filled, pretend success but don't save
    if (this.contactForm.value.website) {
      this.submitSuccess.set(true);
      this.contactForm.reset();
      return;
    }

    this.isSubmitting.set(true);

    try {
      const formData = this.contactForm.value;
      
      await this.firebaseService.saveContactMessage({
        name: formData.name,
        email: formData.email,
        topic: formData.topic,
        message: formData.message,
        company: formData.company || undefined
      }, 'contact');

      this.submitSuccess.set(true);
      this.toastService.success('Ďakujem, ozvem sa do 24–48 hodín.');
      this.contactForm.reset();

    } catch (error) {
      console.error('Error submitting form:', error);
      this.toastService.error('Nastala chyba pri odosielaní správy. Skúste to prosím znova.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}


