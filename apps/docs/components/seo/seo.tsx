import Head from 'next/head';

interface SEOProps {
  title?: string;
  description: string;
  siteTitle: string;
  config?: {
    social?: {
      twitter: string;
    };
  };
}

const defaultProps: SEOProps = {
  description: 'Component library inspired by Material Design. Built for Web, iOS and Android',
  siteTitle: 'Anu',
};

const SEO = (props: Partial<SEOProps>) => {
  const { title, description, siteTitle, config } = { ...defaultProps, ...props };

  return (
    <Head>
      {title ? <title>{`${title} | ${siteTitle}`}</title> : <title>{siteTitle}</title>}
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='twitter:card' content='summary' />
      <meta property='twitter:creator' content={config?.social?.twitter} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
    </Head>
  );
};

export default SEO;
