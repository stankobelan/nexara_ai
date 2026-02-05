import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { environment } from '../../../environments/environment';

export interface ContactMessage {
  name: string;
  email: string;
  topic: string;
  message: string;
  company?: string;
  createdAt: any;
  userAgent: string;
  source: 'home' | 'contact';
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app?: FirebaseApp;
  private db?: Firestore;

  constructor() {
    // Only initialize if Firebase config is set
    if (this.isFirebaseConfigured()) {
      this.app = initializeApp(environment.firebase);
      this.db = getFirestore(this.app);
    } else {
      console.warn('Firebase not configured. Using placeholder values. Please update environment.ts with your Firebase credentials.');
    }
  }

  private isFirebaseConfigured(): boolean {
    return environment.firebase.apiKey !== 'YOUR_API_KEY';
  }

  async saveContactMessage(data: Omit<ContactMessage, 'createdAt' | 'userAgent' | 'source'>, source: 'home' | 'contact' = 'contact'): Promise<void> {
    if (!this.isFirebaseConfigured() || !this.db) {
      console.log('Simulated Firebase write:', { ...data, source });
      return Promise.resolve();
    }

    const message: ContactMessage = {
      ...data,
      createdAt: serverTimestamp(),
      userAgent: navigator.userAgent,
      source
    };

    try {
      const docRef = await addDoc(collection(this.db, 'contact_messages'), message);
      console.log('Contact message saved with ID:', docRef.id);
    } catch (error) {
      console.error('Error saving contact message:', error);
      throw error;
    }
  }

  getFirestore(): Firestore | null {
    return this.isFirebaseConfigured() && this.db ? this.db : null;
  }
}

