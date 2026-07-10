# 🚀 Checklist Completo de SEO para Prometal

## ✅ Já Implementado

### Meta Tags & Estrutura
- [x] Title tag otimizado com keywords
- [x] Meta description de até 160 caracteres
- [x] Meta keywords relevantes
- [x] Canonical URL definida
- [x] Hreflang para idioma (pt-BR)
- [x] Open Graph tags (Facebook, WhatsApp)
- [x] Twitter Cards
- [x] Favicon com apple-touch-icon

### JSON-LD Structured Data
- [x] LocalBusiness schema
- [x] BreadcrumbList schema
- [x] Preconexões com Google Fonts

### Arquivo de Configuração
- [x] robots.txt criado e configurado
- [x] sitemap.xml com todas as seções
- [x] .htaccess com otimizações

### Serviço Angular
- [x] SeoService para gerenciar meta tags dinamicamente
- [x] Métodos para LocalBusiness e Product schemas
- [x] JSON-LD insertion helper

---

## 🔧 Próximos Passos - IMPLEMENTAR

### 1. **Integrar SeoService na App Component**
```typescript
constructor(private seoService: SeoService) {
  this.seoService.setPageSeo(
    'Prometal | Estruturas Metálicas Sob Medida para Construção Civil',
    'Estruturas metálicas de alta precisão para obras de grande porte. Mais de 15 anos.',
    'estruturas metálicas, ferragens estruturais, pilares metálicos',
    'https://prometal.com.br'
  );
}
```

### 2. **Otimização de Imagens**
- [ ] Converter imagens para WebP (melhor compressão)
- [ ] Adicionar alt text descritivo em TODAS as imagens
- [ ] Lazy load em imagens abaixo do fold
- [ ] Comprimir imagens com TinyPNG ou ImageOptim

**Exemplo:**
```html
<img
  src="pilares-metalicos.webp"
  alt="Pilares metálicos estruturais de alta resistência para construção civil"
  loading="lazy"
  width="600"
  height="400"
>
```

### 3. **Headings Semânticos (H1, H2, H3)**
- [ ] UMA tag H1 por página (no hero/seção principal)
- [ ] H2 para cada seção principal (Produtos, Diferenciais, Processo)
- [ ] H3 para subsecções
- [ ] Estrutura lógica e hierárquica

**Exemplo:**
```html
<h1>Estruturas Metálicas Sob Medida para Construção Civil</h1>
<section>
  <h2>Nossos Produtos</h2>
  <article>
    <h3>Pilares Estruturais</h3>
  </article>
</section>
```

### 4. **URLs Amigáveis (Slugs)**
- [ ] Adicionar routing com slugs amigáveis
- [ ] Ex: `/estruturas-metalicas` em vez de `/products`
- [ ] Usar hífens para separar palavras (não underscore)

### 5. **Performance & Core Web Vitals**
- [ ] **LCP** (Largest Contentful Paint): < 2.5s
  - Implementar lazy loading
  - Otimizar imagens do hero
- [ ] **FID** (First Input Delay): < 100ms
  - Reduzir JavaScript blocking
- [ ] **CLS** (Cumulative Layout Shift): < 0.1
  - Definir dimensões de imagens
  - Evitar ads/conteúdo que muda de tamanho

**Ferramentas para testar:**
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Google Lighthouse (Chrome DevTools)
- WebPageTest: https://www.webpagetest.org/

### 6. **Content Marketing & Palavras-chave**
- [ ] Pesquisar keywords com semrush.com ou ubersuggest.com
- [ ] **Keywords alvo:**
  - "estruturas metálicas São Paulo"
  - "ferragens estruturais"
  - "pilares metálicos"
  - "pré-laje viaduto"
  - "blocos de sapata"
- [ ] Criar conteúdo blog com 1000+ palavras por artigo
- [ ] Incluir FAQ schema

### 7. **Link Building & Autoridade**
- [ ] Adicionar links internos relevantes
- [ ] Criar blog com artigos otimizados
- [ ] Buscar backlinks de sites de construção
- [ ] Submeter para diretórios de construção civil

### 8. **Mobile Optimization**
- [ ] Testar no Google Mobile-Friendly Test
- [ ] Viewport meta tag (já implementado)
- [ ] Touch-friendly buttons (mínimo 48x48px)
- [ ] Evitar pop-ups intrusivos

### 9. **Integração com Google**
- [ ] Google Search Console: adicionar domínio
  - Enviar sitemap.xml
  - Verificar índice e erros
- [ ] Google Analytics 4: implementar tracking
  - Rastrear conversões (contatos, formulários)
- [ ] Google My Business: criar perfil
  - Adicionar fotos, avaliações
  - Horário de funcionamento

### 10. **Integração com Ferramentas**
- [ ] Schema Markup Validator: https://validator.schema.org/
- [ ] Rich Results Test: https://search.google.com/test/rich-results
- [ ] SEO Meta in 1 Click (Chrome Extension)
- [ ] Screaming Frog (análise técnica)

### 11. **Monitoramento & Análise**
- [ ] Monitorar ranking para keywords alvo
- [ ] Acompanhar CTR no Search Console
- [ ] Analisar comportamento do usuário
- [ ] Implementar conversão tracking

---

## 📊 Palavras-chave Prioritárias

### Local (Tier 1 - Alto Volume, Alta Conversão)
1. "estruturas metálicas São Paulo"
2. "estruturas metálicas Santa Catarina"
3. "ferragens estruturais"
4. "pilares metálicos"

### Específicas de Produto (Tier 2)
1. "pré-laje viaduto"
2. "blocos de sapata"
3. "ferragens sob medida"
4. "estruturas de aço"

### Informacionais (Tier 3 - Blog)
1. "como calcular estruturas metálicas"
2. "tipos de pilares metálicos"
3. "normas ABNT para estruturas"

---

## 📝 Configuração do Google Search Console

1. Acessar: https://search.google.com/search-console
2. Adicionar propriedade com domínio
3. Enviar sitemap.xml
4. Verificar cobertura do índice
5. Monitorar erros de crawl
6. Analisar queries de busca

---

## 🔐 Checklist de Segurança (também afeta SEO)

- [ ] HTTPS ativado (melhor ranking)
- [ ] Certificado SSL válido
- [ ] Headers de segurança (X-Frame-Options, etc)
- [ ] Validação de formulário (segurança + UX)

---

## 📞 Contato & Suporte

Dúvidas sobre SEO? Recursos úteis:
- Google SEO Starter Guide: https://developers.google.com/search/docs
- Moz Guide to SEO: https://moz.com/beginners-guide-to-seo
- Search Engine Journal: https://www.searchenginejournal.com/
