import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ScrollAnimateDirective],
  template: `
    <section class="overflow-hidden border-b border-gray-200 bg-white py-14">
      <div scrollAnimate="animate-fade-in-up" class="mb-8 text-center">
        <p
          class="text-[0.8rem] font-medium tracking-[0.08em] text-text-secondary font-inter uppercase"
        >
          Empresas que confiam na Prometal
        </p>
      </div>

      <div
        #track
        class="relative overflow-hidden select-none"
        (mousedown)="onDragStart($event)"
        (touchstart)="onTouchStart($event)"
        [style.cursor]="isDragging ? 'grabbing' : 'grab'"
      >
        <div #inner class="flex will-change-transform">
          @for (c of tiled; track c.name + $index) {
            <div
              class="mx-4 flex min-w-[160px] flex-shrink-0 flex-col items-center justify-center px-10 py-4"
              style="border-right: 1px solid #E5E7EB"
            >
              <span class="font-poppins text-[1.2rem] font-bold -tracking-tight text-brand-dark">
                {{ c.name }}
              </span>
              <span
                class="font-inter text-[0.75rem] uppercase tracking-[0.06em] text-text-secondary"
              >
                {{ c.desc }}
              </span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ClientsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('inner') innerRef!: ElementRef<HTMLElement>;

  clients = [
    { name: 'SOGEL', desc: 'Construtora' },
    { name: 'Raymundi', desc: 'Construções' },
    { name: 'Trilha', desc: 'Engenharia e Construções' },
    { name: 'Fronza', desc: 'Indústria de Artefatos de Cimento' },
    { name: 'Rio do Sul', desc: 'Concreto e Construções' },
    { name: 'Construblock', desc: 'Indústria de Artefatos de Cimento' },
  ];

  tiled = [...this.clients, ...this.clients, ...this.clients, ...this.clients];

  isDragging = false;

  private x = 0;
  private speed = 0.6;
  private singleWidth = 0;
  private rafId = 0;
  private dragStartX = 0;
  private dragStartPos = 0;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const items = this.innerRef.nativeElement.children;

    // Distância entre o item[0] e o item[clients.length] = largura exata de 1 cópia
    const firstLeft = (items[0] as HTMLElement).getBoundingClientRect().left;
    const secondLeft = (items[this.clients.length] as HTMLElement).getBoundingClientRect().left;
    this.singleWidth = secondLeft - firstLeft;

    this.x = -this.singleWidth;
    this.applyTransform();

    this.ngZone.runOutsideAngular(() => this.loop());

    window.addEventListener('mousemove', this.onDragMove);
    window.addEventListener('mouseup', this.onDragEnd);
    window.addEventListener('touchmove', this.onTouchMove, { passive: false });
    window.addEventListener('touchend', this.onDragEnd);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
    window.removeEventListener('mousemove', this.onDragMove);
    window.removeEventListener('mouseup', this.onDragEnd);
    window.removeEventListener('touchmove', this.onTouchMove);
    window.removeEventListener('touchend', this.onDragEnd);
  }

  private loop(): void {
    if (!this.isDragging) {
      this.x -= this.speed;
      this.wrap();
      this.applyTransform();
    }
    this.rafId = requestAnimationFrame(() => this.loop());
  }

  private wrap(): void {
    while (this.x <= -this.singleWidth * 2) this.x += this.singleWidth;
    while (this.x >= 0) this.x -= this.singleWidth;
  }

  private applyTransform(): void {
    this.innerRef.nativeElement.style.transform = `translateX(${this.x}px)`;
  }

  onDragStart(e: MouseEvent): void {
    this.isDragging = true;
    this.dragStartX = e.clientX;
    this.dragStartPos = this.x;
    e.preventDefault();
  }

  onTouchStart(e: TouchEvent): void {
    this.isDragging = true;
    this.dragStartX = e.touches[0].clientX;
    this.dragStartPos = this.x;
  }

  private onDragMove = (e: MouseEvent): void => {
    if (!this.isDragging) return;
    this.x = this.dragStartPos + (e.clientX - this.dragStartX);
    this.wrap();
    this.applyTransform();
  };

  private onTouchMove = (e: TouchEvent): void => {
    if (!this.isDragging) return;
    e.preventDefault();
    this.x = this.dragStartPos + (e.touches[0].clientX - this.dragStartX);
    this.wrap();
    this.applyTransform();
  };

  private onDragEnd = (): void => {
    this.isDragging = false;
  };
}
