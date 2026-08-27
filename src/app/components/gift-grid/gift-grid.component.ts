import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Gift } from '../../models/gift';
import { GiftService } from '../../services/gift.service';
import { GiftCardComponent } from '../gift-card/gift-card.component';
import { ChooseGiftDialogComponent } from '../choose-gift-dialog/choose-gift-dialog.component';
@Component({ selector: 'app-gift-grid', standalone: true, imports: [GiftCardComponent, CurrencyPipe, MatIconModule], templateUrl: './gift-grid.component.html', styleUrl: './gift-grid.component.scss' })
export class GiftGridComponent {
  private readonly dialog = inject(MatDialog);
  readonly gifts = inject(GiftService).getDisponiveis();
  openDialog(gift: Gift): void { this.dialog.open(ChooseGiftDialogComponent, { data: gift, width: 'min(92vw, 620px)', maxWidth: '620px' }); }
}
