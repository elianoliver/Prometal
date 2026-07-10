# 📋 Guia de Implementação SEO - Prometal

## O que foi feito? ✅

Implementei a **base sólida de SEO técnico** para o seu site:

### 1. **Index.html Otimizado**
- ✅ Title tag com keywords (Prometal | Estruturas Metálicas...)
- ✅ Meta description clara (160 caracteres)
- ✅ Meta keywords relevantes
- ✅ Open Graph tags (Facebook, WhatsApp)
- ✅ Twitter Cards
- ✅ Canonical URL
- ✅ JSON-LD LocalBusiness Schema
- ✅ JSON-LD BreadcrumbList Schema
- ✅ Preconexões com Google Fonts
- ✅ Hreflang para PT-BR

### 2. **Robots.txt** (`/public/robots.txt`)
- ✅ Permite indexação de conteúdo
- ✅ Aponta para sitemap.xml
- ✅ Configurações específicas para Google e Bing

### 3. **Sitemap.xml** (`/public/sitemap.xml`)
- ✅ Todas as seções principais mapeadas
- ✅ Prioridades configuradas
- ✅ Suporte a imagens

### 4. **.htaccess** (`/public/.htaccess`)
- ✅ Redireciona HTTP para HTTPS
- ✅ GZIP compression habilitado
- ✅ Cache headers configurado
- ✅ Security headers (X-Frame-Options, etc)

### 5. **SeoService** (novo arquivo)
- ✅ Gerenciamento dinâmico de meta tags
- ✅ Schema.org JSON-LD helper
- ✅ Métodos para LocalBusiness e Product schemas

---

## 🔥 Próximos Passos (PRIORITÁRIO)

### FASE 1: Configuração Rápida (1-2 horas)

#### 1.1 Integrar SeoService no `app.ts`
```typescript
import { SeoService } from './shared/services/seo.service';

export class App implements OnInit {
  constructor(private seoService: SeoService) {
    // Executar na inicialização
    this.seoService.setPageSeo(
      'Prometal | Estruturas Metálicas Sob Medida para Construção Civil',
      'Estruturas metálicas de alta precisão para obras de grande porte. Mais de 15 anos de experiência em fabricação de ferragens estruturais.',
      'estruturas metálicas, ferragens estruturais, pilares metálicos, pré-laje viaduto, blocos sapata',
      'https://prometal.com.br',
      'https://prometal.com.br/og-image.jpg'
    );
  }

  ngOnInit(): void {}
}
```

#### 1.2 Adicionar Alt Text em Imagens
Procure todos os `<img>` tags e adicione `alt` descritivo:

```html
<!-- ANTES ❌ -->
<img src="produto.jpg" />

<!-- DEPOIS ✅ -->
<img
  src="produto.jpg"
  alt="Pilar estrutural metálico de alta resistência para edificações"
  loading="lazy"
  width="600"
  height="400"
/>
```

#### 1.3 Verificar e Ajustar Headings
- Uma `<h1>` por página (na seção hero)
- `<h2>` para Produtos, Diferenciais, Processo, Contato
- `<h3>` para itens dentro de cada seção

```html
<!-- Hero section -->
<h1>Estruturas Metálicas Sob Medida para Construção Civil</h1>

<!-- Produtos -->
<section id="produtos">
  <h2>Nossos Produtos</h2>
  <article>
    <h3>Pilares Estruturais</h3>
    <p>Descrição...</p>
  </article>
</section>
```

#### 1.4 Submeter no Google Search Console

1. Acessar: https://search.google.com/search-console
2. Clicar em "Adicionar propriedade"
3. Inserir domínio (prometal.com.br)
4. Fazer verificação (escolher um método):
   - DNS (recomendado) - adicionar registro no DNS
   - Arquivo HTML - fazer upload em `public/`
   - Google Tag Manager - usar GTM
5. Enviar sitemap em Search Console > Sitemaps
6. Verificar em Overview > Cobertura

---

### FASE 2: Otimização de Imagens (2-3 horas)

#### 2.1 Converter para WebP
```bash
# Instalar conversor
# macOS/Linux
brew install imagemagick

# Windows
choco install imagemagick
```

```bash
# Converter PNG/JPG para WebP
magick convert imagem.jpg -quality 80 imagem.webp
magick convert imagem.png -quality 80 imagem.webp
```

#### 2.2 Comprimir Imagens
Use serviços online:
- TinyPNG: https://tinypng.com/
- Optimizilla: https://imageoptimizer.com/
- Squoosh: https://squoosh.app/

#### 2.3 Implementar Lazy Loading
```html
<!-- Angular Image Component -->
<img
  src="pilares-metalicos.webp"
  alt="Pilares metálicos estruturais"
  loading="lazy"
  width="600"
  height="400"
/>
```

---

### FASE 3: Performance & Core Web Vitals (2-3 horas)

#### 3.1 Testar Baseline com Google PageSpeed Insights
1. Acessar: https://pagespeed.web.dev/
2. Inserir: prometal.com.br
3. Notar Pontuação e recomendações

#### 3.2 Otimizar Core Web Vitals

**LCP (Largest Contentful Paint) - Meta: < 2.5s**
```html
<!-- Priorizar imagem do hero com fetchpriority -->
<img
  src="hero-banner.webp"
  alt="Prometal"
  fetchpriority="high"
  width="1920"
  height="1080"
/>
```

**CLS (Cumulative Layout Shift) - Meta: < 0.1**
```html
<!-- SEMPRE definir width e height -->
<img src="imagem.webp" width="400" height="300" alt="..." />

<!-- Para videos, definir aspect ratio -->
<iframe width="560" height="315" ...></iframe>
```

**FID (First Input Delay) - Meta: < 100ms**
- Usar `defer` em scripts não-críticos
- Code splitting em Angular

---

### FASE 4: Content & Keywords (1-2 semanas)

#### 4.1 Pesquisar Keywords
Ferramentas gratuitas:
- Google Trends: https://trends.google.com/
- Ubersuggest Free: https://ubersuggest.com/
- Keyword Planner: https://ads.google.com/keyword-planner

**Keywords recomendadas para Prometal:**
```
Tier 1 (Local, Alto Volume):
- estruturas metálicas São Paulo
- estruturas metálicas Santa Catarina
- ferragens estruturais
- pilares metálicos

Tier 2 (Específicas):
- pré-laje viaduto
- blocos de sapata
- ferragens sob medida

Tier 3 (Blog/FAQ):
- como calcular estruturas metálicas
- tipos de pilares para construção
- normas ABNT estruturas metálicas
```

#### 4.2 Melhorar Descrição de Produtos
Cada produto precisa de descrição SEO:

```html
<article>
  <h3>Pilares Estruturais de Aço</h3>
  <p>
    Pilares metálicos estruturais de alta resistência fabricados sob medida
    para edificações e grandes estruturas. Nossas peças seguem as normas
    ABNT NBR 8800 e garantem precisão milimétrica.
  </p>
  <ul>
    <li>Resistência até 500 MPa</li>
    <li>Rastreabilidade total</li>
    <li>Dimensionamento técnico incluso</li>
  </ul>
</article>
```

#### 4.3 Criar Blog com Artigos
Criar 3-4 artigos mensais com 1000+ palavras:
- "Guia Completo: Estruturas Metálicas para Construção Civil"
- "Como Escolher os Melhores Pilares Metálicos"
- "Normas ABNT para Ferragens Estruturais"
- "Pré-Laje para Viadutos: Vantagens e Aplicações"

---

### FASE 5: Link Building & Autoridade (contínuo)

#### 5.1 Links Internos (Quick Win)
Adicionar links internos relevantes:
```html
<p>
  Conheça mais sobre nossos
  <a href="#produtos">produtos de estruturas metálicas</a>.
</p>
```

#### 5.2 Backlinks Externo
- Contatar sites de construção civil
- Publicar em portais como BuscaIndustrial
- Guest posts em blogs de construção
- Diretórios de empresas (Classif Brasil, etc)

---

### FASE 6: Analytics & Monitoramento (contínuo)

#### 6.1 Implementar Google Analytics 4
```html
<!-- Adicionar no index.html (antes de </head>) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### 6.2 Monitorar Search Console
- Verificar impressões de keywords
- Acompanhar CTR (Click-Through Rate)
- Corrigir erros de crawl
- Analisar experiência do usuário

---

## 📊 Timeline Recomendado

| Fase | Atividade | Tempo | Prioridade |
|------|-----------|-------|-----------|
| 1 | Integrar SeoService | 30 min | 🔴 CRÍTICA |
| 1 | Alt text em imagens | 1-2h | 🔴 CRÍTICA |
| 1 | Headings semânticos | 1h | 🔴 CRÍTICA |
| 1 | Google Search Console | 15 min | 🔴 CRÍTICA |
| 2 | Converter WebP + Comprimir | 2-3h | 🟠 ALTA |
| 2 | Lazy loading | 1h | 🟠 ALTA |
| 3 | PageSpeed Insights | 1h | 🟠 ALTA |
| 3 | Otimizar Core Web Vitals | 2-3h | 🟠 ALTA |
| 4 | Content & Keywords | 1-2 semanas | 🟡 MÉDIA |
| 4 | Blog posts | 4-8h | 🟡 MÉDIA |
| 5 | Link building | Contínuo | 🟡 MÉDIA |
| 6 | Analytics | 30 min | 🟢 BAIXA |

---

## 🎯 Métricas para Acompanhar

Ao implementar, acompanhe:

1. **Google Search Console**
   - Impressões (quantas vezes aparece)
   - Cliques (CTR)
   - Posição média

2. **Google Analytics 4**
   - Visitantes do Google Organics
   - Taxa de bounce
   - Conversão (formulário preenchido)

3. **PageSpeed Insights**
   - Score Mobile (meta: > 90)
   - Score Desktop (meta: > 90)
   - Core Web Vitals

---

## 🚀 Previsão de Resultados

Com as implementações acima:

- **Semana 1-2**: Google começa a indexar
- **Mês 1-2**: Apareça em resultados para keywords de cauda longa
- **Mês 3-4**: Ranking para keywords principais
- **Mês 6+**: Aumento significativo em leads orgânicos

*Nota: Resultados variam conforme concorrência local*

---

## 📞 Suporte & Recursos

**Documentação Oficial:**
- Google Search Guide: https://developers.google.com/search
- Angular Performance: https://angular.dev/guide/performance

**Ferramentas Recomendadas:**
- SEMrush: https://semrush.com/ (análise de concorrentes)
- Ahrefs: https://ahrefs.com/ (backlinks)
- Screaming Frog: https://www.screamingfrog.co.uk/ (auditoria técnica)

Qualquer dúvida, consulte o arquivo `SEO_CHECKLIST.md` anexado.
