import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { DiferenciaisComponent } from './components/diferenciais/diferenciais.component';
import { ProcessoComponent } from './components/processo/processo.component';
import { CtaFinalComponent } from './components/cta-final/cta-final.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ClientsComponent,
    ProductsComponent,
    DiferenciaisComponent,
    ProcessoComponent,
    CtaFinalComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
})
export class App {}
