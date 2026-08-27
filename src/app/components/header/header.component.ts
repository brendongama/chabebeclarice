import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { GiftService } from '../../services/gift.service';

@Component({ selector: 'app-header', standalone: true, imports: [RouterLink, MatToolbarModule, MatBadgeModule, MatIconModule], templateUrl: './header.component.html', styleUrl: './header.component.scss' })
export class HeaderComponent {
  readonly giftService = inject(GiftService);
  readonly available = this.giftService.getDisponiveis();
}
