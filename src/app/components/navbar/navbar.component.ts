import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class]="scrolled() ? 'bg-white/95 backdrop-blur-md border-b border-black/[0.08]' : ''"
    >
      <div class="mx-auto flex h-16 items-center justify-between px-6 max-w-[1200px] md:h-20">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 no-underline">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F3D2E]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="8" width="14" height="2.5" rx="1.25" fill="#7ED957" />
              <rect x="2" y="4" width="10" height="2.5" rx="1.25" fill="#7ED957" />
              <rect x="2" y="12" width="7" height="2.5" rx="1.25" fill="#7ED957" />
            </svg>
          </div>
          <span
            class="tracking-tight transition-colors duration-300"
            [class]="scrolled() ? 'font-semibold text-[#0F3D2E]' : 'font-bold text-white'"
            style="font-family: 'Poppins', sans-serif; font-size: 1.2rem"
          >
            Prometal
          </span>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden items-center gap-8 md:flex">
          @for (link of links; track link.href) {
            <a
              [href]="link.href"
              class="no-underline transition-opacity hover:opacity-70"
              [style.color]="scrolled() ? '#1A1A1A' : 'white'"
              style="font-family: 'Inter', sans-serif; font-weight: 500; font-size: 0.95rem"
            >
              {{ link.label }}
            </a>
          }
        </nav>

        <!-- CTA -->
        <a
          href="#contato"
          class="hidden items-center rounded-full bg-[#0F3D2E] py-2.5 pl-[22px] pr-[22px] text-white text-sm font-semibold no-underline transition-all duration-200 hover:scale-[1.03] md:inline-flex"
          style="font-family: 'Inter', sans-serif"
        >
          Solicitar Orçamento
        </a>

        <!-- Mobile toggle -->
        <button
          class="cursor-pointer border-none bg-transparent p-2 transition-colors duration-300 md:hidden"
          [style.color]="scrolled() ? '#0F3D2E' : 'white'"
          (click)="toggleMobile()"
        >
          @if (!mobileOpen) {
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          }
          @if (mobileOpen) {
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          }
        </button>
      </div>

      <!-- Mobile menu -->
      @if (mobileOpen) {
        <div class="animate-fade-in pb-2 px-4 md:hidden">
          <div
            class="rounded-2xl backdrop-blur-2xl border border-brand-accent/20 bg-white px-5 py-3 shadow-lg"
          >
            @for (link of links; track link.href) {
              <a
                [href]="link.href"
                class="block rounded-lg py-2.5 font-poppins text-[0.95rem] font-medium text-brand-dark transition-all no-underline hover:bg-brand-accent/10"
                (click)="closeMobile()"
              >
                {{ link.label }}
              </a>
            }
          </div>
        </div>
      }
    </header>
  `,
})
export class NavbarComponent {
  scrolled = signal(window.scrollY > 20);
  mobileOpen = false;
  links = [
    { label: 'Produtos', href: '#produtos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile() {
    this.mobileOpen = false;
  }
}
