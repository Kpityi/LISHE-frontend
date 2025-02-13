import { Helmet } from 'react-helmet-async';

const SiteHelmet = ({
  title = 'LISHE - Honvéd Sporthorgász Egyesület',
  description = 'Lishe.hu – Horgászat, szabályok, hírek és árak.',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={window.location.href} />
      <meta name="author" content="László István Honvéd Sporthorgász Egyesület" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="László István Honvéd Sporthorgász Egyesület" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://lishe.hu/LISHE_logo.png" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SiteHelmet;
