import { Helmet } from 'react-helmet-async';

// ─── Constants ─────────────────────────────────────────────
const BASE_URL = 'https://www.coirei.com';
const ORG_NAME = 'Coirei';
const ORG_LOGO = `${BASE_URL}/coirei-cirlce-logo.png`;

// ─── Organization + WebSite Schema (Global — use in App.tsx) ───
export function OrgSchema() {
  const orgData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG_NAME,
    url: BASE_URL,
    logo: ORG_LOGO,
    description: 'AI-native execution platform and deep tech software solutions company.',
    foundingDate: '2025',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.linkedin.com/company/coirei',
     
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: `${BASE_URL}/contact-sales`,
    },
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: ORG_NAME,
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(orgData)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteData)}</script>
    </Helmet>
  );
}

// ─── Service Schema (use on each service sub-page) ─────────
interface ServiceSchemaProps {
  name: string;
  url: string;
  description: string;
}

export function ServiceSchema({ name, url, description }: ServiceSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    url,
    description,
    provider: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

// ─── Breadcrumb Schema (use on service + blog pages) ───────
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

// ─── Blog Posting Schema (use on each blog detail page) ────
interface BlogSchemaProps {
  title: string;
  description: string;
  date: string;
  author?: string;
  url: string;
  image?: string;
}

export function BlogSchema({ title, description, date, author = 'Hariharan', url, image }: BlogSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    url,
    ...(image && { image }),
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: {
        '@type': 'ImageObject',
        url: ORG_LOGO,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

// ─── FAQ Schema (use on homepage) ──────────────────────────
export function FaqSchema() {
  const faqs = [
    {
      question: 'What services does Coirei offer?',
      answer:
        'Coirei offers custom web and platform development, custom business application development, AI chatbot development, process automation and system integration, business intelligence dashboard development, and UI/UX branding and product design services.',
    },
    {
      question: 'Where is Coirei located?',
      answer:
        'Coirei is headquartered in Chennai, Tamil Nadu, India. We serve clients globally with AI-native execution platforms and deep tech software solutions.',
    },
    {
      question: 'What industries does Coirei serve?',
      answer:
        'Coirei serves a wide range of industries including healthcare, finance, manufacturing, education, logistics, and e-commerce with intelligent software solutions and deep tech engineering.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on scope and complexity. A standard web application typically takes 4–8 weeks, while enterprise platforms and AI-integrated systems may take 3–6 months.',
    },
  ];

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
