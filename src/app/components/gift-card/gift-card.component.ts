import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Gift } from '../../models/gift';
@Component({ selector: 'app-gift-card', standalone: true, imports: [CurrencyPipe, MatCardModule, MatButtonModule, MatIconModule], templateUrl: './gift-card.component.html', styleUrl: './gift-card.component.scss' })
export class GiftCardComponent {
  @Input({ required: true }) gift!: Gift;
  @Output() choose = new EventEmitter<Gift>();
}
