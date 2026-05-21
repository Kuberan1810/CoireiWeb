import { Helmet } from 'react-helmet-async';

interface Breadcrumb {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  name?: string;
  type?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function SEO({ title, description, keywords, type = "website", breadcrumbs }: SEOProps) {
  
  // Generate Breadcrumb Schema if breadcrumbs exist
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* End standard metadata tags */}
      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Open Graph tags */}

      {/* Twitter tags */}
      {/* <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} /> */}
      {/* End Twitter tags */}

      {/* JSON-LD Schemas */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
