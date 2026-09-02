import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Gift } from '../../models/gift';
import { GiftService } from '../../services/gift.service';
@Component({ selector: 'app-choose-gift-dialog', standalone: true, imports: [CurrencyPipe, ReactiveFormsModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule], templateUrl: './choose-gift-dialog.component.html', styleUrl: './choose-gift-dialog.component.scss' })
export class ChooseGiftDialogComponent {
  readonly data = inject<Gift>(MAT_DIALOG_DATA);
  private readonly service = inject(GiftService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly dialogRef = inject(MatDialogRef<ChooseGiftDialogComponent>);
  readonly form = inject(FormBuilder).nonNullable.group({ nomeConvidado: ['', [Validators.required, Validators.minLength(2)]] });
  confirm(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const nomeConvidado = this.form.controls.nomeConvidado.value.trim();
    this.service.escolherPresente(this.data.id, nomeConvidado).subscribe({
      next: gift => {
        this.service.atualizarPresente(gift);
        this.dialogRef.close(true);
        this.snackBar.open('Presente reservado com carinho!', 'Fechar', { duration: 3500, panelClass: 'success-snackbar' });
        this.openShopeeLink(this.data.linkShopee);
      },
      error: () => this.snackBar.open('Não foi possível reservar este presente. Tente novamente.', 'Fechar', { duration: 4500 })
    });
  }

  private openShopeeLink(webUrl: string): void {
    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.includes('android');
    const isIos = /iphone|ipad|ipod/.test(userAgent);

    if (isAndroid) {
      const url = new URL(webUrl);
      const fallback = encodeURIComponent(webUrl);
      window.location.href = `intent://${url.host}${url.pathname}${url.search}#Intent;scheme=https;package=com.shopee.br;S.browser_fallback_url=${fallback};end`;
      return;
    }

    if (isIos) {
      window.location.href = `shopee://open?url=${encodeURIComponent(webUrl)}`;
      window.setTimeout(() => window.location.assign(webUrl), 1200);
      return;
    }

    window.open(webUrl, '_blank', 'noopener,noreferrer');
  }
}
