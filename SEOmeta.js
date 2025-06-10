// components/SEOMeta.js
import React from 'react';
import { Helmet } from 'react-helmet';

const SEOMeta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title} | Rx Cart</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={`${title} | Rx Cart`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Rx Cart`} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEOMeta;
