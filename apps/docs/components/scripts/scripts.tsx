/* eslint-disable turbo/no-undeclared-env-vars */
import NextScript from 'next/script';

const Script = () => {
  return (
    <>
      <NextScript
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <NextScript
        id='google_analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
			    gtag('js', new Date());
				gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`,
        }}
      />
      {/* {End of GA Scripts} */}

      {/* {GTM Scripts} */}
      <NextScript
        id='google_tag_manager'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}');`,
        }}
      />
      {/* {End of GTM Scripts} */}
    </>
  );
};

export default Script;
