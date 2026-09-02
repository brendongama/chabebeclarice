import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { Gift } from '../models/gift';
import { API_URL } from './api.config';

@Injectable({ providedIn: 'root' })
export class GiftService {
  private readonly http = inject(HttpClient);
  private readonly gifts = signal<Gift[]>([]);
  readonly loading = signal(true);

  constructor() {
    this.http.get<Gift[]>(`${API_URL}/gifts`).pipe(finalize(() => this.loading.set(false))).subscribe({
      next: gifts => this.gifts.set(gifts),
      error: error => console.error('Não foi possível carregar os presentes.', error)
    });
  }

  getAll() { return this.gifts.asReadonly(); }
  getDisponiveis() { return computed(() => this.gifts().filter(gift => !gift.escolhido)); }
  getEscolhidos() { return computed(() => this.gifts().filter(gift => gift.escolhido)); }
  escolherPresente(id: number, nomeConvidado: string) {
    return this.http.post<Gift>(`${API_URL}/gifts/${id}/reserve`, { nomeConvidado });
  }

  atualizarPresente(gift: Gift): void {
    this.gifts.update(gifts => gifts.map(current => current.id === gift.id ? gift : current));
  }
}
