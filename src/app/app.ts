import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { DiferenciaisComponent } from './components/diferenciais/diferenciais.component';
import { ProcessoComponent } from './components/processo/processo.component';
import { CtaFinalComponent } from './components/cta-final/cta-final.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeoService } from './shared/services/seo.service';

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
export class App implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setPageSeo(
      'Prometal | Estruturas Metálicas Sob Medida para Construção Civil',
      'Estruturas metálicas de alta precisão para obras de grande porte. Pilares, blocos de sapata, pré-lajes para viadutos e ferragens sob medida. Mais de 15 anos de experiência em fabricação.',
      'estruturas metálicas, ferragens estruturais, pilares metálicos, blocos de sapata, pré-laje viaduto, construção civil',
      'https://prometal.com.br',
      'https://prometal.com.br/og-image.jpg'
    );
  }
}
