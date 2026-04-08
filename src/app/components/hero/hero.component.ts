import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { LucideAngularModule, CircleCheckBig, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective, LucideAngularModule],
  template: `
    <section
      id="hero"
      class="relative flex min-h-screen items-center overflow-hidden bg-brand-dark"
    >
      <!-- Background image with overlay -->
      <div class="absolute inset-0">
        <img
          src="background-hero.jpg"
          alt="Estrutura metálica industrial"
          class="h-full w-full object-cover"
          loading="eager"
        />
        <div
          class="absolute inset-0"
          style="background: linear-gradient(105deg, rgba(15,61,46,0.97) 45%, rgba(15,61,46,0.7) 70%, rgba(15,61,46,0.3) 100%)"
        ></div>
      </div>

      <!-- Blueprint grid -->
      <div class="absolute inset-0 opacity-[0.04] bg-blueprint"></div>

      <!--
        Grid de duas colunas no desktop:
        - Coluna esquerda: 1fr (ocupa o espaço restante)
        - Coluna direita:  largura fluida com clamp, reserva espaço para a imagem
        No mobile colapsa para coluna única.
      -->
      <div
        class="
          relative mx-auto w-full max-w-[1200px] px-6
          grid grid-cols-1 items-center
          lg:grid-cols-[1fr_clamp(18.75rem,36vw,28.75rem)]
        "
      >
        <!-- Left — content -->
        <div class="py-[clamp(4rem,min(10vh,5vw),6rem)]">
          <!-- Tag -->
          <div
            scrollAnimate="animate-fade-in-up"
            class="mb-[clamp(0.75rem,2vh,1.5rem)] inline-flex items-center gap-1.5 rounded-full"
            style="
              padding: clamp(0.25rem, 0.6vh, 0.375rem) clamp(0.625rem, 2vw, 1rem);
              background: rgba(126,217,87,0.15);
              border: 1px solid rgba(126,217,87,0.35);
            "
          >
            <span
              class="rounded-full bg-brand-accent"
              style="width: clamp(0.375rem, 1vw, 0.5rem); height: clamp(0.375rem, 1vw, 0.5rem)"
            ></span>
            <span
              class="font-medium tracking-[0.05em] font-inter uppercase text-brand-accent"
              style="font-size: clamp(0.625rem, 1.8vw, 0.8rem)"
            >
              Soluções em Ferragens Estruturais
            </span>
          </div>

          <!-- Headline -->
          <h1
            scrollAnimate="animate-fade-in-up"
            class="font-poppins font-extrabold leading-[1.1] tracking-tight text-white"
            style="animation-delay: 0.1s; font-size: clamp(1.875rem, min(5vw, 7vh), 3.8rem)"
          >
            Estruturas metálicas com
            <span class="text-brand-accent">precisão industrial</span>
            para grandes obras
          </h1>

          <!-- Subheadline -->
          <p
            scrollAnimate="animate-fade-in-up"
            class="mt-[clamp(1rem,2.5vh,1.5rem)] max-w-[520px] leading-[1.65] font-inter"
            style="animation-delay: 0.2s; color: rgba(255,255,255,0.72); font-size: clamp(0.9rem, 2vw, 1.1rem)"
          >
            Soluções estruturais sob medida para obras de grande porte — pilares, blocos, pré-lajes
            e ferragens com o rigor técnico que projetos exigentes demandam.
          </p>

          <!-- Badges -->
          <div
            scrollAnimate="animate-fade-in-up"
            style="animation-delay: 0.3s"
            class="mt-[clamp(1.5rem,3vw,2rem)] flex flex-wrap gap-y-2"
          >
            @for (b of badges; track b) {
              <div
                class="flex items-center gap-[clamp(0.25rem,1vw,0.375rem)] font-medium font-inter"
                style="
                  font-size: clamp(0.75rem, 1.8vw, 0.85rem);
                  color: rgba(255,255,255,0.85);
                  margin-right: clamp(0.5rem, 2vw, 0.75rem);
                "
              >
                <lucide-angular [img]="CircleCheckBig" class="!text-[#7ED957]" [size]="15" />
                {{ b }}
              </div>
            }
          </div>

          <!-- CTAs -->
          <div
            scrollAnimate="animate-fade-in-up"
            style="animation-delay: 0.4s"
            class="mt-[clamp(1.5rem,4vw,2.5rem)] flex flex-wrap gap-x-[clamp(0.75rem,2vw,1rem)] gap-y-3"
          >
            <a
              href="#contato"
              class="inline-flex items-center whitespace-nowrap rounded-full bg-brand-accent font-poppins font-semibold text-brand-dark shadow-lg transition-all duration-200 hover:scale-[1.03] hover:brightness-110 no-underline"
              style="
                padding: clamp(0.625rem, 2vh, 0.875rem) clamp(1.25rem, 3.5vw, 1.75rem);
                font-size: clamp(0.8rem, 1.8vw, 0.95rem);
              "
            >
              Solicitar Orçamento
              <lucide-angular [img]="ArrowRight" class="ml-2" [size]="16" />
            </a>
            <a
              href="#produtos"
              class="inline-flex items-center whitespace-nowrap rounded-full border-[1.5px] border-white/40 bg-transparent font-poppins font-semibold text-white transition-all duration-200 hover:scale-[1.03] no-underline"
              style="
                padding: clamp(0.625rem, 2vh, 0.875rem) clamp(1.25rem, 3.5vw, 1.75rem);
                font-size: clamp(0.8rem, 1.8vw, 0.95rem);
              "
            >
              Ver Produtos
            </a>
          </div>

          <!-- Stats bar -->
          <div
            scrollAnimate="animate-fade-in-up"
            style="animation-delay: 0.55s"
            class="mt-[clamp(2rem,5vh,4rem)] grid grid-cols-3 gap-x-[clamp(1rem,4vw,1.5rem)] text-center lg:text-left"
          >
            @for (stat of stats; track stat.label) {
              <div>
                <div
                  class="font-bold leading-[1.2] font-poppins text-brand-accent"
                  style="font-size: clamp(1.25rem, 3.5vw, 1.8rem)"
                >
                  {{ stat.value }}
                </div>
                <div
                  class="mt-0.5 font-inter"
                  style="font-size: clamp(0.65rem, 1.5vw, 0.85rem); color: rgba(255,255,255,0.55)"
                >
                  {{ stat.label }}
                </div>
              </div>
            }
          </div>
        </div>

        <!--
          Right — coluna reserva espaço no grid.
          A imagem é absolute dentro dela, ancorada ao bottom,
          e pode crescer além da coluna sem quebrar o layout.
        -->
        <!-- Right — coluna reserva espaço no grid -->
        <div class="hidden self-stretch lg:block">
          <img
            src="boss5.png"
            alt="Representante Prometal"
            class="absolute bottom-0 right-0"
            style="
              height: clamp(31.25rem, 80vh, 53.75rem);
              max-height: calc(100vh - 2rem);
              width: auto;
              max-width: none;
              filter: drop-shadow(0 8px 32px rgba(0,0,0,0.4));
            "
          />
        </div>
      </div>

      <!-- Bottom fade -->
      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0"
        style="height: clamp(3rem, 8vh, 6rem); background: linear-gradient(to bottom, transparent, rgba(15,61,46,0.5))"
      ></div>
    </section>
  `,
})
export class HeroComponent {
  CircleCheckBig = CircleCheckBig;
  ArrowRight = ArrowRight;

  badges = ['Produção sob medida', 'Alta resistência', 'Entrega pontual'];

  stats = [
    { value: '+15 anos', label: 'De experiência' },
    { value: '+500', label: 'Obras atendidas' },
    { value: '100%', label: 'Sob medida' },
  ];
}
