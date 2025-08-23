import { Helmet } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { Spinner } from '@/components/LoadingAnimation';

// Lazy load non-critical sections
const Projects = lazy(() => import('@/components/Projects'));
const WhyWrlds = lazy(() => import('@/components/WhyWrlds'));
const BlogPreview = lazy(() => import('@/components/BlogPreview'));
const BrandLogoSlider = lazy(() => import('@/components/BrandLogoSlider'));
const ContactInfo = lazy(() => import('@/components/ContactInfo'));

// Section Loading Fallback
const SectionLoader = () => (
  <div className="flex justify-center items-center py-12">
    <Spinner size="md" color="orange" />
  </div>
);

const Index = () => {
  // Structured Data for Homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BLI - Bansal Logistics of India",
    "alternateName": "BLI Rapid",
    "url": "https://www.blirapid.com",
    "description": "Leading logistics and transportation services provider in India. Offering FTL, PTL, 3PL, Warehousing, and Freight solutions across 500+ destinations.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.blirapid.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BLI - Bansal Logistics of India",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.blirapid.com/lovable-uploads/8.png"
      }
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>BLI - Bansal Logistics of India | Trusted Logistics Partner Since 25+ Years</title>
        <meta
          name="description"
          content="BLI offers comprehensive logistics solutions across India. Full Truck Load, Part Load, 3PL Distribution, Warehousing & Freight services. Real-time tracking, 500+ destinations, 25+ years of excellence."
        />
        <meta
          name="keywords"
          content="logistics services india, BLI logistics, bansal logistics, transportation company vapi, full truck load, part load services, 3PL logistics india, warehousing gujarat, freight forwarding, supply chain management"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="BLI - Bansal Logistics of India | Your Trusted Logistics Partner" />
        <meta property="og:description" content="Experience seamless logistics with BLI. 25+ years of excellence in FTL, PTL, 3PL, Warehousing & Freight services across India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.blirapid.com" />
        <meta property="og:image" content="https://www.blirapid.com/og-home-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BLI - Bansal Logistics of India" />
        <meta name="twitter:description" content="Leading logistics solutions provider. FTL, PTL, 3PL, Warehousing & Freight services across 500+ Indian destinations." />
        <meta name="twitter:image" content="https://www.blirapid.com/twitter-home-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.blirapid.com" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <PageLayout>
        {/* Critical above-the-fold content - No lazy loading */}
        <Hero />
        <Features />

        {/* Lazy load below-the-fold content */}
        <Suspense fallback={<SectionLoader />}>
          <BrandLogoSlider />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <WhyWrlds />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <BlogPreview />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ContactInfo />
        </Suspense>
      </PageLayout>
    </>
  );
};

export default Index;