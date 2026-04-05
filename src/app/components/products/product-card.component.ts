import { Component, Input } from '@angular/core';

export interface Product {
  title: string;
  description: string;
  tag: string;
  image: string;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: `
    <div
      class="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(15,61,46,0.13)]"
    >
      <!-- Image -->
      <div class="relative h-48 overflow-hidden">
        <img
          [src]="product.image"
          [alt]="product.title"
          class="h-full w-full object-cover transition-transform duration-500 product-img"
        />
        <div
          class="absolute inset-0"
          style="background: linear-gradient(to top, rgba(15,61,46,0.55) 0%, transparent 60%)"
        ></div>
        <span
          class="absolute left-3 top-3 rounded-full px-3 py-1 bg-brand-accent text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-brand-dark"
        >
          {{ product.tag }}
        </span>
      </div>

      <!-- Content -->
      <div class="p-6">
        <h3 class="-tracking-tight text-[1.1rem] font-bold text-text-primary font-poppins">
          {{ product.title }}
        </h3>
        <p class="mt-2 text-[0.9rem] leading-[1.65] text-text-secondary font-inter">
          {{ product.description }}
        </p>
        <div class="mt-4 flex items-center gap-1 text-[0.85rem] font-semibold text-brand-dark font-inter">
          Solicitar orçamento
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="mt-0.5">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  `,
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
