import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { ProductCardComponent } from './product-card.component';

const products = [
  {
    title: 'Pilar Estrutural',
    description: 'Pilares metálicos de alta resistência, fabricados sob especificações técnicas para edificações e grandes estruturas.',
    tag: 'Estrutural',
    image: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwbWV0YWwlMjBiZWFtJTIwZmFjdG9yeSUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzc0NDg0NDMzfDA&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    title: 'Blocos de Sapata',
    description: 'Blocos de fundação produzidos com concreto e ferragem de alta qualidade, garantindo estabilidade para qualquer carga.',
    tag: 'Fundação',
    image: 'https://images.unsplash.com/photo-1626845447936-eb4f45fbbf69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHJlYmFyJTIwcmVpbmZvcmNlbWVudCUyMGlyb24lMjByb2QlMjBmb3VuZGF0aW9ufGVufDF8fHx8MTc3NDQ4NDQzN3ww&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    title: 'Pré-Laje para Viadutos',
    description: 'Elementos pré-moldados para viadutos e pontes, com engenharia de precisão para suportar cargas pesadas e longas extensões.',
    tag: 'Infraestrutura',
    image: 'https://images.unsplash.com/photo-1568671566370-49b36c5c7805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZ2UlMjB2aWFkdWN0JTIwY29uY3JldGUlMjBpbmZyYXN0cnVjdHVyZSUyMGxhcmdlJTIwc2NhbGV8ZW58MXx8fHwxNzc0NDg0NDM2fDA&ixlib=rb-4.1.0&q=80&w=600',
  },
  {
    title: 'Ferragens Sob Medida',
    description: 'Produção customizada de ferragens estruturais para projetos especiais, com dimensionamento técnico e rastreabilidade total.',
    tag: 'Sob Medida',
    image: 'https://images.unsplash.com/photo-1760045788252-d8d386ea1d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMGluZHVzdHJ5JTIwd29ya2VyJTIwc2FmZXR5JTIwaGVsbWV0JTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NzQ0ODQ0MzZ8MA&ixlib=rb-4.1.0&q=80&w=600',
  },
];

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective, ProductCardComponent],
  template: `
    <section id="produtos" class="bg-bg-light py-24">
      <div class="mx-auto max-w-[1200px] px-6">
        <div scrollAnimate="animate-fade-in-up" class="mb-16 text-center">
          <span class="text-[0.78rem] font-semibold tracking-[0.1em] text-brand-accent font-inter uppercase">O que fabricamos</span>
          <h2 class="mt-2 font-poppins font-extrabold -tracking-tight leading-[1.2] text-brand-dark" [style.fontSize]="'clamp(1.8rem, 3vw, 2.6rem)'">
            Produtos & Serviços
          </h2>
          <p class="mt-3 mx-auto max-w-xl text-[1rem] leading-[1.65] text-text-secondary font-inter">
            Cada produto é fabricado com rigor técnico, atendendo às especificações do projeto e normas vigentes da construção civil.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          @for (p of productsData; track p.title; let i = $index) {
            <div [scrollAnimate]="'animate-fade-in-up'" [animationDelay]="i * 0.1 + 's'">
              <app-product-card [product]="p" />
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProductsComponent {
  productsData = products;
}
