import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private metaService: Meta,
    private titleService: Title
  ) {}

  /**
   * Atualiza a tag de título da página
   */
  setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  /**
   * Atualiza a meta description
   */
  setDescription(description: string): void {
    this.metaService.updateTag(
      { name: 'description', content: description },
      `name='description'`
    );
  }

  /**
   * Atualiza keywords
   */
  setKeywords(keywords: string): void {
    this.metaService.updateTag(
      { name: 'keywords', content: keywords },
      `name='keywords'`
    );
  }

  /**
   * Define o canonical URL
   */
  setCanonical(url: string): void {
    const link = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }

  /**
   * Atualiza Open Graph tags
   */
  setOpenGraph(property: string, content: string): void {
    this.metaService.updateTag(
      { property: `og:${property}`, content },
      `property='og:${property}'`
    );
  }

  /**
   * Configuração completa de SEO para a página
   */
  setPageSeo(
    title: string,
    description: string,
    keywords: string,
    url: string,
    image?: string
  ): void {
    this.setTitle(title);
    this.setDescription(description);
    this.setKeywords(keywords);
    this.setCanonical(url);

    this.setOpenGraph('title', title);
    this.setOpenGraph('description', description);
    this.setOpenGraph('url', url);

    if (image) {
      this.setOpenGraph('image', image);
    }
  }

  /**
   * Insere um script JSON-LD
   */
  insertJsonLd(schema: any): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  /**
   * Schema para LocalBusiness
   */
  setLocalBusinessSchema(business: {
    name: string;
    description: string;
    url: string;
    phone: string;
    email: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    image: string;
    latitude: number;
    longitude: number;
  }): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: business.name,
      image: business.image,
      description: business.description,
      url: business.url,
      telephone: business.phone,
      email: business.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.address.streetAddress,
        addressLocality: business.address.addressLocality,
        addressRegion: business.address.addressRegion,
        postalCode: business.address.postalCode,
        addressCountry: business.address.addressCountry
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: business.latitude,
        longitude: business.longitude
      }
    };

    this.insertJsonLd(schema);
  }

  /**
   * Schema para produto
   */
  setProductSchema(product: {
    name: string;
    description: string;
    image: string;
    category: string;
  }): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: product.image,
      category: product.category
    };

    this.insertJsonLd(schema);
  }
}
