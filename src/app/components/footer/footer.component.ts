import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
@Component({ selector: 'app-footer', standalone: true, imports: [MatDividerModule], template: '<footer><mat-divider></mat-divider><p>Feito com <span>❤</span> para a chegada da Clarice</p></footer>', styles: ['footer { padding: 34px 24px 42px; text-align: center; color: #8c737d; } p { margin: 22px 0 0; font-size: 13px; letter-spacing: .03em; } span { color: #f48fb1; font-size: 18px; }'] })
export class FooterComponent {}
