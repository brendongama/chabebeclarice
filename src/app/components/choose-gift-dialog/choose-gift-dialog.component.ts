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
  confirm(): void { if (this.form.invalid) { this.form.markAllAsTouched(); return; } this.service.escolherPresente(this.data.id, this.form.controls.nomeConvidado.value.trim()); this.dialogRef.close(true); this.snackBar.open('Presente reservado com carinho!', 'Fechar', { duration: 3500, panelClass: 'success-snackbar' }); window.open(this.data.linkShopee, '_blank', 'noopener,noreferrer'); }
}
