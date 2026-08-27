import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { GiftGridComponent } from '../../components/gift-grid/gift-grid.component';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({ selector: 'app-home', standalone: true, imports: [HeaderComponent, HeroComponent, GiftGridComponent, FooterComponent], template: '<app-header /><main><app-hero /><app-gift-grid /></main><app-footer />' })
export class HomeComponent {}
