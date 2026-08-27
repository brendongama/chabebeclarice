import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { GiftService } from '../../services/gift.service';
@Component({ selector: 'app-admin', standalone: true, imports: [CurrencyPipe, MatTableModule, MatIconModule], templateUrl: './admin.component.html', styleUrl: './admin.component.scss' })
export class AdminComponent { readonly gifts = inject(GiftService).getAll(); readonly columns = ['imagem', 'nome', 'categoria', 'preco', 'status', 'convidado', 'link']; }
