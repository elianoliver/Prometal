import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ScrollAnimateDirective],
  template: `
    <section class="overflow-hidden border-b border-gray-200 bg-white py-14">
      <div scrollAnimate="animate-fade-in-up" class="mb-8 text-center">
        <p class="text-[0.8rem] font-medium tracking-[0.08em] text-text-secondary font-inter uppercase">
          Empresas que confiam na Prometal
        </p>
      </div>

      <!-- Marquee -->
      <div class="relative overflow-hidden">
        <div class="flex animate-marquee">
          @for (c of [...clients, ...clients, ...clients]; track c.name + $index) {
            <div
              class="mx-4 flex min-w-[160px] flex-shrink-0 items-center justify-center flex-col px-10 py-4"
              style="border-right: 1px solid #E5E7EB"
            >
              <span class="text-[1.2rem] font-bold tracking-[0] font-poppins text-brand-dark -tracking-tight">
                {{ c.name }}
              </span>
              <span class="text-[0.75rem] tracking-[0.06em] text-text-secondary font-inter uppercase">
                {{ c.desc }}
              </span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ClientsComponent {
  clients = [
    { name: 'SOGEL', desc: 'Construtora' },
    { name: 'Raymundi', desc: 'Construções' },
    { name: 'Engeval', desc: 'Engenharia' },
    { name: 'ConstroBras', desc: 'Infraestrutura' },
    { name: 'TechSteel', desc: 'Indústria' },
    { name: 'ObraMax', desc: 'Construção Civil' },
  ];
}
