import { Component, Input } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

export interface Step {
  number: string;
  icon: LucideIconData;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-step-card',
  standalone: true,
  imports: [ScrollAnimateDirective, LucideAngularModule],
  template: `
    <div
      [scrollAnimate]="'animate-fade-in-up'"
      [animationDelay]="index * 0.13 + 's'"
      class="flex flex-col items-center text-center"
    >
      <div
        class="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full"
        style="background: #F0FDF4; border: 2px solid #7ED957"
      >
        <lucide-angular [img]="step.icon" [size]="26" class="!text-brand-dark"></lucide-angular>
        <div
          class="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-dark"
        >
          <span class="text-[0.62rem] font-bold font-poppins text-brand-accent">{{ step.number }}</span>
        </div>
      </div>

      <h3 class="-tracking-tight text-[1.05rem] font-bold font-poppins text-text-primary">{{ step.title }}</h3>
      <p class="mt-2 max-w-[220px] text-[0.88rem] leading-[1.65] font-inter text-text-secondary">{{ step.desc }}</p>
    </div>
  `,
})
export class StepCardComponent {
  @Input({ required: true }) step!: Step;
  @Input() index = 0;
}
