import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { LucideAngularModule, ArrowRight, Phone, Mail, MapPin} from 'lucide-angular';

@Component({
  selector: 'app-cta-final',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollAnimateDirective, LucideAngularModule],
  template: `
    <section id="contato" class="relative overflow-hidden bg-brand-accent py-24">
      <!-- Decorative circles -->
      <div class="absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-20 bg-brand-dark"></div>
      <div
        class="absolute -bottom-32 -left-16 h-80 w-80 rounded-full opacity-10 bg-brand-dark"
      ></div>

      <div class="relative z-10 mx-auto max-w-[1200px] px-6">
        <div class="grid items-center gap-16 lg:grid-cols-2">
          <!-- Left -->
          <div scrollAnimate="animate-fade-in-left">
            <span
              class="text-[0.78rem] font-semibold tracking-[0.1em] font-inter uppercase"
              style="color: rgba(15,61,46,0.65)"
              >Entre em contato</span
            >
            <h2
              class="mt-2 font-poppins font-extrabold leading-[1.15] -tracking-tight text-brand-dark"
              [style.fontSize]="'clamp(2rem, 4vw, 3rem)'"
            >
              Pronto para iniciar seu projeto?
            </h2>
            <p
              class="mt-4 max-w-[480px] text-[1.05rem] leading-[1.65] font-inter"
              style="color: rgba(15,61,46,0.75)"
            >
              Solicite um orçamento sem compromisso. Nossa equipe técnica analisa seu projeto e
              retorna com prazo e proposta em até 24 horas.
            </p>

            <!-- Contact info -->
            <div class="mt-8 flex flex-col gap-3">
              <a
                href="https://wa.me/5547988482349"
                target="_blank"
                class="flex items-center gap-3 transition-opacity hover:opacity-70 no-underline"
              >
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-full"
                  style="background: rgba(15,61,46,0.12)"
                >
                  <lucide-angular
                    [img]="PhoneIcon"
                    [size]="16"
                    class="!text-[#0F3D2E]"
                  ></lucide-angular>
                </div>
                <span class="text-[0.95rem] font-semibold text-brand-dark font-inter"
                  >(47) 9 8848-2349</span
                >
              </a>

              <a
                href="mailto:contato@prometal.com.br"
                class="flex items-center gap-3 transition-opacity hover:opacity-70 no-underline"
              >
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-full"
                  style="background: rgba(15,61,46,0.12)"
                >
                  <lucide-angular
                    [img]="EmailIcon"
                    [size]="16"
                    class="!text-[#0F3D2E]"
                  ></lucide-angular>
                </div>
                <span class="text-[0.95rem] font-semibold text-brand-dark font-inter"
                  >prometal.comercio@gmail.com</span
                >
              </a>

              <a
                href="https://maps.app.goo.gl/wFm7ug1FtQU66s4y6"
                class="flex items-center gap-3 transition-opacity hover:opacity-70 no-underline"
                target="_blank"
              >
                <div
                  class="flex h-10 w-10 items-center justify-center rounded-full"
                  style="background: rgba(15,61,46,0.12)"
                >
                  <lucide-angular
                    [img]="MapPinIcon"
                    [size]="16"
                    class="!text-[#0F3D2E]"
                  ></lucide-angular>
                </div>
                <span class="text-[0.95rem] font-semibold text-brand-dark font-inter"
                  >R. José Aldo Scaburi, 2549 - Escalvado</span
                >
              </a>
            </div>
          </div>

          <!-- Right — form -->
          <div scrollAnimate="animate-fade-in-right">
            <div class="rounded-2xl bg-white p-8 shadow-[0_8px_40px_rgba(15,61,46,0.15)]">
              <h3 class="mb-6 text-[1.2rem] font-bold text-brand-dark font-poppins">
                Solicitar Orçamento
              </h3>

              <form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      class="mb-1.5 block text-[0.82rem] font-medium font-inter text-text-primary"
                      >Nome</label
                    >
                    <input
                      type="text"
                      formControlName="nome"
                      placeholder="Seu nome"
                      class="w-full rounded-lg border-[0.094rem] border-gray-200 bg-bg-light px-3 py-2 text-[0.9rem] text-text-primary font-inter outline-none transition-colors duration-200 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
                    />
                  </div>
                  <div>
                    <label
                      class="mb-1.5 block text-[0.82rem] font-medium font-inter text-text-primary"
                      >Empresa</label
                    >
                    <input
                      type="text"
                      formControlName="empresa"
                      placeholder="Nome da empresa"
                      class="w-full rounded-lg border-[0.094rem] border-gray-200 bg-bg-light px-3 py-2 text-[0.9rem] text-text-primary font-inter outline-none transition-colors duration-200 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
                    />
                  </div>
                </div>
                <div>
                  <label
                    class="mb-1.5 block text-[0.82rem] font-medium font-inter text-text-primary"
                    >Telefone / WhatsApp</label
                  >
                  <input
                    type="tel"
                    formControlName="telefone"
                    placeholder="(00) 0 0000-0000"
                    class="w-full rounded-lg border-[0.094rem] border-gray-200 bg-bg-light px-3 py-2 text-[0.9rem] text-text-primary font-inter outline-none transition-colors duration-200 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
                  />
                </div>
                <div>
                  <label
                    class="mb-1.5 block text-[0.82rem] font-medium font-inter text-text-primary"
                    >Descreva o projeto</label
                  >
                  <textarea
                    rows="3"
                    formControlName="descricao"
                    placeholder="Tipo de produto, quantidade estimada, prazo..."
                    class="w-full rounded-lg border-[0.094rem] border-gray-200 bg-bg-light px-3 py-2 text-[0.9rem] text-text-primary font-inter outline-none resize-none transition-colors duration-200 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  [disabled]="form.invalid"
                  class="flex items-center justify-center gap-2 rounded-full bg-brand-dark px-7 py-3.5 font-poppins text-[0.95rem] font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 border-none cursor-pointer"
                >
                  Enviar Solicitação
                  <lucide-angular [img]="arrowRightIcon" [size]="16"></lucide-angular>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaFinalComponent {
  EmailIcon = Mail;
  PhoneIcon = Phone;
  arrowRightIcon = ArrowRight;
  MapPinIcon = MapPin;

  form: import('@angular/forms').FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      empresa: [''],
      telefone: [''],
      descricao: [''],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    }
  }
}
