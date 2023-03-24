import { useAnuLocalization } from 'anu/lib';
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

const SEO = (props: Partial<SEOProps>) => {
  const { getTranslation } = useAnuLocalization();

  const defaultProps: SEOProps = {
    description: 'home:mainHeading',
    siteTitle: 'Anu',
  };

  const { title, description, siteTitle, config } = { ...defaultProps, ...props };

  const imageUrl = 'https://anu-mt.vercel.app/img/icon_dark_theme.svg';

  return (
    <Head>
      {title ? <title>{`${getTranslation(title)} | ${siteTitle}`}</title> : <title>{siteTitle}</title>}
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={getTranslation(description)} />
      <meta property='og:image' content={imageUrl} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={getTranslation(description)} />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='twitter:card' content='summary' />
      <meta property='twitter:creator' content={config?.social?.twitter} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={getTranslation(description)} />
    </Head>
  );
};

export default SEO;
