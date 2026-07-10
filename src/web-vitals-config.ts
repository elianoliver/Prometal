// web-vitals-config.ts
// Monitorar Core Web Vitals para SEO

declare const web: any;

export function initWebVitals(): void {
  // Usar web-vitals library para medir Core Web Vitals
  // npm install web-vitals

  if ('web' in window) {
    // LCP - Largest Contentful Paint
    console.log('💡 Dica: Monitore LCP (Largest Contentful Paint)');
    console.log('   Meta: < 2.5s');
    console.log('   Ação: Otimize imagens do hero, use lazy loading');

    // FID - First Input Delay
    console.log('💡 Dica: Monitore FID (First Input Delay)');
    console.log('   Meta: < 100ms');
    console.log('   Ação: Reduza JavaScript, code splitting');

    // CLS - Cumulative Layout Shift
    console.log('💡 Dica: Monitore CLS (Cumulative Layout Shift)');
    console.log('   Meta: < 0.1');
    console.log('   Ação: Defina dimensões de imagens, evite layout shifts');
  }
}

/**
 * Exemplo de implementação em app.ts:
 *
 * import { initWebVitals } from './web-vitals-config';
 *
 * export class App implements OnInit {
 *   constructor() {
 *     if (isPlatformBrowser(this.platformId)) {
 *       initWebVitals();
 *     }
 *   }
 * }
 */

// Performance API para medir métricas customizadas
export function measurePerformance(): void {
  if (window.performance && window.performance.timing) {
    const perf = window.performance.timing;
    const pageLoadTime = perf.loadEventEnd - perf.navigationStart;
    const connectTime = perf.responseEnd - perf.requestStart;
    const renderTime = perf.domComplete - perf.domLoading;

    console.group('📊 Métricas de Performance');
    console.log(`Tempo total de carregamento: ${pageLoadTime}ms`);
    console.log(`Tempo de conexão: ${connectTime}ms`);
    console.log(`Tempo de renderização: ${renderTime}ms`);
    console.groupEnd();

    // Enviar para analytics
    // analytics.trackTiming('page_load', pageLoadTime);
  }
}
