import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Gift } from '../models/gift';
import { API_URL } from './api.config';

const image = (source: string) => source.startsWith('http')
  ? source
  : `https://images.unsplash.com/${source}?auto=format&fit=crop&w=800&q=85`;

@Injectable({ providedIn: 'root' })
export class GiftService {
  private readonly http = inject(HttpClient);
  private readonly gifts = signal<Gift[]>([
    { id: 1, nome: 'Fralda Pampers Premium Care M', descricao: 'Fraldas macias e respiráveis para acompanhar cada descoberta da Clarice.', categoria: 'Higiene', preco: 69.9, imagem: image('photo-1584839404042-8bc8a3f7f0f0'), linkShopee: 'https://shopee.com.br/presente-Clarice-01', escolhido: false, nomeConvidado: null },
    { id: 2, nome: 'Fralda Pampers G', descricao: 'Conforto e proteção para os momentos de sono e brincadeira.', categoria: 'Higiene', preco: 74.9, imagem: image('photo-1604917018610-6c5c9b30e3c6'), linkShopee: 'https://shopee.com.br/presente-Clarice-02', escolhido: false, nomeConvidado: null },
    { id: 3, nome: 'Kit Higiene Essencial', descricao: 'Um conjunto delicado para deixar a rotina de cuidados mais prática.', categoria: 'Cuidados', preco: 119.9, imagem: image('photo-1556229010-6c3f2c9ca5f8'), linkShopee: 'https://shopee.com.br/presente-Clarice-03', escolhido: false, nomeConvidado: null },
    { id: 4, nome: 'Banheira Dobrável', descricao: 'Banho confortável e seguro com design compacto para o quarto.', categoria: 'Quarto', preco: 189.9, imagem: image('photo-1600334129128-685c5582fd35'), linkShopee: 'https://shopee.com.br/presente-Clarice-04', escolhido: false, nomeConvidado: null },
    { id: 5, nome: 'Body RN Florzinha', descricao: 'Body de algodão leve com acabamento suave para recém-nascida.', categoria: 'Roupinhas', preco: 39.9, imagem: image('photo-1519238263530-99bdd11df2ea'), linkShopee: 'https://shopee.com.br/presente-Clarice-05', escolhido: false, nomeConvidado: null },
    { id: 6, nome: 'Cueca', descricao: 'Peça confortável para os primeiros passeios da Clarice.', categoria: 'Roupinhas', preco: 44.9, imagem: 'https://down-br.img.susercontent.com/file/br-11134207-820lp-mmgrh55zedq890@resize_w900_nl.webp', linkShopee: 'https://shopee.com.br/Kit-At%C3%A9-10-Cuecas-Boxers-Masculina-de-Microfibra-Lisas-Sem-Estampas-i.421581203.23598287287', escolhido: false, nomeConvidado: null },
    { id: 7, nome: 'Toalha com Capuz', descricao: 'Toalha felpuda e acolhedora para sair do banho quentinha.', categoria: 'Banho', preco: 59.9, imagem: image('photo-1604917621956-10dfa7c0c3c8'), linkShopee: 'https://shopee.com.br/presente-Clarice-07', escolhido: false, nomeConvidado: null },
    { id: 8, nome: 'Babador Impermeável', descricao: 'Proteção prática para as refeições, com estampa encantadora.', categoria: 'Alimentação', preco: 29.9, imagem: image('photo-1596464716127-f2a82984de30'), linkShopee: 'https://shopee.com.br/presente-Clarice-08', escolhido: false, nomeConvidado: null },
    { id: 9, nome: 'Manta Tricot Rosa', descricao: 'Uma manta macia para envolver a pequena nos dias frescos.', categoria: 'Quarto', preco: 99.9, imagem: image('photo-1544126592-807ade215a0b'), linkShopee: 'https://shopee.com.br/presente-Clarice-09', escolhido: false, nomeConvidado: null },
    { id: 10, nome: 'Kit Escova e Pente', descricao: 'Cerdas delicadas para os primeiros cuidados com o cabelo.', categoria: 'Cuidados', preco: 34.9, imagem: image('photo-1583947215259-38e31be8751f'), linkShopee: 'https://shopee.com.br/presente-Clarice-10', escolhido: false, nomeConvidado: null },
    { id: 11, nome: 'Chupeta Avent', descricao: 'Chupeta ortodôntica confortável, pensada para recém-nascidos.', categoria: 'Alimentação', preco: 42.9, imagem: image('photo-1555252333-9f8e92e65df9'), linkShopee: 'https://shopee.com.br/presente-Clarice-11', escolhido: false, nomeConvidado: null },
    { id: 12, nome: 'Mamadeira Avent 260ml', descricao: 'Mamadeira anticólica para uma alimentação tranquila.', categoria: 'Alimentação', preco: 79.9, imagem: image('photo-1563203369-26f2e4a5ccf7'), linkShopee: 'https://shopee.com.br/presente-Clarice-12', escolhido: false, nomeConvidado: null },
    { id: 13, nome: 'Termômetro Digital', descricao: 'Leitura rápida e precisa para cuidar da saúde da bebê.', categoria: 'Cuidados', preco: 49.9, imagem: image('photo-1584362917165-526a968579e8'), linkShopee: 'https://shopee.com.br/presente-Clarice-13', escolhido: false, nomeConvidado: null },
    { id: 14, nome: 'Lenço Umedecido', descricao: 'Toque suave e limpeza delicada para todos os momentos.', categoria: 'Higiene', preco: 26.9, imagem: image('photo-1584308666744-24d5c474f2ae'), linkShopee: 'https://shopee.com.br/presente-Clarice-14', escolhido: false, nomeConvidado: null },
    { id: 15, nome: 'Shampoo Johnson\'s', descricao: 'Fórmula suave para um banho gostoso e cheio de carinho.', categoria: 'Banho', preco: 22.9, imagem: image('photo-1608571423902-eed4a5ad8108'), linkShopee: 'https://shopee.com.br/presente-Clarice-15', escolhido: false, nomeConvidado: null },
    { id: 16, nome: 'Sabonete Líquido Bebê', descricao: 'Limpeza delicada com perfume suave e agradável.', categoria: 'Banho', preco: 24.9, imagem: image('photo-1607006483225-1c1e0d6c1f3a'), linkShopee: 'https://shopee.com.br/presente-Clarice-16', escolhido: false, nomeConvidado: null },
    { id: 17, nome: 'Naninha Coelhinha', descricao: 'Companhia macia para acalmar e embalar os sonhos.', categoria: 'Quarto', preco: 54.9, imagem: image('photo-1559454403-b8fb88521f11'), linkShopee: 'https://shopee.com.br/presente-Clarice-17', escolhido: false, nomeConvidado: null },
    { id: 18, nome: 'Carrinho de Bebê', descricao: 'Passeios confortáveis com segurança e estilo desde o primeiro dia.', categoria: 'Passeio', preco: 699.9, imagem: image('photo-1596461404969-9ae70f2830c1'), linkShopee: 'https://shopee.com.br/presente-Clarice-18', escolhido: false, nomeConvidado: null },
    { id: 19, nome: 'Cadeira de Alimentação', descricao: 'Espaço seguro para as primeiras refeições em família.', categoria: 'Alimentação', preco: 329.9, imagem: image('photo-1596464716127-f2a82984de30'), linkShopee: 'https://shopee.com.br/presente-Clarice-19', escolhido: false, nomeConvidado: null },
    { id: 20, nome: 'Bolsa Maternidade', descricao: 'Organização elegante para levar tudo que a Clarice precisa.', categoria: 'Passeio', preco: 219.9, imagem: image('photo-1553062407-98eeb64c6a62'), linkShopee: 'https://shopee.com.br/presente-Clarice-20', escolhido: false, nomeConvidado: null }
  ]);

  constructor() {
    this.http.get<Gift[]>(`${API_URL}/gifts`).subscribe({
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
