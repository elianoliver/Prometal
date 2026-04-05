import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { LucideAngularModule, ClipboardList, Pencil, Cog, PackageCheck } from 'lucide-angular';
import { StepCardComponent } from './step-card.component';

const steps = [
  { number: '01', icon: ClipboardList, title: 'Solicitação', desc: 'Você entra em contato com a Prometal informando as especificações da obra e os itens necessários.' },
  { number: '02', icon: Pencil, title: 'Projeto Técnico', desc: 'Nossa equipe analisa o pedido e elabora o projeto técnico com as dimensões e materiais corretos.' },
  { number: '03', icon: Cog, title: 'Produção', desc: 'Fabricamos cada peça com controle rigoroso de qualidade, dentro do prazo acordado.' },
  { number: '04', icon: PackageCheck, title: 'Entrega', desc: 'Entregamos na obra com documentação técnica completa, prontos para instalação.' },
];

@Component({
  selector: 'app-processo',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective, LucideAngularModule, StepCardComponent],
  template: `
    <section id="processo" class="bg-white py-24">
      <div class="mx-auto max-w-[1200px] px-6">
        <!-- Header -->
        <div scrollAnimate="animate-fade-in-up" class="mb-16 text-center">
          <span class="text-[0.78rem] font-semibold tracking-[0.1em] text-brand-accent font-inter uppercase">Como funciona</span>
          <h2 class="mt-2 font-poppins font-extrabold -tracking-tight leading-[1.2] text-brand-dark" [style.fontSize]="'clamp(1.8rem, 3vw, 2.6rem)'">
            Nosso Processo
          </h2>
          <p class="mt-3 mx-auto max-w-lg text-[1rem] leading-[1.65] font-inter text-text-secondary">
            Do pedido à entrega, cada etapa é executada com método e transparência.
          </p>
        </div>

        <!-- Steps -->
        <div class="relative">
          <!-- Desktop connector line -->
          <div
            class="absolute hidden h-px z-0 lg:block"
            style="top: 40px; left: 12.5%; right: 12.5%; background: linear-gradient(90deg, #E5E7EB 0%, #7ED957 50%, #E5E7EB 100%)"
          ></div>

          <div class="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            @for (step of stepsData; track step.number; let i = $index) {
              <app-step-card [step]="step" [index]="i" />
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProcessoComponent {
  stepsData = steps;
}
