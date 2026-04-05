# Prometal

Website profissional e responsivo para a Prometal — empresa especializada em estruturas metálicas sob medida para obras de grande porte. Desenvolvido com foco em performance, experiência do usuário e geração de leads.

---

## 📋 Sobre o Projeto

A **Prometal** é uma empresa brasileira com mais de 15 anos de experiência em fabricação de ferragens estruturais e soluções metálicas para construção civil. Este website foi desenvolvido para:

- ✅ Apresentar os serviços e produtos de forma clara e profissional
- ✅ Gerar leads qualificados através de formulário de orçamento
- ✅ Demonstrar expertise técnica e experiência em grandes obras
- ✅ Oferecer experiência móvel otimizada
- ✅ Melhorar visibilidade online e SEO

---

## 🎯 Produtos & Serviços

| Produto | Descrição |
|---------|-----------|
| **Pilar Estrutural** | Pilares metálicos de alta resistência para edificações e grandes estruturas |
| **Blocos de Sapata** | Blocos de fundação com concreto e ferragem de alta qualidade |
| **Pré-Laje para Viadutos** | Elementos pré-moldados com engenharia de precisão para cargas pesadas |
| **Ferragens Sob Medida** | Produção customizada com dimensionamento técnico e rastreabilidade total |

---

## 🛠️ Stack Tecnológico

| Categoria | Tecnologia |
|-----------|-----------|
| **Framework** | [Angular 21.2](https://angular.dev/) |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [@angular/build](https://angular.dev/tools/build) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Ícones** | [Lucide Angular](https://lucide.dev/) |
| **Gerenciador** | [pnpm](https://pnpm.io/) |
| **Testes** | [Vitest](https://vitest.dev/) |

---

## ✨ Características

- 📱 **Design Responsivo** — Funciona perfeitamente em todos os dispositivos
- 🎨 **UI Profissional** — Design moderno com paleta de cores da marca (verde escuro + lime accent)
- ⚡ **Performance Otimizada** — Standalone components, build otimizada
- 🔍 **SEO Friendly** — Estrutura HTML semântica e meta tags configuradas
- 🎬 **Animações Suaves** — Scroll animations via IntersectionObserver
- 📝 **Formulário de Contato** — Interface intuitiva com validação reativa
- 🧭 **Navegação por Âncoras** — Scroll suave entre seções

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── app.ts                      # Componente root
│   ├── app.html                    # Template das seções
│   ├── app.config.ts               # Configuração standalone
│   ├── components/
│   │   ├── navbar/                 # Header fixo com scroll-aware
│   │   ├── hero/                   # Seção principal com CTA
│   │   ├── clients/                # Marquee de clientes
│   │   ├── products/               # Grid de produtos
│   │   ├── diferenciais/           # Diferenciais da empresa
│   │   ├── processo/               # Etapas do processo
│   │   ├── cta-final/              # Formulário de contato
│   │   └── footer/                 # Rodapé
│   ├── shared/
│   │   └── image-with-fallback.component.ts
│   └── directives/
│       └── scroll-animate.directive.ts
├── public/                         # Assets estáticos
├── styles.css                      # Tailwind + tokens globais
└── main.ts                         # Bootstrap
```

---

## 🚀 Instalação e Configuração

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) v18 ou superior
- [pnpm](https://pnpm.io/) v10+

### Instalação

1. **Clone o repositório:**
   ```bash
   cd Prometal_rewritten
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   ng serve
   ```

   O site estará disponível em `http://localhost:4200`

### Build para Produção

```bash
# Compila para produção (artifacts em dist/)
ng build

# Dev build com watch
ng build --watch
```

---

## 🔧 Scripts Disponíveis

```bash
ng serve       # Inicia servidor de desenvolvimento
ng build       # Compila para produção
ng build --watch  # Dev build com watch
ng test        # Executa testes unitários (Vitest)
```

---

## 📱 Responsividade

O site foi otimizado para todos os breakpoints:

| Dispositivo | Width |
|-------------|-------|
| Mobile | 320px – 768px |
| Tablet | 769px – 1024px |
| Desktop | 1025px+ |

---

## 🎨 Design Tokens

Cores e tipografia definidas em `src/styles.css` via `@theme`:

| Token | Valor |
|-------|-------|
| `brand-dark` | `#0F3D2E` |
| `brand-accent` | `#7ED957` |
| `text-primary` | `#1A1A1A` |
| `text-secondary` | `#6B7280` |
| Fonte headings | `Poppins` |
| Fonte body | `Inter` |

---

## 📧 Suporte e Contato

- **Telefone:** (47) 9 8848-2349
- **Email:** prometal.comercio@gmail.com
- **Localização:** São Paulo, SC — Brasil

---

<div align="center">

**Prometal — Estruturas metálicas com precisão industrial**

</div>
