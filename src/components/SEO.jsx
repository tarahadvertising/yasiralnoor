import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage, 
  ogType = 'website',
  structuredData = null 
}) => {
  const siteTitle = 'Yasir Alnoor Contracting LLC';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Leading construction company in Dubai, UAE. Specializing in residential, commercial, and industrial construction with 13+ years of excellence.';
  const defaultImage = 'https://www.yasiralnoorbc.com/og-image.jpg';
  const siteUrl = 'https://www.yasiralnoorbc.com';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Yasir Alnoor Contracting LLC" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || siteUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl || siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={ogImage || defaultImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#005baa" />
      <meta name="msapplication-TileColor" content="#005baa" />
      <meta name="application-name" content={siteTitle} />
      <meta name="apple-mobile-web-app-title" content="Yasir Alnoor" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
