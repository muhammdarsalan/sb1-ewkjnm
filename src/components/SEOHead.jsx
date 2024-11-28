import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEOHead({ 
  title = 'SaltMarket - Premium Gemstones',
  description = 'Your premier destination for premium quality gemstones. Discover our exquisite collection of diamonds, rubies, sapphires, and more.',
  keywords = 'gemstones, diamonds, rubies, sapphires, jewelry, premium stones',
  image = '/gem.svg',
  url = 'https://saltmarket.com'
}) {
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JewelryStore",
          "name": "SaltMarket",
          "description": description,
          "image": image,
          "url": url,
          "telephone": "+923497880632",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Peshawar",
            "addressCountry": "Pakistan"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "34.0151",
            "longitude": "71.5249"
          },
          "openingHours": "Mo-Sa 09:00-18:00"
        })}
      </script>
    </Helmet>
  );
}

export default SEOHead;