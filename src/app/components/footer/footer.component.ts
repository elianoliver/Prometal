import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer style="background: #1A1A1A">
      <div class="mx-auto max-w-[1200px] px-6 py-12">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
          <!-- Brand -->
          <div>
            <div class="mb-4 flex items-center gap-2">
              <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F3D2E]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="8" width="14" height="2.5" rx="1.25" fill="#7ED957" />
                  <rect x="2" y="4" width="10" height="2.5" rx="1.25" fill="#7ED957" />
                  <rect x="2" y="12" width="7" height="2.5" rx="1.25" fill="#7ED957" />
                </svg>
              </div>
              <span class="text-[1.15rem] font-bold font-poppins text-white">Prometal</span>
            </div>
            <p
              class="max-w-[260px] text-[0.88rem] leading-[1.7] font-inter"
              style="color: rgba(255,255,255,0.45)"
            >
              Soluções estruturais metálicas sob medida para obras de grande porte. Precisão
              industrial, entrega confiável.
            </p>
          </div>

          <!-- Links -->
          <div>
            <p class="mb-4 text-[0.9rem] font-semibold font-poppins text-white">Navegação</p>
            <ul class="flex flex-col gap-2">
              @for (link of links; track link.href) {
                <li>
                  <a
                    [href]="link.href"
                    class="text-[0.88rem] font-inter transition-colors no-underline"
                    style="color: rgba(255,255,255,0.45)"
                    [class]="'hover:text-white'"
                  >
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <p class="mb-4 text-[0.9rem] font-semibold font-poppins text-white">Contato</p>
            <ul class="flex flex-col gap-2">
              @for (item of contactInfo; track item) {
                <li class="text-[0.88rem] font-inter" style="color: rgba(255,255,255,0.45)">
                  {{ item }}
                </li>
              }
            </ul>
          </div>
        </div>

        <!-- Bottom bar -->
        <div
          class="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-6 sm:flex-row"
        >
          <p class="text-[0.8rem] font-inter" style="color: rgba(255,255,255,0.3)">
            © 2026 Prometal. Todos os direitos reservados.
          </p>
          <div class="flex items-center gap-1.5">
            <span class="h-2 w-2 rounded-full bg-brand-accent"></span>
            <span class="text-[0.78rem] font-medium font-inter" style="color: rgba(255,255,255,0.3)"
              >Engenharia de precisão</span
            >
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  links = [
    { label: 'Produtos', href: '#produtos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ];

  contactInfo = ['(47) 9 8848-2349', 'prometal.comerio@gmail.com', 'São Paulo, SC — Brasil'];
}
