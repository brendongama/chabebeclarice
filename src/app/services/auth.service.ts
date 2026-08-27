import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storageKey = 'cha-clarice-admin-auth';
  readonly isAuthenticated = signal(this.hasSession());

  login(username: string, password: string): boolean {
    const valid = username === 'admin' && password === 'gama123';
    if (valid) {
      sessionStorage.setItem(this.storageKey, 'true');
      this.isAuthenticated.set(true);
    }
    return valid;
  }

  logout(): void {
    sessionStorage.removeItem(this.storageKey);
    this.isAuthenticated.set(false);
  }

  private hasSession(): boolean {
    return sessionStorage.getItem(this.storageKey) === 'true';
  }
}
