import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-with-fallback',
  standalone: true,
  template: `
    @if (hasError) {
      <div class="inline-block bg-gray-100 text-center align-middle" [class]="className" [style]="styleData">
        <div class="flex items-center justify-center w-full h-full">
          <img [src]="errorImg" alt="Error loading image" [style]="styleData" />
        </div>
      </div>
    } @else {
      <img [src]="src" [alt]="alt" [class]="className" [style]="styleData" (error)="onError()" [attr.loading]="loading" />
    }
  `,
})
export class ImageWithFallbackComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() className = '';
  @Input() styleData: Record<string, unknown> = {};
  @Input() loading = 'lazy';

  hasError = false;
  errorImg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4K';

  onError() {
    this.hasError = true;
  }
}
