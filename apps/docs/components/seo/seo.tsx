import { useAnuLocalization } from 'anu/lib/advanced/smart-localization';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
  const { locale } = useRouter();

  const { getTranslation } = useAnuLocalization();

  const defaultProps: SEOProps = {
    description: 'home:mainHeading',
    siteTitle: 'Aṇu',
  };

  const { title, siteTitle, config } = { ...defaultProps, ...props };

  const imageUrl = 'https://anu-mt.vercel.app/img/icon_dark_theme.png';

  const translatedDescription =
    locale === 'fr'
      ? 'Bibliothèque de composants pour React Native et React Native Web'
      : 'Component library for React Native and React Native Web';

  return (
    <Head>
      {title ? (
        <title>{`${getTranslation(title)} | ${siteTitle} - ${translatedDescription}`}</title>
      ) : (
        <title>{siteTitle + ' - ' + translatedDescription}</title>
      )}
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={translatedDescription} />
      <meta property='og:image' content={imageUrl} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={translatedDescription} />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='twitter:card' content='summary' />
      <meta property='twitter:creator' content={config?.social?.twitter} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={translatedDescription} />
    </Head>
  );
};

export default SEO;
