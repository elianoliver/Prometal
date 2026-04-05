import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { LucideAngularModule, Ruler, ShieldCheck, Truck, HardHat } from 'lucide-angular';

const items = [
  { icon: Ruler, title: 'Produção Sob Medida', desc: 'Fabricamos peças conforme as especificações exatas do projeto, sem adaptações ou improvisos. Cada milímetro importa.' },
  { icon: ShieldCheck, title: 'Alta Resistência', desc: 'Utilizamos materiais certificados e processos controlados que garantem a integridade estrutural de cada peça produzida.' },
  { icon: Truck, title: 'Entrega Confiável', desc: 'Cumprimos prazos com planejamento logístico eficiente, porque atraso em obra tem um custo alto demais.' },
  { icon: HardHat, title: 'Experiência em Grandes Obras', desc: 'Mais de 15 anos fornecendo para obras de grande porte — viadutos, edifícios e infraestrutura urbana.' },
];

@Component({
  selector: 'app-diferenciais',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective, LucideAngularModule],
  template: `
    <section id="diferenciais" class="relative overflow-hidden bg-brand-dark py-24">
      <!-- Blueprint overlay -->
      <div class="absolute inset-0 opacity-[0.04] bg-blueprint"></div>

      <div class="relative z-10 mx-auto max-w-[1200px] px-6">
        <!-- Header -->
        <div scrollAnimate="animate-fade-in-up" class="mb-16 text-center">
          <span class="text-[0.78rem] font-semibold tracking-[0.1em] text-brand-accent font-inter uppercase">Por que a Prometal</span>
          <h2 class="mt-2 font-poppins font-extrabold -tracking-tight leading-[1.2] text-white" [style.fontSize]="'clamp(1.8rem, 3vw, 2.6rem)'">
            Nossos Diferenciais
          </h2>
          <p class="mt-3 mx-auto max-w-lg text-[1rem] leading-[1.65] font-inter" style="color: rgba(255,255,255,0.6)">
            O que nos separa do mercado é o comprometimento com a engenharia — não apenas com a venda.
          </p>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          @for (item of items; track item.title; let i = $index) {
            <div
              [scrollAnimate]="'animate-fade-in-up'"
              [animationDelay]="i * 0.1 + 's'"
              class="cursor-pointer rounded-2xl p-6 transition-all duration-250"
              style="background: rgba(255,255,255,0.05); border: 1px solid rgba(126,217,87,0.15); backdrop-filter: blur(6px)"
              [style.transition]="'background 0.25s, border-color 0.25s, transform 0.25s'"
              (mouseenter)="hovered[i] = true"
              (mouseleave)="hovered[i] = false"
              [style.background]="hovered[i] ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)'"
              [style.borderColor]="hovered[i] ? 'rgba(126,217,87,0.35)' : 'rgba(126,217,87,0.15)'"
              [style.transform]="hovered[i] ? 'translateY(-4px)' : 'none'"
            >
              <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl" style="background: rgba(126,217,87,0.15)">
                <lucide-angular [img]="item.icon" [size]="22" class="!text-[#7ED957]"></lucide-angular>
              </div>
              <h3 class="-tracking-tight text-[1rem] font-bold font-poppins text-white">{{ item.title }}</h3>
              <p class="mt-2 text-[0.88rem] leading-[1.65] font-inter" style="color: rgba(255,255,255,0.6)">{{ item.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class DiferenciaisComponent {
  items = items;
  hovered: boolean[] = [];
}
